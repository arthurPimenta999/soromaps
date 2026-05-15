import { EllipsisVerticalIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

interface TableActionsProps {
  editHref?: string;
  deleteHref?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function TableActions({
  editHref,
  deleteHref,
  onEdit,
  onDelete,
}: TableActionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="text-sm hover:underline">
          <EllipsisVerticalIcon size={4} />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-fit flex flex-col gap-0 p-1">
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-row justify-between gap-4"
          asChild={!!editHref}
          onClick={onEdit}
        >
          {editHref && (
            <Link href={editHref}>
              <span>Editar</span>
              <PencilIcon size={16} />
            </Link>
          )}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="flex flex-row justify-between gap-4 text-red-500"
          asChild={!!deleteHref}
          onClick={onDelete}
        >
          {deleteHref && (
            <Link href={deleteHref}>
              <span>Excluir</span>
              <Trash2Icon size={16} />
            </Link>
          )}
        </Button>
      </PopoverContent>
    </Popover>
  );
}
