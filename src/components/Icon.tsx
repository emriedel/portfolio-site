interface IconProps {
  className?: string;
  size?: number;
}

export default function Icon({ className = "", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="4" fill="currentColor" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        ER
      </text>
    </svg>
  );
}