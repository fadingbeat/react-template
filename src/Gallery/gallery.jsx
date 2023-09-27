import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
import arrow_leftgallery from "../Assets/gallery/arrow_leftgallery.png";
import arrow_rightgallery from "../Assets/gallery/arrow_rightgallery.png";

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
          // navText={["", ""]}
          responsiveClass={true}
          responsive={this.state.responsive}
        >
          <Image src={Rectangle3gallery} />
          <Image src={Rectanglegallery} />
          <Image src={Rectangle2gallery} />
        </OwlCarousel>

        <Container>
          <Row xs={2} sm={4} md={4} xl={4} style={{ paddingBottom: "30px" }}>
            <Col>
              {" "}
              <Image src={img_1gallery} fluid />
            </Col>
            <Col>
              {" "}
              <Image src={img_2gallery} fluid />
            </Col>
            <Col>
              {" "}
              <Image src={img_3gallery} fluid />
            </Col>
            <Col>
              <Image src={img_4gallery} fluid />
            </Col>
          </Row>
          <Row xs={2} sm={4} md={4} xl={4} style={{ paddingBottom: "30px" }}>
            <Col>
              {" "}
              <Image src={img_5gallery} fluid />
            </Col>
            <Col>
              {" "}
              <Image src={img_6gallery} fluid />
            </Col>
            <Col>
              {" "}
              <Image src={img_7gallery} fluid />
            </Col>
            <Col>
              {" "}
              <Image src={img_8gallery} fluid />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
