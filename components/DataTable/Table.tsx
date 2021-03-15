import { useEffect, useState } from "react"
import { IStatbank } from "./interfaces"

interface Props {
    carTypes: string;
    year: string;
    month: string;
}

export default function Table(props: Props) {
    const [data, setData] = useState<IStatbank>()
    // makes the payload for the api
    const payLoad = {
        table: "BIL5",
        format: "JSONSTAT",
        valuePresentation: "CodeAndValue",
        timeOrder: "Descending",
        variables: [
            {
                code: "BILTYPE",
                values: [
                    props.carTypes,
                ]
            },
            {
                code: "Tid",
                values: [
                    `${props.year}${props.month}`,
                ]
            }
        ]
    };

    useEffect(() => {
        if (props.carTypes && props.month && props.year) {
            // get data form api and sets state
            getData(payLoad).then(json => setData(json))
        }
    }, [props.carTypes, props.month, props.year])

    // Elements is the array to be showed on the page
    const Elements: JSX.Element[] = [];

    // check if error
    if (data?.errorTypeCode && props.carTypes && props.month && props.year) {
        // adds a element to top row on page 
        Elements.push(<div className="row">
            <p>no data jet</p>
        </div>);
    }
    // if api returns a dataset then make elements
    else if (data != undefined && props.carTypes && props.month && props.year) {
        // gets initials values from api
        const values: number[] = data.dataset.value;
        const carTypes = data.dataset.dimension.BILTYPE.category.label;
        const yearMonth = data.dataset.dimension.Tid.category.label;

        // some jsCss if multiple columns  
        const style = {
            row: {
                gridTemplateColumns: `repeat(${Object.keys(carTypes).length + 1}, 1fr)`
            }
        }

        // converts values into elements
        let carTypesElement: JSX.Element[] = [<p key="empty" ></p>];
        Object.keys(carTypes).forEach(i => {
            carTypesElement.push(<p key={carTypes[i]} >{carTypes[i]}</p>)
        })

        let yearMonthElement: JSX.Element[] = [];
        Object.keys(yearMonth).forEach(i => {
            const date: string = yearMonth[i].replace("M", "/")
            yearMonthElement.push(<p key={i} >{date}</p>)
        })

        let valuesElement: JSX.Element[] = [];
        values.forEach(i => {
            valuesElement.push(<p key={i} >{i}</p>)
        })

        // adds a element to top row on page 
        Elements.push(<div style={style.row} className="row" key="topRow">
            {carTypesElement}
        </div>);

        // makes all data rows 
        for (let i = 0; i < yearMonthElement.length; i++) {
            let dataRow: JSX.Element[] = [yearMonthElement[i]];
            const yearMonthLen = yearMonthElement.length

            // makes each column and adds to dataRow
            for (let j = 0; j < valuesElement.length / yearMonthLen; j++) {
                dataRow.push(valuesElement[j * yearMonthLen + i]);
            }

            // adds dataRows to Elements 
            Elements.push(<div style={style.row} className="row" key={`row${i}`} >
                {dataRow}
            </div>);
        }
    };

    return (
        <div className="table" key="table">
            {Elements}
        </div>
    )

    // gets data from api with payload
    function getData(payLoad: object) {
        return fetch('https://api.statbank.dk/v1/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payLoad),
        })
            .then(res => res.json())
    }
}