import Typografy from "shared/ui/Typografy/Typografy";
import s from "./UserCurrentsLoginInformation.module.scss";

const UserCurrentsLoginInformation = () => {
  return (
    <div className={s.container}>
      <div className={s.user_photo} />
      <Typografy variant="h3">Sally</Typografy>
    </div>
  );
};

export default UserCurrentsLoginInformation;
