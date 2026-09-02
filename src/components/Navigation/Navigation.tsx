import "./Navigation.scss";

function Navigation() {
    return (
        <nav className="navigation">
        <div className="navigation__links">
            <button type="button">About Me</button>
            <button type="button">Selected Work</button>
            <button type="button">Archive</button>
            <button type="button">Currently</button>
            <button type="button">Contact</button>
        </div>
        </nav>
    );
}

export default Navigation;