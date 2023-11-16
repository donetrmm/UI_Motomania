import React from "react";

export default function LogoFooter({ logo }) {
  return (
    <>
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
      >
      </img>
    </>
  );
}
