
-- Waitlist signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'parent' CHECK (role IN ('parent', 'educator')),
  kit_interest TEXT DEFAULT 'all',
  intent TEXT DEFAULT 'waitlist' CHECK (intent IN ('waitlist', 'preorder')),
  source_page TEXT NOT NULL DEFAULT 'home',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add unique constraint on email
CREATE UNIQUE INDEX idx_waitlist_email ON public.waitlist_signups(email);

ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Public can insert (anonymous signups)
CREATE POLICY "Anyone can submit waitlist signup"
ON public.waitlist_signups FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public reads
CREATE POLICY "No public reads on waitlist"
ON public.waitlist_signups FOR SELECT
TO authenticated
USING (false);

-- School/educator inquiry table
CREATE TABLE public.school_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_name TEXT NOT NULL,
  contact_role TEXT NOT NULL,
  email TEXT NOT NULL,
  student_count TEXT,
  grades TEXT,
  interest_type TEXT DEFAULT 'pilot' CHECK (interest_type IN ('pilot', 'bundle', 'workshop')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.school_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit school inquiry"
ON public.school_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "No public reads on school inquiries"
ON public.school_inquiries FOR SELECT
TO authenticated
USING (false);

-- Workshop requests table
CREATE TABLE public.workshop_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.workshop_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit workshop request"
ON public.workshop_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "No public reads on workshop requests"
ON public.workshop_requests FOR SELECT
TO authenticated
USING (false);

-- Contact form submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "No public reads on contact submissions"
ON public.contact_submissions FOR SELECT
TO authenticated
USING (false);
