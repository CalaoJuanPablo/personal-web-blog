import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    siteUrl,
    author: {
      photo,
      contacts: {
        twitter: twitterUser
      }
    }
  } = data.site.siteMetadata;

  const {
    title: postTitle,
    description: postDescription,
    slug: postSlug
  } = data.markdownRemark.frontmatter;

  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const postUrl = siteUrl + postSlug;
  const image = siteUrl + photo;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      url={postUrl}
      image={image}
      twitterUser={twitterUser}
    >
        <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
          photo
          contacts {
            twitter
          }
        }
        disqusShortname
        subtitle
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        slug
      }
    }
  }
`;

export default PostTemplate;
