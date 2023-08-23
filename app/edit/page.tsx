"use client";
import { useRouter } from 'next/navigation';
const App = () => {
    const router = useRouter();
    return router.push("/edit/profile")
};
export default App;
