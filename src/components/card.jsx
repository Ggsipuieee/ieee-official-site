import React from "react";
import Image from "../small compo/Image";
import Paragraph from "../small compo/Paragraph";
import Heading from "../small compo/Heading";

function Card(props) {
  return (
    <figure class="snip1174 red snip1000">
      <Image src={props.src} class="objectCover"/>
      <figcaption>
        <Heading class="invi" text={props.text} />
        <Paragraph content={props.content} />
      </figcaption>
    </figure>
  );
}

export default Card;
