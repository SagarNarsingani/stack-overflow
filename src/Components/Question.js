import { Tag } from './Tag';
import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getData } from '../utils/getData';
import postData from '../utils/postData';
import { GlobalContext } from '../contexts/Global';

const Answer = ({ answer, user, queId }) => {
    const [ans, setAns] = useState(answer);

    const reactOnAns = async (change) => {
        const data = await postData('react', {
            ansId: answer.id,
            userId: user,
            queId,
            change,
        });

        if (data.status === 200) {
            setAns((prev) => ({ ...prev, upvotes: prev.upvotes + 1 }));
        }
    };
    return (
        <div className="relative">
            <p className="mt-6 mb-16">{ans.body}</p>
            <div className="mb-2 absolute right-0 bottom-0">
                <img
                    alt="user"
                    height={30}
                    width={35}
                    src={'/user.svg'}
                    className="bg-[#d6d9dc] rounded-full inline-block mx-2"
                />
                <section className="inline-block">
                    <p
                        onClick={() => reactOnAns(1)}
                        className="inline-block mx-2 cursor-pointer"
                    >
                        upvote {ans.upvotes}
                    </p>
                    <p className="inline-block mx-2 cursor-pointer">
                        downvote {ans.downvotes}
                    </p>
                </section>
            </div>
            <hr />
        </div>
    );
};

export async function getQuestionData({ params }) {
    const questionData = await getData(`getQuestionData?id=${params.id}`);
    return { question: questionData.question };
}

export const Question = () => {
    const { user } = useContext(GlobalContext);

    const { question } = useLoaderData();
    const [answers, setAnswers] = useState(question?.answers || []);
    const [answer, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        postData('postAnswer', {
            queId: question._id,
            ...question,
            ansBody: answer,
            userId: user,
        });

        setAnswers((prev) => [
            ...prev,
            { body: answer, upvotes: 0, downvotes: 0 },
        ]);

        setAnswer('');
    };

    return (
        <div className="mt-16 px-4 py-14 w-4/5 mx-auto">
            <h1 className="text-2xl">{question?.title}</h1>
            <div className="mb-2">
                {question?.tags?.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </div>
            <hr />
            <p className="my-6">{question?.body}</p>

            <Link to={`/ask?id=${question?._id}`}>
                <section className="cursor-pointer text-right text-sm">
                    Edit
                </section>
            </Link>
            <h3 className="mt-2 font-bold text-xl">Answers</h3>
            <>
                {answers?.map((ans) => (
                    <Answer
                        key={ans.id}
                        answer={ans}
                        user={user}
                        queId={question?._id}
                    />
                ))}
            </>

            <textarea
                name="body"
                placeholder="Please enter your answer here..."
                className="mb-4 mt-16 resize-none block px-2 py-1 w-full text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                rows={10}
                onChange={(e) => setAnswer(e?.target?.value)}
                value={answer}
            />

            <button
                onClick={handleSubmit}
                disabled={!answer?.length}
                className="bg-[#0a95ff] disabled:opacity-70 disabled:cursor-not-allowed text-white px-2 pb-1 rounded-md"
            >
                {' '}
                Submit{' '}
            </button>
        </div>
    );
};
