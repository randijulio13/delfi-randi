import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import imgCouple from "../assets/img/couple.jpg";
import imgFlower from "../assets/img/flower.png";
import { useEffect } from "react";
// import ScrollDown from "./ScrollDown";
// import Reveal from "./Reveal";

const Hero = ({ isOpen }: { isOpen: Boolean }) => {
  const heroControl = useAnimation();

  useEffect(() => {
    if (isOpen) {
      heroControl.start("visible");
    }
  }, [isOpen]);

  return (
    <section className={clsx("hero")}>
      <div className="hero-title">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          initial="hidden"
          animate={heroControl}
        >
          Wedding Invitation
        </motion.span>
        <motion.h1
          variants={{
            hidden: { opacity: 0, scale: 1.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
          }}
          initial="hidden"
          animate={heroControl}
          className="couple-name"
        >
          Delfi & Randi
        </motion.h1>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          initial="hidden"
          animate={heroControl}
          className="date-info"
        >
          20<sup>th</sup> October 2024
        </motion.span>
        {/* <Reveal>
          <ScrollDown height={50} width={50} />
        </Reveal> */}
      </div>
      <div className="hero-couple">
        <motion.img
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
              y: 100,
            },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 1,
          }}
          initial="hidden"
          animate={heroControl}
          src={imgCouple}
          className="img-couple"
        />
      </div>

      <motion.img
        src={imgFlower}
        variants={{
          hidden: {
            opacity: 0,
            scale: 2,
            y: -100,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.5,
        }}
        initial="hidden"
        animate={heroControl}
        className="flower bottom"
      />
    </section>
  );
};

export default Hero;
