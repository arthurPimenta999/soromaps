import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { Review } from "@/types/review";

export async function getReviews(): Promise<Review[]> {
  const reviewsRef = collection(db, "reviews");
  const q = query(reviewsRef, orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Review[];
}
