import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const Sustainability = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      title: t("sustainability.pipesTitle"),
      description: t("sustainability.pipes"),
      icon: "🔧",
    },
    {
      title: t("sustainability.netsTitle"),
      description: t("sustainability.nets"),
      icon: "🌊",
    },
    {
      title: t("sustainability.potsTitle"),
      description: t("sustainability.pots"),
      icon: "🪴",
    },
    {
      title: t("sustainability.foundationTitle"),
      description: t("sustainability.foundation"),
      icon: "🏗️",
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
            {t("sustainability.headline")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary/5 to-primary-light/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;
