import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.notes} />
      </section>
    );
  }
}

export default DetailPageWrapper;
