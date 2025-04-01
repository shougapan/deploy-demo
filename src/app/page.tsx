import Image from "next/image";

export default function Home() {
  return (
<div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Hello, welcome to the deployment demo.</h2>
  <p className="text-lg text-gray-600 mb-6">The purpose of this page is to deploy a very basic Next.js website.</p>
  
  <p className="text-lg text-gray-600 mb-4">You will learn:</p>
  
  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
    <li>Terminal</li>
    <li>Github</li>
    <li>Vercel</li>
  </ul>

  <p className="mt-6 text-xl text-center font-medium text-gray-700">Please have fun!</p>
</div>
  );
}
