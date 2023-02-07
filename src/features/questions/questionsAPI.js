import axios from "axios";
export const getQuestions = async () => {
    axios.get(`https://the-trivia-api.com/api/questions`)
        .then(res => {
            return res;
        })
}