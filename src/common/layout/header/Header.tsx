import s from "./Header.module.scss";
import { TmdbLogo } from "@/assets";
import { LinearProgress, Menu, ThemeSwitch } from "@/components";
import { useNavigate } from "react-router-dom";
import { routes } from "@/common/variables";
import { useAppSelector } from "@/common/hooks";
import { getLoadingStatus } from "@/features/api";

const Header = () => {
  const loadingStatus = useAppSelector(getLoadingStatus);
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate(routes.main);
  };
  return (
    <header className={s.headerBlock}>
      <div className={s.headerElements}>
        <div className={s.logoBlock}>
          <TmdbLogo className={s.logoStyle} onClick={onLogoClick} />
        </div>
        <Menu />
        <ThemeSwitch />
      </div>
      {loadingStatus && <LinearProgress />}
    </header>
  );
};

export default Header;
