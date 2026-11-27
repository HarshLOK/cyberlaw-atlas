import type { CategoryId, CountryId, Provision } from "./types";

const p = (countryId: CountryId, categoryId: CategoryId, lawId: string, sections: string[], summary: string, punishment: string | null = null): Provision =>
  ({ id:`${countryId}:${categoryId}:${lawId}`, countryId, categoryId, lawId, sections, summary, punishment });

export const PROVISIONS: Provision[] = [
  p("india","hacking","in-it-act-2000",["Sections 43 and 66"],"Civil liability and criminal liability may apply to unauthorised access, damage or dishonest and fraudulent acts involving a computer resource."),
  p("india","identity-theft","in-it-act-2000",["Section 66C"],"Fraudulent or dishonest use of another person's password, electronic signature or unique identification information."),
  p("india","online-fraud","in-it-act-2000",["Section 66D"],"Cheating by personation through a communication device or computer resource."),
  p("india","online-fraud","in-bns-2023",["Section 318"],"General cheating provisions may also apply to fraudulent conduct carried out through digital means."),
  p("india","ransomware","in-it-act-2000",["Sections 43 and 66"],"Unauthorised damage or dishonest and fraudulent interference with a computer resource may apply to ransomware conduct."),
  p("india","cyberstalking","in-bns-2023",["Section 78"],"The stalking offence includes monitoring a person's use of the internet, email or electronic communication."),
  p("india","data-breaches","in-dpdp-2023",["Personal data breach provisions"],"Data fiduciaries have duties concerning secure processing and breach notice, subject to staged commencement and implementing rules."),
  p("india","data-breaches","in-it-act-2000",["Sections 43A and 72A"],"Compensation and disclosure provisions address negligent data protection and disclosure of personal information."),
  p("india","ai-deepfakes","in-it-rules-2021",["Rules 3 and 4"],"Intermediary due-diligence and grievance duties may apply to synthetic or manipulated content, subject to the rules' scope and later amendments."),
  p("india","ai-impersonation","in-it-act-2000",["Sections 66C and 66D"],"Password misuse and cheating by digital personation may apply to AI-generated voice or video impersonation."),

  p("usa","hacking","us-cfaa",["18 U.S.C. § 1030(a)(2)","§ 1030(a)(5)"],"Federal liability can arise from intentionally accessing a protected computer without authorisation or in excess of authorisation, and from knowingly causing damage."),
  p("usa","identity-theft","us-cfaa",["18 U.S.C. § 1030(a)(2)"],"Obtaining information from a protected computer without authorisation can fall within the CFAA, while the scope of separate identity-theft statutes may differ."),
  p("usa","online-fraud","us-cfaa",["18 U.S.C. § 1030(a)(4)"],"Access to a protected computer with intent to defraud and furtherance of a fraud scheme is addressed where the statutory elements are met."),
  p("usa","ransomware","us-cfaa",["18 U.S.C. § 1030(a)(5)","§ 1030(a)(7)"],"Damage to protected computers and threats to damage computers or data to obtain something of value may fall within the CFAA."),
  p("usa","ransomware","us-circia",["6 U.S.C. §§ 681–687"],"Covered critical infrastructure entities may have reporting duties for substantial incidents and ransom payments once CISA rulemaking becomes effective."),
  p("usa","cyberstalking","us-cfaa",["18 U.S.C. § 1030(a)(2)"],"The CFAA may apply only when the conduct involves unauthorised access or exceeding access; stalking claims must also satisfy separate federal stalking statutes."),
  p("usa","data-breaches","us-ecpa-sca",["18 U.S.C. §§ 2701–2712"],"The Stored Communications Act governs some provider-held communications and authorised governmental access; it does not create a general private-sector breach-notification duty."),
  p("usa","ai-deepfakes","us-cfaa",["18 U.S.C. § 1030"],"A deepfake campaign may implicate CFAA provisions if it involves unauthorised access or damage to protected computers."),
  p("usa","ai-impersonation","us-cfaa",["18 U.S.C. § 1030"],"AI voice or video impersonation is governed primarily by the facts and potentially applicable fraud statutes; CFAA scope depends on computer access."),

  p("uk","hacking","uk-cma-1990",["Sections 1, 2 and 3"],"The Act distinguishes unauthorised access, access with intent to commit further offences, and unauthorised acts that impair computer systems."),
  p("uk","identity-theft","uk-cma-1990",["Sections 1 and 2"],"Unauthorised access and further-intent access can apply to stolen credentials, but the CMA is not a general identity-theft Act."),
  p("uk","online-fraud","uk-cma-1990",["Sections 1 and 2"],"Unauthorised access or access with intent to commit another offence may accompany online fraud, which may also fall under separate fraud legislation."),
  p("uk","ransomware","uk-cma-1990",["Sections 3 and 3ZA"],"Unauthorised acts that impair or create serious risk to a computer system may apply to ransomware; the CMA's commencement and amendment text should be checked."),
  p("uk","cyberstalking","uk-cma-1990",["Sections 1 and 2"],"Computer misuse provisions may apply if the course of conduct involves unauthorised access; separate harassment statutes may be more directly relevant."),
  p("uk","data-breaches","uk-dpa-2018",["DPA 2018 and UK GDPR"],"The framework regulates controllers and processors and may require breach notification to the regulator and affected people where statutory thresholds are met."),
  p("uk","data-breaches","uk-gdpr",["Articles 33 and 34"],"Personal-data breaches may trigger controller notification duties to the ICO and communications to affected individuals."),
  p("uk","ai-deepfakes","uk-osa-2023",["Designated illegal and harmful-content duties"],"Platform duties can apply to specified harmful or illegal synthetic content, subject to Ofcom rules and staged commencement."),

  p("australia","hacking","au-cybercrime-2001",["Cybercrime Act amendments"],"The Act amended Commonwealth cybercrime powers and evidence-gathering regimes; core computer offences should be checked in the Criminal Code."),
  p("australia","identity-theft","au-cybercrime-2001",["Cybercrime Act amendments"],"The Act supports investigation and amendment of Commonwealth offences; it is not itself a standalone identity-theft code."),
  p("australia","online-fraud","au-cybercrime-2001",["Cybercrime Act amendments"],"Digital fraud may engage Commonwealth computer and assistance provisions together with separate fraud offences."),
  p("australia","ransomware","au-soci-2018",["Cyber incident response and critical-infrastructure duties"],"Critical infrastructure operators may have risk-management and incident-reporting duties for ransomware events."),
  p("australia","data-breaches","au-privacy-1988",["Australian Privacy Principles","Notifiable Data Breaches scheme"],"Certain eligible data breaches require notification to affected individuals and the OAIC where statutory thresholds are met."),
  p("australia","ai-deepfakes","au-osa-2021",["Online-safety powers"],"Removal and blocking powers may apply to harmful or illegal synthetic content under the Act and applicable rules."),
  p("australia","ai-impersonation","au-privacy-1988",["Australian Privacy Principles"],"Privacy duties may apply to collection or use of personal data in impersonation systems, but do not alone establish a general cybercrime offence."),

  p("singapore","hacking","sg-cma-1993",["Unauthorised access and modification provisions"],"Unauthorised access, modification and interference with computer material are offences under the Act, subject to the elements in the consolidated text."),
  p("singapore","identity-theft","sg-cma-1993",["Unauthorised access provisions"],"Misuse of credentials may attract unauthorised-access offences where the statutory elements are satisfied."),
  p("singapore","online-fraud","sg-cma-1993",["Computer misuse and offence-linking provisions"],"Unauthorised access or modification in furtherance of fraud may be charged under the Act, while separate fraud offences may also apply."),
  p("singapore","ransomware","sg-cma-1993",["Unauthorised access, modification and service disruption provisions"],"Ransomware conduct may engage amendments covering unauthorised access, modification and extortion-related computer offences."),
  p("singapore","cyberstalking","sg-cma-1993",["Unauthorised access and modification provisions"],"Cyberstalking conduct may implicate separate harassment and computer-misuse provisions where their respective elements are met."),
  p("singapore","data-breaches","sg-pdpa-2012",["Protection and breach-notification provisions"],"The PDPA framework imposes organisational safeguards and, where applicable, notification duties for accountable data breaches."),
  p("singapore","ai-deepfakes","sg-ocha-2023",["Online Criminal Harms Act directions"],"The Act provides direction powers against online criminal harms; application depends on designated content and service obligations."),
];
