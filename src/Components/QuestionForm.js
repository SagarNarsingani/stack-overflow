import { useState } from 'react';

export const QuestionForm = () => {
    const [question, setQuestion] = useState({ title: '', body: '', tags: '' });

    const handleChange = (event) => {
        const name = event.target.name;
        const val = event.target.value;

        setQuestion((pre) => {
            return {
                ...pre,
                [name]: val,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Question Submitted', question);
    };

    return (
        <div className="mt-16 p-4 w-3/4 mx-auto">
            <form onSubmit={handleSubmit}>
                <label className="mb-1 ml-1 font-bold text-sm">Title</label>
                <p className="text-xs my-1 ml-1 opacity-90">
                    Be specific and imagine you’re asking a question to another
                    person.
                </p>
                <input
                    name="title"
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g., Is there an R function for finding the index of an element in a vector"
                    className="block mb-4 px-2 py-1 w-3/5 text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                />

                <label className="mb-1 ml-1 font-bold text-sm">Body</label>
                <p className="text-xs my-1 ml-1 opacity-90">
                    Introduce the problem and explain what you put in the title.
                </p>
                <textarea
                    name="body"
                    onChange={handleChange}
                    className="mb-4 resize-none block px-2 py-1 w-3/5 text-xs focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                    cols={90}
                    rows={7}
                />

                <label className="mb-1 ml-1 font-bold text-sm">Title</label>
                <p className="text-xs my-1 ml-1 opacity-90">
                    Add comma seprated tags to describe what your question is
                    about
                </p>
                <input
                    name="tags"
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g., R, Programming, Computers, SDE"
                    className="block mb-4 px-2 py-1 w-3/5 text-sm focus:outline-none border-[1.5px] rounded-lg border-[#d6d9dc]"
                />

                <button
                    type="submit"
                    disabled={
                        !question.body && !question.tags && !question.title
                    }
                    className="bg-[#0a95ff] disabled:opacity-70 disabled:cursor-not-allowed text-white px-2 pb-1 rounded-md"
                >
                    {' '}
                    Submit{' '}
                </button>
            </form>
        </div>
    );
};
