
-- Add explicit UPDATE deny policies for defense in depth
CREATE POLICY "No public updates on waitlist" ON public.waitlist_signups FOR UPDATE TO anon, authenticated USING (false);
CREATE POLICY "No public updates on school inquiries" ON public.school_inquiries FOR UPDATE TO anon, authenticated USING (false);
CREATE POLICY "No public updates on workshop requests" ON public.workshop_requests FOR UPDATE TO anon, authenticated USING (false);
CREATE POLICY "No public updates on contact submissions" ON public.contact_submissions FOR UPDATE TO anon, authenticated USING (false);

-- Add explicit DELETE deny policies for defense in depth
CREATE POLICY "No public deletes on waitlist" ON public.waitlist_signups FOR DELETE TO anon, authenticated USING (false);
CREATE POLICY "No public deletes on school inquiries" ON public.school_inquiries FOR DELETE TO anon, authenticated USING (false);
CREATE POLICY "No public deletes on workshop requests" ON public.workshop_requests FOR DELETE TO anon, authenticated USING (false);
CREATE POLICY "No public deletes on contact submissions" ON public.contact_submissions FOR DELETE TO anon, authenticated USING (false);
