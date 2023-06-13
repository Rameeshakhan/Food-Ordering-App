import CartButton from "./CartButton"
import wallpaper from "./wallpaper.jpg"
const Header = (props) => {
    return (
        <>
            <header>
                <h1>React Meals</h1>
                <CartButton onClick ={props.onShowCart} />
            </header>
            <div>
                <img src={wallpaper} alt="Wallpaper" />
            </div>
        </>
    )
}

export default Header
