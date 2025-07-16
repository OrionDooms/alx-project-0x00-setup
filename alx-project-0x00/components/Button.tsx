import React from "react";
import { BtnProps } from '@/interfaces';

const Button: React.FC<BtnProps> = ({ title, styles }) => {
  return (
    <button className={`py-2 px-4 bg-blue-500 text-white font-semibold ${styles}`}>{title}</button>
  )
}

export default Button;
