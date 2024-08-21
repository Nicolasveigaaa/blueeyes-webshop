import { shopifyFetch } from '..';
import {
  customerCreateMutation,
  customerUpdateMarketingMutation
} from '../mutations/email-marketing';

// Define types for the GraphQL responses
interface CustomerCreateResponse {
  data: {
    customerCreate: {
      customer?: {
        id: string;
        email: string;
      };
      userErrors: {
        field: string;
        message: string;
      }[];
    };
  };
}

interface CustomerUpdateMarketingConsentResponse {
  data: {
    customerEmailMarketingConsentUpdate: {
      customer?: {
        id: string;
      };
      userErrors: {
        field: string;
        message: string;
      }[];
    };
  };
}

// Function to create a customer and update their marketing consent
export async function customerCreateForMarketingEmail(email: string) {
  try {
    // Step 1: Create a new customer
    const createResponse = await shopifyFetch<CustomerCreateResponse>({
      query: customerCreateMutation,
      variables: {
        input: { email } // Ensure the input is correctly structured
      },
      cache: 'no-store'
    });

    const customer = createResponse.body.data.customerCreate.customer;

    if (!customer) {
      const errorMessage =
        createResponse.body.data.customerCreate.userErrors[0]?.message ||
        'Failed to create customer';
      throw new Error(errorMessage);
    }

    // Step 2: Update the customer's email marketing consent
    const updateResponse = await shopifyFetch<CustomerUpdateMarketingConsentResponse>({
      query: customerUpdateMarketingMutation,
      variables: {
        input: {
          customerId: customer.id,
          emailMarketingConsent: {
            marketingState: 'SUBSCRIBED',
            marketingOptInLevel: 'SINGLE_OPT_IN'
          }
        }
      },
      cache: 'no-store'
    });

    const updatedCustomer = updateResponse.body.data.customerEmailMarketingConsentUpdate.customer;

    if (!updatedCustomer) {
      const errorMessage =
        updateResponse.body.data.customerEmailMarketingConsentUpdate.userErrors[0]?.message ||
        'Failed to update marketing consent';
      throw new Error(errorMessage);
    }

    return customer;
  } catch (error) {
    console.error('Error during newsletter signup:', error);
    throw error;
  }
}
