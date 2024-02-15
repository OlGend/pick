import Styles from "./Card.module.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
// import Button from "./Button";

function Card({ imagen, link, bonus }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const [newUrl, setNewUrl] = useState("");
  // Чтение сохраненной ссылки из локального хранилища
  useEffect(() => {
    const savedUrl = localStorage.getItem("savedUrl");

    // Установка новой ссылки в состояние
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, []);
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Image width={300} height={150} loading="lazy" src={imagen} alt={bonus} />

      {/* <h2>Title</h2> */}

      <div
        dangerouslySetInnerHTML={{
          __html: bonus,
        }}
      />
      <div className={Styles.btnn}>
        <a
          className="btn btn-primary"
          href={`https://link.reg2dep1.com/${link}/${newUrl}`}
          target="_blank"
        >
          Play bow
        </a>
        {/* <Button text="Demo" />
        <Button text="Code" /> */}
      </div>
    </animated.div>
  );
}

export default Card;
