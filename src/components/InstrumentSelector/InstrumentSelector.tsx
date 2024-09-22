import { ChangeEvent, ReactElement } from "react";
import { options } from "./options";
import { useInstrument } from "../../state/Instrument";
import { InstrumentName } from "soundfont-player";
import styles from "./InstrumentSelector.module.css";

export const InstrumentSelector = (): ReactElement => {
  const { instrument, setInstrument } = useInstrument();
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName);
  return (
    <select
      className={styles.instruments}
      onChange={updateValue}
      value={instrument}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
