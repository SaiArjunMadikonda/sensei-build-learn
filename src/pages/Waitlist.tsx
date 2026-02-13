import Layout from "@/components/layout/Layout";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { Helmet } from "react-helmet-async";
import { Sparkles } from "lucide-react";

const WaitlistPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Join the Waitlist | SenseI STEM Kits</title>
        <meta name="description" content="Be first in line for SenseI pilot launch. Hands-on STEM kits for curious kids ages 6–8." />
      </Helmet>

      <section className="bg-gradient-to-b from-accent via-background to-background py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">Join the Waitlist</h1>
            <p className="mt-4 text-muted-foreground">
              Be first in line when our pilot launches. No spam — just updates on hands-on STEM kits for curious kids.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
            <WaitlistForm sourcePage="waitlist" showName showRole />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              We only email SenseI updates. No spam.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WaitlistPage;
