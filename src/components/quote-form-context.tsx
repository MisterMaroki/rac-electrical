"use client";

import { createContext, useContext, useState, useCallback } from "react";

type QuoteFormContextType = {
  isOpen: boolean;
  openQuoteForm: () => void;
  closeQuoteForm: () => void;
};

const QuoteFormContext = createContext<QuoteFormContextType>({
  isOpen: false,
  openQuoteForm: () => {},
  closeQuoteForm: () => {},
});

export function QuoteFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteForm = useCallback(() => setIsOpen(true), []);
  const closeQuoteForm = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteFormContext.Provider value={{ isOpen, openQuoteForm, closeQuoteForm }}>
      {children}
    </QuoteFormContext.Provider>
  );
}

export function useQuoteForm() {
  return useContext(QuoteFormContext);
}
