import Navbar from "../Components/Fragments/Navbar";
import Hero from "../Components/Fragments/SectionHomePage/Hero";
import Feature from "../Components/Fragments/SectionHomePage/Feature";
import Advantages from "../Components/Fragments/SectionHomePage/Advantages";
import Gallery from "../Components/Fragments/SectionHomePage/Gallery";
import About from "../Components/Fragments/SectionHomePage/About";
import Footer from "../Components/Fragments/SectionHomePage/Footer";

const HomePage = () => {
  return (
    <>
      <div className="font-Poppins flex h-full w-full flex-col justify-center  bg-black">
        <Navbar navbarStyle="primary" />
        <Hero />
        <Feature />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
