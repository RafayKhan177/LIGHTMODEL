import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
import GridCarousel from "./GridCarousel";
import { Carousal } from "./Carousal";

export default function Home() {
  return (
    <>
      <Carousal/>
      <div id="cards-main-div">
        <div id="content">
          <h1>News</h1>
          <NavLink id="link">
            <h5>VIEW ALL </h5>
            <BiArrowFromLeft id="icon" />
          </NavLink>
        </div>
        <hr />
        <Cards />
      </div>
      <div id="content-main-div">
        <h1>At A Glance</h1>
        <hr />
        <p id="description">
          Berkeley Carroll is a private preK-12th grade school in Brooklyn that
          inspires critical, ethical, and global thinking. Our academic program
          emphasizes an inter-disciplinary approach where faculty and students
          collaborate to pose essential questions. We develop daring thinkers
          ready for success in college and beyond throughout their careers.
        </p>
        <div id="cards">
          <div id="card">
            <BiArrowFromLeft id="card-icon" />
            <h1>99%</h1>
            <p>of seniors were accepted into a highly selective college</p>
          </div>
          <div id="card">
            <BiArrowFromLeft id="card-icon" />
            <h1>99%</h1>
            <p>of seniors were accepted into a highly selective college</p>
          </div>
          <div id="card">
            <BiArrowFromLeft id="card-icon" />
            <h1>99%</h1>
            <p>of seniors were accepted into a highly selective college</p>
          </div>
        </div>
        <NavLink id="link">Learn More</NavLink>
      </div>
      <div id="events">
        <div id="content">
          <h1>Events</h1>
          <NavLink id="link">
            <h5>VIEW ALL </h5>
            <BiArrowFromLeft id="icon" />
          </NavLink>
        </div>
        <hr />
        <GridCarousel />
      </div>
    </>
  );
}
