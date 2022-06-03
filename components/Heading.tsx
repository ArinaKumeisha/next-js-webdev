import React from 'react';
import {HeadingType} from '../types/types';

const Heading = ({teg, text}: HeadingType) => {
  const Teg = teg || '';
  return (
    <div>
      <Teg>{text}</Teg>
    </div>
  );
};

export default Heading;