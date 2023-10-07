import { useContext, useEffect, useState } from 'react';
import { Card } from './Card';

import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/Global';
import { getData } from '../utils/getData';

export const Questions = () => {
    const { user } = useContext(GlobalContext);
    const [questions, setQuestion] = useState({ my: [], others: [] });

    useEffect(() => {
        getData(`/getQuestions?userId=${user}`).then((data) => {
            setQuestion({
                my: data?.data?.myQuestions,
                others: data?.data?.otherQuestions,
            });
        });
    }, [user]);

    useEffect(() => {});
    return (
        <div className="mt-16 py-2 px-4">
            <div className="flex mb-4 items-center justify-between">
                <h3 className="font-bold text-xl inline-block self-center">
                    My Questions
                </h3>

                <Link to={'/ask'}>
                    <div className="bg-[#0a95ff] text-white px-2 pb-1 rounded-lg right-12 inline-block">
                        Ask Question
                    </div>
                </Link>
            </div>

            {questions.my?.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                    {questions.my.map((question) => (
                        <Card key={question._id} question={question} />
                    ))}
                </div>
            ) : (
                <div className="text-xl font-bold opacity-30 h-60 flex items-center justify-center">
                    <h2> You have not asked any questions yet! :(</h2>
                </div>
            )}

            <h3 className="my-4 font-bold text-xl">Other Questions</h3>
            {questions.others?.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                    {questions.others.map((question) => (
                        <Card key={question._id} question={question} />
                    ))}
                </div>
            ) : (
                <div className="text-xl font-bold opacity-30 h-60 flex items-center justify-center">
                    <h2> There are no questions yet! :(</h2>
                </div>
            )}
        </div>
    );
};
