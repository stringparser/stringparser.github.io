
type TriangleIconProps = {
  size?: number;
  width?: number;
  height?: number;
};

const TriangleDownIcon: React.SFC<TriangleIconProps> = ({
  size = 32,
  width = size,
  height = size,
}) => (
  <svg
    fill="currentColor"
    width={width}
    height={height}
  >
    <path d="M4 8 H28 L16 26 z" />
  </svg>
);

export default TriangleDownIcon;
