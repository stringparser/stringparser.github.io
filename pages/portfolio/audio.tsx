import { Component } from 'react';

import Page from '../../components/Page';
import Layer from '../../components/Layer';
import Piano from '../../components/keys/piano';
import Section from '../../components/section/Section';

type State = {
};

class AudioPage extends Component<{}, State> {
  state: State = {
  };

  componentDidMount() {
    navigator.requestMIDIAccess().then(async ({ inputs }) => {
      const Tone = await import('tone');
      const synth = new Tone.PolySynth(10);

      synth.toMaster();

      inputs.forEach(el => {
        el.onmidimessage = (msg) => {
          const [cmd, midi, velocity] = msg.data;

          if (cmd === 254) {
            return;
          }

          const freq = new Tone.Frequency(midi, 'midi');

          if (cmd === 144 && velocity) {
            synth.triggerAttack([freq], undefined, velocity / 127);
          } else if (cmd === 144 && !velocity) {
            synth.triggerRelease(freq);
          }

          console.log('cmd', cmd, 'note', freq.toNote(), 'data', msg.data);
        };
      });
    });
  }

  render() {
    return (
      <Page title="building audio">
        <Section>
          <Layer>
            controls here
          </Layer>
          <Layer>
            <Piano />
          </Layer>
        </Section>
      </Page>
    );
  }
}

export default AudioPage;
