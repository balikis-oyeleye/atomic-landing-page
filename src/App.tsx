import Banner from "./components/banner";
import Features from "./components/features";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Introduction from "./components/introduction";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="bg-main">
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <Introduction />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
