import React from "react";
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../common/Wrapper";

const Slider = ({ banners }) => {
  return (
    <Wrapper>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {banners?.length > 0 &&
          banners.map((banner) => (
            <div>
              <img alt="" src={`${banner.bannerImageUrl}`} />
            </div>
          ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slider;
