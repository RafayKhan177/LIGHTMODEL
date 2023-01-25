import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const images = [
  { id: 1, alt: "First slide", src: "041.jpg" },
  { id: 2, alt: "Second slide", src: "042.jpg" },
  { id: 3, alt: "Third slide", src: "043.jpg" },
];

const imagePath = "https://mdbootstrap.com/img/new/slides/";

export const Carousal = () => {
  return (
    <MDBCarousel showControls showIndicators className="w-100 d-block">
      {images.map((image) => (
        <MDBCarouselItem key={image.id} itemId={image.id} src={imagePath + image.src} alt={image.alt} />
      ))}
    </MDBCarousel>
  );
};
