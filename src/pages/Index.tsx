import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { kits } from "@/data/kits";
import WaitlistForm from "@/components/forms/WaitlistForm";
import Layout from "@/components/layout/Layout";
import WaitlistModal from "@/components/WaitlistModal";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen, Lightbulb, Puzzle, Repeat, Users, Sparkles, Clock, TrendingUp } from "lucide-react";
import heroChildCompanion from "@/assets/hero-child-companion.jpg";
import MediaFrame from "@/components/media/MediaFrame";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const valueProps = [
  { icon: Puzzle, title: "Hands-on by design", desc: "Real materials that turn concepts into experiences." },
  { icon: BookOpen, title: "Guided by the Companion", desc: "Less manual-reading. More momentum." },
  { icon: Lightbulb, title: "Independent learning", desc: "Kids can keep going without constant adult help." },
  { icon: Repeat, title: "Progressive challenges", desc: "Missions that level up as skills grow." },
  { icon: Users, title: "Built for home + classrooms", desc: "Easy setup, quick reset, repeatable play." },
];

const kitBullets: Record<string, string[]> = {
  "balance-forces-lab": [
    "Build balance systems and test how weight + distance change outcomes",
    "Learn center of mass and real-world forces through missions",
    "Level up from quick wins to advanced builds",
  ],
  "cause-effect-lab": [
    "Build chain-reaction systems where one action triggers the next",
    "Experiment with friction, timing, and force",
    "Missions that spark curiosity + free-play creation",
  ],
  "logic-builders-kit": [
    "Solve puzzles using patterns, rules, and constraints",
    "Practice sequencing and 'debugging' thinking",
    "Fast missions that build focus and persistence",
  ],
};

const ProductChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-secondary-foreground">
    {children}
  </span>
);

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <Layout>
      <Helmet>
        <title>Sense-i | Hands-on STEM Kits for Kids 6–8</title>
        <meta name="description" content="Concept-based STEM kits with guided challenges that build real problem-solving skills at home or in the classroom. Ages 6–8." />
        <meta property="og:title" content="Sense-i | Hands-on STEM Kits for Kids 6–8" />
        <meta property="og:description" content="Hands-on STEM that kids actually finish. Guided challenges, real materials, real learning." />
      </Helmet>
      <WaitlistModal />

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
                  <Sparkles className="h-3.5 w-3.5" /> Learning Companion · Pilot access opening soon
                </Badge>
                <h1 className="text-balance font-display text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
                  Kits that come alive with a{" "}
                  <span className="text-primary">learning companion.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                  Hands-on STEM kits for ages 6–8 where kids build with real materials while the Sense-i Companion guides missions, offers gentle hints, and celebrates progress.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                  <ProductChip><Users className="h-3 w-3" /> Age 6–8</ProductChip>
                  <ProductChip><Clock className="h-3 w-3" /> 15–30 min</ProductChip>
                  <ProductChip><TrendingUp className="h-3 w-3" /> Level-up missions</ProductChip>
                </div>

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
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <MediaFrame className="w-full max-w-xl" aspectClassName="aspect-[5/4] sm:aspect-[4/3]">
                  <img
                    src={heroChildCompanion}
                    alt="Child building with a Sense-i kit alongside the MiNy companion lamp"
                    className="h-full w-full object-cover"
                  />
                </MediaFrame>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Soft gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Social Proof */}
      <section className="border-y border-border/40 bg-muted/30 py-8">
        <div className="container">
          <p className="mb-2 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Built with forward-thinking parents & educators
          </p>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Pilot partners and testimonials coming soon.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Partner School A", "STEM Network", "Education Weekly", "Parent Magazine"].map((name) => (
              <div key={name} className="flex h-8 items-center rounded-lg bg-muted px-4 text-xs font-semibold text-muted-foreground">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Kit Preview */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Our First Three Kits</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                Each kit includes mission cards, real materials, and a companion-guided experience that turns learning into an adventure.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {kits.map((kit, i) => (
              <ScrollReveal key={kit.id} delay={i * 0.12}>
                <Card className="glass group h-full overflow-hidden rounded-3xl shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 hover:border-primary/30">
                  <div className="h-52 overflow-hidden">
                    <img src={kit.image} alt={kit.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      <ProductChip><Clock className="h-3 w-3" /> {kit.timePerActivity}</ProductChip>
                      <ProductChip>Age {kit.ageRange}</ProductChip>
                      <ProductChip>{kit.difficulty}</ProductChip>
                    </div>
                    <h3 className="text-lg font-bold">{kit.name}</h3>
                    <ul className="mt-3 space-y-2">
                      {(kitBullets[kit.id] || kit.bullets).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <Button asChild size="sm" className="w-full">
                        <Link to="/waitlist">Get Early Access</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Meet the Learning Companion */}
      <section className="bg-accent py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Meet the Learning Companion</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                A friendly guide that keeps kids moving from &lsquo;stuck&rsquo; to &lsquo;I got it.&rsquo;
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: "Guides the Mission", desc: "Step-by-step prompts that help kids start fast and stay on track." },
              { title: "Hints, Not Answers", desc: "Gentle nudges when they\u2019re stuck, so they learn by thinking, not copying." },
              { title: "Celebrates Progress", desc: "Milestones, encouragement, and \u2018level up\u2019 moments that build confidence." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass rounded-3xl border p-7 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 hover:border-primary/30">
                  <h3 className="font-display text-lg text-primary-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Pilot rollout begins with early access families and educators.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* The Hands-on Gap */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="text-center font-display text-3xl tracking-tight sm:text-4xl">The Hands-on Gap</h2>
              <p className="mt-4 mx-auto max-w-2xl text-center text-muted-foreground">
                Kids have more access to information than ever, but fewer chances to build, test, and learn through real materials. Sense-i brings hands-on learning back in a way that fits modern routines.
              </p>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { title: "More watching, less making", text: "Kids need structured opportunities to build and experiment." },
                { title: "Hands-on practice drives understanding", text: "Physical exploration helps concepts stick through real feedback." },
                { title: "Parents & schools need low-prep STEM", text: "Great activities exist, but they must be easy to start and repeat." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="glass rounded-3xl border p-7 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 hover:border-primary/30">
                    <div className="font-display text-lg text-primary-deep">{item.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Sense-i isn't anti-screen. We're screen-smart. We complement digital learning by adding the tactile, exploratory practice kids need.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Why Sense-i */}
      <section className="bg-accent py-24">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl tracking-tight sm:text-4xl">Why Sense-i?</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              We design every kit around how kids actually learn: hands-on practice, clear goals, and progress you can see.
            </p>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {valueProps.map((vp, i) => (
              <ScrollReveal key={vp.title} delay={i * 0.08}>
                <div className="glass rounded-3xl border p-6 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 hover:border-primary/30">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <vp.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold">{vp.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{vp.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* For Parents / For Educators */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="glass rounded-3xl border p-8 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:border-primary/30">
                <h3 className="font-display text-2xl">For Parents</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Screen-smart STEM play (core learning works without an app)</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Open-and-go: start in minutes, no prep required</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Visible progress: missions kids want to finish</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Safe, durable materials designed for real play</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Builds confidence, curiosity, and persistence</li>
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/waitlist">Join the Parent Waitlist</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass rounded-3xl border p-8 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:border-primary/30">
                <h3 className="font-display text-2xl">For Educators</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Low-prep, high-engagement STEM activities</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Supports problem-solving, reasoning, and teamwork</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Works for classrooms, after-school, and enrichment</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Bundle options + facilitator notes (pilot program)</li>
                  <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Easy to reset and reuse across groups</li>
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/contact">Request a School Pilot</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter / Waitlist capture */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="glass mx-auto max-w-lg rounded-3xl border p-10 text-center shadow-warm">
              <h2 className="font-display text-2xl">Stay in the loop</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Get pilot updates, early access, and STEM tips. No spam, ever.
              </p>
              <div className="mt-6">
                <WaitlistForm sourcePage="home" compact showRole />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                We only email Sense-i updates. No spam.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
