"use client"
import Button from '@/components/ui/button';
import { useGlobalContext } from '@/context/app'

export default function Home() {
  const [state, dispatch] = useGlobalContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button buttonType='primary' onClick={() => {
        // dispatch({
        //   type: ActionTypes.SET_PROFILE,
        //   payload: {
        //     displayName: "Rajnikant dash"
        //   }
        // })
      }}>Initialize state</Button>
    </main>
  )
}