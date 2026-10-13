const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation-principale");
const languageSelect = document.querySelector("#language-select");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const translations = {
  fr: {
    pageTitle: "SecurEvo — Construire, sécuriser, faire évoluer",
    metaDescription: "SecurEvo accompagne vos projets en génie civil, import-export, formation SHI, matériel de sécurité, électricité et création de sites web.",
    ogTitle: "SecurEvo — Construire, sécuriser, faire évoluer",
    ogDescription: "Des solutions concrètes pour vos projets, vos équipes et vos activités.",
    skipLink: "Aller au contenu", brandLabel: "SecurEvo, accueil", menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu",
    mainNavigation: "Navigation principale", navServices: "Nos services", navApproach: "Notre approche", navContact: "Contact", languageLabel: "Langue", navCta: "Parlons de votre projet",
    heroImageAlt: "Équipe en intervention sur un chantier de construction", heroEyebrow: "Expertise multidisciplinaire",
    heroLead: "Construire avec méthode.<br>Protéger avec exigence.",
    heroCopy: "Du chantier aux outils numériques, nous faisons avancer vos projets avec des solutions fiables, adaptées à vos réalités.",
    heroServicesCta: "Découvrir nos services", heroContactCta: "Un besoin précis ?", heroCaption: "Des solutions, un même engagement",
    domainsLabel: "Domaines d’intervention", introTitle: "Un partenaire pour vos projets", tagConstruction: "Construction", tagSafety: "Sécurité", tagEnergy: "Énergie", tagDigital: "Digital",
    servicesEyebrow: "Ce que nous faisons", servicesTitle: "Six expertises.<br><span>Un partenaire fiable.</span>",
    servicesSummary: "Des compétences complémentaires pour simplifier vos opérations et donner de l’élan à vos ambitions.",
    service1Title: "Génie civil", service1Copy: "Études, travaux et accompagnement de vos projets d’infrastructure et de construction, du terrain à la livraison.", service1Label: "Discuter d’un projet de génie civil", service1Cta: "Parlons de votre projet",
    service2Title: "Import-export", service2Copy: "Approvisionnement et échanges de produits, avec une coordination attentive à chaque étape.", service2Label: "Discuter d’un besoin en import-export", service2Cta: "Parlons de votre besoin",
    service3Title: "Formation SHI", service3Copy: "Des formations pour renforcer les bons réflexes, la prévention et la culture sécurité de vos équipes.", service3Label: "Discuter d’une formation SHI", service3Cta: "Organiser une formation",
    service4Title: "Matériel de sécurité", service4Copy: "Vente d’équipements et de matériels de sécurité adaptés aux activités et aux besoins du terrain.", service4Label: "Discuter de matériel de sécurité", service4Cta: "Trouver le bon équipement",
    service5Title: "Sites web", service5Copy: "Création, maintenance et modification de sites web pour une présence en ligne utile et bien tenue.", service5Label: "Discuter d’un projet de site web", service5Cta: "Faire évoluer mon site",
    service6Title: "Électricité", service6Copy: "Travaux et interventions électriques réalisés avec rigueur, en tenant compte des contraintes de votre site.", service6Label: "Discuter d’un besoin en électricité", service6Cta: "Décrire mon besoin",
    approachEyebrow: "Notre approche", approachTitle: "Le sérieux du terrain.<br><span>Le sens du résultat.</span>",
    approachCopy: "Chaque projet commence par une écoute attentive. Nous clarifions vos priorités, mobilisons les compétences adaptées et avançons avec un suivi simple et transparent.", approachCta: "Échangeons sur votre projet",
    stepsLabel: "Notre méthode en trois étapes", step1Title: "Écouter", step1Copy: "Comprendre le contexte, les objectifs et les contraintes.", step2Title: "Proposer", step2Copy: "Définir une réponse claire, réaliste et adaptée.", step3Title: "Agir", step3Copy: "Réaliser et suivre les étapes avec rigueur.",
    contactEyebrow: "Prenons contact", contactTitle: "Votre prochain projet<br><span>commence ici.</span>", contactCopy: "Décrivez-nous votre besoin. Nous préparerons un message récapitulatif que vous pourrez nous envoyer par courriel.", contactNote: "Génie civil · Sécurité · Digital · Électricité",
    formNameLabel: "Votre nom", namePlaceholder: "Nom et prénom", formEmailLabel: "Votre adresse e-mail", emailPlaceholder: "nom@entreprise.com", formServiceLabel: "Service concerné", formServicePrompt: "Choisir un service", formWebOption: "Création ou maintenance web", formOtherOption: "Autre demande", formMessageLabel: "Votre message", messagePlaceholder: "Quelques mots sur votre projet…", formSubmit: "Ouvrir le brouillon e-mail", formPrivacy: "Votre message est préparé dans votre application de messagerie. Aucune donnée n’est enregistrée sur ce site.", formStatus: "Votre messagerie va s’ouvrir. Vérifiez le message puis cliquez sur Envoyer.",
    footerBrandLabel: "SecurEvo, retour en haut", footerTagline: "Construire. Sécuriser.<br>Faire évoluer.", backTop: "Retour en haut", copyright: "Tous droits réservés.", footerNote: "Des solutions pensées pour avancer.",
    mailSubject: "Demande SecurEvo", mailName: "Nom", mailEmail: "E-mail", mailService: "Service"
  },
  en: {
    pageTitle: "SecurEvo — Build, protect, move forward",
    metaDescription: "SecurEvo supports your projects in civil engineering, import-export, SHI training, safety equipment, electrical work, and website creation.",
    ogTitle: "SecurEvo — Build, protect, move forward",
    ogDescription: "Practical solutions for your projects, teams, and business.",
    skipLink: "Skip to content", brandLabel: "SecurEvo, home", menuOpen: "Open menu", menuClose: "Close menu",
    mainNavigation: "Main navigation", navServices: "Our services", navApproach: "Our approach", navContact: "Contact", languageLabel: "Language", navCta: "Tell us about your project",
    heroImageAlt: "Team at work on a construction site", heroEyebrow: "Multidisciplinary expertise",
    heroLead: "Build with purpose.<br>Protect with care.",
    heroCopy: "From construction sites to digital tools, we move your projects forward with reliable solutions tailored to your needs.",
    heroServicesCta: "Explore our services", heroContactCta: "Have a specific need?", heroCaption: "Practical solutions. A shared commitment.",
    domainsLabel: "Areas of expertise", introTitle: "One partner for your projects", tagConstruction: "Construction", tagSafety: "Safety", tagEnergy: "Energy", tagDigital: "Digital",
    servicesEyebrow: "What we do", servicesTitle: "Six areas of expertise.<br><span>One reliable partner.</span>",
    servicesSummary: "Complementary skills to simplify your operations and help your ambitions move forward.",
    service1Title: "Civil engineering", service1Copy: "Planning, construction, and support for infrastructure and building projects, from the ground up to delivery.", service1Label: "Discuss a civil engineering project", service1Cta: "Discuss your project",
    service2Title: "Import-export", service2Copy: "Product sourcing and trade, coordinated carefully at every stage.", service2Label: "Discuss an import-export need", service2Cta: "Tell us what you need",
    service3Title: "SHI training", service3Copy: "Training to strengthen good practice, prevention, and a safety culture across your teams.", service3Label: "Discuss SHI training", service3Cta: "Arrange training",
    service4Title: "Safety equipment", service4Copy: "Safety equipment and supplies selected for your activities and on-site needs.", service4Label: "Discuss safety equipment", service4Cta: "Find the right equipment",
    service5Title: "Websites", service5Copy: "Website creation, maintenance, and updates for a useful, well-managed online presence.", service5Label: "Discuss a website project", service5Cta: "Improve my website",
    service6Title: "Electrical services", service6Copy: "Electrical work and service carried out carefully, with your site requirements in mind.", service6Label: "Discuss an electrical need", service6Cta: "Describe your need",
    approachEyebrow: "Our approach", approachTitle: "Grounded in the field.<br><span>Focused on results.</span>",
    approachCopy: "Every project starts with listening. We clarify your priorities, bring in the right expertise, and keep progress clear and transparent.", approachCta: "Let’s discuss your project",
    stepsLabel: "Our three-step process", step1Title: "Listen", step1Copy: "Understand the context, goals, and constraints.", step2Title: "Plan", step2Copy: "Define a clear, practical solution that fits.", step3Title: "Deliver", step3Copy: "Carry out the work and track each step carefully.",
    contactEyebrow: "Get in touch", contactTitle: "Your next project<br><span>starts here.</span>", contactCopy: "Tell us what you need. We’ll prepare a message for you to send from your email application.", contactNote: "Civil engineering · Safety · Digital · Electrical",
    formNameLabel: "Your name", namePlaceholder: "Full name", formEmailLabel: "Your email address", emailPlaceholder: "name@company.com", formServiceLabel: "Service needed", formServicePrompt: "Choose a service", formWebOption: "Website creation or maintenance", formOtherOption: "Other request", formMessageLabel: "Your message", messagePlaceholder: "Tell us a little about your project…", formSubmit: "Open email draft", formPrivacy: "Your message is prepared in your email application. This site does not store any data.", formStatus: "Your email app will open. Review the message, then press Send.",
    footerBrandLabel: "SecurEvo, back to top", footerTagline: "Build. Protect.<br>Move forward.", backTop: "Back to top", copyright: "All rights reserved.", footerNote: "Solutions designed to move you forward.",
    mailSubject: "SecurEvo enquiry", mailName: "Name", mailEmail: "Email", mailService: "Service"
  },
  ar: {
    pageTitle: "SecurEvo — نبني ونحمي ونتقدم",
    metaDescription: "ترافقكم SecurEvo في مشاريع الهندسة المدنية والاستيراد والتصدير وتدريب SHI ومعدات السلامة والأعمال الكهربائية وإنشاء المواقع الإلكترونية.",
    ogTitle: "SecurEvo — نبني ونحمي ونتقدم",
    ogDescription: "حلول عملية لمشاريعكم وفرقكم وأعمالكم.",
    skipLink: "انتقل إلى المحتوى", brandLabel: "SecurEvo، الصفحة الرئيسية", menuOpen: "افتح القائمة", menuClose: "أغلق القائمة",
    mainNavigation: "التنقل الرئيسي", navServices: "خدماتنا", navApproach: "منهجيتنا", navContact: "اتصل بنا", languageLabel: "اللغة", navCta: "لنتحدث عن مشروعكم",
    heroImageAlt: "فريق يعمل في موقع بناء", heroEyebrow: "خبرات متعددة التخصصات",
    heroLead: "نبني بخطوات مدروسة.<br>ونحمي بكل التزام.",
    heroCopy: "من مواقع البناء إلى الأدوات الرقمية، ندفع مشاريعكم إلى الأمام بحلول موثوقة تناسب احتياجاتكم.",
    heroServicesCta: "اكتشفوا خدماتنا", heroContactCta: "هل لديكم طلب محدد؟", heroCaption: "حلول عملية والتزام مشترك",
    domainsLabel: "مجالات عملنا", introTitle: "شريك لمشاريعكم", tagConstruction: "البناء", tagSafety: "السلامة", tagEnergy: "الطاقة", tagDigital: "التحول الرقمي",
    servicesEyebrow: "ما نقدمه", servicesTitle: "ستة مجالات خبرة.<br><span>شريك واحد موثوق.</span>",
    servicesSummary: "خبرات متكاملة لتبسيط أعمالكم ومساعدة طموحاتكم على التقدم.",
    service1Title: "الهندسة المدنية", service1Copy: "دراسات وأعمال ومرافقة لمشاريع البنية التحتية والبناء، من الموقع إلى التسليم.", service1Label: "ناقشوا مشروعاً في الهندسة المدنية", service1Cta: "لنتحدث عن مشروعكم",
    service2Title: "الاستيراد والتصدير", service2Copy: "تأمين المنتجات والتبادل التجاري مع تنسيق دقيق في كل مرحلة.", service2Label: "ناقشوا احتياجات الاستيراد والتصدير", service2Cta: "أخبرونا باحتياجكم",
    service3Title: "تدريب SHI", service3Copy: "تدريبات لتعزيز الممارسات السليمة والوقاية وثقافة السلامة لدى فرقكم.", service3Label: "ناقشوا تدريب SHI", service3Cta: "نظّموا تدريباً",
    service4Title: "معدات السلامة", service4Copy: "بيع معدات ومستلزمات السلامة المناسبة لطبيعة أنشطتكم واحتياجات الموقع.", service4Label: "ناقشوا معدات السلامة", service4Cta: "اختاروا المعدات المناسبة",
    service5Title: "المواقع الإلكترونية", service5Copy: "إنشاء المواقع الإلكترونية وصيانتها وتعديلها لضمان حضور رقمي فعّال.", service5Label: "ناقشوا مشروع موقع إلكتروني", service5Cta: "طوّروا موقعي",
    service6Title: "الأعمال الكهربائية", service6Copy: "تنفيذ الأعمال والتدخلات الكهربائية بدقة مع مراعاة متطلبات موقعكم.", service6Label: "ناقشوا احتياجات الكهرباء", service6Cta: "اشرحوا احتياجكم",
    approachEyebrow: "منهجيتنا", approachTitle: "خبرة من أرض الواقع.<br><span>وتركيز على النتائج.</span>",
    approachCopy: "يبدأ كل مشروع بالاستماع إليكم. نحدد أولوياتكم ونوفر الخبرات المناسبة ونتابع التقدم بوضوح وشفافية.", approachCta: "لنتحدث عن مشروعكم",
    stepsLabel: "منهجيتنا في ثلاث خطوات", step1Title: "نستمع", step1Copy: "نفهم السياق والأهداف والتحديات.", step2Title: "نقترح", step2Copy: "نحدد حلاً واضحاً وواقعياً ومناسباً.", step3Title: "ننفّذ", step3Copy: "ننجز العمل ونتابع كل خطوة بعناية.",
    contactEyebrow: "تواصلوا معنا", contactTitle: "مشروعكم القادم<br><span>يبدأ من هنا.</span>", contactCopy: "أخبرونا بما تحتاجون إليه. سنجهز رسالة يمكنكم إرسالها عبر تطبيق البريد الإلكتروني.", contactNote: "الهندسة المدنية · السلامة · الرقمنة · الكهرباء",
    formNameLabel: "الاسم", namePlaceholder: "الاسم الكامل", formEmailLabel: "البريد الإلكتروني", emailPlaceholder: "name@company.com", formServiceLabel: "الخدمة المطلوبة", formServicePrompt: "اختاروا خدمة", formWebOption: "إنشاء موقع أو صيانته", formOtherOption: "طلب آخر", formMessageLabel: "رسالتكم", messagePlaceholder: "أخبرونا باختصار عن مشروعكم…", formSubmit: "افتح مسودة البريد", formPrivacy: "تُجهز الرسالة في تطبيق البريد الإلكتروني لديكم. لا يحفظ هذا الموقع أي بيانات.", formStatus: "سيفتح تطبيق البريد الإلكتروني. راجعوا الرسالة ثم اضغطوا على إرسال.",
    footerBrandLabel: "SecurEvo، العودة إلى الأعلى", footerTagline: "نبني. نحمي.<br>ونتقدم.", backTop: "العودة إلى الأعلى", copyright: "جميع الحقوق محفوظة.", footerNote: "حلول تساعدكم على التقدم.",
    mailSubject: "استفسار إلى SecurEvo", mailName: "الاسم", mailEmail: "البريد الإلكتروني", mailService: "الخدمة"
  }
};

