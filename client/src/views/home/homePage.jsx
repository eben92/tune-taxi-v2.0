import useAuth from "../../useAuth";
import NavIcons from "../../components/icons/navIcons";
const HomePage = ({ code }) => {
  const acccessToken = useAuth(code);
  return (
    <div>
      <NavIcons />
    </div>
  );
};

export default HomePage;
