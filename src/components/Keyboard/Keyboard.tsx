import { ReactElement } from "react";
import { Key } from "../Key";
import { selectKey } from "../../domain/keyboard";
import { notes } from "../../domain/note";
import styles from "./Keyboard.module.css";

export const Keyboard = (): ReactElement => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return <Key key={midi} type={type} label={label} />;
      })}
    </div>
  );
};
