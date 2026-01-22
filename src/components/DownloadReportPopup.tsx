import { useState } from "react";
import { motion } from "framer-motion";
import { Download, X, Check, Target } from "lucide-react";

interface DownloadReportPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadReportPopup({ isOpen, onClose }: DownloadReportPopupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2000);
      }, 1000);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  if (!isOpen) return null;

  const bulletPoints = [
    "What's breaking traditional research panels",
    "How verified participant networks improve results",
    "How to adapt your research strategy in 2026",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                Before Your Data Gets Worse
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-3">
                Get Better Research Data in 2026
              </h3>
              <p className="text-muted-foreground mb-4">
                A FREE, in-depth research report revealing how participant behavior,
                incentives, and response quality are changing globally—and what smart
                researchers are doing differently.
              </p>
            </div>

            <div className="bg-purple-light rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-primary mb-2">
                If you run surveys or product tests, this report shows:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none bg-background"
              />

              <button
                onClick={handleSubmit}
                disabled={!isValidEmail(email) || isSubmitting}
                className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                  isValidEmail(email) && !isSubmitting
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Free Report
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              We'll never spam you. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-2">
              Check Your Email!
            </h3>
            <p className="text-muted-foreground">
              We've sent the 2026 Research Report to {email}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
