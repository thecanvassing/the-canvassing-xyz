import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator as CalcIcon, ArrowRight, CheckCircle, TrendingDown, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConfirmationPopup from "@/components/ConfirmationPopup";

interface CalculatorProps {
  variant?: "surveys" | "testing";
  showTabs?: boolean;
}

interface CalculatedPrice {
  yourCost: number;
  agencyCost: number;
  savings: number;
  savingsPercent: number;
  numQuestions: number;
  numParticipants: number;
  projectType: string;
}

const Calculator = ({ variant = "surveys", showTabs = true }: CalculatorProps) => {
  const [activeTab, setActiveTab] = useState<"surveys" | "testing">(variant);
  const [questions, setQuestions] = useState("");
  const [participants, setParticipants] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<CalculatedPrice | null>(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
  const [isPopupSuccess, setIsPopupSuccess] = useState(false);

  const calculateCost = () => {
    const numQuestions = parseInt(questions) || 0;
    const numParticipants = parseInt(participants) || 0;

    let baseCost = 0;
    if (activeTab === "surveys") {
      baseCost = Math.max(50, numParticipants * 2.5);
    } else {
      baseCost = Math.max(100, numParticipants * 5);
    }

    const agencyCost = baseCost * 10;
    const savings = agencyCost - baseCost;
    const savingsPercent = Math.round((savings / agencyCost) * 100);

    setCalculatedPrice({
      yourCost: baseCost,
      agencyCost: agencyCost,
      savings: savings,
      savingsPercent: savingsPercent,
      numQuestions: numQuestions,
      numParticipants: numParticipants,
      projectType: activeTab,
    });

    setShowEmailCapture(true);
  };

  const handleStartProject = () => {
    if (email.includes("@") && email.includes(".")) {
      setIsPopupOpen(true);
      setIsPopupLoading(true);
      setIsPopupSuccess(false);

      setTimeout(() => {
        setIsPopupLoading(false);
        setIsPopupSuccess(true);
      }, 1500);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsPopupLoading(false);
    setIsPopupSuccess(false);
  };

  const includedFeatures = [
    "Verified African participants",
    "Quality-checked responses",
    "Delivery in 48-72 hours",
    "Real-time project tracking",
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      {showTabs && (
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => {
              setActiveTab("surveys");
              setCalculatedPrice(null);
              setShowEmailCapture(false);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "surveys"
                ? "bg-primary text-primary-foreground"
                : "bg-white text-foreground border border-border hover:border-primary/50"
            }`}
          >
            Online Surveys
          </button>
          <button
            onClick={() => {
              setActiveTab("testing");
              setCalculatedPrice(null);
              setShowEmailCapture(false);
            }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "testing"
                ? "bg-primary text-primary-foreground"
                : "bg-white text-foreground border border-border hover:border-primary/50"
            }`}
          >
            Product Testing
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl p-6 shadow-card border border-border/50">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                STEP 1: Number of Questions
              </label>
              <input
                type="number"
                placeholder="e.g., 10"
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                STEP 2: Number of {activeTab === "surveys" ? "Participants" : "Testers"}
              </label>
              <input
                type="number"
                placeholder="e.g., 100"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none bg-background"
              />
            </div>

            <Button
              onClick={calculateCost}
              disabled={!questions || !participants}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6"
            >
              <CalcIcon className="w-5 h-5 mr-2" />
              Calculate My Cost
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>No email required to see pricing</span>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-primary rounded-2xl p-6 flex flex-col">
          <AnimatePresence mode="wait">
            {!calculatedPrice ? (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-8"
              >
                <CalcIcon className="w-12 h-12 mb-4 text-white/50" />
                <div className="text-xl font-display font-bold text-white mb-2">
                  Your Instant Quote
                </div>
                <p className="text-white/70 text-sm">
                  Enter your project details to see pricing
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-white/90 mb-2"
                >
                  Your Cost with Rez
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-sm text-white/80 mb-2"
                >
                  {activeTab === "surveys"
                    ? `For ${calculatedPrice.numQuestions} questions × ${calculatedPrice.numParticipants} participants`
                    : `For ${calculatedPrice.numParticipants} product testers`}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-5xl font-display font-bold text-white mb-4"
                >
                  ${calculatedPrice.yourCost.toFixed(0)}
                </motion.div>

                {/* Comparison */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 rounded-xl p-4 mb-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/90">Traditional Agency</span>
                    <span className="line-through text-white/60">
                      ${calculatedPrice.agencyCost.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <TrendingDown className="w-5 h-5" />
                    <span className="font-bold">
                      Save {calculatedPrice.savingsPercent}% (${calculatedPrice.savings.toFixed(0)})
                    </span>
                  </div>
                </motion.div>

                {/* Included Features */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2 mb-4"
                >
                  <p className="text-sm font-semibold text-white/90 mb-2">What's Included:</p>
                  {includedFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Email Capture */}
                {showEmailCapture && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="mt-auto pt-4 border-t border-white/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <p className="text-sm font-semibold text-white">Ready to get started?</p>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <Button
                        onClick={handleStartProject}
                        disabled={!email.includes("@")}
                        variant="outline"
                        className="w-full border-white border-2 text-primary bg-white hover:bg-primary hover:text-white rounded-full"
                      >
                        Start My Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        isLoading={isPopupLoading}
        isSuccess={isPopupSuccess}
        loadingTitle="Setting up your project..."
        loadingMessage="Please wait while we prepare everything."
        successTitle="Check Your Email!"
        successMessage={`We've sent instructions to ${email} on how to proceed with your project.`}
      />
    </div>
  );
};

export default Calculator;
