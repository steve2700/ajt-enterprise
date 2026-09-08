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

export const metadata: Metadata = {
  title: 'Terms & Conditions | AJT Enterprise',
  description:
    'Terms and conditions for AJT Enterprise. Read our service terms, quote and payment conditions, warranty and liability policy for shadeport and carport installation, repairs and maintenance.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.ajtenterprise.co.za/terms',
  },
}

const sections = [
  {
    heading: '1. About These Terms',
    body: `These terms and conditions govern the relationship between AJT Enterprise ("we", "us", "our") and any person or business ("you", "the client") who requests or receives services from us.

By requesting a quote, booking a site visit, or accepting a written quote for installation, repair or maintenance work, you agree to these terms. If you do not agree, please do not use our services.`,
  },
  {
    heading: '2. Our Services',
    body: `We provide shadeport installation, cantilever shadeports, carports, carport installation, parking bay shadeports, shadeport repairs, shadeport maintenance and shadeport re-covering, across Gauteng and Limpopo.

All installations are carried out by trained, experienced installers. We reserve the right to decline any job we deem unsafe, structurally unsound at the proposed site, or outside the scope of the agreed service.`,
  },
  {
    heading: '3. Quotes and Pricing',
    body: `All quotes are provided in South African Rand (ZAR) and are valid for 30 days from the date of issue unless stated otherwise.

Every quote is based on a site visit and follows a clear structure, size and finish agreed with you before any work starts. If ground conditions, access, or structural requirements differ from what was assessed at quote stage, we will inform you and agree any price adjustment with you in writing before proceeding. We do not add chargeable work without your consent.

On-site quotes are free and come with no obligation, anywhere in our service areas.`,
  },
  {
    heading: '4. Payment Terms',
    body: `A deposit of up to 50% is typically required before manufacture or installation begins, with the balance due on completion, unless another arrangement has been agreed with you in writing in advance.

We accept cash and EFT bank transfer. Invoices not paid within 30 days of the due date may attract interest at the prime lending rate plus 2% per annum.`,
  },
  {
    heading: '5. Installation Timelines',
    body: `Most single carports and standard shadeports are installed within a day or two once the design and quote are confirmed. Larger cantilever structures or multi-bay parking cover may take longer, and we will give you a realistic timeline as part of your quote.

Installation dates are estimates given in good faith. While we make every effort to meet them, they are not guaranteed and may be affected by:

— Weather conditions unsuitable for installation, including wind, rain or storms
— Site access issues or ground conditions discovered once work begins
— Delays in materials or components from suppliers
— Circumstances beyond our reasonable control`,
  },
  {
    heading: '6. Materials and Structural Standards',
    body: `We specify frames, fixings and cover materials, whether shade fabric, polycarbonate or IBR roof sheeting, suited to local sun, wind and storm conditions. Exact specifications are confirmed in your written quote.

Structures are engineered and anchored for the site assessed at the time of quoting. If site conditions change materially after installation (for example, unauthorised alterations to the structure, foundations, or surrounding area), our warranty on the affected work may be affected.`,
  },
  {
    heading: '7. Warranty',
    body: `We stand behind our workmanship and offer a warranty on new installations, covering defects in workmanship for the period stated in your quote or invoice. Materials are covered by the applicable manufacturer warranty where one exists.

Our warranty does not cover damage caused by extreme weather events beyond normal design tolerances, unauthorised modification of the structure, lack of routine maintenance, or normal wear and fading over time.`,
  },
  {
    heading: '8. Client Responsibilities',
    body: `You agree to:

— Provide accurate information about the site, including any underground services, boundary lines, or existing structures
— Ensure safe and adequate access for our installers and vehicles at the agreed time
— Obtain any body corporate, HOA or municipal approval required for the structure before installation begins, where applicable
— Ensure the installation area is clear and accessible on the agreed date
— Inform us of any known site hazards before our team arrives

Failure to provide adequate access, required approvals, or a clear site may result in the job being rescheduled and a call-out or waiting fee being charged.`,
  },
  {
    heading: '9. Liability',
    body: `We carry out all work with reasonable care and skill. Our liability for any claim relating to installation, repair or maintenance work is limited to the value of the affected job, except where caused by our negligence resulting in personal injury or property damage, in which case ordinary legal liability applies.

We are not liable for:

— Indirect or consequential losses
— Pre-existing structural, electrical or drainage issues at the site not caused by our work
— Damage caused by extreme weather events beyond normal design tolerances
— Damage arising from unauthorised modification of a structure we installed

Nothing in these terms limits our liability for personal injury or death caused by our negligence.`,
  },
  {
    heading: '10. Cancellations and Rescheduling',
    body: `You may cancel or reschedule a booked site visit or installation by giving us at least 24 hours' notice. Cancellations with less than 24 hours' notice, or where a team has already been dispatched, may incur a call-out fee.

Deposits paid on confirmed orders are non-refundable once materials have been ordered or manufacture has started, except where we are unable to fulfil the agreed scope of work.

We reserve the right to reschedule installations due to unsafe weather or unforeseen circumstances. We will notify you as early as possible and find the next available slot that suits you.`,
  },
  {
    heading: '11. Maintenance Agreements',
    body: `Scheduled maintenance and servicing arrangements are confirmed at the time of booking, either as a one-off service or an ongoing plan. Ongoing maintenance plans may be cancelled by either party with 30 days' written notice. Services already carried out remain payable in full regardless of cancellation.`,
  },
  {
    heading: '12. Governing Law',
    body: `These terms are governed by the laws of the Republic of South Africa. Any disputes arising from these terms or our services will be subject to the jurisdiction of the applicable High Court or Magistrate's Court in Gauteng, depending on the value of the claim.

We encourage resolution of any disputes informally in the first instance. Please contact us directly so we can address your concern.`,
  },
  {
    heading: '13. Changes to These Terms',
    body: `We may update these terms from time to time. The current version will always be published on this page with the date it was last updated. Continued use of our services after changes are published constitutes acceptance of the updated terms.`,
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div style={{ background: '#f5f4f0' }} className="border-b border-[#1a1a1a]/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section style={{ background: BG }}>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: September 2026 &middot; Applicable to all services provided by AJT Enterprise
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#1a1a1a]/70 text-base leading-relaxed mb-10 pb-10 border-b border-[#1a1a1a]/10">
            Please read these terms carefully before using our services. They set out your rights and
            obligations as a client, our responsibilities to you, and the conditions under which we
            carry out shadeport and carport installation, repair and maintenance work across
            Gauteng and Limpopo.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{section.heading}</h2>
                <div className="w-8 h-0.5 mb-4" style={{ background: GOLD }} />
                <p className="text-[#1a1a1a]/65 text-sm leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-14 p-6 bg-white border border-[#1a1a1a]/8">
            <h2 className="font-bold text-[#1a1a1a] mb-2">Questions about these terms?</h2>
            <p className="text-sm text-[#1a1a1a]/60 mb-4">
              Get in touch and we&apos;ll clarify anything you&apos;re unsure about before work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                style={{ background: `linear-gradient(135deg, ${RED_LIGHT}, ${RED})` }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white font-semibold text-sm hover:brightness-110 transition-all rounded-sm"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1a1a1a]/15 text-[#1a1a1a] font-semibold text-sm hover:border-[#dcb068] hover:text-[#8a6535] transition-colors rounded-sm"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer links ── */}
      <section className="py-10 bg-white border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row gap-4 text-sm">
          <Link href="/privacy-policy" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">
            Contact Us
          </Link>
          <Link href="/" className="text-[#1a1a1a]/50 hover:text-[#8a6535] transition-colors">
            Back to Home
          </Link>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
