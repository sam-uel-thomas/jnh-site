import Link from 'next/link';
import Image from 'next/image';

const ArrowLink = ({ href, width = 100, height = 100, top = 20, left = 10 }) => (
    <Link href={href}>
        <Image
            src="/logos/arrow.png"
            alt="Arrow"
            width={width}
            height={height}
            className={`absolute ml-8 mt-4 cursor-pointer animate-bobbing-left z-100`}
        />
    </Link>
);

export default ArrowLink;