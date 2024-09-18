import { getMyImages } from "~/server/queries";
import Image from "next/image";
export default async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-3">
      {images.map((image) => (
        <div key={image.id} className="flex size-48 flex-col">
          <Image src={image.url} alt={image.name} width={192} height={192} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
