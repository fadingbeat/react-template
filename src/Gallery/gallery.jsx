import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import img_1gallery from "../Assets/gallery/img_1gallery.png";
import img_2gallery from "../Assets/gallery/img_2gallery.png";
import img_3gallery from "../Assets/gallery/img_3gallery.png";
import img_4gallery from "../Assets/gallery/img_4gallery.png";
import img_5gallery from "../Assets/gallery/img_5gallery.png";
import img_6gallery from "../Assets/gallery/img_6gallery.png";
import img_7gallery from "../Assets/gallery/img_7gallery.png";
import img_8gallery from "../Assets/gallery/img_8gallery.png";

class Gallery extends Component {
  state = {
    images: [
      "Rectanglegallery.png",
      "Rectangle2gallery.png",
      "Rectangle3gallery.png",
    ],
    currentIndex: 0,
  };
  galleryImages = [
    {
      id: 0,
      img: "img1",
      src: img_1gallery,
    },
    {
      id: 1,
      img: "img2",
      src: img_2gallery,
    },
    {
      id: 2,
      img: "img3",
      src: img_3gallery,
    },
    {
      id: 3,
      img: "img4",
      src: img_4gallery,
    },
    {
      id: 4,
      img: "img5",
      src: img_5gallery,
    },
    {
      id: 5,
      img: "img6",
      src: img_6gallery,
    },
    {
      id: 6,
      img: "img7",
      src: img_7gallery,
    },
    {
      id: 7,
      img: "img8",
      src: img_8gallery,
    },
  ];
  galleryRowOne;
  galleryRowTwo;

  nextSlide = () => {
    const lastIndex = (this.state.currentIndex + 2) % this.state.images.length;
    const index = lastIndex < this.state.images.length ? lastIndex : 0;
    this.setState({
      currentIndex: index,
    });
  };

  prevSlide = () => {
    const firstIndex =
      this.state.currentIndex === 0
        ? this.state.images.length - 1
        : this.state.currentIndex - 1;
    this.setState({
      currentIndex: firstIndex,
    });
  };

  render() {
    console.log(this.galleryImages);
    const firstIndex = this.state.currentIndex;
    const secondIndex =
      (this.state.currentIndex + 1) % this.state.images.length;
    const thirdIndex = (this.state.currentIndex + 2) % this.state.images.length;
    return (
      <div>
        <p className="text-center subtitle">Gallery</p>
        <div className="gallery-slider">
          <div className="slider-images">
            <img
              src={require(`../Assets/gallery/${this.state.images[firstIndex]}`)}
              alt="First"
            />
            <img
              src={require(`../Assets/gallery/${this.state.images[secondIndex]}`)}
              alt="Second"
            />
            <img
              src={require(`../Assets/gallery/${this.state.images[thirdIndex]}`)}
              alt="Third"
            />
          </div>
          <div className="slider-navigation">
            <button onClick={this.prevSlide}>Prev</button>
            <button onClick={this.nextSlide}>Next</button>
          </div>
        </div>
        {
          ((this.galleryRowOne = this.galleryImages.slice(0, 4)),
          (
            <Container>
              <Row xs={2} sm={4} md={4} xl={4}>
                {this.galleryRowOne.map((img) => {
                  return (
                    <Image
                      className="col-image"
                      key={img.id}
                      src={img.src}
                      fluid
                    />
                  );
                })}
              </Row>
            </Container>
          ))
        }
        {
          ((this.galleryRowTwo = this.galleryImages.slice(4, 8)),
          (
            <Container>
              <Row xs={2} sm={4} md={4} xl={4}>
                {this.galleryRowTwo.map((img) => {
                  return (
                    <Image
                      className="col-image"
                      key={img.id}
                      src={img.src}
                      fluid
                    />
                  );
                })}
              </Row>
            </Container>
          ))
        }
      </div>
    );
  }
}

export default Gallery;
