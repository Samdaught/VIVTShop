import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { CartContext } from '../context/CartContext';

function ClothingPage({ showNotification }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const allProducts = [
    {
      id: 1,
      name: 'Футболка',
      category: 't-shirt',
      price: 900,
      image: 'https://vivt.ru/images/shop/photos/1696845460_Ew4018.jpg',
      description:
        'Любовь с первой носки. Базовая, стильная и удобная. Унисекс\nЦвет: чёрный\nМатериал: 100% хлопок\nРазмеры: S-XL',
      images: [
        'https://vivt.ru/images/shop/photos/1696845303_mbWqOj.jpg',
        'https://vivt.ru/images/shop/photos/1696845320_3agQHu.jpg',
        'https://vivt.ru/images/shop/photos/1696845346_Bjlxb8.jpg',
        'https://vivt.ru/images/shop/photos/1696845460_Ew4018.jpg',
      ],
    },
    {
      id: 2,
      name: 'Свитшот "Твой цифровой"',
      category: 'hoodie',
      price: 1200,
      image: 'https://vivt.ru/images/shop/photos/1696846837_rATacR.jpg',
      description:
        'Вещь, без которой сложно представить современный гардероб. Мягкий наощупь и приятный в носке, универсальный и практичный – всё это наш свитшот. Ты точно не вылезешь из него, ведь он сочетается и с брюками, и с джинсами, и со спортивными штанами.\nЦвет: темно-синий\nМатериал: хлопок 100%\nРазмеры: S и M\nРекомендуемый уход: перед стиркой выверните свитшот на изнанку и постирайте его на деликатном режиме при 40 градусах.',
      images: [
        'https://vivt.ru/images/shop/photos/1696846577_w8MTWn.jpg',
        'https://vivt.ru/images/shop/photos/1696846837_rATacR.jpg',
      ],
    },
    {
      id: 3,
      name: 'Жилет',
      category: 'jilet',
      price: 3000,
      image: 'https://vivt.ru/images/shop/photos/1696846529_RlAUMN.jpg',
      description:
        'Утепленная стильная жилетка ВИВТ, чтобы не замерзнуть ни в какой ситуации!\nМодель: унисекс\nЦвет: черный\nРазмеры: 46-50',
      images: [
        'https://vivt.ru/images/shop/photos/1696846529_RlAUMN.jpg',
        'https://vivt.ru/images/shop/photos/1696845532_QdnqMM.jpg',
        'https://vivt.ru/images/shop/photos/1696845542_78sjjK.jpg',
        'https://vivt.ru/images/shop/photos/1696845606_N5bZxP.jpg',
      ],
    },
    {
      id: 4,
      name: 'Футболка с принтом',
      category: 't-shirt',
      price: 800,
      image: 'https://vivt.ru/images/shop/photos/1612269293_XdWJZd.jpg',
      description:
        'Белая футболка с круглым вырезом и контрастным принтом\nМатериал: 92% хлопок, 8% лайкра.\nРазмеры: XS и S\nМужская/Женская\nРекомендуемый уход: перед стиркой выверните футболку на изнанку, стирать рекомендуется на деликатном режиме при 40 градусах.',
      images: [
        'https://vivt.ru/images/shop/photos/1612269293_XdWJZd.jpg',
        'https://vivt.ru/images/shop/photos/1550740534_35TgG2.jpg',
      ],
    },
  ];

  const [filteredCategory, setFilteredCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProducts =
    filteredCategory === 'all'
      ? allProducts
      : allProducts.filter((product) => product.category === filteredCategory);

  const sortedProducts = filteredProducts.sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Одежда</h1>
      <div className="sorted-button">
        <button onClick={() => setFilteredCategory('all')}>Все</button>
        <button onClick={() => setFilteredCategory('t-shirt')}>Футболки</button>
        <button onClick={() => setFilteredCategory('hoodie')}>Толстовки</button>
        <button onClick={() => setFilteredCategory('jilet')}>Жилеты</button>
      </div>
      <div className="sorted-button">
        <button onClick={() => setSortOrder('asc')}>Сортировка: Цена (по возрастанию)</button>
        <button onClick={() => setSortOrder('desc')}>Сортировка: Цена (по убыванию)</button>
      </div>
      <div className="products">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onShowDetails={handleShowDetails}
            showNotification={showNotification}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        addToCart={(product) => {
          addToCart(product);
          handleCloseModal();
          showNotification(`${product.name} добавлен в корзину`);
        }}
      />
    </div>
  );
}

export default ClothingPage;
