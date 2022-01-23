import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const images = [
    "/img/feature0.jpg",
    "/img/feature2.jpg",
    "/img/feature3.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setSlideNumber(slideNumber !== 0 ? slideNumber - 1 : 2); // false: go to last image
    }
    if (direction === "r") {
      setSlideNumber(slideNumber !== 2 ? slideNumber + 1 : 0); // false: go to first image
    }
  };

  console.log(slideNumber);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slideNumber}vw)` }}
      >
        {images.map((img, idx) => (
          <div className={styles.imgContainer} key={idx}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
