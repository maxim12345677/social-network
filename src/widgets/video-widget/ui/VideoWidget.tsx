import Typografy from "shared/ui/Typografy/Typografy";
import s from "./VideoWidget.module.scss";
import Typography from "shared/ui/Typografy/Typografy";
import UiLink from "shared/ui/ui-link/UiLink";

const VideoWidget = () => {
  return (
    <div className={s.about}>
      <div className={s.titles}>
        <Typography variant="h3" isBold>
          Video
        </Typography>
        <UiLink text="See all" />
      </div>

      <div className={s.content}>
        <div className={s.video}></div>
      </div>
    </div>
  );
};

export default VideoWidget;
