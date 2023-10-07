import { Card } from './Card';

import data from '../data.json';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/Global';

export const Answers = () => {
    const { user } = useContext(GlobalContext);
    const { answers } = user;
    return (
        <div className="mt-16 py-2 px-4">
            <h3 className="mb-4 font-bold text-xl">My Answers</h3>
            {answers?.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                    {answers.map((answer) => (
                        <Card key={answer.id} question={answer} />
                    ))}
                </div>
            ) : (
                <div className="text-xl font-bold opacity-30 h-60 flex items-center justify-center">
                    <h2> You have not answered any questions yet :( </h2>
                </div>
            )}
        </div>
    );
};
