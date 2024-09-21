import { useTranslation } from "react-i18next";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { AboutPageComponent } from "src/page-component";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={
        `UTech | ${t("about_page_title", { ns: "seo" })}` || "UTech | About us"
      }
      metaDescription={
        `UTech | ${t("about_page_description", { ns: "seo" })}` ||
        "Main information about UTech platform"
      }
    >
      <AboutPageComponent />
    </Seo>
  );
};

export default withLayout(AboutPage);
