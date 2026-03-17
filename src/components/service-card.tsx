import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] rounded-xl shadow-sm p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ease-out group-hover:scale-105 bg-[var(--primary-light)] group-hover:bg-[var(--accent)]"
      >
        <svg
          className="w-7 h-7 text-[var(--primary)] transition-colors duration-500 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={icon}
          />
        </svg>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-[var(--dark)] mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]"
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-light)] leading-relaxed mb-5 line-clamp-3">
        {description}
      </p>

      {/* Link text */}
      <span className="inline-flex items-center text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
        Learn more
        <svg
          className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
