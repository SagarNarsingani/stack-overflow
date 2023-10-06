import { Card } from './Card';

import data from '../data.json';

export const Answers = () => {
    return (
        <div className="mt-16 py-2 px-4">
            <h3 className="mb-4 font-bold text-xl">My Answers</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7">
                {data.map((answer) => (
                    <Card key={answer.id} question={answer} />
                ))}
            </div>
        </div>
    );
};
