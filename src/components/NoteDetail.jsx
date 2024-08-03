import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";

function NoteDetail({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
