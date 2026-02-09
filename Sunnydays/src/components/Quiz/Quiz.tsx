import { onboardingQuizquestions } from "../../data/onboardingQuizQuestions"
import { useState } from "react";
import { QuizQuestion } from "../../types";
import Question from "./Question";

interface QuizProps {
    id: number, 
    questionText: string;
    answerOptions:[];
    userAnswer: string;
}

const [question, setQuestion] = useState<QuizQuestion>() {
    id: 0,
    questionText: "",
    answerOptions: ["A", "B", "C", "D"],
    userAnswer: "",
}

// handle question change

export default function Quiz(onboardingQuizQuestions: QuizProps) {

    const quiz = onboardingQuizQuestions.map(question => 
        {question.id 
            })
    return (
        <Question id={quiz}, onQuestion={handleQuestionNumber}/>
    )

}