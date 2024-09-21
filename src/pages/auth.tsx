import { useTranslation } from "react-i18next";
import Seo from "src/layouts/seo/seo";
import { AuthPageComponent } from "src/page-component";

const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={
        `UTech | ${t("auth_page_title", { ns: "seo" })}` || "UTech | Auth"
      }
      metaDescription={
        `UTech | ${t("auth_page_description", { ns: "seo" })}` ||
        "Login or create your account for using UTech platform"
      }
    >
      <AuthPageComponent />
    </Seo>
  );
};

export default AuthPage;
