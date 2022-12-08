

const handleClick = (e) => {
    console.log("Ceci est mon prénom: ", e);
};

function Header() {

    return (<div>
        <h1 onClick={handleClick}>Le site Kasa</h1>
    </div>);
}

export default Header;