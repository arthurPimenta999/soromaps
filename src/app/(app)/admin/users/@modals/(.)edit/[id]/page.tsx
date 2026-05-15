import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import UserForm from "../../../_components/user-form";

interface EditUserModalPageProps {
  userId: string;
}

export default function EditUserModalPage({ userId }: EditUserModalPageProps) {
  return (
    <div>
      <Dialog>
        <DialogContent
          showCloseButton={false}
          className="py-6 px-0 border border-black/20"
        >
          <UserForm onSubmit={() => {}} isEditing />
        </DialogContent>
      </Dialog>
    </div>
  );
}
