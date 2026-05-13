import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { Review } from "@/types/review";
import { reviewFormSchema } from "@/validations/review";

export async function createReview(data: Omit<Review, "id" | "createdAt">) {
  const result = reviewFormSchema.safeParse(data);

  if (!result.success) {
    return { error: result.error };
  }

  return await addDoc(collection(db, "reviews"), {
    ...result.data,
    createdAt: serverTimestamp(),
  });
}
