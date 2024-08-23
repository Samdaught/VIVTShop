import React from 'react';
import '../css/Photosets.css';

function Photosets() {
  return (
    <div>
      <h2>Наши фотосессии</h2>
      <section className="animated-grid">
        <div className="photoset-card" style={{ '--i': 1, '--g': 'a' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/slider/new-collection.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 2, '--g': 'b' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/white-and-black/5.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 3, '--g': 'c' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/autumn/3.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 4, '--g': 'd' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/day-in-nature/7.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 5, '--g': 'e' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/autumn/6.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 6, '--g': 'f' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/day-in-nature/4.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 7, '--g': 'g' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/summer-in-city/2.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 8, '--g': 'h' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/summer-in-city/3.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 9, '--g': 'i' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/miracle-will-happen/6.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 10, '--g': 'j' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/miracle-will-happen/2.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 11, '--g': 'k' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/student-everyday-life/3.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 12, '--g': 'l' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/stylish-start/3.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
        <div className="photoset-card" style={{ '--i': 13, '--g': 'z' }}>
          <img
            src="https://vivt.ru/images/vivt-shop/stylish-start/6.jpg"
            alt="Фотография с фотосессии мерча"
          />
        </div>
      </section>
    </div>
  );
}

export default Photosets;
