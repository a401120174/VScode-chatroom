import React, { useRef, useEffect, useState } from "react";
import styles from "./TextInput.module.scss";
import PropTypes from "prop-types";

const cuteTexts = [
  "σ`∀´)σ",
  "_(:3 」∠ )_",
  "(́◉◞౪◟◉‵)",
  "థ౪థ",
  "(σ′▽‵)′▽‵)σ",
  "｡ﾟヽ(*´∀`)ﾉﾟ｡",
  "(◔౪◔)",
  "(*´∀`)~♥",
  "(*ﾟ∀ﾟ*)",
  "σ`∀´)σ",
  "(`・ω・´)",
  "。･ﾟ･(つд`ﾟ)･ﾟ･"
];

const CuteText = ({ onClick }) => {
  return (
    <div className={styles.cute}>
      {cuteTexts.map((item, idx) => (
        <div
          key={idx}
          onClick={() => {
            onClick(item);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const TextInput = ({ onSubmit, onChangeMsg, onAddCute, value, user }) => {
  const inputEl = useRef(null);
  const submitEl = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isCuteOpen, setCuteOpen] = useState(false);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleFocus = e => {
    setIsTyping(true);
  };

  const handleBlur = e => {
    setIsTyping(false);
  };

  const handleCuteBtnClick = e => {
    setCuteOpen(!isCuteOpen);
  };

  const handleAddCute = cute => {
    setCuteOpen(false);
    inputEl.current.focus();
    onAddCute(cute);
  };
  return (
    <div className={styles.box}>
      <form onSubmit={onSubmit}>
        <label>
          <span className={`${isTyping || !!value ? "" : styles.animation}`}>
            {user || "使用者"} >
          </span>
          <input
            ref={inputEl}
            value={value}
            onChange={onChangeMsg}
            className={styles.textInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <div className={styles.cuteBtn} onClick={handleCuteBtnClick}>
          <span>(ﾟ∀ﾟ) </span>
          {`<`}-用表情符號來表達你的情感吧~
        </div>
        <input
          ref={submitEl}
          type="submit"
          value="送出"
          className={styles.submit}
        />
        {isCuteOpen && <CuteText onClick={handleAddCute} />}
      </form>
    </div>
  );
};

TextInput.propTypes = {
  user: PropTypes.string,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeMsg: PropTypes.func,
  onAddCute: PropTypes.func
};

export default TextInput;
