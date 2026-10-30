import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata:Metadata={title:{default:"Ujjwal Bhatt | Full Stack Developer",template:"%s | Ujjwal Bhatt"},description:"Portfolio of Ujjwal Bhatt, a Full Stack Developer focused on React.js, Next.js, TypeScript, Node.js, APIs, and automation-driven products.",openGraph:{title:"Ujjwal Bhatt | Full Stack Developer",description:"Building scalable web applications and automation-driven products.",type:"website"},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
