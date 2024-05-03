import Typografy from "shared/ui/Typografy/Typografy";
import s from "./PostWidget.module.scss";
import PostInfo from "./ui/post-info/PostInfo";
import PostActions from "./ui/post-actions/PostActions";
import PostCommentbar from "./ui/post-commetbar/PostCommentbar";
import Typography from "shared/ui/Typografy/Typografy";

const PostWidget = () => {
  return (
    <div className={s.post}>
      <PostInfo />
      <Typography variant="h3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>

      <div className={s.image}></div>
      <PostActions />
      <PostCommentbar />
    </div>
  );
};

export default PostWidget;
