import Typografy from "shared/ui/Typografy/Typografy";
import s from "./UserPageHeader.module.scss";
import Button from "shared/ui/button/Button";

const UserPageHeader = () => {
  return (
    <div className={s.root}>
      <div className={s.user_data}>
        <img src="" alt="" className={s.user_image} />
        <div className={s.user_personal}>
          <Typografy variant="h3" isBold>
            Name
          </Typografy>
          <Typografy variant="h3" color="gray">
            Industry
          </Typografy>
        </div>
      </div>
      <div className={s.buttons}>
        <Button className={s.button} color="blue">
          Message
        </Button>
        <Button className={s.more_button} color="light-grey">
          More &radic;
        </Button>
      </div>
    </div>
  );
};

export default UserPageHeader;
