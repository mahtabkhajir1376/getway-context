import React from "react";
import { themeChange } from "theme-change";
import { useEffect } from "react";
const ChangeTheme = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <select className="select select-bordered w-full max-w-xs" data-choose-theme>
      <option defaultChecked >
        select theme
      </option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="cupcake">CupCake</option>
      <option value="pastel">Pastel</option>
      <option value="coffee">Coffee</option>
      <option value="valentine">Valentine</option>
      <option value="lofi">Lofi</option>
      <option value="retro">Retro</option>

    </select>
  );
};
export default ChangeTheme;

