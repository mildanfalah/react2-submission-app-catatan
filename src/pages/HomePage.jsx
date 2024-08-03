import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
  }

  render() {
    return (
      <section className="homepage">
        <h2>Daftar Catatan</h2>
        <SearchBar />
        <NoteList notes={this.state.notes} />
        <AddButton />
      </section>
    );
  }
}

export default HomePage;
