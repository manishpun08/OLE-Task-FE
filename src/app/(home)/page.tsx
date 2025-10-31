import GainRealInsights from "./partials/GainRealInsights";
import HomeHero from "./partials/HomeHero";
import StartBuilding from "./partials/StartBuilding";
import TurnFeedbackAction from "./partials/TurnFeedbackAction";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <StartBuilding />
      <GainRealInsights />
      <TurnFeedbackAction />
    </>
  );
};

export default HomePage;
