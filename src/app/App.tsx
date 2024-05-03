import { Suspense } from "react";

import { AppProps } from "./types";
import AppLayout from "./ui/app-layout";
import { AppRouter } from "./provider/router";
import HeaderWidget from "widgets/header-widget/HeaderWidget";
import UserPage from "pages/user-page";

const App = ({ children }: AppProps) => {
  return (
    <AppLayout>
      <Suspense fallback="">
        <HeaderWidget />
        <UserPage />
        {children}
        <AppRouter />
      </Suspense>
    </AppLayout>
  );
};

export default App;
