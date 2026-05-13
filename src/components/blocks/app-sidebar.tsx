import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
  ChevronsUpDownIcon,
  PencilIcon,
  UserCircleIcon,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  return (
    <Sidebar className="overflow-hidden">
      <div className="flex flex-col h-full justify-between">
        <div>
          <SidebarHeader className="px-5 py-4">
            <div className="flex flex-row gap-3 items-center">
              <div className="bg-black p-1.5 rounded-lg shadow-sm">
                <MapIcon color="#fff" size={20} />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight">
                  Soromaps
                </span>
                <span className="font-medium text-muted-foreground text-[10px] uppercase tracking-wider">
                  Guia de Sorocaba
                </span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarSeparator className="mx-0 w-full bg-black/30" />

          <SidebarContent className="flex flex-col gap-0">
            <SidebarGroup className="flex flex-col gap-0">
              <SidebarGroupLabel>Navegação</SidebarGroupLabel>
              <SidebarGroupContent className="flex flex-col gap-0">
                <RouteButton
                  url="/home"
                  name="Mapa Interativo"
                  icon={<MapIcon size={16} />}
                />
                <RouteButton
                  url="/places"
                  name="Explorar Lugares"
                  icon={<Search size={16} />}
                />
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="flex flex-col gap-0">
              <SidebarGroupLabel>Gestão</SidebarGroupLabel>
              <SidebarGroupContent className="flex flex-col gap-0">
                <RouteButton
                  url="/admin/businesses"
                  name="Gerenciar Comércios"
                  icon={<Store size={16} />}
                />
                <RouteButton
                  url="/admin/users"
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

            <SidebarGroup className="flex flex-col gap-0">
              <SidebarGroupLabel>Sistema</SidebarGroupLabel>
              <SidebarGroupContent className="flex flex-col gap-0">
                <RouteButton
                  url="/profile"
                  name="Meu Perfil"
                  icon={<UserCircle size={16} />}
                />
                <RouteButton
                  url="/login"
                  name="Sair"
                  icon={<LogOut size={16} />}
                />
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>

        <SidebarFooter>
          <Popover>
            <PopoverTrigger>
              <UserSection />
            </PopoverTrigger>

            <PopoverContent
              side="right"
              className="mx-3 p-0 flex flex-col gap-0"
            >
              {/* upper section */}
              <UserSection className="p-3" />

              <Separator className="m-0 p-0 w-full" />

              {/* main content/lower section */}
              <div className="pt-3 pb-1">
                <Button
                  variant={"ghost"}
                  className="flex flex-row gap-3 w-full justify-start"
                >
                  <PencilIcon />
                  <p>Editar perfil</p>
                </Button>

                <Button
                  variant={"ghost"}
                  className="flex flex-row gap-3 w-full justify-start"
                >
                  <UserCircleIcon />
                  <p>Gerenciar Conta</p>
                </Button>

                <Button
                  variant={"ghost"}
                  className="flex flex-row gap-3 w-full justify-start"
                >
                  <LogOutIcon />
                  <p>Sair</p>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </SidebarFooter>
      </div>
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
        className="w-full justify-start gap-2 text-xs h-9 px-2 hover:bg-black hover:text-white transition-all duration-200"
      >
        {icon}
        <span className="font-medium">{name}</span>
      </Button>
    </Link>
  );
}

function UserSection({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-row items-center gap-2 px-2 py-1", className)}
    >
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarFallback className="rounded-lg bg-black text-white">
          US
        </AvatarFallback>
      </Avatar>

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold text-foreground">
          Usuario 01
        </span>
        <span className="truncate text-xs text-muted-foreground">
          usuario@email.com
        </span>
      </div>

      <ChevronsUpDownIcon className="ml-auto size-4 text-zinc-400" />
    </div>
  );
}
