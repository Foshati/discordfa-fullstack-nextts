import { redirectToSignIn } from "@/app/(auth)/_lib/helper/redirectToSignIn";
import db from "./db";
import { currentUser } from "@/app/(auth)/_lib/helper/currentUser";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user?.id,
      name: user?.name,
      email: user?.email,
      userName: user?.username,
      imageUrl: user?.image,
    },
  });

  return newProfile;
};
