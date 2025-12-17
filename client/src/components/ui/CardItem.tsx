import Image from "next/image";
import {  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter, } from "@/src/components/ui/Card";
import Button from "@/src/components/ui/Button";

export default function CardItem() {
  return (
    <div className="h-auto bg-zinc-50 font-sans dark:bg-black">
        <Card className="w-[320px]">
            <CardContent>
              <div className="h-50 round-5 bg-red-50">img</div>
            </CardContent>
            <CardHeader>
              <CardTitle>제목</CardTitle>
              <CardDescription>
                desc
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="flex justify-start gap-5">
                <p>작성자</p>
                <p>2024년 12월 16일</p>
              </div>
            </CardFooter>
        </Card>
    </div>
  );
}
                                                                                             