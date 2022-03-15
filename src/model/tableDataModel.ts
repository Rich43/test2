export const headers = ['Course Id', 'Start Date', 'End Date', 'Qualification Type'];

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