import { ReactElement, useEffect } from "react";
import { useAudioContext } from "../AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";
import { useInstrument } from "../../state/Instrument";

export const KeyboardWithInstrument = (): ReactElement => {
  const AudioContext = useAudioContext() as AudioContextType;
  const { instrument } = useInstrument();
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, instrument, current]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
