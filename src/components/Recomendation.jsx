import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import recomendation from "../assets/image/image3.png";

export default function Recomendation() {
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleCount = (value) => {
    setCount(count + value);
  };

  const data = [
    {
      id: 1,
      img: recomendation,
      title: "Форма для выпечки круглая 26см",
      weight: "Вес : 120 кг",
      price: 450,
      count: 1,
    },
    {
      id: 2,
      img: recomendation,
      title: "Миксер планетарный 5л VIATTO VM-5",
      weight: "Вес : 200 кг",
      price: 750,
      count: 1,
    },
    {
      id: 3,
      img: recomendation,
      title: "Венчик для взбивания 30см",
      weight: "Вес : 80 кг",
      price: 320,
      count: 1,
    },
    {
      id: 4,
      img: recomendation,
      title: "Скалка кондитерская 45см",
      weight: "Вес : 100 кг",
      price: 280,
      count: 1,
    },
    {
      id: 5,
      img: recomendation,
      title: "Термометр кондитерский цифровой",
      weight: "Вес : 50 кг",
      price: 890,
      count: 1,
    },
    {
      id: 6,
      img: recomendation,
      title: "Мешок кондитерский 40см",
      weight: "Вес : 30 кг",
      price: 150,
      count: 1,
    },
    {
      id: 7,
      img: recomendation,
      title: "Форма силиконовая для муссовых тортов",
      weight: "Вес : 90 кг",
      price: 670,
      count: 1,
    },
    {
      id: 8,
      img: recomendation,
      title: "Коврик силиконовый 40х60см",
      weight: "Вес : 110 кг",
      price: 420,
      count: 1,
    },
    {
      id: 1,
      img: recomendation,
      title: "Форма для выпечки круглая 26см",
      weight: "Вес : 120 кг",
      price: 450,
      count: 1,
    },
    {
      id: 2,
      img: recomendation,
      title: "Миксер планетарный 5л VIATTO VM-5",
      weight: "Вес : 200 кг",
      price: 750,
      count: 1,
    },
    {
      id: 3,
      img: recomendation,
      title: "Венчик для взбивания 30см",
      weight: "Вес : 80 кг",
      price: 320,
      count: 1,
    },
    {
      id: 4,
      img: recomendation,
      title: "Скалка кондитерская 45см",
      weight: "Вес : 100 кг",
      price: 280,
      count: 1,
    },
    {
      id: 5,
      img: recomendation,
      title: "Термометр кондитерский цифровой",
      weight: "Вес : 50 кг",
      price: 890,
      count: 1,
    },
    {
      id: 6,
      img: recomendation,
      title: "Мешок кондитерский 40см",
      weight: "Вес : 30 кг",
      price: 150,
      count: 1,
    },
    {
      id: 7,
      img: recomendation,
      title: "Форма силиконовая для муссовых тортов",
      weight: "Вес : 90 кг",
      price: 670,
      count: 1,
    },
    {
      id: 8,
      img: recomendation,
      title: "Коврик силиконовый 40х60см",
      weight: "Вес : 110 кг",
      price: 420,
      count: 1,
    },


 
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-button ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div id="recomendation">
      <div className="container">
        <div className="recomendation">
          <div>
            <p className="recomendation-p">Вам могут понравится</p>
            <h1 className="recomendation-h1">Рекомендуемые товары</h1>
          </div>
          <button className="button none">
            Все товары{" "}
            <div className="arrow">
              <GoArrowUpRight size={20} color="#fff" />
            </div>
          </button>
        </div>
        <div className="recomendation-cards">
          {currentItems.map((item) => (
            <div className="recomendation-card" key={item.id}>
              <div>
                <img className="recomendation-card-img" src={item.img} alt="" />
                <p className="recomendation-card-text">{item.title}</p>
                <p className="recomendation-card-p">{item.weight}</p>
              </div>
              <div className="recomendation-card-price">
                <p className="recomendation-card-price-p">{item.price} c</p>
                <div className="recomendation-card-price-count">
                  <button
                    className="recomendation-card-price-count-button"
                    onClick={() => handleCount(-1)}
                    disabled={item.count === 1}
                  >
                    -
                  </button>
                  <p>{item.count}</p>
                  <button
                    className="recomendation-card-price-count-button"
                    onClick={() => handleCount(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="button">
                В корзину
                <div className="arrow">
                  <GoArrowUpRight size={20} color="#fff" />
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            className="pagination-arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </button>
          {renderPaginationButtons()}
          <button
            className="pagination-arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <button className="button none">
            Все товары{" "}
            <div className="arrow">
              <GoArrowUpRight size={20} color="#fff" />
            </div>
          </button>
      </div>
    </div>
  );
}
