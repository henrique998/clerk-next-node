import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <SignIn />
    </main>
  )
}