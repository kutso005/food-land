import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import views from "../assets/image/cartina.png";
import views2 from "../assets/image/image1.png";
import views3 from "../assets/image/image3.png";
import views4 from "../assets/image/image4.png";


export default function Views() {
  const categories = [
    {
      title: "Шоколад и какао продукты",
      image: views,
    },
    {
      title: "Молочная продукция",
      image: views2,
    },
    {
      title: "Ингредиенты",
      image: views3,
    },
    {
      title: "Покрытия и наполнители",
      image: views4,
    },
  ];

  return (
    <div id="views">
      <div className="container">
        <div className="views">
          <h1 className="views-title">
            Просмотр товаров по <span>категориям</span>
          </h1>
        </div>
        <div className="views-grid">
          {categories.map((category, index) => (
            <div className="views-img" key={index}>
              <img
                className="views-img-bg"
                src={category.image}
                alt={category.title}
              />
              <div className="views-img-text">
                <h3>{category.title}</h3>
                <button className="button">
                  Подробнее
                  <div className="arrow">
                    <GoArrowUpRight size={20} color="#fff" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
