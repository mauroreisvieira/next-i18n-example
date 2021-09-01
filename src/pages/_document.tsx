import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import i18next from 'i18next';

class MyDocument extends Document {
    render(): React.ReactElement {
        return (
            <Html lang={i18next.language}>
                <Head />
                <body className="sans leading-relaxed">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
