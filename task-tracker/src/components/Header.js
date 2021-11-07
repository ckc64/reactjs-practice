
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
//CSS style in js
// const  headingStyle = {
//     color: 'red',
// }

//default title
Header.defaultProps = {
    title: 'Task Tracker',
}
export default Header
