import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <style>
          {` body {
  background-image: url("../../public/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}`}
        </style>
      </Helmet>
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
