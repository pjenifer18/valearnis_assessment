import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, FormLabel, Button } from "react-bootstrap";


const Questions = (props) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState({});
    const [index, setIndex] = useState(0);

    const getQuestions = async () => {
        let res = await axios.get(`https://the-trivia-api.com/api/questions`);
        return res.data;
    }

    useEffect(() => {
        let data = [];
        const loadQuestions = async () => {
            data = await getQuestions();
            setQuestions(data);
        };
        loadQuestions();
        setTimeout(() => {
            setSelectedQuestion(data[0]);
        }, 1000)

    }, []);

    const onChange = (e) => {
        debugger
        let answerData = {
            id: questions[index].id,
            question: questions[index],
            answer: e.target.form.innerText,
            correctAnswer: questions[index].correctAnswer
        };
    }
    return (
        <Container style={{ marginTop: "20px" }}>
            <>
                <FormLabel>{selectedQuestion?.question}</FormLabel>
                <Form>
                    {selectedQuestion?.incorrectAnswers?.map((answerwrong) => {
                        return <Form.Check style={{ marginLeft: "15px" }}
                            type={'radio'}
                            label={answerwrong}
                            name={"Sample"}
                            onChange={(e) => onChange(e)}
                        />
                    })
                    }
                </Form>

                <Form.Check style={{ marginLeft: "15px" }}
                    type={'radio'}
                    label={selectedQuestion?.correctAnswer}
                    name={"Sample"}
                />
            </>
            {index <= 9 ? <Button onClick={() => {
                if (index + 1 <= 9) {
                    setIndex(index + 1);
                    setSelectedQuestion(questions[index + 1]);
                }
                else {
                    setIndex(10);
                }
            }}>Next</Button> : ""}
            {index > 9 ? <Button>Submit</Button> : ""}
            <div><p>{JSON.stringify(answers)}</p></div>
        </Container>
    )
}

export default Questions;