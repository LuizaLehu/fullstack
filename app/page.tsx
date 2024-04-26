import { TItem } from "@/types/data"
import { getAll, deleteItem } from '@/repository'
import ListItem from "@/components/list-item/list-item"
import Link from "next/link";

export default async function Home() {
  const data = await getAll() as TItem[]
  console.log(data)
  const listItems = data.map(item =>
    <ListItem item={item} />
  );

  return (
    <main className="container mt-4">
      <h1 className="display-4 mb-4">Items List</h1>
      <ul className="list-group bg-light list-unstyled mb-4">
        {listItems.length > 0 ? (
          listItems
        ) : (
          <li className="list-group-item font-weight-bold" >No items found</li>
        )}
      </ul>
      <div className="mb-4">
        <Link href="/new">
          <p className="btn btn-primary mt-3">Add new item</p>

        </Link>
      </div>
    </main>
  );
}
