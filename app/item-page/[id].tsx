/* import { GetServerSideProps } from 'next';
import { TItem } from '@/types/data';

type ItemDetailsProps = {
  item: TItem;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  return (
    <div>
      <h1>Item Details</h1>
      <p>ID: {item.id}</p>
      <p>User: {item.user}</p>
      <p>Country: {item.country}</p>
      <p>IP: {item.ip}</p>
      <p>Device: {item.device}</p>
      <p>Tags:</p>
      <ul>
        {item.tags.map((tag, index) => (
          <li key={index}>
            <p>Title: {tag.title}</p>
            <p>Description: {tag.descriptions}</p>
            <p>Color: {tag.color}</p>
          </li>
        ))}
      </ul>
      <p>Is Dangerous: {item.isDangerous ? 'Yes' : 'No'}</p>
    </div>
  );
};

/* export const getServerSideProps: GetServerSideProps<ItemDetailsProps> = async ({ params }) => {
  // Fetch item details based on the ID from the URL parameter
  const { id } = params;
  const res = await fetch(`http://api.example.com/items/${id}`);
  const item = await res.json();
*/
/*
export const getServerSideProps: GetServerSideProps<ItemDetailsProps> = async ({ params }) => {
  // Ensure that params is not undefined
  if (!params || !params.id) {
    return {
      notFound: true, // Return a 404 page if params or params.id is undefined
    };
  }

  // Fetch item details based on the ID from the URL parameter
  const id = params.id as string; 
  const res = await fetch(`http://api.example.com/items/${id}`);
  const item = await res.json();

  return {
    props: {
      item,
    },
  };
};

export default ItemDetails;  
*/

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getItem } from '@/repository';
import { TListItem } from '@/types/data';

const ItemDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<TListItem | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (id) {
          const itemData = await getItem(Number(id));
          setItem(itemData);
        }
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Item Details</h1>
      <div>ID: {item.id}</div>
      <div>Application Hostname: {item.applicationHostname}</div>
      <div>Timestamp: {item.timestamp}</div>
      <div>Type: {item.type}</div>
    </div>
  );
};

export default ItemDetailsPage;