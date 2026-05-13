import { useState } from "react";

export default function Page() {
  const [teste, setTeste] = useState("Clique no botão");

  async function buscarDados() {
    try {
      const response = await fetch("http://localhost:5068/api/users");

      const data = await response.json();

      setTeste(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setTeste("Erro ao buscar dados");
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Gerenciar Usuários</h1>
      <p className="text-muted-foreground text-sm">
        Controle de acesso e listagem de usuários do sistema.
      </p>
    </div>
  );
}
