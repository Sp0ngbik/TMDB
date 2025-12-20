type Props = {
  rating?: number;
  size?: number;
  strokeWidth?: number;
};

const CircleRating = ({ rating = 0, size = 30, strokeWidth = 4 }: Props) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const percent = Math.min(Math.max(rating * 10, 0), 100);
  const progress = (percent / 100) * circumference;

  const getColor = (r: number) => {
    if (r < 4) return "#ef4444";
    if (r < 7) return "#eab308";
    return "#22c55e";
  };

  const color = getColor(rating);

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#1f2937"
        strokeWidth={strokeWidth}
        fill="none"
      />

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={(circumference - progress).toString()}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.4s ease, stroke 0.3s ease" }}
      />

      <text
        x="50%"
        y="50%"
        dy="0.35em"
        textAnchor="middle"
        fontSize={size * 0.32}
        fill="#fff"
        fontWeight="bold"
      >
        {rating?.toFixed(1)}
      </text>
    </svg>
  );
};

export default CircleRating;
