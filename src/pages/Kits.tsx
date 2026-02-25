import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { kits } from "@/data/kits";
import Layout from "@/components/layout/Layout";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Clock, BarChart3, Shield, Users, TrendingUp, Package } from "lucide-react";
import MediaFrame from "@/components/media/MediaFrame";
import ScrollReveal from "@/components/ScrollReveal";

const ProductChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-secondary-foreground">
    {children}
  </span>
);

const KitsPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.12]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight">
                Hands-On Learning Kits That Teach How the World Works
              </h1>
              <p className="mt-3 text-muted-foreground">
                Each kit includes mission cards, real materials, and a companion-guided experience that turns learning into an adventure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {kits.map((kit, i) => (
              <ScrollReveal key={kit.id} delay={i * 0.12}>
                <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-border shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 hover:border-primary/30">
                  <div className="p-4 pb-0">
                    <MediaFrame className="w-full" aspectClassName="aspect-[4/3]">
                      <img src={kit.image} alt={kit.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </MediaFrame>
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      <ProductChip><Clock className="h-3 w-3" /> {kit.timePerActivity}</ProductChip>
                      <ProductChip>Age {kit.ageRange}</ProductChip>
                      <ProductChip>{kit.difficulty}</ProductChip>
                    </div>
                    <h2 className="text-xl font-bold">{kit.name}</h2>
                    <p className="mt-1 text-xs font-medium text-primary">
                      Companion-guided missions &bull; 15–30 min experiences
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{kit.tagline}</p>
                    <ul className="mt-4 flex-1 space-y-1.5">
                      {kit.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link to={`/kits/${kit.id}`}>View Details</Link>
                      </Button>
                      <Button asChild className="flex-1">
                        <Link to="/waitlist">Get Early Access</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground italic">
            Designed to grow with how children think, not just what they finish.
          </p>
        </div>
      </section>
    </Layout>
  );
};

const KitDetailPage = () => {
  const { kitId } = useParams();
  const kit = kits.find((k) => k.id === kitId);

  useEffect(() => {
    if (kit) trackEvent("kit_viewed", { kit_id: kit.id, kit_name: kit.name });
  }, [kit]);

  if (!kit) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold">Kit not found</h1>
          <Button asChild className="mt-4">
            <Link to="/kits">Back to Kits</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden py-12" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.12]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="container">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to="/kits"><ArrowLeft className="mr-1.5 h-4 w-4" /> All Kits</Link>
          </Button>
          <div className="grid gap-10 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <MediaFrame className="w-full" aspectClassName="aspect-[4/3] lg:aspect-[5/4]">
                <img src={kit.image} alt={kit.name} className="h-full w-full object-cover" loading="lazy" />
              </MediaFrame>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <ProductChip><Clock className="h-3 w-3" /> {kit.timePerActivity}</ProductChip>
                  <ProductChip><Users className="h-3 w-3" /> Age {kit.ageRange}</ProductChip>
                  <ProductChip><TrendingUp className="h-3 w-3" /> {kit.difficulty}</ProductChip>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight">{kit.name}</h1>
                <p className="mt-2 text-muted-foreground">{kit.tagline}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{kit.overview}</p>
                <div className="mt-6">
                  <WaitlistForm sourcePage={`kit-${kit.id}`} kitInterest={kit.id} compact showRole={false} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* What's Inside */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold"><Package className="h-5 w-5 text-primary" /> What's Inside</h2>
                <ul className="mt-4 space-y-2">
                  {kit.whatsInside.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl font-bold">What You'll Learn</h2>
                <ul className="mt-4 space-y-2">
                  {kit.skillsLearned.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Safety */}
      <section className="bg-accent py-12">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-start gap-3 rounded-3xl border border-border bg-card p-6 shadow-warm">
              <Shield className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Safety & Materials</h3>
                <p className="mt-1 text-sm text-muted-foreground">{kit.safetyNotes}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* FAQs */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-6 max-w-2xl space-y-2">
            {kit.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <AccordionItem value={`item-${i}`} className="rounded-2xl border border-border px-5">
                  <AccordionTrigger className="text-left text-sm font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export { KitsPage, KitDetailPage };
