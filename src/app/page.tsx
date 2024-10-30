import Footer from "@/components/Footer";
import Header from "../components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-red-500 mb-4">
          IT Services for GIST
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Infoteam is the Organization of Developers for GIST Undergraduate
          Students
        </p>
        <div className="animate-bounce text-gray-400 text-2xl">↓</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
