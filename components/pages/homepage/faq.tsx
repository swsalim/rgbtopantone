import FaqJsonLd from '@/components/structured-data/faq-json-ld';

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What is this tool for?',
    answer:
      'This tool helps you convert RGB values to the closest Pantone color so your digital designs can be translated into reliable print references.',
  },
  {
    id: 6,
    category: 'General',
    question: 'When should I convert RGB to Pantone?',
    answer:
      'Convert RGB to Pantone whenever a project moves from screens to print, such as packaging, branded merchandise, signage, and press-ready files.',
  },
  {
    id: 2,
    category: 'General',
    question: 'Is the tool free to use?',
    answer: 'Yes, this tool is completely free to use and requires no sign-up or login.',
  },
  {
    id: 3,
    category: 'General',
    question: 'Do I get an exact Pantone match every time?',
    answer:
      'Not always. Some RGB colors do not have a one-to-one Pantone equivalent, so we show the closest matches with a similarity score.',
  },
  {
    id: 4,
    category: 'General',
    question: 'Are my inputs stored?',
    answer:
      'No. Color values are processed instantly in the browser workflow and are not stored as uploaded files.',
  },
];

export default function GeneralFaqs() {
  return (
    <>
      <FaqJsonLd questionListElement={faqs} />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-medium text-violet-600 dark:text-violet-400">
          Built for designers, printers, and brand teams
        </p>
        <h2 className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Frequently asked questions
        </h2>
        <p className="mt-6 text-base/7 text-gray-500 dark:text-gray-300">
          Answers to common questions about RGB to Pantone conversion.
        </p>
      </div>
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base/7 font-semibold text-gray-900 dark:text-gray-50">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-500 dark:text-gray-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
