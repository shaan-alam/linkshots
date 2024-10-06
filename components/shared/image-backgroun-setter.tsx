"use client";

import ImageFromURLComponent from "./image-from-url-component";
import ImageGenerator from "./image-generator";

const ImageBackgroundSetter = () => {
  return (
    <div className="space-y-4">
      <ImageFromURLComponent />
      <ImageGenerator />
    </div>
  );
};

export default ImageBackgroundSetter;
