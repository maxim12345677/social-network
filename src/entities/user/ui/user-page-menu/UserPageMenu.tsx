import Typography from "shared/ui/Typografy/Typografy";
import s from "./UserPageMenu.module.scss";
import cn from "classnames";

const UserPageMenu = () => {
  return (
    <div className={s.user_page_menu}>
      <ul className={s.list}>
        <Typography variant="li" className={s.list_item}>
          Communityies
        </Typography>
        <Typography variant="li" className={s.list_item}>
          Музыка
        </Typography>
        <Typography variant="li" className={s.list_item}>
          Музыка
        </Typography>
        <Typography variant="li" className={s.list_item}>
          Друзья
        </Typography>
      </ul>
      <ul className={s.user_actions}>
        <Typography icon="search" variant="li" className={s.list_item}>
          &nbsp;
        </Typography>
      </ul>
    </div>
  );
};

export default UserPageMenu;
