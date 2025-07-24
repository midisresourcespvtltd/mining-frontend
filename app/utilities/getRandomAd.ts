// Utility to get random ads from an array
export function getRandomAd<T>(ads: T[], count: number): T[] {
  if (!Array.isArray(ads) || ads.length === 0 || count <= 0) return [];
  const shuffled = [...ads].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
