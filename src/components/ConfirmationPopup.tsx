import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  loadingTitle?: string;
  loadingMessage?: string;
  successTitle?: string;
  successMessage?: string;
}

export default function ConfirmationPopup({
  isOpen,
  onClose,
  isLoading,
  isSuccess,
  loadingTitle = "Processing...",
  loadingMessage = "Please wait.",
  successTitle = "Success!",
  successMessage = "Your request has been processed.",
}: ConfirmationPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isLoading ? (
          <div className="py-8">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-primary mb-2">
              {loadingTitle}
            </h3>
            <p className="text-muted-foreground">{loadingMessage}</p>
          </div>
        ) : isSuccess ? (
          <div className="py-8">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-2">
              {successTitle}
            </h3>
            <p className="text-muted-foreground">{successMessage}</p>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
