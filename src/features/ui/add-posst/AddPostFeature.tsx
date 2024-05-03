import Button from "shared/ui/button/Button";
import s from "./AddPostFeature.module.scss";

const AddPostFeature = () => {
  return (
    <div className={s.create}>
      <div className={s.user_picture}></div>
      <Button
        classes={{
          root: s.button,
        }}
        isBlock
        color="white"
      >
        Create Post
      </Button>
    </div>
  );
};

export default AddPostFeature;
