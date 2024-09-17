import Link from "next/link";

const mockImg = [
  "https://utfs.io/f/ee6a052e-e98d-44d4-b73e-0e91c8a60d89-xn84y1.png",
  "https://utfs.io/f/5246f5e6-aaed-4267-8f0f-884e6699821b-4rer39.png",
  "https://utfs.io/f/e4c69f80-07ed-46ce-bee9-bde7b72b600e-vin4lc.png",
  "https://utfs.io/f/d07e25ec-46ff-4d75-803e-621422d7fd6e-4rrsep.png",
];
const mockData = mockImg.map((img, index) => ({
  id: index + 1,
  img,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-3">
        {mockData.map((img) => {
          return (
            <div key={img.id}>
              {" "}
              <img className="w-48" src={img.img} />{" "}
            </div>
          );
        })}
      </div>
    </main>
  );
}
