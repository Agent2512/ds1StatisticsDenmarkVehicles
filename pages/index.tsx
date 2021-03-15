import React, { Component } from "react";

import { DataTable } from "../components/DataTable/DataTable";

interface Props {

}
interface State {

}

export default class IndexPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }


  render() {
    return (
      <main id="index">
        <DataTable/>
      </main>
    )
  }
}
