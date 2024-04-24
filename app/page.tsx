
"use client"

//import { useLinkProps } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TListItem } from "@/types/data";
import { getAll, deleteItem } from '@/repository';
import EditItemPage from '@/components/edit-item/edit-item';
import DeleteItemPage from '@/components/delete-item/delete-item';
import { useRouter } from 'next/router';
import ListItem from '@/components/list-item/list-item';
/*
type ListItemProps = {
  item: TListItem;
  onDelete: () => void;
  onEdit: () => void;
  onItemClick: (id: number) => void; 

}


const ListItem: React.FC<ListItemProps> = ({ item, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  //const router = useRouter();

  const handleItemClick = () => {
   // router.push(`/item/${item.id}`);
   onItemClick(item.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await deleteItem(item.id); // Call the deleteItem function from the repository
      onDelete(); // Call the onDelete function passed from the parent component to update the list
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  /* return (
     <li>
       {isEditing ? (
         <EditItemPage item={item} onEdit={() => setIsEditing(false)} />
       ) : (
         <>
           <div>{item.id}</div>
           <div>{item.applicationHostname}</div>
           <div>{item.timestamp}</div>
           <div>{item.type}</div>
           <button onClick={handleEdit}>Edit</button>
           <button onClick={handleDelete}>Delete</button>
         </>
       )}
     </li>
   );
 };  */
/*
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
*/
// testez codul de jos

export default function Home() {
  const [data, setData] = useState<TListItem[]>([]);
  //const [router, setRouter] = useState<any>(null);
  const router = useRouter();

  /*useEffect(() => {
    setRouter(require('next/router'));
  }, []);  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAll() as TListItem[];
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (id: number) => {
    router.push(`/item/${id}`);
  };


  /* const handleDelete = () => {
     fetchData(); // Update the list after deletion
   };  */

  const handleDelete = async (id: number) => {

    try {
      await deleteItem(id);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = () => {

    fetchData(); // Update the list after editing
  };

  return (
    <main>

      <ul>
        {data.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onItemClick={handleItemClick}
          />
        ))}
      </ul>
      <Link href="/new-entry"> {/* Add Link component for navigation */}
        <div className="add-entry-link">Add a new Entry</div>
      </Link>
    </main>
  );
}

function fetchData() {
  throw new Error('Function not implemented.');
}


