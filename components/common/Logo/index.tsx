import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="https://transvelo.github.io/freshcart/assets/images/freshcart-logo.svg"
          alt="FreshCart Logo"
          width={160}
          height={31}
        />
      </Link>
    </div>
  );
};

export default Logo;
