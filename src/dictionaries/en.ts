import type { Dictionary } from "@/dictionaries/types";
import { legalEn } from "@/dictionaries/legal/en";

const en = {
  meta: {
    homeTitle: "MB Law - Marković & Bogdanović Law Office | Belgrade",
    homeDescription:
      "MB Law - Marković & Bogdanović Joint Law Office in Belgrade provides comprehensive legal services to domestic and international clients.",
    practiceTitleSuffix: "Belgrade law firm",
    aboutDescription:
      "MB Law is the Marković & Bogdanović Joint Law Office in Belgrade, Serbia. Learn who handles your case and how we work with local and foreign clients.",
    practiceAreasDescription:
      "Practice areas of MB Law in Belgrade, Serbia: corporate, criminal, civil, employment and tax law, real estate and immigration for foreign nationals.",
    teamDescription:
      "Partners of MB Law in Belgrade: Dušan S. Marković, Milovan M. Bogdanović and Isidora V. Marković. Meet the lawyers who will handle your case.",
    insightsDescription:
      "Legal analysis from MB Law in Belgrade on Serbian regulations and case law: company law, real estate, employment and criminal law.",
    contactDescription:
      "Contact MB Law at Resavska 68, Belgrade, Serbia. Phone +381 65 389 4111, email office@mblaw.rs. Book a consultation with a partner.",
    privacyDescription:
      "Privacy policy of the MB Law website: what data mblaw.rs collects, how it is used, and what rights you have.",
    termsDescription:
      "Terms of use of the MB Law website. The site is not legal advice. An inquiry is not an automatic engagement of the firm.",
    attorneyTitleSuffix: "lawyer in Belgrade",
  },
  nav: {
    home: "Home",
    about: "About Us",
    practiceAreas: "Practice Areas",
    team: "Team",
    insights: "Insights",
    contact: "Contact",
  },
  langSwitch: {
    label: "Language",
  },
  header: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrowLeft: "LAW FIRM",
    eyebrowRight: "BELGRADE, SERBIA",
    headingLine1: "Where the law becomes",
    headingLine2: "your advantage",
    paragraph:
      "Comprehensive legal support for domestic and international clients - with a strategic approach, an understanding of their needs and reliable protection of business and personal interests.",
    ctaPrimary: "SCHEDULE A CONSULTATION",
    ctaSecondary: "EXPLORE PRACTICE AREAS",
  },
  about: {
    eyebrow: "ABOUT US",
    heading: "From question to resolution",
    paragraph1:
      "MB Law - Marković & Bogdanović Joint Law Office provides legal support to domestic and international clients on corporate, civil and criminal matters.",
    paragraph2:
      "From the outset, the client knows who is handling their case, who makes the key decisions, and who to turn to.",
    link: "LEARN MORE ABOUT US",
    heroLead:
      "Legal support to domestic and international clients on corporate, civil and criminal matters.",
    storyEyebrow: "ABOUT THE FIRM",
    storyTitle: "About us",
    storyParagraphs: [
      "MB Law - Marković & Bogdanović Joint Law Office provides legal support to domestic and international clients on corporate, civil and criminal matters.",
      "Our way of working is simple: from the outset, the client knows who is handling their case, who makes the key decisions, and who to turn to. Partners are directly involved in running each case, while the firm's team provides the capacity for day-to-day work, analysis and execution.",
      "Our goal is for a case to be handled quickly, clearly, and with concrete accountability from the attorney who takes it on.",
      "Alongside the partners, the firm is made up of a wider team of in-house associates, backed by a developed network of cooperation with law firms and legal professionals across Europe and the Middle East.",
    ],
    howEyebrow: "APPROACH",
    howTitle: "Our way of working is simple.",
    howSteps: [
      {
        no: "01",
        title: "Who handles the case.",
        text: "From the outset, the client knows who is handling their case, who makes the key decisions, and who to turn to.",
      },
      {
        no: "02",
        title: "Partners lead, the team delivers.",
        text: "Partners are directly involved in running each case, while the firm's team provides the capacity for day-to-day work, analysis and execution.",
      },
      {
        no: "03",
        title: "Fast, clear, accountable.",
        text: "Our goal is for a case to be handled quickly, clearly, and with concrete accountability from the attorney who takes it on.",
      },
    ],
    stepLabel: "Step",
    approachNavLabel: "Steps in handling a case",
  },
  practiceAreas: {
    eyebrow: "PRACTICE AREAS",
    heading: "Key areas of our legal practice",
    details: "DETAILS",
    viewAll: "ALL PRACTICE AREAS",
    menuAll: "ALL AREAS",
    indexLead: "Each group brings together related areas. Open the topic that concerns you.",
    onThisPage: "ON THIS PAGE",
    inThisGroup: "IN THIS GROUP",
    tocLabel: "Page contents",
    groupNavLabel: "Practice area navigation",
    pagerLabel: "Neighboring practice areas",
    breadcrumbLabel: "Breadcrumb",
    groupPrefix: "PRACTICE AREAS",
    groups: {
      "korporativno-pravo": {
        title: "Corporate Law",
        navLine: "Incorporation, M&A, contracts and compliance",
      },
      "krivicno-i-prekrsajno-pravo": {
        title: "Criminal and Misdemeanor Law",
        navLine: "Misdemeanors, offenses and criminal defense",
      },
      "gradjansko-pravo": {
        title: "Civil Law",
        navLine: "Property, contracts, family and inheritance",
      },
      nepokretnosti: {
        title: "Real Estate and Construction",
        navTitle: "Real Estate",
        navLine: "Sale and purchase, projects and land registry",
      },
      "prava-stranaca": {
        title: "Rights of Foreign Nationals",
        navLine: "Residence, work, investment and citizenship",
      },
      "poresko-i-carinsko-pravo": {
        title: "Tax and Customs Law",
        navTitle: "Tax Law",
        navLine: "Audits, appeals, customs and administrative disputes",
      },
      "ostale-oblasti-rada": {
        title: "Other Practice Areas",
        navLine: "Employment, debt collection, damages, administration and data",
      },
    },
  },
  team: {
    eyebrow: "TEAM",
    heading: "Meet your legal team",
    partnersLabel: "Partners",
    moreAboutAttorney: "MORE ABOUT THE ATTORNEY",
    linkedIn: "LINKEDIN",
    comingSoon: "PROFILE COMING SOON",
    allPartners: "All partners",
    networkEyebrow: "BELGRADE, EUROPE, MIDDLE EAST",
    networkHeading: "Beyond Serbia's borders",
    networkLead:
      "Alongside the partners, the firm is made up of a wider team of in-house associates, backed by a developed network of cooperation with law firms and legal professionals across Europe and the Middle East.",
    networkSupport:
      "This organization allows the firm, when the nature of a case calls for it, to provide clients with coordinated legal support beyond Serbia's borders as well.",
    attorneys: {
      "dusan-s-markovic": {
        role: "Senior Partner",
        bio: "Practice focused on corporate and commercial law, employment law, dispute resolution, real estate, investments and representation in complex proceedings.",
        detail:
          "His approach is based on a detailed analysis of the legal and factual framework, a clear strategy and direct engagement with the client throughout the assignment.",
        paragraphs: [
          "Dušan S. Marković is an attorney and one of the founders of MB Law - Marković & Bogdanović Joint Law Office. His practice is focused on corporate and commercial law, employment law, dispute resolution, real estate, investments, and representing clients in complex court and other proceedings.",
          "Throughout his practice he has advised domestic and international businesses on establishing and operating in Serbia, contractual relationships, corporate changes and investment matters, while a significant part of his practice also involves representing individuals and companies in civil, commercial, damages and other disputes.",
          "A significant part of his practice involves representation before courts of various subject-matter and territorial jurisdiction, in cases that require a detailed procedural strategy, careful analysis of evidence and continuous conduct of proceedings from their initiation through to final resolution.",
          "Alongside his legal practice, he regularly appears on national television programs, where, as a legal commentator, he discusses current legal issues and topics of broader public significance. Through these appearances, he seeks to bring complex legal questions closer to the general public and contribute to a better understanding of the law, legal proceedings and their practical consequences.",
          "His approach is based on a detailed analysis of the legal and factual framework, a clear strategy and direct engagement with the client throughout the assignment.",
        ],
      },
      "milovan-m-bogdanovic": {
        role: "Senior Partner",
        bio: "Practice focused on corporate and commercial law, financial law, legal support for businesses, real estate, civil law and the rights of foreign nationals.",
        detail:
          "His approach connects legal analysis with the client's business goals, with a focus on clearly structured, practical and sustainable legal solutions.",
        paragraphs: [
          "Milovan M. Bogdanović is an attorney and one of the founders of MB Law - Marković & Bogdanović Joint Law Office. His practice is primarily focused on corporate and commercial law, financial law, legal support for businesses, as well as real estate and construction, civil law and the rights of foreign nationals.",
          "Before co-founding the joint law office, he worked with an international law firm, where he gained experience handling complex corporate matters, business transactions and legal advisory work for domestic and international clients.",
          "A significant part of his practice covers legal due diligence processes, corporate structuring, drafting and reviewing contracts, as well as advising on business transactions, changes in ownership structure and investment projects.",
          "He has particular experience in legal matters related to real estate and construction, including legal due diligence on properties, contractual structuring of projects, investment transactions and resolving property-law issues connected to the development and use of real estate.",
          "His approach connects legal analysis with the client's business goals, with a focus on clearly structured, practical and sustainable legal solutions.",
        ],
      },
      "isidora-markovic": {
        role: "Partner",
        bio: "Practice focused on civil law, dispute resolution, damages, insurance and representation before the courts.",
        detail:
          "Her approach is based on a detailed analysis of facts and evidence, a clear procedural strategy and direct communication with the client throughout the proceedings.",
        paragraphs: [
          "Isidora V. Marković is an attorney and partner at MB Law - Marković & Bogdanović Joint Law Office. Her practice is primarily focused on civil law, dispute resolution, damages, insurance, and other matters that require representation before the courts and careful conduct of litigation.",
          "Throughout her practice she has gained significant experience representing individuals and companies in a wide range of litigation and other civil-law proceedings before courts and other competent authorities.",
          "A particular part of her practice involves cases of pecuniary and non-pecuniary damages, including disputes with insurance companies, as well as other matters that require careful legal analysis and representation of the client's interests.",
          "In addition to representation in disputes, she advises clients on various civil-law matters, with the aim of identifying and resolving legal risks before they escalate into a dispute.",
          "Her approach is based on a detailed analysis of facts and evidence, a clear procedural strategy and direct communication with the client throughout the proceedings.",
        ],
      },
    },
  },
  insights: {
    eyebrow: "INSIGHTS",
    heading: "The latest analysis and legal practice",
    prev: "Previous insights",
    next: "Next insights",
    viewAll: "ALL INSIGHTS",
    readMore: "READ MORE",
    indexLead: "Short pieces on regulations and practice. Open the topic that concerns you.",
    filterAll: "All",
    filterAriaLabel: "Filter insights by topic",
    moreInsights: "MORE INSIGHTS",
    emptyState: "Our insights are currently published in Serbian only.",
    serbianOnlyLink: "READ IN SERBIAN",
    authorLabel: "AUTHOR",
    readingTime: "min read",
    faqHeading: "Frequently asked questions",
    updatedLabel: "UPDATED",
    tocHeading: "Contents",
    shareLabel: "SHARE",
    copyLink: "Copy link",
    linkCopied: "Link copied",
  },
  cta: {
    eyebrow: "CONSULTATION",
    heading: "The first step is a conversation",
    paragraph:
      "Schedule an initial meeting and get a clear overview of your options before making a decision. Discreet, precise and focused on your goal.",
    button: "SCHEDULE A CONSULTATION",
    orContact: "Or contact us directly.",
    phoneLabel: "PHONE",
    addressLabel: "ADDRESS",
    emailLabel: "EMAIL",
    city: "Belgrade",
  },
  footer: {
    tagline:
      "Comprehensive legal support for domestic and international clients, with a strategic approach and reliable protection of business and personal interests.",
    navHeading: "NAVIGATION",
    practiceHeading: "PRACTICE AREAS",
    contactHeading: "CONTACT",
    city: "Belgrade",
    rights: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
  },
  mobileActions: {
    scrollTop: "Back to top",
    openViber: "Open Viber",
    openWhatsapp: "Open WhatsApp",
    callOffice: "Call the office",
  },
  contactPage: {
    lead: "Call, write, or send us an inquiry. We'll tell you who will handle your case, and whether we can take it on.",
    formEyebrow: "INQUIRY",
    formTitle: "Write to us.",
    formLead:
      "A short note on what happened and what you need. There's no need to send any files at this first step.",
    openInMaps: "OPEN IN MAPS",
  },
  contactForm: {
    nameLabel: "FULL NAME",
    emailLabel: "EMAIL",
    phoneLabel: "PHONE",
    areaLabel: "PRACTICE AREA, OPTIONAL",
    areaPlaceholder: "Select a practice area",
    messageLabel: "MESSAGE",
    footnote:
      "There's no need to send any files at this first step. We only use your inquiry to get back to you.",
    submit: "SEND INQUIRY",
    sending: "SENDING",
    successTitle: "Your inquiry has been sent.",
    successBody: "We will reply to the address you left. If it is urgent, write to",
    errorName: "Please enter your full name.",
    errorEmail: "Please enter a valid email address.",
    errorMessage: "Please briefly describe what you need, at least two sentences.",
    errorSend: "The inquiry was not sent. Please try again or write to office@mblaw.rs.",
  },
  common: {
    firstStepCta: "If this is your matter, the first step is a conversation.",
  },
  legal: legalEn,
} satisfies Dictionary;

export default en;
