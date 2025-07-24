const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

export async function fetchAds() {
  const res = await fetch(`${baseUrl}/api/advertisements`);
  if (!res.ok) throw new Error("Failed to fetch ads");
  return res.json();
}
