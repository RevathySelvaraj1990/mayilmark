import React from "react";
import banner from "../../assets/images/contactBanner.png";

const Outlets = () => {
  return (
    <div className="outlets_main_wrapper">
      <div className="outlets_banner_wrapper">
        <img src={banner} alt="banner" />
      </div>
      <div className="header_div">
        <h1>Outlets</h1>
        <p className="content">
          {" "}
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word. Contrary to popular belief, Lorem Ipsum
          is not simply random text. It has roots in a piece
        </p>
      </div>
      <div className="outlet">
        <h1>1. Chennai</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11555.761021996634!2d-79.75453709253429!3d43.60778555318943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4135d7f0decd%3A0x1dd1afa556f5a8b3!2sSubam%20Trading%20Inc!5e0!3m2!1sen!2sin!4v1715479423084!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ style: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="outlet">
        <h1>2. Bangalore</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11555.761021996634!2d-79.75453709253429!3d43.60778555318943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4135d7f0decd%3A0x1dd1afa556f5a8b3!2sSubam%20Trading%20Inc!5e0!3m2!1sen!2sin!4v1715479423084!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ style: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="outlet">
        <h1>3. Canada</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11555.761021996634!2d-79.75453709253429!3d43.60778555318943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4135d7f0decd%3A0x1dd1afa556f5a8b3!2sSubam%20Trading%20Inc!5e0!3m2!1sen!2sin!4v1715479423084!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ style: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="outlet">
        <h1>4. Coimbatore</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11555.761021996634!2d-79.75453709253429!3d43.60778555318943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4135d7f0decd%3A0x1dd1afa556f5a8b3!2sSubam%20Trading%20Inc!5e0!3m2!1sen!2sin!4v1715479423084!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ style: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Outlets;
