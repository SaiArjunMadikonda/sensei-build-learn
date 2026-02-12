import Layout from "@/components/layout/Layout";
import WaitlistForm from "@/components/forms/WaitlistForm";

const WaitlistPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Join the Waitlist</h1>
            <p className="mt-3 text-muted-foreground">
              Be first in line when our pilot launches. No spam — just updates on hands-on STEM kits for curious kids.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-md">
            <WaitlistForm sourcePage="waitlist" showName showRole />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WaitlistPage;
