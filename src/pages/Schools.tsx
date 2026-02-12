import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { z } from "zod";
import { FileText } from "lucide-react";

const inquirySchema = z.object({
  school_name: z.string().trim().min(1, "School name is required").max(200),
  contact_role: z.string().trim().min(1, "Role is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  student_count: z.string().trim().max(50).optional(),
  grades: z.string().trim().max(50).optional(),
  interest_type: z.enum(["pilot", "bundle", "workshop"]),
  message: z.string().trim().max(1000).optional(),
});

const Schools = () => {
  const [form, setForm] = useState({
    school_name: "", contact_role: "", email: "",
    student_count: "", grades: "", interest_type: "pilot" as "pilot" | "bundle" | "workshop",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) { setError(parsed.error.errors[0].message); return; }

    setLoading(true);
    const { error: dbError } = await supabase.from("school_inquiries").insert({
      school_name: parsed.data.school_name,
      contact_role: parsed.data.contact_role,
      email: parsed.data.email,
      student_count: parsed.data.student_count || null,
      grades: parsed.data.grades || null,
      interest_type: parsed.data.interest_type,
      message: parsed.data.message || null,
    });

    if (dbError) { setError("Something went wrong. Please try again."); setLoading(false); return; }
    trackEvent("educator_inquiry_submitted", { interest_type: form.interest_type });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Schools & Educators</h1>
            <p className="mt-3 text-muted-foreground">
              Bring hands-on STEM to your classroom with low-prep, high-engagement kits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Why Schools Love SenseI</h2>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Low prep — open, distribute, go</li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> High engagement across skill levels</li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Aligned with key STEM skills & frameworks</li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Works in classrooms, after-school, enrichment</li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Classroom bundles with volume pricing</li>
              </ul>

              <div className="mt-10 rounded-xl border-2 border-primary/20 bg-secondary/30 p-6">
                <Badge className="mb-2">Pilot Program</Badge>
                <h3 className="text-lg font-bold">Be a Pilot School</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We're looking for schools to pilot our first kits. Get free materials, dedicated support, and help shape the future of hands-on STEM education.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">Educator One-Pager</span>
                  <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Download a 1-page overview for your principal or district. Available soon.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">School Inquiry Form</h2>
              {submitted ? (
                <div className="mt-6 rounded-xl border border-primary/20 bg-secondary/50 p-6 text-center">
                  <div className="mb-2 text-2xl">🎉</div>
                  <h3 className="text-lg font-semibold">Inquiry received!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">We'll follow up within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <Label>School / Organization Name *</Label>
                    <Input value={form.school_name} onChange={(e) => setForm({ ...form, school_name: e.target.value })} required maxLength={200} />
                  </div>
                  <div>
                    <Label>Your Role *</Label>
                    <Input value={form.contact_role} onChange={(e) => setForm({ ...form, contact_role: e.target.value })} required placeholder="e.g. Teacher, Principal, Program Director" maxLength={100} />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label># of Students</Label>
                      <Input value={form.student_count} onChange={(e) => setForm({ ...form, student_count: e.target.value })} placeholder="e.g. 25" maxLength={50} />
                    </div>
                    <div>
                      <Label>Grades</Label>
                      <Input value={form.grades} onChange={(e) => setForm({ ...form, grades: e.target.value })} placeholder="e.g. 1–3" maxLength={50} />
                    </div>
                  </div>
                  <div>
                    <Label>Interest</Label>
                    <div className="mt-1.5 flex gap-2">
                      {(["pilot", "bundle", "workshop"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, interest_type: type })}
                          className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium capitalize transition-all ${
                            form.interest_type === type ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Message</Label>
                    <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={3} />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Sending…" : "Submit Inquiry"}
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

export default Schools;
