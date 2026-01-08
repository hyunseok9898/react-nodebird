function Error({ statusCode }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>{statusCode || 500} Error</h1>
      <p>문제가 발생했습니다.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
