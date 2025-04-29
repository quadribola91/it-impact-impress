
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface DonationOption {
  amount: number;
  label: string;
}

const PaymentSupport: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5);
  const [customAmount, setCustomAmount] = useState<string>('');

  const donationOptions: DonationOption[] = [
    { amount: 5, label: '$5' },
    { amount: 10, label: '$10' },
    { amount: 25, label: '$25' },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleSubmit = () => {
    const finalAmount = selectedAmount || parseFloat(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      alert('Please select or enter a valid amount');
      return;
    }
    
    alert(`Thank you for your support! Processing $${finalAmount} payment.`);
    // Here you would integrate with a payment processor like Stripe or PayPal
  };

  return (
    <section className="py-12 px-4 md:px-8 relative bg-black/20" id="support">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Support</span> My Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            If you find value in my content or services, consider supporting my work.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-lg reveal-element">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="w-full sm:w-auto">
              <div className="flex flex-row sm:grid sm:grid-cols-3 gap-2">
                {donationOptions.map((option) => (
                  <Button
                    key={option.amount}
                    variant={selectedAmount === option.amount ? 'default' : 'outline'}
                    className="w-full text-sm"
                    onClick={() => handleAmountSelect(option.amount)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center w-full">
              <span className="px-2 py-2 bg-muted text-muted-foreground rounded-l-md">$</span>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="flex h-10 w-full rounded-r-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Custom amount"
              />
            </div>
          </div>
          
          <Button 
            className="w-full rounded-full"
            onClick={handleSubmit}
          >
            Support Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSupport;
