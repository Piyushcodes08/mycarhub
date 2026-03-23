import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee } from 'lucide-react';

export const EMICalculatorSection = () => {
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [tenure, setTenure] = useState(60);
  const [rate, setRate] = useState(8.5);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    return Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [loanAmount, tenure, rate]);

  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - loanAmount;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  const principalPercent = (loanAmount / totalPayable) * 100;

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            EMI Calculator
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Plan Your <span className="text-gradient">Finances</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Calculate your monthly EMI instantly. No hidden charges.
          </p>
        </motion.div>

        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-muted-foreground">Loan Amount</label>
                  <span className="text-sm font-bold text-foreground">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹1L</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-muted-foreground">Tenure</label>
                  <span className="text-sm font-bold text-foreground">{tenure} months</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={84}
                  step={6}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 yr</span>
                  <span>7 yrs</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-muted-foreground">Interest Rate</label>
                  <span className="text-sm font-bold text-foreground">{rate}%</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={18}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>6%</span>
                  <span>18%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col items-center justify-center">
              {/* Visual donut */}
              <div className="relative w-48 h-48 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    strokeDasharray={`${principalPercent * 2.51} ${251 - principalPercent * 2.51}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <IndianRupee className="w-5 h-5 text-primary mb-1" />
                  <span className="font-display text-2xl font-bold text-foreground">
                    {emi.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-muted-foreground">/month</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex justify-between items-center glass rounded-xl px-4 py-3">
                  <span className="text-sm text-muted-foreground">Principal</span>
                  <span className="text-sm font-bold text-foreground">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center glass rounded-xl px-4 py-3">
                  <span className="text-sm text-muted-foreground">Total Interest</span>
                  <span className="text-sm font-bold text-accent">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center glass rounded-xl px-4 py-3 border border-primary/20">
                  <span className="text-sm text-muted-foreground">Total Payable</span>
                  <span className="text-sm font-bold text-primary">{formatCurrency(totalPayable)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
