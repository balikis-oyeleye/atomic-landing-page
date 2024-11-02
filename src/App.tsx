import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-main">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
