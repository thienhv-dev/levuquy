/**
 * Utility function to get the correct image path with basePath prefix for GitHub Pages deployment
 * This is needed for regular <img> tags that don't automatically use Next.js basePath
 */
export function getImagePath(imagePath: string): string {
  // If the path already includes the basePath or is external, return as is
  if (imagePath.startsWith('/levuquy') || imagePath.startsWith('http')) {
    return imagePath
  }
  
  // In development, return original path
  if (process.env.NODE_ENV === 'development') {
    return imagePath
  }
  
  // In production (GitHub Pages), add basePath prefix
  const basePath = '/levuquy'
  return imagePath.startsWith('/') ? `${basePath}${imagePath}` : `${basePath}/${imagePath}`
}