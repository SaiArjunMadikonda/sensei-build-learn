import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles } from "lucide-react";
import MediaFrame from "@/components/media/MediaFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <Layout>
      <Helmet>
        <title>MiNy · The Sense-i Learning Companion</title>
        <meta name="description" content="Meet MiNy, Sense-i's learning companion that guides kids through hands-on STEM missions with hints, encouragement, and celebration." />
      </Helmet>

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 55%, hsl(0 0% 100%) 100%)' }}>
        <motion.div style={{ y: blobY1 }} className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.12] animate-mesh-float" aria-hidden="true">
          <div className="h-full w-full rounded-full" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        </motion.div>
        <motion.div style={{ y: blobY2 }} className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.08] animate-mesh-float-reverse" aria-hidden="true">
          <div className="h-full w-full rounded-full" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </motion.div>

        <div className="container py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="text-center lg:text-left">
                <Badge variant="secondary" className="mb-6 gap-1.5 border border-border px-4 py-1.5 text-sm font-medium">
                  <Sparkles className="h-3.5 w-3.5" /> Pilot access opening soon
                </Badge>
                <h1 className="text-balance font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
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
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative mx-auto w-full max-w-3xl lg:max-w-[620px]">
                <MediaFrame
                  className="w-full"
                  aspectClassName="aspect-auto"
                  frameClassName="bg-transparent border-none shadow-none p-0"
                  contentClassName="flex items-center justify-center"
                >
                  <video
                    className="mx-auto block h-auto max-h-[560px] w-auto max-w-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/mini-white.mp4" type="video/mp4" />
                  </video>
                </MediaFrame>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* What MiNy Does */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">What MiNy Does</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                A friendly guide that keeps kids moving from &lsquo;stuck&rsquo; to &lsquo;I got it.&rsquo;
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {minyFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="glass rounded-3xl border p-7 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 hover:border-primary/30">
                  <h3 className="font-display text-lg text-primary-deep">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            MiNy rollout begins with early access families and educators.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* MiNy in Action */}
      <section className="bg-accent py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">MiNy in Action</h2>
              <p className="mt-4 text-muted-foreground">The companion observes, guides, and celebrates as kids work through missions.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-14 mx-auto w-full max-w-3xl">
              <MediaFrame
                className="w-full"
                aspectClassName="aspect-auto"
                frameClassName="bg-transparent border-none shadow-none p-0"
                contentClassName="flex items-center justify-center"
              >
                <video
                  className="mx-auto block h-auto max-h-[560px] w-auto max-w-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/mini-black.mp4" type="video/mp4" />
                </video>
              </MediaFrame>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* How MiNy Works With Kits */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How MiNy Works With Kits</h2>
            </div>
          </ScrollReveal>
          <div className="mx-auto mt-14 max-w-2xl space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className="glass flex items-center gap-5 rounded-3xl border p-5 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-0.5 hover:border-primary/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold">{step.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Hands-on first. MiNy enhances the experience.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* For Parents / For Educators */}
      <section className="bg-accent py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="glass rounded-3xl border p-8 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:border-primary/30">
                <h3 className="font-display text-2xl">For Parents</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Less explaining, more independent learning</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Encouragement that helps kids finish what they start</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Hands-on, screen-smart support</li>
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/waitlist">Join Parent Waitlist</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass rounded-3xl border p-8 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:border-primary/30">
                <h3 className="font-display text-2xl">For Educators</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Reduces repeated instruction</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Supports rotations and small-group learning</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">&check;</span> Built for classrooms and after-school programs</li>
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/contact">Request a School Pilot</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* MiNy FAQ */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <h2 className="text-center font-display text-3xl tracking-tight sm:text-4xl">MiNy FAQ</h2>
              <p className="mt-4 text-center text-muted-foreground">Common questions about the Sense-i Learning Companion.</p>
            </ScrollReveal>
            <Accordion type="single" collapsible className="mt-10 space-y-2">
              {minyFaqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <AccordionItem value={`miny-faq-${i}`} className="glass rounded-2xl border px-5 shadow-warm transition-all duration-200 hover:shadow-warm-md">
                    <AccordionTrigger className="text-left text-sm font-semibold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiNy;
