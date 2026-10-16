'use server';

import { redirect } from 'next/navigation';
import { clearSession, setSession, verifyLogin } from '../../lib/auth.js';

export async function loginAction(formData) {
  const userName = String(formData.get('username') || '').trim();
  const pw = String(formData.get('password') || '');
  if (!userName || !pw) redirect('/login?erro=preencha');
  try {
    const user = await verifyLogin(userName, pw);
    if (!user) redirect('/login?erro=login');
    await setSession(user);
  } catch {
    redirect('/login?erro=api');
  }
  redirect('/dashboard');
}

export async function logoutAction() {
  await clearSession();
  redirect('/login');
}
