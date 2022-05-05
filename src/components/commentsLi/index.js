import "./style.css";

export const LiCommentsItem = ({ li }) => {
  return (
    <div>
      <div className="comentarios">
        <ul className="listComments">
          <li className="commentBox">
            <strong>{li.name}:</strong> {li.comment}
          </li>
        </ul>
      </div>
    </div>
  );
};
