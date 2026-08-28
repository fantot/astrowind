const fallbackImages = [
  '/images/blog/blog-ai-01.jpg',
  '/images/blog/blog-ai-02.jpg',
  '/images/blog/blog-ai-03.jpg',
  '/images/blog/blog-ai-04.jpg',
  '/images/blog/blog-ai-05.jpg',
  '/images/blog/blog-ai-06.jpg',
];

/** Assign a stable public image path to posts that do not define their own cover. */
export const getBlogFallbackImage = (identifier: string): string => {
  const hash = [...identifier].reduce((total, character) => total + character.codePointAt(0)!, 0);
  return fallbackImages[hash % fallbackImages.length];
};
