import NewsMenuClient from "./NewsMenu";

async function getCategories() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";
  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: 'force-cache', // Use static cache to avoid repeated hits
  });
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const data = await res.json();
  return data;
}

export default async function NewsMenuData() {
  const { data: categories } = await getCategories();
  return <NewsMenuClient categories={categories} />;
}
