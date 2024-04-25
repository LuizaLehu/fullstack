
import { TItem } from "./types/data"


//const BASE_URL = 'localhost:4000'
const BASE_URL = 'http://localhost:4000';



export async function getAll() {
    const res = await fetch(`${BASE_URL}/items`, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getItem(id: number): Promise<TItem> {
    const res = await fetch(`${BASE_URL}/items/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }



    return res.json()
}

export async function deleteItem(id: number) {

    try {

        await fetch(`${BASE_URL}/items/${id}`, {
            method: 'DELETE'
        })
    } catch (e) {
        console.log(e)
    }

}


export async function editItem(id: number, newData: Omit<TItem, 'id'>) {
    const res = await fetch(`${BASE_URL}/items/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });

    if (!res.ok) {
        throw new Error('Failed to edit item');
    }

    return res.json();
}

export async function addNewItem(newItemData: Omit<TItem, 'id'>) {
    const items = await getAll();
    const res = await fetch(`http://${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...newItemData,
            id: items.length + 1
        })
    });

    if (!res.ok) {
        throw new Error('Failed to add new item');
    }

    return res.json();
}