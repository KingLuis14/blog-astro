import { getCollection, type CollectionEntry } from "astro:content";
const tagOrder = ["html", "css"];
interface TagWithPosts {
  tag: string;
  posts: CollectionEntry<"blog">[];
}
// Función que obtiene y ordena los blog posts por fecha
export const getOrderedBlogPosts = async (): Promise<
  CollectionEntry<"blog">[]
> => {
  const blogPost = await getCollection("blog");
  return blogPost.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};

// Función que obtiene todas las etiquetas usando los posts ordenados
export const getAllTags = async () => {
  const orderPostDate = await getOrderedBlogPosts();

  const tags = Array.from(
    new Set(
      orderPostDate
        .map(({ data }) => data.tags)
        .flat()
        .sort(),
    ),
  );

  return { tags, orderPostDate };
};
export const getFilterPostByTag = (
  tags: string[],
  blogPosts: CollectionEntry<"blog">[],
): TagWithPosts[] => {
  return tags
    .map((tag) => {
      const postsByTag = blogPosts.filter((post) =>
        post.data.tags.includes(tag),
      );
      return { tag, posts: postsByTag };
    })
    .sort((a, b) => {
      // Ordena las etiquetas según el orden definido en tagOrder
      const indexA = tagOrder.indexOf(a.tag);
      const indexB = tagOrder.indexOf(b.tag);

      // Si ambos están en el tagOrder, ordena según ese índice
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      // Si solo uno de ellos está en el tagOrder, darle prioridad
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      // Si ninguno está en el tagOrder, mantener el orden original
      return 0;
    });
};
