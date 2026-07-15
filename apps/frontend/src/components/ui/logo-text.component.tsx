import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="160"
      height="44"
      viewBox="0 0 160 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E07A52" />
          <stop offset="100%" stopColor="#9B4525" />
        </linearGradient>
        <linearGradient id="lt-hole" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0C4B0" />
          <stop offset="100%" stopColor="#C4623A" />
        </linearGradient>
      </defs>

      {/* Icon mark */}
      <rect x="0" y="2" width="40" height="40" rx="9" fill="url(#lt-bg)" />
      <rect x="10" y="10" width="5.5" height="24" rx="2" fill="#F5F0E8" />
      <path d="M15.5 10h8a8 8 0 0 1 0 16h-8V10z" fill="#F5F0E8" />
      <circle cx="23.5" cy="18" r="4.5" fill="url(#lt-hole)" />

      {/* Wordmark */}
      <text
        x="50"
        y="29"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="-0.8"
        fill="currentColor"
      >
        Postique
      </text>
    </svg>
  );
};
