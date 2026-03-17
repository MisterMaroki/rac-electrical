export function CallButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href="tel:07572459534"
      className={
        className ||
        "inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-lg text-lg shadow-lg hover:bg-[var(--accent-dark)] transition-all duration-300 hover:-translate-y-0.5"
      }
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {children || "Call Now \u2014 07572 459534"}
    </a>
  );
}
