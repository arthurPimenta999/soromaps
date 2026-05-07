"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map as MapComponent, MapControls } from "@/components/ui/map";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { BookImageIcon, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ReviewPost from "./_components/review-post";
import User from "@/types/user";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [snap, setSnap] = useState<number | string | null>(0.3);

  /**
   *  Sets the default coordinates  visibility of the map
   */
  const [viewport, setViewport] = useState({
    center: [-47.463448773593726, -23.533653509871126] as [number, number],
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isFullyExpanded = snap === 1;

  if (!mounted) {
    return <div className="h-screen w-full bg-background" />;
  }

  const mockUser: User = {
    id: "1",
    username: "Usuario Teste",
    avatarUrl: "https://github.com/shadcn.png",
  };

  return (
    <div
      ref={setContainer}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* 1. CAMADA DO MAPA */}
      <div
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-500",
          isFullyExpanded ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
      >
        {!isFullyExpanded && (
          <MapComponent viewport={viewport} onViewportChange={setViewport}>
            <MapControls position="top-right" />
          </MapComponent>
        )}
      </div>

      {/* 2. COMPONENTE DE DRAWER */}
      {container && (
        <Drawer
          open={true}
          modal={false}
          snapPoints={[0.3, 1]}
          activeSnapPoint={snap}
          setActiveSnapPoint={setSnap}
          dismissible={false}
        >
          <DrawerContent
            container={container}
            className={cn(
              "absolute z-50 transition-all duration-500 ease-in-out border-t shadow-none h-full",
              isFullyExpanded
                ? "rounded-t-none border-t-0"
                : "rounded-t-[32px] bg-background/95 backdrop-blur-md",
            )}
          >
            {/* Handle visual */}
            <div className="mx-auto mt-4 h-1.5 w-12 shrink-0 rounded-full bg-zinc-300" />

            <DrawerHeader className="pb-2">
              <div className="flex items-center justify-between px-4">
                <DrawerTitle className="text-2xl font-bold tracking-tight">
                  Explorar Sorocaba
                </DrawerTitle>

                {isFullyExpanded ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSnap(0.3)}
                    className="gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <MapIcon size={14} />
                    Ver Mapa
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSnap(1)}
                    className="gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <BookImageIcon size={14} />
                    Ver Feed
                  </Button>
                )}
              </div>
            </DrawerHeader>

            {/* Área de Conteúdo */}
            <section className="overflow-y-auto px-8 py-4">
              {/* reviews list */}
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold tracking-tight">
                  Últimas Avaliações
                </span>

                <ReviewPost
                  user={mockUser}
                  content="Experiência incrível! O ambiente é super agradável e o prato principal estava impecável. Recomendo muito o risoto de cogumelos."
                />

                <ReviewPost
                  user={mockUser}
                  content="Experiência incrível! O ambiente é super agradável e o prato principal estava impecável. Recomendo muito o risoto de cogumelos."
                />
              </div>
            </section>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
