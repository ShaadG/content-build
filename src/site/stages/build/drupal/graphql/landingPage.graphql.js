const { FIELD_PROMO } = require('./block-fragments/promo.block.graphql');
/**
 * The top-level page for a section of the website.
 * Examples include /health-care/, /disability/, etc.
 */
module.exports = `
  fragment landingPage on NodeLandingPage {
    entityUrl {
      ... on EntityCanonicalUrl {
        breadcrumb {
          url {
            path
            routed
          }
          text
        }
        path
      }
    }
    entityId
    entityBundle
    entityPublished
    title
    fieldIntroText
    ${FIELD_PROMO}
  }
`;