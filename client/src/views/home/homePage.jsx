import useAuth from "../../useAuth";

const HomePage = ({ code }) => {
  const acccessToken = useAuth(code);
  return <div>{code}</div>;
};

export default HomePage;
