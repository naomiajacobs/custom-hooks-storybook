import React from "react";
import { storiesOf } from "@storybook/react";

import { DemoComponent } from "../customHooks/useValidatedInput";

storiesOf("CustomHooks|useValidatedInput", module)
  .add("Default", () => <DemoComponent initialText="Hi" />)
  .add("With error", () => <DemoComponent initialText="Hello World" />);
