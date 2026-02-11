'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  iconPosition?: 'left' | 'right';
  titleClassName?: string;
  paddingClassName?: string;
  contentClassName?: string;
}

export default function Accordion({ 
  items, 
  iconPosition = 'right', 
  titleClassName = "text-xl md:text-2xl",
  paddingClassName = "py-6",
  contentClassName = ""
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border-t border-current">
      {items.map((item, index) => (
        <div key={index} className="border-b border-current">
          <button
            onClick={() => toggleItem(index)}
            className={`w-full ${paddingClassName} flex items-center text-left focus:outline-none group ${
              iconPosition === 'left' ? 'justify-start gap-6' : 'justify-between'
            }`}
          >
            {iconPosition === 'left' && (
              <div className="relative w-8 h-8 shrink-0">
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current transform -translate-y-1/2" />
                {/* Vertical line - rotates when open */}
                <div 
                  className={`absolute top-0 left-1/2 w-[1px] h-full bg-current transform -translate-x-1/2 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0'
                  }`} 
                />
              </div>
            )}

            <span className={`font-medium ${titleClassName}`}>{item.title}</span>

            {iconPosition === 'right' && (
              <div className="relative w-4 h-4 mr-2 shrink-0">
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current transform -translate-y-1/2" />
                {/* Vertical line - rotates when open */}
                <div 
                  className={`absolute top-0 left-1/2 w-[1px] h-full bg-current transform -translate-x-1/2 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0'
                  }`} 
                />
              </div>
            )}
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`text-lg leading-relaxed opacity-80 ${contentClassName} ${iconPosition === 'left' ? 'pl-10' : ''}`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
