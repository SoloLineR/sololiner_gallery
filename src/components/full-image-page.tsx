import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export default async function FullPageImg({
  props,
}: {
  props: { id: number };
}) {
  const images = await getImage(props.id);

  const uploderInfo = await clerkClient.users.getUser(images.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={images.url}
          alt={images.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg font-bold">
          {images.name}
        </div>
        <div>Uploded by {uploderInfo.fullName}</div>
        <div>Created on {images.createdAt.toLocaleDateString()}</div>
        <div>
          <form
            action={async () => {
              "use server";
              await deleteImage(props.id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
