import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:ital@1&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* <body className='bg-fixed dark:text-white bg-gradient-to-tl from-blue-200 to-blue-500 dark:from-dark-500 dark:to-dark-700'> */}
        <body>
          <Main />
          <NextScript />
      </body>
      </Html>
    );
  }
}

export default MyDocument;
