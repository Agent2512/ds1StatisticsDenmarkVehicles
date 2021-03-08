import { ChangeEvent, useState } from "react";
import Form from "./Form";
import Table from "./Table";

export function DataTable() {
    const [selector, setSelector] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>  {
        // normal operation 
        e.target.name == "carTypes" && setSelector(e.target.value);
        e.target.name == "year" && setYear(e.target.value);
        e.target.name == "month" && setMonth(e.target.value);
        // second operation
        e.target.name == "year" && setMonth("");

        if (e.target.name == "reset") {
            setSelector("");
            setYear("");
            setMonth("");
        }
    }

    return (
        <>
            <Form handleChange={handleChange} carTypes={selector} year={year} month={month} />
            <Table carTypes={selector} year={year} month={month}/>
        </>
    )
}