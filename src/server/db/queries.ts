import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";

export async function getMyWorkouts() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const workouts = await db.query.workouts.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
  });
  return workouts;
}
