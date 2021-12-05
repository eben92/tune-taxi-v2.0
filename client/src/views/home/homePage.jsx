import useAuth from "../../useAuth";
import NavIcons from "../../components/icons/navIcons";
import HomePageCard from "../../components/cards/homePageCards/HomePageCard";
const HomePage = ({ code }) => {
  const acccessToken = useAuth(code);
  return (
    <div>
      {/* <NavIcons /> */}
      <HomePageCard />
    </div>
  );
};

export default HomePage;
