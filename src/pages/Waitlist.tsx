import Layout from "@/components/layout/Layout";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { Helmet } from "react-helmet-async";
import { Sparkles } from "lucide-react";

const WaitlistPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Join the Waitlist | Sense-i STEM Kits</title>
        <meta name="description" content="Be first in line for Sense-i pilot launch. Hands-on STEM kits for curious kids ages 6–8." />
      </Helmet>

      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 55%, hsl(0 0% 100%) 100%)' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary shadow-warm">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">Join the Waitlist</h1>
            <p className="mt-4 text-muted-foreground">
              Be first in line when our pilot launches. No spam, just updates on hands-on STEM kits for curious kids.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-md rounded-3xl border border-border bg-card p-8 shadow-warm">
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
