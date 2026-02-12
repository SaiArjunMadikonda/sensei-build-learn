import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const steps = [
  { num: "01", title: "Choose Your Kit", desc: "Pick from our curated STEM kits based on your child's interests and age." },
  { num: "02", title: "Open Challenge Cards", desc: "Each kit includes progressive challenge cards — start with the first and work your way up." },
  { num: "03", title: "Build & Test", desc: "Use real materials to build, experiment, and test your solutions. Hands-on from start to finish." },
  { num: "04", title: "Learn the Concept", desc: "Each challenge teaches a real STEM concept. Kids don't just build — they understand why it works." },
  { num: "05", title: "Progress to Next Challenge", desc: "Move to the next card for a harder challenge. Skills compound as kids advance through the kit." },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">How It Works</h1>
            <p className="mt-3 text-muted-foreground">
              Designed for minimal setup, maximum learning.
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
              We're exploring ways to enhance the hands-on experience with an optional digital companion — think guided hints, progress tracking, and bonus challenges. 
              This is aspirational and in early exploration. Our commitment to hands-on, tactile learning comes first.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
