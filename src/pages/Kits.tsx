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
import { ArrowLeft, Clock, BarChart3, Shield } from "lucide-react";

const KitsPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">STEM Kits</h1>
            <p className="mt-3 text-muted-foreground">
              Hands-on learning experiences designed for curious kids ages 6–8.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {kits.map((kit) => (
              <Card key={kit.id} className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-secondary to-accent">
                  <span className="text-sm font-medium text-muted-foreground">{kit.imagePlaceholder}</span>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {kit.skillTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold">{kit.name}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{kit.tagline}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {kit.timePerActivity}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> {kit.difficulty}</span>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {kit.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-2">
                    <Button asChild variant="outline" className="flex-1">
                      <Link to={`/kits/${kit.id}`}>View Details</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link to="/waitlist">Waitlist</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12">
        <div className="container">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to="/kits"><ArrowLeft className="mr-1.5 h-4 w-4" /> All Kits</Link>
          </Button>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent lg:h-96">
              <span className="text-sm font-medium text-muted-foreground">{kit.imagePlaceholder}</span>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {kit.skillTags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">{kit.name}</h1>
              <p className="mt-2 text-muted-foreground">{kit.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  <Clock className="h-3.5 w-3.5" /> {kit.timePerActivity}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  <BarChart3 className="h-3.5 w-3.5" /> {kit.difficulty}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  Ages {kit.ageRange}
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{kit.overview}</p>
              <div className="mt-6">
                <WaitlistForm sourcePage={`kit-${kit.id}`} kitInterest={kit.id} compact showRole={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">What's Inside</h2>
              <ul className="mt-4 space-y-2">
                {kit.whatsInside.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
            <Shield className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Safety & Materials</h3>
              <p className="mt-1 text-sm text-muted-foreground">{kit.safetyNotes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-6 max-w-2xl">
            {kit.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export { KitsPage, KitDetailPage };
