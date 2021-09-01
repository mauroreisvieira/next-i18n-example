import * as React from "react";
import { i18next } from '@/lib/lang';
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';

interface NavProps {
    className?: string;
}
export const Nav: React.FC<NavProps> = ({ className, children }: NavProps & React.PropsWithChildren<NavProps>): React.ReactElement => {
    const router = useRouter();
    const { language } = i18next;
    return (
        <>
            <nav className={classNames(className, 'font-medium')}>
                {
                    [
                        { name: 'home', path: '/'},
                        { name: 'about', path: 'about'},
                    ].map(menu => (
                    <Link key={menu} href={`/${language}/${menu.path}`}>
                        <a className={classNames("jpy-3", {
                            "text-red-500 pointer-events-none": router.pathname.includes(menu.name)
                        })}>
                            { i18next.t(menu.name) }
                        </a>
                    </Link>
                )) }
                { children }
            </nav>
        </>
    );
};
