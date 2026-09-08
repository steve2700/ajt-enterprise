import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'

const GOLD = '#dcb068'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const BG = '#0d0705'
const INK = '#1a1a1a'

const PHONE_DISPLAY = '065 867 7363'
const PHONE_TEL = '0658677363'
const EMAIL = 'Info@ajtenterprise.co.za'
const WEBSITE = 'https://www.ajtenterprise.co.za'
const PRIVACY_URL = `${WEBSITE}/privacy-policy`

export const metadata: Metadata = {
  title: 'Privacy Policy | AJT Enterprise',
  description:
    'Privacy Policy for AJT Enterprise. Learn how we collect, use, store and protect personal information in accordance with South African privacy law and POPIA.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: PRIVACY_URL,
  },
  openGraph: {
    title: 'Privacy Policy | AJT Enterprise',
    description:
      'Learn how AJT Enterprise collects, uses, stores and protects personal information in accordance with POPIA.',
    url: PRIVACY_URL,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AJT Enterprise Shadeports and Carports',
      },
    ],
  },
}

const sections = [
  {
    heading: '1. Who We Are',
    body: `AJT Enterprise ("AJT Enterprise", "we", "us" or "our") is a South African business providing shadeport and carport installation, repair, maintenance and related services across our service areas.

For purposes of the Protection of Personal Information Act, 4 of 2013 ("POPIA"), AJT Enterprise acts as the responsible party in relation to personal information that we collect and process in connection with our website, enquiries, quotations, site visits, installations, repairs, maintenance services and business operations.

Our website is:

${WEBSITE}

Privacy enquiries may be directed to:

Email: ${EMAIL}
Telephone: ${PHONE_DISPLAY}`,
  },

  {
    heading: '2. Our Commitment to Privacy',
    body: `We respect the privacy of every person who interacts with AJT Enterprise.

We are committed to processing personal information responsibly, lawfully and transparently. We collect information for specific business purposes, only use information where there is a lawful reason to do so, take reasonable steps to protect information in our possession and respect the rights available to individuals under applicable South African law.

This Privacy Policy explains how we handle personal information when you visit our website, contact us, request a quotation, communicate with us, arrange a site visit or purchase our services.`,
  },

  {
    heading: '3. Personal Information We May Collect',
    body: `Depending on how you interact with us, we may collect information such as:

Your name and surname

Your telephone number

Your email address

Your business or organisation name

Your service address or general location

Information about the shadeport or carport you are enquiring about

Information about the size, type or requirements of a proposed structure

Information you provide in a message, enquiry, quotation request or other communication

Information required to arrange a site visit or provide our services

Records of communications between you and AJT Enterprise

Information relating to a quotation, order, installation, repair or maintenance service

Technical information relating to your interaction with our website, where such information is collected by the website or its hosting and security systems

We aim to collect only information that is reasonably necessary for the purpose for which it is being collected.`,
  },

  {
    heading: '4. Information You Provide to Us',
    body: `You may provide personal information to us when you:

Complete a quotation or contact form

Telephone us

Send us an email

Contact us through WhatsApp

Request a site visit

Request a quotation

Ask about our services

Arrange an installation, repair or maintenance service

Communicate with us about an existing or proposed project

We use the information you provide to understand your requirements, respond to your enquiry and provide the service you have requested.`,
  },

  {
    heading: '5. How We Use Personal Information',
    body: `We may process your personal information for the following purposes:

To respond to enquiries

To provide quotations

To arrange site visits

To assess installation requirements

To communicate with you about your project

To provide shadeport and carport installation services

To provide repair and maintenance services

To manage customer relationships

To process payments and maintain business records

To communicate with you regarding an existing service or project

To resolve complaints or service issues

To maintain appropriate business and accounting records

To protect our website, systems, business and customers against fraud, abuse or security threats

To comply with legal and regulatory obligations

To improve our services and website where this can be done lawfully

We do not sell your personal information to third parties.`,
  },

  {
    heading: '6. Lawful Processing Under POPIA',
    body: `We process personal information in accordance with the conditions for lawful processing set out in POPIA.

Depending on the circumstances, the lawful basis for processing may include:

Your consent

The need to take steps at your request before entering into a contract

The performance of a contract or service you have requested

Compliance with a legal obligation

Our legitimate business interests, where those interests are lawful and do not unfairly prejudice your rights

Where we rely on consent, you may withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing that took place before the withdrawal.

Where information is necessary for us to provide a requested service, refusing to provide that information may mean that we are unable to provide the relevant service or respond fully to your enquiry.`,
  },

  {
    heading: '7. Direct Marketing',
    body: `We respect your right to control how your personal information is used for direct marketing.

Where applicable law requires consent for direct electronic marketing, we will obtain the required consent before sending such communications.

You may object to receiving direct marketing communications from us at any time.

If you no longer wish to receive marketing communications, you may contact us using the details provided in this policy.

We do not sell customer information to marketing databases or unrelated third parties.`,
  },

  {
    heading: '8. Sharing Personal Information',
    body: `We do not sell or rent personal information.

We may share personal information where reasonably necessary to provide our services, operate our business, comply with the law or protect our legitimate interests.

Depending on the circumstances, information may be shared with service providers or professional advisers who assist us with matters such as website hosting, information technology, payment processing, accounting, legal services, business administration or other operational requirements.

Where we use another organisation to process personal information on our behalf, we take reasonable steps to ensure that the information is handled appropriately and protected against unauthorised access or disclosure.

We may also disclose information where required by law, a court order, a lawful regulatory request or where disclosure is necessary to protect the rights, property or safety of AJT Enterprise, our customers or another person.`,
  },

  {
    heading: '9. Information Security',
    body: `We take reasonable technical and organisational measures to protect personal information against loss, damage, unauthorised access, unauthorised disclosure, alteration and destruction.

These measures may include appropriate access controls, secure systems, restricted access to information, password protection, security monitoring and appropriate operational procedures.

No electronic transmission or storage system can be guaranteed to be completely secure. While we take reasonable steps to protect information, we cannot guarantee absolute security.

If we become aware of a security compromise involving personal information, we will take appropriate steps to investigate and respond to the incident in accordance with applicable law.`,
  },

  {
    heading: '10. How Long We Keep Personal Information',
    body: `We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide our services, to maintain appropriate business records, to resolve disputes, to comply with legal obligations or for another lawful purpose.

Different types of information may need to be retained for different periods.

When personal information is no longer required and there is no lawful reason to retain it, we will take reasonable steps to securely delete, destroy or anonymise it.`,
  },

  {
    heading: '11. Website Forms and Enquiries',
    body: `When you submit information through a form on our website, the information may be used to respond to your enquiry, prepare a quotation, arrange a site visit or otherwise provide the service you have requested.

Information submitted through our website should be accurate and should not include unnecessary sensitive personal information.

Please do not submit identity documents, passwords, payment card information, medical information or other sensitive information through a general contact or quotation form unless we specifically request it through an appropriate and secure process.`,
  },

  {
    heading: '12. Cookies and Website Technologies',
    body: `Our website may use cookies or similar technologies that are necessary for the website to operate correctly, maintain security, remember certain preferences or understand how the website is being used.

Where optional analytics, advertising or other tracking technologies are introduced, we will take appropriate steps to provide information about their use and obtain consent where required by applicable law.

You can control cookies through your browser settings. Disabling certain cookies may affect some website functionality.

We do not use cookies as a means of selling your personal information.`,
  },

  {
    heading: '13. Third Party Websites and Services',
    body: `Our website may contain links to third party websites or services, including communication platforms and social media platforms.

If you follow a link to another website or communicate with us through a third party platform, that platform may process your information according to its own privacy policy and terms.

AJT Enterprise is not responsible for the privacy practices, security or content of third party websites or platforms.

We recommend reviewing the privacy policy of any third party service before providing personal information to that service.`,
  },

  {
    heading: '14. Children',
    body: `Our services and website are intended for general business and consumer use and are not directed specifically at children.

We do not knowingly collect personal information from children for purposes unrelated to our lawful business activities.

If you believe that a child has provided personal information to us without appropriate consent or lawful authority, please contact us so that we can investigate and take appropriate action.`,
  },

  {
    heading: '15. Your Rights Under POPIA',
    body: `Subject to the conditions and limitations provided by law, you may have the right to:

Request access to personal information that we hold about you

Request correction of inaccurate, incomplete or outdated personal information

Request deletion of personal information where there is a lawful basis for deletion

Object to the processing of your personal information in circumstances permitted by law

Object to the use of your personal information for direct marketing

Withdraw consent where processing is based on consent

Request information about how your personal information is being processed

Lodge a complaint with the Information Regulator where you believe your personal information has been handled unlawfully

Some rights are subject to legal exceptions. For example, we may be required to retain certain information to comply with a legal obligation or to establish, exercise or defend a legal claim.`,
  },

  {
    heading: '16. How to Exercise Your Rights',
    body: `To request access, correction, deletion or another privacy related action, contact AJT Enterprise using the details below.

Email: ${EMAIL}

Telephone: ${PHONE_DISPLAY}

Please provide enough information for us to understand your request and verify your identity where reasonably necessary.

We will consider your request and respond within the period required by applicable law.

We may need to request additional information where reasonably necessary to verify the identity of the person making the request and to protect personal information against unauthorised disclosure.`,
  },

  {
    heading: '17. Accuracy of Personal Information',
    body: `We take reasonable steps to keep personal information in our possession accurate, complete and up to date where necessary for the purpose for which it is processed.

You can help us by notifying us if your personal information changes or if you believe information we hold about you is incorrect.

Where appropriate, we will correct or update information after receiving a valid request.`,
  },

  {
    heading: '18. International Transfers',
    body: `Some technology, hosting or service providers used in connection with our website or business operations may process information outside South Africa.

Where personal information is transferred outside South Africa, we will take reasonable steps to ensure that the transfer is handled in accordance with applicable legal requirements, including the requirements of POPIA relating to cross border transfers.

We will not knowingly transfer personal information internationally in a manner that unlawfully reduces the protection available to the information.`,
  },

  {
    heading: '19. Security Compromises',
    body: `If we reasonably suspect that personal information in our possession has been accessed or acquired by an unauthorised person, we will assess the incident and take appropriate steps required by applicable law.

Where POPIA requires notification of a security compromise, we will notify the Information Regulator and affected data subjects in accordance with the applicable requirements.

We encourage customers to contact us promptly if they believe that information submitted to AJT Enterprise has been compromised.`,
  },

  {
    heading: '20. Complaints',
    body: `If you have a concern about how we process your personal information, we encourage you to contact us first so that we can investigate and attempt to resolve the matter.

You may also lodge a complaint with the Information Regulator of South Africa where you believe that your personal information has been processed unlawfully.

The Information Regulator is an independent authority responsible for monitoring and enforcing compliance with POPIA.

Information Regulator of South Africa

Website: https://inforegulator.org.za

Telephone: 010 023 5200

Email: enquiries@inforegulator.org.za`,
  },

  {
    heading: '21. Changes to This Privacy Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our business, website, services, technology or applicable legal requirements.

When we make changes, the updated version will be published on this page together with the date on which it was last updated.

We encourage you to review this page periodically so that you remain informed about how AJT Enterprise handles personal information.`,
  },

  {
    heading: '22. Contact AJT Enterprise About Privacy',
    body: `If you have a question, request or concern about this Privacy Policy or the way AJT Enterprise handles personal information, please contact us.

AJT Enterprise

Email: ${EMAIL}

Telephone: ${PHONE_DISPLAY}

Website: ${WEBSITE}`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div
        style={{ background: '#f5f4f0' }}
        className="border-b border-black/[0.08]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section
        style={{ background: BG }}
        className="border-b"
      >
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p
            className="text-xs font-bold tracking-[0.35em] uppercase mb-4"
            style={{ color: GOLD }}
          >
            Legal
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-white/50 text-sm">
            Last updated: September 2026 · AJT Enterprise
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-white border border-black/[0.08] p-6 md:p-8 mb-10">
            <div
              className="w-8 h-0.5 mb-5"
              style={{ background: GOLD }}
            />

            <p className="text-[#1a1a1a]/75 text-base leading-relaxed">
              At AJT Enterprise, we respect your privacy and are committed to
              protecting the personal information you share with us. This Privacy
              Policy explains how we collect, use, store and protect personal
              information when you visit our website, contact us, request a
              quotation or use our shadeport and carport services.
            </p>

            <p className="text-[#1a1a1a]/75 text-base leading-relaxed mt-5">
              This policy is intended to explain our privacy practices in a clear
              and practical way and to describe the rights available to you under
              applicable South African privacy law, including the Protection of
              Personal Information Act, 4 of 2013.
            </p>
          </div>

          {/* Policy sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-lg md:text-xl font-bold text-[#1a1a1a] mb-3">
                  {section.heading}
                </h2>

                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: GOLD }}
                />

                <p className="text-[#1a1a1a]/65 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-14 p-6 md:p-8 bg-white border border-black/[0.08]">
            <div
              className="w-8 h-0.5 mb-4"
              style={{ background: GOLD }}
            />

            <h2 className="font-bold text-[#1a1a1a] text-lg mb-2">
              Questions about your privacy?
            </h2>

            <p className="text-sm text-[#1a1a1a]/60 mb-6 leading-relaxed">
              If you have a question about this Privacy Policy or want to
              exercise a privacy right, contact AJT Enterprise directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                style={{
                  background: `linear-gradient(135deg, ${RED_LIGHT_FIX}, ${RED})`,
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white font-semibold text-sm hover:brightness-110 transition-all rounded-sm"
              >
                Call {PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center px-5 py-3 border border-black/[0.15] text-[#1a1a1a] font-semibold text-sm hover:border-[#dcb068] hover:text-[#8a6535] transition-colors rounded-sm"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <section className="py-10 bg-white border-t border-black/[0.08]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <Link
              href="/terms"
              className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              href="/contact"
              className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors"
            >
              Contact Us
            </Link>

            <Link
              href="/"
              className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
