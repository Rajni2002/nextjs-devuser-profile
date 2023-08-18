"use client"
import { Button, CircularLoading, Toggle } from '@/components/ui';
import { useState } from 'react';

export default function Home() {
  const [state, setState] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <Toggle state={state} clickHandler={()=>{
        setState(prev => !prev)
      }}/>
      <Button>Click me</Button>
      <CircularLoading />
    </main>
  )
}