import { getImage } from "~/server/queries";

export default async function ImageModal({
  params,
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");
  const images = await getImage(idAsNumber);
  return (
    <div>
      <img src={images.url} alt={images.name} className="w-96" />
    </div>
  );
}
