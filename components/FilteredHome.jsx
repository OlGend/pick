"use client"
import React, { useState } from 'react';
import RecommendedBrands from "./RecommendedBrands";
import AllBrands from "./AllBrands";
import NewlyBrands from "./NewlyBrands";
import CryptoBrands from "./CryptoBrands";



const FilteredHome = () => {
  const [currentTab, setCurrentTab] = useState(1); // Изначально выбран первый таб

  // Функция для обновления текущего таба
  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  return (
    <div className='main__container filter-brands'>
      <div className='flex'>
        {/* Добавляем класс "active" к кнопке, если она соответствует текущему табу */}
        <button
          className={`flex justify-center items-center p-4 border text-lg button-tab ${currentTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabChange(1)}
        >
          All Brands
        </button>
        {/* Добавляем класс "active" к кнопке, если она соответствует текущему табу */}
        <button
          className={`flex justify-center items-center p-4 border text-lg button-tab ${currentTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabChange(2)}
        >
          Recommended Brands
        </button>
          {/* Добавляем класс "active" к кнопке, если она соответствует текущему табу */}
          <button
          className={`flex justify-center items-center p-4 border text-lg button-tab ${currentTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabChange(3)}
        >
          Newly Brands
        </button>
          {/* Добавляем класс "active" к кнопке, если она соответствует текущему табу */}
          <button
          className={`flex justify-center items-center p-4 border text-lg button-tab ${currentTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabChange(4)}
        >
          CryptoBrands
        </button>
      </div>

      <div>
        {/* Отображение компонентов в зависимости от выбранного таба */}
        {currentTab === 1 && <AllBrands />}
        {currentTab === 2 && <RecommendedBrands />}
        {currentTab === 3 && <NewlyBrands />}
        {currentTab === 4 && <CryptoBrands />}

      </div>
    </div>
  );
};

export default FilteredHome;
