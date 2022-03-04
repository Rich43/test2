export const headers = ['Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'];

export interface TableDataModel {
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
}

export const rows: TableDataModel[] = [
    {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
    {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3}
];
