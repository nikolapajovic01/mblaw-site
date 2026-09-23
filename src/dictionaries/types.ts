export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    /** Suffix appended to practice-area titles, e.g. "Radno pravo - advokat Beograd". */
    practiceTitleSuffix: string;
    aboutDescription: string;
    practiceAreasDescription: string;
    teamDescription: string;
    insightsDescription: string;
    contactDescription: string;
    /** Used for attorney pages: "{name}, {role} | MB Law". */
    attorneyTitleSuffix: string;
  };
  nav: {
    home: string;
    about: string;
    practiceAreas: string;
    team: string;
    insights: string;
    contact: string;
  };
  langSwitch: {
    label: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrowLeft: string;
    eyebrowRight: string;
    headingLine1: string;
    headingLine2: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    link: string;
    heroLead: string;
    storyEyebrow: string;
    storyTitle: string;
    storyParagraphs: string[];
    howEyebrow: string;
    howTitle: string;
    howSteps: { no: string; title: string; text: string }[];
    stepLabel: string;
    approachNavLabel: string;
  };
  practiceAreas: {
    eyebrow: string;
    heading: string;
    details: string;
    viewAll: string;
    menuAll: string;
    groups: Record<string, { title: string; navTitle?: string; navLine: string }>;
    indexLead: string;
    onThisPage: string;
    inThisGroup: string;
    tocLabel: string;
    groupNavLabel: string;
    pagerLabel: string;
    breadcrumbLabel: string;
    groupPrefix: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    partnersLabel: string;
    moreAboutAttorney: string;
    linkedIn: string;
    comingSoon: string;
    allPartners: string;
    networkEyebrow: string;
    networkHeading: string;
    networkLead: string;
    networkSupport: string;
    attorneys: Record<
      string,
      { role: string; bio: string; detail: string; paragraphs: string[] }
    >;
  };
  insights: {
    eyebrow: string;
    heading: string;
    prev: string;
    next: string;
    viewAll: string;
    readMore: string;
    indexLead: string;
    filterAll: string;
    filterAriaLabel: string;
    moreInsights: string;
    topics: Record<string, string>;
    posts: Record<string, { tag: string; title: string; excerpt: string; body: string[] }>;
  };
  cta: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    button: string;
    orContact: string;
    phoneLabel: string;
    addressLabel: string;
    emailLabel: string;
    city: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    practiceHeading: string;
    contactHeading: string;
    city: string;
    rights: string;
    privacyPolicy: string;
    termsOfUse: string;
  };
  mobileActions: {
    scrollTop: string;
    openViber: string;
    openWhatsapp: string;
    callOffice: string;
  };
  contactPage: {
    lead: string;
    formEyebrow: string;
    formTitle: string;
    formLead: string;
    openInMaps: string;
  };
  contactForm: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    areaLabel: string;
    areaPlaceholder: string;
    messageLabel: string;
    footnote: string;
    submit: string;
    successTitle: string;
    successBody: string;
    errorName: string;
    errorEmail: string;
    errorMessage: string;
    mailtoSubject: string;
  };
  common: {
    firstStepCta: string;
  };
};
