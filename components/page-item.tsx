import { TItem } from '@/types/data';
import { DeleteButton } from './buttons';
export default function PageItem({ item }: { item: TItem }) {
    return <div>
        <h1>Item Details</h1>
        <div>ID: {item.id}</div>
        <div>Application Hostname: {item.user}</div>
        <div>Timestamp: {item.device}</div>
        <div>Type: {item.type}</div>
        <DeleteButton id={item.id} />
    </div>
}