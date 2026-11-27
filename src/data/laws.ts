import type { Law } from "./types";

const USC = (title: number, section: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title${title}-section${section}&num=0&edition=prelim`;

export const LAWS: Law[] = [
  {
    id:"in-it-act-2000", countryId:"india", title:"Information Technology Act, 2000", year:2000,
    description:"The principal Indian framework for electronic records, intermediary liability, unauthorised computer activity and cyber offences.",
    status:"in_force", enactmentDate:"2000-06-09", commencementDate:"2000-10-17",
    statusNote:"Substantially amended by the Information Technology (Amendment) Act, 2008.",
    amendments:["Information Technology (Amendment) Act, 2008"], lastVerified:"2026-11-24",
    verificationNotes:"Act text and enactment date checked against India Code. Provision-level commencement should be rechecked against India Code commencement notifications.",
    sources:[{label:"India Code — Information Technology Act, 2000",url:"https://www.indiacode.nic.in/handle/123456789/1999"}],
    verification:"verified", milestone:{date:"2000-10-17",label:"Principal commencement"}
  },
  {
    id:"in-dpdp-2023", countryId:"india", title:"Digital Personal Data Protection Act, 2023", year:2023,
    description:"Regulates processing of digital personal data and establishes duties for data fiduciaries and rights for data principals.",
    status:"partially_in_force", enactmentDate:"2023-08-11",
    statusNote:"Implementation is staged through commencement notifications and the 2025 Rules.",
    amendments:["Digital Personal Data Protection Rules, 2025"], lastVerified:"2026-11-24",
    verificationNotes:"Enactment date and staged implementation require rechecking against the latest Gazette commencement notifications.",
    sources:[{label:"India Code — Digital Personal Data Protection Act, 2023",url:"https://www.indiacode.nic.in/handle/123456789/21188"}],
    verification:"pending"
  },
  {
    id:"in-dpdp-rules-2025", countryId:"india", title:"Digital Personal Data Protection Rules, 2025", year:2025,
    description:"Draft or final delegated rules implementing the 2023 Act, including procedures and compliance requirements.",
    status:"proposed", enactmentDate:"2025",
    statusNote:"Final notification and commencement remain subject to official Gazette confirmation.",
    amendments:[], lastVerified:"2026-11-24",
    verificationNotes:"Pending verification: this entry must not be treated as final until the Gazette-notified consolidated rules and commencement schedule are confirmed.",
    sources:[{label:"MeitY — Data protection framework",url:"https://www.meity.gov.in/data-protection-framework"}],
    verification:"pending"
  },
  {
    id:"in-it-rules-2021", countryId:"india", title:"Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021", year:2021,
    description:"Sets due-diligence, grievance and content-governance obligations for intermediaries and digital media entities.",
    status:"in_force", enactmentDate:"2021-02-25", commencementDate:"2021-02-25",
    statusNote:"Amended in 2022 and 2023; consolidated text and judicial developments should be checked.",
    amendments:["Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2022","2023 amendments"], lastVerified:"2026-11-24",
    verificationNotes:"Official MeitY publication used for the principal rule; use the latest Gazette consolidation for amendment status.",
    sources:[{label:"MeitY — IT Rules, 2021",url:"https://www.meity.gov.in/eservices/it-rules-2021"}],
    verification:"verified"
  },
  {
    id:"in-bns-2023", countryId:"india", title:"Bharatiya Nyaya Sanhita, 2023", year:2023,
    description:"India's criminal code, including cyber-enabled fraud, stalking, personation and offences involving digital evidence.",
    status:"in_force", enactmentDate:"2023-12-25", commencementDate:"2024-07-01",
    statusNote:"Replaced the Indian Penal Code for offences from 1 July 2024.",
    amendments:["Replaces the Indian Penal Code, 1860"], lastVerified:"2026-11-24",
    verificationNotes:"India Code text and commencement date checked; section mappings are general summaries rather than replacements for the official text.",
    sources:[{label:"India Code — Bharatiya Nyaya Sanhita, 2023",url:"https://www.indiacode.nic.in/handle/123456789/20925"}],
    verification:"verified", milestone:{date:"2024-07-01",label:"Came into force"}
  },
  {
    id:"in-telecom-2023", countryId:"india", title:"Telecommunications Act, 2023", year:2023,
    description:"Regulates telecommunications authorisations, infrastructure, spectrum and national security powers.",
    status:"partially_in_force", enactmentDate:"2023-12-24", commencementDate:"2024-06-26",
    statusNote:"Most provisions commenced on 26 June 2024; remaining provisions depend on Gazette notifications.",
    amendments:["Repeals the Indian Telegraph Act, 1885 and Indian Wireless Telegraphy Act, 1933"], lastVerified:"2026-11-24",
    verificationNotes:"Official institution-level commencement is verified, but exact remaining provisions require a fresh Gazette check.",
    sources:[{label:"India Code — Telecommunications Act, 2023",url:"https://www.indiacode.nic.in/handle/123456789/21529"}],
    verification:"pending"
  },

  {
    id:"us-cfaa", countryId:"usa", title:"Computer Fraud and Abuse Act — 18 U.S.C. § 1030", year:1986,
    description:"Federal offence for unauthorised access to, or damage of, protected computers and for certain cyber extortion.",
    status:"in_force", enactmentDate:"1986-10-12",
    statusNote:"Amended repeatedly; penalties vary by conduct and circumstances.",
    amendments:["Amended in 1994, 1996, 2001, 2008 and later legislation"], lastVerified:"2026-11-24",
    verificationNotes:"Official codified text checked; amendments and court interpretations are not exhaustively listed.",
    sources:[{label:"U.S. Code — 18 U.S.C. § 1030",url:USC(18,"1030")},{label:"Congress — source bill",url:"https://www.congress.gov/bill/99th-congress/senate-bill/2281"}],
    verification:"verified"
  },
  {
    id:"us-ecpa-sca", countryId:"usa", title:"Electronic Communications Privacy Act / Stored Communications Act", year:1986,
    description:"Federal framework for interception and access to electronic communications and stored communications held by providers.",
    status:"in_force", enactmentDate:"1986-10-21",
    statusNote:"Includes the Stored Communications Act at 18 U.S.C. §§ 2701–2712.",
    amendments:["USA PATRIOT Act","CLOUD Act","Other later amendments"], lastVerified:"2026-11-24",
    verificationNotes:"Official codified text and Congress source bill identified.",
    sources:[{label:"U.S. Code — 18 U.S.C. chapter 121",url:"https://uscode.house.gov/view.xhtml?path=/prelim@title18/partI/chapter121&edition=prelim"},{label:"Congress — ECPA source bill",url:"https://www.congress.gov/bill/99th-congress/house-bill/4952"}],
    verification:"verified"
  },
  {
    id:"us-coppa", countryId:"usa", title:"Children's Online Privacy Protection Act — 15 U.S.C. §§ 6501–6506", year:1998,
    description:"Federal requirements for operators collecting personal information from children under 13.",
    status:"in_force", enactmentDate:"1998-10-21", commencementDate:"2000-04-21",
    statusNote:"Implemented through FTC rules at 16 C.F.R. Part 312.",
    amendments:["FTC implementing-rule amendments"], lastVerified:"2026-11-24",
    verificationNotes:"Codified Act and FTC implementation period identified.",
    sources:[{label:"U.S. Code — 15 U.S.C. chapter 91",url:"https://uscode.house.gov/view.xhtml?path=/prelim@title15/chapter91&edition=prelim"},{label:"Congress — COPPA source bill",url:"https://www.congress.gov/bill/105th-congress/senate-bill/2493"}],
    verification:"verified"
  },
  {
    id:"us-cisa-2015", countryId:"usa", title:"Cybersecurity Information Sharing Act of 2015", year:2015,
    description:"Federal framework for voluntary cyber-threat indicator sharing and related liability protections.",
    status:"in_force", enactmentDate:"2015-12-18",
    statusNote:"Enacted as Division N of Pub. L. 114-113.",
    amendments:["No principal replacement identified"], lastVerified:"2026-11-24",
    verificationNotes:"Official Congress bill and U.S. Code chapter checked.",
    sources:[{label:"Congress — H.R. 2029",url:"https://www.congress.gov/bill/114th-congress/house-bill/2029"},{label:"U.S. Code — 6 U.S.C. chapter 6",url:"https://uscode.house.gov/view.xhtml?path=/prelim@title6/chapter6&edition=prelim"}],
    verification:"verified"
  },
  {
    id:"us-circia", countryId:"usa", title:"Cyber Incident Reporting for Critical Infrastructure Act of 2022", year:2022,
    description:"Codifies CISA incident-reporting duties for covered critical infrastructure, subject to implementing rulemaking.",
    status:"partially_in_force", enactmentDate:"2022-03-15",
    statusNote:"The statute is in force; mandatory reporting obligations depend on CISA's final rule.",
    amendments:["Codified at 6 U.S.C. §§ 681–687"], lastVerified:"2026-11-24",
    verificationNotes:"Do not represent mandatory reporting as fully operative until the CISA final rule is published and effective.",
    sources:[{label:"Congress — H.R. 2471",url:"https://www.congress.gov/bill/117th-congress/house-bill/2471"},{label:"U.S. Code — 6 U.S.C. §§ 681–687",url:"https://uscode.house.gov/view.xhtml?path=/prelim@title6/chapter6&edition=prelim"}],
    verification:"verified"
  },

  {
    id:"uk-cma-1990", countryId:"uk", title:"Computer Misuse Act 1990", year:1990,
    description:"UK cybercrime offences for unauthorised access, further-intent access and unauthorised acts impairing computers.",
    status:"in_force", enactmentDate:"1990-06-29", commencementDate:"1990-08-29",
    amendments:["Serious Crime Act 2015"], lastVerified:"2026-11-24", verificationNotes:"Official legislation text and commencement provision should be rechecked.",
    sources:[{label:"legislation.gov.uk — Computer Misuse Act 1990",url:"https://www.legislation.gov.uk/ukpga/1990/18"}], verification:"verified"
  },
  {
    id:"uk-dpa-2018", countryId:"uk", title:"Data Protection Act 2018", year:2018,
    description:"Domestic data-protection framework implementing UK GDPR and law-enforcement processing rules.",
    status:"in_force", enactmentDate:"2018-05-23", commencementDate:"2018-05-25",
    amendments:["Later data-reform amendments"], lastVerified:"2026-11-24", verificationNotes:"Consult the official commencement table for staged provisions.",
    sources:[{label:"legislation.gov.uk — Data Protection Act 2018",url:"https://www.legislation.gov.uk/ukpga/2018/12"}], verification:"verified"
  },
  {
    id:"uk-gdpr", countryId:"uk", title:"UK GDPR — retained Regulation (EU) 2016/679", year:2016,
    description:"UK-adapted data-protection regime for general processing, rights and controller and processor obligations.",
    status:"in_force", enactmentDate:"2016-04-27", commencementDate:"2018-05-25",
    amendments:["Adapted by the Data Protection Act 2018 and UK withdrawal legislation"], lastVerified:"2026-11-24",
    verificationNotes:"This is retained EU legislation as adapted for the UK, not a UK Act of Parliament.",
    sources:[{label:"legislation.gov.uk — UK GDPR",url:"https://www.legislation.gov.uk/eudr/2016/679"}], verification:"verified"
  },
  {
    id:"uk-ipa-2016", countryId:"uk", title:"Investigatory Powers Act 2016", year:2016,
    description:"Regulates communications interception, equipment interference and acquisition of communications data.",
    status:"partially_in_force", enactmentDate:"2016-11-29", commencementDate:"2016-12-30",
    amendments:["Investigatory Powers (Amendment) Act 2024"], lastVerified:"2026-11-24",
    verificationNotes:"Operative scope varies by provision and commencement instrument.",
    sources:[{label:"legislation.gov.uk — Investigatory Powers Act 2016",url:"https://www.legislation.gov.uk/ukpga/2016/25"}], verification:"verified"
  },
  {
    id:"uk-osa-2023", countryId:"uk", title:"Online Safety Act 2023", year:2023,
    description:"Platform duties concerning illegal and harmful content, with implementation staged by Ofcom regulations.",
    status:"partially_in_force", enactmentDate:"2023-10-19",
    amendments:["Commencement regulations and subordinate amendments"], lastVerified:"2026-11-24",
    verificationNotes:"Do not treat every duty as operative on the assent date.",
    sources:[{label:"legislation.gov.uk — Online Safety Act 2023",url:"https://www.legislation.gov.uk/ukpga/2023/50"}], verification:"verified"
  },

  {
    id:"au-privacy-1988", countryId:"australia", title:"Privacy Act 1988", year:1988,
    description:"Australian framework for privacy, Australian Privacy Principles and the Notifiable Data Breaches scheme.",
    status:"in_force", enactmentDate:"1988-12-14", commencementDate:"1989-01-01",
    amendments:["Privacy and Other Legislation Amendment Act 2024","Privacy Legislation Amendment (Enforcement and Other Measures) Act 2022"],
    lastVerified:"2026-11-24", verificationNotes:"Latest compilation checked conceptually; individual 2024 commencement dates should be confirmed.",
    sources:[{label:"Federal Register — Privacy Act 1988",url:"https://www.legislation.gov.au/C2004A03712/latest/text"}], verification:"verified"
  },
  {
    id:"au-cybercrime-2001", countryId:"australia", title:"Cybercrime Act 2001", year:2001,
    description:"Amends Commonwealth law to implement and support investigation of computer and electronic evidence offences.",
    status:"in_force", enactmentDate:"2001-09-28",
    amendments:["Later Commonwealth amendments"], lastVerified:"2026-11-24",
    verificationNotes:"Schedule commencement should be confirmed against the official latest compilation.",
    sources:[{label:"Federal Register — Cybercrime Act 2001",url:"https://www.legislation.gov.au/C2004A00878/latest/text"}], verification:"pending"
  },
  {
    id:"au-soci-2018", countryId:"australia", title:"Security of Critical Infrastructure Act 2018", year:2018,
    description:"Critical-infrastructure security obligations covering risk management, incident reporting and cyber security.",
    status:"partially_in_force", enactmentDate:"2018-12-11", commencementDate:"2018-12-11",
    amendments:["Security Legislation Amendment (Critical Infrastructure) Act 2021"], lastVerified:"2026-11-24",
    verificationNotes:"Scope and obligations depend on sector rules and later amendments.",
    sources:[{label:"Federal Register — SOCI Act 2018",url:"https://www.legislation.gov.au/C2018A00029/latest/text"}], verification:"verified"
  },
  {
    id:"au-osa-2021", countryId:"australia", title:"Online Safety Act 2021", year:2021,
    description:"Commonwealth framework for removal and blocking of harmful and illegal online content and services.",
    status:"in_force", enactmentDate:"2021-06-10", commencementDate:"2022-01-23",
    amendments:["Later online-safety amendments"], lastVerified:"2026-11-24",
    verificationNotes:"Staged commencement and designated-service rules should be confirmed in the latest compilation.",
    sources:[{label:"Federal Register — Online Safety Act 2021",url:"https://www.legislation.gov.au/C2021A00048/latest/text"}], verification:"verified"
  },

  {
    id:"sg-cma-1993", countryId:"singapore", title:"Computer Misuse Act 1993", year:1993,
    description:"Singapore offences for unauthorised access or modification, unauthorised interference and related cyber conduct.",
    status:"in_force", enactmentDate:"1993-11-30", commencementDate:"1994-08-30",
    amendments:["2013 amendment","2017 amendment","2024 amendment"], lastVerified:"2026-11-24",
    verificationNotes:"Exact 2024 amendment commencement dates remain subject to SSO verification.",
    sources:[{label:"Singapore Statutes Online — Computer Misuse Act",url:"https://sso.agc.gov.sg/Act/CMA1993"}], verification:"pending"
  },
  {
    id:"sg-cybersecurity-2018", countryId:"singapore", title:"Cybersecurity Act 2018", year:2018,
    description:"Singapore framework for critical information infrastructure, incident response and cybersecurity duties.",
    status:"in_force", enactmentDate:"2018-02-19", commencementDate:"2018-08-31",
    amendments:["Cybersecurity (Amendment) Act 2024"], lastVerified:"2026-11-24",
    verificationNotes:"2024 amendment commencement should be checked provision-by-provision on SSO.",
    sources:[{label:"Singapore Statutes Online — Cybersecurity Act",url:"https://sso.agc.gov.sg/Act/CSA2018"}], verification:"pending"
  },
  {
    id:"sg-pdpa-2012", countryId:"singapore", title:"Personal Data Protection Act 2012", year:2012,
    description:"Singapore framework for collection, use, disclosure and protection of personal data.",
    status:"in_force", enactmentDate:"2012-10-15", commencementDate:"2014-07-02",
    amendments:["PDPA Amendment Acts","2020 amendment commencing in stages"], lastVerified:"2026-11-24",
    verificationNotes:"Use SSO latest consolidated text for 2026 status.",
    sources:[{label:"Singapore Statutes Online — PDPA",url:"https://sso.agc.gov.sg/Act/PDPA2012"}], verification:"verified"
  },
  {
    id:"sg-ocha-2023", countryId:"singapore", title:"Online Criminal Harms Act 2023", year:2023,
    description:"Framework for directions against online criminal content and for designated services to reduce exposure to criminal harms.",
    status:"partially_in_force", enactmentDate:"2023",
    amendments:["Delegated directions and subordinate implementation instruments"], lastVerified:"2026-11-24",
    verificationNotes:"Exact assent and commencement dates are pending confirmation on SSO.",
    sources:[{label:"Singapore Statutes Online — Online Criminal Harms Act",url:"https://sso.agc.gov.sg/Act/OCHA2023"}], verification:"pending"
  }
];

export const LAW_BY_ID = Object.fromEntries(LAWS.map((law) => [law.id, law])) as Record<string, Law>;
