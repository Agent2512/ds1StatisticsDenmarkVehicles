/**
 * 
 * @param title what need to be showed in h1
 * @param type it is aa css class and is type+"header"
 */
export function Header(props: {title: string, type: string}) {
    return (
        <header className={`${props.type}header`}>
            <h1>{props.title}</h1>
        </header>
    )
}