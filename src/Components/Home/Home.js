import React from "react";
import Product from "../Product/Product";
import "./Home_Style/Home.css";
import Slide1 from "../../images/ImageHome/shipping.jpg";
import Xbox from "../../images/ImageProduct/xbox.jpg";
import MKeyboard from "../../images/ImageProduct/mkeyboard.jpg";
import Mouse from "../../images/ImageProduct/mouse.jpg";
import Cardigan from "../../images/ImageProduct/cardigan.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Slide1} />
      </div>
      <div className="home_cards">
        <Product
          id="1"
          title="Logitech G 512 Gaming Mouse with GX (Carbon)"
          thumbnail={Mouse}
          price={2000.0}
          rating={4}
        />
        <Product
          id="2"
          title="Logitech G 512 RGB Backlit Mechanical Gaming Keyboard with GX Blue Clicky Key Switches (Carbon)"
          thumbnail={MKeyboard}
          price={9995.0}
          rating={4}
        />
      </div>
      <div className="home_cards">
        <Product
          id="3"
          title="Denimholic Men's Solid Cardigan"
          thumbnail={Cardigan}
          price={499.0}
          rating={3}
        />
        <Product
          id="4"
          title="Logitech G 512 Gaming Mouse with GX Pro (Carbon)"
          thumbnail={Mouse}
          price={899.0}
          rating={4}
        />
        <Product
          id="5"
          title="Logitech G 512 Gaming Mouse with GX Ultra Pro (Carbon)"
          price={999.0}
          thumbnail={Mouse}
          rating={4}
        />
      </div>
      <div className="home_cards">
        <Product
          id="8"
          title="Xbox One X Cyberpunk 2077 Limited Edition Bundle (1TB)"
          thumbnail={Xbox}
          price={43141.0}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
