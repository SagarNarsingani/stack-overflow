import { Card } from './Card';

import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/Global';
import { getData } from '../utils/getData';

export const Answers = () => {
    const { user } = useContext(GlobalContext);

    const [myAnswers, setMyAnswers] = useState([]);

    useEffect(() => {
        getData(`/getAnswers?userId=${user}`).then((data) => {
            console.log(data);
            setMyAnswers(data.answers);
        });
    }, [user]);

    return (
        <div className="mt-16 py-2 px-4">
            <h3 className="mb-4 font-bold text-xl">My Answers</h3>
            {myAnswers?.length ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                    {myAnswers.map((answer) => (
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
