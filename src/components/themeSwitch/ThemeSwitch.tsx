import s from "./ThemeSwitch.module.scss";
import { useTheme } from "@/common/hooks";
import { MoonLogo, SunLogo } from "@/assets";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={s.themeSwitch} onClick={toggleTheme}>
      {theme === "dark" ? (
        <MoonLogo className={s.moonLogo} />
      ) : (
        <SunLogo className={s.sunLogo} />
      )}
    </div>
  );
};

export default ThemeSwitch;
