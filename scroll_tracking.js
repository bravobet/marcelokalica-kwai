// Script para rastrear visualização de conteúdo - apenas um evento viewcontent
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um momento para garantir que o pixel do Kwai esteja carregado
    setTimeout(function() {
        // Verificar se o objeto kwaiq está disponível
        if (typeof kwaiq !== 'undefined') {
            // Disparar um único evento viewcontent
            kwaiq.track('view_content', { 'pagina': 'landing_page_marcelo_kalica' });
            console.log('Evento viewcontent registrado');
        }
    }, 1000); // Aguardar 1 segundo para garantir que o pixel esteja carregado
});
