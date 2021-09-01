/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from 'react';
import { AppProps } from 'next/app';
import i18next from 'i18next';

import '../css/tailwind.css';

import '../i18n/init';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	i18next.changeLanguage(pageProps.language);
	return <Component {...pageProps} />;
};

export default App;
