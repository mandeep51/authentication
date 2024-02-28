import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session,'session')
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        Signed in as {session?.user?.name} <br />
        <img src={session?.user?.image ?? '' } height='123px' width='200px'></img>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}