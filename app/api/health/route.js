import { NextResponse } from 'next/server';
import { healthCheck } from '../../../lib/labApi.js';

export async function GET() {
  const health = await healthCheck();
  return NextResponse.json({
    app: 'laboratorio-hardware-2025',
    runtime: 'nextjs-edge-api-client',
    ...health,
  }, { status: health.ok ? 200 : 503 });
}
