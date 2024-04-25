import { TItem, TTag } from '@/types/data';
import { DeleteButton, EditButton } from './buttons';

export default function PageItem({ item }: { item: TItem }) {

    const tagColors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    const labelStyle = {
        fontFamily: 'Arial, sans-serif',  // Change the font family as per your preference
    };

    return (
        <div className="container mt-4">
            <div className="text-center">
                <h1>Item Details</h1>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={labelStyle}>ID: {item.id}</h5>
                    <p className="card-text" style={labelStyle}>Hostname: {item.applicationHostname}</p>
                    <p className="card-text" style={labelStyle}>Time: {item.timestamp}</p>
                    <p className="card-text" style={labelStyle}>Type: {item.type}</p>
                    <p className="card-text">User: {item.user}</p>
                    <p className="card-text">Country: {item.country}</p>
                    <p className="card-text">Ip: {item.ip}</p>
                    <p className="card-text">Device: {item.device}</p>
                    <p className="card-text">Type: {item.type}</p>
                    <p className="card-text">IsDangerous: {item.isDangerous}</p>
                    {/* Tags */}
                    <div className="card-text">Tags:</div>
                    {item.tags.map((tag: TTag, index: number) => (
                        <div key={index} className={`card bg-${tagColors[index % tagColors.length]}`}>
                            <div className="card-body">
                                <p className="card-text">Title: {tag.title}</p>
                                <p className="card-text">Descriptions: {tag.descriptions}</p>
                                <p className="card-text">Color: {tag.color}</p>
                            </div>
                        </div>
                    ))}

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