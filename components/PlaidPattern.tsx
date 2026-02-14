interface PlaidPatternProps {
  opacity?: number;
}

export function PlaidPattern({ opacity = 0.06 }: PlaidPatternProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="plaid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="transparent" />
            <line x1="0" y1="10" x2="40" y2="10" stroke="#F5B0C1" strokeWidth="1" />
            <line x1="0" y1="30" x2="40" y2="30" stroke="#F5B0C1" strokeWidth="1" />
            <line x1="10" y1="0" x2="10" y2="40" stroke="#F5B0C1" strokeWidth="1" />
            <line x1="30" y1="0" x2="30" y2="40" stroke="#F5B0C1" strokeWidth="1" />
            <line x1="0" y1="20" x2="40" y2="20" stroke="#FADADD" strokeWidth="0.5" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="#FADADD" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plaid)" />
      </svg>
    </div>
  );
}
