import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import { useGlobalContext } from "../Context";
import { textos } from "./textosHome";

export default function WelcomeText() {
  const { isPtbr } = useGlobalContext();
  const refAuto = useRef(null);
  useEffect(() => {
    const typed = new Typed(refAuto.current, {
      strings: [isPtbr ? textos.greetingPT : textos.greetingEN],
      typeSpeed: 200,
      startDelay: 1500,
      loop: false,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, [isPtbr]);
  return (
    <WelcomeP>
      <span ref={refAuto}></span>
    </WelcomeP>
  );
}

const WelcomeP = styled.p`
  font-family: "Press Start 2P", monospace !important;
  color: white;
  max-width: 450px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 7rem;
  text-align: center;
  @media (max-width: 655px) {
    bottom: 6rem;
    max-width: 300px;
  }
  span {
    font-size: 1.3rem;
    @media (max-width: 655px) {
      font-size: 1rem;
    }
  }
`;
