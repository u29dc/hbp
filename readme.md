# Hugo Boilerplate

[![Netlify status](https://img.shields.io/netlify/6f8ac45e-119f-4840-9f3a-f261bf4609c6?style=flat&colorA=000000&colorB=000000)](https://app.netlify.com/sites/hbp/deploys)
[![Website status](https://img.shields.io/website?url=https%3A%2F%2Fhbp.netlify.app?style=flat&colorA=000000&colorB=000000)](https://hbp.netlify.app)
[![W3 validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fhbp.netlify.app?style=flat&colorA=000000&colorB=000000)](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fhbp.netlify.app)

[![HSTS Preload](https://img.shields.io/hsts/preload/hbp.netlify.app?style=flat&colorA=000000&colorB=000000)](https://hstspreload.org/?domain=hbp.netlify.app)
[![Mozilla Observatory](https://img.shields.io/mozilla-observatory/grade-score/hbp.netlify.app.svg?style=flat&colorA=000000&colorB=000000)](https://observatory.mozilla.org/analyze/hbp.netlify.app)
[![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fhbp.netlify.app?style=flat&colorA=000000&colorB=000000)](https://securityheaders.com/?q=https%3A%2F%2Fhbp.netlify.app&followRedirects=on)
[![Google CSP](https://img.shields.io/badge/-Google%20CSP%20Evaluator-000000?style=flat&colorA=000000&colorB=000000)](https://csp-evaluator.withgoogle.com/?csp=http://hbp.netlify.app)
[![Google PageSpeed](https://img.shields.io/badge/-Google%20PageSpeed-000000?style=flat&colorA=000000&colorB=000000)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fhbp.netlify.app)
[![KeyCDN Performance](https://img.shields.io/badge/-KeyCDN%20Performance-000000?style=flat&colorA=000000&colorB=000000)](https://tools.keycdn.com/performance?url=https://hbp.netlify.app)

---

## Development

> Requirements: [Hugo](https://github.com/gohugoio/hugo/releases) and [Node.js](https://nodejs.org/en/download/current)

```
git clone https://github.com/u29dc/hbp.git
```

## Theme Usage

> [Example](example)

### Features

-   Resources
    -   JS
        -   [Babel](https://gohugo.io/hugo-pipes/babel/) and [ESBuild](https://gohugo.io/hugo-pipes/js/)
        -   Compiled, uglified and minified
    -   SASS
        -   [PostCSS](https://gohugo.io/hugo-pipes/postcss/)
        -   Auto prefixed and minified
    -   Fingerprinting and SRI
    -   Inline resources
-   Basic security header tested with:
    -   [Mozilla Observatory](https://observatory.mozilla.org)
    -   [Security Headers](https://securityheaders.com)
    -   [Google CSP Evaluator](https://csp-evaluator.withgoogle.com)
    -   Already HSTS preloaded when deployed with [Vercel](https://vercel.com/docs/v2/edge-network/encryption)/[Netlify](https://docs.netlify.com/domains-https/https-ssl)
-   Performance tested with:
    -   [Google Lighthouse](https://developers.google.com/speed/pagespeed/insights)
    -   [KeyCDN](https://tools.keycdn.com/performance)
-   PWA
    -   Service worker to cache and serve site offline
-   Other
    -   Preloading fonts and resources
    -   SEO and relevant meta
    -   W3C validation
-   Deployment
    -   Configuration for [Vercel](https://vercel.com) and [Netlify](https://netlify.com)
