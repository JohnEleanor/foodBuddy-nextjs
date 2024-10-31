"use client";

//? Libraries
import Image from "next/image";
import { useRouter } from "next/navigation";
import { liff } from "@line/liff";

//? conponent UI
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // inti
  const initLiff = async () => {
    try {
      await liff.init({ liffId: process.env.LINE_LIFF_ID });
      if (liff.isLoggedIn()) {
        router.push("/home");
      }
    } catch (error) {
      console.error("liff init error", error);
    }
  };

  useEffect(() => {
    initLiff();
  });

  const handleLogin = async () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      router.push("/home");
    }
  };

  return (
    <div className="w-full lg:min-h-[1366px] lg:grid lg:grid-cols-2 xl:min-h-[980px]">
      <AspectRatio className="block">
        <Image
          src="https://siamais.co.uk/wp-content/uploads/2023/07/pad-thai-dish-1024x771.jpeg"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover"
          width={200}
          height={200}
        />
      </AspectRatio>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">เข้าสู่ระบบ</h1>
            <p className="text-balance text-muted-foreground">
              กรุณาเข้าสู่ระบบด้วย Line เพื่อใช้ในการเก็บข้อมูล
            </p>
          </div>
          <div className="grid gap-4">
            <Button
              onClick={handleLogin}
              type="button"
              className="bg-lime-600 w-full shadow-lg hover:bg-lime-500"
            >
              Login ด้วย Line Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
