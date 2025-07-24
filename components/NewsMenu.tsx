import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';

// Move getCategories and NewsMenuData to a server component file, not here

const NewsMenuClient: React.FC<{ categories: any[] }> = ({ categories }) => {
  return (
    <li>
      <Link href="/news">News Section</Link>
      <ul className="submenu">
        {categories?.filter((cat)=>cat.isActive).map((category: any) => (
          <li key={category._id}>
            <Link href={`/news-category/${category._id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NewsMenuClient;