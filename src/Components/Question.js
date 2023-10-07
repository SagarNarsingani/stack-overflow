import { Tag } from './Tag';
import data from '../que-ans-data.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Answer = ({ answer }) => {
    return (
        <div className="relative">
            <p className="mt-6 mb-16">{answer.body}</p>
            <div className="mb-2 absolute right-0 bottom-0">
                <img
                    alt="user"
                    height={30}
                    width={35}
                    src={'/user.svg'}
                    className="bg-[#d6d9dc] rounded-full inline-block mx-2"
                />
                <section className="inline-block">
                    <p className="inline-block mx-2 cursor-pointer">
                        upvote {answer.upvotes}
                    </p>
                    <p className="inline-block mx-2 cursor-pointer">
                        downvote {answer.downvotes}
                    </p>
                </section>
            </div>
            <hr />
        </div>
    );
};

export const Question = () => {
    const [answer, setAnswer] = useState('');
    return (
        <div className="mt-16 px-4 py-14 w-4/5 mx-auto">
            <h1 className="text-2xl">{data[0].title}</h1>
            <div className="mb-2">
                {data[0].tags.map((tag) => (
                    <Tag tag={tag} />
                ))}
            </div>
            <hr />
            <p className="my-6">{data[0].body}</p>

            <Link to={`/ask?id=1`}>
                <section className="cursor-pointer text-right text-sm">
                    Edit
                </section>
            </Link>
            <h3 className="mt-2 font-bold text-xl">Answers</h3>
            <>
                {data[0].answers.map((ans) => (
                    <Answer answer={ans} />
                ))}
            </>

            <textarea
                name="body"
                placeholder="Please enter your answer here..."
                className="mb-4 mt-16 resize-none block px-2 py-1 w-full text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                rows={10}
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
            />

            <button
                // onClick={handleSubmit}
                disabled={!answer.length}
                className="bg-[#0a95ff] disabled:opacity-70 disabled:cursor-not-allowed text-white px-2 pb-1 rounded-md"
            >
                {' '}
                Submit{' '}
            </button>
        </div>
    );
};
