import React from "react";
import bg from "../assets/image/image 292.png";
import { GoArrowUpRight } from "react-icons/go";
export default function Section() {
  return (
    <div id="section">
      <img className="bg" src={bg} alt="" />
      <div className="container">
        <div className="section">
          <h1>Ваш путеводитель в области сырья</h1>
          <div className="section-input">
            <input className="input" type="text" placeholder="Найти..." />
            <button className="button nondsdsd">
              Заказать звонок{" "}
              <div className="arrow nonesds">
                <GoArrowUpRight size={20} color="#fff" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
