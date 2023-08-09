"use client";

import * as React from "react";
import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label: string;
}

export const Button = ({ onClick, label }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
