import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useActions } from "src/hooks/useActions";
import { withLayout } from "src/layouts/layout";
import { SuccessPageComponent } from "src/page-component";

const SuccessPage = () => {
  const { clearCart } = useActions();
  useEffect(() => {
    clearCart();
  }, []);
  return <SuccessPageComponent />;
};

export default withLayout(SuccessPage);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // if (!query.payment_intent && !query.payment_intent_client_secret && !query.redirect_status) {
  // 	return {
  // 		redirect: {
  // 			destination: '/',
  // 			permanent: false,
  // 		},
  // 	};
  // }

  return {
    props: {},
  };
};
