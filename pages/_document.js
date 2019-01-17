import Document, { Head, Main, NextScript } from "next/document";
import NextSeo from 'next-seo';

const DEFAULT_SEO = {
  title: 'Desenvolvedores Bonitour',
  description: 'Lista de desenvolvedores que atuam na Bonitour Viagens e Turismo',
  openGraph: {
    type: 'website',
    locale: 'pt-br',
    url: 'http://desenvolvedores.bonitour.com.br',
    title: 'Desenvolvedores Bonitour',
    description: 'Lista de desenvolvedores que atuam na Bonitour Viagens e Turismo',
    image:
      'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
    site_name: 'Desenvolvedores Bonitour Viagens e Turismo',
    imageWidth: 1200,
    imageHeight: 1200
  },
  twitter: {
    handle: '@fabinppk',
    cardType: 'summary_large_image'
  }
};

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <NextSeo config={DEFAULT_SEO} />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="https://d159gdcp8gotlc.cloudfront.net/assets/images/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
