"use client"

import { Typewriter } from "react-simple-typewriter"

export default function TypeWriter({ title }: { title: string[] }) {
  return <Typewriter words={title} loop cursor />
}
