import Image from "next/image";
import CardItem from "@/src/components/ui/CardItem";
import Button from "@/src/components/ui/Button";

export default function Home() {
  const testArr = [1,2,3,4];
  return (
    <div>
      <h1 className="bg-black text-white h-15 ml-60 text-center items-center flex gap-2 justify-center">
        <p className="text-lg">Id </p>님의 컬렉션
      </h1>
      <div className="mt-20 ml-60 pl-20">
          <h2 className="text-lg font-bold">최근 작성 한</h2>
          <div className="mt-5 flex min-h-screen justify-start gap-5 bg-zinc-50 font-sans dark:bg-black">
          {testArr.map((x, i) => (
              <CardItem content={x}></CardItem>
            ))
          }
        </div>
      </div>
    </div>
  );
}
                                                                                             