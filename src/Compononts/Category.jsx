import "./Css/Category.css";
import categoryImage from "../assets/electricity.jpg";
import category1 from "../assets/category (1).jpg"
import category2 from "../assets/category (2).jpg"
import category3 from "../assets/category (3).jpg"
import category4 from "../assets/category (4).jpg"
import arrow from "../assets/right-arrow.png"
import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <hr className="category-hr" /> */}
      <div className="categorys">
        <div className="category-container">
          <div className="top">
            <h2>Browse by category </h2>

            <div onClick={() => { navigate("/service") }} className="view-btn viewAll">
                View All
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
          </div>
          <div className="bottom">
            <div className="categoryimg">
              <div className="img">
                <img src={category1} alt="" />
              </div>
              <div className="status">
                <h6>21 providers</h6>
              </div>
              <div className="about-category">
                <h4>Home Cleaning</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              </div>
            </div>
            <div className="categoryimg">
              <div className="img">
                <img src={category2} alt="" />
              </div>
              <div className="status">
                <h6>21 providers</h6>
              </div>
              <div className="about-category">
                <h4>Plumbing</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              </div>
            </div>
            <div className="categoryimg">
              <div className="img">
                <img src={category3} alt="" />
              </div>
              <div className="status">
                <h6>21 providers</h6>
              </div>
              <div className="about-category">
                <h4>Electrical</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              </div>
            </div>
            <div className="categoryimg">
              <div className="img">
                <img src={category4} alt="" />
              </div>
              <div className="status">
                <h6>21 providers</h6>
              </div>
              <div className="about-category">
                <h4>Carpentry</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              </div>
            </div>
            <div className="categoryimg">
              <div className="img">
                <img src={category4} alt="" />
              </div>
              <div className="status">
                <h6>21 providers</h6>
              </div>
              <div className="about-category">
                <h4>Carpentry</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <hr className="category-hr" /> */}
    </>
  );
};

export default Category;
