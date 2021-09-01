import * as React from "react";
import { Page } from "@/layout/Page";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";

import { i18next, getAllLanguageSlugs, getLanguage } from "@/lib/lang";

const Contact: React.FC = (): React.ReactElement => {
  return (
    <Page meta={i18next.t("contact_seo")}>
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{i18next.t("contact_title")}</span>
        </h1>
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

export default Contact;
