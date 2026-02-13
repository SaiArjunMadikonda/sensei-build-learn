import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const steps = [
  { num: "01", title: "Choose Your Kit", desc: "Pick a kit built for your child's age and interests (ages 6–8 for our first launch). Each kit focuses on one core concept so learning stays clear and satisfying." },
  { num: "02", title: "Start a Mission Card", desc: "Open a mission card with a simple goal (\u201CMake it balance.\u201D \u201CTrigger the chain.\u201D \u201CSolve the pattern.\u201D). Kids know exactly what \u201Cdone\u201D looks like." },
  { num: "03", title: "Build & Test", desc: "Use real materials to build, experiment, and test. Kids learn by trying, adjusting, and seeing what changes \u2014 not by memorizing." },
  { num: "04", title: "Unlock the \u201CWhy\u201D", desc: "Each mission includes a short explanation so kids understand why it worked (or didn\u2019t). That\u2019s how the concept sticks." },
  { num: "05", title: "Level Up", desc: "Move to the next mission for a slightly harder challenge. Skills build progressively — confidence compounds." },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">How It Works</h1>
            <p className="mt-3 text-muted-foreground">
              Designed for minimal setup, maximum learning \u2014 with progress kids can feel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-extrabold text-primary-foreground">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future companion */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <Badge variant="secondary" className="mb-3">Coming Soon</Badge>
            <h2 className="text-2xl font-bold">Optional Companion Experience</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We're exploring an optional companion layer that supports hands-on learning — things like gentle hints, progress tracking, and bonus challenges. The core experience will always be tactile-first and fully usable without screens; the companion is designed to enhance, not replace, physical play.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
