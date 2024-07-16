import Lottie from "react-lottie";
import MobileDeveloper from "../assets/animations/mobiledeveloper.json";
import WebDeveloper from "../assets/animations/webdeveloper.json";
import Developer from "../assets/animations/developer.json";

const LottieAnimationWeb = () => {
  return <Lottie options={lottieAnimationWeb} />;
};

const LottieAnimationMobile = () => {
  return <Lottie options={lottieAnimationMobile} />;
};

const LottieAnimationDeveloper = () => {
  return <Lottie options={lottieAnimationDeveloper} />;
};

const lottieAnimationWeb = {
  loop: true,
  autoplay: true,
  animationData: WebDeveloper,
};

const lottieAnimationMobile = {
  loop: true,
  autoplay: true,
  animationData: MobileDeveloper,
};

const lottieAnimationDeveloper = {
  loop: true,
  autoplay: true,
  animationData: Developer,
};

export { LottieAnimationMobile, LottieAnimationWeb, LottieAnimationDeveloper };
