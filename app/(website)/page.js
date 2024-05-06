import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";





export default async function Home() {
  const session = await getServerSession(authOptions)
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({owner: session?.user?.email});
  return (
   <main>
  
    <section className="pt-24 ">
      <div className="max-w-md mb-8">
      <h1 className="text-6xl font-bold ">Your one link <br/>for everything</h1>
     <h2 className="text-slate-500 text-xl mt-4 font-serif">Share your links, social profiles, contact info and more on one page</h2>
      </div>
   <HeroForm session={session} page={page}/>
    </section>
   </main>
  )
}
