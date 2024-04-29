// import Link from "next/link";
// import db from "~/server/db";
// import { db } from "@vercel/postgres";

import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      Hello, Trackers is in progress!
      <button></button>
    </main>
  );
}
