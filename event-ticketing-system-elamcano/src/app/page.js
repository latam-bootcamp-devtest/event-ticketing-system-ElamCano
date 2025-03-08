import Cards from "@/components/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Cards />
      <Link
        href={"/history"}
        className="p-4 self-end bg-slate-400 mr-20 rounded-xl"
      >
        Go to history
      </Link>
    </div>
  );
}
