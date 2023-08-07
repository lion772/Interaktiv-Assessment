export interface Course {
    id: string;
    category: string;
    modules: {
        id: string;
        topic: string;
        progress: number;
        missing: number;
    }[];
    imagePath: string;
}
