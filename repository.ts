import { TListItem } from "./types/data"

const BASE_URL = 'localhost:4000'

export async function getAll() {
    const res = await fetch(`http://${BASE_URL}/list`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getItem(id: number) {
    const res = await fetch(`http://${BASE_URL}/items/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

/*export async function deleteItem(id: number) {
    const res = await fetch(`http://${BASE_URL}/items/${id}`, {
        method: 'DELETE'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
} */

export async function deleteItem(id: number) {
    const res = await fetch(`http://${BASE_URL}/items/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error('Failed to delete item');
    }
}

export async function editItem(id: number, newData: Partial<TListItem>) {
    const res = await fetch(`http://${BASE_URL}/items/${id}`, {
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

export async function addNewItem(newItemData: Omit<TListItem, 'id'>) {
    const res = await fetch(`http://${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItemData)
    });

    if (!res.ok) {
        throw new Error('Failed to add new item');
    }

    return res.json();
}