import "./App.css";
import Contact from "./ContactForm/contact";
import Content from "./Content/content";
import Footer from "./Footer/footer";
import Gallery from "./Gallery/gallery";

function App() {
  return (
    <div className="App">
      <Content></Content>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
