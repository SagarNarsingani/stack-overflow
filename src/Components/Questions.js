import { useContext, useEffect, useState } from 'react';
import { Card } from './Card';

import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/Global';

export const Questions = () => {
    const { user } = useContext(GlobalContext);
    const { questions: myQuestions } = user;

    const otherQuestions = [];

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

            {myQuestions.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                    {myQuestions.map((question) => (
                        <Card key={question.id} question={question} />
                    ))}
                </div>
            ) : (
                <div className="text-xl font-bold opacity-30 h-60 flex items-center justify-center">
                    <h2> You have not asked any questions yet! :(</h2>
                </div>
            )}

            <h3 className="my-4 font-bold text-xl">Other Questions</h3>
            {otherQuestions.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                    {otherQuestions.map((question) => (
                        <Card key={question.id} question={question} />
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
