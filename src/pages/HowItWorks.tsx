import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import kidCauseEffect2 from "@/assets/kid-cause-effect-2.jpg";
import kidBalance2 from "@/assets/kid-balance-2.jpg";
import kidElectricity2 from "@/assets/kid-electricity-2.jpg";
import MediaFrame from "@/components/media/MediaFrame";

const steps = [
  {
    num: "01",
    title: "Choose a kit",
    desc: "Pick a kit built for your child's age and interests (ages 6–8 for our first launch). Each kit focuses on one core concept so learning stays clear and satisfying.",
    media: null,
  },
  {
    num: "02",
    title: "Start a mission card",
    desc: "Open a mission card with a simple goal (\u201CMake it balance.\u201D \u201CTrigger the chain.\u201D \u201CSolve the pattern.\u201D). Kids know exactly what \u201Cdone\u201D looks like.",
    media: { type: "image" as const, src: kidBalance2, alt: "A child selecting blocks and following a mission card" },
  },
  {
    num: "03",
    title: "Build & test",
    desc: "Use real materials to build, experiment, and test. Kids learn by trying, adjusting, and seeing what changes, not by memorizing.",
    media: { type: "image" as const, src: kidCauseEffect2, alt: "A child adjusting and experimenting with a kit" },
  },
  {
    num: "04",
    title: "The Companion guides and gives hints",
    desc: "As kids work through each mission, the Sense-i Companion offers gentle prompts, nudges when they're stuck, and celebrates when they break through.",
    media: { type: "video" as const, src: "/videos/mini-white.mp4" },
  },
  {
    num: "05",
    title: "Level up to the next challenge",
    desc: "Move to the next mission for a slightly harder challenge. Skills build progressively and confidence compounds.",
    media: { type: "image" as const, src: kidElectricity2, alt: "A child completing a challenge with the companion nearby" },
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
          <div className="mx-auto max-w-4xl space-y-16">
            {steps.map((step, i) => {
              const isReversed = i % 2 !== 0;
              const hasMedia = !!step.media;

              if (!hasMedia) {
                return (
                  <div key={step.num} className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-warm">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={step.num} className="rounded-3xl border border-border bg-card/60 p-6 shadow-warm md:p-8">
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
                    <div className={isReversed ? "order-1 md:order-2" : "order-1 md:order-1"}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
                          {step.num}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className={isReversed ? "order-2 md:order-1" : "order-2 md:order-2"}>
                      <MediaFrame
                        className="w-full"
                        aspectClassName={step.media.type === "video" ? "aspect-auto" : "aspect-[4/3]"}
                        contentClassName={step.media.type === "video" ? "flex items-center justify-center bg-background" : undefined}
                      >
                        {step.media.type === "image" ? (
                          <img
                            src={step.media.src}
                            alt={step.media.alt || ""}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            className="mx-auto block h-auto max-h-[520px] w-auto max-w-full object-contain"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          >
                            <source src={step.media.src} type="video/mp4" />
                          </video>
                        )}
                      </MediaFrame>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <Button asChild className="mt-6">
              <Link to="/waitlist">Join Waitlist <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
