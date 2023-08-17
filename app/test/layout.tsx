import { ChidrenPropType } from '@/interfaces/props/layouts';
import React, { Suspense } from 'react';
import Loading from './loading';

const TestLayout = ({ children }: ChidrenPropType): React.ReactNode => {
    return (
        <div>
            <h1>Test Page</h1>
            <Suspense fallback={<Loading />}>
                <p>I&apos;m Layout</p>
                {children}
            </Suspense>
        </div>
    );
};

export default TestLayout;
