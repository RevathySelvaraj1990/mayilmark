import React, { useEffect, useState } from "react";

//** Asset Imports */
import "../../assets/css/main.scss";
import banner1 from "../../assets/images/home/banner1.png";
import banner2 from "../../assets/images/home/banner2.png";
import banner3 from "../../assets/images/home/banner3.png";
import ricebag1 from "../../assets/images/home/ricebag1.png";
import ricebag2 from "../../assets/images/home/ricebag2.png";
import ricebag3 from "../../assets/images/home/ricebag3.png";
import ourTeam from "../../assets/images/home/our-team.jpg";
import founders from "../../assets/images/home/founders.jpg";
import productsImage from "../../assets/images/home/products_image.jpg";
import gramFlour from "../../assets/images/home/gram_flour.png";
import multiGrain from "../../assets/images/home/multi_grain1.png";
import ravai from "../../assets/images/home/ravai.png";
import urad from "../../assets/images/home/urad.png";
import atta from "../../assets/images/home/atta.png";
import kachori from "../../assets/images/home/kachori.PNG";
import chef from "../../assets/images/home/chef.jpg";
import edge1 from "../../assets/images/home/edge1.png";
import edge2 from "../../assets/images/home/edge2.png";
import edge3 from "../../assets/images/home/edge3.png";
import laddu from "../../assets/images/recipes/LADDU.jpg";
import idli from "../../assets/images/recipes/Untitled-design.jpg";
import pancakes from "../../assets/images/recipes/PANCAKES.jpg";
import kesari from "../../assets/images/recipes/VERMICELLI-KESARI.jpg";
// ** Third party/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BackgroundHeader from "../../components/BackgroundHeader";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const productsList = [
  {
    title: "Sambar Ravai",
    image: ravai,
  },
  {
    title: "Wheat Flour",
    image: atta,
  },
  {
    title: "Besan Flour",
    image: gramFlour,
  },
  {
    title: "Urid Dhal",
    image: urad,
  },
  {
    title: "Vermicelli",
    image: multiGrain,
  },
];

const Home = () => {
  const [selectedProduct, setSelctedProduct] = useState(productsList[0]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="home_main_wrapper">
      <div className="carousel_wrapper">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel_comp"
          containerClass="container"
          dotListClass="dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass="item"
          keyBoardControl
          minimumTouchDrag={80}
          // pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          // renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img src={banner1} />
          <img src={banner3} />
          <img src={banner2} />
        </Carousel>
      </div>
      <div className="home_main_section">
        <div className="who_we_are_wrapper">
          <header className="header">
            <img src={ricebag1} alt="ricebag" className="ricebag1" />
            <BackgroundHeader
              heading={
                <p>
                  <span style={{ color: "rgb(249, 147, 27)" }}>Who</span> We{" "}
                  <span style={{ color: "rgb(249, 147, 27)" }}>are</span>
                </p>
              }
              background={"Aboutus"}
            />
          </header>
          <img src={edge3} className="right_edge" />

          <div className="main">
            <div className="content">
              <p>
                 Brand Mayilmark was birthed in 1960 by our visionary founder, Mr. Vanniarajan, amidst the vibrant landscapes of Coimbatore, Tamil Nadu, India, under the distinguished banner of Ponmurugan Dhall Mills
              </p>
              <div className="about_us_button">
                <NavLink to="/about-us">
                  <Button text={"Click Story"} />
                </NavLink>
              </div>
            </div>

            <div className="images">
              <img src={ourTeam} alt="our-team" className="our_team" />
              <img src={founders} alt="our-team" className="founders" />
            </div>
          </div>
        </div>
        <div className="top_selling_products">
          <header className="header">
            <img src={ricebag2} alt="ricebag" className="ricebag1" />
            <BackgroundHeader
              heading={
                <p>
                  <span style={{ color: "rgb(249, 147, 27)" }}>Top</span>{" "}
                  Selling{" "}
                  <span style={{ color: "rgb(249, 147, 27)" }}>Products</span>
                </p>
              }
              background={"Products"}
            />
          </header>
          <p className="content">
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <div className="products_section">
            <img src={edge3} className="left_edge" />
            <div className="main_image">
              <img src={selectedProduct.image} alt="selected_image" />
            </div>
            <div className="products">
              <div className="selectable_products">
                <ul class="wrapper">
                  {productsList.map((item) => {
                    return (
                      <li
                        className={` product ${
                          selectedProduct.title === item.title
                            ? "active_product"
                            : ""
                        }`}
                        onClick={() => {
                          setSelctedProduct(item);
                        }}
                      >
                        <span
                          className={`tooltip ${
                            selectedProduct.title === item.title
                              ? "active_tooltip"
                              : ""
                          }`}
                        >
                          {item.title}
                        </span>
                        <img src={item.image} alt={item.image} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <img
                src={productsImage}
                alt="products_image"
                className="products_image"
              />
              <div className="view_products">
                <NavLink to="/products">
                  <Button text={"View All Products"} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="recipes_wrapper">
          <header className="header">
            <img src={ricebag3} alt="ricebag" className="ricebag1" />
            <img src={edge3} className="right_edge" />
            <BackgroundHeader
              heading={
                <p>
                  <span style={{ color: "rgb(249, 147, 27)" }}>Talking </span>
                  Recipes{" "}
                  <span style={{ color: "rgb(249, 147, 27)" }}>Easy </span>
                  Recipes
                </p>
              }
              background={"Recipes"}
            />
          </header>
          <p className="content">
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word
          </p>
          <div className="images">
            <img src={edge3} className="right_edge" />
            <div className="left">
              <img src={chef} alt="" className="chef" />
              <NavLink to="/recipes">
                <Button text={"view All Recipes"} />
              </NavLink>
            </div>
            <div className="right">
              <div className="wrap">
                <div className="end-recip">
                  <img src={laddu} alt="laddu deripe" className="recip" />
                  <div className="end-recip-right">
                    <img src={idli} alt="rava idli" className="recip" />
                    <img src={pancakes} alt="pancakes" className="recip" />
                  </div>
                  <img src={kesari} alt="kesari" className="recip" />
                </div>
                {/* <img src={kachori} alt="" className="kachori" />
                <img src={atta} alt="" className="atta" /> */}
              </div>
              {/* <p>Kachori</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
