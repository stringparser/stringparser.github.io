
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
    viewBox="0 0 2048 2048"
  >
    <path d="M1811 936l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z" />
  </svg>
);

export default TriangleDownIcon;
