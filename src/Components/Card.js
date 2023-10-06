import { Tag } from './Tag';

export const Card = ({ question }) => {
    function truncateWithEllipsis(inputString, maxLength = 90) {
        if (inputString.length > maxLength) {
            return inputString.substring(0, maxLength - 3) + '...';
        } else {
            return inputString;
        }
    }

    function truncateTags(tags, maxChars = 30) {
        let truncatedTags = [];
        let currentLength = 0;

        for (let tag of tags) {
            // Check if adding the current tag would exceed the character limit
            if (currentLength + tag.length <= maxChars) {
                truncatedTags.push(tag);
                currentLength += tag.length;
            } else {
                break; // Stop adding tags if the limit is reached
            }
        }

        // Join the truncated tags with commas
        return truncatedTags;
    }

    return (
        <div className="cursor-pointer relative p-2 rounded-md border-[1px] border-black h-[200px] w-[250px]">
            <span className="font-bold text-lg">
                {truncateWithEllipsis(question.title, 40)}
            </span>
            <hr />
            <p className="text-sm my-2">
                {truncateWithEllipsis(question.body)}
            </p>
            <div className="absolute bottom-2 p-1 left-0 w-full border-t-[1px] text-center text-sm border-t-[#d6d9dc]">
                {truncateTags(question.tags).map((tag) => (
                    <Tag tag={tag} />
                ))}
            </div>
        </div>
    );
};
