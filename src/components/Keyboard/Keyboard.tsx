import { ReactElement } from "react";
import { Key } from "../Key";
import { selectKey } from "../../domain/keyboard";
import { MidiValue, notes } from "../../domain/note";
import styles from "./Keyboard.module.css";

export interface KeyboardProps {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard = ({
  loading,
  play,
  stop,
}: KeyboardProps): ReactElement => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
