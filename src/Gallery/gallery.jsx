import { Component } from "react";

import Image from "react-bootstrap/Image";
import Rectanglegallery from "../Assets/gallery/Rectanglegallery.png";
import Rectangle2gallery from "../Assets/gallery/Rectangle2gallery.png";
import Rectangle3gallery from "../Assets/gallery/Rectangle3gallery.png";

import img_1gallery from "../Assets/gallery/img_1gallery.png";
import img_2gallery from "../Assets/gallery/img_2gallery.png";
import img_3gallery from "../Assets/gallery/img_3gallery.png";
import img_4gallery from "../Assets/gallery/img_4gallery.png";
import img_5gallery from "../Assets/gallery/img_5gallery.png";
import img_6gallery from "../Assets/gallery/img_6gallery.png";
import img_7gallery from "../Assets/gallery/img_7gallery.png";
import img_8gallery from "../Assets/gallery/img_8gallery.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Gallery extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  render() {
    return (
      <div>
        <p className="text-center subtitle">Gallery</p>
        <OwlCarousel
          class="owl-carousel owl-theme owl-loaded"
          margin={10}
          nav={true}
          dots={false}
          navContainerClass={true}
          // navClass={true}
          // center={true}
          responsiveClass={true}
          responsive={this.state.responsive}
        >
          <Image src={Rectangle2gallery} fluid />
          <Image src={Rectanglegallery} fluid />
          <Image src={Rectangle3gallery} fluid />
        </OwlCarousel>

        <div>
          <Image src={img_1gallery} fluid />
          <Image src={img_2gallery} fluid />
          <Image src={img_3gallery} fluid />
          <Image src={img_4gallery} fluid />
          <Image src={img_5gallery} fluid />
          <Image src={img_6gallery} fluid />
          <Image src={img_7gallery} fluid />
          <Image src={img_8gallery} fluid />
        </div>
      </div>
    );
  }
}

export default Gallery;
