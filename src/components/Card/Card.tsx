import React from 'react';
import s from './Card.module.css';
interface CardProps {
  align?: string;
  justify?: string;
  width?: string;
  height?: string;
  gap?: string;
  children?: React.ReactNode;
}
const Card = (props: CardProps) => {
  return (
    <div
      className={`${s.CardContainer}`}
    >
      {props.children}
    </div>
  );
};
export default Card;