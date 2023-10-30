import React from "react";

export default function ImgCompo({ imgCompo }) {
  return (
    <>
      <div>
        <img src={imgCompo.src} alt={imgCompo.alt} width="100%"></img>
      </div>
    </>
  );
}
