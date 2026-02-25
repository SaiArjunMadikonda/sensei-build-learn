import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles } from "lucide-react";

const minyFeatures = [
  { title: "Guides the Mission", desc: "Step-by-step prompts that help kids start fast and stay on track." },
  { title: "Hints, Not Answers", desc: "Gentle nudges when they\u2019re stuck, so they learn by thinking, not copying." },
  { title: "Celebrates Progress", desc: "Milestones and encouragement that build confidence and persistence." },
];


const steps = [
  { num: "01", title: "Choose a kit" },
  { num: "02", title: "Start a mission" },
  { num: "03", title: "Build & test" },
  { num: "04", title: "MiNy guides + hints" },
  { num: "05", title: "Level up" },
];

const minyFaqs = [
  { q: "When will MiNy be available?", a: "We\u2019re opening pilot access in small groups. Join the waitlist to get early invites." },
  { q: "Does MiNy replace the hands-on kits?", a: "No. The kits are hands-on by design. MiNy guides missions and supports progress." },
  { q: "Does MiNy require an app?", a: "MiNy is designed to keep the experience hands-on. Any companion layer will be lightweight and screen-smart." },
  { q: "Is MiNy for home or schools?", a: "Both. MiNy supports independent learning at home and reduces instruction load in group settings." },
  { q: "How do I get MiNy for my child/class?", a: "Join the waitlist and tell us whether you\u2019re a parent or educator." },
];

const MiNy = () => {
  return (
    <Layout>
      <Helmet>
        <title>MiNy · The Sense-i Learning Companion</title>
        <meta name="description" content="Meet MiNy, Sense-i's learning companion that guides kids through hands-on STEM missions with hints, encouragement, and celebration." />
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
                Meet <span className="text-primary">MiNy.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                MiNy is Sense-i&rsquo;s learning companion, guiding kids through hands-on missions, giving gentle hints, and celebrating progress.
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

            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-border shadow-warm-lg">
                <video
                  className="w-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster=""
                >
                  <source src="/videos/mini-white.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What MiNy Does */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What MiNy Does</h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              A friendly guide that keeps kids moving from &lsquo;stuck&rsquo; to &lsquo;I got it.&rsquo;
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {minyFeatures.map((f) => (
              <div key={f.title} className="rounded-3xl border border-border bg-card p-7 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1">
                <h3 className="text-lg font-bold text-primary-deep">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            MiNy rollout begins with early access families and educators.
          </p>
        </div>
      </section>

      {/* MiNy in Action */}
      <section className="bg-accent py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">MiNy in Action</h2>
            <p className="mt-4 text-muted-foreground">The companion observes, guides, and celebrates as kids work through missions.</p>
          </div>
          <div className="mt-14 mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm">
              <video
                className="w-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/mini-black.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* How MiNy Works With Kits */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How MiNy Works With Kits</h2>
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
            Hands-on first. MiNy enhances the experience.
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
                <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Less explaining, more independent learning</li>
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

      {/* MiNy FAQ */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">MiNy FAQ</h2>
            <p className="mt-4 text-center text-muted-foreground">Common questions about the Sense-i Learning Companion.</p>
            <Accordion type="single" collapsible className="mt-10 space-y-2">
              {minyFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`miny-faq-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-warm transition-all duration-200 hover:shadow-warm-md">
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

export default MiNy;
