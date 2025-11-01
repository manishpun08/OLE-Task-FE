import BlogList from "./(home)/partials/BlogList";
import HomeHero from "./(home)/partials/HomeHero";
import WhatWeDo from "./(home)/partials/WhatWeDo";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <BlogList />
    </>
  );
};

export default HomePage;
