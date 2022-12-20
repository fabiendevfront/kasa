/**
 * Component for Tag
 * @param {string} props.txt - The text for the tag.
 * @returns A React component.
 */

const Tag = ({ txt }) => {
    return (
        <span className="tag">{txt}</span>
    );
};

export default Tag;