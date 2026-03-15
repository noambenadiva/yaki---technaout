document.addEventListener('DOMContentLoaded', function () {
  // Handle contact form submission (Client-side only for demo)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      if (!name || !phone || !message) {
        showResponse('נא למלא את כל השדות.', false);
        return;
      }
      showResponse('תודה על פנייתך! נחזור אליך בהקדם.', true);
      form.reset();
    });
    function showResponse(msg, success) {
      const resp = document.getElementById('formResponse');
      resp.textContent = msg;
      resp.style.color = success ? 'green' : 'red';
      resp.style.marginTop = '10px';
    }
  }
});
