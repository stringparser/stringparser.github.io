import styled from 'styled-components';

export type PianoProps = {
  blackKeyWith?: number;
  whiteKeyWidth?: number;
  numberOfOctaves?: number;
};

function getRange(n: number) {
  return Array.from(Array(n).keys());
}

// total is 12 keys per octave
// index from 0 to 4 is black
// index from 5 to 11 is white

function getX(index: number, props: PianoProps) {
  const pos = getPos(index);
  const offset = Math.floor(index / 12) * getFullOctaveWith(props);

  if (pos < 7) {
    return offset + pos * props.whiteKeyWidth;
  }

  if (pos < 9) {
    return (
      offset
      + (pos - 6) * props.whiteKeyWidth
      - props.blackKeyWith / 2
    );
  } else {
    return (
      offset +
      + (4 + pos - 9) * props.whiteKeyWidth
      - props.blackKeyWith / 2
    );
  }
}

function getRectProps(index: number, props: PianoProps) {
  const isWhite = isWhiteKey(index);
  return {
    fill: isWhite ? 'white' : 'black',
    width: isWhite ? props.whiteKeyWidth : props.blackKeyWith,
    height: isWhite ? '80' : '50',
  };
}

function getPos(index: number) {
  return index % 12;
}

function isWhiteKey(index: number) {
  return getPos(index) < 7;
}

function getFullOctaveWith({ whiteKeyWidth }: PianoProps) {
  return whiteKeyWidth * 7;
}

const Rect = styled.rect`
  cursor: pointer;

  &:hover {
    fill: rgba(0,0,0,0.2);
  }
`;

const Piano: React.SFC<PianoProps> = (props) => (
  <svg
    strokeWidth="1"
    viewBox={`0 0 ${props.numberOfOctaves * getFullOctaveWith(props)} 80`}
  >
    <g>
      {getRange(props.numberOfOctaves * 12).map((_, index) => {
        const rectProps = getRectProps(index, props);
        return (
          <Rect
            x={getX(index, props)}
            y="0"
            key={index}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="1"
            {...rectProps}
          />
        );
      })}
    </g>
  </svg>
);

Piano.defaultProps = {
  blackKeyWith: 16,
  whiteKeyWidth: 20,
  numberOfOctaves: 3,
};

export default Piano;
