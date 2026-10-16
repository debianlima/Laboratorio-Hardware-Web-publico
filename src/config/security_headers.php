<?php

/**
 * Cabeçalhos defensivos globais.
 *
 * A aplicação ainda usa Bootstrap/QRCode por CDN e possui alguns estilos/scripts inline.
 * Por isso a CSP foi definida de forma compatível com o estado atual do projeto,
 * sem bloquear as telas existentes.
 */
function aplicarCabecalhosSeguranca(): void
{
    if (headers_sent()) {
        return;
    }

    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('Permissions-Policy: camera=(), microphone=(), geolocation=()');

    $csp = implode('; ', [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
        "img-src 'self' data:",
        "font-src 'self' https://cdn.jsdelivr.net data:",
        "connect-src 'self'",
        "frame-ancestors 'self'",
        "base-uri 'self'",
        "form-action 'self'",
    ]);

    header('Content-Security-Policy: ' . $csp);
}

aplicarCabecalhosSeguranca();
