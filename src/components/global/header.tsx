import { Navbar } from "./navbar";
import { NavbarMobile } from "./navbar-mobile";

export function Header() {
    return (
        <header className="max-w-[1500px] p-6 lg:p-0 mx-auto">
            <div className="hidden lg:flex justify-center lg:mt-20">
                <Navbar />
            </div>
            <div className="mt-4 lg:hidden">
                <NavbarMobile />
            </div>
        </header>
    )
}