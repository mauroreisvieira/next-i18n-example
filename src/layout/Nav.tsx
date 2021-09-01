import * as React from "react";
import { i18next } from '@/lib/lang';
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';

export const Nav: React.FC = (): React.ReactElement => {
    const router = useRouter();
    const { language } = i18next;

    const renderNavLink = () => (
        [
            { name: 'about', path: 'about'},
            { name: 'contact', path: 'contact'},
        ].map(menu => (
            <Link key={menu.path} href={`/${language}/${menu.path}`}>
                <a className={classNames(" text-white px-3 py-2 rounded-md text-sm font-medium", {
                    "bg-gray-900 pointer-events-none": router.pathname.includes(menu.name)
                })}>
                    { i18next.t(menu.name) }
                </a>
            </Link>
        ))
    );

    return (
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={`/${language}`}>
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                    <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                </div>
            </Link>
            <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                    { renderNavLink() }
                </div>
            </div>
        </div>
    );
};
