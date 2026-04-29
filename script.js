const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = '#ff6b6b';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = '#ff6b6b';
    return;
  }

  formMessage.textContent = 'Message sent successfully! (Demo mode)';
  formMessage.style.color = '#52ffa8';
  form.reset();
});

new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Python', 'SQL', 'ML', 'Power BI', 'Statistics'],
    datasets: [
      {
        label: 'Skill Confidence (%)',
        data: [88, 80, 75, 78, 82],
        backgroundColor: '#33d1ff'
      }
    ]
  },
  options: {
    plugins: { legend: { labels: { color: '#e6f1ff' } } },
    scales: {
      x: { ticks: { color: '#9bb3d1' } },
      y: { ticks: { color: '#9bb3d1' }, beginAtZero: true, max: 100 }
    }
  }
});

new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [1, 1, 2, 3, 3, 4],
        borderColor: '#4f7cff',
        backgroundColor: 'rgba(79, 124, 255, 0.3)',
        fill: true,
        tension: 0.35
      }
    ]
  },
  options: {
    plugins: { legend: { labels: { color: '#e6f1ff' } } },
    scales: {
      x: { ticks: { color: '#9bb3d1' } },
      y: { ticks: { color: '#9bb3d1' }, beginAtZero: true }
    }
  }
});

new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Data Cleaning', 'Modeling', 'Visualization', 'Reporting'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ['#33d1ff', '#4f7cff', '#52ffa8', '#9d7dff']
      }
    ]
  },
  options: {
    plugins: { legend: { labels: { color: '#e6f1ff' } } }
  }
});
