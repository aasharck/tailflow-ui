import Image from "next/image";


export default function Home() {
  return (
    <div><h1>TailFlow UI</h1>

      <div className="text-3xl">My testing place</div>
      <div className="text-2xl">Button</div>
      <button className="bg-black text-white py-2 px-4 rounded-md dark:text-black dark:bg-white dark:hover:bg-slate-200">Submit</button>
      <button className="bg-red-600 text-white py-2 px-4 rounded-md dark:text-black dark:bg-red-600 dark:hover:bg-slate-200">Cancel</button>




      <div className="text-2xl">Card</div>
      <div className="border border-gray-800 rounded-md w-1/4 mx-auto block p-3">
        <div className="">
          <Image src="/ice.jpg" className="mx-auto rounded-md py-4" height={400} width={350} />
        </div>
        <div className="">
          <h4 className="text-xl font-extrabold tracking-tighter ">This is norway!</h4>
        </div>
      </div>
    </div>
      )
}
