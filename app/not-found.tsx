import Link from 'next/link'
import Image from 'next/image';
import defImg from './not-found-pic.jpg';
import "./notfound.css";

export default function NotFound() {
    return (

        <main className="testing">
                <Image src={defImg} width={200} height={200} alt="flower" />
                <div className="text">
                    <h1 className="error">404 - Plant Not Found</h1>
                    <p>This is most likely due to our API not returning any reults. This flower does not exist in our APIs database. Please try another search or another image. We apologize for the inconvenience this may have caused.</p>
                    <button className="return"><Link className="link" href="/">Return Home</Link></button>
                </div>
        </main>
    )
}




