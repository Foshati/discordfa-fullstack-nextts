import { UserProfile } from "./(auth)/_components/profile/user-profile";
import { ModeToggle } from "@/components/ModeToggle";

export default function HomePage() {
  return (
    <div>
      <UserProfile />
      <ModeToggle />
    </div>
  );
}
