import FullPageImg from "~/app/components/full-image-page";

export default function ImagePage({ params }: { params: { id: string } }) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  return <FullPageImg props={{ id: idAsNumber }} />;
}
