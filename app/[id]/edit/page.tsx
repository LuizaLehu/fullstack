import { getItem } from "@/repository"
import NewEntryForm from "@/components/edit-form"
export default async function ({ params }: { params: { id: number } }) {
    const item = await getItem(params.id)

    return <NewEntryForm item={item} />
}
