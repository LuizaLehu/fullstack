
"use client"
import React from 'react';
import { deleteItem } from '@/repository';

type DeleteItemProps = {
  id: number;
  onDelete: () => void;
}

const DeleteItemPage: React.FC<DeleteItemProps> = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteItem(id);
      onDelete();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteItemPage;