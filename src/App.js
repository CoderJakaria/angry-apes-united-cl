import Header from "./components/Header";
import Hero from "./components/Hero";
import Mint from "./components/Mint";
import SocialHero from "./components/SocialHero";
import Artwork from "./components/Artwork";
import Story from "./components/Story";
import FeaturedApes from "./components/FeaturedApes";
import Roadmap from "./components/Roadmap";
import Jungle from "./components/Jungle";
import More from "./components/More";
import Team from "./components/Team";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#0d0d0d] overflow-hidden">
      <Header />
      <Hero />
      <SocialHero />
      <Mint />
      <Artwork />
      <Story />
      <FeaturedApes />
      <Roadmap />
      {/* <Jungle /> */}
      <More />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
