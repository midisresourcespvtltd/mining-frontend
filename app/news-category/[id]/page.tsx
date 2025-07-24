import CategoryClient from "./CategoryClient";

async function getNewsByCategory(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";
    const res = await fetch(`${baseUrl}/api/news/category/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      // If 404, return empty array instead of throwing
      if (res.status === 404) {
        return [];
      }
      const errorText = await res.text();
      console.error('Failed to fetch news:', {
        status: res.status,
        statusText: res.statusText,
        error: errorText
      });
      throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
    }
    const { data } = await res.json();
    return data || [];
  } catch (error) {
    console.error('Error in getNewsByCategory:', error);
    return [];
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = await getNewsByCategory(id);
  return <CategoryClient news={news} catId={id} />;
}
