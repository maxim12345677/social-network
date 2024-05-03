import Typografy from "shared/ui/Typografy/Typografy";
import s from "./PostInfo.module.scss";
import Typography from "shared/ui/Typografy/Typografy";

const PostInfo = () => {
  return (
    <div className={s.info}>
      <div className={s.image}></div>
      <div className={s.content}>
        <Typography variant="h3" isBold>
          Name
        </Typography>
        <Typography variant="h3" className={s.date} color="gray">
          Yesterday at 14:03
        </Typography>
      </div>
    </div>
  );
};

export default PostInfo;
