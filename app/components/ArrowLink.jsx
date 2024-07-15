import Link from 'next/link';
import Image from 'next/image';

const ArrowLink = ({ href, width = 100, height = 100, style, className = "", altText = "Navigation arrow" }) => (
    <Link href={href}>
        <div className={`absolute ml-4 md:ml-8 cursor-pointer animate-bobbing-left z-50 ${className}`}>
            <Image
                src="/logos/arrow.png"
                alt={altText}
                width={width}
                height={height}
                style={style}
            />
        </div>
    </Link>
);

export default ArrowLink;