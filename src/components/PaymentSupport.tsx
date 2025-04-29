
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface DonationOption {
  amount: number;
  label: string;
}

const PaymentSupport: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const donationOptions: DonationOption[] = [
    { amount: 5, label: '$5' },
    { amount: 10, label: '$10' },
    { amount: 25, label: '$25' },
    { amount: 50, label: '$50' },
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
    <section className="py-20 px-4 md:px-8 relative bg-black/20" id="support">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Support</span> My Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            If you find value in my content, projects, or tutorials, consider supporting my work.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-lg">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Choose an Amount</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {donationOptions.map((option) => (
                <Button
                  key={option.amount}
                  variant={selectedAmount === option.amount ? 'default' : 'outline'}
                  className="w-full"
                  onClick={() => handleAmountSelect(option.amount)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Or Enter a Custom Amount</h3>
            <div className="flex items-center">
              <span className="px-3 py-2 bg-muted text-muted-foreground rounded-l-md">$</span>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="flex h-10 w-full rounded-r-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter amount"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
            <div className="flex space-x-4">
              <div className="p-4 border border-border rounded-md flex-1 flex items-center justify-center">
                <span>Credit Card</span>
              </div>
              <div className="p-4 border border-border rounded-md flex-1 flex items-center justify-center">
                <span>PayPal</span>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full rounded-full text-lg py-6"
            onClick={handleSubmit}
          >
            Support Now
          </Button>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            All transactions are secure and encrypted. By supporting, you help me create more valuable content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSupport;
