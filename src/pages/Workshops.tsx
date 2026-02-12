import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Calendar } from "lucide-react";

const workshopSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organization: z.string().trim().max(200).optional(),
  details: z.string().trim().max(1000).optional(),
});

const Workshops = () => {
  const [form, setForm] = useState({ name: "", email: "", organization: "", details: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const parsed = workshopSchema.safeParse(form);
    if (!parsed.success) { setError(parsed.error.errors[0].message); return; }

    setLoading(true);
    const { error: dbError } = await supabase.from("workshop_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      organization: parsed.data.organization || null,
      details: parsed.data.details || null,
    });

    if (dbError) { setError("Something went wrong. Please try again."); setLoading(false); return; }

    trackEvent("workshop_request_submitted");
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Workshops & Community</h1>
            <p className="mt-3 text-muted-foreground">
              Bring hands-on STEM learning to your group, school, or community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">STEM Workshops</h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Our workshops bring the SenseI experience to life in a group setting. Perfect for weekend enrichment, 
                after-school programs, birthday parties, and community events.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">✓</span> 60–90 minute guided sessions</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> All materials provided</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Groups of 8–24 kids</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Trained facilitator included</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold">Community Challenges</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Join monthly STEM challenges, share your builds, and connect with other SenseI families. Coming soon!
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <h3 className="font-semibold">Events Calendar</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Upcoming workshops and community events will be listed here.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Request a Workshop</h2>
              {submitted ? (
                <div className="mt-6 rounded-xl border border-primary/20 bg-secondary/50 p-6 text-center">
                  <div className="mb-2 text-2xl">🎉</div>
                  <h3 className="text-lg font-semibold">Request received!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We'll get back to you within 2 business days to discuss details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="ws-name">Name *</Label>
                    <Input id="ws-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
                  </div>
                  <div>
                    <Label htmlFor="ws-email">Email *</Label>
                    <Input id="ws-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
                  </div>
                  <div>
                    <Label htmlFor="ws-org">Organization</Label>
                    <Input id="ws-org" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} maxLength={200} />
                  </div>
                  <div>
                    <Label htmlFor="ws-details">Tell us about your event</Label>
                    <Textarea id="ws-details" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} maxLength={1000} rows={4} />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Sending…" : "Request a Workshop"}
                  </Button>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
