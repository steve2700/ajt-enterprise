import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'

const GOLD = '#dcb068'
const GOLD_DARK = '#8a6535'
const RED = '#b8161d'
const RED_LIGHT = '#fc4d53'
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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PRIVACY_URL,
  },
  openGraph: {
    title: 'Privacy Policy | AJT Enterprise',
    description:
      'Privacy Policy for AJT Enterprise covering the collection, use, storage and protection of personal information.',
    url: PRIVACY_URL,
    siteName: 'AJT Enterprise',
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
    number: '01',
    title: 'Who We Are',
    content: (
      <>
        <p>
          AJT Enterprise is a South African business providing shadeport and
          carport solutions, including installation, repairs, maintenance and
          related services.
        </p>
        <p>
          This Privacy Policy explains how AJT Enterprise collects, uses,
          stores, protects and handles personal information when you visit our
          website, contact us, request a quotation or communicate with us about
          our services.
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'Our Commitment to Privacy',
    content: (
      <>
        <p>
          AJT Enterprise respects the privacy of individuals and is committed
          to handling personal information responsibly.
        </p>
        <p>
          We aim to process personal information in accordance with applicable
          South African privacy requirements, including the Protection of
          Personal Information Act 4 of 2013, commonly known as POPIA.
        </p>
        <p>
          We only seek to collect information that is reasonably necessary for
          legitimate business purposes and for providing our services.
        </p>
      </>
    ),
  },
  {
    number: '03',
    title: 'Personal Information We May Collect',
    content: (
      <>
        <p>
          Depending on how you interact with AJT Enterprise, we may collect
          information such as your name, telephone number, email address,
          location, service requirements and information you provide when
          describing a shadeport or carport project.
        </p>
        <p>
          We may also receive information contained in messages, quotation
          requests, correspondence or other communications that you choose to
          send to us.
        </p>
        <p>
          We do not intentionally request personal information that is not
          reasonably required for the purpose for which it is collected.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Information You Provide to Us',
    content: (
      <>
        <p>
          When you submit an enquiry through our website or contact AJT
          Enterprise directly, you may voluntarily provide information such as
          your name, phone number, email address, location and details about
          the work you require.
        </p>
        <p>
          You are responsible for ensuring that information you provide to us
          is accurate and that you have the right to provide any information
          relating to another person.
        </p>
      </>
    ),
  },
  {
    number: '05',
    title: 'How We Use Personal Information',
    content: (
      <>
        <p>AJT Enterprise may use personal information to:</p>

        <ul className="space-y-3">
          <li>Respond to enquiries and requests for information.</li>
          <li>Prepare and provide quotations.</li>
          <li>Understand your shadeport or carport requirements.</li>
          <li>Arrange consultations, measurements or site related discussions.</li>
          <li>Provide requested services.</li>
          <li>Communicate with you about your enquiry or project.</li>
          <li>Maintain appropriate business records.</li>
          <li>Improve our website, services and customer experience.</li>
          <li>Protect our website, business and users against misuse or security threats.</li>
          <li>Meet legal or regulatory obligations where applicable.</li>
        </ul>
      </>
    ),
  },
  {
    number: '06',
    title: 'Lawful Processing Under POPIA',
    content: (
      <>
        <p>
          Personal information is processed for specific and legitimate
          purposes connected with our business activities.
        </p>
        <p>
          Depending on the circumstances, processing may be based on your
          consent, the performance of a service or agreement, a legitimate
          business purpose, compliance with a legal obligation or another
          lawful basis recognised under applicable law.
        </p>
        <p>
          We aim to apply appropriate principles of accountability, purpose
          limitation, information quality, openness, security and data subject
          participation when processing personal information.
        </p>
      </>
    ),
  },
  {
    number: '07',
    title: 'Direct Marketing',
    content: (
      <>
        <p>
          AJT Enterprise may communicate with existing or prospective customers
          about our services where permitted by applicable law.
        </p>
        <p>
          Where consent is required for direct electronic marketing, we will
          seek that consent before sending the relevant marketing
          communications.
        </p>
        <p>
          You may request that we stop sending marketing communications to you.
          We will take reasonable steps to respect such requests.
        </p>
      </>
    ),
  },
  {
    number: '08',
    title: 'Sharing Personal Information',
    content: (
      <>
        <p>
          AJT Enterprise does not sell your personal information.
        </p>
        <p>
          We may disclose personal information where reasonably necessary to
          provide a service, operate our business, respond to your request,
          comply with a legal obligation, protect our rights or protect the
          security of our website and users.
        </p>
        <p>
          Where external service providers process information on our behalf,
          we aim to use appropriate providers and take reasonable steps to
          ensure that personal information is handled appropriately.
        </p>
      </>
    ),
  },
  {
    number: '09',
    title: 'Information Security',
    content: (
      <>
        <p>
          AJT Enterprise takes reasonable steps to protect personal information
          against unauthorised access, loss, misuse, alteration, disclosure or
          destruction.
        </p>
        <p>
          Security measures may include appropriate technical and organisational
          safeguards, access controls and secure handling procedures.
        </p>
        <p>
          No website, electronic communication system or method of storing
          information can be guaranteed to be completely secure. We therefore
          encourage you to take reasonable care when sending personal
          information online.
        </p>
      </>
    ),
  },
  {
    number: '10',
    title: 'How Long We Keep Personal Information',
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes for which it was collected, to provide
          services, maintain appropriate business records, resolve disputes,
          comply with legal obligations or protect our legitimate interests.
        </p>
        <p>
          When information is no longer reasonably required, we aim to securely
          delete, destroy or anonymise it where appropriate.
        </p>
      </>
    ),
  },
  {
    number: '11',
    title: 'Website Forms and Enquiries',
    content: (
      <>
        <p>
          Information submitted through forms on the AJT Enterprise website is
          used to respond to the enquiry and understand the requested service.
        </p>
        <p>
          Depending on the form, this may include your name, telephone number,
          email address, location, requested service and project details.
        </p>
        <p>
          Please do not submit confidential information that is not necessary
          for your enquiry.
        </p>
      </>
    ),
  },
  {
    number: '12',
    title: 'Cookies and Website Technologies',
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies where required
          for website functionality, security, performance, preferences or
          other legitimate website purposes.
        </p>
        <p>
          Some technologies may collect limited technical information such as
          browser type, device information, approximate usage information or
          pages visited.
        </p>
        <p>
          If we introduce additional analytics, advertising or tracking
          technologies that materially affect how personal information is
          processed, this Privacy Policy may be updated to reflect that
          processing.
        </p>
      </>
    ),
  },
  {
    number: '13',
    title: 'Third Party Websites and Services',
    content: (
      <>
        <p>
          Our website may contain links to websites or services operated by
          third parties.
        </p>
        <p>
          AJT Enterprise is not responsible for the privacy practices,
          security or content of third party websites. We recommend reviewing
          the privacy policy of any external website before providing personal
          information.
        </p>
      </>
    ),
  },
  {
    number: '14',
    title: 'Children',
    content: (
      <>
        <p>
          Our services and website are intended for general customers and
          businesses. We do not intentionally seek to collect personal
          information from children where such collection is not permitted by
          applicable law.
        </p>
        <p>
          If you believe that a child has provided personal information to us
          without appropriate permission, please contact us so that we can
          consider the appropriate action.
        </p>
      </>
    ),
  },
  {
    number: '15',
    title: 'Your Rights Under POPIA',
    content: (
      <>
        <p>
          Subject to applicable law and any lawful limitations, you may have
          rights relating to your personal information, including the right to:
        </p>

        <ul className="space-y-3">
          <li>Request confirmation that we hold personal information about you.</li>
          <li>Request access to personal information we hold about you.</li>
          <li>Request correction or updating of inaccurate or incomplete information.</li>
          <li>Request deletion of information where there is a lawful basis for doing so.</li>
          <li>Object to certain forms of processing where permitted by law.</li>
          <li>Object to direct marketing communications.</li>
          <li>Withdraw consent where processing is based on consent, subject to applicable limitations.</li>
          <li>Complain to the Information Regulator where you believe your rights have been infringed.</li>
        </ul>

        <p>
          These rights are subject to applicable legal requirements and may not
          apply in every circumstance.
        </p>
      </>
    ),
  },
  {
    number: '16',
    title: 'How to Exercise Your Rights',
    content: (
      <>
        <p>
          To make a privacy request or ask a question about your personal
          information, contact AJT Enterprise using the contact details provided
          at the end of this Privacy Policy.
        </p>
        <p>
          To help us deal with your request efficiently, please provide enough
          information for us to understand your request and identify the
          relevant information or interaction.
        </p>
        <p>
          We may need to verify your identity before providing access to
          personal information or making certain changes.
        </p>
      </>
    ),
  },
  {
    number: '17',
    title: 'Accuracy of Personal Information',
    content: (
      <>
        <p>
          We aim to keep personal information reasonably accurate, complete and
          up to date for the purposes for which it is used.
        </p>
        <p>
          If your information changes or you believe that information we hold
          about you is inaccurate, please contact us so that we can consider
          the appropriate correction.
        </p>
      </>
    ),
  },
  {
    number: '18',
    title: 'International Transfers',
    content: (
      <>
        <p>
          Some technical service providers used by modern websites may process
          information outside South Africa.
        </p>
        <p>
          If AJT Enterprise uses a service that involves transferring personal
          information outside South Africa, we aim to ensure that the transfer
          is handled in accordance with applicable legal requirements and
          appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    number: '19',
    title: 'Security Compromises',
    content: (
      <>
        <p>
          If AJT Enterprise becomes aware of a security compromise involving
          personal information and applicable law requires notification, we will
          take reasonable steps to investigate the incident and follow the
          applicable notification requirements.
        </p>
        <p>
          Where required, affected individuals and the appropriate regulatory
          authority may be notified in accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    number: '20',
    title: 'Complaints',
    content: (
      <>
        <p>
          If you have a concern about how AJT Enterprise handles your personal
          information, we encourage you to contact us first so that we have an
          opportunity to investigate and address your concern.
        </p>
        <p>
          You may also have the right to lodge a complaint with the South
          African Information Regulator.
        </p>

        <div className="mt-6 rounded-sm border border-black/[0.08] bg-black/[0.025] p-5">
          <p className="font-semibold text-black">
            Information Regulator
          </p>
          <p className="mt-2 text-sm leading-7 text-black/65">
            South Africa
          </p>
          <p className="text-sm leading-7 text-black/65">
            Telephone: 010 023 5200
          </p>
          <p className="text-sm leading-7 text-black/65">
            Email: enquiries@inforegulator.org.za
          </p>
        </div>
      </>
    ),
  },
  {
    number: '21',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>
          AJT Enterprise may update this Privacy Policy from time to time to
          reflect changes to our services, website, technology, business
          practices or applicable legal requirements.
        </p>
        <p>
          When we make changes, the updated version will be published on this
          page with the revised effective date where appropriate.
        </p>
        <p>
          We encourage visitors to review this page periodically to remain
          informed about how personal information is handled.
        </p>
      </>
    ),
  },
  {
    number: '22',
    title: 'Contact AJT Enterprise About Privacy',
    content: (
      <>
        <p>
          If you have a question about this Privacy Policy, want to exercise a
          privacy right or need to contact AJT Enterprise about personal
          information, please use the contact details below.
        </p>

        <div className="mt-6 overflow-hidden rounded-sm border border-black/[0.08] bg-white">
          <div
            className="h-1"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, ${RED})`,
            }}
          />

          <div className="p-6 sm:p-8">
            <p className="text-xl font-bold text-black">
              AJT Enterprise
            </p>

            <p className="mt-2 text-sm leading-7 text-black/65">
              Shadeports and carports
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{
                  background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})`,
                }}
              >
                Call {PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition-all hover:bg-black/[0.025]"
                style={{
                  borderColor: GOLD_DARK,
                  color: GOLD_DARK,
                }}
              >
                Email AJT Enterprise
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-black/50">
              Email: {EMAIL}
            </p>

            <p className="text-xs leading-6 text-black/50">
              Website: {WEBSITE}
            </p>
          </div>
        </div>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: BG }}
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: RED }}
          />

          <div
            className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: GOLD_DARK }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Privacy Policy' },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.28em]"
              style={{ color: GOLD }}
            >
              AJT Enterprise
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              How AJT Enterprise collects, uses, stores and protects personal
              information when you use our website or communicate with us.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45">
              <span>AJT Enterprise</span>
              <span>Last updated: 8 September 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/[0.08] bg-[#faf9f7]">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
          <p className="text-sm leading-7 text-black/60">
            Please read this Privacy Policy carefully to understand how AJT
            Enterprise handles personal information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="space-y-14">
          {sections.map((section) => (
            <article
              key={section.number}
              className="relative border-b border-black/[0.08] pb-14 last:border-b-0"
            >
              <div className="grid gap-6 sm:grid-cols-[72px_1fr]">
                <div>
                  <span
                    className="text-xs font-black tracking-[0.2em]"
                    style={{ color: RED }}
                  >
                    {section.number}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-5 text-[15px] leading-8 text-black/68">
                    {section.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="border-t"
        style={{
          borderColor: 'rgba(0,0,0,0.08)',
          backgroundColor: '#faf9f7',
        }}
      >
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
          <div
            className="rounded-sm p-6 sm:p-8"
            style={{
              backgroundColor: BG,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: GOLD }}
            >
              AJT Enterprise
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Questions about your privacy?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              Contact AJT Enterprise if you have a question about this Privacy
              Policy or how we handle personal information.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold text-black transition-all hover:brightness-110"
                style={{
                  backgroundColor: GOLD,
                }}
              >
                {EMAIL}
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-sm border px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
                style={{
                  borderColor: RED_LIGHT,
                }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-6 text-black/45">
            © {new Date().getFullYear()} AJT Enterprise. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold">
            <Link
              href="/"
              className="text-black/55 transition-colors hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/terms"
              className="text-black/55 transition-colors hover:text-black"
            >
              Terms
            </Link>

            <Link
              href="/privacy-policy"
              className="transition-colors"
              style={{ color: RED }}
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="text-black/55 transition-colors hover:text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
