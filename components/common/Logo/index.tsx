import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div>
      <a href="https://freshcart.madrasthemes.com/gutenberg/">
        <Image
          src="https://transvelo.github.io/freshcart/assets/images/freshcart-logo.svg"
          alt="FreshCart Logo"
          width={160}
          height={31}
        />
      </a>
    </div>
  );
};

export default Logo;
