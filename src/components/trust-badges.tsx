const badges = [
  {
    label: "Fully Qualified",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", // shield-check
  },
  {
    label: "Fully Insured",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // check-circle
  },
  {
    label: "Local to Brighton",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // users
  },
  {
    label: "All Work Guaranteed",
    icon: "M5 13l4 4L19 7", // checkmark
  },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-[var(--border)] bg-white"
        >
          <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[var(--primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={badge.icon}
              />
            </svg>
          </div>
          <span className="text-sm font-semibold text-[var(--dark)]">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
