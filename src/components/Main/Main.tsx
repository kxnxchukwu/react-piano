import { ReactElement } from "react";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "../Keyboard";

export interface MainProps {
  className: string;
}

export const Main = ({ className }: MainProps): ReactElement => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? (
    <main className={className}>
      <Keyboard />
    </main>
  ) : (
    <NoAudioMessage />
  );
};
