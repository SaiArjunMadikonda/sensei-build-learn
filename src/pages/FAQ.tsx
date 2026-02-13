import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "Are SenseI kits anti-screen?",
    a: "Not at all. SenseI is screen-smart — we complement digital tools by adding the tactile, hands-on exploration that screens can't replicate. Think of us as the other half of a well-rounded learning experience.",
  },
  {
    q: "What ages are the kits designed for?",
    a: "Our first three kits are designed for kids ages 6–8. We're actively developing kits for the broader 3–12 range, which will be released in future collections.",
  },
  {
    q: "How often will new kits be released?",
    a: "We're focused on perfecting our first three kits before expanding. New kits and expansion packs are planned — we'll share timelines as they become concrete. Quality comes first.",
  },
  {
    q: "What materials are used? Are they safe?",
    a: "All SenseI materials are non-toxic and meet ASTM F963 safety standards. We use high-quality wood, recycled plastics, and durable components designed to withstand enthusiastic play. Each kit includes detailed safety information.",
  },
  {
    q: "Can my child do the kits independently?",
    a: "Yes — each kit is designed for independent play with clear, illustrated mission cards. We recommend adult guidance for the first session, after which most kids are off and running on their own.",
  },
  {
    q: "Do you ship internationally?",
    a: "We're launching with U.S. domestic shipping first. International shipping is on our roadmap — join the waitlist to stay updated on availability in your region.",
  },
  {
    q: "Can I buy these for a school or after-school program?",
    a: "Absolutely. We offer classroom bundles with volume pricing and a pilot program for schools. Visit our Schools page or fill out an educator inquiry to get started.",
  },
  {
    q: "What's included in each kit?",
    a: "Every kit includes real materials, progressive mission cards, an illustrated concept guide, and achievement stickers. Everything you need is in the box — no extra purchases required.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const FAQ = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQ | SenseI — Hands-on STEM Kits for Kids</title>
        <meta name="description" content="Frequently asked questions about SenseI STEM learning kits for kids ages 6–8. Learn about materials, safety, ages, and more." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
            <p className="mt-3 text-muted-foreground">
              Everything you need to know about SenseI kits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border px-5">
                  <AccordionTrigger className="text-left text-sm font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
