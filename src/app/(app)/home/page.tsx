"use client";

import { Card } from "@/components/ui/card";
import { Map as MapComponent, MapControls } from "@/components/ui/map";

export default function Page() {
  return (
    <div className="h-full w-full">
      <Card className="h-full rounded-none p-0 overflow-hidden border-0 shadow-none">
        <MapComponent center={[-23.533, -47.463]} zoom={10}>
          <MapControls />
        </MapComponent>
      </Card>
    </div>
  );
}
