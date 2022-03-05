export const headers = ['Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'];

export interface TableDataModel {
    courseId: number,
    startDate: string,
    endDate: string,
    qualificationType: string
}

export interface Courses {
    courses: Course[]
}

export interface Student {
    id: string,
    name: string
}

export interface Course {
    id: string,
    start: string,
    end: string,
    qualification: string,
    students: Student[]
}

export const fetchData = () => fetch('https://www.qualsafe.com/getCourses.php?action=getUnpaid');

export function stripFunction(text: string) {
    let newText = text.trim();
    return  newText.slice(
        newText.indexOf('(') + 1,
        (newText.length - 1) - newText.split('').reverse().join('').indexOf(')')
    );
}
