import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const Vision = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-32 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(129, 199, 132, 0.9), rgba(129, 199, 132, 0.9)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("vision.headline")}
          </h2>
          <p className="text-xl md:text-3xl text-white font-light">
            {t("vision.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
