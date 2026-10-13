# SecurEvo

Site vitrine statique disponible en français, anglais et arabe. Aucun framework, serveur ou dépendance à installer.

## Langues

Le sélecteur dans la navigation permet de changer de langue. Le choix est mémorisé dans le navigateur et l’arabe active automatiquement la lecture de droite à gauche.

## Déploiement

Publiez le contenu de ce dossier sur n’importe quel hébergement de sites statiques, par exemple GitHub Pages, Netlify, Cloudflare Pages ou un hébergement mutualisé. Le fichier `index.html` est le point d’entrée. Les images livrées dans `assets/` sont locales au projet.

## Déploiement sur Render

1. Connectez votre compte GitHub à Render.
2. Dans le Dashboard Render, choisissez **New > Blueprint** et sélectionnez `NizarBourzaim/SecurEvo`.
3. Render détecte `render.yaml`. Vérifiez le service statique `securevo`, puis appliquez le Blueprint.
4. Une fois le premier déploiement terminé, ouvrez l’URL `onrender.com` fournie par Render.

Le site publie les fichiers du dépôt sans étape de compilation. Les futurs commits sur `main` déclenchent automatiquement un nouveau déploiement.

## Formulaire de contact

Le formulaire prépare un courriel adressé à `nizar.bourzaim2@gmail.com` dans l’application de messagerie du visiteur. Le visiteur doit confirmer l’envoi ; le site ne stocke ni n’envoie de données depuis un serveur. Une solution de formulaire hébergée peut être connectée ultérieurement si vous souhaitez recevoir les demandes sans application de messagerie.