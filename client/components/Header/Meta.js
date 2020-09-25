import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {
      //<link rel="shortcut icon" href="/static/favicon.png" />
      //<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    }
    <link
      type="text/css"
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      type="text/css"
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossOrigin="anonymous"
    ></link>
    <title>BoilerPlate || </title>
  </Head>
);

export default Meta;
