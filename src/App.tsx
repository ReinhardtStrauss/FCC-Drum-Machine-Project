import "./App.css";

export interface AudioClip {

  keyTrigger: string;
  
  url: string;
  
  description: string;

}

interface DrumProps {

  audioClip: AudioClip;

}

const Edrum = ({ audioClip }: DrumProps) => {

  const playAudioClip = (clip: AudioClip) => {
  
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
  
    .play()
  
    .catch(console.error)

    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <button

      className="drum-pad"
      
      id={`drum-${audioClip.keyTrigger}`}

      onClick={() => playAudioClip (audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      
      {audioClip.keyTrigger}

    </button>
  );
};

const fccMp3: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },

  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },

  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },

  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },

  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },

  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },

  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },

  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },

  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },

];

function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {

    const clip = fccMp3.find(

      (clip) => clip.keyTrigger === e.key.toUpperCase()

      );

      if (!clip) return;

      (document.getElementById(clip.keyTrigger) as HTMLAudioElement)

      .play()

      .catch(console.error);

    document.getElementById("drum-machine" + clip.keyTrigger)?.focus();

    document.getElementById("display")!.innerText = clip.description;

  };

  return (

<div className="htext" id="drum-machine" onKeyDown={playAudio}>
    
      <div className="drum-machine">

        {fccMp3.map((clip) => (

<Edrum audioClip={clip} key={clip.keyTrigger} />

))}

      </div>

      <div id="display"></div>

    </div>

);

}

export default App;
