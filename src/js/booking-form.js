/**
 * Booking Form Validation and WhatsApp/Tel Link Dispatcher
 */
export function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const phoneInput = document.getElementById('guestPhone');
  const nameInput = document.getElementById('guestName');
  const timeInput = document.getElementById('bookingTime');
  const messageInput = document.getElementById('specialMessage');
  const submitBtn = document.getElementById('bookTableSubmitBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const time = timeInput.value.trim();
    const message = messageInput ? messageInput.value.trim() : '';

    // Validation
    if (!name) {
      alert('Please enter your full name for the reservation.');
      nameInput.focus();
      return;
    }

    if (!phone || phone.length < 8) {
      alert('Please enter a valid contact phone number.');
      phoneInput.focus();
      return;
    }

    if (!time) {
      alert('Please enter your preferred dining time (Note: Opens 11 am).');
      timeInput.focus();
      return;
    }

    // Prepare WhatsApp Message
    const textLines = [
      `*Table Booking Request - Fork & Knife Cafe Dehradun*`,
      `---------------------------------------`,
      `*Guest Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Preferred Time:* ${time}`,
      message ? `*Notes/Special Request:* ${message}` : `*Notes:* Standard table booking`
    ];

    const encodedText = encodeURIComponent(textLines.join('\n'));
    const whatsappUrl = `https://wa.me/919761414360?text=${encodedText}`;

    // Visual Feedback
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Opening WhatsApp...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      // Open WhatsApp or fallback
      window.open(whatsappUrl, '_blank');
      submitBtn.innerHTML = `<span>Table Request Sent!</span>`;
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
      }, 3000);
    }, 600);
  });
}
