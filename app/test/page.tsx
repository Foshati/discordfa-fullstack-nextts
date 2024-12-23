import { Auth } from "../(auth)/_lib/helper/auth"

export default async function Page() {
  const { userId, redirectToSignIn } = await Auth()

  if (!userId) return redirectToSignIn()

  return <h1>Hello, {userId}</h1>
}