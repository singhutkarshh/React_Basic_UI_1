import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar.js";
import Reviews from "./reviews/reviews.js";
import Accordian from "./accordian/accordian.js";
import Menu from "./Menu/menu.js";
import Experience from "./Experience/experience.js";
import Reviews_Slider from "./reviews(2.0)Slider/review";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <section>
        <Reviews />
        <Experience />
        <Menu />
        <Accordian />
        <Reviews_Slider />
      </section>
    </>
  );
}

export default App;
