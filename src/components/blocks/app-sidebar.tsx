import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  MapIcon,
  Search,
  Store,
  Users,
  MessageSquare,
  UserCircle,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-5 py-4">
        <div className="flex flex-row gap-3 items-center">
          <div className="bg-black p-1.5 rounded-lg shadow-sm">
            <MapIcon color="#fff" size={20} />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight">Soromaps</span>
            <span className="font-medium text-muted-foreground text-[10px] uppercase tracking-wider">
              Guia de Sorocaba
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="overflow-hidden" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-0">
            <RouteButton
              url="/home"
              name="Mapa Interativo"
              icon={<MapIcon size={16} />}
            />
            <RouteButton
              url="/lugares"
              name="Explorar Lugares"
              icon={<Search size={16} />}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Gestão</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-0">
            <RouteButton
              url="/admin/comercios"
              name="Gerenciar Comércios"
              icon={<Store size={16} />}
            />
            <RouteButton
              url="/admin/usuarios"
              name="Usuários"
              icon={<Users size={16} />}
            />
            <RouteButton
              url="/admin/reviews"
              name="Avaliações"
              icon={<MessageSquare size={16} />}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Sistema</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-0">
            <RouteButton
              url="/perfil"
              name="Meu Perfil"
              icon={<UserCircle size={16} />}
            />
            <RouteButton url="/login" name="Sair" icon={<LogOut size={16} />} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-[10px] text-muted-foreground text-center font-medium">
          v1.0.0 - Projeto Acadêmico
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

interface RouteButtonProps {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

function RouteButton({ name, url, icon }: RouteButtonProps) {
  return (
    <Link href={url} className="w-full">
      <Button
        variant="ghost"
        className="w-full justify-between text-xs h-9 px-4 hover:bg-black hover:text-white transition-all duration-200"
      >
        <span className="font-medium">{name}</span>
        {icon}
      </Button>
    </Link>
  );
}
