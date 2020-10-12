import React, { useState } from "react";
import Img from "gatsby-image"
import styled from "styled-components"

const SliderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Slide = styled.div`
  width: 80vw;
`

const Button = styled.div`
  position: absolute;
  ${props => props.right ? 'right: 0; cursor: e-resize;' : 'left: 0; cursor: w-resize;' };
  top: 0;
  bottom: 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 9;
`

const Slider = ({ images }) => { // takes in images as props
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <SliderWrapper>
        <Slide>
          <Button onClick={slideLeft} />
          <Img style={{ maxHeight: '87vh' }}  imgStyle={{ objectFit: 'contain' }} placeholderStyle={{ objectFit: 'contain' }} fluid={images[index].node.childImageSharp.fluid} />
          <Button right onClick={slideRight} />
        </Slide>
      </SliderWrapper>
    )
  );
};

export default Slider;
