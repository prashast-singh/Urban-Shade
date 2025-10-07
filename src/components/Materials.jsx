import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const Materials = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="materials"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.85), rgba(46, 125, 50, 0.85)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("materials.headline")}
          </h2>
          <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            {t("materials.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Materials;
