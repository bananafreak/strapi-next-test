import gql from 'graphql-tag';

const RESPEKT_PAGE_QUERY = gql`
  query RespektPage {
    respektPage {
      header {
        heading
        description
        button {
          label
          link
          type
        }
        image {
          alt
          file {
            url
          }
        }
      }
      selling_points {
        heading
        description
        image {
          url
        }
        link {
          to
          label
        }
      }
      content
    }
  }
`;

export default RESPEKT_PAGE_QUERY;
