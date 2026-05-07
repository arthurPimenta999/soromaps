import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import User from "@/types/user";

interface ReviewPostProps {
  user: User;
  content: string;
}

export default function ReviewPost({ user, content }: ReviewPostProps) {
  return (
    <Card className="shadow-none flex flex-col gap-3">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback />
          </Avatar>

          <div className="flex flex-col">
            <span className="font-medium">Usuario Teste</span>
            <span className="text-xs text-muted-foreground">
              Avaliou Gularica • Há 2 horas
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p>
          Experiência incrível! O ambiente é super agradável e o prato principal
          estava impecável. Recomendo muito o risoto de cogumelos.
        </p>
      </CardContent>
    </Card>
  );
}
