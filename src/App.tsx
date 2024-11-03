import Banner from "./components/banner";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-main">
      <Navbar />
      <main>
        <Hero />
        <Banner />
      </main>
    </div>
  );
}

export default App;
