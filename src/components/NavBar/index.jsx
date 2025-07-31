import './navbar.scss'
import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <div className="kw-navbar">
                <div className="container">
                    <div className="kw-navbar__inner">
                        <div className="kw-navbar__links">
                            <div>
                                <Link href="/">Home</Link>
                                <Link href="/build">Build resume</Link>
                            </div>
                            <div>
                                <Link className="button --grad" href="/build">Get Started</Link>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}