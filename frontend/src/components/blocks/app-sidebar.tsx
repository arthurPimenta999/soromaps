import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarSeparator } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
    TargetIcon,
    LayoutDashboard,
    FileText,
    BarChart3,
    Users,
    Package,
    Truck,
    Boxes,
    Wallet,
    ArrowUpRight,
    ArrowDownLeft,
    Receipt,
    User,
    Settings2,
    Link,
    LogOut
} from "lucide-react";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="px-5">
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black p-1 rounded-md">
                        <TargetIcon color="#fff" size={20} />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">Header</span>
                        <span className="font-normal text-muted-foreground text-xs">subtitle</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent className="flex flex-col gap-0">
                        <RouteButton name="Visão Geral" icon={<LayoutDashboard size={16} />} />
                        <RouteButton name="Relatórios" icon={<FileText size={16} />} />
                        <RouteButton name="Estatísticas" icon={<BarChart3 size={16} />} />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Gestão</SidebarGroupLabel>
                    <SidebarGroupContent className="flex flex-col gap-0">
                        <RouteButton name="Clientes" icon={<Users size={16} />} />
                        <RouteButton name="Produtos" icon={<Package size={16} />} />
                        <RouteButton name="Fornecedores" icon={<Truck size={16} />} />
                        <RouteButton name="Estoque" icon={<Boxes size={16} />} />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Financeiro</SidebarGroupLabel>
                    <SidebarGroupContent className="flex flex-col gap-0">
                        <RouteButton name="Fluxo de Caixa" icon={<Wallet size={16} />} />
                        <RouteButton name="Contas a Pagar" icon={<ArrowDownLeft size={16} />} />
                        <RouteButton name="Contas a Receber" icon={<ArrowUpRight size={16} />} />
                        <RouteButton name="Notas Fiscais" icon={<Receipt size={16} />} />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Configurações</SidebarGroupLabel>
                    <SidebarGroupContent className="flex flex-col gap-0">
                        <RouteButton name="Perfil" icon={<User size={16} />} />
                        <RouteButton name="Usuários" icon={<Settings2 size={16} />} />
                        <RouteButton name="Integrações" icon={<Link size={16} />} />
                        <RouteButton name="Sair" icon={<LogOut size={16} />} />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    );
}

interface RouteButtonProps {
    name: string
    icon?: React.ReactNode
}

function RouteButton({ name, icon }: RouteButtonProps) {
    return (
        <Button variant="ghost" className="w-full justify-between text-xs h-8 hover:bg-black hover:text-white">
            {name}
            {icon}
        </Button>
    );
}