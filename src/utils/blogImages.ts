const fallbackImages = [
  '/images/blog/blog-ai-01.jpg',
  '/images/blog/blog-ai-02.jpg',
  '/images/blog/blog-ai-03.jpg',
  '/images/blog/blog-ai-04.jpg',
  '/images/blog/blog-ai-05.jpg',
  '/images/blog/blog-ai-06.jpg',
  '/images/blog/blog-ai-07.jpg',
  '/images/blog/blog-ai-08.jpg',
  '/images/blog/blog-ai-09.jpg',
  '/images/blog/blog-ai-10.jpg',
  '/images/blog/blog-ai-11.jpg',
  '/images/blog/blog-ai-12.jpg',
  '/images/blog/blog-ai-13.jpg',
  '/images/blog/blog-ai-14.jpg',
  '/images/blog/blog-ai-15.jpg',
  '/images/blog/blog-ai-16.jpg',
  '/images/blog/blog-ai-17.jpg',
  '/images/blog/blog-ai-18.jpg',
  '/images/blog/blog-ai-19.jpg',
  '/images/blog/blog-ai-20.jpg',
  '/images/blog/blog-ai-21.jpg',
];

/** Assign a stable public image path to posts that do not define their own cover. */
export const getBlogFallbackImage = (identifier: string): string => {
  const hash = [...identifier].reduce((total, character) => total + character.codePointAt(0)!, 0);
  return fallbackImages[hash % fallbackImages.length];
};
