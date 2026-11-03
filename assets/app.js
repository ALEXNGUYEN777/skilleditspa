(() => {
  const dialog = document.getElementById('payment-dialog');
  let opener;
  document.addEventListener('click', async (event) => {
    const open = event.target.closest('[data-open-payment]');
    if (open && dialog) {
      opener = open;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    }
    if (event.target.closest('[data-close-payment]')) dialog?.close();
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    }
    const copy = event.target.closest('[data-copy]');
    if (copy) {
      const original = copy.textContent;
      try {
        if (window.isSecureContext && navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(copy.dataset.copy);
        } else {
          const field = document.createElement('textarea');
          field.value = copy.dataset.copy;
          field.style.cssText = 'position:fixed;left:0;top:0;opacity:0';
          (dialog?.open ? dialog : document.body).appendChild(field);
          field.select();
          const copied = document.execCommand('copy');
          field.remove();
          copy.focus();
          if (!copied) throw new Error('Clipboard unavailable');
        }
        copy.textContent = 'Đã chép';
      } catch {
        copy.textContent = 'Hãy chép thủ công';
      }
      setTimeout(() => copy.textContent = original, 1500);
    }
    const question = event.target.closest('[data-faq]');
    if (question) {
      const shouldOpen = question.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('[data-faq]').forEach(button => {
        const panel = button.closest('h3').nextElementSibling;
        const open = button === question && shouldOpen;
        button.setAttribute('aria-expanded', String(open));
        button.dataset.state = open ? 'open' : 'closed';
        panel.hidden = !open;
        panel.dataset.state = open ? 'open' : 'closed';
      });
    }
  });
  dialog?.addEventListener('close', () => {
    document.documentElement.style.overflow = '';
    opener?.focus();
  });
  document.addEventListener('keydown', event => {
    const question = event.target.closest('[data-faq]');
    if (!question || !['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const list = [...document.querySelectorAll('[data-faq]')];
    const index = list.indexOf(question);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? list.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length;
    list[next].focus();
  });
})();
