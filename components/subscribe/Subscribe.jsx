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


  const handleSubscribe = () => {
    setError(""); // Сброс ошибки перед проверкой
    setLoading(true);

    

    // Simulate a loading delay of 2 seconds
    setTimeout(() => {
      setLoading(false);
      if (!email) {
        setError("Email cannot be empty");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Please enter a valid email");
      } else {
        setEmail("");
        setPopupText(
          "Congratulations! You have subscribed to the mailing list."
        );
        setPopupVisible(true);
      }
    }, 2000);
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleInputFocus}
        />
        <button
          className="button-subscribe flex justify-center items-center"
          onClick={handleSubscribe}
        >
          {loading ? <LoaderButton /> : "Subscribe"}
        </button>
        {error && (
          <span className="text-red-500 absolute error-text">{error}</span>
        )}
      </div>
      <span className="flex mt-5">
      {t("subscribe.text")} <br/> <b onClick={toggleSlider} className="list-examples">{t("subscribe.link")}</b>
      .</span>
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
          <div className="close-slider cursor-pointer absolute" onClick={() => setSliderVisible(false)}>
            <X color="#fff" size={48} />
          </div>
          <SliderExample />
        </div>
      )}
    </div>
  );
};

export default Subscribe;
