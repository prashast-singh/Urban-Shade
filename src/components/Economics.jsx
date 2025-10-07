import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const Economics = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
            {t("economics.headline")}
          </h2>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-primary/10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              {t("economics.text")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Economics;
