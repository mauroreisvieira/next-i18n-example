import * as React from "react";
import { Page } from "@/layout/Page";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";

import { i18next, getAllLanguageSlugs, getLanguage } from "@/lib/lang";

const About: React.FC = (): React.ReactElement => {
  const ABOUT_LIST: [{ title: string; content: string }] = i18next.t(
    "about_list",
    { returnObjects: true }
  );

  return (
    <Page meta={i18next.t("about_seo")}>
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{i18next.t("about_title")}</span>
        </h1>
      </div>

      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 mt-24">
        {Object.values(ABOUT_LIST).map((item) => (
          <div className="relative" key={item.title}>
            <div>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                {item.title}
              </p>
            </div>
            <div className="mt-2 ml-16 text-base text-gray-500">
              {item.content}
            </div>
          </div>
        ))}
      </div>
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

export const getStaticProps = ({
  params,
}: {
  params: { lang: string };
}): GetStaticPropsResult<unknown> => {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
};

export default About;
