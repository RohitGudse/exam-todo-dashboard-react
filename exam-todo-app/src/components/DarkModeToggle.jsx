// src/components/DarkModeToggle.jsx
import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}