import Typography from "shared/ui/Typografy/Typografy";
import s from "./FriendsWidget.module.scss";

const FriendsWidget = () => {
  return (
    <div className={s.friends}>
      <Typography variant="h3">Friends</Typography>
      <div className={s.friends_images}>
        <div className={s.friends_image}></div>
        <div className={s.friends_image}></div>
        <div className={s.friends_image}></div>
        <div className={s.friends_image}></div>
      </div>
    </div>
  );
};

export default FriendsWidget;
