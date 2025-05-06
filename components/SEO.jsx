import Head from 'next/head';

export default function SEO({ title, description }) {
  const siteTitle = title ? `${title} | TechConsultAI.ke` : 'TechConsultAI.ke - Tech Consulting & AI Solutions';
  const siteDescription = description || 'Expert tech consulting and innovative AI solutions for businesses in Kenya and across Africa.';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:site_name" content="TechConsultAI.ke" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </Head>
  );
}