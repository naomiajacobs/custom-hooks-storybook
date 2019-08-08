import React from "react";
import { storiesOf } from "@storybook/react";

import useValidatedInput from "../customHooks/useValidatedInput";

function DemoComponent({ initialText }) {
  const validator = text => (text.length > 5 ? "Too long" : null);
  const [inputProps, error] = useValidatedInput(initialText, validator);
  return (
    <div>
      <input {...inputProps} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

storiesOf("CustomHooks|useValidatedInput", module)
  .add("Default", () => <DemoComponent initialText="Hi" />)
  .add("With error", () => <DemoComponent initialText="Hello World" />);
