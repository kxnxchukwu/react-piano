import { ReactElement } from "react";

export const NoAudioMessage = (): ReactElement => {
  return (
    <div>
      <p>Sorry, it's not gonna work :-( </p>
      <p>
        Seems like your browser does not support the <code>Audio API</code>
      </p>
    </div>
  );
};
