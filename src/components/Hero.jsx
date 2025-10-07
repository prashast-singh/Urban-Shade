import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            {t("hero.headline")}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t("hero.subheadline")}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-full transition-colors duration-300 shadow-lg"
          >
            {t("hero.button")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
