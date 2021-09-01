import * as React from "react";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { Page } from "@/layout/Page";
import { i18next, getAllLanguageSlugs, getLanguage } from "@/lib/lang";
import { Button } from "@/components/Button";

const Home: React.FC = (): React.ReactElement => (
  <Page meta={i18next.t("home_seo")}>
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{i18next.t("home_title")}</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Get started
          </Button>
        </div>
      </div>
    </div>
  </Page>
);

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

export default Home;
