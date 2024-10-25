import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Application</h1>
          <div>
            <SignedOut>
              {/* Directly using SignInButton without a function wrapper */}
              <SignInButton>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-semibold mb-5">Welcome to the App!</h2>
        <p className="text-gray-700">
          This is a simple application built with Clerk and Tailwind CSS. Explore and enjoy!
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 p-5 text-center">
        <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
      </footer>
    </div>
  );
}
