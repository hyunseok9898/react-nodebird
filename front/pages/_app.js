// pages/_app.js
import Head from "next/head";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";
import { Global } from "../components/ImagesZoom/styles";

const NodeBird = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
