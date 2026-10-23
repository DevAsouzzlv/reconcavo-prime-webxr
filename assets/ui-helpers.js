// UI Helper: Toasts, Modais elegantes e Sanitização XSS (OWASP A03)
function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}
window.escapeHTML = escapeHTML;

// Fecha modal com a tecla ESC (WCAG 2.1 Acessibilidade)
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLuxuryModal();
    }
});

function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-[9999] flex flex-col space-y-2 pointer-events-none items-center sm:items-end';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    const isWarning = type === 'warning';
    
    toast.className = `pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0 flex items-center space-x-3 px-5 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl text-xs font-semibold w-full sm:w-auto sm:max-w-md ${
        isSuccess ? 'bg-card/95 border-emerald-500/50 text-emerald-200' : 
        (isWarning ? 'bg-card/95 border-amber-500/50 text-amber-200' : 'bg-card/95 border-bronze/50 text-stone-100')
    }`;
    
    const icon = isSuccess ? '✓' : (isWarning ? '⚠️' : 'ℹ️');
    toast.innerHTML = `<span class="text-base flex-shrink-0">${icon}</span><span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}

// Modal Elegante Genérico com Backdrop Click e Scroll Mobile
function showModal({ title, subtitle, contentHtml, onConfirm, confirmText = 'Confirmar' }) {
    let modalOverlay = document.getElementById('luxury-modal-overlay');
    if (modalOverlay) modalOverlay.remove();

    modalOverlay = document.createElement('div');
    modalOverlay.id = 'luxury-modal-overlay';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-label', title || 'Janela de Diálogo');
    modalOverlay.className = 'fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 opacity-0 transition-opacity duration-300 overflow-y-auto';

    modalOverlay.innerHTML = `
        <div class="bg-card border border-bronze/40 rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl transform scale-95 transition-transform duration-300 relative text-left my-auto">
            <button onclick="closeLuxuryModal()" aria-label="Fechar janela" class="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white text-sm transition">✕</button>
            <span class="text-[10px] uppercase tracking-widest text-bronze font-bold block mb-1">Recôncavo Prime Exclusive</span>
            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-white mb-1 pr-8">${title}</h3>
            ${subtitle ? `<p class="text-xs text-stone-300 mb-5">${subtitle}</p>` : ''}
            <div class="text-xs sm:text-sm text-stone-200 leading-relaxed mb-6 space-y-3">${contentHtml}</div>
            <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:space-x-3 pt-4 border-t border-white/10">
                <button onclick="closeLuxuryModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/15 text-white/80 hover:text-white text-xs font-semibold text-center transition">Fechar</button>
                ${onConfirm ? `<button id="modal-confirm-btn" class="w-full sm:w-auto px-6 py-2.5 bg-bronze hover:bg-bronze-hover text-obsidian rounded-full text-xs font-bold uppercase tracking-wider transition text-center shadow-lg">${confirmText}</button>` : ''}
            </div>
        </div>
    `;

    // Fecha ao clicar fora do container do modal (backdrop click)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeLuxuryModal();
        }
    });

    document.body.appendChild(modalOverlay);

    if (onConfirm) {
        document.getElementById('modal-confirm-btn').onclick = () => {
            onConfirm();
            closeLuxuryModal();
        };
    }

    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        const cardEl = modalOverlay.querySelector('div');
        if (cardEl) {
            cardEl.classList.remove('scale-95');
            cardEl.classList.add('scale-100');
        }
    }, 10);
}

function closeLuxuryModal() {
    const modal = document.getElementById('luxury-modal-overlay');
    if (modal) {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.remove(), 300);
    }
}
