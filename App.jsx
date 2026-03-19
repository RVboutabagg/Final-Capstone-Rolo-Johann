import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Food from "./Components/Food";

function App() {

  const yourName = "Rolo";
  const currentYear = 2026;

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col items-center justify-center px-6 py-10">

      <Header />

      <Card
        name={yourName}
        title="Sports Photographer"
        blurb="I am originally from Sacramento but moved to Oakland when I was 3. I like to hang out with friends, play video games, play sports, and do sports photography. One fun fact is that I played sports basically my whole life where I started playing football in 2nd grade and played freshman and sophomore year."
        picture="E9F89C17-53C4-4F51-889E-9ACD71B0CAFB_1_102_o.jpg"
      />

      <Food />

      <Footer year={currentYear} />

    </div>

  );

}

export default App;