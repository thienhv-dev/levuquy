/**
 * Utility function to get the correct image path with basePath prefix for GitHub Pages deployment
 * This is useful for cases where Next.js Image component isn't suitable
 */
export function getImagePath(imagePath: string): string {
  // If the path already includes the basePath or is external, return as is
  if (imagePath.startsWith('/levuquy') || imagePath.startsWith('http')) {
    return imagePath
  }
  
  // Get basePath from environment or use default
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/levuquy'
  
  // For local development, you might want to skip basePath
  // Uncomment the following lines if you want to skip basePath in development
  // if (process.env.NODE_ENV === 'development') {
  //   return imagePath
  // }
  
  // Add basePath prefix for production GitHub Pages deployment
  return imagePath.startsWith('/') ? `${basePath}${imagePath}` : `${basePath}/${imagePath}`
}