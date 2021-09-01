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
                className={classNames('button' className)}>
                { children }
            </TAG>
        );
    }
);

Button.displayName = "Button";
