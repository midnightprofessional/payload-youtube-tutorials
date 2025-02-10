import React from 'react'
import { Button } from './ui/button'

export default function HelloWidget() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className=" flex-1 p-5 rounded-lg text-center text-5xl bg-[#29707a]">
        Hello Payload 🧨
      </div>
      <Button variant="outline">Click me</Button>
    </div>
  )
}
