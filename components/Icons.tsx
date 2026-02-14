// components/Icons.tsx
interface IconProps {
  size?: number;
  className?: string;
}

export function HeartIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E8879B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#D4A574"
      stroke="none"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4A3540"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4A3540"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function CottonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="28" r="8" fill="#F9CDD7" />
      <circle cx="24" cy="24" r="7" fill="#FADADD" />
      <circle cx="40" cy="24" r="7" fill="#FADADD" />
      <circle cx="28" cy="18" r="6" fill="#F5B0C1" />
      <circle cx="36" cy="18" r="6" fill="#F5B0C1" />
      <circle cx="32" cy="22" r="7" fill="#F9CDD7" />
      <line x1="32" y1="35" x2="32" y2="52" stroke="#B8A5AE" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="42" x2="26" y2="48" stroke="#B8A5AE" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
      <path d="M40 16a20 20 0 1 0 0 32 16 16 0 0 1 0-32z" fill="#F9CDD7" />
      <circle cx="22" cy="26" r="1.5" fill="#F5B0C1" />
      <circle cx="30" cy="38" r="1" fill="#F5B0C1" />
      <circle cx="18" cy="36" r="1.5" fill="#FADADD" />
    </svg>
  );
}

export function CameraIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="20" width="44" height="30" rx="6" fill="#F9CDD7" />
      <circle cx="32" cy="35" r="10" fill="#FADADD" />
      <circle cx="32" cy="35" r="6" fill="white" opacity="0.6" />
      <path d="M24 20l3-6h10l3 6" fill="#F5B0C1" />
    </svg>
  );
}
