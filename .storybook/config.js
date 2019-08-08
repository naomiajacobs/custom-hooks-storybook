import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(
  withInfo({
    inline: true
  })
);

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
