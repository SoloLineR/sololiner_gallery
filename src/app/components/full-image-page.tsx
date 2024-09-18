import { getImage } from "~/server/queries";

export default async function FullPageImg({
  props,
}: {
  props: { id: number };
}) {
  const images = await getImage(props.id);
  return <img src={images.url} alt={images.name} className="w-96" />;
}
