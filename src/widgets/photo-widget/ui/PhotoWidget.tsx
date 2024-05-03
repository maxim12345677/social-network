import Typografy from "shared/ui/Typografy/Typografy";
import s from "./PhotoWidget.module.scss";
import Typography from "shared/ui/Typografy/Typografy";
import UiLink from "shared/ui/ui-link/UiLink";

const PhotoWidget = () => {
  return (
    <div className={s.about}>
      <div className={s.titles}>
        <Typography variant="h3" isBold className={s.list_item}>
          Photo
        </Typography>
        <UiLink text="See all" />
      </div>

      <ul className={s.content}>
        <li className={s.photo}></li>
        <li className={s.photo}></li>
        <li className={s.photo}></li>
        <li className={s.photo}></li>
        <li className={s.photo}></li>
        <li className={s.photo}></li>
      </ul>
    </div>
  );
};

export default PhotoWidget;
