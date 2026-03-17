"use client";

import { useQuoteForm } from "./quote-form-context";

export function QuoteButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openQuoteForm } = useQuoteForm();

  return (
    <button onClick={openQuoteForm} className={className}>
      {children ?? "Get A Quote"}
    </button>
  );
}
