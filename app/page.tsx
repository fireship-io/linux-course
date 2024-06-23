import Image from "next/image";
import GitHubLogin from './Login'
import Guestbook from "./Guestbook";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="sm:max-w-xl sm:mx-auto py-10">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
                My Self-hosted App
        </h1>
        <GitHubLogin />
      </div>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <main className="space-y-6">
              <Guestbook />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
