# Portfolio — Lucas Kaeufling

Présentation rapide
- Site statique (HTML / CSS / JS) présentant le portfolio, les compétences, les projets et un contact par email.
- Conçu pour être léger, responsive et accessible.

Contenu principal
- index.html — page principale.
- style.css — styles globaux.
- script.js — comportements (animations, formulaire → mailto, skip-to-text).
- privacy.html — politique de confidentialité minimale.
- sitemap.xml — plan du site pour les moteurs de recherche.
- assets/ (images, icônes, etc.)

Tech stack
- HTML5, CSS3, JavaScript (vanilla).
- Optionnel : hébergement statique (GitHub Pages, Netlify, Vercel, ...).

Installation / aperçu local
- Ouvrir index.html directement dans un navigateur.
- Ou servir localement (recommandé) :
  - Avec Python (Windows) : `python -m http.server 8000` puis visiter http://localhost:8000
  - Avec un serveur simple (npm) : `npx serve` (si installé)

Personnalisation — éléments à vérifier/mettre à jour
- Mettre à jour les balises SEO/Open Graph dans `index.html` :
  - canonical, og:url, og:image → remplacer `https://votre-domaine.com` par votre domaine.
- Vérifier les chemins d'images et icônes (dossier `icons_contact/`, `BACKGROUND/`, etc.).
- Si vous activez un formulaire externe (Formspree, EmailJS), ajouter la mention appropriée dans `privacy.html`.

Confidentialité & RGPD
- Le site utilise un envoi par mail (mailto) : aucune donnée n’est stockée sur ce site par défaut.
- `privacy.html` fournit une notice minimale; l’adapter si vous activez un service tiers de collecte de données.

Déploiement
- Hébergement statique (drop des fichiers) : GitHub Pages, Netlify, Vercel.
- Ajouter `robots.txt` et vérifier `sitemap.xml` pour indexation.

Contribuer
- Repo local : modifier les fichiers, tester, puis committer/pusher.
- Suggestions ou corrections : ouvrir une issue ou un pull request.

Licence
- Ajouter une licence (ex : MIT) si vous souhaitez autoriser la réutilisation.

Contact
- Email : lucas.kaeufling@orange.fr (déjà présent sur le site)

---