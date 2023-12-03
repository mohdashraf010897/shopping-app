import React, { useState } from 'react';
import Image from 'next/image';
import { ImagePreviewProps } from '@/types/components/imagePreview';
const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, zoomLevel = 2, ...rest }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLElement;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Normalize the coordinates from 0 to 1 and then scale to the zoom level
    const normalizedX = (x / width) * zoomLevel;
    const normalizedY = (y / height) * zoomLevel;

    // Adjust positions to center the zoom effect on the cursor
    const adjustedX = normalizedX * width - width / 2;
    const adjustedY = normalizedY * height - height / 2;

    setLensPosition({ x: -adjustedX, y: -adjustedY });
  };
  return (
    <div
      className="relative inline-block cursor-zoom-in w-full h-full"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={imageUrl}
        alt="Preview"
        {...rest}
        {...(isZoomed && {
          style: {
            visibility: 'hidden',
          },
        })}
      />
      {isZoomed && (
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${lensPosition.x}px ${lensPosition.y}px`,
            backgroundSize: `${zoomLevel * 100}%`, // Add this line
          }}
        ></div>
      )}
    </div>
  );
};

export default ImagePreview;
