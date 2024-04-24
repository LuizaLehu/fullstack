"use client"
import { deleteItem } from "@/repository";
import { useRouter } from "next/navigation";
import { revalidateTag } from 'next/cache'

type ButtonParans = {
    id: number
}

export function EditButton({ id }: ButtonParans) {

    const handleEdit = () => {
        // setIsEditing(true);
    };
    return <button onClick={handleEdit}>Edit</button>
}

export function DeleteButton({ id }: ButtonParans) {
    const router = useRouter()

    const handleDelete = async () => {
        await deleteItem(id)
        router.refresh()
        router.push('/')
    };
    return <button onClick={handleDelete}>Delete</button>
}