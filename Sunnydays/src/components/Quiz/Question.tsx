import type { QuizQuestion } from "../../types";

interface QuestionProps {
    id: number;
    questionText: string;
    answerOptions: [];
    userAnswer: string;
}

export default function Question(userInput: QuestionProps) {
    return (
        <section id="Question">
            <h1>Question: {userInput.id}</h1>
            <p>text {userInput.questionText}</p>
            <input {userInput.answerOptions} />
            
        </section>
    );
}