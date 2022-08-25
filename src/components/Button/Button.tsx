// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

import React from "react"
import { Button, ButtonProps } from '@mantine/core';

interface IXButtonProps {
}

const XButton = (props:ButtonProps) => {
    return <Button>{props.children}</Button>
}

export {XButton}