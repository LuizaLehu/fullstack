"use client"

function DeleteComponent({ onDelete }) {
    return (
        <button onClick={onDelete}>Delete</button>
    );
}

export default DeleteComponent;