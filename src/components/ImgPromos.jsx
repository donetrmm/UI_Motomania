import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ImgPromos() {
  const [promociones, setPromociones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/promociones?page=1&limit=1');
        setPromociones(response.data.promociones);
        console.log("dataaaa")
        console.log(response.data)
        console.log('data url',response.data.promociones.url_imagen_promocion)
        response.data.promociones.forEach(promocion => {
          console.log('for each',promocion.url_imagen_promocion)
        });
      } catch (error) {
        console.log("NO chingao no paso")
        console.error('Error al obtener los elementos', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      <div>
        {promociones.map((promo) =>(
              <img src={`http://localhost:8081/public/images/${promo.url_imagen_promocion}`} alt='logo' width="100%"></img>
        ))}
        <p>imgs back?</p>
      
      </div>
    </>
  );
}
