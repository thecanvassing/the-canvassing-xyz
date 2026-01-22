import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import Badge from "./Badge";

interface WelcomePopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function WelcomePopup({ isOpen: controlledIsOpen, onClose }: WelcomePopupProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleOpenChange = (open: boolean) => {
    if (isControlled) {
      if (!open && onClose) {
        onClose();
      }
    } else {
      setInternalIsOpen(open);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    handleOpenChange(false);
  };

  const bulletPoints = [
    "What's breaking traditional research panels",
    "How verified participant networks improve results",
    "How to adapt your research strategy in 2026",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg bg-secondary border-none shadow-2xl p-8 rounded-3xl">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge>Before Your Data Gets Worse</Badge>
          </div>
          <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-primary-dark">
            Get Better Research{" "}
            <span className="text-accent">Data in 2026:</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base leading-relaxed">
            A FREE, in-depth research report revealing how participant behavior,
            incentives, and response quality are changing globally—and what
            smart researchers are doing differently.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="popup-email" className="text-accent font-semibold text-base">
              Email
            </Label>
            <Input
              id="popup-email"
              type="email"
              placeholder="johnexample@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/80 border-white/50 rounded-xl py-6 px-4 text-base placeholder:text-muted-foreground/60"
              required
            />
          </div>

          <div className="space-y-3">
            <p className="text-muted-foreground text-sm">
              If you run surveys or product tests, this report shows:
            </p>
            <ul className="space-y-2">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-primary-dark text-sm"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary-dark hover:bg-primary text-white rounded-full py-6 text-sm font-bold uppercase tracking-wider"
          >
            Download Free Report
          </Button>

          <p className="text-center text-muted-foreground text-xs flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5" />
            We'll never spam you. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
