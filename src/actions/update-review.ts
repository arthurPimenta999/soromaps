import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { Review } from "@/types/review";
import { reviewFormSchema } from "@/validations/review";

export async function updateReview(
  id: string,
  data: Partial<Omit<Review, "id" | "createdAt">>,
) {
  const result = reviewFormSchema.partial().safeParse(data);

  if (!result.success) {
    return { error: result.error };
  }

  const reviewRef = doc(db, "reviews", id);

  return await updateDoc(reviewRef, result.data);
}
