import NotFoundPage from "pages/404/404";
import MessagePage from "pages/messages-page/ui/MessagePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  /* user = "user", */
  messages = "messages",
  notFoundPage = "not_found_page",
}

export const RoutePath: Record<AppRoutes, string> = {
  /*   [AppRoutes.user]: "/:id", */
  [AppRoutes.messages]: "/messages",
  [AppRoutes.notFoundPage]: "/not_found_page",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.messages]: {
    path: RoutePath.messages,
    element: <MessagePage />,
  },
  [AppRoutes.notFoundPage]: {
    path: RoutePath.not_found_page,
    element: <NotFoundPage />,
  },
  /*  [AppRoutes.user]: {
    path: RoutePath.user,
    element: <UserPage />,
  }, */
};
