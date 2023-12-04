/* eslint-disable max-len */
// components/Breadcrumbs.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const { asPath } = router;

  // Split the path and filter out empty segments
  const pathSegments = asPath.split('/').filter(segment => segment);

  // Create a breadcrumb array
  const breadcrumbs = pathSegments.map((segment, index) => {
    // Reconstruct the path up to the current segment
    const href = '/' + pathSegments.slice(0, index + 1).join('/');

    // The last segment should not be a link
    const isLast = index === pathSegments.length - 1;

    return {
      href,
      label: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // format the segment
      isLast,
    };
  });

  return (
    <nav className="text-sm">
      <ul className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-green-500 hover:text-green-600 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        {breadcrumbs.map(({ href, label, isLast }, index) => (
          <React.Fragment key={index}>
            <li className="text-tertiary">/</li>
            <li>
              {isLast ? (
                <span className="text-tertiary">{label}</span>
              ) : (
                <Link
                  href={href}
                  className="text-green-500 hover:text-green-600 transition duration-300 ease-in-out"
                >
                  {label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
