import clsx from "clsx";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";

// import { useState } from "react";

interface Props {
  openCover?: Function;
  closeCover?: Function;
  toggleCover?: Function;
  isOpen: Boolean;
}

const Cover = ({ isOpen, openCover }: Props) => {
  return (
    <section
      onClick={() => (openCover ? openCover() : null)}
      className={clsx("cover", {
        cover__open: isOpen,
      })}
    >
      <Snowfall />
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: 0.5 }}
        className="title-text"
      >
        <span>Delfi </span>
        <span>& </span>
        <span>Randi</span>
      </motion.h1>
    </section>
  );
};

export default Cover;
