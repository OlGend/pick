"use client";
import { useState, useEffect } from "react";
import LoaderButton from "@/components/subscribe/LoaderButton";
import { X } from "phosphor-react";
import { useTranslation } from "react-i18next";
import SliderExample from "./SliderExample";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const { t } = useTranslation();
  const [countUsers, setCountUsers] = useState(250000);

  useEffect(() => {
    const currentTimeNow = Date.now();
    const targetTimestamp = new Date("2023-09-04T19:00:00").getTime();
    const timeDifference = currentTimeNow - targetTimestamp;
    const users = timeDifference / 600000;
    const roundedNumber = Math.round(users);

    console.log(roundedNumber);
    // Обновление countUsers на основе roundedNumber
    setCountUsers((prevCount) => prevCount + roundedNumber);

    // Остальная логика...
  }, []);

  const handleSubscribe = () => {
    setError(""); // Сброс ошибки перед проверкой
    setLoading(true);

    // Simulate a loading delay of 2 seconds
    setTimeout(() => {
      setLoading(false);
      if (!email) {
        setError(t("subscribe.error1"));
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setError(t("subscribe.error2"));
      } else {
        console.log("after", email);
        // _cio.identify({
        //   id: email,
        //   email: email,
        // });
        console.log("before", email);

        setEmail("");
        setPopupText(t("subscribe.congrats"));
        setPopupVisible(true);
        setCountUsers((prevCount) => prevCount + 1);
      }
    }, 1000);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleInputFocus = () => {
    setError(""); // Сброс ошибки при фокусировке на инпуте
  };

  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setError("");
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full subscribe-block">
      <div className={`w-full flex relative ${error ? "error" : ""}`}>
        <input
          className={`subscribe ${error ? "error" : ""}`}
          type="email"
          placeholder={t("subscribe.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleInputFocus}
        />
        <button
          className="button-subscribe flex justify-center items-center"
          onClick={handleSubscribe}
        >
          {loading ? <LoaderButton /> : t("subscribe.button")}
        </button>
        {error && (
          <span className="text-red-500 absolute error-text">{error}</span>
        )}
      </div>
      <span className="flex mt-5">
        <br />{" "}
        <b onClick={toggleSlider} className="list-examples">
          {t("subscribe.link")}
        </b>{" "}
        {t("subscribe.text")}
      </span>
      <strong className="countUsers text-lime-400">{countUsers}</strong>
      <span> {t("subscribe.players")}</span>
      {popupVisible && (
        <div
          className="overlay-popup flex justify-center items-center"
          onClick={closePopup}
        >
          <div
            className="popup-content flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="close absolute" onClick={closePopup}>
              <X color="#fff" size={24} />
            </div>
            <p className="text-green-500 mb-0 popupText text-center">
              {popupText}
            </p>
          </div>
        </div>
      )}
      {sliderVisible && (
        <div className="overlay-popup flex justify-center items-center">
          <div
            className="close-slider cursor-pointer absolute"
            onClick={() => setSliderVisible(false)}
          >
            <X color="#fff" size={48} />
          </div>
          <SliderExample />
        </div>
      )}
    </div>
  );
};

export default Subscribe;
