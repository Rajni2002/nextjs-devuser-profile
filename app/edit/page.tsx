"use client";
import { useRouter } from 'next/navigation';
const Edit = () => {
    const router = useRouter();
    router.push("/edit/profile")
    return null;
};
export default Edit;
