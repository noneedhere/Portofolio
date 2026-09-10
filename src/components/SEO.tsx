import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

export function SEO({
  title = 'Alexander Chen — Junior Fullstack Web Developer Portfolio',
  description = 'Alexander Chen — Junior Fullstack Web Developer specializing in React, Next.js, TypeScript, Node.js, and cloud-native architectures. View projects, skills, and experience.',
  url = 'https://alexanderchen.dev',
  image = '',
  type = 'website',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
