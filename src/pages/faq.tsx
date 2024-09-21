import { useTranslation } from "react-i18next";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { FaqPageComponent } from "src/page-component";

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={
        `UTech | ${t("faq_page_title", { ns: "seo" })}` || "UTech | FAQ"
      }
      metaDescription={
        `UTech | ${t("faq_page_description", { ns: "seo" })}` ||
        "More users in UTech platform frequently asked question"
      }
    >
      <FaqPageComponent />
    </Seo>
  );
};

export default withLayout(FaqPage);
