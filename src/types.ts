export interface Question {
    name: string;
    id: string;
    body: string;
    answers: string[];
    correctAnswer: number;
    difficulty: number;
}

export type direction = 'previous' | 'next';
