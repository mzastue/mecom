"use client";

import * as React from "react";
import main from "core";

export const Button = () => {
  return <button onClick={() => alert(main.abc)}>Boop</button>;
};
