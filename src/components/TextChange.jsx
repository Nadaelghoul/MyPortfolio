import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = [ "Hi, I'm Nada", "Backend Developer", "MERN Stack Developer"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (isForward && endValue >= texts[index].length) {
       setIsForward(false);
      }
      if (!isForward && endValue <= 0) {
      setIsForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
    }
    }, 90);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;