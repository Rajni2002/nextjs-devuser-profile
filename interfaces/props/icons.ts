import * as React from 'react';

export default interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}