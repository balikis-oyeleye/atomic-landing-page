import Banner from "./components/banner";
import Features from "./components/features";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-main">
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <Introduction />
        <Features />
      </main>
    </div>
  );
}

export default App;
