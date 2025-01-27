import React from "react";
import about from "../assets/image/abouts.png";
import { GoArrowUpRight } from "react-icons/go";
export default function About() {
  return (
    <div className="container">
      <div className="about">
        <h1 className="about-title">
          Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои
          самые смелые кулинарные задумки
        </h1>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <p>
            Мы предлагаем вам не росто сырье, а экспертность и индивидуальный
            подход: всегда готовы помочь найти альтернативу, закрыть срочную
            потребность или предложить уникальное решение.
          </p>
        </div>
        <div className="about-card-img">
            <img src={about} alt="" />
            <button className="button abs">
            Читать далее
              <div className="arrow">
                <GoArrowUpRight size={20} color="#fff" />
              </div>
            </button>
        </div>
      </div>
    </div>
  );
}
