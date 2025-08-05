import BurgerIcon from "./BurgerIcon";
import HeaderMenu from "./HeaderMenu";
import Nav from "./Nav";

export default function Header(){
    return (
        <header className="relative flex items-center justify-between py-7">
            <h1 className="text-3xl font-semibold uppercase t-shadow">Tasque</h1>
            <Nav />
            <BurgerIcon>
                <HeaderMenu/>
            </BurgerIcon>
        </header>
    );
}