import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";
import { Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) { setError(parsed.error.errors[0].message); return; }

    setLoading(true);
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    });

    if (dbError) { setError("Something went wrong. Please try again."); setLoading(false); return; }
    trackEvent("contact_submitted");
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Layout>
      <section className="py-16" style={{ background: 'linear-gradient(180deg, hsl(250 100% 98%) 0%, hsl(320 100% 99.6%) 100%)' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
            <p className="mt-3 text-muted-foreground">
              Questions, feedback, or ideas? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <div className="mb-8 flex items-center gap-3 rounded-2xl border border-border bg-accent p-4 shadow-warm">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Email us directly</p>
                <p className="text-sm text-muted-foreground">rootsensei1120@gmail.com</p>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-3xl border border-border bg-accent p-6 text-center shadow-warm">
                <div className="mb-2 text-2xl">✉️</div>
                <h3 className="text-lg font-semibold">Message sent!</h3>
                <p className="mt-1 text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-warm">
                <div>
                  <Label>Name *</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} className="mt-1" />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} className="mt-1" />
                </div>
                <div>
                  <Label>Message *</Label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} rows={5} className="mt-1" />
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Sending…" : "Send Message"}
                </Button>
                {error && <p className="text-sm text-destructive">{error}</p>}
              </form>
            )}

            <div className="mt-8 flex justify-center gap-3">
              {["Instagram", "Twitter", "Facebook"].map((name) => (
                <a key={name} href="#" className="rounded-full bg-accent border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
