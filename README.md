# CyberLaw Atlas

Build a complete, modern, responsive website called "CyberLaw Atlas".

PROJECT PURPOSE:
An international cybercrime and cyber law information platform that helps users understand and compare cybercrime legislation across different countries.

TECHNOLOGY:

React

Tailwind CSS

Lucide icons

Responsive mobile-first design

Prepare the application for Supabase integration.

DESIGN:

Professional cybersecurity-themed dark interface.

Dark navy background with blue and purple accents.

Clean typography and modern cards.

Smooth navigation and subtle animations.

Fully responsive on mobile, tablet and desktop.

CREATE THESE PAGES:

HOME:

Website introduction.

Country statistics.

Popular cybercrime categories.

Recently updated legal information.

Navigation to all sections.

COUNTRIES:

Display India, USA, UK, Australia and Singapore.

Country cards with flags.

Search and filtering.

Individual country information pages.

CYBERCRIMES:

Hacking.

Identity theft.

Online financial fraud.

Ransomware.

Cyberstalking.

Data breaches.

AI-generated deepfakes.

AI impersonation and fraud.

LAW COMPARISON:

Select two countries.

Select a cybercrime category.

Compare relevant laws, legal sections, punishments and legal status.

Display information in an easy-to-read comparison layout.

On mobile, stack the country comparisons vertically.

AI RESEARCH:

Create a chatbot interface.

Include a web research option.

Display summarized answers and source links.

Prepare the interface for future Gemini API and Tavily integration.

LAW STATUS:

Proposed.

Enacted.

Not commenced.

In force.

Partially in force.

Repealed.

IMPORTANT:

Use clearly labelled pending-verification data where official details are not yet confirmed.

Never invent legal provisions or punishments.

Every legal entry should support official source links.

Do not display fake statistics.

Create reusable components.

Ensure every button and navigation link works.

Make mobile responsiveness a priority.

The website now uses bundled, source-backed legal records. It does not require a database or external API.



Use the attached screenshots as visual design references. Follow their layout, spacing, typography, card styles, colors and overall visual hierarchy.

Do not copy them exactly. Create a consistent design system across all pages.

Most importantly:

Design mobile-first.

Create separate mobile and desktop navigation layouts.

Make comparison tables mobile-friendly.

Ensure cards resize properly.

Avoid horizontal overflow.

Maintain a professional cybersecurity aesthetic across every page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/514f0382-5b77-4a03-b74b-898fef2bbb5b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Updating legal data

Legal records are maintained in `src/data/laws.ts`, `src/data/provisions.ts`, and `src/data/countries.ts`.
No database or scheduled job is required.

1. Verify the change at the relevant official portal: India Code, Congress/U.S. Code,
   legislation.gov.uk, the Australian Federal Register, or Singapore Statutes Online.
2. Update the record with an official source URL, enactment date, commencement date,
   status, amendments, `lastVerified` date and verification notes.
3. Set `verification` to `pending` until uncertain dates or commencement details are confirmed.
4. Run `npm test` and `npm run build`, then redeploy the frontend.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
