export interface Course {
    id: string;
    category: string;
    lessons: {
        id: string;
        topic: string;
    }[];
    imagePath: string;
}
