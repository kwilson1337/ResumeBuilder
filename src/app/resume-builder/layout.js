import './builder-layout.scss'
import Image from "next/image";

export default function builderLayout({ children }) {
    return (
        <>
            <div className="builder-layout">
                <div className="container">
                    <div className="builder-layout__inner">
                        <div className="builder-layout__col">
                            {children}
                        </div>
                        <div className="builder-layout__col">
                            <Image
                                src="/step-one.jpg"
                                alt="Step one"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}