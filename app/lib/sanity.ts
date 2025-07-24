import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '9mvf5qfg', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-03-19', // Use today's date or your preferred version
  useCdn: false, // Set to true if you want to use the CDN
  token: process.env.SANITY_API_TOKEN, // Only if you need to write data
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Example query function
export async function getData(query: string, params?: Record<string, any>) {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return null;
  }
} 