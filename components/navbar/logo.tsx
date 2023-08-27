import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <div
                style={{
                    color: '#18181B',
                    fontSize: 24,
                    fontWeight: '700',
                    width: 'fit-content'
                }}
            >codedamn</div>
        </Link>
    );
};

export default Logo;
