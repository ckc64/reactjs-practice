import Button from '../components/Button'

const Header = ({title}) => {

    const onClick = () => {
        console.log('click')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="black" text="Add" />
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
