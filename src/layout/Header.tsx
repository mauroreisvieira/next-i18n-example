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
    <header className={classNames('w-full mb-4', className)}>
        <Nav />
    </header>
);
