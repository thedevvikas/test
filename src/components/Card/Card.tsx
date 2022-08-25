// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

import React from "react";
import { Card, CardProps } from '@mantine/core';

interface IXCardProps extends CardProps {
}

const XCard = (props:CardProps) => {
    const {children, ...restProps} = props
  return (
      <Card {...restProps}>
        {children}
      </Card>
  );
}

export {XCard}