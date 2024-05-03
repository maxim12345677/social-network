import Typografy from "shared/ui/Typografy/Typografy";
import UiMap from "shared/ui/ui-map/UiMap";
import s from "./AboutWidget.module.scss";
import UiLink from "shared/ui/ui-link/UiLink";

const AboutWidget = () => {
  return (
    <div className={s.about}>
      <div className={s.titles}>
        <Typografy variant="h3" isBold>
          About
        </Typografy>
        <UiLink text="See all" />
      </div>

      <div className={s.content}>
        <UiMap />
        <Typografy variant="h3" icon="info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typografy>

        <Typografy variant="h3" icon="like">
          36,762 people likethis, including 25 of your friends
        </Typografy>

        <Typografy variant="h3" icon="folowers">
          37,822 people follow this
        </Typografy>

        <Typografy variant="h3" type="link" icon="site_link">
          https://www.website.com/
        </Typografy>

        <Typografy variant="h3" type="phone" icon="phone">
          012 345 6789
        </Typografy>

        <Typografy variant="h3" type="email" icon="email">
          email@website.com
        </Typografy>
      </div>
    </div>
  );
};

export default AboutWidget;
