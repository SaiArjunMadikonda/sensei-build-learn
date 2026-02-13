import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { kits } from "@/data/kits";
import WaitlistForm from "@/components/forms/WaitlistForm";
import Layout from "@/components/layout/Layout";
import WaitlistModal from "@/components/WaitlistModal";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen, Lightbulb, Puzzle, Repeat, Users, Sparkles } from "lucide-react";

const valueProps = [
  { icon: Puzzle, title: "Hands-On Learning", desc: "Physical materials that make abstract STEM concepts click." },
  { icon: BookOpen, title: "Guided Challenges", desc: "Step-by-step cards with clear goals — no prep needed." },
  { icon: Lightbulb, title: "Independent Play", desc: "Designed for kids to explore, build, and learn on their own." },
  { icon: Repeat, title: "Repeatable Progression", desc: "Each kit builds skills through progressive difficulty." },
  { icon: Users, title: "Parent & Teacher Friendly", desc: "Minimal setup. Maximum engagement. Works at home or school." },
];

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>SenseI | Hands-on STEM Kits for Kids 6–8</title>
        <meta name="description" content="Concept-based STEM kits with guided challenges that build real problem-solving skills — at home or in the classroom. Ages 6–8." />
        <meta property="og:title" content="SenseI | Hands-on STEM Kits for Kids 6–8" />
        <meta property="og:description" content="Hands-on STEM that kids actually finish. Guided challenges, real materials, real learning." />
      </Helmet>
      <WaitlistModal />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent via-background to-background">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-4 py-1.5 text-sm font-medium border border-border">
              <Sparkles className="h-3.5 w-3.5" /> Pilot launching soon
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Hands-on STEM that kids{" "}
              <span className="text-primary">actually finish.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Concept-based toys with guided challenges that build real problem-solving — at home or in the classroom.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Link to="/waitlist">Join Waitlist</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/kits">See Kits <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              We only email SenseI updates. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border/40 bg-accent/50 py-8">
        <div className="container">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by forward-thinking parents & educators
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our First Three Kits</h2>
            <p className="mt-4 text-muted-foreground">
              Each kit is a complete STEM experience — concept cards, real materials, and guided challenges.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {kits.map((kit) => (
              <Card key={kit.id} className="group overflow-hidden rounded-2xl border-border/50 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-accent to-secondary">
                  <span className="text-sm font-medium text-muted-foreground">{kit.imagePlaceholder}</span>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {kit.skillTags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-medium">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold">{kit.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {kit.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link to={`/kits/${kit.id}`}>Details</Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 shadow-sm shadow-primary/15">
                      <Link to="/waitlist">Join Waitlist</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Hands-on Gap */}
      <section className="bg-accent/50 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">The Hands-on Gap</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Research shows that children learn best when they can touch, build, and experiment. Yet hands-on STEM experiences are disappearing from everyday childhood.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { stat: "85%", label: "of parents say kids need more hands-on learning" },
                { stat: "2x", label: "better concept retention with physical materials" },
                { stat: "60%", label: "of schools lack STEM enrichment resources" },
              ].map((item) => (
                <div key={item.stat} className="rounded-2xl border border-border bg-card p-7 text-center shadow-sm">
                  <div className="text-4xl font-extrabold text-primary">{item.stat}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              SenseI isn't anti-screen — we believe in balanced, screen-smart learning. Our kits complement digital tools by adding the tactile, exploratory experiences kids need.
            </p>
          </div>
        </div>
      </section>

      {/* Why SenseI */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Why SenseI?</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            We designed every kit around how kids actually learn — through play, progression, and real-world thinking.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {valueProps.map((vp) => (
              <div key={vp.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <vp.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold">{vp.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents / For Educators */}
      <section className="bg-accent/50 py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold">For Parents</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Screen-free, independent STEM play</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> No prep required — open and go</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Real learning with visible progress</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Safe, high-quality materials</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Builds confidence and curiosity</li>
              </ul>
              <Button asChild className="mt-6 shadow-sm shadow-primary/15">
                <Link to="/waitlist">Join as a Parent</Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold">For Educators</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Low-prep, high-engagement activities</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Aligned with key STEM skills</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Works in classroom or after-school</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Classroom bundles available</li>
                <li className="flex gap-2.5"><span className="text-primary font-bold">✓</span> Pilot programs for schools</li>
              </ul>
              <Button asChild className="mt-6 shadow-sm shadow-primary/15">
                <Link to="/schools">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Waitlist capture */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-lg rounded-2xl border border-border bg-gradient-to-b from-accent to-background p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold">Stay in the loop</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Get pilot updates, early access, and STEM tips. No spam — ever.
            </p>
            <div className="mt-6">
              <WaitlistForm sourcePage="home" compact showRole />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              We only email SenseI updates. No spam.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
