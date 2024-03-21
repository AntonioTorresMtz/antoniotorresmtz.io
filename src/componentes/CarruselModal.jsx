import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../estilos/CarruselModal.css"


function CarruselModal({imagenesCarrusel}) {
  const imagenes = imagenesCarrusel.map((imagen) => ({
    original: imagen,
    thumbnail: imagen, // Puedes establecer la misma imagen como miniatura o proporcionar una miniatura diferente
    // Otras propiedades opcionales, como 'description', 'originalClass', etc.
  }));

  return (
    <div className="contenedor-principal-carrusel">
      <ImageGallery items={imagenes}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      showNav={false}
      showBullets={true}
      autoPlay={true} />
    </div>
  );
}

export default CarruselModal;
