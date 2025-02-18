import React from 'react';
import { TextProps } from '../types/interfaces';
import { TextStyle } from '../styles/TextStyle';

export const Text: React.FC<TextProps> = ({ content, style }) => {
  const reactStyle = style instanceof TextStyle ? style.toReactStyle() : style;
  return <span style={reactStyle}>{content}</span>;
};