"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"

const Header = () => {
    const {user}=useUser()
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
        {user &&(
            <h1 className="text-2xl">
                {user?.firstName}
                {`'s`} Space
            </h1>
        )}

        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>

            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
      
    </div>
  )
}

export default Header
