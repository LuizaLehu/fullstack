"use client"
import { deleteItem } from "@/repository";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';

type EditButtonProps = {
    id: number;
};

type DeleteButtonProps = {
    id: number;
};

export function EditButton({ id }: EditButtonProps) {


    return <Link className="btn btn-primary mr-4" href={`/${id}/edit`}>Edit</Link>
}

export function DeleteButton({ id }: DeleteButtonProps) {
    const router = useRouter()

    const handleDelete = async () => {
        await deleteItem(id)
        router.push('/')
    };
    return <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
}