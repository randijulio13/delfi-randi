import { useState } from "react";
import Cover from "./Components/Cover";
import clsx from "clsx";
import Hero from "./Components/Hero";
import Couple from "./Components/Couple";
import CountDown from "./Components/CountDown";
import Place from "./Components/Place";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCover = () => setIsOpen(true);
  const closeCover = () => setIsOpen(false);

  const toggleCover = () => setIsOpen((open) => !open);

  return (
    <div
      className={clsx("content-wrapper", {
        "content-wrapper__open": isOpen,
      })}
    >
      <Cover {...{ toggleCover, openCover, closeCover, isOpen }} />
      <div
        className={clsx("content", {
          content__open: isOpen,
        })}
      >
        <Hero {...{ isOpen }} />
        <Couple />
        <CountDown />
        <Place />
      </div>
    </div>
  );
};

export default App;
