import "./another-course.css";
// import PictureTest from "../assets/icon.jpeg";
import SandWich from "../assets/sandwich.jpeg"
import Pizza from "../assets/pizza.jpeg"
import Mochi from "../assets/mochi.jpeg"
import Makaroni from "../assets/makaroni.jpeg"
import Mayo from "../assets/mayo.jpeg"
import Cireng from "../assets/cireng.jpeg"
import Cobek from "../assets/cobek.jpeg"
import Talas from "../assets/talas.jpeg"
import Singkong from "../assets/singkong.jpeg"

const AnotherCourse = () => {
  return (
    <div className="another-course" id="product">
      <h1 className="another-course-title">Menu Tambahan</h1>
      <div className="another-course-image-container menu-item-mobile">
        <div className="another-course-image-container-item">
          <img src={Pizza} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Pizza Mini</h1>
            <h2>Rp. 3.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Mochi} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Mochi</h1>
            <h2>Rp. 2.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Makaroni} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Makaroni</h1>
            <h2>Rp. 4.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Mayo} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Risol Mayo</h1>
            <h2>Rp. 4.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Cireng} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Cireng</h1>
            <h2>Rp. 4.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Cobek} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Basreng Cobek</h1>
            <h2>Rp. 5.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Talas} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Keripik Talas</h1>
            <h2>Rp. 6.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={Singkong} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Singkong</h1>
            <h2>Rp. 6.000</h2>
          </div>
        </div>
        <div className="another-course-image-container-item">
          <img src={SandWich} alt="kisaki" className="img-item-kisaki"></img>
          <div>
            <h1>Sandwich</h1>
            <h2>Rp. 5.000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherCourse;
