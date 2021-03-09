interface Props {
    handleChange: Function;
    carTypes: string;
    year: string;
    month: string;
}

export default function Form(props: Props) {
    // makes all yearElementOptions
    const yearElement = (() => {
        let element: JSX.Element[] = [];
        // runs 10 years back
        for (let i = 0; i < 10; i++) {
            const value = new Date().getFullYear() - i;
            element.push(<option value={value} >{value}</option>);
        }
        return element
    })();

    // makes all monthElementOptions
    const monthElement = (() => {
        let element: JSX.Element[] = [];
        const date = new Date();

        // if selected year same as current year
        // elseIf selected year not empty
        if (props.year == date.getFullYear().toString()) {

            for (let i = 1; i <= date.getMonth() - 1; i++) {
                const value = i.toLocaleString('en-US', { minimumIntegerDigits: 2 });
                element.push(<option value={`m${value}`} >{i}</option>);
            }
        } else if (props.year != "") {

            for (let i = 1; i <= 12; i++) {
                const value = i.toLocaleString('en-US', { minimumIntegerDigits: 2 });
                element.push(<option value={`m${value}`} >{i}</option>);
            }
        }

        return element;
    })();



    return (
        <form>
            <div className="formGroup" key="carTypes">
                <label>select Vehicle type</label>
                <select required name="carTypes" value={props.carTypes} onChange={(e) => props.handleChange(e)}>
                    <option disabled value=""></option>
                    <option value="4000101002">Personbiler</option>
                    <option value="4000102001">Lastbiler </option>
                    <option value="4000103001">Campingvogne  </option>
                    <option value="4000104001">Busser</option>
                    <option value="4000106001">Motorcykler</option>
                </select>
            </div>

            <div className="formGroup" key="year">
                <label>select year</label>
                <select required name="year" value={props.year} onChange={e => props.handleChange(e)} >
                    <option disabled value=""></option>
                    {yearElement}
                </select>
            </div>

            <div className="formGroup" key="month">
                <label>select month</label>
                <select required name="month" value={props.month} onChange={e => props.handleChange(e)} >
                    <option disabled value=""></option>
                    {monthElement}
                </select>
            </div>
            <button type="button" name="reset" onClick={e => props.handleChange(e)} >reset</button>
        </form>
    )
}