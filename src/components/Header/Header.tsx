import React from 'react';
import h from './Header.module.css';
interface HeaderProps {
  align?: string;
  justify?: string;
  width?: string;
  height?: string;
  gap?: string;
  children?: React.ReactNode;
}
const Header = (props: HeaderProps) => {
  return (
    <div
      className={`${h.HeaderContainer}`}
    >
      {props.children}
    </div>
  );
};
export default Header;