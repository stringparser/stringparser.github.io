
type LogoProps = {
  dim?: number;
};

const Logo: React.SFC<LogoProps> = ({ dim = 32 }) => (
  <svg
    width={dim}
    height={dim}
    viewBox="0 0 24 24"
  >
    <path
      d="M10,12.8l-5-1.4l0.9-2.8l4.9,2L10.5,5h3.1l-0.3,5.6l4.8-1.9l0.9,2.9L14,13l3.3,4.2L14.8,19l-2.9-4.6l-2.8,4.4l-2.5-1.7 L10,12.8z"
      fill="currentColor"
    />
  </svg>
);

export default Logo;
