import { getMyImages } from "~/server/queries";

export default async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-3">
      {images.map((image) => (
        <div key={image.id} className="w-1/3">
          <img src={image.url} alt={image.name} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
