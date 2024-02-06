"use client";
import React, { useState, useEffect } from "react";
import { X } from "phosphor-react";
import Link from "next/link";

import Image from "next/image";


const BannerWindow = () => {
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const setRandomBrandAndShowModal = () => {
    setShowModal(true);
    setIsActive(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsActive(false);
    localStorage.setItem("lastClosedTime", Date.now().toString());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastClosedTime = Number(
        localStorage.getItem("lastClosedTime") || 0
      );
      if (Date.now() - lastClosedTime > 600000) {
        setRandomBrandAndShowModal();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastClosedTime = Number(
        localStorage.getItem("lastClosedTime") || 0
      );
      if (Date.now() - lastClosedTime > 600000) {
        setRandomBrandAndShowModal();
      }
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  return (
    showModal && (
      <div className={`modal-overlay right-banner ${isActive ? "active" : ""}`}>
        <Link
     
          href="https:/link.reg2dep1.com/gen_vavada_reg2dep"
        >
          <Image
            src="/mercedes4.png"
            width={480}
            height={209}
            alt="vavada"
            loading="lazy"
          />
        </Link>
        <button className="absolute top-3 right-3" onClick={closeModal}>
          <X size={20} color="#fff" />
        </button>
      </div>
    )
  );
};

export default BannerWindow;
