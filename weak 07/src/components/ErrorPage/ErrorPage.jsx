import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {

  const occuredError = useRouteError();

  return (
    <div className="mt-[15rem] text-center">
      <h1 className="m-10 text-6xl">올바르지 않은 경로입니다.</h1>
      <p className="m-10 text-2xl">Message: {occuredError.statusText || occuredError.message}</p>
      <Link to="/" className="text-4xl underline">메인 페이지로 이동</Link>
    </div>
  );
}

export default ErrorPage;
