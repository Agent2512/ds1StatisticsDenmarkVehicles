import React, { Component } from "react";

import { DataTable } from "../components/DataTable/DataTable";
import {Header} from "../components/Header"

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
        <Header type="main" title="Statistics Denmark Vehicles"/>
        <DataTable/>
      </main>
    )
  }
}
