import HeroForm from "@/components/forms/HeroForm";





export default function Home() {
  return (
   <main>
  
    <section className="pt-24 ">
      <div className="max-w-md mb-8">
      <h1 className="text-6xl font-bold ">Your one link <br/>for everything</h1>
     <h2 className="text-slate-500 text-xl mt-4 font-serif">Share your links, social profiles, contact info and more on one page</h2>
      </div>
   <HeroForm/>
    </section>
   </main>
  )
}
