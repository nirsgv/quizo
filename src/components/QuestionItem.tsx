import { Question } from '../types';

const QuestionItem = (props: Question): JSX.Element => {

    const handleClick = (idx: number) => {
        if (idx === props.correctAnswer) alert('Correct answer');
        else alert("Wrong answer")
    };

    return (
        <>
            <h2>{props.body}</h2>
            <ol>
                {props.answers.map((answer, idx) => <li key={idx} onClick={() => handleClick(idx)}>{answer}</li>)}
            </ol>
        </>
    )
}
export default QuestionItem;