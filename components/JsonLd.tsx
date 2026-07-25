import React from 'react';

export default function JsonLd() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MarkMe',
    url: 'https://markme-5uj.pages.dev',
    description: 'A warm, focused browser-first Markdown workspace by Manraj Chauhan with instant live preview, split-screen resizing, and automatic browser-local saving.',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Any Browser',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    author: {
      '@type': 'Person',
      name: 'Manraj Chauhan',
      url: 'https://manrajchauhan.com',
      sameAs: [
        'https://www.linkedin.com/in/mrmanrajchauhan/',
        'https://github.com/manrajchauhan',
      ],
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Distraction-free Markdown editing',
      'Instant live HTML preview',
      'Interactive split-screen resizing',
      'DOMPurify security sanitization',
      '100% browser-local storage autosave',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is MarkMe free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, MarkMe is 100% free with no signups, no fees, and no cloud tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are my drafts stored securely in MarkMe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All drafts in MarkMe never leave your browser. They are saved automatically to your browser local storage for complete privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who built MarkMe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MarkMe was designed and developed by Manraj Chauhan, a Technical Lead and Full Stack Developer.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
