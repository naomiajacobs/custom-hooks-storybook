import React, { useState } from "react";

export default function useValidatedInput(initialText, validator) {
  const [text, setText] = useState(initialText);
  const [error, setError] = useState(validator(initialText));

  const onChange = e => {
    const newText = e.target.value;
    const error = validator(newText); // string | null
    setError(error);
    setText(text);
  };

  return [{ value: text, onChange }, error];
}
