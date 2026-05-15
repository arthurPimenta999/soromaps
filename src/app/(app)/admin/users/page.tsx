import { Suspense } from "react";
import { getUsers } from "@/actions/users/get-users";
import { Button } from "@/components/ui/button";
import { SaveIcon, UserPlusIcon } from "lucide-react";
import { UsersTableSkeleton } from "@/components/skeletons/users-table-skeleton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/blocks/password-input";
import { Separator } from "@/components/ui/separator";
import { UsersTable } from "./table";
import PageTitle from "@/components/blocks/page-section";
import CreateUserModal from "./_components/create-user-modal";

export default function ManageUsersPage() {
  const usersPromise = getUsers();

  // const testeDialog = (
  //   <Dialog>
  //     <DialogTrigger asChild>{newUserAction}</DialogTrigger>

  //     <DialogContent
  //       showCloseButton={false}
  //       className="py-6 px-0 border border-black/20"
  //     >
  //       <div className="flex flex-col gap-4">
  //         {/* titulo e sub */}
  //         <div className="flex flex-col gap-1  px-6">
  //           <DialogTitle className="font-semibold text-lg">
  //             Criar usuário
  //           </DialogTitle>
  //           <span className="font-light text-sm text-muted-foreground">
  //             Preencha os campos abaixo para criar um novo usuário.
  //           </span>
  //         </div>

  //         <Separator className="bg-black/20" />

  //         {/* conteudo */}
  //         <div className="flex flex-col gap-4  px-6">
  //           {/* input com label */}
  //           <div className="flex flex-col gap-1">
  //             <span className="font-semibold text-md">Nome</span>
  //             <Input className="shadow-none" placeholder="Digite um nome..." />
  //           </div>
  //           {/* input com label */}
  //           <div className="flex flex-col gap-1">
  //             <span className="font-semibold text-md">Senha</span>
  //             <PasswordInput
  //               className="shadow-none"
  //               placeholder="Digite uma senha..."
  //               type="password"
  //             />
  //           </div>
  //         </div>

  //         <Separator className="bg-black/20" />

  //         <div className="flex flex-row justify-end gap-3 w-full  px-6">
  //           <Button variant={"secondary"} className="flex flex-row gap-2">
  //             <span>Cancelar</span>
  //           </Button>
  //           <Button className="flex flex-row gap-2.5">
  //             <span>Salvar</span>
  //             <SaveIcon size={4} />
  //           </Button>
  //         </div>
  //       </div>
  //     </DialogContent>
  //   </Dialog>
  // );

  return (
    <div>
      <PageTitle
        title="Gerenciar Usuários"
        description="Gerencie os usuários do sistema"
        actions={<CreateUserModal />}
      />
      <div className="p-8">
        <Suspense fallback={<UsersTableSkeleton />}>
          <UsersTable usersPromise={usersPromise} />
        </Suspense>
      </div>
    </div>
  );
}
