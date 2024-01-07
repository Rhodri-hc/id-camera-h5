import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import Result from '@/pages/mbti/result';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Result">
        <Result />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
