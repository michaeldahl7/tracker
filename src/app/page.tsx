import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Workouts() {
  const workouts = await db.query.workouts.findMany();

  console.log(workouts);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      {workouts.map((workout) => (
        <div key={workout.id} className="m-4 rounded-lg bg-gray-800 p-4">
          <h2 className="text-xl font-semibold">{workout.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full p-4 text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Workouts />
      </SignedIn>
    </main>
  );
}
