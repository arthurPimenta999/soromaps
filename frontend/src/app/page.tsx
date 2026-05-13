import { redirect } from "next/navigation";

/**
 * @file Redirecionamento de rota legado ou condicional.
 * @module app/home
 * @description Este arquivo lida com o redirecionamento automático de usuários
 * que acessam a URL antiga para a nova estrutura de rotas.
 */
export default function Page() {
  return redirect("/home");
}
