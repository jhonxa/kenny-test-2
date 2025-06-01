import Image from 'next/image'

export default function Home() {
    return(
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Cavendish_Banana_DS.jpg"
            alt="banana 1"
            width={500}
            height={500}
            />
    );
}