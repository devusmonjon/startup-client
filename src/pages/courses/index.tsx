import { GetServerSideProps } from "next";
import { useTranslation } from "react-i18next";
import { CourseType } from "src/interfaces/course.interface";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { CoursesPageComponent } from "src/page-component";
import { AppService } from "src/services/app.service";

const Courses = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={
        `UTech | ${t("course_page_title", { ns: "seo" })}` ||
        "UTech | All Courses"
      }
      metaDescription={
        `UTech | ${t("course_page_description", { ns: "seo" })}` ||
        "All courses in UTech platform just learn and relax"
      }
    >
      <CoursesPageComponent />
    </Seo>
  );
};

export default withLayout(Courses);

export const getServerSideProps: GetServerSideProps<MainPageProps> = async ({
  req,
}) => {
  const courses = await AppService.getCourses(req.cookies.i18next);

  return {
    props: { courses },
  };
};

interface MainPageProps {
  courses: CourseType[];
}
