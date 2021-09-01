import * as React from "react";
import Head from "next/head";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";

export type Meta = {
    title: string;
    description: string;
    url: string;
    image?: string;
};

interface PageProps {
    meta: Meta;
}

export const Page: React.FC<PageProps> = ({
    meta,
    children,
}: PageProps & React.PropsWithChildren<PageProps>): React.ReactElement => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>{ meta.title }</title>
            <meta property="og:site_name" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:locale" content="en" />
            <meta property="og:url" content={meta.url} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta content={meta.description} name="description" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport" />
            <link rel="canonical" href={meta.url} />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="robots" content="follow, index" />
            <link rel="apple-touch-icon" sizes="57x57" href="/static/touch/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/static/touch/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/static/touch/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/static/touch/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/static/touch/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/static/touch/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/static/touch/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/static/touch/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/touch/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/static/touch/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/touch/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/static/touch/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/touch/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/static/touch/apple-icon-144x144.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
        </Head>

        <Header />
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            { children }
        </main>
        <Footer />
    </>
);
