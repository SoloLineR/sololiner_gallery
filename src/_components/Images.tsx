import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
export default async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-3">
      {images.map((image) => (
        <div key={image.id} className="flex size-48 flex-col">
          <Link href={`/images/${image.id}`}>
            <Image src={image.url} alt={image.name} width={192} height={192} />
          </Link>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
