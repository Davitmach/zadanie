'use client'
import Image from "next/image";
import ManImg from "@/public/man.png";

export default function ManImage() {
  return (
    <div className="pay-page__man_img relative w-[380px] h-[767px] shrink-0">
      <Image quality={100} className="w-full h-full object-cover" src={ManImg} width={124} height={250} alt="Man" />
      <div
        className="gradient w-full h-[80px] absolute bottom-0 left-0"
        style={{
          background: "linear-gradient(180deg, rgba(35, 40, 41, 0) 0%, #232829 100%)",
        }}
      />
    </div>
  );
}
