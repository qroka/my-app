import Dither from './Dither';

export default function Home() {
  return (
    <div style={{ width: '100%', height: '68rem', position: 'relative'}}>
     <Dither
      waveColor={[0.5, 0.5, 0.5]}
      disableAnimation={false}
      enableMouseInteraction={true}
      mouseRadius={0.1}
      colorNum={4}
      waveAmplitude={0.3}
      waveFrequency={3}
      waveSpeed={0.05}
    />
  </div>
  );
}
