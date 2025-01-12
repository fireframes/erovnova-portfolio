export interface FAQData {
  id: number;
  title: string;
  content: string | string[];
  details?: string[];
}

export interface AccordionProps {
  data: FAQData;
}
