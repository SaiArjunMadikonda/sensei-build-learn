import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import kidCauseEffect2 from "@/assets/kid-cause-effect-2.jpg";
import kidBalance2 from "@/assets/kid-balance-2.jpg";
import kidElectricity2 from "@/assets/kid-electricity-2.jpg";

const steps = [
  {
    num: "01",
    title: "Choose a kit",
    desc: "Pick a kit built for your child\u2019s age and interests (ages 6–8 for our first launch). Each kit focuses on one core concept so learning stays clear and satisfying.",
    image: null,
  },
  {
    num: "02",
    title: "Start a mission card",
    desc: "Open a mission card with a simple goal (\u201CMake it balance.\u201D \u201CTrigger the chain.\u201D \u201CSolve the pattern.\u201D). Kids know exactly what \u201Cdone\u201D looks like.",
    image: kidBalance2,
    imageAlt: "A child selecting blocks and following a mission card",
  },
  {
    num: "03",
    title: "Build & test",
    desc: "Use real materials to build, experiment, and test. Kids learn by trying, adjusting, and seeing what changes, not by memorizing.",
    image: kidCauseEffect2,
    imageAlt: "A child adjusting and experimenting with a kit",
  },
  {
    num: "04",
    title: "The Companion guides and gives hints",
    desc: "As kids work through each mission, the Sense-i Companion offers gentle prompts, nudges when they\u2019re stuck, and celebrates when they break through.",
    video: "/videos/mini-white.mp4",
  },
  {
    num: "05",
    title: "Level up to the next challenge",
    desc: "Move to the next mission for a slightly harder challenge. Skills build progressively and confidence compounds.",
    image: kidElectricity2,
    imageAlt: "A child completing a challenge with the companion nearby",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">How It Works</h1>
            <p className="mt-3 text-muted-foreground">
              Designed for minimal setup, maximum learning, with progress kids can feel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="rounded-3xl border border-border bg-card shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-0.5 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-0">
                  <div className="flex-1 p-6 flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {step.image && (
                    <div className="md:w-64 shrink-0">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="h-48 md:h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {step.video && (
                    <div className="md:w-64 shrink-0">
                      <video
                        className="h-48 md:h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={step.video} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future companion */}
      <section className="bg-accent py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-warm">
            <Badge variant="secondary" className="mb-3">Pilot Access Opening Soon</Badge>
            <h2 className="text-2xl font-bold">The Sense-i Learning Companion</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every kit comes alive with the Sense-i Companion, a friendly guide that walks kids through missions, offers gentle hints when they're stuck, and celebrates progress along the way. Tactile play always comes first; the Companion is designed to enhance, not replace, hands-on learning.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
