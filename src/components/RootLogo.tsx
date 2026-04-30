const RootLogo = ({ className = "" }: { className?: string }) => (
  <span className={`font-display font-bold text-2xl tracking-tight ${className}`}>
    r
    <span className="relative inline-block">
      o
      <svg
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-2"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0 L6 5 M6 5 L3 8 M6 5 L9 8 M6 3 L4 6 M6 3 L8 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
    ot<span className="text-primary">.</span>
  </span>
);

export default RootLogo;
