import { formatTimecode, readingTime } from '~/utils/timecode';

export async function getPosts() {
  const modules = import.meta.glob('../articles.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      const text = await import(`../articles.${slug}.mdx?raw`);
      const readTime = readingTime(text.default);
      const timecode = formatTimecode(readTime);

      return {
        slug,
        timecode,
        frontmatter: post.frontmatter,
      };
    })
  );

  const allPosts = posts.filter(p => !p.frontmatter.featured);
  const featuredPost = posts.find(p => p.frontmatter.featured);

  return { posts: allPosts, featured: featuredPost };
}