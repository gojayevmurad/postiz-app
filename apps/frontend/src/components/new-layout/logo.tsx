'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E07A52" />
          <stop offset="100%" stopColor="#9B4525" />
        </linearGradient>
        <linearGradient id="logo-hole" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0C4B0" />
          <stop offset="100%" stopColor="#C4623A" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="60" height="60" rx="14" fill="url(#logo-bg)" />

      {/* P stem */}
      <rect x="15" y="14" width="7" height="32" rx="3" fill="#F5F0E8" />

      {/* P bowl */}
      <path
        d="M22 14h10a11 11 0 0 1 0 22H22V14z"
        fill="#F5F0E8"
      />

      {/* Inner cutout */}
      <circle cx="32" cy="25" r="6" fill="url(#logo-hole)" />
    </svg>
  );
};
