import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/services/firebase";

export async function deleteReview(id: string) {
  const reviewRef = doc(db, "reviews", id);
  return await deleteDoc(reviewRef);
}
