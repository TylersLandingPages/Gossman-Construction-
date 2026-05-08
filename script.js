document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal-on-scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value.trim();

    if (!name || (!email && !phone)) {
      alert('Please include your name and either an email or phone number.');
      return;
    }

    const subject = encodeURIComponent(`Quote Request: ${project} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${project}\n\nDetails:\n${message}`
    );
    window.location.href = `mailto:jgossman.2909@gmail.com?subject=${subject}&body=${body}`;
  }
