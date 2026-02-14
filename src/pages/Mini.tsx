import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Play, Sparkles, Image as ImageIcon } from "lucide-react";

const miniFeatures = [
  { title: "Guides the Mission", desc: "Step-by-step prompts that help kids start fast and stay on track." },
  { title: "Hints, Not Answers", desc: "Gentle nudges when they\u2019re stuck - so they learn by thinking, not copying." },
  { title: "Celebrates Progress", desc: "Milestones and encouragement that build confidence and persistence." },
];

const mediaTiles = [
  "Demo Clip 01 (Coming Soon)",
  "Demo Clip 02 (Coming Soon)",
  "Mini + Balance Kit (Image Coming Soon)",
  "Mini + Cause & Effect Lab (Coming Soon)",
  "Mini Unboxing (Coming Soon)",
  "Mini in the Classroom (Coming Soon)",
];

const steps = [
  { num: "01", title: "Choose a kit" },
  { num: "02", title: "Start a mission" },
  { num: "03", title: "Build & test" },
  { num: "04", title: "Mini guides + hints" },
  { num: "05", title: "Level up" },
];

const miniFaqs = [
  { q: "When will Mini be available?", a: "We\u2019re opening pilot access in small groups. Join the waitlist to get early invites." },
  { q: "Does Mini replace the hands-on kits?", a: "No. The kits are hands-on by design. Mini guides missions and supports progress." },
  { q: "Does Mini require an app?", a: "Mini is designed to keep the experience hands-on. Any companion layer will be lightweight and screen-smart." },
  { q: "Is Mini for home or schools?", a: "Both. Mini supports independent learning at home and reduces instruction load in group settings." },
  { q: "How do I get Mini for my child/class?", a: "Join the waitlist and tell us whether you\u2019re a parent or educator." },
];

const Mini = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mini - The SenseI Learning Companion</title>
        <meta name="description" content="Meet Mini - SenseI's learning companion that guides kids through hands-on STEM missions with hints, encouragement, and celebration." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 55%, hsl(0 0% 100%) 100%)' }}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.12]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="container py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 gap-1.5 border border-border px-4 py-1.5 text-sm font-medium">
                <Sparkles className="h-3.5 w-3.5" /> Pilot access opening soon
              </Badge>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Meet <span className="text-primary">Mini.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Mini is SenseI&rsquo;s learning companion - guiding kids through hands-on missions, giving gentle hints, and celebrating progress.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="px-8 shadow-warm-md hover:shadow-warm-lg">
                  <Link to="/waitlist">Join Waitlist <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link to="/kits">Explore Kits</Link>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Get early pilot invites for kits + the learning companion. No spam.
              </p>
            </div>

            {/* Video placeholder */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent to-secondary shadow-warm-lg">
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Play className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Mini Demo Video (Coming Soon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Mini Does */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Mini Does</h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              A friendly guide that keeps kids moving from &lsquo;stuck&rsquo; to &lsquo;I got it.&rsquo;
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {miniFeatures.map((f) => (
              <div key={f.title} className="rounded-3xl border border-border bg-card p-7 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1">
                <h3 className="text-lg font-bold text-primary-deep">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Mini rollout begins with early access families and educators.
          </p>
        </div>
      </section>

      {/* Mini in Action */}
      <section className="bg-accent py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mini in Action</h2>
            <p className="mt-4 text-muted-foreground">Photos and clips coming soon from our pilot program.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mediaTiles.map((label, i) => (
              <div key={i} className="flex aspect-video items-center justify-center rounded-3xl border border-border bg-card shadow-warm transition-all duration-300 hover:shadow-warm-md">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-6 w-6 opacity-40" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Mini Works With Kits */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Mini Works With Kits</h2>
          </div>
          <div className="mx-auto mt-14 max-w-2xl space-y-4">
            {steps.map((step) => (
              <div key={step.num} className="flex items-center gap-5 rounded-3xl border border-border bg-card p-5 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-0.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
                  {step.num}
                </div>
                <h3 className="text-base font-bold">{step.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Hands-on first. Mini enhances the experience.
          </p>
        </div>
      </section>

      {/* For Parents / For Educators */}
      <section className="bg-accent py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-warm transition-all duration-300 hover:shadow-warm-md">
              <h3 className="text-2xl font-bold">For Parents</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Less explaining - more independent learning</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Encouragement that helps kids finish what they start</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Hands-on, screen-smart support</li>
              </ul>
              <Button asChild className="mt-6">
                <Link to="/waitlist">Join Parent Waitlist</Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-warm transition-all duration-300 hover:shadow-warm-md">
              <h3 className="text-2xl font-bold">For Educators</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Reduces repeated instruction</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Supports rotations and small-group learning</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Built for classrooms and after-school programs</li>
              </ul>
              <Button asChild className="mt-6">
                <Link to="/contact">Request a School Pilot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Mini FAQ</h2>
            <p className="mt-4 text-center text-muted-foreground">Common questions about the SenseI Learning Companion.</p>
            <Accordion type="single" collapsible className="mt-10 space-y-2">
              {miniFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`mini-faq-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-warm transition-all duration-200 hover:shadow-warm-md">
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

export default Mini;
