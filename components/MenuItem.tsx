import React from 'react';

interface MenuItemProps {
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  return (
    <span>{text}</span>
  );
};

export default MenuItem; 