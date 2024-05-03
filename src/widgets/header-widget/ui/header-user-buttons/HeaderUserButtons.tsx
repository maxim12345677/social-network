import UserCurrentsLoginInformation from "entities/user/ui/user-current-login-picture/UserCurrentsLoginInformation";
import s from "./HeaderUserButtons.module.scss";
import MessagesIcon from "shared/assets/icons/MessagesIcon";
import NotificationIcon from "shared/assets/icons/NotificationIcon";
import DropDownIcon from "shared/assets/icons/DropDownIcon";
import ThemeSwitcher from "widgets/theme-switcher";

const HeaderUserButtons = () => {
  return (
    <div className={s.user_buttons}>
      <UserCurrentsLoginInformation />
      <MessagesIcon />
      <NotificationIcon />
      <DropDownIcon />
      <DropDownIcon />
      {/* <ThemeSwitcher /> */}
    </div>
  );
};

export default HeaderUserButtons;
