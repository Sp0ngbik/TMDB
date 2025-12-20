import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import s from "./Menu.module.scss";
import clsx from "clsx";
import { Categories, routes } from "@/common/variables";

const Menu = () => {
  const isLinkActive = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? clsx(s["active"]) : "";
  };
  return (
    <div className={s.menuBlock}>
      <NavLink className={isLinkActive} to={routes.main}>
        Main
      </NavLink>
      <NavLink
        className={isLinkActive}
        to={routes.category + Categories.popular}
      >
        Category Movies
      </NavLink>
      <NavLink className={isLinkActive} to={routes.filter}>
        Filtered Movies
      </NavLink>
      <NavLink className={isLinkActive} to={routes.search}>
        Search
      </NavLink>
      <NavLink className={isLinkActive} to={routes.favorites}>
        Favorites
      </NavLink>
    </div>
  );
};

export default Menu;
