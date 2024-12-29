import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../Hooks/authHook";

import Swal from "sweetalert2";
import Button from "../../Elements/Button";

import FeatureImage1 from "../../../assets/images/features/AI-image-1.png";
import FeatureImage2 from "../../../assets/images/features/AI-image-2.png";
import FeatureImage3 from "../../../assets/images/features/AI-image-3.png";

const Feature = () => {
  const { Login, isLoggedIn } = useAuth();

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
    <section id="feature" className="bg-altprimaryColor py-20">
      <div className="container mx-auto px-6 text-fontPrimaryColor">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.8 } }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-accentColor2 text-4xl font-bold md:text-6xl">Our Features</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Discover the amazing features that DyahAI offers to transform your visuals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.8 } }}
            viewport={{ once: true, amount: 0.8 }}
            className="bg-secondaryColor p-6 rounded-lg text-center"
          >
            <img src={FeatureImage1} alt="Feature 1" className="mx-auto mb-6 w-3/4 rounded-lg" />
            <h2 className="text-accentColor2 text-2xl font-bold mb-4">High-Resolution Images</h2>
            <p className="text-fontPrimaryColor text-base md:text-lg">
              Generate stunning high-resolution images that are perfect for any use case.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.8 } }}
            viewport={{ once: true, amount: 0.8 }}
            className="bg-secondaryColor p-6 rounded-lg text-center"
          >
            <img src={FeatureImage2} alt="Feature 2" className="mx-auto mb-6 w-3/4 rounded-lg" />
            <h2 className="text-accentColor2 text-2xl font-bold mb-4">Customizable Art Styles</h2>
            <p className="text-fontPrimaryColor text-base md:text-lg">
              Choose from a variety of art styles to create unique and personalized images.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.8 } }}
            viewport={{ once: true, amount: 0.8 }}
            className="bg-secondaryColor p-6 rounded-lg text-center"
          >
            <img src={FeatureImage3} alt="Feature 3" className="mx-auto mb-6 w-3/4 rounded-lg" />
            <h2 className="text-accentColor2 text-2xl font-bold mb-4">Easy to Use</h2>
            <p className="text-fontPrimaryColor text-base md:text-lg">
              Our user-friendly interface makes it easy for anyone to create amazing images.
            </p>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <Button onClick={handleGenerateClick} variant="primary">
            Try it now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
