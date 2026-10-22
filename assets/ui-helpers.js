// UI Helper: Toasts e Modais elegantes (substitutos de alert() e prompt())
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 right-6 z-[9999] flex flex-col space-y-3 pointer-events-none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    const isWarning = type === 'warning';
    
    toast.className = `pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0 flex items-center space-x-3 px-5 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl text-xs font-semibold max-w-sm ${
        isSuccess ? 'bg-card/95 border-emerald-500/40 text-emerald-300' : 
        (isWarning ? 'bg-card/95 border-amber-500/40 text-amber-300' : 'bg-card/95 border-bronze/40 text-white')
    }`;
    
    const icon = isSuccess ? '✓' : (isWarning ? '⚠️' : 'ℹ️');
    toast.innerHTML = `<span class="text-base">${icon}</span><span>${message}</span>`;
    
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

// Modal Elegante Genérico
function showModal({ title, subtitle, contentHtml, onConfirm, confirmText = 'Confirmar' }) {
    let modalOverlay = document.getElementById('luxury-modal-overlay');
    if (modalOverlay) modalOverlay.remove();

    modalOverlay = document.createElement('div');
    modalOverlay.id = 'luxury-modal-overlay';
    modalOverlay.className = 'fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 opacity-0 transition-opacity duration-300';

    modalOverlay.innerHTML = `
        <div class="bg-card border border-bronze/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl transform scale-95 transition-transform duration-300 relative text-left">
            <button onclick="closeLuxuryModal()" class="absolute top-5 right-5 text-white/40 hover:text-white text-lg">✕</button>
            <span class="text-[10px] uppercase tracking-widest text-bronze font-bold block mb-1">Recôncavo Prime Exclusive</span>
            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">${title}</h3>
            ${subtitle ? `<p class="text-xs text-white/60 mb-6">${subtitle}</p>` : ''}
            <div class="text-xs text-white/80 leading-relaxed mb-6 space-y-3">${contentHtml}</div>
            <div class="flex justify-end space-x-3 pt-4 border-t border-white/10">
                <button onclick="closeLuxuryModal()" class="px-5 py-2.5 rounded-full border border-white/15 text-white/70 hover:text-white text-xs font-semibold">Fechar</button>
                ${onConfirm ? `<button id="modal-confirm-btn" class="px-6 py-2.5 bg-bronze hover:bg-bronze-hover text-obsidian rounded-full text-xs font-bold uppercase tracking-wider transition">${confirmText}</button>` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    if (onConfirm) {
        document.getElementById('modal-confirm-btn').onclick = () => {
            onConfirm();
            closeLuxuryModal();
        };
    }

    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        modalOverlay.querySelector('div').classList.remove('scale-95');
        modalOverlay.querySelector('div').classList.add('scale-100');
    }, 10);
}

function closeLuxuryModal() {
    const modal = document.getElementById('luxury-modal-overlay');
    if (modal) {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.remove(), 300);
    }
}
