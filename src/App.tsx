import { useEffect, useState } from "react";
import { Navbar } from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shares/type";
import { Home } from "@/scenes/home/Home";
import { Card } from "./scenes/card/Card";
import { Guests } from "./scenes/guests/Guests";
import { ContactUs } from "./scenes/contact/Contact";
import Footer from "./scenes/footer/Footer";


function App() {
  const [fetchError, setFetchError] = useState<null | string>(null);

  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopPage(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", scrollPage);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollPage);
    };
  }, []); // Empty dependency array means this effect will only run once after the initial render

  
  return (
    <div className="app ">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Card
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
      / >
        <Guests
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
          <ContactUs />
          <Footer />
    </div>
  );
}

export default App;
