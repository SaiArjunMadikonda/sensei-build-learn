import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  { q: "What is Sense-i?", a: "Sense-i makes hands-on STEM kits for kids (starting with ages 6–8) that use real materials and mission-style challenges to build problem-solving, confidence, and concept understanding through play." },
  { q: "Who are the kits for?", a: "Our first three kits are designed for kids ages 6–8 (early elementary). We\u2019re expanding the roadmap to cover ages 3–12 with age-tiered kits and difficulty levels." },
  { q: "How long does an activity take?", a: "Most missions take 15–30 minutes, with extension challenges if your child wants to keep building." },
  { q: "How does the Sense-i Companion work?", a: "The Sense-i Companion guides kids through each mission with step-by-step prompts, gentle hints when they\u2019re stuck, and encouragement as they progress. It\u2019s designed to keep kids moving forward without giving away the answer." },
  { q: "Can my child do these independently?", a: "Yes! Most missions are designed for independent play with minimal setup. Some kids may enjoy doing the first mission with a parent or educator, then continuing on their own." },
  { q: "What skills will my child build?", a: "Each kit supports skills like reasoning, experimentation, persistence, and problem-solving, plus concept-specific learning (forces/balance, cause-effect systems, logic/patterns)." },
  { q: "What\u2019s included in each kit?", a: "Each kit includes mission cards, real materials, progressive challenges, and a companion-guided experience. Exact contents vary by kit and are listed on each kit\u2019s detail page." },
  { q: "Are the materials safe?", a: "We design for safety and durability and will share final material details, age guidance, and care instructions with pilot families and schools." },
  { q: "Can schools or after-school programs use Sense-i?", a: "Yes. We support classroom and program use with bundle options and pilot-friendly onboarding. Submit a School Pilot request and tell us your group size and grade range." },
  { q: "Do you offer lesson plans or educator notes?", a: "For pilot partners, we provide simple facilitator guidance (setup, timing, learning goals, and extensions). We\u2019re building this out based on educator feedback." },
  { q: "When is the pilot launching, and how do I join?", a: "We\u2019re opening pilot access in small groups. Join the waitlist and select Parent or Educator, and we\u2019ll email invites as spots open." },
  { q: "Where do you ship?", a: "We plan to start with domestic shipping during the pilot/early launch, then expand. Join the waitlist and share your location." },
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
        <title>FAQ | Sense-i Hands-on STEM Kits for Kids</title>
        <meta name="description" content="Frequently asked questions about Sense-i STEM learning kits for kids ages 6–8. Learn about materials, safety, ages, and more." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
            <p className="mt-3 text-muted-foreground">
              Everything you need to know about Sense-i kits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-warm transition-all duration-200 hover:shadow-warm-md">
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
