import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Review } from "@/types/review";

interface ReviewPostProps {
  review: Review;
}

export default function ReviewPost({ review }: ReviewPostProps) {
  // Simples formatação de data se o createdAt existir
  const dateLabel = review.createdAt 
    ? new Date(review.createdAt.seconds * 1000).toLocaleDateString()
    : "Agora mesmo";

  return (
    <Card className="shadow-none flex flex-col gap-3">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.username}`} />
            <AvatarFallback>{review.username[0]}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-medium">{review.username}</span>
            <span className="text-xs text-muted-foreground">
              Avaliou • {dateLabel}
            </span>
          </div>
          
          <div className="ml-auto flex items-center gap-1">
             <span className="text-sm font-semibold">{review.rating}</span>
             <span className="text-yellow-500">★</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-foreground/90 leading-relaxed">
          {review.content}
        </p>
      </CardContent>
    </Card>
  );
}

