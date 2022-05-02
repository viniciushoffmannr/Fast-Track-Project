import { useState } from "react";
import CommentsProvider, {
  CommentsContext,
} from "../../contexts/CommentsContext";
import css from "./style.css";

export const LiCommentsItem = ({ li }) => {
  return (
    <div>
      <div className="comentarios">
        <ul className="listComments">
          <li key={li.id}>
            <strong>{li.name}:</strong> {li.comment}
          </li>
        </ul>
      </div>
    </div>
  );
};
