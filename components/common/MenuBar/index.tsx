/* eslint-disable max-len */
import { MenuItem } from '@/types/dataSource';
import React from 'react';

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => (
  <li className="relative group">
    <a href={item.href} className="hover:text-primary-500 transition duration-300">
      {item.title}
    </a>
    {item.submenu && item.submenu.length > 0 && <SubMenu items={item.submenu} />}
  </li>
);

const SubMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => (
  <ul className="absolute bottom-0 left-0 transform translate-y-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-out bg-white shadow-md rounded-md p-2 z-10">
    {items.map((subItem, index) => (
      <MenuItemComponent key={index} item={subItem} />
    ))}
  </ul>
);

const MenuBar: React.FC<{ items: MenuItem[] }> = ({ items }) => (
  <nav>
    <ul className="flex space-x-4">
      {items.map((item, index) => (
        <MenuItemComponent key={index} item={item} />
      ))}
    </ul>
  </nav>
);

export default MenuBar;