function applyLanguage(language, persist = true) {
  const selectedLanguage = translations[language] ? language : "fr";
  const copy = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  document.querySelector('meta[property="og:title"]').content = copy.ogTitle;
  document.querySelector('meta[property="og:description"]').content = copy.ogDescription;
  languageSelect.value = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element === menuButton && menuButton.getAttribute("aria-expanded") === "true" ? "menuClose" : element.dataset.i18nAria;
    element.setAttribute("aria-label", copy[key]);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((entry) => {
      const [attribute, key] = entry.split(":");
      element.setAttribute(attribute, copy[key]);
    });
  });

  if (persist) {
    try {
      localStorage.setItem("securevo-language", selectedLanguage);
    } catch {
      // Language selection still works when browser storage is unavailable.
    }
  }
}

document.querySelector("#year").textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", translations[document.documentElement.lang][isOpen ? "menuOpen" : "menuClose"]);
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", translations[document.documentElement.lang].menuOpen);
    navigation.classList.remove("is-open");
  }
});

languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));

function buildContactMailto(formData, copy, selectedService) {
  const subject = `${copy.mailSubject} - ${selectedService}`;
  const body = [
    `${copy.mailName}: ${formData.get("nom")}`,
    `${copy.mailEmail}: ${formData.get("email")}`,
    `${copy.mailService}: ${selectedService}`,
    "",
    formData.get("message")
  ].join("\n");
  const email = "nizar.bourzaim2@gmail.com";

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const copy = translations[document.documentElement.lang];
  const formData = new FormData(contactForm);
  const selectedService = contactForm.querySelector("#service").selectedOptions[0].textContent.trim();

  formStatus.textContent = copy.formStatus;
  window.location.href = buildContactMailto(formData, copy, selectedService);
});

let savedLanguage = "fr";
try {
  savedLanguage = localStorage.getItem("securevo-language") || "fr";
} catch {
  savedLanguage = "fr";
}
applyLanguage(savedLanguage, false);