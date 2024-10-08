import { useRef } from "react";
import { accessContext } from "../../domain/audio";
import { Optional } from "../../domain/types";

export function useAudioContext(): Optional<AudioContextType> {
  const AudioContext = useRef(accessContext());

  return AudioContext.current;
}
