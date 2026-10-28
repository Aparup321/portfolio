(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-email');
      const done = () => {
        copyBtn.textContent = 'Copied!';
        window.setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1500);
      };
      const fallback = () => {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          done();
        } catch {
          // Clipboard access is optional; the email link remains available.
        }
        textarea.remove();
      };

      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(email).then(done).catch(fallback);
      } else {
        fallback();
      }
    });
  }

  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    const submitButton = document.getElementById('contact-submit');

    const openMailFallback = () => {
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-message').value.trim();
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:aparupsantra2004@gmail.com?subject=${subject}&body=${body}`;
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (form.dataset.submitting === 'true') return;
      form.dataset.submitting = 'true';
      if (status) {
        status.textContent = 'Sending your message…';
        status.className = 'form-status';
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending…';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

        form.reset();
        if (status) {
          status.textContent = 'Thanks — your message was sent successfully.';
          status.className = 'form-status is-success';
        }
      } catch {
        if (status) {
          status.textContent = 'Online delivery was unavailable. Opening your email client instead…';
          status.className = 'form-status is-error';
        }
        openMailFallback();
      } finally {
        form.dataset.submitting = 'false';
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Send Message';
        }
      }
    });
  }
})();
