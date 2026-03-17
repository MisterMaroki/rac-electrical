interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  href?: string;
}

export function ReviewCard({ name, location, text, rating, href }: ReviewCardProps) {
  return (
    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 overflow-hidden">
      {/* Decorative quote mark */}
      <span
        className="absolute top-3 right-5 text-[5rem] leading-none font-serif text-white/[0.07] pointer-events-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-[var(--accent)]" : "text-white/30"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="relative italic text-white/90 text-sm leading-relaxed mb-5">
        &ldquo;{text}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="font-bold text-white text-[15px] tracking-wide">{name}</p>
          {/* Verified badge */}
          <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 rounded-full px-2 py-0.5">
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-1.39-2.41 3 3 0 00-4.61-1.39 3 3 0 00-5.304 0 3 3 0 00-4.61 1.39 3 3 0 00-1.39 2.41 3 3 0 010 5.304 3 3 0 001.39 2.41 3 3 0 004.61 1.39 3 3 0 005.304 0 3 3 0 004.61-1.39 3 3 0 001.39-2.41zM9.768 14.232a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06l1.97 1.97 4.22-4.22a.75.75 0 111.06 1.06l-4.75 4.75z"
                clipRule="evenodd"
              />
            </svg>
            Verified
          </span>
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[var(--accent-light)] text-xs transition-colors duration-300"
          >
            {location} ↗
          </a>
        ) : (
          <p className="text-white/60 text-xs">{location}</p>
        )}
      </div>
    </div>
  );
}
