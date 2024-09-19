import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { cool_images } from "./db/schema";
import { and, eq } from "drizzle-orm";

import { redirect } from "next/navigation";

export async function getMyImages() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.cool_images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");
  const image = await db.query.cool_images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");

  if (image.userId !== user.userId) throw new Error("Unauthorized");
  return image;
}

export async function deleteImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(cool_images)
    .where(and(eq(cool_images.id, id), eq(cool_images.userId, user.userId)));

  redirect("/");
}
