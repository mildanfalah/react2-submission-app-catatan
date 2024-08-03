import React from "react";
import { deleteNote, getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useNavigate, useParams } from "react-router-dom";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  return <DetailPage id={id} onDelete={onDeleteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler() {
    const { id, onDelete } = this.props;
    onDelete(id);
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail onDelete={this.onDeleteHandler} {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
