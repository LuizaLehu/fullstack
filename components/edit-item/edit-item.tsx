"use client"
import { useState } from "react";
import { TListItem } from "@/types/data";
import { editItem } from '@/repository';

type EditItemProps = {
    item: TListItem;
    onEdit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
    onSave: () => Promise<void>;
    onCancel: () => void;
}

const EditItemPage: React.FC<EditItemProps> = ({ item, onEdit }) => {
    "use client"
    const [editedItem, setEditedItem] = useState(item);
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    const handleSave = async () => {
        try {
            await editItem(item.id, editedItem);
            onEdit();
            setIsEditing(false);
            //console.log("isEditing after saving:", isEditing);

        } catch (error) {
            console.error('Error editing item:', error);
        }
    };

    return (
        <div>
            <input type="text" name="applicationHostname" value={editedItem.applicationHostname} onChange={handleChange} />
            <input type="text" name="timestamp" value={editedItem.timestamp} onChange={handleChange} />
            <input type="text" name="type" value={editedItem.type} onChange={handleChange} />
            {isEditing && <button onClick={handleSave}>Save</button>}
        </div>
    );
};

export default EditItemPage;

function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
