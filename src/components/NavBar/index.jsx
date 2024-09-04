import './navbar.scss'

export default function NavBar() {
    return (
        <>
            <div className="kw-navbar">
                <div className="container">
                    <div className="kw-navbar__inner">
                        <div className="kw-navbar__links">
                            <div>
                                <a href="/">Home</a>
                                <a href="#">Build</a>
                            </div>
                            <div>
                                <a href="#" className="button --grad">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}