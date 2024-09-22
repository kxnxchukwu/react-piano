import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";
import { ReactElement } from "react";
import { usePressObserver } from "../PressObserver";

type PressCallback = () => void;
export interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: PressCallback;
  onDown: PressCallback;
}

export const Key = (props: KeyProps): ReactElement => {
  const { type, onDown, onUp, label, ...rest } = props;

  const pressed = usePressObserver({
    watchKey: label,
    onFinishPress: onUp,
    onStartPress: onDown,
  });

  return (
    <button
      className={clsx(
        styles.key,
        styles[type],
        pressed && styles["is-pressed"]
      )}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
