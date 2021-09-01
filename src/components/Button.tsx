import * as React from "react";
import classNames from "classnames";

const { forwardRef } = React;

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends ButtonType {
    children: React.ReactNode;
}

export const Button = forwardRef(
    (
        {
            children,
            href,
            className,
            ...otherProps
        }: ButtonProps,
        ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>
    ): React.ReactElement => {
        const TAG = href ? "a" : "button";

        return (
            <TAG
                {...otherProps}
                ref={ref}
                href={href}
                className={classNames('w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md', className)}>
                { children }
            </TAG>
        );
    }
);

Button.displayName = "Button";
