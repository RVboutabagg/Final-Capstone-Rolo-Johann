import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Food from "./Components/Food";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to my website!</h2>
        <Food />
        </main>
        <Footer />
        </div>
  );
}

export default App;