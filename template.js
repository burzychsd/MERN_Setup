export default ({ markup, css }) => {
    return `<!doctype html>
    <html lang="en">
        <head>
            <meta charset="utc-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>MERN Setup</title>
            <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet">
            ${css}
        </head>
        <body>
            <div id="root">${markup}</div>
            <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
    </html>`
}