import type { Dictionary } from "@/dictionaries/types";
import { legalEn } from "@/dictionaries/legal/en";

const en = {
  meta: {
    homeTitle: "MB Law - Marković & Bogdanović Joint Law Office | Belgrade",
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
    networkHeading: "Beyond Serbia's borders.",
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
    topics: {
      "privredno-pravo": "Commercial Law",
      nekretnine: "Real Estate",
      "radno-pravo": "Employment Law",
      "kazneno-pravo": "Criminal Law",
    },
    posts: {
      "izmene-propisa-i-poslovanje": {
        tag: "COMMERCIAL LAW",
        title: "Regulatory changes and their impact on business.",
        excerpt:
          "A brief overview of the most important changes and their impact on the operations of companies.",
        body: [
          "When a regulation changes, the first question isn't what the explanatory note says, but what it actually changes for a specific company: contracts, deadlines, filings and the liability of its officers.",
          "We review what has already entered into force, what is about to, and where a transitional regime applies. Only then do we set out what needs to be done, and by when.",
          "If a change touches your matter, get in touch. The partner will tell you whether you need to amend your bylaws, your contracts, or simply track a deadline.",
        ],
      },
      "provera-pre-kupoprodaje-nepokretnosti": {
        tag: "REAL ESTATE",
        title: "What to check before buying or selling real estate.",
        excerpt:
          "What needs to be checked before a sale and how to avoid the most common legal risks.",
        body: [
          "A sale doesn't begin at the notary's office. It begins with a review of the property's status: the land register entry, any encumbrances, permits, and whether the seller can actually transfer title at all.",
          "The most common risk isn't the price, but a gap in the paperwork that only surfaces once the file is opened. That's why the check happens before the deposit, not after.",
          "If you're buying or selling, the first step is for us to review the file. That determines whether to proceed, and on what terms.",
        ],
      },
      "izmene-internih-akata-i-ugovora-o-radu": {
        tag: "EMPLOYMENT LAW",
        title: "Amending internal policies and employment contracts.",
        excerpt:
          "Practical guidance for employers when amending internal policies and employment contracts.",
        body: [
          "An internal policy or an employment contract isn't amended overnight. The change has to track the law, the existing contracts and the way the company actually operates.",
          "An employer needs to know what is changing, who it affects, and how the change is communicated. Otherwise a dispute ends up being about procedure, not substance.",
          "If you're preparing to amend a policy or a contract, the current text comes first. The plan is written after that.",
        ],
      },
      "prvi-koraci-u-odbrani": {
        tag: "CRIMINAL LAW",
        title: "The first steps in a criminal defense.",
        excerpt:
          "How to prepare a defense and which steps to take in the early stage of proceedings.",
        body: [
          "Cases are often won or lost in the early stage. The first step is establishing where the client stands in the proceedings, what has already been said, and what the deadlines are.",
          "A defense isn't drafted before the facts are known. A meeting, the file, then a plan. If it's urgent, the work starts from the moment of detention, not from the office the next morning.",
          "If you've been summoned, brought in, or detained, get in touch immediately. The partner takes over the conversation and tells you what happens next.",
        ],
      },
      "ugovori-koji-prate-rast-drustva": {
        tag: "COMMERCIAL LAW",
        title: "Contracts that keep pace with a company's growth.",
        excerpt:
          "As a company grows, old contracts often stay in place. What to review before the next round of business.",
        body: [
          "Growth changes the relationship with suppliers, employees and partners. A contract that worked at the start often doesn't cover the new volume, deadlines or liability.",
          "The review starts from what the company does today, not from the folder in the drawer. Only then is it clear what needs updating, and what can stay as is.",
          "If you're entering a new deal or a new round of negotiations, the existing contracts get opened first. The plan for amending them comes after that.",
        ],
      },
      "upis-i-tereti-pre-avansa": {
        tag: "REAL ESTATE",
        title: "Registration and encumbrances before the deposit.",
        excerpt:
          "What the land registry must show before a deposit is paid, and what happens if it doesn't.",
        body: [
          "A deposit is often requested before the state of the land register entry is clear. If an encumbrance or a notation surfaces after payment, the negotiation continues from a weaker position.",
          "The check isn't a formality. It looks at the registration, any encumbrances, and whether the seller can transfer title on the terms that were represented.",
          "If you're preparing a purchase, the file is opened before the deposit. That determines whether the payment goes ahead, and on what terms.",
        ],
      },
    },
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
    successTitle: "Your email client has been opened.",
    successBody: "If the window didn't appear, send your inquiry to",
    errorName: "Please enter your full name.",
    errorEmail: "Please enter a valid email address.",
    errorMessage: "Please briefly describe what you need, at least two sentences.",
    mailtoSubject: "Inquiry from the MB Law website",
  },
  common: {
    firstStepCta: "If this is your matter, the first step is a conversation.",
  },
  legal: legalEn,
} satisfies Dictionary;

export default en;
