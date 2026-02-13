import Layout from "@/components/layout/Layout";
import { Heart, Lightbulb, Puzzle, Repeat } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Curiosity", desc: "We believe every child is born curious. Our job is to fuel that fire." },
  { icon: Puzzle, title: "Real-World Thinking", desc: "STEM isn't abstract — it's how we understand bridges, weather, and why things fall." },
  { icon: Heart, title: "Creativity", desc: "There's no single right answer. We celebrate inventive solutions." },
  { icon: Repeat, title: "Persistence", desc: "The best learning happens when kids try, fail, iterate, and succeed." },
];

const About = () => {
  return (
    <Layout>
      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">About SenseI</h1>
            <p className="mt-3 text-muted-foreground">
              Bringing hands-on learning back into modern childhood.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                SenseI was born from a simple observation: kids learn best when they can touch, build, and experiment — 
                yet truly hands-on STEM experiences are harder to find than ever. We saw a gap between the screen-based 
                learning tools dominating the market and the tactile, exploratory play that research shows drives real understanding.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                So we set out to create something different. Not anti-screen, but screen-smart. Kits that combine real 
                materials with guided challenges, designed so kids can pick them up, build something real, and actually 
                understand why it works — all on their own.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <div className="mt-4 rounded-3xl border border-border bg-accent p-6 text-center shadow-warm">
                <p className="text-lg font-semibold text-foreground">
                  "Bring hands-on learning back into modern childhood."
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Our Values</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title} className="rounded-3xl border border-border bg-card p-5 shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-0.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent text-primary">
                      <v.icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-3 font-bold">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">The Team</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {["Founder 1", "Founder 2", "Advisor"].map((name) => (
                  <div key={name} className="rounded-3xl border border-border bg-card p-5 text-center shadow-warm transition-all duration-300 hover:shadow-warm-md hover:-translate-y-0.5">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                      <span className="text-xs text-muted-foreground">Photo</span>
                    </div>
                    <h3 className="mt-3 font-semibold">{name}</h3>
                    <p className="text-xs text-muted-foreground">Role placeholder</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;