import { getImage } from "~/server/queries";

export default async function FullPageImg({
  props,
}: {
  props: { id: number };
}) {
  const images = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={images.url}
          alt={images.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{images.name}</div>
      </div>
    </div>
  );
}
