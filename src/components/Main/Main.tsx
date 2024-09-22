import { ReactElement } from "react";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { Playground } from "../Playground";

export interface MainProps {
  className: string;
}

export const Main = ({ className }: MainProps): ReactElement => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? (
    <main className={className}>
      <Playground />
    </main>
  ) : (
    <NoAudioMessage />
  );
};
