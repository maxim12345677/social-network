import HomePageIcon from "shared/assets/icons/HomePageIcon";
import s from "./HeaderMainMenu.module.scss";
import VideosIcon from "shared/assets/icons/VideosIcon";
import StoreIcon from "shared/assets/icons/StoreIcon";
import FriendIcon from "shared/assets/icons/FriendsIcon";
// это все в массив, и масив уже рендерить

const HeaderMainMenu = () => {
  return (
    <div className={s.menu}>
      <HomePageIcon />
      <VideosIcon />
      <StoreIcon />
      <FriendIcon />
    </div>
  );
};

export default HeaderMainMenu;
