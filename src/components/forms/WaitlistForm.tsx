import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
  name: z.string().trim().max(100).optional(),
  role: z.enum(["parent", "educator"]),
  kit_interest: z.string().default("all"),
});

interface WaitlistFormProps {
  sourcePage: string;
  showName?: boolean;
  showRole?: boolean;
  kitInterest?: string;
  intent?: "waitlist" | "preorder";
  compact?: boolean;
  onSuccess?: () => void;
}

const WaitlistForm = ({
  sourcePage,
  showName = false,
  showRole = true,
  kitInterest = "all",
  intent = "waitlist",
  compact = false,
  onSuccess,
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"parent" | "educator">("parent");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const parsed = waitlistSchema.safeParse({ email, name: name || undefined, role, kit_interest: kitInterest });
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const { error: dbError } = await supabase.from("waitlist_signups").insert({
        email: parsed.data.email,
        name: parsed.data.name || null,
        role: parsed.data.role,
        kit_interest: parsed.data.kit_interest,
        intent,
        source_page: sourcePage,
      });

      if (dbError) {
        if (dbError.code === "23505") {
          setError("You're already on the list! We'll be in touch soon.");
        } else {
          setError("Something went wrong. Please try again.");
        }
        setLoading(false);
        return;
      }

      trackEvent("waitlist_submitted", { source_page: sourcePage, role, intent });
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/20 bg-secondary/50 p-6 text-center">
        <div className="mb-2 text-2xl">🎉</div>
        <h3 className="text-lg font-semibold">You're on the list!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          We'll email you with pilot invite updates and early access info. Stay tuned!
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
        </div>
        {showRole && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRole("parent")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                role === "parent" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              Parent
            </button>
            <button
              type="button"
              onClick={() => setRole("educator")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                role === "educator" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              Educator
            </button>
          </div>
        )}
        <Button type="submit" disabled={loading} className="h-11">
          {loading ? "Joining…" : "Join Waitlist"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {showName && (
        <div>
          <Label htmlFor="wl-name">Name</Label>
          <Input
            id="wl-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
          />
        </div>
      )}
      <div>
        <Label htmlFor="wl-email">Email *</Label>
        <Input
          id="wl-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={255}
        />
      </div>
      {showRole && (
        <div>
          <Label>I am a…</Label>
          <div className="mt-1.5 flex gap-2">
            <button
              type="button"
              onClick={() => setRole("parent")}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                role === "parent" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary/30"
              }`}
            >
              👨‍👩‍👧 Parent
            </button>
            <button
              type="button"
              onClick={() => setRole("educator")}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                role === "educator" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary/30"
              }`}
            >
              🏫 Educator
            </button>
          </div>
        </div>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Joining…" : "Join Waitlist"}
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </form>
  );
};

export default WaitlistForm;
