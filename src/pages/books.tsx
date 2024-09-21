import { GetServerSideProps } from "next";
import { useTranslation } from "react-i18next";
import { BooksType } from "src/interfaces/books.interface";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { BooksPageComponent } from "src/page-component";
import { BooksService } from "src/services/books.service";

const Books = () => {
  const { t } = useTranslation();

  return (
    <Seo
      metaTitle={
        `UTech | ${t("books_page_title", { ns: "seo" })}` || "UTech | Books"
      }
      metaDescription={
        `UTech | ${t("books_page_description", { ns: "seo" })}` ||
        "UTech can advice books for you"
      }
    >
      <BooksPageComponent />
    </Seo>
  );
};

export default withLayout(Books);

export const getServerSideProps: GetServerSideProps<
  BooksPageProps
> = async () => {
  const books = await BooksService.get();

  return {
    props: { books },
  };
};

interface BooksPageProps {
  books: BooksType[];
}
