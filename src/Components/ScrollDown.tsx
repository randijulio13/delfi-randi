import scroll from "../assets/lottie/scroll.json";
import Lottie from "react-lottie";

const ScrollDown = ({ ...props }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scroll,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} {...props} />;
};

export default ScrollDown;
