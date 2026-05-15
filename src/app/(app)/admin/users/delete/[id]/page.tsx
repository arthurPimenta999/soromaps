import { redirect } from "next/navigation";

export default function DeleteUserPage() {
  redirect("/admin/users");
}
