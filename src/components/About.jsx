import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bullets = [
    t("about.bullet1"),
    t("about.bullet2"),
    t("about.bullet3"),
    t("about.bullet4"),
    t("about.bullet5"),
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
            {t("about.headline")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t("about.text")}
              </p>

              <ul className="space-y-3">
                {bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary-light text-2xl mr-3">✓</span>
                    <span className="text-gray-700">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
                alt="Urban greenery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
