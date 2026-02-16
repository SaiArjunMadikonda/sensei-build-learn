import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { trackEvent } from "@/lib/analytics";

const MODAL_DELAY_MS = 35000; // 35 seconds
const STORAGE_KEY = "sensei-waitlist-modal-dismissed";

const WaitlistModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Timer trigger
    const timer = setTimeout(() => {
      setOpen(true);
      trackEvent("waitlist_opened", { trigger: "timer" });
    }, MODAL_DELAY_MS);

    // Exit intent (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
        trackEvent("waitlist_opened", { trigger: "exit_intent" });
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Don't miss the pilot launch! 🚀</DialogTitle>
          <DialogDescription>
            Be first to get hands-on STEM kits designed for curious kids. No spam, just launch updates.
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm
          sourcePage="modal"
          showName
          showRole
          onSuccess={() => {
            setTimeout(() => handleClose(false), 2500);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
