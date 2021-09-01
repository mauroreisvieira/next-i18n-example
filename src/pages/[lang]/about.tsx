import * as React from "react";
import { Page } from "@/layout/Page";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";

import { i18next, getAllLanguageSlugs, getLanguage } from '@/lib/lang';

const About: React.FC = (): React.ReactElement => {
    const  ABOUT_LIST = i18next.t('about_list', { returnObjects: true });

    return (
        <Page meta={i18next.t('about_seo')}>
            <h1>{ i18next.t('about_title') }</h1>

              <ul className="list-disc">
                { Object.values(ABOUT_LIST).map((item, key) => (
                    <li key={key}>
                        { item }
                    </li>
                )) }
            </ul>
        </Page>
    );
};

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

export default About;
