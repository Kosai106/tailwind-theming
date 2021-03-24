import { useThemeContext } from "../hooks/useTheme";

const ThemeSwitcher = ({ className }) => {
  const { setTheme } = useThemeContext();

  return (
    <select
      onChange={(evt) => setTheme(evt.target.value)}
      className={`text-content bg-foreground border border-edge p-4 w-72 rounded-lg ${
        className ? className : ""
      }`}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="custom">Custom</option>
    </select>
  );
};

export default ThemeSwitcher;
