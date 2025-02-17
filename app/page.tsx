"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <main className="flex flex-col items-center p-12 gap-4 bg-slate-100 w-full h-screen">
      <div className="">
        <h1 className="text-6xl font-bold">
          <span className="text-indigo-700">Bem vindo</span> <br />a nossa
          plataforma!
        </h1>
        <p className="pt-4">
          Não é nosso cliente? registre-se{" "}
          <span className="text-indigo-500 underline">
            <a href="/register">agora</a>
          </span>
          .
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Carousel
          className="w-full h-[250px]"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex m-0 w-[250px] h-[250px]">
            <CarouselItem className="w-full m-auto">
              <Image
                src="/img/freepik__upload__36002.png"
                alt="Carousel Image 1"
                width={250}
                height={250}
                layout="fixed"
              />
            </CarouselItem>
            <CarouselItem className="w-full m-auto">
              <Image
                src="/img/freepik__upload__5445.png"
                alt="Carousel Image 2"
                width={250}
                height={250}
                layout="fixed"
              />
            </CarouselItem>
            <CarouselItem className="w-full m-auto">
              <Image
                src="/img/freepik__upload__50636.png"
                alt="Carousel Image 3"
                width={250}
                height={250}
                layout="fixed"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
