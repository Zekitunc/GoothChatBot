import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const HomeSlider =() => {
    const [sliders,setsliders] = useState([
    ['https://cdn.webrazzi.com/uploads/2024/08/gemini-884.png',"Gemini İle Geliştirdiğimiz Projemize Hoşgeldiniz."],
     ['https://foundern.com/wp-content/uploads/2025/02/FounderN-Web-Gorsel-Ekip-325.png',"Bu Proje Hackhatona özel yapılmıştır."],
     ['https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp',"Yapay Zekaya bir de bizimle birlikte bakın"]
    ]);
    
  return (
    <Carousel>
        {sliders.map((sliderUrl) =>
        <Carousel.Item>
        <img 
            width={100 + "%"}
            height={900 + "vh"}
            src= {sliderUrl[0]} 
          />
        <Carousel.Caption>
          <h3 >Merhaba</h3>
          <p> {sliderUrl[1]}</p>
        </Carousel.Caption>
      </Carousel.Item>
        
        
    )}
    </Carousel>
  );
}

export default HomeSlider;