import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import s1 from "./assets/s1.jpg";
import s2 from "./assets/s2.jpg";
import s3 from "./assets/s3.jpg";
import s4 from "./assets/s4.jpg";

const CallbackExample = () => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  const style = {
    textAlign: "center",
    margin: "8.0rem 0 1rem 0",
  };

  const properties = {
    autoplay: true,
    indicators: true,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    }
  };

  return (
    <div>
      <div>
        <Fade {...properties}>
          <div style={{...style}}>
            <img src={s4}></img>
          </div>
          <div style={{...style}}>
            <img src={s2}></img>
          </div>
          <div style={{...style}}>
          <img src={s3}></img>
          </div>
          <div style={{...style}}>
          <img src={s1}></img>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CallbackExample;