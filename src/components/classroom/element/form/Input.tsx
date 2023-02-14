import React, { KeyboardEvent } from "react";
import "./Input.scss";

interface InputT {
  label: string;
  name: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({ label, name, onKeyDown }: InputT) {
  return (
    <>
      <div className="d-flex">
        <span className="label">{label}</span>
        <input
          className="q-input"
          type="text"
          name={name}
          onKeyDown={onKeyDown}
        />
      </div>
    </>
  );
}
