import Header from "./components/Header";
import Hero from "./components/Hero";
import Mint from "./components/Mint";
import SocialHero from "./components/SocialHero";
import Artwork from "./components/Artwork";
import Story from "./components/Story";
import FeaturedApes from "./components/FeaturedApes";
import Roadmap from "./components/Roadmap";

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
    </div>
  );
}

export default App;
