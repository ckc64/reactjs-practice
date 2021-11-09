import Button from '../components/Button'

const Header = ({title,onAdd,showAdd}) => {

 
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
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
