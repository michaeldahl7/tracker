import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      {posts.map((post) => (
        <div key={post.id} className="m-4 rounded-lg bg-gray-800 p-4">
          <h2 className="text-xl font-semibold">{post.name}</h2>
        </div>
      ))}
      Hello, Trackers is in progress!
      <button></button>
    </main>
  );
}
