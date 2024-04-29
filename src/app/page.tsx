import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const workouts = await db.query.workouts.findMany();

  console.log(workouts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      {workouts.map((workout) => (
        <div key={workout.id} className="m-4 rounded-lg bg-gray-800 p-4">
          <h2 className="text-xl font-semibold">{workout.name}</h2>
        </div>
      ))}
      Hello, Trackers is in progress!
      <button></button>
    </main>
  );
}
