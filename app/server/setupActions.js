'use server';

import { redirect } from 'next/navigation';
import { createAdmin } from '../../lib/auth.js';

export async function setupAdminAction(formData) {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');
  if (!username || password.length < 6) redirect('/setup?erro=dados');
  try {
    await createAdmin(username, password);
  } catch {
    redirect('/setup?erro=api');
  }
  redirect('/login?setup=ok');
}
