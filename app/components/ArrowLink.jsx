import Link from 'next/link';
import Image from 'next/image';

const ArrowLink = ({ href, width = 100, height = 100, style }) => (
    <Link href={href}>
        <Image
            src="/logos/arrow.png"
            alt="Arrow"
            width={width}
            height={height}
            className={`absolute mt-8 ml-8 cursor-pointer animate-bobbing-left`}
            style={style}
        />
    </Link>
);

export default ArrowLink;