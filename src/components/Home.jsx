import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>
      <div id="cards-main-div">
        <div id="content">
          <h1>News</h1>
          <NavLink id="link">
            <h5>VIEW ALL </h5>
            <BiArrowFromLeft id="icon"/>
          </NavLink>
        </div>
        <hr />
        <Cards />
      </div>
      <div id=""></div>
    </>
  );
}
