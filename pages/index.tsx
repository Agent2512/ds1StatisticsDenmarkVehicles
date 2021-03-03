import { Component } from "react";

interface Props {

}
interface State {
  apiData: object;
}


export default class IndexPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      apiData: {}
    }
  }

  api = () => {
    const payLoad = {
      table: "BIL5",
      format: "JSONSTAT",
      valuePresentation: "CodeAndValue",
      timeOrder: "Descending",
      variables: [
        {
          code: "BILTYPE",
          values: [
            "4000101002",
            "4000104001",
            "4000102001",
            "4000106001",
            "4000103001"
          ]
        },
        {
          code: "Tid",
          values: [
            "2021M01"
          ]
        }
      ]
    }

    fetch('https://api.statbank.dk/v1/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payLoad),
    }).then(res => res.json())
      .then(json => this.setState({apiData: json}))



  }

  render() {
    return (
      <main id="index">
        <header className="mainHeader">
          <h1>Statistics Denmark Vehicles</h1>
        </header>
        <form>

        </form>
        <table>
          
        </table>
      </main>
    )
  }
}
