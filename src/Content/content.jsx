import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import headline_imagecontent from "../Assets/content/headline_imagecontent.png";
import meowcontent from "../Assets/content/meowcontent.png";
import woofcontent from "../Assets/content/woofcontent.png";

export default function Content() {
  return (
    <div>
      <img
        src={headline_imagecontent}
        style={{ width: "100%" }}
        alt="Cat lying by the window"
      />

      <Container>
        <div className="content-bg">
          <Row>
            <h1 className="text-center">Daily pet facts - Love!</h1>
          </Row>

          <Row className="content-row">
            <Col>
              <Image
                className="flex-image-cat"
                src={meowcontent}
                alt="Cat looking straigh ahead"
                fluid
              />
            </Col>
            <Col xl={8} xs={12}>
              <h2>The cat</h2>
              <p className="content-row-cat-text">
                Cats have been domesticated for around 4,000 years. While they
                were once valued for their hunting abilities, they are now
                valued for their companionship and loving behaviour.<br></br>
                <br></br> While not well known, the collective nouns used for
                cats and kittens are a clowder of cats and a kindle of kittens.
                <br></br>
                <br></br> Our domestic cats are known as little cats. They
                differ from large cats such as lions and tigers because they are
                naturally active at night and can purr.<br></br>
                <br></br> Cats are now the most popular pet in the UK and in the
                US.
              </p>
            </Col>
          </Row>
          <Row
            className="content-row"
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <Col>
              <Image src={woofcontent} alt="Dog lying on the ground" fluid />
            </Col>
            <Col xl={8} xs={12}>
              <h2 className="content-row-dog-subtitle">The dog</h2>
              <p className="content-row-dog-text">
                Domestic dogs have been companions to people for more than
                15,000 years. There are more than 400 different breeds of dogs.
                PAWS or your local animal shelter has a wide variety of breeds
                available for adoption. The most popular types are the
                non-pedigree. They are extra special because they are
                one-of-a-kind! <br></br>
                <br></br>In general, small dogs live longer than large dogs.
                Small dogs such as terriers may live 20 years. Giant dogs like
                Great Danes may live eight years. The average lifespan for a
                mixed breed dog is 13 to 14 years. By making sure dogs have good
                food, regular veterinary care, shelter and a loving family, they
                will live longer, healthier lives.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
