import { TListItem } from "@/types/data"
import { getAll, deleteItem } from '@/repository'

function ListItem(item: TListItem) {
  return <li>
    <div>{item.id}</div>
    <div>{item.applicationHostname}</div>
    <div>{item.timestamp}</div>
    <div>{item.type}</div>
    <button>EDIT</button>
    <button>DELETE</button>

  </li>
}

export default async function Home() {
  const data = await getAll() as TListItem[]
  console.log(data)
  const listItems = data.map(item =>
    <ListItem {...item} />
  );

  return (
    <main>
      <ul>{listItems}</ul>
    </main>
  );
}
