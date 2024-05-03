import React from "react";

/* import UiButton from "@shared/ui/ui-button"; */
/* import UiLayoutBase from "@shared/ui/ui-layout-base"; */
/* import UiPicture from "@shared/ui/ui-picture";
import UiTypography from "@shared/ui/ui-typography"; */

import { UiStatusDisplayPropsType } from "./types";
import s from "./StatusDisplay.module.scss";

const UiStatusDisplay = ({
  picture,
  title,
  subtitle,
  buttonText,
  onClick,
}: UiStatusDisplayPropsType) => {
  /*   return;   (
    <UiLayoutBase>
      <UiLayoutBase.TopRow>
        <div className={s.root}>
          <div className={s.img_wrap}>
            <UiPicture image={picture} />
          </div>
          <UiTypography variant="h3" isDemiBold classes={{ root: s.title }}>
            {title}
          </UiTypography>
          {subtitle && (
            <UiTypography variant="p2" classes={{ root: s.text }}>
              {subtitle}
            </UiTypography>
          )}
          <UiButton size="lg" onClick={onClick} classes={{ root: s.btn }}>
            {buttonText}
          </UiButton>
        </div>
      </UiLayoutBase.TopRow>
    </UiLayoutBase>
  );  */

  return <div></div>;
};

export default UiStatusDisplay;
