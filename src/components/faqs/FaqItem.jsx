import { useRef, useState, useEffect } from 'react';
import "./faqs.css"

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(prev => !prev)}>
        <h3>{question}</h3>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}