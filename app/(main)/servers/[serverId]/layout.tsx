import { redirectToSignIn } from "@/app/(auth)/_lib/helper/redirectToSignIn";
import { Spinner } from "@/components/ui/spinner";
import { CurrentProfile } from "@/lib/currentProfile";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface ServerIdLayoutProps {
  children: React.ReactNode;
  params: Promise<{ serverId: string }>;
}

const ServerIdLayout = async ({ children, params }: ServerIdLayoutProps) => {
  const profile = await CurrentProfile();
  const resolvedParams = await params;

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: resolvedParams.serverId,
      member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className="h-full">
        <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
          secondary sidebar
        </div>
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </Suspense>
  );
};

export default ServerIdLayout;
