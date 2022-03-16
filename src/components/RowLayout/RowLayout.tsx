import React from 'react';
import r from './RowLayout.module.css';
interface RowProps {
  align?: string;
  justify?: string;
  width?: string;
  height?: string;
  gap?: string;
  children?: React.ReactNode;
}
const RowLayout = (props: RowProps) => {
  return (
    <div
      className={`${r.RowContainer}`}
    >
      {props.children}
    </div>
  );
};
export default RowLayout;