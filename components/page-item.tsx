import { TItem } from '@/types/data';
import { DeleteButton, EditButton } from './buttons';

export default function PageItem({ item }: { item: TItem }) {


    return (
        <div className="container mt-4">
            <h1>Item Details</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">ID: {item.id}</h5>
                    <p className="card-text">Hostname: {item.applicationHostname}</p>
                    <p className="card-text">Time: {item.timestamp}</p>
                    <p className="card-text">Device: {item.device}</p>
                    {/* Other details */}
                    <div className="d-flex justify-content-between mt-3">
                        <EditButton id={item.id} />
                        <DeleteButton id={item.id} />
                    </div>
                </div>
            </div>

        </div>
    );
}