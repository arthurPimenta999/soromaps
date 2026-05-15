"use client";

import { use } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type User from "@/types/user";
import TableActions from "@/components/table/table-actions";
import { Checkbox } from "@/components/ui/checkbox";

interface UsersTableProps {
  usersPromise: Promise<User[]>;
}

export function UsersTable({ usersPromise }: UsersTableProps) {
  const users = use(usersPromise);

  console.log(users[0]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox className="border-background data-checked:bg-background data-checked:text-foreground" />
          </TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Criado em</TableHead>
          <TableHead>Atualizado em</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.length > 0 ? (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="w-8">
                <Checkbox className="border-foreground data-checked:bg-foreground data-checked:text-background" />
              </TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell className="text-right">
                <TableActions
                  editHref={`/admin/users/edit/${user.id}`}
                  deleteHref={`/admin/users/delete/${user.id}`}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              Nenhum usuário encontrado.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
