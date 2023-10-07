import { Card } from './Card';

import data from '../data.json';
import { Link } from 'react-router-dom';

export const Questions = () => {
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                {data.map((question) => (
                    <Card key={question.id} question={question} />
                ))}
            </div>

            <h3 className="my-4 font-bold text-xl">Other Questions</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                {data.map((question) => (
                    <Card key={question.id} question={question} />
                ))}
            </div>
        </div>
    );
};
