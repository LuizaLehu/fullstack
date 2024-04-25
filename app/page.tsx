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
    <main>
      <ul>{listItems}</ul>
      <Link href="/new">Add</Link>
    </main>
  );
}
