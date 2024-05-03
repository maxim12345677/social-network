import React, { FC } from "react";

/* import { AppUserProviderProps } from "@app/ui/app-user-provider/types";
import LoginPage from "@pages/login-page";
import useUserStore from "@shared/hooks/useUserStore"; */

const AppUserProvider: FC = ({ children }) => {
  /*    const { user } = useUserStore(); 

  const user = {
    isAuth: true,
  };

  if (!user.isAuth) return <LoginPage />;

  return <>{children}</>; */

  return <>{children}</>;
};

export default AppUserProvider;
