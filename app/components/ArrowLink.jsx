import Link from 'next/link';
import Image from 'next/image';

const ArrowLink = ({ href, width = 100, height = 100, top = 20, left = 10 }) => (
    <Link href={href}>
        <Image
            src="/logos/arrow.png"
            alt="Arrow"
            width={width}
            height={height}
            className={`absolute top-${top} left-${left} mt-20 mr-4 cursor-pointer animate-bobbing-left`}
        />
    </Link>
);

export default ArrowLink;