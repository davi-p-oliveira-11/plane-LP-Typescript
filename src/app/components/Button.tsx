import React from "react";

interface ButtonProps {
  text?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="bg-green px-5 py-2 rounded-sm">
      {props.text || "Send"}
    </button>
  );
}
