import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import '../styles';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const TemplateWrapper = ({
  footerData = null,
  navbarData = null,
  children
}) => (
  <div>
    <Helmet>
      <html lang="fr" />

      <meta name="og:url" content="https://reactbeerlille.org" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="React Beer Lille" />
      <meta
        property="og:description"
        content="Le meetup React lillois des passionné·e·s de houblon"
      />
      <meta
        property="og:image"
        content="https://secure.meetupstatic.com/photos/event/3/e/1/9/600_479415897.jpeg"
      />
      <meta
        name="keywords"
        content="react, lille, javascript, programming, meetup"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ReactBeerLille" />
      <meta name="twitter:creator" content="@ReactBeerLille" />
      <meta name="twitter:title" content="React Beer Lille" />
      <meta
        name="twitter:description"
        content="Le meetup React lillois des passionné·e·s de houblon"
      />
      <meta
        name="twitter:image"
        content="https://secure.meetupstatic.com/photos/event/3/e/1/9/600_479415897.jpeg"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-136135783-2"
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-136135783-2');
        `}
      </script>
    </Helmet>
    <Navbar data={navbarData} />
    <main>{children}</main>
    <Footer data={footerData} />
  </div>
);

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
              tagline
            }
            socialLinks {
              image
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
