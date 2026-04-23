import { ColorType } from '@/config/converters';

type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export function getConverterFaqs(sourceColor: ColorType, targetColor: ColorType): FaqItem[] {
  const source = sourceColor.toUpperCase();
  const target = targetColor.toUpperCase();
  const sourceToTarget = `${source} to ${target}`;

  return [
    {
      category: 'Conversion',
      question: `How do I convert ${sourceToTarget}?`,
      answer: `Enter your ${source} value in the converter, then copy the calculated ${target} result. Our tool returns the closest practical conversion instantly.`,
    },
    {
      category: 'Accuracy',
      question: `How accurate is a ${sourceToTarget} converter?`,
      answer: `Conversion accuracy is typically very high for digital color models. When converting between screen and print systems, small differences can happen because some colors do not map perfectly between ${source} and ${target}.`,
    },
    {
      category: 'Color Matching',
      question: `Why does my converted ${target} color look slightly different?`,
      answer: `Color appearance can change based on display calibration, lighting conditions, material, and print process. Use the converted value as a reference and run a visual proof when color precision is critical.`,
    },
    {
      category: 'Education',
      question: `What is the difference between ${source} and ${target}?`,
      answer: `${source} and ${target} are different color systems used for different workflows. ${source} is commonly used in one stage of design production, while ${target} is often required for another, so conversion helps keep color intent consistent.`,
    },
    {
      category: 'Use Cases',
      question: `When should I use ${sourceToTarget} conversion?`,
      answer: `Use ${sourceToTarget} conversion when handing designs across tools, preparing brand assets, moving from digital to print workflows, or matching color values for production and approval.`,
    },
  ];
}
