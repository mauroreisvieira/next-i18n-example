import * as React from "react";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { Page } from "@/layout/Page";
import { i18next, getAllLanguageSlugs, getLanguage } from '@/lib/lang';


const Home: React.FC = (): React.ReactElement => (
    <Page meta={i18next.t('home_seo')}>
        <h1>{ i18next.t('home_title') }</h1>
    </Page>
);

export const getStaticPaths = (): GetStaticPathsResult => {
    const paths = getAllLanguageSlugs();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({params}: { params: { lang: string } }): GetStaticPropsResult<unknown> => {
    const language = getLanguage(params.lang);
    return {
        props: {
            language,
        },
    };
};

export default Home;
