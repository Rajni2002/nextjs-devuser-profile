"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const Edit = () => {
    const router = useRouter();
    useEffect(()=>{
        router.push("/edit/profile")
    }, [router])
    return null;
};
export default Edit;
