import { TItem } from '@/types/data';
import { DeleteButton, EditButton } from './buttons';

export default function PageItem({ item }: { item: TItem }) {

    const itemDetailsStyle = {
        // Define your CSS styles here
        // Example:
        backgroundColor: '#f0f0f0',
        padding: '10px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        width: '80%',
        maxWidth: '500px',
    };

    const buttonContainerStyle = {
        marginTop: '20px', // Add margin-top for spacing between buttons
        display: 'flex', // Make the buttons flex container
        gap: '20px', // Add gap between buttons
    };


    return <div style={itemDetailsStyle}>
        <h1>Item Details</h1>
        <div>ID: {item.id}</div>
        <div>Hostname: {item.applicationHostname}</div>
        <div>Time: {item.timestamp}</div>
        <div>Device: {item.type}</div>
        <div>User name: {item.user}</div>
        <div>Country: {item.country}</div>
        <div>IP adress: {item.ip}</div>
        <div>Device type: {item.device}</div>
        <div>Country: {item.country}</div>
        <div>Tags: {item.country}</div>
        <div>Dangerous: {item.isDangerous}</div>

        <div style={buttonContainerStyle}>
            <EditButton id={item.id} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
            <DeleteButton id={item.id} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
        </div>
    </div>
}