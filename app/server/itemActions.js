'use server';

import { redirect } from 'next/navigation';
import { createItem } from '../../lib/labApi.js';

export async function createItemAction(formData) {
  const codigo = String(formData.get('codigo_patrimonio') || '').trim();
  const nome = String(formData.get('nome') || '').trim();
  if (!codigo || !nome) redirect('/itens/novo?erro=dados');
  try {
    await createItem({
      codigo_patrimonio: codigo,
      nome,
      tipo_id: String(formData.get('tipo_id') || '').trim() || null,
      status: String(formData.get('status') || 'disponivel').trim(),
      descricao: String(formData.get('descricao') || '').trim() || null,
      localizacao: String(formData.get('localizacao') || '').trim() || null,
    });
  } catch {
    redirect('/itens/novo?erro=api');
  }
  redirect('/itens?ok=criado');
}
