import { cookies } from 'next/headers';
import crypto from 'crypto';
import { login as apiLogin, setupAdmin as apiSetupAdmin } from './labApi.js';

const COOKIE_NAME = 'lab_hw_session';
const FALLBACK_KEY = 'lab-hardware-local-key-2026';

function getKey() {
  return process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || FALLBACK_KEY;
}

function sign(payload) {
  return crypto.createHmac('sha256', getKey()).update(payload).digest('hex');
}

function encodeSession(data) {
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

function decodeSession(value) {
  if (!value || !value.includes('.')) return null;
  const [payload, signature] = value.split('.');
  if (!payload || !signature || sign(payload) !== signature) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!data?.id || !data?.username) return null;
    return data;
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  return decodeSession(cookieStore.get(COOKIE_NAME)?.value);
}

export async function requireSession() {
  return await getSession();
}

export async function setSession(user) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, encodeSession({ id: user.id, username: user.username, tipo: user.tipo }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 28800,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function verifyLogin(username, password) {
  return await apiLogin(username, password);
}

export async function createAdmin(username, password) {
  return await apiSetupAdmin(username, password);
}
