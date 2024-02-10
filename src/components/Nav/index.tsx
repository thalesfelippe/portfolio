import React from 'react';
// import {
//   HiHome,
//   HiUser,
//   HiViewColumns,
//   HiRectangleGroup,
//   HiChatBubbleBottomCenterText,
//   HiEnvelope,
// } from 'react-icons/hi';

// export const navData = [
//   { name: 'home', path: '/', icon: <HiHome /> },
//   { name: 'about', path: '/about', icon: <HiUser /> },
//   { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
//   { name: 'work', path: '/work', icon: <HiViewColumns /> },
//   {
//     name: 'testimonials',
//     path: '/testimonials',
//     icon: <HiChatBubbleBottomCenterText />,
//   },
//   {
//     name: 'contact',
//     path: '/contact',
//     icon: <HiEnvelope />,
//   },
// ];

export const navData = [
  { name: 'home', path: '/', },
  { name: 'about', path: '/about', },
  { name: 'services', path: '/services', },
  { name: 'work', path: '/work', },
  { name: 'testimonials', path: '/testimonials',},
  { name: 'contact', path: '/contact',}
];

const Nav: React.FC = () => {
  return <nav>nav</nav>;
};

export default Nav;
