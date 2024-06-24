import React, { useState, useEffect } from "react";
import "./Work.css";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Work = () => {
  const [num1, showNum1] = useState(0);
  const [num2, showNum2] = useState(0);
  const [num3, showNum3] = useState(0);

  const handleNum = () => {
    showNum1(Math.floor(Math.random() * 9));
    showNum2(Math.floor(Math.random() * 9));
    showNum3(Math.floor(Math.random() * 9));
    if (num1 == num2 && num2 == num3) {
      return handleGame();
    }
  };
  const [game, setGame] = useState(false);

  const handleGame = () => {
    setGame(!game);
  };
  return (
    <div className="Work">
      <div id="text_area">
        <p>
          I am a <b>Full Stack</b> web developer. I have experience in using
          various web frameworks and tools in building different projects. Talk
          of responsive and dynamic web sites, I am your best option. Are you
          looking for someone who will work with you to get the best app or
          project just as you picture it? I suggest you try me. I bring
          diversity in the creation of web apps through judicious use of the
          tools at my disposal. I create all forms of
          sites(news,blog,e-commerce,personal,company,logs,etc). Contact me and
          lets work together.
        </p>
      </div>
      <div id="game_area">
        <h2>GAME</h2>
        {game ? (
          <div id="field">
            <div id="field1">{num1}</div>
            <div id="field2">{num2}</div>
            <div id="field3">{num3}</div>
          </div>
        ) : (
          <div>
            <h1>Congrats</h1>
            <Confetti id="conf" />
          </div>
        )}

        <button onClick={handleNum}>PLAY</button>
        <p>Get the same number in all three boxes to win</p>
      </div>
    </div>
  );
};

export default Work;
