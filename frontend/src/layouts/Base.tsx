// lib
import Helmet from "react-helmet";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../zod/config/schema/route.z";

export enum AUTH_LEVEL {
  ADMIN_ONLY = "ADMIN",
  USER_ONLY = "USER",
}

interface Props extends AppRoute {
  allow?: AUTH_LEVEL;
  children: ReactNode;
}

type PropType = Omit<Omit<Props, "component">, "href">;

const BaseLayout = ({
  title,
  description,
  keywords,
  allow,
  children,
}: PropType) => {
  const userRole: string = "USER";
  const navigate = useNavigate();

  useEffect(() => {
    if (allow && userRole !== allow) {
      navigate("/account/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRole]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      </Helmet>

      {children}
    </>
  );
};

export default BaseLayout;
