import './Header.scss';

function Header(props) {
    return (
        <header className="header">
            <div className="header__body">
                <a className="logo" href="/">{props.websiteName}</a>
            </div>
        </header>
    );
}

export default Header;