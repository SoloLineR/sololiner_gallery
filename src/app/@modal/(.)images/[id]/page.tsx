import { Modal } from "~/app/_components/Modal";
import FullPageImg from "~/components/full-image-page";

export default function ImageModal({ params }: { params: { id: string } }) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  return (
    <Modal>
      <FullPageImg props={{ id: idAsNumber }} />
    </Modal>
  );
}
