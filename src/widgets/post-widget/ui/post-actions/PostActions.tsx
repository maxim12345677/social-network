import PostComments from "../post-comments/PostComments";
import PostLikeFeature from "../post-likes/PostLikeFeature";
import PostShare from "../post-share/PostShare";
import s from "./PostActions.module.scss";

const PostActions = () => {
  return (
    <div className={s.actions}>
      <PostLikeFeature />
      <PostComments />
      <PostShare />
    </div>
  );
};

export default PostActions;
