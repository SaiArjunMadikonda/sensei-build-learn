import Layout from "@/components/layout/Layout";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { Helmet } from "react-helmet-async";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WaitlistPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <Layout>
      <Helmet>
        <title>Join the Waitlist | Sense-i STEM Kits</title>
        <meta name="description" content="Be first in line for Sense-i pilot launch. Hands-on STEM kits for curious kids ages 6–8." />
      </Helmet>

      <section ref={heroRef} className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 55%, hsl(0 0% 100%) 100%)' }}>
        <motion.div style={{ y: blobY1 }} className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.12] animate-mesh-float" aria-hidden="true">
          <div className="h-full w-full rounded-full" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        </motion.div>
        <motion.div style={{ y: blobY2 }} className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.08] animate-mesh-float-reverse" aria-hidden="true">
          <div className="h-full w-full rounded-full" style={{ background: 'radial-gradient(circle, hsl(258 90% 76%) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </motion.div>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary shadow-warm">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="font-display text-4xl tracking-tight">Join the Waitlist</h1>
            <p className="mt-4 text-muted-foreground">
              Be first in line when our pilot launches. No spam, just updates on hands-on STEM kits for curious kids.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="glass mx-auto max-w-md rounded-3xl border p-8 shadow-warm">
            <WaitlistForm sourcePage="waitlist" showName showRole />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              We only email Sense-i updates. No spam.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WaitlistPage;
