import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className={styles.triangle}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Pagina inicial.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-8 md:py-12 lg:px-12 xl:px-28">
          <Image
            src="/hero-desktop.png"
            alt="Screenshots"
            width={1000}
            height={768}
            className="hidden md:block"
            priority
          />
          <Image
            src="/hero-mobile.png"
            alt="Screenshots"
            width={650}
            height={620}
            className="block md:hidden"
            priority
          />
        </div>
      </div>
      <div className="w-full bg-blue-500 p-16 my-8 ">
        <h2 className="text-2xl text-center my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus velit officiis esse debitis distinctio
          aliquam, porro voluptatem. Delectus hic nam quaerat perferendis ab tempore ratione illum magnam aspernatur
          minus.
        </h2>
      </div>
    </main>
  );
}
