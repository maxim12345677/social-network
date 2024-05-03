import HeaderSearch from "./ui/header-search";
import HeaderMainMenu from "./ui/header-main-menu";
import HeaderUserButtons from "./ui/header-user-buttons";

import s from "./HeaderWidget.module.scss";
import MainLogo from "shared/ui/main-logo";

const HeaderWidget = () => {
  return (
    <header className={s.header}>
      <div className={s.logos}>
        <MainLogo />
        <HeaderSearch />
      </div>
      <HeaderMainMenu />

      <div className={s.menu_content}>
        <HeaderUserButtons />
      </div>
    </header>
  );
};

export default HeaderWidget;
