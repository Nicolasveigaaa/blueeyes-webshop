export const addToCartMutation = /* GraphQL */ `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        email
        acceptsMarketing
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;
