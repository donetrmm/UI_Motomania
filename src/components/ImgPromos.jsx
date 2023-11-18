import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css'; // Importa la animación OpenAnimation
import AwsAutoplay from 'react-awesome-slider/dist/autoplay';
import '../styles/ImgPromos.css'; // Archivo CSS para estilos personalizados

const AutoplaySlider = AwsAutoplay(AwesomeSlider);

export default function ImgPromos() {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/promociones?page=1&limit=10');
        setPromociones(response.data.promociones);
      } catch (error) {
        console.error('Error al obtener los elementos', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AutoplaySlider
      animation="openAnimation"
      className="slider aws-btn"
      play={true}
      cancelOnInteraction={true}
      interval={5000}
      infinite={true}
      timerHeight={0}
    >
      {promociones.map((promo) => (
        <div key={promo.id}>
          <img
            src={`http://localhost:8081/public/images/${promo.url_imagen_promocion}`}
            alt={`promo-${promo.id}`}
            className="slider-image"
            back
          />
        </div>
      ))}
    </AutoplaySlider>
  );
}
