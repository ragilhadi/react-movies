import React from 'react';
import TopNav from './components/header/TopNav';
import ImageSlide from './components/imageSlider/ImageSlide';
import ItemCard from './components/itemCard/ItemCard';

function App() {
  return (
    <div className="App">
      <TopNav />
      <ImageSlide />
      <ItemCard />
    </div>
  );
}

export default App;
