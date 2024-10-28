import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-main pt-8">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
