import "./about.css";
import icon from "../assets/main-course.jpg";
import icon1 from "../assets/es-jelly.jpeg";
import icon2 from "../assets/sandwich.jpeg";

const About = () => {
  return (
    <div className="about" id="home">
      <div className="abot">
        <div className="about-text">
          <h1>Recomendation Menu</h1>
          <p>
            Beberapa saran rekomendasi menu dari kami XI PPLG RPL 1
          </p>
        </div>
      </div>
      <div className="favorite-menu">
        <div className="favorite-menu-item">
          <img src={icon} alt="kisaki bebeb"></img>
          <h2>Siomay Goreng</h2>
        </div>
        <div className="favorite-menu-item">
          <img src={icon1} alt="kisaki bebeb"></img>
          <h2>Es Jelly</h2>
        </div>
        <div className="favorite-menu-item">
          <img src={icon2} alt="kisaki bebeb"></img>
          <h2>Sandwich</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
