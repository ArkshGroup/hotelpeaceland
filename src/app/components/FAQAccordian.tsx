"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border-0 rounded-xl overflow-hidden bg-white shadow-md"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-lg transition
                ${
                  isOpen
                    ? "bg-[rgb(31,79,156)] text-white"
                    : "bg-white  text-gray-800"
                }
              `}
            >
              <span>{item.question}</span>
              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            {isOpen && (
              <div className="px-6 py-4 bg-gray-50 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
