/* import userStore from "@entities/user/model/store/user-store"; */

import { FC } from "react";

/**
 * @description Хук для работы с состоянием юзера.
 * Задача хука дать актуальное состояние о юзере, а так же основные методы для работы с ним
 */
const useUserStore: FC = ({ children }) => {
  /*   const { isAuth, phone, tokenId, form, isInactive, expiresTime, ...methods } =
    userStore(); */

  /* return {
    user: {
      isInactive,
      isAuth: isAuth(),
      phone,
      tokenId,
      expiresTime,
    },
    form,
    ...methods,
  } as const; */

  return <div>{children}</div>;
};

export default useUserStore;
