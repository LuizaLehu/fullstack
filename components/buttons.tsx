"use client"
import { deleteItem, editItem } from "@/repository";
import { useRouter } from "next/navigation";
import { revalidateTag } from 'next/cache'
import { TListItem } from "@/types/data";
import { DeviceType } from "@/app/const";

type EditButtonProps = {
    id: number;
    onEdit: () => Promise<void>; // Add onEdit prop
};

type DeleteButtonProps = {
    id: number;
};


export function EditButton({ id, onEdit }: EditButtonProps) {
    const router = useRouter();


    const handleEdit = async () => {
        try {
            // Assume editedData contains the new data for the item
            const editedData: Partial<TListItem> = {
                applicationHostname: "updated_hostname",
                timestamp: "2028-12-01T12:00:00.000Z",
                type: "MOBILE" as DeviceType
            };
            await editItem(id, editedData);
            await onEdit(); // Call the onEdit function passed from ListItem
            router.refresh(); // Refresh the page to reflect changes
        } catch (error) {
            console.error('Error editing item:', error);
        }
    };

    return <button onClick={handleEdit}>Edit</button>
}

export function DeleteButton({ id }: DeleteButtonProps) {
    const router = useRouter()

    const handleDelete = async () => {
        await deleteItem(id)
        router.refresh()
        router.push('/')
    };
    return <button onClick={handleDelete}>Delete</button>
}