import Link from 'next/link';
import { TItem } from "@/types/data";
import { deleteItem } from '@/repository';
import EditItemPage from '../edit-item/edit-item';
import { editItem } from '@/repository';
import { EditButton, DeleteButton } from '../buttons';


type ListItemProps = {
    item: TItem;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {

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

            <Link href={`/${item.id}`}>
                Details →
            </Link>

        </li>
    );
};

export default ListItem;