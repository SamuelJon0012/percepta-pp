
const Header = (props) => {
    return <div>
        <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
}

export default Header;