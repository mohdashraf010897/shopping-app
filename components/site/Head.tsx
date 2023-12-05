/* eslint-disable max-len */
import React from 'react';
import NextHead from 'next/head';

const defaultTitle = 'Default Title';
const defaultDescription = 'Default Description';
const defaultURL = 'https://defaulturl.com';
const defaultImage = 'https://defaulturl.com/defaultimage.png';
const defaultKeywords = ['default', 'keywords'];

interface HeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
}

const Head: React.FC<HeadProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  url = defaultURL,
  image = defaultImage,
  keywords = defaultKeywords,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link
        rel="icon"
        href="https://freshcart.madrasthemes.com/gutenberg/wp-content/uploads/2023/01/cropped-favicon-192x192.png"
      />
    </NextHead>
  );
};

export default Head;
