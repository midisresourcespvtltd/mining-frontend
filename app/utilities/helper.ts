export async function getAdvertisment() {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";
      console.log('Fetching advertisements from:', `${baseUrl}/api/advertisements`);
      
      const res = await fetch(`${baseUrl}/api/advertisements`, {
        next: {
          revalidate: 3600 // Cache for 1 hour (3600 seconds)
        }
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Failed to fetch advertisements:', {
          status: res.status,
          statusText: res.statusText,
          error: errorText
        });
        throw new Error(`Failed to fetch advertisements: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      // console.log('Successfully fetched news data');
      return data;
    } catch (error) {
      console.error('Error in getAdvertisements:', error);
      throw error;
    }
  }