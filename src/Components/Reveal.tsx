import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  all?: Boolean;
}

const Reveal = ({ children, all }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: all ? "all" : "some" });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          scale: 2,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      initial="hidden"
      animate={control}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
