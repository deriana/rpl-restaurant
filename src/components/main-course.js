import "./main-course.css"
import Image from "../assets/main-course.jpg"

const MainCourse = () => {
    return (
        <div className="main-course" id="main-course">
            <img src={Image} alt="main-course"></img>
            <div className="main-course-text">
                <h1>Siomay Goreng</h1>
                <h2>Rp. 5.000 / 3pcs</h2>
            </div>
        </div>
    ) 
}

export default MainCourse