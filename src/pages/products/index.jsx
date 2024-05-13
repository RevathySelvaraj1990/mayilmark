import React, { useRef } from "react";

import banner from "../../assets/images/about/banner.png";
import gramFlour from "../../assets/images/home/gram_flour.png";
import multiGrain from "../../assets/images/home/multi_grain1.png";
import ravai from "../../assets/images/home/ravai.png";
import urad from "../../assets/images/home/urad.png";
import atta from "../../assets/images/home/atta.png";
import flourbg from "../../assets/images/products/flourbg.png";
import vermicellibg from "../../assets/images/products/vermicellibg.png";
import milletsbg from "../../assets/images/products/milletsbg.png";
import instantbg from "../../assets/images/products/instantbg.png";
import pulsesbg from "../../assets/images/products/pulsesbg.png";
import edge1 from "../../assets/images/about/edge1.png";
import edge2 from "../../assets/images/about/edge2.png";

const Products = () => {
  const biryaniRef = useRef(null);
  const flourRef = useRef(null);
  const vermicelliRef = useRef(null);
  const snacksRef = useRef(null);
  const instantRef = useRef(null);
  const milletsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -100; // Adjust this value as needed
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="products_main_wrapper">
      <div className="product_banner_wrapper">
        <img src={banner} alt="banner" />
      </div>

      <div className="products_wrapper">
        <h1>Products</h1>
        <ul className="products_list">
          <li onClick={() => scrollToSection(biryaniRef)}>Rava</li>
          <li onClick={() => scrollToSection(flourRef)}>Flour</li>
          <li onClick={() => scrollToSection(vermicelliRef)}>Vermicelli</li>
          <li onClick={() => scrollToSection(snacksRef)}>Millets</li>
          <li onClick={() => scrollToSection(instantRef)}>Instant Mix</li>
          <li onClick={() => scrollToSection(milletsRef)}>Pulses</li>
        </ul>
      </div>
      <div className="rava" ref={biryaniRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Rava </span>
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
        </ul>
      </div>
      <div className="flour" ref={flourRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Flour </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={flourbg} alt="flourbg" className="bg" />
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={multiGrain} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={gramFlour} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
        </ul>
      </div>
      <div className="vermicelli" ref={vermicelliRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Vermicelli </span>{" "}
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <img src={vermicellibg} alt="flourbg" className="bg" />
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
        </ul>
      </div>
      <div className="millets" ref={snacksRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Millets </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={milletsbg} alt="flourbg" className="bg milletsbg" />
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
        </ul>
      </div>
      <div className="instant_mix" ref={instantRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Instant </span> Mix
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <img src={instantbg} alt="flourbg" className="bg instantbg" />
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
        </ul>
      </div>
      <div className="pulses" ref={milletsRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}> Pulses </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={pulsesbg} alt="flourbg" className="bg instantbg" />
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
          <li>
            <img src={urad} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Biryani </span> Mix
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
