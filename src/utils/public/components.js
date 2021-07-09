import React, { useState, useEffect } from 'react';
import * as Styled from '../../components';

export const Slider = ({ num, ...rest }) => {
  /**
   *performs Images Slideshow
   *Cross platform
   */
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex(index + 1), 9000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  if (index > num - 1) {
    setIndex(0);
  }
  return <rest.component index={index} />;
};

export const ImgPane = (props) => {
  return <Styled.ImagePane index={props.index}></Styled.ImagePane>;
};
