export interface Course {
    id: string;
    title: string;
    lessons: {
        id: string;
        topic: string;
    }[];
    imagePath: string;
}
