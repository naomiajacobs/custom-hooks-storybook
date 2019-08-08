import React, { useState } from "react";

export default function useValidatedInput(initialText, validator) {
  const [text, setText] = useState(initialText);
  const [error, setError] = useState(validator(initialText));

  const onChange = e => {
    const newText = e.target.value;
    const error = validator(newText);
    setError(error);
    setText(newText);
  };

  return [{ value: text, onChange }, error];
}

export function DemoComponent({ initialText }) {
  const validator = text => (text.length > 5 ? "Too long" : null);
  const [inputProps, error] = useValidatedInput(initialText, validator);
  return (
    <div>
      <input {...inputProps} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
