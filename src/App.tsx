import Banner from "./components/banner";
import FAQs from "./components/faqs";
import Features from "./components/features";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Introduction from "./components/introduction";
import Metrics from "./components/metrics";
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
        <Metrics />
        <FAQs />
      </main>
    </div>
  );
}

export default App;
