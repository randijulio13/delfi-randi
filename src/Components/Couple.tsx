import { motion, useInView, useAnimation } from "framer-motion";

import imgBride from "../assets/img/bride2.jpg";
import imgGroom from "../assets/img/groom2.jpg";
import imgFlower from "../assets/img/flower7.png";
import imgFlower2 from "../assets/img/flower6.png";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const Couple = () => {
  const brideControl = useAnimation();
  const groomControl = useAnimation();
  const titleControl = useAnimation();

  const titleRef = useRef(null);
  const brideRef = useRef(null);
  const groomRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, amount: "all" });
  const brideInView = useInView(brideRef, { once: true, amount: "some" });
  const groomInView = useInView(groomRef, { once: true, amount: "some" });

  useEffect(() => {
    if (brideInView) {
      brideControl.start("visible");
    }

    if (groomInView) {
      groomControl.start("visible");
    }

    if (titleInView) {
      titleControl.start("visible");
    }
  }, [brideInView, titleInView, groomInView]);

  return (
    <section className="couple">
      <div className="title-wrapper" ref={titleRef}>
        <motion.h1
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          initial="hidden"
          animate={titleControl}
          className="title"
        >
          بسم الله الرحمن الرحيم
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          initial="hidden"
          animate={titleControl}
        >
          <span className="description">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </span>
          <span className="description">
            With the blessing and mercy from Allah SWT,{" "}
          </span>
          <span className="description">
            We cordially invite you to the wedding of
          </span>
        </motion.p>
      </div>

      <div className="bride" ref={brideRef}>
        <div className="img-container">
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 1.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            initial="hidden"
            animate={brideControl}
            src={imgBride}
            className="img-portrait"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: "-90deg" },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            initial="hidden"
            animate={brideControl}
            src={imgFlower}
            className="img-flower"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            initial="hidden"
            animate={brideControl}
            src={imgFlower2}
            className="img-flower-2"
          />
        </div>
        <div className="info">
          <Reveal all={false}>
            <h1 className="name">Delfi Adenia Viona</h1>
          </Reveal>
          <Reveal all={false}>
            <span className="description">
              Putri Ke-2 dari Bpk. Rizal Nudin & Ibu Octarina
            </span>
          </Reveal>
          <Reveal all={false}>
            <a href="#" className="link">
              <i className="bi bi-instagram"></i> @delfiadeniaviona
            </a>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <h1 className="couple-divider">&</h1>
      </Reveal>

      <div className="groom" ref={groomRef}>
        <div className="img-container">
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 1.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            initial="hidden"
            animate={groomControl}
            src={imgGroom}
            className="img-portrait"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: "-90deg" },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            initial="hidden"
            animate={groomControl}
            src={imgFlower}
            className="img-flower"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            initial="hidden"
            animate={groomControl}
            src={imgFlower2}
            className="img-flower-2"
          />
        </div>
        <div className="info">
          <Reveal all={false}>
            <h1 className="name">Randi Yulio Fajri</h1>
          </Reveal>
          <Reveal all={false}>
            <span className="description">
              Putra Ke-4 dari Bpk. Syamsuir & Ibu Nurhayati
            </span>
          </Reveal>
          <Reveal all={false}>
            <a href="#" className="link">
              <i className="bi bi-instagram"></i> @randijuliofajri
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Couple;
