import React from "react";
import { useAuth } from "../../../Hooks/authHook";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

import Swal from "sweetalert2";
import Button from "../../Elements/Button";
import HeroImage from "../../../assets/images/hero/hero-image.png";

const Hero = () => {
  const { isLoggedIn,Login } = useAuth();
  const handleGenerateClick = () => {
    if (isLoggedIn) {
      window.location.href = "/generate";
    } else {
      Swal.fire({
        title: "Please log in",
        text: "You need to log in to access the Generate feature.",
        icon: "warning",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          Login();
        }
      });
    
    }
  };

  return (
    <section className="bg-altprimaryColor flex flex-col items-center justify-center gap-y-10 md:h-screen md:flex-row md:gap-y-0">
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 px-6 md:flex-row md:space-y-0 md:space-x-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-accentColor2 text-4xl font-bold md:text-6xl">
            Welcome to IC-AI
          </h1>
          <p className="text-fontPrimaryColor mt-4 text-lg md:text-2xl">
            Explore the endless possibilities of AI-powered image generation.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:items-start">
            <Button onClick={handleGenerateClick} variant="primary">
              Start Creating
            </Button>
            <Button onClick={() => (window.location.href = "#feature")} variant="secondary">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 md:mt-0"
        >
          <img src={HeroImage} alt="Hero" className="w-full max-w-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
