import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/getPosts";
import Link from "next/link";

export const revalidate = 86400;

export async function generateStaticparams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post => ({
    id: post.id
  })))
}

export async function generateMetadata({params}) {
  
  const {id} = params

  const post = await getPostByName(`${id}.mdx`);

  if (!post) {
    return {
      title: 'Post not found!'
    }
    
  }

  return {
      title: post.meta.title
    }
}

export default async function Post({ params }) {
  const { id } = params
  const post = await getPostByName(`${id}.mdx`);

  if (!post) {
    return (
      <p>Post not found</p>
    )
  }

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-o text-sm">{pubDate}</p>
      <article>{content}</article>
      <p className="mb-10"><Link href={'/'}> Back home</Link></p>
    </>
  )
}