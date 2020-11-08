# Hugo Boilerplate

[![Website status](https://img.shields.io/website?url=https%3A%2F%2Fhbp.vercel.app?style=flat&colorA=000000&colorB=000000)](https://hbp.vercel.app)
[![W3 validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fhbp.vercel.app?style=flat&colorA=000000&colorB=000000)](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fhbp.vercel.app)
[![HSTS Preload](https://img.shields.io/hsts/preload/hbp.vercel.app?style=flat&colorA=000000&colorB=000000)](https://hstspreload.org/?domain=hbp.vercel.app)
[![Mozilla Observatory](https://img.shields.io/mozilla-observatory/grade-score/hbp.vercel.app.svg?style=flat&colorA=000000&colorB=000000)](https://observatory.mozilla.org/analyze/hbp.vercel.app)
[![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fhbp.vercel.app?style=flat&colorA=000000&colorB=000000)](https://securityheaders.com/?q=https%3A%2F%2Fhbp.vercel.app&followRedirects=on)
[![Google CSP](https://img.shields.io/badge/-Google%20CSP%20Evaluator-000000?style=flat&colorA=000000&colorB=000000)](https://csp-evaluator.withgoogle.com/?csp=http://hbp.vercel.app)
[![Google PageSpeed](https://img.shields.io/badge/-Google%20PageSpeed-000000?style=flat&colorA=000000&colorB=000000)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fhbp.vercel.app)

---

## Development

> Requirements: [Hugo](https://github.com/gohugoio/hugo/releases) and [Node.js](https://nodejs.org/en/download/current)

```bash
git clone https://github.com/u29dc/hbp.git
```

## Theme Usage

Download the [example site directory](example) from [here](https://downgit.github.io/#/home?url=https://github.com/u29dc/hbp/tree/master/example&fileName=hbp&rootDirectory=hbp)

### Install theme

1. Use from `themes/` directory:

    ```bash
    # clone hbp repository to themes/hbp
    yarn theme
    ```

2. Use as Hugo module. With Go installed, in [`config.yml`](example/config.yml) [you can](https://gohugo.io/hugo-modules/use-modules/):

    ```yml
    # remove theme config
    theme: hbp

    # add hugo module
    module:
        imports:
            - path: github.com/u29dc/hbp
    ```

    ```bash
    # initialize module
    hugo mod init github.com/<user>/<repo>

    # update
    # and also replace theme script in package.json with
    hugo mod get -u
    ```

---

```bash
# install dependencies
yarn

# run on localhost:1111
yarn dev

# production build to /public
yarn build
```

## Features

This theme doesn't have page layouts, it is intended to be a boilerplate to fast start with various best practices

-   JS compiled, uglified and minified with [Babel](https://gohugo.io/hugo-pipes/babel/) and [ESBuild](https://gohugo.io/hugo-pipes/js/)
-   SASS auto prefixed and minified with [PostCSS](https://gohugo.io/hugo-pipes/postcss/)
-   Fingerprinting and SRI
-   Inline resources
-   SEO and relevant meta
-   Preloading fonts and resources
-   Offline PWA
-   Deployment configuration for [Vercel](https://vercel.com) and [Netlify](https://netlify.com)
-   W3C validation
-   Performance and security tests
    -   [Google Lighthouse](https://developers.google.com/speed/pagespeed/insights)
    -   [KeyCDN](https://tools.keycdn.com/performance)
    -   [Mozilla Observatory](https://observatory.mozilla.org)
    -   [Security Headers](https://securityheaders.com)
    -   [Google CSP Evaluator](https://csp-evaluator.withgoogle.com)
