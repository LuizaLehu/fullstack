import Link from 'next/link';
import { TListItem } from "@/types/data";
import { deleteItem } from '@/repository';
import EditItemPage from '../edit-item/edit-item';
import { editItem } from '@/repository';
import { EditButton, DeleteButton } from '../buttons';
type ListItemProps = {
    item: TListItem;
    onDelete: (id: number) => Promise<void>;
    onEdit: (newData: Partial<TListItem>) => Promise<void>;
    onItemClick: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onDelete, onEdit, onItemClick }) => {
    const isEditing = false


    const handleDelete = async () => {
        try {
            await deleteItem(item.id);
            onDelete(item.id);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleSaveEdit = async () => {
        try {
            //await onEdit(editedItem);
            //onEdit();
            //setIsEditing(false);
        } catch (error) {
            console.error('Error editing item:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        //  setEditedItem({ ...editedItem, [name]: value });
    };


    return (
        <li>

            <div>
                <div>ID:{item.id}</div>
                <div>Application Hostname:{item.applicationHostname}</div>
                <div>Timestamp:{item.timestamp}</div>
                <div>Type:{item.type}</div>
            </div>
            <div>
                <EditButton id={item.id} />
                <DeleteButton id={item.id} />
            </div>
            <Link href={`/${item.id}`}> go </Link>
            {/* {isEditing && (
                    <EditItemPage
                        item={editedItem}
                        onChange={handleChange}
                        onSave={handleSaveEdit}
                        onCancel={() => setIsEditing(false)} onEdit={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                )} */}
        </li>
    );
};

export default ListItem;