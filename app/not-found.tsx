import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <section className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>This page took a different route.</h1><p>The page may have moved or the link may be incorrect.</p><Link href="/" className="button button-primary"><ArrowLeft size={16}/> Back to home</Link></section>}
