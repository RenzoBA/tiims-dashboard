import MainActions from "@/components/MainActions";
import Image from "next/image";
import allgraphs from "../../public/assets/images/all-graphs.png";
import graph1 from "../../public/assets/images/graph1.png";
import graph2 from "../../public/assets/images/graph2.png";
import graph3 from "../../public/assets/images/graph3.png";
import graph4 from "../../public/assets/images/graph4.png";

export default function Home() {
  return (
    <div className="pt-20 px-5 -ml-10 sm:ml-0 bg-slate-100 dark:bg-slate-950 w-full">
      <div className="my-10">
        <h1 className=" text-muted-foreground text-lg mb-4">Main Actions:</h1>
        <MainActions />
      </div>

      <div className="flex flex-col justify-center gap-4 items-center px-0 lg:hidden">
        <h1 className="self-start text-muted-foreground text-lg">Graphs:</h1>
        <Image src={graph1} className="rounded-md" alt="graph-1" />
        <Image src={graph2} className="rounded-md" alt="graph-2" />
        <Image src={graph3} className="rounded-md" alt="graph-3" />
        <Image src={graph4} className="rounded-md" alt="graph-4" />
      </div>

      <div className="hidden lg:flex flex-col">
        <h1 className="self-start text-muted-foreground text-lg mb-4">
          Graphs:
        </h1>
        <Image src={allgraphs} className="rounded-md" alt="all-graphs" />
      </div>
    </div>
  );
}
