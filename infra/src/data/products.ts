// infra/src/data/products.ts
interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    count: number;
}

export const products: Product[] = [
    {
        id: "7567ec4b-b10c-48c5-9345-fc73df49c414",
        title: "Book of Secrets",
        description: "Unravel ancient mysteries with this captivating read.",
        price: 29.99,
        count: 10
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73df49c415",
        title: "Magic Wand",
        description: "A mystical tool for novice spellcasters.",
        price: 150.00,
        count: 5
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73df49c416",
        title: "Potion of Healing",
        description: "Restores vitality and cures minor ailments.",
        price: 15.50,
        count: 20
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73df49c417",
        title: "Dragon Scale Shield",
        description: "Provides immense protection in battle.",
        price: 500.00,
        count: 2
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73df49c418",
        title: "Amulet of Wisdom",
        description: "Enhances cognitive abilities and grants insight.",
        price: 75.25,
        count: 8
    }
];