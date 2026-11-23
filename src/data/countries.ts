import type { Country } from "./types";

export const COUNTRIES: Country[] = [
  {
    id: "india",
    name: "India",
    isoCode: "in",
    region: "Asia",
    legalSystem: "Common law",
    overview:
      "Cyber offences are mainly covered by the Information Technology Act, 2000, alongside the Bharatiya Nyaya Sanhita, 2023, which replaced the Indian Penal Code. Data protection is governed by the Digital Personal Data Protection Act, 2023.",
    portal: { label: "India Code (official)", url: "https://www.indiacode.nic.in/" },
  },
  {
    id: "usa",
    name: "United States",
    isoCode: "us",
    region: "Americas",
    legalSystem: "Common law (federal system)",
    overview:
      "Federal cybercrime law centres on the Computer Fraud and Abuse Act (18 U.S.C. §1030) together with fraud and identity theft statutes. Many areas, including data-breach notification, are also regulated by individual states.",
    portal: { label: "United States Code (official)", url: "https://uscode.house.gov/" },
  },
  {
    id: "uk",
    name: "United Kingdom",
    isoCode: "gb",
    region: "Europe",
    legalSystem: "Common law",
    overview:
      "The Computer Misuse Act 1990 is the core cybercrime statute, supported by the Fraud Act 2006, harassment laws, the Data Protection Act 2018 and the Online Safety Act 2023.",
    portal: { label: "legislation.gov.uk (official)", url: "https://www.legislation.gov.uk/" },
  },
  {
    id: "australia",
    name: "Australia",
    isoCode: "au",
    region: "Oceania",
    legalSystem: "Common law (federal system)",
    overview:
      "Commonwealth computer offences sit in Part 10.7 of the Criminal Code Act 1995. The Privacy Act 1988 sets out the Notifiable Data Breaches scheme, and the Cyber Security Act 2024 adds ransomware payment reporting.",
    portal: { label: "Federal Register of Legislation (official)", url: "https://www.legislation.gov.au/" },
  },
  {
    id: "singapore",
    name: "Singapore",
    isoCode: "sg",
    region: "Asia",
    legalSystem: "Common law",
    overview:
      "The Computer Misuse Act 1993 covers unauthorised access and modification. Fraud falls under the Penal Code 1871, harassment under the Protection from Harassment Act 2014, and data protection under the PDPA 2012.",
    portal: { label: "Singapore Statutes Online (official)", url: "https://sso.agc.gov.sg/" },
  },
];

export const COUNTRY_BY_ID = Object.fromEntries(COUNTRIES.map((c) => [c.id, c])) as Record<
  Country["id"],
  Country
>;

export const flagUrl = (isoCode: string, width: 160 | 320 | 640 = 320) =>
  `https://flagcdn.com/w${width}/${isoCode}.png`;
