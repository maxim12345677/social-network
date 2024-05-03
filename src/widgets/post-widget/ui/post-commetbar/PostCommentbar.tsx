import Typography from "shared/ui/Typografy/Typografy";
import s from "./PostCommentbar.module.scss";

const PostCommentbar = () => {
  return (
    <div className={s.content}>
      <div className={s.image}></div>
      <Typography className={s.commentbar} color="gray" variant="h3">
        Write a comment...
      </Typography>
    </div>
  );
};

export default PostCommentbar;
