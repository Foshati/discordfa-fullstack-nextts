import { Auth } from "@/app/(auth)/_lib/helper/auth";
import db from "./db";

export const CurrentProfile = async () => {
  const { userId } = await Auth();

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });
  return profile;
};
