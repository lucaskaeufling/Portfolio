/*fetch('http://localhost:8080/api/projects')
  .then(res => res.json())
  .then(data => {
      const container = document.querySelector('.projects-container');
      data.forEach(project => {
          const card = document.createElement('div');
          card.classList.add('project-card');
          card.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}" target="_blank">Voir le projet</a>
          `;
          container.appendChild(card);
      });
  })
  .catch(err => console.error("Erreur chargement projets:", err));*/


document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // évite que ça rejoue à chaque scroll
            }
        });
    }, { threshold: 0.2 });

    faders.forEach(fader => observer.observe(fader));
});

const counters = document.querySelectorAll('.skill-percent');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target.querySelector('.skill-level');
            const percent = entry.target.querySelector('.skill-percent');
            const level = parseInt(bar.getAttribute('data-level'));
            const color = bar.getAttribute('data-color') || "#4CAF50"; // couleur par défaut si rien

            // couleur personnalisée
            bar.style.backgroundColor = color

            // animation de la barre
            bar.style.width = level + "%";

            // animation du compteur %
            let start = 0;
            const step = () => {
                start++;
                percent.textContent = start + "%";
                if (start < level) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);

            obs.unobserve(entry.target);
        }

        if(entry.isIntersecting){
            const children = [...entry.target.querySelectorAll('.software-card, .project-card, .education-card')];
            children.forEach((el,i)=> setTimeout(()=> el.classList.add('show'), i*100));
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });


document.querySelectorAll('.skill').forEach(skill => observer.observe(skill));

document.addEventListener("DOMContentLoaded", () => {
    const softwareCards = document.querySelectorAll('.software-card');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    softwareCards.forEach(card => observer.observe(card));
});

const toggle = document.querySelector('.switch .input');
const root = document.documentElement;
let saved = localStorage.getItem('theme');
if (!saved) { saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
root.setAttribute('data-theme', saved);
if (toggle) {
  toggle.checked = saved === 'dark';
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}


function animateCounter(el, target, duration=1200){
  let start=0, startTime=null;
  function step(ts){
    if(!startTime) startTime = ts;
    const progress = Math.min((ts-startTime)/duration,1);
    el.textContent = Math.floor(progress * target);
    if(progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const statItems = document.querySelectorAll('.stat-value');
const obsStats = new IntersectionObserver((entries, obs)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      animateCounter(e.target, parseInt(e.target.dataset.target));
      obs.unobserve(e.target);
    }
  });
},{threshold:0.4});
statItems.forEach(s => obsStats.observe(s));


document.querySelectorAll('.faq-q').forEach(btn=>{
 btn.addEventListener('click', ()=> {
   btn.classList.toggle('open');
   const a = btn.nextElementSibling;
   a.style.maxHeight = a.style.maxHeight ? null : a.scrollHeight+'px';
 });
});

function downloadCV() {
    const link = document.createElement("a");
    link.href = "CV/LucasKaeuflingCV.pdf";   // chemin vers ton CV
    link.download = "LucasKAEUFLING_CV.pdf"; // nom du fichier au téléchargement
    link.click();
}

function downloadCV_Deutsch() {
    const link = document.createElement("a");
    link.href = "CV/LucasKaeuflingCV_DE.pdf";   // chemin vers ton CV
    link.download = "LucasKAEUFLING_Lebenslauf.pdf"; // nom du fichier au téléchargement
    link.click();
}

function downloadCV_English() {
    const link = document.createElement("a");
    link.href = "CV/LucasKaeuflingCV_EN.pdf";   // chemin vers ton CV
    link.download = "LucasKAEUFLING_CV.pdf"; // nom du fichier au téléchargement
    link.click();
}

const block = document.getElementById('CV_BLOCK');
const txtCV = document.getElementById('TextCV');
const offsetTop = block.offsetTop - 100; // position initiale

window.addEventListener('scroll', () => {
  const screenWidth = window.innerWidth; // largeur de l'écran

  if (screenWidth > 1500) { // tu choisis la largeur minimale
    if (window.scrollY > offsetTop) {
      // devient fixe à gauche
      block.style.position = 'fixed';
      block.style.top = '190px';
      block.style.transform = 'translateX(-640px)';
      block.style.maxWidth = '200px';
      txtCV.classList.add('hidden');
    } else if (window.scrollY < offsetTop - 50) {
      // revient à sa position normale
      block.style.position = 'static';
      block.style.top = '80px';
      block.style.transform = 'translateX(0px)';
      block.style.maxWidth = '800px';
      txtCV.classList.remove('hidden');
    }
  } else {
    // pour les écrans plus petits, il reste normal
    block.style.position = 'static';
    block.style.top = 'auto';
    block.style.transform = 'none';
    block.style.maxWidth = '100%';
    txtCV.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Skip-to-text: on mobile, jump instantly to #TextCV (no smooth)
  const skipBtn = document.getElementById('skip-to-text');
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      const isSmall = window.matchMedia('(max-width: 768px)').matches;
      if (isSmall) {
        e.preventDefault();
        const target = document.getElementById('TextCV');
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          // update hash without triggering browser-smooth behaviour
          history.replaceState(null, '', '#TextCV');
        }
      }
      // for larger screens do nothing special (anchor + page smooth will apply)
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Contact form handling (Formspree)
  const form = document.getElementById('contact-form');
  if (form) {
    const successEl = form.querySelector('.form-success');
    const errorEl = form.querySelector('.form-error');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      // basic validation
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      const consent = form.querySelector('[name="consent"]');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim() || !consent.checked) {
        errorEl.textContent = 'Veuillez remplir tous les champs obligatoires et accepter le consentement.';
        errorEl.style.display = 'block';
        successEl.style.display = 'none';
        return;
      }
      // submit
      try {
        const data = new FormData(form);
        const resp = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          successEl.style.display = 'block';
          errorEl.style.display = 'none';
          form.reset();
        } else {
          const json = await resp.json().catch(()=>null);
          errorEl.textContent = (json && json.error) ? json.error : 'Erreur lors de l\'envoi.';
          errorEl.style.display = 'block';
          successEl.style.display = 'none';
        }
      } catch (err) {
        errorEl.textContent = 'Erreur réseau. Réessayez plus tard.';
        errorEl.style.display = 'block';
        successEl.style.display = 'none';
      }
    });
  }
});