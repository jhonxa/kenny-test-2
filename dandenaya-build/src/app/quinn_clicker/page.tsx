import Image from 'next/image'

export default function Home() {
    return(
        <div className="flex bg-white items-center justify-center h-screen text-black">
            hellohellohellohellohellohellohellohello
            <Image
            className="justify-center"
            src="/important.png"
            alt="face"
            width={500}
            height={500}
            />
        </div>

    );
}