import * as React from "react";
import { Nav } from "@/layout/Nav";
import classNames from "classnames";

const { useEffect } = React;

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({
    className,
}: HeaderProps): React.ReactElement => (
    <header className={classNames('bg-gray-800', className)}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <Nav />
        </div>
    </header>
);
