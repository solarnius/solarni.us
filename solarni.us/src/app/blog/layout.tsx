import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col max-w-2xl items-start text-start justify-start px-4">
            <div className="flex items-center gap-1">
              <Image
                src="/favicon.ico"
                alt="solarnius"
                width={16}
                height={16}
              />
              <h1 className="font-bold my-4 text-xs">
                <Link href="/" className="underline">
                  solarni.us
                </Link>{" "}
                blog
              </h1>
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
