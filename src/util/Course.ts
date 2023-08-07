export interface Course {
    id: string;
    category: string;
    modules: {
        id: string;
        topic: string;
    }[];
    imagePath: string;
}
