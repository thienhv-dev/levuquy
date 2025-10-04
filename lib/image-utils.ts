/**
 * Utility function to get the correct image path with basePath prefix for GitHub Pages deployment
 * This is needed for regular <img> tags that don't automatically use Next.js basePath
 */
export function getImagePath(imagePath: string): string {
  // If the path already includes the basePath or is external, return as is
  if (imagePath.startsWith('/levuquy') || imagePath.startsWith('http')) {
    return imagePath
  }
  
  // Check if we're in a build/production environment
  // GitHub Actions sets NODE_ENV=production during build
  const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
  
  // In development, return original path
  if (!isProduction) {
    return imagePath
  }
  
  // In production (GitHub Pages), add basePath prefix
  const basePath = '/levuquy'
  return imagePath.startsWith('/') ? `${basePath}${imagePath}` : `${basePath}/${imagePath}`
}