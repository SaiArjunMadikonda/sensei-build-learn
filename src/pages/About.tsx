import Layout from "@/components/layout/Layout";
import { Lightbulb, Puzzle, Trophy, Gem, Baby, Recycle } from "lucide-react";
import founderArjun from "@/assets/founder-arjun.jpg";
import founderKiran from "@/assets/founder-kiran.jpg";
import founderLohith from "@/assets/founder-lohith.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Lightbulb, title: "Curiosity", desc: "We design for \"What happens if I try this?\"" },
  { icon: Puzzle, title: "Real-World Thinking", desc: "Build systems, test outcomes, understand cause and effect." },
  { icon: Trophy, title: "Confidence Through Making", desc: "Small wins that turn effort into pride." },
  { icon: Gem, title: "Craft + Durability", desc: "Premium materials that feel good and last." },
  { icon: Baby, title: "Child-First Design", desc: "Clear goals, guided steps, frustration-friendly learning." },
  { icon: Recycle, title: "Second Life by Design", desc: "Built to be reused, returned, and passed forward." },
];

const team = [
  { name: "Sai Arjun Madikonda", role: "Co-founder", photo: founderArjun },
  { name: "Sai Kiran Soma", role: "Co-founder", photo: founderKiran },
  { name: "Datta Lohith", role: "Co-founder", photo: founderLohith },
];

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.12]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight">About Sense-i</h1>
              <p className="mt-3 text-lg font-medium text-foreground">
                Learning that feels alive.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Sense-i creates hands-on STEM kits that turn big ideas into real experiences. Kids build, test, adjust, and discover with their own hands. We're starting with ages 6–8, and expanding from there.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Soft gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Sense-i was born from a simple truth: children learn best when learning becomes physical. Before screens took over, childhood was full of making: stacking, balancing, planting, building, breaking, fixing, and asking "why?" Touch is the first language a child understands, and it's how curiosity turns into confidence.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  But today, many kids spend more time watching than doing. They scroll through concepts instead of experiencing them. They get answers instantly, but lose the deep satisfaction of figuring things out.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  So we set out to build something different: screen-smart, not screen-heavy. Premium kits with real materials and guided challenges, so kids can pick one up, build something real, and understand why it works.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed font-medium text-foreground">
                  Because children don't remember what they scroll. They remember what they touch.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <div className="mt-4 relative rounded-3xl border border-border bg-accent p-8 text-center shadow-warm overflow-hidden">
                  <span className="absolute -left-2 -top-4 text-8xl font-black text-primary/10 leading-none select-none">"</span>
                  <p className="relative text-xl font-bold text-foreground tracking-tight">
                    Raise builders, not scrollers.
                  </p>
                  <span className="absolute -bottom-6 -right-2 text-8xl font-black text-primary/10 leading-none select-none rotate-180">"</span>
                </div>
                <p className="mt-3 text-center text-muted-foreground leading-relaxed">
                  We exist to help children grow into confident makers through hands-on learning that feels real, memorable, and empowering.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We imagine a world where every home and classroom has a small maker corner, a place where kids learn by building, testing, failing, fixing, and discovering.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sense-i is building toward a future where:
                </p>
                <ul className="mt-2 space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex gap-2"><span className="text-primary">•</span><span><strong className="text-foreground">Learning feels alive</strong>, guided by stories, challenges, and a companion character that motivates kids to keep going.</span></li>
                  <li className="flex gap-2"><span className="text-primary">•</span><span><strong className="text-foreground">Kids gain real skills:</strong> problem-solving, patience, curiosity, and confidence, not just information.</span></li>
                  <li className="flex gap-2"><span className="text-primary">•</span><span><strong className="text-foreground">Toys don't become clutter.</strong> They become a growing journey of experiences that kids remember.</span></li>
                </ul>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  And as our kit library grows, we want to keep it sustainable: a trade-in / second-life program where families return outgrown kits for credit, so products can be refurbished, reused, or responsibly recycled.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">Our Values</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {values.map((v, i) => (
                    <ScrollReveal key={v.title} delay={i * 0.08}>
                      <div className="rounded-3xl border border-border bg-card p-5 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 hover:border-primary/30">
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent text-primary">
                          <v.icon className="h-4 w-4" />
                        </div>
                        <h3 className="mt-3 font-bold">{v.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold">The Team</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  {team.map((member, i) => (
                    <ScrollReveal key={member.name} delay={i * 0.12}>
                      <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 hover:border-primary/30">
                        <div className="group mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-primary/15 ring-offset-2 ring-offset-background transition-all duration-300 hover:ring-primary/30">
                          <img src={member.photo} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h3 className="mt-4 font-semibold">{member.name}</h3>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
