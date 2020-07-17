import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = (post) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          description
          baseUrl
          twitterUsername
          image
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Ustaw bazowy adres Twojej strony w metadanych witryny!');
    return null;
  }

  const basicTitle = post.title || defaults.title;
  const description = post.description || defaults.description;
  const url = new URL(post.path || '', defaults.baseUrl);
  const image = post.image ? new URL(post.image, defaults.baseUrl) : false;

  return (
    <Helmet>
      <title>{basicTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="portfolio" />
      <meta property="og:title" content={basicTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={post.twitterUsername} />
      <meta name="twitter:title" content={basicTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
