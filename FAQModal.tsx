import React from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl max-h-[80vh] bg-white border border-neutral-200 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-white z-10">
          <h2 className="text-2xl font-display font-bold text-premium-text tracking-wide uppercase">Frequently Asked Questions</h2>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-premium-text transition-colors rounded-full hover:bg-neutral-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-2 custom-scrollbar">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-neutral-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className={`text-base font-display font-medium tracking-wide transition-colors ${openIndex === index ? 'text-premium-gold' : 'text-premium-text group-hover:text-neutral-600'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-premium-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-neutral-600 font-sans leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQModal;