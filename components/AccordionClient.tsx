"use client";

import { ReactNode } from 'react';
import Accordion from './Accordion';

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  iconPosition?: 'left' | 'right';
  titleClassName?: string;
  paddingClassName?: string;
  contentClassName?: string;
};

export default function AccordionClient(props: AccordionProps) {
  return <Accordion {...props} />;
}
