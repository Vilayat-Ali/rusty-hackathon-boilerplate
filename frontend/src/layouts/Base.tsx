// lib
import Helmet from "react-helmet";
import { type ReactNode } from "react";
import { AppRoute } from "../zod/route.z";

interface Props extends AppRoute {
  children: ReactNode;
}

type PropType = Omit<Omit<Props, "component">, "href">;

const BaseLayout = ({ title, description, keywords, children }: PropType) => {
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
