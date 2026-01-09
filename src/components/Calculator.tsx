import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CalculatorProps {
  variant?: "surveys" | "testing";
}

const Calculator = ({ variant = "surveys" }: CalculatorProps) => {
  const [activeTab, setActiveTab] = useState<"surveys" | "testing">(variant);
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState(10);
  const [responses, setResponses] = useState(20);
  const [testers, setTesters] = useState(100);

  const calculateCost = () => {
    if (activeTab === "surveys") {
      // Base cost: $0.25 per question-response pair
      return Math.max(50, questions * responses * 0.25);
    } else {
      // $1 per tester
      return testers * 1;
    }
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setActiveTab("surveys")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTab === "surveys"
              ? "bg-primary text-primary-foreground"
              : "bg-white text-foreground border border-border hover:border-primary/50"
          }`}
        >
          Online Surveys
        </button>
        <button
          onClick={() => setActiveTab("testing")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTab === "testing"
              ? "bg-primary text-primary-foreground"
              : "bg-white text-foreground border border-border hover:border-primary/50"
          }`}
        >
          Product testing
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl p-6 shadow-card border border-border/50">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                STEP 1: Your email for instant quote
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 rounded-xl border-border"
                />
              </div>
            </div>

            {activeTab === "surveys" ? (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    STEP 2: How many questions does your survey have?
                  </label>
                  <Input
                    type="number"
                    value={questions}
                    onChange={(e) => setQuestions(Number(e.target.value))}
                    className="rounded-xl border-border"
                    min={1}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    STEP 2: How many responses do you need?
                  </label>
                  <Input
                    type="number"
                    value={responses}
                    onChange={(e) => setResponses(Number(e.target.value))}
                    className="rounded-xl border-border"
                    min={1}
                  />
                </div>
              </>
            ) : (
              <div>
                <label className="block text-sm font-medium mb-2">
                  STEP 2: How many people should test your product?
                </label>
                <Input
                  type="number"
                  value={testers}
                  onChange={(e) => setTesters(Number(e.target.value))}
                  className="rounded-xl border-border"
                  min={1}
                />
              </div>
            )}

            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6">
              Calculate My Cost
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>We'll never spam you. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-primary rounded-2xl p-6 flex flex-col">
          <div className="text-sm text-white/90 mb-2">Total Cost</div>
          <div className="text-sm text-white/80 mb-4">
            {activeTab === "surveys"
              ? `For ${questions} questions × ${responses} participants`
              : `For ${testers} product testers`}
          </div>
          <div className="text-5xl font-display font-bold text-white mb-auto">
            ${calculateCost().toFixed(0)}
          </div>
          <Button
            variant="outline"
            className="mt-8 border-white border-2 text-white hover:bg-white hover:text-primary rounded-full"
          >
            Start My Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
