import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";
import { ReactElement } from "react";

export interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
}

export const Key = (props: KeyProps): ReactElement => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};
