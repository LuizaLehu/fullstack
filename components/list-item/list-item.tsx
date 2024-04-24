import Link from 'next/link';
import { useState } from 'react';
import { TListItem } from "@/types/data";
import { deleteItem } from '@/repository';
import EditItemPage from '../edit-item/edit-item';

type ListItemProps = {
    item: TListItem;
    onDelete: (id: number) => Promise<void>;
    onEdit: () => void;
    onItemClick: (id: number) => void; // New prop for handling item click
}

const ListItem: React.FC<ListItemProps> = ({ item, onDelete, onEdit, onItemClick }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleItemClick = () => {
        onItemClick(item.id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleDelete = async () => {
        try {
            await deleteItem(item.id);
            onDelete();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <li onClick={handleItemClick}>
            <div>
                <div>ID:{item.id}</div>
                <div>Application Hostname:{item.applicationHostname}</div>
                <div>Timestamp:{item.timestamp}</div>
                <div>Type:{item.type}</div>
            </div>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                <Link href={`/item/${item.id}`}>
                    <div>{item.id}</div>
                </Link>
            </div>
            {isEditing && <EditItemPage item={item} onEdit={() => setIsEditing(false)} />}
        </li>
    );
};

export default ListItem;