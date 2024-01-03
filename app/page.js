import Navbar from "@/components/Navbar";




export default function Home() {
  return (
   <main>
  <Navbar/>
    <section className="p-4 pt-32 max-w-4xl mx-auto">
      <div className="max-w-md mb-8">
      <h1 className="text-6xl font-bold ">Your one link <br/>for everything</h1>
     <h2 className="text-slate-500 text-xl mt-4 font-serif">Share your links, social profiles, contact info and more on one page</h2>
      </div>
      <form className=" items-center shadow-lg shadow-gray-400 inline-flex">
        <span className="bg-white py-4 pl-4">linktree.to/</span>
        <input className="py-4" type="text" placeholder="username"/>
        <button type="submit" className="bg-blue-500 text-white py-4 px-6">Join For Free</button>
      </form>
    </section>
   </main>
  )
}
