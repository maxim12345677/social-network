import UserBckgPicture from "entities/user/ui/user-bckg-picture/UserBckgPicture";
import UserPageHeader from "./ui/user-page-header/UserPageHeader";
import s from "./UserPage.module.scss";
import AboutWidget from "widgets/about-widget/ui/AboutWidget";
import PhotoWidget from "widgets/photo-widget/ui/PhotoWidget";
import VideoWidget from "widgets/video-widget/ui/VideoWidget";
import AddPostFeature from "features/ui/add-posst/AddPostFeature";
import PostWidget from "widgets/post-widget/PostWidget";
import FriendsWidget from "widgets/friends-widget/FriendsWidget";

const UserPage = () => (
  <div className={s.user_page}>
    <div className={s.menu_container}>
      <div className={s.menu}>
        <UserBckgPicture />
        <UserPageHeader />
        {/*      <UserPageMenu /> */}
      </div>
    </div>

    <div className={s.content}>
      <div className={s.left_content}>
        <FriendsWidget />
        <AboutWidget />
        <PhotoWidget />
        <VideoWidget />
      </div>
      <div className={s.right_content}>
        <AddPostFeature />
        <PostWidget />
        {/* Тут вместо поста ЛЕНТА */}
      </div>
    </div>
  </div>
);

export default UserPage;
