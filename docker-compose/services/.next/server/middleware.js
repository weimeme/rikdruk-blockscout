(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 480:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fyzw_2FDownloads_2Ffrontend_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLyhcXC8_2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FKD86XFwvKCg_2FIV9uZXh0KS4rKSkoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvOm5vdHVuZGVyc2NvcmUoKD8hX25leHQpLispIn1d_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLyhcXC8_2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FKD86XFwvKCg_2FIV9uZXh0KS4rKSkoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvOm5vdHVuZGVyc2NvcmUoKD8hX25leHQpLispIn1dfQ_3D_3D_)
});

// NAMESPACE OBJECT: ./configs/app/features/index.ts
var features_namespaceObject = {};
__webpack_require__.r(features_namespaceObject);
__webpack_require__.d(features_namespaceObject, {
  account: () => (account),
  addressVerification: () => (addressVerification),
  adsBanner: () => (adsBanner),
  adsText: () => (adsText),
  beaconChain: () => (beaconChain),
  blockchainInteraction: () => (blockchainInteraction),
  bridgedTokens: () => (bridgedTokens),
  csvExport: () => (csvExport),
  googleAnalytics: () => (googleAnalytics),
  graphqlApiDocs: () => (graphqlApiDocs),
  growthBook: () => (growthBook),
  marketplace: () => (marketplace),
  mixpanel: () => (mixpanel),
  nameService: () => (nameService),
  optimisticRollup: () => (optimisticRollup),
  restApiDocs: () => (restApiDocs),
  safe: () => (safe),
  sentry: () => (sentry),
  sol2uml: () => (sol2uml),
  stats: () => (stats),
  suave: () => (suave),
  txInterpretation: () => (txInterpretation),
  verifiedTokens: () => (verifiedTokens),
  web3Wallet: () => (web3Wallet),
  zkEvmRollup: () => (zkEvmRollup)
});

// NAMESPACE OBJECT: ./configs/app/ui/views/index.ts
var views_namespaceObject = {};
__webpack_require__.r(views_namespaceObject);
__webpack_require__.d(views_namespaceObject, {
  address: () => (address),
  block: () => (block),
  nft: () => (nft),
  tx: () => (tx)
});

// NAMESPACE OBJECT: ./middleware.ts
var middleware_namespaceObject = {};
__webpack_require__.r(middleware_namespaceObject);
__webpack_require__.d(middleware_namespaceObject, {
  config: () => (middleware_config),
  middleware: () => (middleware)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/utils.js
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : normalizeLocalePath(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var _edge_runtime_cookies = __webpack_require__(44);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
 //# sourceMappingURL=cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        validateURL(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new NextURL(url, {
            headers: toNodeOutgoingHttpHeaders(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _edge_runtime_cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js



const response_INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[response_INTERNALS] = {
            cookies: new _edge_runtime_cookies.ResponseCookies(this.headers),
            url: init.url ? new NextURL(init.url, {
                headers: toNodeOutgoingHttpHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[response_INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc"; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js

const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}
/**
 * Headers that are set by the Next.js server and should be stripped from the
 * request headers going to the user's application.
 */ const INTERNAL_HEADERS = (/* unused pure expression or super */ null && ([
    "x-invoke-path",
    "x-invoke-status",
    "x-invoke-error",
    "x-invoke-query",
    "x-invoke-output",
    "x-middleware-invoke"
]));
/**
 * Strip internal headers from the request headers.
 *
 * @param headers the headers to strip of internal headers
 */ function stripInternalHeaders(headers) {
    for (const key of INTERNAL_HEADERS){
        delete headers[key];
    }
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js


/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
const ESLINT_DEFAULT_DIRS = (/* unused pure expression or super */ null && ([
    "app",
    "pages",
    "components",
    "lib",
    "src"
]));
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
            // plus middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
 //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new _edge_runtime_cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore.call(fetch)) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _edge_runtime_cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/index.js


/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(137);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = HeadersAdapter.from(headers);
    for (const param of FLIGHT_PARAMETERS){
        cleaned.delete(param.toString().toLowerCase());
    }
    return HeadersAdapter.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
    return RequestCookiesAdapter.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
    return MutableRequestCookiesAdapter.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/async-local-storage.js
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js

const requestAsyncStorage = createAsyncLocalStorage(); //# sourceMappingURL=request-async-storage.external.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = fromNodeOutgoingHttpHeaders(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    // we only care to make async storage available for middleware
    const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
    if (isMiddleware) {
        response = await RequestAsyncStorageWrapper.wrap(requestAsyncStorage, {
            req: request,
            renderOpts: {
                onUpdateCookies: (cookies)=>{
                    cookiesFromResponse = cookies;
                },
                // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                    previewModeId: "development-id",
                    previewModeEncryptionKey: "",
                    previewModeSigningKey: ""
                }
            }
        }, ()=>params.handler(request, event));
    } else {
        response = await params.handler(request, event);
    }
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : NextResponse.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

// EXTERNAL MODULE: ./node_modules/crypto-js/enc-base64.js
var enc_base64 = __webpack_require__(648);
var enc_base64_default = /*#__PURE__*/__webpack_require__.n(enc_base64);
// EXTERNAL MODULE: ./node_modules/crypto-js/sha256.js
var sha256 = __webpack_require__(21);
var sha256_default = /*#__PURE__*/__webpack_require__.n(sha256);
;// CONCATENATED MODULE: ./lib/stripTrailingSlash.ts
const stripTrailingSlash = (str)=>str[str.length - 1] === "/" ? str.slice(0, -1) : str;
/* harmony default export */ const lib_stripTrailingSlash = (stripTrailingSlash);

;// CONCATENATED MODULE: ./lib/isBrowser.ts
function isBrowser_isBrowser() {
    return "undefined" !== "undefined";
}

;// CONCATENATED MODULE: ./lib/regexp.ts
const URL_PREFIX = /^https?:\/\//i;
const IPFS_PREFIX = /^ipfs:\/\//i;
const HEX_REGEXP = /^(?:0x)?[\da-fA-F]+$/;
const FILE_EXTENSION = /\.([\da-z]+)$/i;

;// CONCATENATED MODULE: ./configs/app/utils.ts


const replaceQuotes = (value)=>value?.replaceAll("'", '"');
const getEnvValue = (envName)=>{
    // eslint-disable-next-line no-restricted-properties
    const envs = isBrowser_isBrowser() ? window.__envs : process.env;
    if (isBrowser_isBrowser() && envs.NEXT_PUBLIC_APP_INSTANCE === "pw") {
        const storageValue = localStorage.getItem(envName);
        if (typeof storageValue === "string") {
            return storageValue;
        }
    }
    return replaceQuotes(envs[envName]);
};
const parseEnvJson = (env)=>{
    try {
        return JSON.parse(env || "null");
    } catch (error) {
        return null;
    }
};
const getExternalAssetFilePath = (envName)=>{
    const parsedValue = getEnvValue(envName);
    if (!parsedValue) {
        return;
    }
    return buildExternalAssetFilePath(envName, parsedValue);
};
const buildExternalAssetFilePath = (name, value)=>{
    try {
        const fileName = name.replace(/^NEXT_PUBLIC_/, "").replace(/_URL$/, "").toLowerCase();
        const url = new URL(value);
        const fileExtension = url.pathname.match(FILE_EXTENSION)?.[1];
        return `/assets/${fileName}.${fileExtension}`;
    } catch (error) {
        return;
    }
};

;// CONCATENATED MODULE: ./configs/app/api.ts


const apiHost = getEnvValue("NEXT_PUBLIC_API_HOST");
const apiSchema = getEnvValue("NEXT_PUBLIC_API_PROTOCOL") || "https";
const apiPort = getEnvValue("NEXT_PUBLIC_API_PORT");
const apiEndpoint = [
    apiSchema || "https",
    "://",
    apiHost,
    apiPort && ":" + apiPort
].filter(Boolean).join("");
const socketSchema = getEnvValue("NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL") || "wss";
const socketEndpoint = [
    socketSchema,
    "://",
    apiHost,
    apiPort && ":" + apiPort
].filter(Boolean).join("");
const api = Object.freeze({
    host: apiHost,
    protocol: apiSchema,
    port: apiPort,
    endpoint: apiEndpoint,
    socket: socketEndpoint,
    basePath: lib_stripTrailingSlash(getEnvValue("NEXT_PUBLIC_API_BASE_PATH") || "")
});
/* harmony default export */ const app_api = (api);

;// CONCATENATED MODULE: ./configs/app/app.ts

const appPort = getEnvValue("NEXT_PUBLIC_APP_PORT");
const appSchema = getEnvValue("NEXT_PUBLIC_APP_PROTOCOL");
const appHost = getEnvValue("NEXT_PUBLIC_APP_HOST");
const baseUrl = [
    appSchema || "https",
    "://",
    appHost,
    appPort && ":" + appPort
].filter(Boolean).join("");
const isDev = getEnvValue("NEXT_PUBLIC_APP_ENV") === "development";
const app = Object.freeze({
    isDev,
    protocol: appSchema,
    host: appHost,
    port: appPort,
    baseUrl,
    useProxy: getEnvValue("NEXT_PUBLIC_USE_NEXT_JS_PROXY") === "true"
});
/* harmony default export */ const app_app = (app);

;// CONCATENATED MODULE: ./configs/app/chain.ts

const DEFAULT_CURRENCY_DECIMALS = 18;
const chain = Object.freeze({
    id: getEnvValue("NEXT_PUBLIC_NETWORK_ID"),
    name: getEnvValue("NEXT_PUBLIC_NETWORK_NAME"),
    shortName: getEnvValue("NEXT_PUBLIC_NETWORK_SHORT_NAME"),
    currency: {
        name: getEnvValue("NEXT_PUBLIC_NETWORK_CURRENCY_NAME"),
        weiName: getEnvValue("NEXT_PUBLIC_NETWORK_CURRENCY_WEI_NAME"),
        symbol: getEnvValue("NEXT_PUBLIC_NETWORK_CURRENCY_SYMBOL"),
        decimals: Number(getEnvValue("NEXT_PUBLIC_NETWORK_CURRENCY_DECIMALS")) || DEFAULT_CURRENCY_DECIMALS
    },
    governanceToken: {
        symbol: getEnvValue("NEXT_PUBLIC_NETWORK_GOVERNANCE_TOKEN_SYMBOL")
    },
    rpcUrl: getEnvValue("NEXT_PUBLIC_NETWORK_RPC_URL"),
    isTestnet: getEnvValue("NEXT_PUBLIC_IS_TESTNET") === "true",
    verificationType: getEnvValue("NEXT_PUBLIC_NETWORK_VERIFICATION_TYPE") || "mining"
});
/* harmony default export */ const app_chain = (chain);

;// CONCATENATED MODULE: ./configs/app/features/account.ts



const authUrl = lib_stripTrailingSlash(getEnvValue("NEXT_PUBLIC_AUTH_URL") || app_app.baseUrl);
const logoutUrl = (()=>{
    try {
        const envUrl = getEnvValue("NEXT_PUBLIC_LOGOUT_URL");
        const auth0ClientId = getEnvValue("NEXT_PUBLIC_AUTH0_CLIENT_ID");
        const returnUrl = authUrl + "/auth/logout";
        if (!envUrl || !auth0ClientId) {
            throw Error();
        }
        const url = new URL(envUrl);
        url.searchParams.set("client_id", auth0ClientId);
        url.searchParams.set("returnTo", returnUrl);
        return url.toString();
    } catch (error) {
        return;
    }
})();
const title = "My account";
const config = (()=>{
    if (getEnvValue("NEXT_PUBLIC_IS_ACCOUNT_SUPPORTED") === "true" && authUrl && logoutUrl) {
        return Object.freeze({
            title,
            isEnabled: true,
            authUrl,
            logoutUrl
        });
    }
    return Object.freeze({
        title,
        isEnabled: false
    });
})();
/* harmony default export */ const account = (config);

;// CONCATENATED MODULE: ./configs/app/features/verifiedTokens.ts

const contractInfoApiHost = getEnvValue("NEXT_PUBLIC_CONTRACT_INFO_API_HOST");
const verifiedTokens_title = "Verified tokens info";
const verifiedTokens_config = (()=>{
    if (contractInfoApiHost) {
        return Object.freeze({
            title: verifiedTokens_title,
            isEnabled: true,
            api: {
                endpoint: contractInfoApiHost,
                basePath: ""
            }
        });
    }
    return Object.freeze({
        title: verifiedTokens_title,
        isEnabled: false
    });
})();
/* harmony default export */ const verifiedTokens = (verifiedTokens_config);

;// CONCATENATED MODULE: ./configs/app/features/addressVerification.ts



const adminServiceApiHost = getEnvValue("NEXT_PUBLIC_ADMIN_SERVICE_API_HOST");
const addressVerification_title = 'Address verification in "My account"';
const addressVerification_config = (()=>{
    if (account.isEnabled && verifiedTokens.isEnabled && adminServiceApiHost) {
        return Object.freeze({
            title: 'Address verification in "My account"',
            isEnabled: true,
            api: {
                endpoint: adminServiceApiHost,
                basePath: ""
            }
        });
    }
    return Object.freeze({
        title: addressVerification_title,
        isEnabled: false
    });
})();
/* harmony default export */ const addressVerification = (addressVerification_config);

;// CONCATENATED MODULE: ./types/client/adProviders.ts
const SUPPORTED_AD_BANNER_PROVIDERS = [
    "slise",
    "adbutler",
    "coinzilla",
    "none"
];
const SUPPORTED_AD_TEXT_PROVIDERS = (/* unused pure expression or super */ null && ([
    "coinzilla",
    "none"
]));

;// CONCATENATED MODULE: ./configs/app/features/adsBanner.ts


const provider = (()=>{
    const envValue = getEnvValue("NEXT_PUBLIC_AD_BANNER_PROVIDER");
    return envValue && SUPPORTED_AD_BANNER_PROVIDERS.includes(envValue) ? envValue : "slise";
})();
const adsBanner_title = "Banner ads";
const adsBanner_config = (()=>{
    if (provider === "adbutler") {
        const desktopConfig = parseEnvJson(getEnvValue("NEXT_PUBLIC_AD_ADBUTLER_CONFIG_DESKTOP"));
        const mobileConfig = parseEnvJson(getEnvValue("NEXT_PUBLIC_AD_ADBUTLER_CONFIG_MOBILE"));
        if (desktopConfig && mobileConfig) {
            return Object.freeze({
                title: adsBanner_title,
                isEnabled: true,
                provider,
                adButler: {
                    config: {
                        desktop: desktopConfig,
                        mobile: mobileConfig
                    }
                }
            });
        }
    } else if (provider !== "none") {
        return Object.freeze({
            title: adsBanner_title,
            isEnabled: true,
            provider
        });
    }
    return Object.freeze({
        title: adsBanner_title,
        isEnabled: false
    });
})();
/* harmony default export */ const adsBanner = (adsBanner_config);

;// CONCATENATED MODULE: ./configs/app/features/adsText.ts


const adsText_provider = (()=>{
    const envValue = getEnvValue("NEXT_PUBLIC_AD_TEXT_PROVIDER");
    return envValue && SUPPORTED_AD_BANNER_PROVIDERS.includes(envValue) ? envValue : "coinzilla";
})();
const adsText_title = "Text ads";
const adsText_config = (()=>{
    if (adsText_provider !== "none") {
        return Object.freeze({
            title: adsText_title,
            isEnabled: true,
            provider: adsText_provider
        });
    }
    return Object.freeze({
        title: adsText_title,
        isEnabled: false
    });
})();
/* harmony default export */ const adsText = (adsText_config);

;// CONCATENATED MODULE: ./configs/app/features/beaconChain.ts

const beaconChain_title = "Beacon chain";
const beaconChain_config = (()=>{
    if (getEnvValue("NEXT_PUBLIC_HAS_BEACON_CHAIN") === "true") {
        return Object.freeze({
            title: beaconChain_title,
            isEnabled: true,
            currency: {
                symbol: getEnvValue("NEXT_PUBLIC_BEACON_CHAIN_CURRENCY_SYMBOL") || getEnvValue("NEXT_PUBLIC_NETWORK_CURRENCY_SYMBOL") || ""
            }
        });
    }
    return Object.freeze({
        title: beaconChain_title,
        isEnabled: false
    });
})();
/* harmony default export */ const beaconChain = (beaconChain_config);

;// CONCATENATED MODULE: ./configs/app/features/bridgedTokens.ts

const bridgedTokens_title = "Bridged tokens";
const bridgedTokens_config = (()=>{
    const chains = parseEnvJson(getEnvValue("NEXT_PUBLIC_BRIDGED_TOKENS_CHAINS"));
    const bridges = parseEnvJson(getEnvValue("NEXT_PUBLIC_BRIDGED_TOKENS_BRIDGES"));
    if (chains && chains.length > 0 && bridges && bridges.length > 0) {
        return Object.freeze({
            title: bridgedTokens_title,
            isEnabled: true,
            chains,
            bridges
        });
    }
    return Object.freeze({
        title: bridgedTokens_title,
        isEnabled: false
    });
})();
/* harmony default export */ const bridgedTokens = (bridgedTokens_config);

;// CONCATENATED MODULE: ./configs/app/features/blockchainInteraction.ts


const walletConnectProjectId = getEnvValue("NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID");
const blockchainInteraction_title = "Blockchain interaction (writing to contract, etc.)";
const blockchainInteraction_config = (()=>{
    if (// all chain parameters are required for wagmi provider
    // @wagmi/chains/dist/index.d.ts
    app_chain.id && app_chain.name && app_chain.currency.name && app_chain.currency.symbol && app_chain.currency.decimals && app_chain.rpcUrl && walletConnectProjectId) {
        return Object.freeze({
            title: blockchainInteraction_title,
            isEnabled: true,
            walletConnect: {
                projectId: walletConnectProjectId
            }
        });
    }
    return Object.freeze({
        title: blockchainInteraction_title,
        isEnabled: false
    });
})();
/* harmony default export */ const blockchainInteraction = (blockchainInteraction_config);

;// CONCATENATED MODULE: ./configs/app/services.ts

/* harmony default export */ const services = (Object.freeze({
    reCaptcha: {
        siteKey: getEnvValue("NEXT_PUBLIC_RE_CAPTCHA_APP_SITE_KEY")
    }
}));

;// CONCATENATED MODULE: ./configs/app/features/csvExport.ts

const csvExport_title = "Export data to CSV file";
const csvExport_config = (()=>{
    if (services.reCaptcha.siteKey) {
        return Object.freeze({
            title: csvExport_title,
            isEnabled: true,
            reCaptcha: {
                siteKey: services.reCaptcha.siteKey
            }
        });
    }
    return Object.freeze({
        title: csvExport_title,
        isEnabled: false
    });
})();
/* harmony default export */ const csvExport = (csvExport_config);

;// CONCATENATED MODULE: ./configs/app/features/googleAnalytics.ts

const propertyId = getEnvValue("NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID");
const googleAnalytics_title = "Google analytics";
const googleAnalytics_config = (()=>{
    if (propertyId) {
        return Object.freeze({
            title: googleAnalytics_title,
            isEnabled: true,
            propertyId
        });
    }
    return Object.freeze({
        title: googleAnalytics_title,
        isEnabled: false
    });
})();
/* harmony default export */ const googleAnalytics = (googleAnalytics_config);

;// CONCATENATED MODULE: ./configs/app/features/graphqlApiDocs.ts

const defaultTxHash = getEnvValue("NEXT_PUBLIC_GRAPHIQL_TRANSACTION");
const graphqlApiDocs_title = "GraphQL API documentation";
const graphqlApiDocs_config = (()=>{
    return Object.freeze({
        title: graphqlApiDocs_title,
        isEnabled: true,
        defaultTxHash
    });
})();
/* harmony default export */ const graphqlApiDocs = (graphqlApiDocs_config);

;// CONCATENATED MODULE: ./configs/app/features/growthBook.ts

const clientKey = getEnvValue("NEXT_PUBLIC_GROWTH_BOOK_CLIENT_KEY");
const growthBook_title = "GrowthBook feature flagging and A/B testing";
const growthBook_config = (()=>{
    if (clientKey) {
        return Object.freeze({
            title: growthBook_title,
            isEnabled: true,
            clientKey
        });
    }
    return Object.freeze({
        title: growthBook_title,
        isEnabled: false
    });
})();
/* harmony default export */ const growthBook = (growthBook_config);

;// CONCATENATED MODULE: ./configs/app/features/marketplace.ts


// config file will be downloaded at run-time and saved in the public folder
const configUrl = getExternalAssetFilePath("NEXT_PUBLIC_MARKETPLACE_CONFIG_URL");
const submitFormUrl = getEnvValue("NEXT_PUBLIC_MARKETPLACE_SUBMIT_FORM");
const marketplace_title = "Marketplace";
const marketplace_config = (()=>{
    if (app_chain.rpcUrl && configUrl && submitFormUrl) {
        return Object.freeze({
            title: marketplace_title,
            isEnabled: true,
            configUrl,
            submitFormUrl
        });
    }
    return Object.freeze({
        title: marketplace_title,
        isEnabled: false
    });
})();
/* harmony default export */ const marketplace = (marketplace_config);

;// CONCATENATED MODULE: ./configs/app/features/mixpanel.ts

const projectToken = getEnvValue("NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN");
const mixpanel_title = "Mixpanel analytics";
const mixpanel_config = (()=>{
    if (projectToken) {
        return Object.freeze({
            title: mixpanel_title,
            isEnabled: true,
            projectToken
        });
    }
    return Object.freeze({
        title: mixpanel_title,
        isEnabled: false
    });
})();
/* harmony default export */ const mixpanel = (mixpanel_config);

;// CONCATENATED MODULE: ./configs/app/features/nameService.ts

const nameService_apiHost = getEnvValue("NEXT_PUBLIC_NAME_SERVICE_API_HOST");
const nameService_title = "Name service integration";
const nameService_config = (()=>{
    if (nameService_apiHost) {
        return Object.freeze({
            title: nameService_title,
            isEnabled: true,
            api: {
                endpoint: nameService_apiHost,
                basePath: ""
            }
        });
    }
    return Object.freeze({
        title: nameService_title,
        isEnabled: false
    });
})();
/* harmony default export */ const nameService = (nameService_config);

;// CONCATENATED MODULE: ./configs/app/features/restApiDocs.ts

const specUrl = getEnvValue("NEXT_PUBLIC_API_SPEC_URL") || `https://raw.githubusercontent.com/blockscout/blockscout-api-v2-swagger/main/swagger.yaml`;
const restApiDocs_title = "REST API documentation";
const restApiDocs_config = (()=>{
    return Object.freeze({
        title: restApiDocs_title,
        isEnabled: true,
        specUrl
    });
})();
/* harmony default export */ const restApiDocs = (restApiDocs_config);

;// CONCATENATED MODULE: ./configs/app/features/optimisticRollup.ts

const optimisticRollup_title = "Rollup (L2) chain";
const optimisticRollup_config = (()=>{
    const L1BaseUrl = getEnvValue("NEXT_PUBLIC_L1_BASE_URL");
    const withdrawalUrl = getEnvValue("NEXT_PUBLIC_OPTIMISTIC_L2_WITHDRAWAL_URL");
    if (getEnvValue("NEXT_PUBLIC_IS_OPTIMISTIC_L2_NETWORK") === "true" && L1BaseUrl && withdrawalUrl) {
        return Object.freeze({
            title: optimisticRollup_title,
            isEnabled: true,
            L1BaseUrl,
            withdrawalUrl
        });
    }
    return Object.freeze({
        title: optimisticRollup_title,
        isEnabled: false
    });
})();
/* harmony default export */ const optimisticRollup = (optimisticRollup_config);

;// CONCATENATED MODULE: ./configs/app/features/safe.ts

// https://docs.safe.global/safe-core-api/available-services
const SAFE_API_MAP = {
    "42161": "https://safe-transaction-arbitrum.safe.global",
    "1313161554": "https://safe-transaction-aurora.safe.global",
    "43114": "https://safe-transaction-avalanche.safe.global",
    "8453": "https://safe-transaction-base.safe.global",
    "84531": "https://safe-transaction-base-testnet.safe.global",
    "56": "https://safe-transaction-bsc.safe.global",
    "42220": "https://safe-transaction-celo.safe.global",
    "1": "https://safe-transaction-mainnet.safe.global",
    "100": "https://safe-transaction-gnosis-chain.safe.global",
    "5": "https://safe-transaction-goerli.safe.global",
    "10": "https://safe-transaction-optimism.safe.global",
    "137": "https://safe-transaction-polygon.safe.global"
};
function getApiUrl() {
    if (!app_chain.id) {
        return;
    }
    const apiHost = SAFE_API_MAP[app_chain.id];
    if (!apiHost) {
        return;
    }
    return `${apiHost}/api/v1/safes/`;
}
const safe_title = "Safe address tags";
const safe_config = (()=>{
    const apiUrl = getApiUrl();
    if (apiUrl) {
        return Object.freeze({
            title: safe_title,
            isEnabled: true,
            apiUrl
        });
    }
    return Object.freeze({
        title: safe_title,
        isEnabled: false
    });
})();
/* harmony default export */ const safe = (safe_config);

;// CONCATENATED MODULE: ./configs/app/features/sentry.ts


const dsn = getEnvValue("NEXT_PUBLIC_SENTRY_DSN");
const instance = (()=>{
    const envValue = getEnvValue("NEXT_PUBLIC_APP_INSTANCE");
    if (envValue) {
        return envValue;
    }
    return app_app.host?.replace(".blockscout.com", "").replaceAll("-", "_");
})();
const environment = getEnvValue("NEXT_PUBLIC_APP_ENV") || "production";
const release = getEnvValue("NEXT_PUBLIC_GIT_TAG");
const sentry_title = "Sentry error monitoring";
const sentry_config = (()=>{
    if (dsn && instance && environment) {
        return Object.freeze({
            title: sentry_title,
            isEnabled: true,
            dsn,
            instance,
            release,
            environment,
            enableTracing: getEnvValue("NEXT_PUBLIC_SENTRY_ENABLE_TRACING") === "true"
        });
    }
    return Object.freeze({
        title: sentry_title,
        isEnabled: false
    });
})();
/* harmony default export */ const sentry = (sentry_config);

;// CONCATENATED MODULE: ./configs/app/features/sol2uml.ts

const sol2uml_apiEndpoint = getEnvValue("NEXT_PUBLIC_VISUALIZE_API_HOST");
const sol2uml_title = "Solidity to UML diagrams";
const sol2uml_config = (()=>{
    if (sol2uml_apiEndpoint) {
        return Object.freeze({
            title: sol2uml_title,
            isEnabled: true,
            api: {
                endpoint: sol2uml_apiEndpoint,
                basePath: ""
            }
        });
    }
    return Object.freeze({
        title: sol2uml_title,
        isEnabled: false
    });
})();
/* harmony default export */ const sol2uml = (sol2uml_config);

;// CONCATENATED MODULE: ./configs/app/features/stats.ts

const stats_apiEndpoint = getEnvValue("NEXT_PUBLIC_STATS_API_HOST");
const stats_title = "Blockchain statistics";
const stats_config = (()=>{
    if (stats_apiEndpoint) {
        return Object.freeze({
            title: stats_title,
            isEnabled: true,
            api: {
                endpoint: stats_apiEndpoint,
                basePath: ""
            }
        });
    }
    return Object.freeze({
        title: stats_title,
        isEnabled: false
    });
})();
/* harmony default export */ const stats = (stats_config);

;// CONCATENATED MODULE: ./configs/app/features/suave.ts

const suave_title = "SUAVE chain";
const suave_config = (()=>{
    if (getEnvValue("NEXT_PUBLIC_IS_SUAVE_CHAIN") === "true") {
        return Object.freeze({
            title: suave_title,
            isEnabled: true
        });
    }
    return Object.freeze({
        title: suave_title,
        isEnabled: false
    });
})();
/* harmony default export */ const suave = (suave_config);

;// CONCATENATED MODULE: ./types/client/txInterpretation.ts
const PROVIDERS = [
    "blockscout",
    "none"
];

;// CONCATENATED MODULE: ./configs/app/features/txInterpretation.ts


const txInterpretation_title = "Transaction interpretation";
const txInterpretation_provider = (()=>{
    const value = getEnvValue("NEXT_PUBLIC_TRANSACTION_INTERPRETATION_PROVIDER");
    if (value && PROVIDERS.includes(value)) {
        return value;
    }
    return "none";
})();
const txInterpretation_config = (()=>{
    if (txInterpretation_provider !== "none") {
        return Object.freeze({
            title: txInterpretation_title,
            provider: txInterpretation_provider,
            isEnabled: true
        });
    }
    return Object.freeze({
        title: txInterpretation_title,
        isEnabled: false
    });
})();
/* harmony default export */ const txInterpretation = (txInterpretation_config);

;// CONCATENATED MODULE: ./types/client/wallets.ts
const SUPPORTED_WALLETS = [
    "metamask",
    "coinbase",
    "token_pocket"
];

;// CONCATENATED MODULE: ./configs/app/features/web3Wallet.ts


const wallets = (()=>{
    const envValue = getEnvValue("NEXT_PUBLIC_WEB3_WALLETS");
    if (envValue === "none") {
        return;
    }
    const wallets = parseEnvJson(envValue)?.filter((type)=>SUPPORTED_WALLETS.includes(type));
    if (!wallets || wallets.length === 0) {
        return [
            "metamask"
        ];
    }
    return wallets;
})();
const web3Wallet_title = "Web3 wallet integration (add token or network to the wallet)";
const web3Wallet_config = (()=>{
    if (wallets && wallets.length > 0) {
        return Object.freeze({
            title: web3Wallet_title,
            isEnabled: true,
            wallets,
            addToken: {
                isDisabled: getEnvValue("NEXT_PUBLIC_WEB3_DISABLE_ADD_TOKEN_TO_WALLET") === "true"
            },
            addNetwork: {}
        });
    }
    return Object.freeze({
        title: web3Wallet_title,
        isEnabled: false
    });
})();
/* harmony default export */ const web3Wallet = (web3Wallet_config);

;// CONCATENATED MODULE: ./configs/app/features/zkEvmRollup.ts

const zkEvmRollup_title = "ZkEVM rollup (L2) chain";
const zkEvmRollup_config = (()=>{
    const L1BaseUrl = getEnvValue("NEXT_PUBLIC_L1_BASE_URL");
    const isZkEvm = getEnvValue("NEXT_PUBLIC_IS_ZKEVM_L2_NETWORK") === "true";
    if (isZkEvm && L1BaseUrl) {
        return Object.freeze({
            title: zkEvmRollup_title,
            isEnabled: true,
            L1BaseUrl
        });
    }
    return Object.freeze({
        title: zkEvmRollup_title,
        isEnabled: false
    });
})();
/* harmony default export */ const zkEvmRollup = (zkEvmRollup_config);

;// CONCATENATED MODULE: ./configs/app/features/index.ts


























;// CONCATENATED MODULE: ./configs/app/meta.ts


const defaultImageUrl = app_app.baseUrl + "/static/og_placeholder.png";
const meta = Object.freeze({
    promoteBlockscoutInTitle: getEnvValue("NEXT_PUBLIC_PROMOTE_BLOCKSCOUT_IN_TITLE") || "true",
    og: {
        description: getEnvValue("NEXT_PUBLIC_OG_DESCRIPTION") || "",
        imageUrl: getExternalAssetFilePath("NEXT_PUBLIC_OG_IMAGE_URL") || defaultImageUrl
    }
});
/* harmony default export */ const app_meta = (meta);

;// CONCATENATED MODULE: ./types/client/navigation-items.ts
const NAVIGATION_LINK_IDS = [
    "rpc_api",
    "eth_rpc_api"
];

;// CONCATENATED MODULE: ./types/views/address.ts
const IDENTICON_TYPES = [
    "github",
    "jazzicon",
    "gradient_avatar",
    "blockie"
];
const ADDRESS_VIEWS_IDS = [
    "top_accounts"
];

;// CONCATENATED MODULE: ./configs/app/ui/views/address.ts


const identiconType = (()=>{
    const value = getEnvValue("NEXT_PUBLIC_VIEWS_ADDRESS_IDENTICON_TYPE");
    return IDENTICON_TYPES.find((type)=>value === type) || "jazzicon";
})();
const hiddenViews = (()=>{
    const parsedValue = parseEnvJson(getEnvValue("NEXT_PUBLIC_VIEWS_ADDRESS_HIDDEN_VIEWS")) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = ADDRESS_VIEWS_IDS.reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const address_config = Object.freeze({
    identiconType,
    hiddenViews,
    solidityscanEnabled: getEnvValue("NEXT_PUBLIC_VIEWS_CONTRACT_SOLIDITYSCAN_ENABLED") === "true"
});
/* harmony default export */ const address = (address_config);

;// CONCATENATED MODULE: ./types/views/block.ts
const BLOCK_FIELDS_IDS = [
    "burnt_fees",
    "total_reward",
    "nonce",
    "miner"
];

;// CONCATENATED MODULE: ./configs/app/ui/views/block.ts


const blockHiddenFields = (()=>{
    const parsedValue = parseEnvJson(getEnvValue("NEXT_PUBLIC_VIEWS_BLOCK_HIDDEN_FIELDS")) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = BLOCK_FIELDS_IDS.reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const block_config = Object.freeze({
    hiddenFields: blockHiddenFields
});
/* harmony default export */ const block = (block_config);

;// CONCATENATED MODULE: ./configs/app/ui/views/nft.ts

const nft_config = Object.freeze({
    marketplaces: parseEnvJson(getEnvValue("NEXT_PUBLIC_VIEWS_NFT_MARKETPLACES")) || []
});
/* harmony default export */ const nft = (nft_config);

;// CONCATENATED MODULE: ./types/views/tx.ts
const TX_FIELDS_IDS = [
    "value",
    "fee_currency",
    "gas_price",
    "tx_fee",
    "gas_fees",
    "burnt_fees"
];
const TX_ADDITIONAL_FIELDS_IDS = [
    "fee_per_gas"
];

;// CONCATENATED MODULE: ./configs/app/ui/views/tx.ts


const hiddenFields = (()=>{
    const parsedValue = parseEnvJson(getEnvValue("NEXT_PUBLIC_VIEWS_TX_HIDDEN_FIELDS")) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = TX_FIELDS_IDS.reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const additionalFields = (()=>{
    const parsedValue = parseEnvJson(getEnvValue("NEXT_PUBLIC_VIEWS_TX_ADDITIONAL_FIELDS")) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = TX_ADDITIONAL_FIELDS_IDS.reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
const tx_config = Object.freeze({
    hiddenFields,
    additionalFields
});
/* harmony default export */ const tx = (tx_config);

;// CONCATENATED MODULE: ./configs/app/ui/views/index.ts





;// CONCATENATED MODULE: ./configs/app/ui.ts



const hiddenLinks = (()=>{
    const parsedValue = parseEnvJson(getEnvValue("NEXT_PUBLIC_NAVIGATION_HIDDEN_LINKS")) || [];
    if (!Array.isArray(parsedValue)) {
        return undefined;
    }
    const result = NAVIGATION_LINK_IDS.reduce((result, item)=>{
        result[item] = parsedValue.includes(item);
        return result;
    }, {});
    return result;
})();
// eslint-disable-next-line max-len
const HOMEPAGE_PLATE_BACKGROUND_DEFAULT = "radial-gradient(103.03% 103.03% at 0% 0%, rgba(183, 148, 244, 0.8) 0%, rgba(0, 163, 196, 0.8) 100%), var(--chakra-colors-blue-400)";
const UI = Object.freeze({
    sidebar: {
        logo: {
            "default": getExternalAssetFilePath("NEXT_PUBLIC_NETWORK_LOGO"),
            dark: getExternalAssetFilePath("NEXT_PUBLIC_NETWORK_LOGO_DARK")
        },
        icon: {
            "default": getExternalAssetFilePath("NEXT_PUBLIC_NETWORK_ICON"),
            dark: getExternalAssetFilePath("NEXT_PUBLIC_NETWORK_ICON_DARK")
        },
        hiddenLinks,
        otherLinks: parseEnvJson(getEnvValue("NEXT_PUBLIC_OTHER_LINKS")) || [],
        featuredNetworks: getExternalAssetFilePath("NEXT_PUBLIC_FEATURED_NETWORKS")
    },
    footer: {
        links: getExternalAssetFilePath("NEXT_PUBLIC_FOOTER_LINKS"),
        frontendVersion: getEnvValue("NEXT_PUBLIC_GIT_TAG"),
        frontendCommit: getEnvValue("NEXT_PUBLIC_GIT_COMMIT_SHA")
    },
    homepage: {
        charts: parseEnvJson(getEnvValue("NEXT_PUBLIC_HOMEPAGE_CHARTS")) || [],
        plate: {
            background: getEnvValue("NEXT_PUBLIC_HOMEPAGE_PLATE_BACKGROUND") || HOMEPAGE_PLATE_BACKGROUND_DEFAULT,
            textColor: getEnvValue("NEXT_PUBLIC_HOMEPAGE_PLATE_TEXT_COLOR") || "white"
        },
        showGasTracker: getEnvValue("NEXT_PUBLIC_HOMEPAGE_SHOW_GAS_TRACKER") === "false" ? false : true,
        showAvgBlockTime: getEnvValue("NEXT_PUBLIC_HOMEPAGE_SHOW_AVG_BLOCK_TIME") === "false" ? false : true
    },
    views: views_namespaceObject,
    indexingAlert: {
        blocks: {
            isHidden: getEnvValue("NEXT_PUBLIC_HIDE_INDEXING_ALERT_BLOCKS") === "true" ? true : false
        },
        intTxs: {
            isHidden: getEnvValue("NEXT_PUBLIC_HIDE_INDEXING_ALERT_INT_TXS") === "true" ? true : false
        }
    },
    maintenanceAlert: {
        message: getEnvValue("NEXT_PUBLIC_MAINTENANCE_ALERT_MESSAGE")
    },
    explorers: {
        items: parseEnvJson(getEnvValue("NEXT_PUBLIC_NETWORK_EXPLORERS")) || []
    }
});
/* harmony default export */ const ui = (UI);

;// CONCATENATED MODULE: ./configs/app/index.ts







const app_config = Object.freeze({
    app: app_app,
    chain: app_chain,
    api: app_api,
    UI: ui,
    features: features_namespaceObject,
    services: services,
    meta: app_meta
});
/* harmony default export */ const configs_app = (app_config);

;// CONCATENATED MODULE: ./ui/shared/ad/adbutlerScript.ts
/* eslint-disable max-len */ 
const ADBUTLER_ACCOUNT = 182226;
const connectAdbutler = `if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}`;
const placeAd = (()=>{
    const feature = configs_app.features.adsBanner;
    if (!feature.isEnabled || feature.provider !== "adbutler") {
        return;
    }
    return `
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    const isMobile = window.matchMedia("only screen and (max-width: 1000px)").matches;
    if (isMobile) {
        var plc${feature.adButler.config.mobile.id} = window.plc${feature.adButler.config.mobile.id} || 0;
        document.getElementById('ad-banner').innerHTML = '<'+'div id="placement_${feature.adButler.config.mobile.id}_'+plc${feature.adButler.config.mobile.id}+'"></'+'div>';
        AdButler.ads.push({handler: function(opt){ AdButler.register(${ADBUTLER_ACCOUNT}, ${feature.adButler.config.mobile.id}, [${feature.adButler.config.mobile.width},${feature.adButler.config.mobile.height}], 'placement_${feature.adButler.config.mobile.id}_'+opt.place, opt); }, opt: { place: plc${feature.adButler.config.mobile.id}++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    } else {
        var plc${feature.adButler.config.desktop.id} = window.plc${feature.adButler.config.desktop.id} || 0;
        document.getElementById('ad-banner').innerHTML = '<'+'div id="placement_${feature.adButler.config.desktop.id}_'+plc${feature.adButler.config.desktop.id}+'"></'+'div>';
        AdButler.ads.push({handler: function(opt){ AdButler.register(${ADBUTLER_ACCOUNT}, ${feature.adButler.config.desktop.id}, [${feature.adButler.config.desktop.width},${feature.adButler.config.desktop.height}], 'placement_${feature.adButler.config.desktop.id}_'+opt.place, opt); }, opt: { place: plc${feature.adButler.config.desktop.id}++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    }
  `;
})();

;// CONCATENATED MODULE: ./nextjs/csp/policies/ad.ts



function ad() {
    return {
        "connect-src": [
            "coinzilla.com",
            "*.coinzilla.com",
            "https://request-global.czilladx.com",
            "*.slise.xyz"
        ],
        "frame-src": [
            "https://request-global.czilladx.com"
        ],
        "script-src": [
            "coinzillatag.com",
            "servedbyadbutler.com",
            `'sha256-${enc_base64_default().stringify(sha256_default()(connectAdbutler))}'`,
            `'sha256-${enc_base64_default().stringify(sha256_default()(placeAd ?? ""))}'`,
            "*.slise.xyz"
        ],
        "img-src": [
            "servedbyadbutler.com",
            "cdn.coinzilla.io"
        ],
        "font-src": [
            "https://request-global.czilladx.com"
        ]
    };
}

;// CONCATENATED MODULE: ./configs/app/features/types.ts
// typescript cannot properly resolve unions in nested objects - https://github.com/microsoft/TypeScript/issues/18758
// so we use this little helper where it is needed
const getFeaturePayload = (feature)=>{
    return feature.isEnabled ? feature : undefined;
};

;// CONCATENATED MODULE: ./nextjs/csp/utils.ts
const KEY_WORDS = {
    BLOB: "blob:",
    DATA: "data:",
    NONE: "'none'",
    REPORT_SAMPLE: `'report-sample'`,
    SELF: "'self'",
    STRICT_DYNAMIC: `'strict-dynamic'`,
    UNSAFE_INLINE: "'unsafe-inline'",
    UNSAFE_EVAL: "'unsafe-eval'"
};
// we cannot use lodash/uniq and lodash/mergeWith in middleware code since it calls new Set() and it'is causing an error in Next.js
// "Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime"
function unique(array) {
    const set = {};
    for (const item of array){
        item && (set[item] = true);
    }
    return Object.keys(set);
}
function mergeDescriptors(...descriptors) {
    return descriptors.reduce((result, item)=>{
        for(const _key in item){
            const key = _key;
            const value = item[key];
            if (!value) {
                continue;
            }
            if (result[key]) {
                result[key]?.push(...value);
            } else {
                result[key] = [
                    ...value
                ];
            }
        }
        return result;
    }, {});
}
function makePolicyString(policyDescriptor) {
    return Object.entries(policyDescriptor).map(([key, value])=>{
        if (!value || value.length === 0) {
            return;
        }
        const uniqueValues = unique(value);
        return [
            key,
            uniqueValues.join(" ")
        ].join(" ");
    }).filter(Boolean).join(";");
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/app.ts



const MAIN_DOMAINS = [
    `*.${configs_app.app.host}`,
    configs_app.app.host
].filter(Boolean);
const getCspReportUrl = ()=>{
    try {
        const sentryFeature = configs_app.features.sentry;
        if (!sentryFeature.isEnabled || !process.env.SENTRY_CSP_REPORT_URI) {
            return;
        }
        const url = new URL(process.env.SENTRY_CSP_REPORT_URI);
        // https://docs.sentry.io/product/security-policy-reporting/#additional-configuration
        url.searchParams.set("sentry_environment", sentryFeature.environment);
        sentryFeature.release && url.searchParams.set("sentry_release", sentryFeature.release);
        return url.toString();
    } catch (error) {
        return;
    }
};
function policies_app_app() {
    return {
        "default-src": [
            // KEY_WORDS.NONE,
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1242902
            // need 'self' here to avoid an error with prefetch nextjs chunks in firefox
            KEY_WORDS.SELF
        ],
        "connect-src": [
            KEY_WORDS.SELF,
            ...MAIN_DOMAINS,
            // webpack hmr in safari doesn't recognize localhost as 'self' for some reason
            configs_app.app.isDev ? "ws://localhost:3000/_next/webpack-hmr" : "",
            // APIs
            configs_app.api.endpoint,
            configs_app.api.socket,
            getFeaturePayload(configs_app.features.stats)?.api.endpoint,
            getFeaturePayload(configs_app.features.sol2uml)?.api.endpoint,
            getFeaturePayload(configs_app.features.verifiedTokens)?.api.endpoint,
            getFeaturePayload(configs_app.features.addressVerification)?.api.endpoint,
            getFeaturePayload(configs_app.features.nameService)?.api.endpoint,
            // chain RPC server
            configs_app.chain.rpcUrl,
            "https://infragrid.v.network",
            // github (spec for api-docs page)
            "raw.githubusercontent.com"
        ].filter(Boolean),
        "script-src": [
            KEY_WORDS.SELF,
            ...MAIN_DOMAINS,
            // next.js generates and rebuilds source maps in dev using eval()
            // https://github.com/vercel/next.js/issues/14221#issuecomment-657258278
            configs_app.app.isDev ? KEY_WORDS.UNSAFE_EVAL : "",
            // hash of ColorModeScript
            "'sha256-e7MRMmTzLsLQvIy1iizO1lXf7VWYoQ6ysj5fuUzvRwE='"
        ],
        "style-src": [
            KEY_WORDS.SELF,
            ...MAIN_DOMAINS,
            // yes, it is unsafe as it stands, but
            // - we cannot use hashes because all styles are generated dynamically
            // - we cannot use nonces since we are not following along SSR path
            // - and still there is very small damage that can be cause by CSS-based XSS-attacks
            // so we hope we are fine here till the first major incident :)
            KEY_WORDS.UNSAFE_INLINE
        ],
        "img-src": [
            KEY_WORDS.SELF,
            KEY_WORDS.DATA,
            ...MAIN_DOMAINS,
            // we agreed that using wildcard for images is mostly safe
            // why do we have to use it? the main reason is that for NFT and inventory pages we get resources urls from API only on the client
            // so they cannot be added to the policy on the server
            // there could be 3 possible workarounds
            //    a/ use server side rendering approach, that we don't want to do
            //    b/ wrap every image/video in iframe with a source to static page for which we enforce certain img-src rule;
            //        the downsides is page performance slowdown and code complexity (have to manage click on elements, color mode for
            //        embedded page, etc)
            //    c/ use wildcard for img-src directive; this can lead to some security vulnerabilities but we were unable to find evidence
            //        that loose img-src directive alone could cause serious flaws on the site as long as we keep script-src and connect-src strict
            //
            // feel free to propose alternative solution and fix this
            "*"
        ],
        "media-src": [
            "*"
        ],
        "font-src": [
            KEY_WORDS.DATA,
            ...MAIN_DOMAINS
        ],
        "object-src": [
            KEY_WORDS.NONE
        ],
        "base-uri": [
            KEY_WORDS.NONE
        ],
        "frame-src": [
            // could be a marketplace app or NFT media (html-page)
            "*"
        ],
        ...(()=>{
            if (!configs_app.features.sentry.isEnabled) {
                return {};
            }
            return {
                "report-uri": [
                    getCspReportUrl()
                ].filter(Boolean)
            };
        })()
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/cloudFlare.ts

// CloudFlare analytics
function cloudFlare() {
    return {
        "script-src": [
            "static.cloudflareinsights.com"
        ],
        "style-src": [
            KEY_WORDS.DATA
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/googleAnalytics.ts

function googleAnalytics_googleAnalytics() {
    if (!configs_app.features.googleAnalytics.isEnabled) {
        return {};
    }
    return {
        "connect-src": [
            "*.google-analytics.com",
            "*.analytics.google.com",
            "https://www.googletagmanager.com",
            "https://stats.g.doubleclick.net"
        ],
        "script-src": [
            // inline script hash, see ui/shared/GoogleAnalytics.tsx
            "'sha256-WXRwCtfSfMoCPzPUIOUAosSaADdGgct0/Lhmnbm7MCA='",
            "https://www.googletagmanager.com",
            "*.google-analytics.com",
            "*.analytics.google.com"
        ],
        "img-src": [
            "*.google-analytics.com",
            "*.analytics.google.com"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/googleFonts.ts
function googleFonts() {
    // we use Inter and Poppins in the app
    return {
        "connect-src": [
            "fonts.gstatic.com"
        ],
        "style-src": [
            "fonts.googleapis.com"
        ],
        "font-src": [
            "fonts.gstatic.com",
            "fonts.googleapis.com"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/googleReCaptcha.ts

function googleReCaptcha() {
    if (!configs_app.services.reCaptcha.siteKey) {
        return {};
    }
    return {
        "script-src": [
            "https://www.google.com/recaptcha/api.js",
            "https://www.gstatic.com",
            "https://translate.google.com",
            "'sha256-FDyPg8CqqIpPAfGVKx1YeKduyLs0ghNYWII21wL+7HM='"
        ],
        "style-src": [
            "https://www.gstatic.com"
        ],
        "img-src": [
            "https://translate.google.com",
            "https://www.gstatic.com"
        ],
        "frame-src": [
            "https://www.google.com/recaptcha/api2/anchor",
            "https://www.google.com/recaptcha/api2/bframe"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/growthBook.ts

function growthBook_growthBook() {
    if (!configs_app.features.growthBook.isEnabled) {
        return {};
    }
    return {
        "connect-src": [
            "cdn.growthbook.io"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/mixpanel.ts

function mixpanel_mixpanel() {
    if (!configs_app.features.mixpanel.isEnabled) {
        return {};
    }
    return {
        "connect-src": [
            "*.mixpanel.com"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/monaco.ts

function monaco() {
    return {
        "script-src": [
            KEY_WORDS.BLOB,
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/loader.js",
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js",
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js",
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/solidity/solidity.js",
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/elixir/elixir.js",
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js"
        ],
        "style-src": [
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.css"
        ],
        "font-src": [
            "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/browser/ui/codicons/codicon/codicon.ttf"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/safe.ts

function safe_safe() {
    if (!configs_app.features.safe.isEnabled) {
        return {};
    }
    return {
        "connect-src": [
            "*.safe.global"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/sentry.ts
function sentry_sentry() {
    return {
        "connect-src": [
            "sentry.io",
            "*.sentry.io"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/walletConnect.ts


function walletConnect() {
    if (!configs_app.features.blockchainInteraction.isEnabled) {
        return {};
    }
    return {
        "connect-src": [
            "*.web3modal.com",
            "*.walletconnect.com",
            "wss://relay.walletconnect.com",
            "wss://www.walletlink.org"
        ],
        "img-src": [
            KEY_WORDS.BLOB,
            "*.walletconnect.com"
        ]
    };
}

;// CONCATENATED MODULE: ./nextjs/csp/policies/index.ts













;// CONCATENATED MODULE: ./nextjs/csp/generateCspPolicy.ts


function generateCspPolicy() {
    const policyDescriptor = mergeDescriptors(policies_app_app(), ad(), cloudFlare(), googleAnalytics_googleAnalytics(), googleFonts(), googleReCaptcha(), growthBook_growthBook(), mixpanel_mixpanel(), monaco(), safe_safe(), sentry_sentry(), walletConnect());
    return makePolicyString(policyDescriptor);
}
/* harmony default export */ const csp_generateCspPolicy = (generateCspPolicy);

;// CONCATENATED MODULE: ./node_modules/nextjs-routes/index.js
function route(r) {
    const params = new Set();
    const path = "/" + r.pathname.split("/").map((segment)=>{
        // optional catch all
        if (segment.startsWith("[[...") && segment.endsWith("]]")) {
            const query = segment.slice(5, -2);
            params.add(query);
            return r.query?.[query]?.join("/");
        }
        // catch all
        if (segment.startsWith("[...") && segment.endsWith("]")) {
            const query = segment.slice(4, -1);
            params.add(query);
            return r.query[query].join("/");
        }
        // dynamic
        if (segment.startsWith("[") && segment.endsWith("]")) {
            const query = segment.slice(1, -1);
            params.add(query);
            return r.query[query];
        }
        return segment;
    })// removes optional catch all if no query is supplied
    .filter(Boolean).join("/");
    const search = new URLSearchParams();
    for(const key in r.query){
        if (!params.has(key)) {
            const value = r.query[key];
            if (Array.isArray(value)) {
                value.forEach((val)=>search.append(key, val));
            } else {
                search.append(key, value);
            }
        }
    }
    const qs = search.toString().length > 0 ? "?" + search.toString() : "";
    const hash = r.hash ? "#" + r.hash : "";
    return path + qs + hash;
}

;// CONCATENATED MODULE: ./node_modules/bignumber.js/bignumber.mjs
/*
 *      bignumber.js v9.1.0
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
POWS_TEN = [
    1,
    10,
    100,
    1e3,
    1e4,
    1e5,
    1e6,
    1e7,
    1e8,
    1e9,
    1e10,
    1e11,
    1e12,
    1e13
], SQRT_BASE = 1e7, // EDITABLE
// The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
// the arguments to toExponential, toFixed, toFormat, and toPrecision.
MAX = 1E9; // 0 to MAX_INT32
/*
 * Create and return a BigNumber constructor.
 */ function clone(configObject) {
    var div, convertBase, parseNumeric, P = BigNumber.prototype = {
        constructor: BigNumber,
        toString: null,
        valueOf: null
    }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
    // The default values below must be integers within the inclusive ranges stated.
    // The values can also be changed at run-time using BigNumber.set.
    // The maximum number of decimal places for operations involving division.
    DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
    // toExponential, toFixed, toFormat and toPrecision, and round (default value).
    // UP         0 Away from zero.
    // DOWN       1 Towards zero.
    // CEIL       2 Towards +Infinity.
    // FLOOR      3 Towards -Infinity.
    // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
    // The exponent value at and beneath which toString returns exponential notation.
    // Number type: -7
    TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
    // Number type: 21
    TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
    // The minimum exponent value, beneath which underflow to zero occurs.
    // Number type: -324  (5e-324)
    MIN_EXP = -1e7, // The maximum exponent value, above which overflow to Infinity occurs.
    // Number type:  308  (1.7976931348623157e+308)
    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
    MAX_EXP = 1e7, // Whether to use cryptographically-secure random number generation, if available.
    CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP        0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN      1 The remainder has the same sign as the dividend.
    //             This modulo mode is commonly known as 'truncated division' and is
    //             equivalent to (a % n) in JavaScript.
    // FLOOR     3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
    // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
    //             The remainder is always positive.
    //
    // The truncated division, floored division, Euclidian division and IEEE 754 remainder
    // modes are commonly used for the modulus operation.
    // Although the other rounding modes can also be used, they may not give useful results.
    MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
    // If POW_PRECISION is 0, there will be unlimited significant digits.
    POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
    FORMAT = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "\xa0",
        suffix: ""
    }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
    // '-', '.', whitespace, or repeated character.
    // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
    ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
    //------------------------------------------------------------------------------------------
    // CONSTRUCTOR
    /*
   * The BigNumber constructor and exported function.
   * Create and return a new instance of a BigNumber object.
   *
   * v {number|string|BigNumber} A numeric value.
   * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
   */ function BigNumber(v, b) {
        var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
        // Enable constructor call without `new`.
        if (!(x instanceof BigNumber)) return new BigNumber(v, b);
        if (b == null) {
            if (v && v._isBigNumber === true) {
                x.s = v.s;
                if (!v.c || v.e > MAX_EXP) {
                    x.c = x.e = null;
                } else if (v.e < MIN_EXP) {
                    x.c = [
                        x.e = 0
                    ];
                } else {
                    x.e = v.e;
                    x.c = v.c.slice();
                }
                return;
            }
            if ((isNum = typeof v == "number") && v * 0 == 0) {
                // Use `1 / n` to handle minus zero also.
                x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                // Fast path for integers, where n < 2147483648 (2**31).
                if (v === ~~v) {
                    for(e = 0, i = v; i >= 10; i /= 10, e++);
                    if (e > MAX_EXP) {
                        x.c = x.e = null;
                    } else {
                        x.e = e;
                        x.c = [
                            v
                        ];
                    }
                    return;
                }
                str = String(v);
            } else {
                if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }
            // Decimal point?
            if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
            // Exponential form?
            if ((i = str.search(/e/i)) > 0) {
                // Determine exponent.
                if (e < 0) e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
            } else if (e < 0) {
                // Integer.
                e = str.length;
            }
        } else {
            // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
            intCheck(b, 2, ALPHABET.length, "Base");
            // Allow exponential notation to be used with base 10 argument, while
            // also rounding to DECIMAL_PLACES as with other bases.
            if (b == 10 && alphabetHasNormalDecimalDigits) {
                x = new BigNumber(v);
                return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }
            str = String(v);
            if (isNum = typeof v == "number") {
                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                    throw Error(tooManyDigits + v);
                }
            } else {
                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }
            alphabet = ALPHABET.slice(0, b);
            e = i = 0;
            // Check that str is a valid base b number.
            // Don't use RegExp, so alphabet can contain special characters.
            for(len = str.length; i < len; i++){
                if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == ".") {
                        // If '.' is not the first character and it has not be found before.
                        if (i > e) {
                            e = len;
                            continue;
                        }
                    } else if (!caseChanged) {
                        // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                        if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                            caseChanged = true;
                            i = -1;
                            e = 0;
                            continue;
                        }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                }
            }
            // Prevent later check for length on converted number.
            isNum = false;
            str = convertBase(str, b, 10, x.s);
            // Decimal point?
            if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
            else e = str.length;
        }
        // Determine leading zeros.
        for(i = 0; str.charCodeAt(i) === 48; i++);
        // Determine trailing zeros.
        for(len = str.length; str.charCodeAt(--len) === 48;);
        if (str = str.slice(i, ++len)) {
            len -= i;
            // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
            if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error(tooManyDigits + x.s * v);
            }
            // Overflow?
            if ((e = e - i - 1) > MAX_EXP) {
                // Infinity.
                x.c = x.e = null;
            // Underflow?
            } else if (e < MIN_EXP) {
                // Zero.
                x.c = [
                    x.e = 0
                ];
            } else {
                x.e = e;
                x.c = [];
                // Transform base
                // e is the base 10 exponent.
                // i is where to slice str to get the first element of the coefficient array.
                i = (e + 1) % LOG_BASE;
                if (e < 0) i += LOG_BASE; // i < 1
                if (i < len) {
                    if (i) x.c.push(+str.slice(0, i));
                    for(len -= LOG_BASE; i < len;){
                        x.c.push(+str.slice(i, i += LOG_BASE));
                    }
                    i = LOG_BASE - (str = str.slice(i)).length;
                } else {
                    i -= len;
                }
                for(; i--; str += "0");
                x.c.push(+str);
            }
        } else {
            // Zero.
            x.c = [
                x.e = 0
            ];
        }
    }
    // CONSTRUCTOR PROPERTIES
    BigNumber.clone = clone;
    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;
    /*
   * Configure infrequently-changing library-wide settings.
   *
   * Accept an object with the following optional properties (if the value of a property is
   * a number, it must be an integer within the inclusive range stated):
   *
   *   DECIMAL_PLACES   {number}           0 to MAX
   *   ROUNDING_MODE    {number}           0 to 8
   *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
   *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
   *   CRYPTO           {boolean}          true or false
   *   MODULO_MODE      {number}           0 to 9
   *   POW_PRECISION       {number}           0 to MAX
   *   ALPHABET         {string}           A string of two or more unique characters which does
   *                                       not contain '.'.
   *   FORMAT           {object}           An object with some of the following properties:
   *     prefix                 {string}
   *     groupSize              {number}
   *     secondaryGroupSize     {number}
   *     groupSeparator         {string}
   *     decimalSeparator       {string}
   *     fractionGroupSize      {number}
   *     fractionGroupSeparator {string}
   *     suffix                 {string}
   *
   * (The values assigned to the above FORMAT object properties are not checked for validity.)
   *
   * E.g.
   * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
   *
   * Ignore properties/parameters set to null or undefined, except for ALPHABET.
   *
   * Return an object with the properties current values.
   */ BigNumber.config = BigNumber.set = function(obj) {
        var p, v;
        if (obj != null) {
            if (typeof obj == "object") {
                // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                    v = obj[p];
                    intCheck(v, 0, MAX, p);
                    DECIMAL_PLACES = v;
                }
                // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                    v = obj[p];
                    intCheck(v, 0, 8, p);
                    ROUNDING_MODE = v;
                }
                // EXPONENTIAL_AT {number|number[]}
                // Integer, -MAX to MAX inclusive or
                // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                    v = obj[p];
                    if (v && v.pop) {
                        intCheck(v[0], -MAX, 0, p);
                        intCheck(v[1], 0, MAX, p);
                        TO_EXP_NEG = v[0];
                        TO_EXP_POS = v[1];
                    } else {
                        intCheck(v, -MAX, MAX, p);
                        TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                    }
                }
                // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                if (obj.hasOwnProperty(p = "RANGE")) {
                    v = obj[p];
                    if (v && v.pop) {
                        intCheck(v[0], -MAX, -1, p);
                        intCheck(v[1], 1, MAX, p);
                        MIN_EXP = v[0];
                        MAX_EXP = v[1];
                    } else {
                        intCheck(v, -MAX, MAX, p);
                        if (v) {
                            MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                        } else {
                            throw Error(bignumberError + p + " cannot be zero: " + v);
                        }
                    }
                }
                // CRYPTO {boolean} true or false.
                // '[BigNumber Error] CRYPTO not true or false: {v}'
                // '[BigNumber Error] crypto unavailable'
                if (obj.hasOwnProperty(p = "CRYPTO")) {
                    v = obj[p];
                    if (v === !!v) {
                        if (v) {
                            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                                CRYPTO = v;
                            } else {
                                CRYPTO = !v;
                                throw Error(bignumberError + "crypto unavailable");
                            }
                        } else {
                            CRYPTO = v;
                        }
                    } else {
                        throw Error(bignumberError + p + " not true or false: " + v);
                    }
                }
                // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                    v = obj[p];
                    intCheck(v, 0, 9, p);
                    MODULO_MODE = v;
                }
                // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                    v = obj[p];
                    intCheck(v, 0, MAX, p);
                    POW_PRECISION = v;
                }
                // FORMAT {object}
                // '[BigNumber Error] FORMAT not an object: {v}'
                if (obj.hasOwnProperty(p = "FORMAT")) {
                    v = obj[p];
                    if (typeof v == "object") FORMAT = v;
                    else throw Error(bignumberError + p + " not an object: " + v);
                }
                // ALPHABET {string}
                // '[BigNumber Error] ALPHABET invalid: {v}'
                if (obj.hasOwnProperty(p = "ALPHABET")) {
                    v = obj[p];
                    // Disallow if less than two characters,
                    // or if it contains '+', '-', '.', whitespace, or a repeated character.
                    if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                        alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                        ALPHABET = v;
                    } else {
                        throw Error(bignumberError + p + " invalid: " + v);
                    }
                }
            } else {
                // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + "Object expected: " + obj);
            }
        }
        return {
            DECIMAL_PLACES: DECIMAL_PLACES,
            ROUNDING_MODE: ROUNDING_MODE,
            EXPONENTIAL_AT: [
                TO_EXP_NEG,
                TO_EXP_POS
            ],
            RANGE: [
                MIN_EXP,
                MAX_EXP
            ],
            CRYPTO: CRYPTO,
            MODULO_MODE: MODULO_MODE,
            POW_PRECISION: POW_PRECISION,
            FORMAT: FORMAT,
            ALPHABET: ALPHABET
        };
    };
    /*
   * Return true if v is a BigNumber instance, otherwise return false.
   *
   * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
   *
   * v {any}
   *
   * '[BigNumber Error] Invalid BigNumber: {v}'
   */ BigNumber.isBigNumber = function(v) {
        if (!v || v._isBigNumber !== true) return false;
        if (!BigNumber.DEBUG) return true;
        var i, n, c = v.c, e = v.e, s = v.s;
        out: if (({}).toString.call(c) == "[object Array]") {
            if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                // If the first element is zero, the BigNumber value must be zero.
                if (c[0] === 0) {
                    if (e === 0 && c.length === 1) return true;
                    break out;
                }
                // Calculate number of digits that c[0] should have, based on the exponent.
                i = (e + 1) % LOG_BASE;
                if (i < 1) i += LOG_BASE;
                // Calculate number of digits of c[0].
                //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                if (String(c[0]).length == i) {
                    for(i = 0; i < c.length; i++){
                        n = c[i];
                        if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                    }
                    // Last element cannot be zero, unless it is the only element.
                    if (n !== 0) return true;
                }
            }
        // Infinity/NaN
        } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
            return true;
        }
        throw Error(bignumberError + "Invalid BigNumber: " + v);
    };
    /*
   * Return a new BigNumber whose value is the maximum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */ BigNumber.maximum = BigNumber.max = function() {
        return maxOrMin(arguments, P.lt);
    };
    /*
   * Return a new BigNumber whose value is the minimum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */ BigNumber.minimum = BigNumber.min = function() {
        return maxOrMin(arguments, P.gt);
    };
    /*
   * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
   * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
   * zeros are produced).
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
   * '[BigNumber Error] crypto unavailable'
   */ BigNumber.random = function() {
        var pow2_53 = 0x20000000000000;
        // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
        // Check if Math.random() produces more than 32 bits of randomness.
        // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
        // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
        var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function() {
            return mathfloor(Math.random() * pow2_53);
        } : function() {
            return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
        };
        return function(dp) {
            var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
            if (dp == null) dp = DECIMAL_PLACES;
            else intCheck(dp, 0, MAX);
            k = mathceil(dp / LOG_BASE);
            if (CRYPTO) {
                // Browsers supporting crypto.getRandomValues.
                if (crypto.getRandomValues) {
                    a = crypto.getRandomValues(new Uint32Array(k *= 2));
                    for(; i < k;){
                        // 53 bits:
                        // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                        // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                        // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                        //                                     11111 11111111 11111111
                        // 0x20000 is 2^21.
                        v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                        // Rejection sampling:
                        // 0 <= v < 9007199254740992
                        // Probability that v >= 9e15, is
                        // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                        if (v >= 9e15) {
                            b = crypto.getRandomValues(new Uint32Array(2));
                            a[i] = b[0];
                            a[i + 1] = b[1];
                        } else {
                            // 0 <= v <= 8999999999999999
                            // 0 <= (v % 1e14) <= 99999999999999
                            c.push(v % 1e14);
                            i += 2;
                        }
                    }
                    i = k / 2;
                // Node.js supporting crypto.randomBytes.
                } else if (crypto.randomBytes) {
                    // buffer
                    a = crypto.randomBytes(k *= 7);
                    for(; i < k;){
                        // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                        // 0x100000000 is 2^32, 0x1000000 is 2^24
                        // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                        // 0 <= v < 9007199254740992
                        v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                        if (v >= 9e15) {
                            crypto.randomBytes(7).copy(a, i);
                        } else {
                            // 0 <= (v % 1e14) <= 99999999999999
                            c.push(v % 1e14);
                            i += 7;
                        }
                    }
                    i = k / 7;
                } else {
                    CRYPTO = false;
                    throw Error(bignumberError + "crypto unavailable");
                }
            }
            // Use Math.random.
            if (!CRYPTO) {
                for(; i < k;){
                    v = random53bitInt();
                    if (v < 9e15) c[i++] = v % 1e14;
                }
            }
            k = c[--i];
            dp %= LOG_BASE;
            // Convert trailing digits to zeros according to dp.
            if (k && dp) {
                v = POWS_TEN[LOG_BASE - dp];
                c[i] = mathfloor(k / v) * v;
            }
            // Remove trailing elements which are zero.
            for(; c[i] === 0; c.pop(), i--);
            // Zero?
            if (i < 0) {
                c = [
                    e = 0
                ];
            } else {
                // Remove leading elements which are zero and adjust exponent accordingly.
                for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                // Count the digits of the first element of c to determine leading zeros, and...
                for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                // adjust the exponent accordingly.
                if (i < LOG_BASE) e -= LOG_BASE - i;
            }
            rand.e = e;
            rand.c = c;
            return rand;
        };
    }();
    /*
   * Return a BigNumber whose value is the sum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */ BigNumber.sum = function() {
        var i = 1, args = arguments, sum = new BigNumber(args[0]);
        for(; i < args.length;)sum = sum.plus(args[i++]);
        return sum;
    };
    // PRIVATE FUNCTIONS
    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = function() {
        var decimal = "0123456789";
        /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. toBaseOut('255', 10, 16) returns [15, 15].
     * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
     */ function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j, arr = [
                0
            ], arrL, i = 0, len = str.length;
            for(; i < len;){
                for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                arr[0] += alphabet.indexOf(str.charAt(i++));
                for(j = 0; j < arr.length; j++){
                    if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) arr[j + 1] = 0;
                        arr[j + 1] += arr[j] / baseOut | 0;
                        arr[j] %= baseOut;
                    }
                }
            }
            return arr.reverse();
        }
        // Convert a numeric string of baseIn to a numeric string of baseOut.
        // If the caller is toString, we are converting from base 10 to baseOut.
        // If the caller is BigNumber, we are converting from baseIn to base 10.
        return function(str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
            // Non-integer.
            if (i >= 0) {
                k = POW_PRECISION;
                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace(".", "");
                y = new BigNumber(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k;
                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
                y.e = y.c.length;
            }
            // Convert the number as integer.
            xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
            // xc now represents str as an integer and converted to baseOut. e is the exponent.
            e = k = xc.length;
            // Remove trailing zeros.
            for(; xc[--k] == 0; xc.pop());
            // Zero?
            if (!xc[0]) return alphabet.charAt(0);
            // Does str represent an integer? If so, no need for the division.
            if (i < 0) {
                --e;
            } else {
                x.c = xc;
                x.e = e;
                // The sign is needed for correct rounding.
                x.s = sign;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
            }
            // xc now represents str converted to baseOut.
            // THe index of the rounding digit.
            d = e + dp + 1;
            // The rounding digit: the digit to the right of the digit that may be rounded up.
            i = xc[d];
            // Look at the rounding digits and mode to determine whether to round up.
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;
            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
            // If the index of the rounding digit is not greater than zero, or xc represents
            // zero, then the result of the base conversion is zero or, if rounding up, a value
            // such as 0.00001.
            if (d < 1 || !xc[0]) {
                // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {
                // Truncate xc to the required number of decimal places.
                xc.length = d;
                // Round up?
                if (r) {
                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for(--baseOut; ++xc[--d] > baseOut;){
                        xc[d] = 0;
                        if (!d) {
                            ++e;
                            xc = [
                                1
                            ].concat(xc);
                        }
                    }
                }
                // Determine trailing zeros.
                for(k = xc.length; !xc[--k];);
                // E.g. [4, 11, 15] becomes 4bf.
                for(i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]));
                // Add leading zeros, decimal point and trailing zeros as required.
                str = toFixedPoint(str, e, alphabet.charAt(0));
            }
            // The caller will add the sign.
            return str;
        };
    }();
    // Perform division in the specified base. Called by div and convertBase.
    div = function() {
        // Assume non-zero x and k.
        function multiply(x, k, base) {
            var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
            for(x = x.slice(); i--;){
                xlo = x[i] % SQRT_BASE;
                xhi = x[i] / SQRT_BASE | 0;
                m = khi * xlo + xhi * klo;
                temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                x[i] = temp % base;
            }
            if (carry) x = [
                carry
            ].concat(x);
            return x;
        }
        function compare(a, b, aL, bL) {
            var i, cmp;
            if (aL != bL) {
                cmp = aL > bL ? 1 : -1;
            } else {
                for(i = cmp = 0; i < aL; i++){
                    if (a[i] != b[i]) {
                        cmp = a[i] > b[i] ? 1 : -1;
                        break;
                    }
                }
            }
            return cmp;
        }
        function subtract(a, b, aL, base) {
            var i = 0;
            // Subtract b from a.
            for(; aL--;){
                a[aL] -= i;
                i = a[aL] < b[aL] ? 1 : 0;
                a[aL] = i * base + a[aL] - b[aL];
            }
            // Remove leading zeros.
            for(; !a[0] && a.length > 1; a.splice(0, 1));
        }
        // x: dividend, y: divisor.
        return function(x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
            // Either NaN, Infinity or 0?
            if (!xc || !xc[0] || !yc || !yc[0]) {
                return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
            }
            q = new BigNumber(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;
            if (!base) {
                base = BASE;
                e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                s = s / LOG_BASE | 0;
            }
            // Result exponent may be one less then the current value of e.
            // The coefficients of the BigNumbers from convertBase may have trailing zeros.
            for(i = 0; yc[i] == (xc[i] || 0); i++);
            if (yc[i] > (xc[i] || 0)) e--;
            if (s < 0) {
                qc.push(1);
                more = true;
            } else {
                xL = xc.length;
                yL = yc.length;
                i = 0;
                s += 2;
                // Normalise xc and yc so highest order digit of yc is >= base / 2.
                n = mathfloor(base / (yc[0] + 1));
                // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                if (n > 1) {
                    yc = multiply(yc, n, base);
                    xc = multiply(xc, n, base);
                    yL = yc.length;
                    xL = xc.length;
                }
                xi = yL;
                rem = xc.slice(0, yL);
                remL = rem.length;
                // Add zeros to make remainder as long as divisor.
                for(; remL < yL; rem[remL++] = 0);
                yz = yc.slice();
                yz = [
                    0
                ].concat(yz);
                yc0 = yc[0];
                if (yc[1] >= base / 2) yc0++;
                // Not necessary, but to prevent trial digit n > base, when using base 3.
                // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                do {
                    n = 0;
                    // Compare divisor and remainder.
                    cmp = compare(yc, rem, yL, remL);
                    // If divisor < remainder.
                    if (cmp < 0) {
                        // Calculate trial digit, n.
                        rem0 = rem[0];
                        if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                        // n is how many times the divisor goes into the current remainder.
                        n = mathfloor(rem0 / yc0);
                        //  Algorithm:
                        //  product = divisor multiplied by trial digit (n).
                        //  Compare product and remainder.
                        //  If product is greater than remainder:
                        //    Subtract divisor from product, decrement trial digit.
                        //  Subtract product from remainder.
                        //  If product was less than remainder at the last compare:
                        //    Compare new remainder and divisor.
                        //    If remainder is greater than divisor:
                        //      Subtract divisor from remainder, increment trial digit.
                        if (n > 1) {
                            // n may be > base only when base is 3.
                            if (n >= base) n = base - 1;
                            // product = divisor * trial digit.
                            prod = multiply(yc, n, base);
                            prodL = prod.length;
                            remL = rem.length;
                            // Compare product and remainder.
                            // If product > remainder then trial digit n too high.
                            // n is 1 too high about 5% of the time, and is not known to have
                            // ever been more than 1 too high.
                            while(compare(prod, rem, prodL, remL) == 1){
                                n--;
                                // Subtract divisor from product.
                                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                prodL = prod.length;
                                cmp = 1;
                            }
                        } else {
                            // n is 0 or 1, cmp is -1.
                            // If n is 0, there is no need to compare yc and rem again below,
                            // so change cmp to 1 to avoid it.
                            // If n is 1, leave cmp as -1, so yc and rem are compared again.
                            if (n == 0) {
                                // divisor < remainder, so n must be at least 1.
                                cmp = n = 1;
                            }
                            // product = divisor
                            prod = yc.slice();
                            prodL = prod.length;
                        }
                        if (prodL < remL) prod = [
                            0
                        ].concat(prod);
                        // Subtract product from remainder.
                        subtract(rem, prod, remL, base);
                        remL = rem.length;
                        // If product was < remainder.
                        if (cmp == -1) {
                            // Compare divisor and new remainder.
                            // If divisor < new remainder, subtract divisor from remainder.
                            // Trial digit n too low.
                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                            while(compare(yc, rem, yL, remL) < 1){
                                n++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                remL = rem.length;
                            }
                        }
                    } else if (cmp === 0) {
                        n++;
                        rem = [
                            0
                        ];
                    } // else cmp === 1 and n will be 0
                    // Add the next digit, n, to the result array.
                    qc[i++] = n;
                    // Update the remainder.
                    if (rem[0]) {
                        rem[remL++] = xc[xi] || 0;
                    } else {
                        rem = [
                            xc[xi]
                        ];
                        remL = 1;
                    }
                }while ((xi++ < xL || rem[0] != null) && s--);
                more = rem[0] != null;
                // Leading zero?
                if (!qc[0]) qc.splice(0, 1);
            }
            if (base == BASE) {
                // To calculate q.e, first get the number of digits of qc[0].
                for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
            // Caller is convertBase.
            } else {
                q.e = e;
                q.r = +more;
            }
            return q;
        };
    }();
    /*
   * Return a string representing the value of BigNumber n in fixed-point or exponential
   * notation rounded to the specified decimal places or significant digits.
   *
   * n: a BigNumber.
   * i: the index of the last digit required (i.e. the digit that may be rounded up).
   * rm: the rounding mode.
   * id: 1 (toExponential) or 2 (toPrecision).
   */ function format(n, i, rm, id) {
        var c0, e, ne, len, str;
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);
        if (!n.c) return n.toString();
        c0 = n.c[0];
        ne = n.e;
        if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
        } else {
            n = round(new BigNumber(n), i, rm);
            // n.e may have changed if the value was rounded up.
            e = n.e;
            str = coeffToString(n.c);
            len = str.length;
            // toPrecision returns exponential notation if the number of significant digits
            // specified is less than the number of digits necessary to represent the integer
            // part of the value in fixed-point notation.
            // Exponential notation.
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                // Append zeros?
                for(; len < i; str += "0", len++);
                str = toExponential(str, e);
            // Fixed-point notation.
            } else {
                i -= ne;
                str = toFixedPoint(str, e, "0");
                // Append zeros?
                if (e + 1 > len) {
                    if (--i > 0) for(str += "."; i--; str += "0");
                } else {
                    i += e - len;
                    if (i > 0) {
                        if (e + 1 == len) str += ".";
                        for(; i--; str += "0");
                    }
                }
            }
        }
        return n.s < 0 && c0 ? "-" + str : str;
    }
    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
        var n, i = 1, m = new BigNumber(args[0]);
        for(; i < args.length; i++){
            n = new BigNumber(args[i]);
            // If any number is NaN, return NaN.
            if (!n.s) {
                m = n;
                break;
            } else if (method.call(m, n)) {
                m = n;
            }
        }
        return m;
    }
    /*
   * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
   * Called by minus, plus and times.
   */ function normalise(n, c, e) {
        var i = 1, j = c.length;
        // Remove trailing zeros.
        for(; !c[--j]; c.pop());
        // Calculate the base 10 exponent. First get the number of digits of c[0].
        for(j = c[0]; j >= 10; j /= 10, i++);
        // Overflow?
        if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
            // Infinity.
            n.c = n.e = null;
        // Underflow?
        } else if (e < MIN_EXP) {
            // Zero.
            n.c = [
                n.e = 0
            ];
        } else {
            n.e = e;
            n.c = c;
        }
        return n;
    }
    // Handle values that fail the validity test in BigNumber.
    parseNumeric = function() {
        var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(x, str, isNum, b) {
            var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
            // No exception on ±Infinity or NaN.
            if (isInfinityOrNaN.test(s)) {
                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
                if (!isNum) {
                    // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                    s = s.replace(basePrefix, function(m, p1, p2) {
                        base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                        return !b || b == base ? p1 : m;
                    });
                    if (b) {
                        base = b;
                        // E.g. '1.' to '1', '.1' to '0.1'
                        s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                    }
                    if (str != s) return new BigNumber(s, base);
                }
                // '[BigNumber Error] Not a number: {n}'
                // '[BigNumber Error] Not a base {b} number: {n}'
                if (BigNumber.DEBUG) {
                    throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                }
                // NaN
                x.s = null;
            }
            x.c = x.e = null;
        };
    }();
    /*
   * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
   * If r is truthy, it is known that there are more digits after the rounding digit.
   */ function round(x, sd, rm, r) {
        var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
        // if x is not Infinity or NaN...
        if (xc) {
            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
            // n is a base 1e14 number, the value of the element of array x.c containing rd.
            // ni is the index of n within x.c.
            // d is the number of digits of n.
            // i is the index of rd within n including leading zeros.
            // j is the actual index of rd within n (if < 0, rd is a leading zero).
            out: {
                // Get the number of digits of the first element of xc.
                for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                i = sd - d;
                // If the rounding digit is in the first element of xc...
                if (i < 0) {
                    i += LOG_BASE;
                    j = sd;
                    n = xc[ni = 0];
                    // Get the rounding digit at index j of n.
                    rd = n / pows10[d - j - 1] % 10 | 0;
                } else {
                    ni = mathceil((i + 1) / LOG_BASE);
                    if (ni >= xc.length) {
                        if (r) {
                            // Needed by sqrt.
                            for(; xc.length <= ni; xc.push(0));
                            n = rd = 0;
                            d = 1;
                            i %= LOG_BASE;
                            j = i - LOG_BASE + 1;
                        } else {
                            break out;
                        }
                    } else {
                        n = k = xc[ni];
                        // Get the number of digits of n.
                        for(d = 1; k >= 10; k /= 10, d++);
                        // Get the index of rd within n.
                        i %= LOG_BASE;
                        // Get the index of rd within n, adjusted for leading zeros.
                        // The number of leading zeros of n is given by LOG_BASE - d.
                        j = i - LOG_BASE + d;
                        // Get the rounding digit at index j of n.
                        rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                    }
                }
                r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                if (sd < 1 || !xc[0]) {
                    xc.length = 0;
                    if (r) {
                        // Convert sd to decimal places.
                        sd -= x.e + 1;
                        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                        xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                        x.e = -sd || 0;
                    } else {
                        // Zero.
                        xc[0] = x.e = 0;
                    }
                    return x;
                }
                // Remove excess digits.
                if (i == 0) {
                    xc.length = ni;
                    k = 1;
                    ni--;
                } else {
                    xc.length = ni + 1;
                    k = pows10[LOG_BASE - i];
                    // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                    // j > 0 means i > number of leading zeros of n.
                    xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                }
                // Round up?
                if (r) {
                    for(;;){
                        // If the digit to be rounded up is in the first element of xc...
                        if (ni == 0) {
                            // i will be the length of xc[0] before k is added.
                            for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                            j = xc[0] += k;
                            for(k = 1; j >= 10; j /= 10, k++);
                            // if i != k the length has increased.
                            if (i != k) {
                                x.e++;
                                if (xc[0] == BASE) xc[0] = 1;
                            }
                            break;
                        } else {
                            xc[ni] += k;
                            if (xc[ni] != BASE) break;
                            xc[ni--] = 0;
                            k = 1;
                        }
                    }
                }
                // Remove trailing zeros.
                for(i = xc.length; xc[--i] === 0; xc.pop());
            }
            // Overflow? Infinity.
            if (x.e > MAX_EXP) {
                x.c = x.e = null;
            // Underflow? Zero.
            } else if (x.e < MIN_EXP) {
                x.c = [
                    x.e = 0
                ];
            }
        }
        return x;
    }
    function valueOf(n) {
        var str, e = n.e;
        if (e === null) return n.toString();
        str = coeffToString(n.c);
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
        return n.s < 0 ? "-" + str : str;
    }
    // PROTOTYPE/INSTANCE METHODS
    /*
   * Return a new BigNumber whose value is the absolute value of this BigNumber.
   */ P.absoluteValue = P.abs = function() {
        var x = new BigNumber(this);
        if (x.s < 0) x.s = 1;
        return x;
    };
    /*
   * Return
   *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
   *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
   *   0 if they have the same value,
   *   or null if the value of either is NaN.
   */ P.comparedTo = function(y, b) {
        return compare(this, new BigNumber(y, b));
    };
    /*
   * If dp is undefined or null or true or false, return the number of decimal places of the
   * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   *
   * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */ P.decimalPlaces = P.dp = function(dp, rm) {
        var c, n, v, x = this;
        if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(new BigNumber(x), dp + x.e + 1, rm);
        }
        if (!(c = x.c)) return null;
        n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
        // Subtract the number of trailing zeros of the last number.
        if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
        if (n < 0) n = 0;
        return n;
    };
    /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
   * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */ P.dividedBy = P.div = function(y, b) {
        return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };
    /*
   * Return a new BigNumber whose value is the integer part of dividing the value of this
   * BigNumber by the value of BigNumber(y, b).
   */ P.dividedToIntegerBy = P.idiv = function(y, b) {
        return div(this, new BigNumber(y, b), 0, 1);
    };
    /*
   * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
   *
   * If m is present, return the result modulo m.
   * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
   * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
   *
   * The modular power operation works efficiently when x, n, and m are integers, otherwise it
   * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
   *
   * n {number|string|BigNumber} The exponent. An integer.
   * [m] {number|string|BigNumber} The modulus.
   *
   * '[BigNumber Error] Exponent not an integer: {n}'
   */ P.exponentiatedBy = P.pow = function(n, m) {
        var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
        n = new BigNumber(n);
        // Allow NaN and ±Infinity, but not other non-integers.
        if (n.c && !n.isInteger()) {
            throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
        }
        if (m != null) m = new BigNumber(m);
        // Exponent of MAX_SAFE_INTEGER is 15.
        nIsBig = n.e > 14;
        // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
        if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
            // The sign of the result of pow when x is negative depends on the evenness of n.
            // If +n overflows to ±Infinity, the evenness of n would be not be known.
            y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
            return m ? y.mod(m) : y;
        }
        nIsNeg = n.s < 0;
        if (m) {
            // x % m returns NaN if abs(m) is zero, or m is NaN.
            if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
            isModExp = !nIsNeg && x.isInteger() && m.isInteger();
            if (isModExp) x = x.mod(m);
        // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
        // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
        } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
            // If x is negative and n is odd, k = -0, else k = 0.
            k = x.s < 0 && isOdd(n) ? -0 : 0;
            // If x >= 1, k = ±Infinity.
            if (x.e > -1) k = 1 / k;
            // If n is negative return ±0, else return ±Infinity.
            return new BigNumber(nIsNeg ? 1 / k : k);
        } else if (POW_PRECISION) {
            // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
        }
        if (nIsBig) {
            half = new BigNumber(0.5);
            if (nIsNeg) n.s = 1;
            nIsOdd = isOdd(n);
        } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
        }
        y = new BigNumber(ONE);
        // Performs 54 loop iterations for n of 9007199254740991.
        for(;;){
            if (nIsOdd) {
                y = y.times(x);
                if (!y.c) break;
                if (k) {
                    if (y.c.length > k) y.c.length = k;
                } else if (isModExp) {
                    y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
            }
            if (i) {
                i = mathfloor(i / 2);
                if (i === 0) break;
                nIsOdd = i % 2;
            } else {
                n = n.times(half);
                round(n, n.e + 1, 1);
                if (n.e > 14) {
                    nIsOdd = isOdd(n);
                } else {
                    i = +valueOf(n);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                }
            }
            x = x.times(x);
            if (k) {
                if (x.c && x.c.length > k) x.c.length = k;
            } else if (isModExp) {
                x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
        }
        if (isModExp) return y;
        if (nIsNeg) y = ONE.div(y);
        return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };
    /*
   * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
   * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
   */ P.integerValue = function(rm) {
        var n = new BigNumber(this);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);
        return round(n, n.e + 1, rm);
    };
    /*
   * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
   * otherwise return false.
   */ P.isEqualTo = P.eq = function(y, b) {
        return compare(this, new BigNumber(y, b)) === 0;
    };
    /*
   * Return true if the value of this BigNumber is a finite number, otherwise return false.
   */ P.isFinite = function() {
        return !!this.c;
    };
    /*
   * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
   * otherwise return false.
   */ P.isGreaterThan = P.gt = function(y, b) {
        return compare(this, new BigNumber(y, b)) > 0;
    };
    /*
   * Return true if the value of this BigNumber is greater than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
        return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
    };
    /*
   * Return true if the value of this BigNumber is an integer, otherwise return false.
   */ P.isInteger = function() {
        return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };
    /*
   * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
   * otherwise return false.
   */ P.isLessThan = P.lt = function(y, b) {
        return compare(this, new BigNumber(y, b)) < 0;
    };
    /*
   * Return true if the value of this BigNumber is less than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
        return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };
    /*
   * Return true if the value of this BigNumber is NaN, otherwise return false.
   */ P.isNaN = function() {
        return !this.s;
    };
    /*
   * Return true if the value of this BigNumber is negative, otherwise return false.
   */ P.isNegative = function() {
        return this.s < 0;
    };
    /*
   * Return true if the value of this BigNumber is positive, otherwise return false.
   */ P.isPositive = function() {
        return this.s > 0;
    };
    /*
   * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
   */ P.isZero = function() {
        return !!this.c && this.c[0] == 0;
    };
    /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber minus the value of
   * BigNumber(y, b).
   */ P.minus = function(y, b) {
        var i, j, t, xLTy, x = this, a = x.s;
        y = new BigNumber(y, b);
        b = y.s;
        // Either NaN?
        if (!a || !b) return new BigNumber(NaN);
        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.plus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
            // Either Infinity?
            if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
            // Either zero?
            if (!xc[0] || !yc[0]) {
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
            }
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        // Determine which is the bigger number.
        if (a = xe - ye) {
            if (xLTy = a < 0) {
                a = -a;
                t = xc;
            } else {
                ye = xe;
                t = yc;
            }
            t.reverse();
            // Prepend zeros to equalise exponents.
            for(b = a; b--; t.push(0));
            t.reverse();
        } else {
            // Exponents equal. Check digit by digit.
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
            for(a = b = 0; b < j; b++){
                if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
        }
        // x < y? Point xc to the array of the bigger number.
        if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
        b = (j = yc.length) - (i = xc.length);
        // Append zeros to xc if shorter.
        // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
        if (b > 0) for(; b--; xc[i++] = 0);
        b = BASE - 1;
        // Subtract yc from xc.
        for(; j > a;){
            if (xc[--j] < yc[j]) {
                for(i = j; i && !xc[--i]; xc[i] = b);
                --xc[i];
                xc[j] += BASE;
            }
            xc[j] -= yc[j];
        }
        // Remove leading zeros and adjust exponent accordingly.
        for(; xc[0] == 0; xc.splice(0, 1), --ye);
        // Zero?
        if (!xc[0]) {
            // Following IEEE 754 (2008) 6.3,
            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [
                y.e = 0
            ];
            return y;
        }
        // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
        // for finite x and y.
        return normalise(y, xc, ye);
    };
    /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
   * BigNumber(y, b). The result depends on the value of MODULO_MODE.
   */ P.modulo = P.mod = function(y, b) {
        var q, s, x = this;
        y = new BigNumber(y, b);
        // Return NaN if x is Infinity or NaN, or y is NaN or zero.
        if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber(NaN);
        // Return x if y is Infinity or x is zero.
        } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber(x);
        }
        if (MODULO_MODE == 9) {
            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // r = x - qy    where  0 <= r < abs(y)
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
        } else {
            q = div(x, y, 0, MODULO_MODE);
        }
        y = x.minus(q.times(y));
        // To match JavaScript %, ensure sign of zero is sign of dividend.
        if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
        return y;
    };
    /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
   * of BigNumber(y, b).
   */ P.multipliedBy = P.times = function(y, b) {
        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
        // Either NaN, ±Infinity or ±0?
        if (!xc || !yc || !xc[0] || !yc[0]) {
            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                y.c = y.e = y.s = null;
            } else {
                y.s *= x.s;
                // Return ±Infinity if either is ±Infinity.
                if (!xc || !yc) {
                    y.c = y.e = null;
                // Return ±0 if either is ±0.
                } else {
                    y.c = [
                        0
                    ];
                    y.e = 0;
                }
            }
            return y;
        }
        e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
        y.s *= x.s;
        xcL = xc.length;
        ycL = yc.length;
        // Ensure xc points to longer array and xcL to its length.
        if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
        // Initialise the result array with zeros.
        for(i = xcL + ycL, zc = []; i--; zc.push(0));
        base = BASE;
        sqrtBase = SQRT_BASE;
        for(i = ycL; --i >= 0;){
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;
            for(k = xcL, j = i + k; j > i;){
                xlo = xc[--k] % sqrtBase;
                xhi = xc[k] / sqrtBase | 0;
                m = yhi * xlo + xhi * ylo;
                xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                zc[j--] = xlo % base;
            }
            zc[j] = c;
        }
        if (c) {
            ++e;
        } else {
            zc.splice(0, 1);
        }
        return normalise(y, zc, e);
    };
    /*
   * Return a new BigNumber whose value is the value of this BigNumber negated,
   * i.e. multiplied by -1.
   */ P.negated = function() {
        var x = new BigNumber(this);
        x.s = -x.s || null;
        return x;
    };
    /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber plus the value of
   * BigNumber(y, b).
   */ P.plus = function(y, b) {
        var t, x = this, a = x.s;
        y = new BigNumber(y, b);
        b = y.s;
        // Either NaN?
        if (!a || !b) return new BigNumber(NaN);
        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.minus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
            // Return ±Infinity if either ±Infinity.
            if (!xc || !yc) return new BigNumber(a / 0);
            // Either zero?
            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
            if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
        if (a = xe - ye) {
            if (a > 0) {
                ye = xe;
                t = yc;
            } else {
                a = -a;
                t = xc;
            }
            t.reverse();
            for(; a--; t.push(0));
            t.reverse();
        }
        a = xc.length;
        b = yc.length;
        // Point xc to the longer array, and b to the shorter length.
        if (a - b < 0) t = yc, yc = xc, xc = t, b = a;
        // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
        for(a = 0; b;){
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
        }
        if (a) {
            xc = [
                a
            ].concat(xc);
            ++ye;
        }
        // No need to check for zero, as +x + +y != 0 && -x + -y != 0
        // ye = MAX_EXP + 1 possible
        return normalise(y, xc, ye);
    };
    /*
   * If sd is undefined or null or true or false, return the number of significant digits of
   * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   * If sd is true include integer-part trailing zeros in the count.
   *
   * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
   *                     boolean: whether to count integer-part trailing zeros: true or false.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */ P.precision = P.sd = function(sd, rm) {
        var c, n, v, x = this;
        if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(new BigNumber(x), sd, rm);
        }
        if (!(c = x.c)) return null;
        v = c.length - 1;
        n = v * LOG_BASE + 1;
        if (v = c[v]) {
            // Subtract the number of trailing zeros of the last element.
            for(; v % 10 == 0; v /= 10, n--);
            // Add the number of digits of the first element.
            for(v = c[0]; v >= 10; v /= 10, n++);
        }
        if (sd && x.e + 1 > n) n = x.e + 1;
        return n;
    };
    /*
   * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
   * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
   *
   * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
   */ P.shiftedBy = function(k) {
        intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        return this.times("1e" + k);
    };
    /*
   *  sqrt(-n) =  N
   *  sqrt(N) =  N
   *  sqrt(-I) =  N
   *  sqrt(I) =  I
   *  sqrt(0) =  0
   *  sqrt(-0) = -0
   *
   * Return a new BigNumber whose value is the square root of the value of this BigNumber,
   * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */ P.squareRoot = P.sqrt = function() {
        var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber("0.5");
        // Negative/NaN/Infinity/zero?
        if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
        }
        // Initial estimate.
        s = Math.sqrt(+valueOf(x));
        // Math.sqrt underflow/overflow?
        // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
        if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0) n += "0";
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) {
                n = "5e" + e;
            } else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf("e") + 1) + e;
            }
            r = new BigNumber(n);
        } else {
            r = new BigNumber(s + "");
        }
        // Check for zero.
        // r could be zero if MIN_EXP is changed after the this value was created.
        // This would cause a division by zero (x/t) and hence Infinity below, which would cause
        // coeffToString to throw.
        if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3) s = 0;
            // Newton-Raphson iteration.
            for(;;){
                t = r;
                r = half.times(t.plus(div(x, t, dp, 1)));
                if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                    // The exponent of r may here be one less than the final result exponent,
                    // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                    // are indexed correctly.
                    if (r.e < e) --s;
                    n = n.slice(s - 3, s + 1);
                    // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                    // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                    // iteration.
                    if (n == "9999" || !rep && n == "4999") {
                        // On the first iteration only, check to see if rounding up gives the
                        // exact result as the nines may infinitely repeat.
                        if (!rep) {
                            round(t, t.e + DECIMAL_PLACES + 2, 0);
                            if (t.times(t).eq(x)) {
                                r = t;
                                break;
                            }
                        }
                        dp += 4;
                        s += 4;
                        rep = 1;
                    } else {
                        // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                        // result. If not, then there are further digits and m will be truthy.
                        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                            // Truncate to the first rounding digit.
                            round(r, r.e + DECIMAL_PLACES + 2, 1);
                            m = !r.times(r).eq(x);
                        }
                        break;
                    }
                }
            }
        }
        return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };
    /*
   * Return a string representing the value of this BigNumber in exponential notation and
   * rounded using ROUNDING_MODE to dp fixed decimal places.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */ P.toExponential = function(dp, rm) {
        if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
        }
        return format(this, dp, rm, 1);
    };
    /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounding
   * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
   * but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */ P.toFixed = function(dp, rm) {
        if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
        }
        return format(this, dp, rm);
    };
    /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounded
   * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
   * of the format or FORMAT object (see BigNumber.set).
   *
   * The formatting object may contain some or all of the properties shown below.
   *
   * FORMAT = {
   *   prefix: '',
   *   groupSize: 3,
   *   secondaryGroupSize: 0,
   *   groupSeparator: ',',
   *   decimalSeparator: '.',
   *   fractionGroupSize: 0,
   *   fractionGroupSeparator: '\xA0',      // non-breaking space
   *   suffix: ''
   * };
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   * [format] {object} Formatting options. See FORMAT pbject above.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   * '[BigNumber Error] Argument not an object: {format}'
   */ P.toFormat = function(dp, rm, format) {
        var str, x = this;
        if (format == null) {
            if (dp != null && rm && typeof rm == "object") {
                format = rm;
                rm = null;
            } else if (dp && typeof dp == "object") {
                format = dp;
                dp = rm = null;
            } else {
                format = FORMAT;
            }
        } else if (typeof format != "object") {
            throw Error(bignumberError + "Argument not an object: " + format);
        }
        str = x.toFixed(dp, rm);
        if (x.c) {
            var i, arr = str.split("."), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
            if (g2) i = g1, g1 = g2, g2 = i, len -= i;
            if (g1 > 0 && len > 0) {
                i = len % g1 || g1;
                intPart = intDigits.substr(0, i);
                for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                if (isNeg) intPart = "-" + intPart;
            }
            str = fractionPart ? intPart + (format.decimalSeparator || "") + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format.fractionGroupSeparator || "")) : fractionPart) : intPart;
        }
        return (format.prefix || "") + str + (format.suffix || "");
    };
    /*
   * Return an array of two BigNumbers representing the value of this BigNumber as a simple
   * fraction with an integer numerator and an integer denominator.
   * The denominator will be a positive non-zero value less than or equal to the specified
   * maximum denominator. If a maximum denominator is not specified, the denominator will be
   * the lowest value necessary to represent the number exactly.
   *
   * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
   *
   * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
   */ P.toFraction = function(md) {
        var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
        if (md != null) {
            n = new BigNumber(md);
            // Throw if md is less than one or is not an integer, unless it is Infinity.
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
        }
        if (!xc) return new BigNumber(x);
        d = new BigNumber(ONE);
        n1 = d0 = new BigNumber(ONE);
        d1 = n0 = new BigNumber(ONE);
        s = coeffToString(xc);
        // Determine initial denominator.
        // d is a power of 10 and the minimum max denominator that specifies the value exactly.
        e = d.e = s.length - x.e - 1;
        d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
        md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
        exp = MAX_EXP;
        MAX_EXP = 1 / 0;
        n = new BigNumber(s);
        // n0 = d1 = 0
        n0.c[0] = 0;
        for(;;){
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1) break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
        }
        d2 = div(md.minus(d0), d1, 0, 1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        e = e * 2;
        // Determine which fraction is closer to x, n0/d0 or n1/d1
        r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
            n1,
            d1
        ] : [
            n0,
            d0
        ];
        MAX_EXP = exp;
        return r;
    };
    /*
   * Return the value of this BigNumber converted to a number primitive.
   */ P.toNumber = function() {
        return +valueOf(this);
    };
    /*
   * Return a string representing the value of this BigNumber rounded to sd significant digits
   * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
   * necessary to represent the integer part of the value in fixed-point notation, then use
   * exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */ P.toPrecision = function(sd, rm) {
        if (sd != null) intCheck(sd, 1, MAX);
        return format(this, sd, rm, 2);
    };
    /*
   * Return a string representing the value of this BigNumber in base b, or base 10 if b is
   * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
   * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
   * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
   * TO_EXP_NEG, return exponential notation.
   *
   * [b] {number} Integer, 2 to ALPHABET.length inclusive.
   *
   * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
   */ P.toString = function(b) {
        var str, n = this, s = n.s, e = n.e;
        // Infinity or NaN?
        if (e === null) {
            if (s) {
                str = "Infinity";
                if (s < 0) str = "-" + str;
            } else {
                str = "NaN";
            }
        } else {
            if (b == null) {
                str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
            } else if (b === 10 && alphabetHasNormalDecimalDigits) {
                n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                str = toFixedPoint(coeffToString(n.c), n.e, "0");
            } else {
                intCheck(b, 2, ALPHABET.length, "Base");
                str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
            }
            if (s < 0 && n.c[0]) str = "-" + str;
        }
        return str;
    };
    /*
   * Return as toString, but do not accept a base argument, and include the minus sign for
   * negative zero.
   */ P.valueOf = P.toJSON = function() {
        return valueOf(this);
    };
    P._isBigNumber = true;
    P[Symbol.toStringTag] = "BigNumber";
    // Node.js v10.12.0+
    P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf;
    if (configObject != null) BigNumber.set(configObject);
    return BigNumber;
}
// PRIVATE HELPER FUNCTIONS
// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
}
// Return a coefficient array as a string of base 10 digits.
function coeffToString(a) {
    var s, z, i = 1, j = a.length, r = a[0] + "";
    for(; i < j;){
        s = a[i++] + "";
        z = LOG_BASE - s.length;
        for(; z--; s = "0" + s);
        r += s;
    }
    // Determine trailing zeros.
    for(j = r.length; r.charCodeAt(--j) === 48;);
    return r.slice(0, j + 1 || 1);
}
// Compare the value of BigNumbers x and y.
function compare(x, y) {
    var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either NaN?
    if (!i || !j) return null;
    a = xc && !xc[0];
    b = yc && !yc[0];
    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;
    // Signs differ?
    if (i != j) return i;
    a = i < 0;
    b = k == l;
    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l;
    // Compare digit by digit.
    for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
}
/*
 * Check that n is a primitive number, an integer, and in range, otherwise throw.
 */ function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
        throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
    }
}
// Assumes finite n.
function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str, e, z) {
    var len, zs;
    // Negative exponent?
    if (e < 0) {
        // Prepend zeros.
        for(zs = z + "."; ++e; zs += z);
        str = zs + str;
    // Positive exponent
    } else {
        len = str.length;
        // Append zeros.
        if (++e > len) {
            for(zs = z, e -= len; --e; zs += z);
            str += zs;
        } else if (e < len) {
            str = str.slice(0, e) + "." + str.slice(e);
        }
    }
    return str;
}
// EXPORT
var BigNumber = clone();
/* harmony default export */ const bignumber = (BigNumber);

;// CONCATENATED MODULE: ./lib/consts.ts

const WEI = new bignumber(10 ** 18);
const GWEI = new bignumber(10 ** 9);
const WEI_IN_GWEI = WEI.dividedBy(GWEI);
const ZERO = new bignumber(0);
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;
const Kb = 1000;
const Mb = 1000 * Kb;
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

;// CONCATENATED MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
/*! js-cookie v3.0.1 | MIT */ /* eslint-disable no-var */ function js_cookie_assign(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            target[key] = source[key];
        }
    }
    return target;
}
/* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
    read: function(value) {
        if (value[0] === '"') {
            value = value.slice(1, -1);
        }
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
        return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
};
/* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
    function set(key, value, attributes) {
        if (typeof document === "undefined") {
            return;
        }
        attributes = js_cookie_assign({}, defaultAttributes, attributes);
        if (typeof attributes.expires === "number") {
            attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
        }
        if (attributes.expires) {
            attributes.expires = attributes.expires.toUTCString();
        }
        key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var stringifiedAttributes = "";
        for(var attributeName in attributes){
            if (!attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += "; " + attributeName;
            if (attributes[attributeName] === true) {
                continue;
            }
            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
        }
        return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
    }
    function get(key) {
        if (typeof document === "undefined" || arguments.length && !key) {
            return;
        }
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        var jar = {};
        for(var i = 0; i < cookies.length; i++){
            var parts = cookies[i].split("=");
            var value = parts.slice(1).join("=");
            try {
                var foundKey = decodeURIComponent(parts[0]);
                jar[foundKey] = converter.read(value, foundKey);
                if (key === foundKey) {
                    break;
                }
            } catch (e) {}
        }
        return key ? jar[key] : jar;
    }
    return Object.create({
        set: set,
        get: get,
        remove: function(key, attributes) {
            set(key, "", js_cookie_assign({}, attributes, {
                expires: -1
            }));
        },
        withAttributes: function(attributes) {
            return init(this.converter, js_cookie_assign({}, this.attributes, attributes));
        },
        withConverter: function(converter) {
            return init(js_cookie_assign({}, this.converter, converter), this.attributes);
        }
    }, {
        attributes: {
            value: Object.freeze(defaultAttributes)
        },
        converter: {
            value: Object.freeze(converter)
        }
    });
}
var js_cookie_api = init(defaultConverter, {
    path: "/"
});
/* eslint-enable no-var */ /* harmony default export */ const js_cookie = ((/* unused pure expression or super */ null && (js_cookie_api)));

;// CONCATENATED MODULE: ./lib/cookies.ts


var NAMES;
(function(NAMES) {
    NAMES["NAV_BAR_COLLAPSED"] = "nav_bar_collapsed";
    NAMES["API_TOKEN"] = "_explorer_key";
    NAMES["INVALID_SESSION"] = "invalid_session";
    NAMES["CONFIRM_EMAIL_PAGE_VIEWED"] = "confirm_email_page_viewed";
    NAMES["TXS_SORT"] = "txs_sort";
    NAMES["COLOR_MODE"] = "chakra-ui-color-mode";
    NAMES["COLOR_MODE_HEX"] = "chakra-ui-color-mode-hex";
    NAMES["INDEXING_ALERT"] = "indexing_alert";
    NAMES["ADBLOCK_DETECTED"] = "adblock_detected";
    NAMES["MIXPANEL_DEBUG"] = "_mixpanel_debug";
    NAMES["ADDRESS_NFT_DISPLAY_TYPE"] = "address_nft_display_type";
    NAMES["UUID"] = "uuid";
})(NAMES || (NAMES = {}));
function get(name, serverCookie) {
    if (!isBrowser()) {
        return serverCookie ? getFromCookieString(serverCookie, name) : undefined;
    }
    if (name) {
        return Cookies.get(name);
    }
}
function set(name, value, attributes = {}) {
    attributes.path = "/";
    return Cookies.set(name, value, attributes);
}
function getFromCookieString(cookieString, name) {
    return cookieString.split(`${name}=`)[1]?.split(";")[0];
}

;// CONCATENATED MODULE: ./nextjs/middlewares/account.ts





function account_account(req) {
    const feature = configs_app.features.account;
    if (!feature.isEnabled) {
        return;
    }
    const apiTokenCookie = req.cookies.get(NAMES.API_TOKEN);
    // if user doesn't have api token cookie and he is trying to access account page
    // do redirect to auth page
    if (!apiTokenCookie) {
        // we don't have any info from router here, so just do straight forward sub-string search (sorry)
        const isAccountRoute = req.nextUrl.pathname.includes("/account/") || req.nextUrl.pathname === "/txs" && req.nextUrl.searchParams.get("tab") === "watchlist";
        const isProfileRoute = req.nextUrl.pathname.includes("/auth/profile");
        if (isAccountRoute || isProfileRoute) {
            const authUrl = feature.authUrl + route({
                pathname: "/auth/auth0",
                query: {
                    path: req.nextUrl.pathname
                }
            });
            return NextResponse.redirect(authUrl);
        }
    }
    // if user hasn't confirmed email yet
    if (req.cookies.get(NAMES.INVALID_SESSION)) {
        // if user has both cookies, make redirect to logout
        if (apiTokenCookie) {
            // yes, we could have checked that the current URL is not the logout URL, but we hadn't
            // logout URL is always external URL in auth0.com sub-domain
            // at least we hope so
            const res = NextResponse.redirect(feature.logoutUrl);
            res.cookies.delete(NAMES.CONFIRM_EMAIL_PAGE_VIEWED); // reset cookie to show email verification page again
            return res;
        }
        // if user hasn't seen email verification page, make redirect to it
        if (!req.cookies.get(NAMES.CONFIRM_EMAIL_PAGE_VIEWED)) {
            if (!req.nextUrl.pathname.includes("/auth/unverified-email")) {
                const url = configs_app.app.baseUrl + route({
                    pathname: "/auth/unverified-email"
                });
                const res = NextResponse.redirect(url);
                res.cookies.set({
                    name: NAMES.CONFIRM_EMAIL_PAGE_VIEWED,
                    value: "true",
                    expires: Date.now() + 7 * DAY
                });
                return res;
            }
        }
    }
}

;// CONCATENATED MODULE: ./nextjs/middlewares/index.ts


;// CONCATENATED MODULE: ./middleware.ts



const cspPolicy = csp_generateCspPolicy();
function middleware(req) {
    const isPageRequest = req.headers.get("accept")?.includes("text/html");
    const start = Date.now();
    if (!isPageRequest) {
        return;
    }
    const accountResponse = account_account(req);
    if (accountResponse) {
        return accountResponse;
    }
    const end = Date.now();
    const res = NextResponse.next();
    // res.headers.append('Content-Security-Policy', cspPolicy);
    res.headers.append("Server-Timing", `middleware;dur=${end - start}`);
    res.headers.append("Docker-ID", process.env.HOSTNAME || "");
    return res;
}
/**
 * Configure which routes should pass through the Middleware.
 */ const middleware_config = {
    matcher: [
        "/",
        "/:notunderscore((?!_next).+)"
    ]
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fyzw%2FDownloads%2Ffrontend&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLyhcXC8%2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk%2FKD86XFwvKCg%2FIV9uZXh0KS4rKSkoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvOm5vdHVuZGVyc2NvcmUoKD8hX25leHQpLispIn1d&preferredRegion=&middlewareConfig=eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLyhcXC8%2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk%2FKD86XFwvKCg%2FIV9uZXh0KS4rKSkoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvOm5vdHVuZGVyc2NvcmUoKD8hX25leHQpLispIn1dfQ%3D%3D!

        
        
        

        const mod = { ...middleware_namespaceObject }
        const handler = mod.middleware || mod.default

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fyzw_2FDownloads_2Ffrontend_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLyhcXC8_2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FKD86XFwvKCg_2FIV9uZXh0KS4rKSkoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvOm5vdHVuZGVyc2NvcmUoKD8hX25leHQpLispIn1d_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLyhcXC8_2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FKD86XFwvKCg_2FIV9uZXh0KS4rKSkoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvOm5vdHVuZGVyc2NvcmUoKD8hX25leHQpLispIn1dfQ_3D_3D_(opts) {
          return adapter({
            ...opts,
            page: "/middleware",
            handler,
          })
        }
    

/***/ }),

/***/ 845:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

;
(function(root, factory) {
    if (true) {
        // CommonJS
        module.exports = exports = factory();
    } else {}
})(void 0, function() {
    /*globals window, global, require*/ /**
	 * CryptoJS core components.
	 */ var CryptoJS = CryptoJS || function(Math1, undefined) {
        var crypto;
        // Native crypto from window (Browser)
        if (false) {}
        // Native crypto in web worker (Browser)
        if (typeof self !== "undefined" && self.crypto) {
            crypto = self.crypto;
        }
        // Native crypto from worker
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto = globalThis.crypto;
        }
        // Native (experimental IE 11) crypto from window (Browser)
        if (!crypto && "undefined" !== "undefined" && 0) {}
        // Native crypto from global (NodeJS)
        if (!crypto && typeof __webpack_require__.g !== "undefined" && __webpack_require__.g.crypto) {
            crypto = __webpack_require__.g.crypto;
        }
        // Native crypto import via require (NodeJS)
        if (!crypto && "function" === "function") {
            try {
                crypto = __webpack_require__(480);
            } catch (err) {}
        }
        /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */ var cryptoSecureRandomInt = function() {
            if (crypto) {
                // Use getRandomValues method (Browser)
                if (typeof crypto.getRandomValues === "function") {
                    try {
                        return crypto.getRandomValues(new Uint32Array(1))[0];
                    } catch (err) {}
                }
                // Use randomBytes method (NodeJS)
                if (typeof crypto.randomBytes === "function") {
                    try {
                        return crypto.randomBytes(4).readInt32LE();
                    } catch (err) {}
                }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
        };
        /*
	     * Local polyfill of Object.create

	     */ var create = Object.create || function() {
            function F() {}
            return function(obj) {
                var subtype;
                F.prototype = obj;
                subtype = new F();
                F.prototype = null;
                return subtype;
            };
        }();
        /**
	     * CryptoJS namespace.
	     */ var C = {};
        /**
	     * Library namespace.
	     */ var C_lib = C.lib = {};
        /**
	     * Base object for prototypal inheritance.
	     */ var Base = C_lib.Base = function() {
            return {
                /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */ extend: function(overrides) {
                    // Spawn
                    var subtype = create(this);
                    // Augment
                    if (overrides) {
                        subtype.mixIn(overrides);
                    }
                    // Create default initializer
                    if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                        subtype.init = function() {
                            subtype.$super.init.apply(this, arguments);
                        };
                    }
                    // Initializer's prototype is the subtype object
                    subtype.init.prototype = subtype;
                    // Reference supertype
                    subtype.$super = this;
                    return subtype;
                },
                /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */ create: function() {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);
                    return instance;
                },
                /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */ init: function() {},
                /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */ mixIn: function(properties) {
                    for(var propertyName in properties){
                        if (properties.hasOwnProperty(propertyName)) {
                            this[propertyName] = properties[propertyName];
                        }
                    }
                    // IE won't copy toString using the loop above
                    if (properties.hasOwnProperty("toString")) {
                        this.toString = properties.toString;
                    }
                },
                /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */ clone: function() {
                    return this.init.prototype.extend(this);
                }
            };
        }();
        /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */ var WordArray = C_lib.WordArray = Base.extend({
            /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */ init: function(words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined) {
                    this.sigBytes = sigBytes;
                } else {
                    this.sigBytes = words.length * 4;
                }
            },
            /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */ toString: function(encoder) {
                return (encoder || Hex).stringify(this);
            },
            /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */ concat: function(wordArray) {
                // Shortcuts
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                // Clamp excess bits
                this.clamp();
                // Concat
                if (thisSigBytes % 4) {
                    // Copy one byte at a time
                    for(var i = 0; i < thatSigBytes; i++){
                        var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                        thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                    }
                } else {
                    // Copy one word at a time
                    for(var j = 0; j < thatSigBytes; j += 4){
                        thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                    }
                }
                this.sigBytes += thatSigBytes;
                // Chainable
                return this;
            },
            /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */ clamp: function() {
                // Shortcuts
                var words = this.words;
                var sigBytes = this.sigBytes;
                // Clamp
                words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
                words.length = Math1.ceil(sigBytes / 4);
            },
            /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */ clone: function() {
                var clone = Base.clone.call(this);
                clone.words = this.words.slice(0);
                return clone;
            },
            /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */ random: function(nBytes) {
                var words = [];
                for(var i = 0; i < nBytes; i += 4){
                    words.push(cryptoSecureRandomInt());
                }
                return new WordArray.init(words, nBytes);
            }
        });
        /**
	     * Encoder namespace.
	     */ var C_enc = C.enc = {};
        /**
	     * Hex encoding strategy.
	     */ var Hex = C_enc.Hex = {
            /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var hexChars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 0x0f).toString(16));
                }
                return hexChars.join("");
            },
            /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */ parse: function(hexStr) {
                // Shortcut
                var hexStrLength = hexStr.length;
                // Convert
                var words = [];
                for(var i = 0; i < hexStrLength; i += 2){
                    words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                }
                return new WordArray.init(words, hexStrLength / 2);
            }
        };
        /**
	     * Latin1 encoding strategy.
	     */ var Latin1 = C_enc.Latin1 = {
            /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var latin1Chars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join("");
            },
            /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */ parse: function(latin1Str) {
                // Shortcut
                var latin1StrLength = latin1Str.length;
                // Convert
                var words = [];
                for(var i = 0; i < latin1StrLength; i++){
                    words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
                }
                return new WordArray.init(words, latin1StrLength);
            }
        };
        /**
	     * UTF-8 encoding strategy.
	     */ var Utf8 = C_enc.Utf8 = {
            /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */ stringify: function(wordArray) {
                try {
                    return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                } catch (e) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */ parse: function(utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
        };
        /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */ var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */ reset: function() {
                // Initial values
                this._data = new WordArray.init();
                this._nDataBytes = 0;
            },
            /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */ _append: function(data) {
                // Convert string to WordArray, else assume WordArray already
                if (typeof data == "string") {
                    data = Utf8.parse(data);
                }
                // Append
                this._data.concat(data);
                this._nDataBytes += data.sigBytes;
            },
            /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */ _process: function(doFlush) {
                var processedWords;
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var dataSigBytes = data.sigBytes;
                var blockSize = this.blockSize;
                var blockSizeBytes = blockSize * 4;
                // Count blocks ready
                var nBlocksReady = dataSigBytes / blockSizeBytes;
                if (doFlush) {
                    // Round up to include partial blocks
                    nBlocksReady = Math1.ceil(nBlocksReady);
                } else {
                    // Round down to include only full blocks,
                    // less the number of blocks that must remain in the buffer
                    nBlocksReady = Math1.max((nBlocksReady | 0) - this._minBufferSize, 0);
                }
                // Count words ready
                var nWordsReady = nBlocksReady * blockSize;
                // Count bytes ready
                var nBytesReady = Math1.min(nWordsReady * 4, dataSigBytes);
                // Process blocks
                if (nWordsReady) {
                    for(var offset = 0; offset < nWordsReady; offset += blockSize){
                        // Perform concrete-algorithm logic
                        this._doProcessBlock(dataWords, offset);
                    }
                    // Remove processed words
                    processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                }
                // Return processed words
                return new WordArray.init(processedWords, nBytesReady);
            },
            /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */ clone: function() {
                var clone = Base.clone.call(this);
                clone._data = this._data.clone();
                return clone;
            },
            _minBufferSize: 0
        });
        /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */ var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
	         * Configuration options.
	         */ cfg: Base.extend(),
            /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */ init: function(cfg) {
                // Apply config defaults
                this.cfg = this.cfg.extend(cfg);
                // Set initial values
                this.reset();
            },
            /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */ reset: function() {
                // Reset data buffer
                BufferedBlockAlgorithm.reset.call(this);
                // Perform concrete-hasher logic
                this._doReset();
            },
            /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */ update: function(messageUpdate) {
                // Append
                this._append(messageUpdate);
                // Update the hash
                this._process();
                // Chainable
                return this;
            },
            /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */ finalize: function(messageUpdate) {
                // Final message update
                if (messageUpdate) {
                    this._append(messageUpdate);
                }
                // Perform concrete-hasher logic
                var hash = this._doFinalize();
                return hash;
            },
            blockSize: 512 / 32,
            /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */ _createHelper: function(hasher) {
                return function(message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            },
            /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */ _createHmacHelper: function(hasher) {
                return function(message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            }
        });
        /**
	     * Algorithm namespace.
	     */ var C_algo = C.algo = {};
        return C;
    }(Math);
    return CryptoJS;
});


/***/ }),

/***/ 648:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

;
(function(root, factory) {
    if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(845));
    } else {}
})(void 0, function(CryptoJS) {
    (function() {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        /**
	     * Base64 encoding strategy.
	     */ var Base64 = C_enc.Base64 = {
            /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var map = this._map;
                // Clamp excess bits
                wordArray.clamp();
                // Convert
                var base64Chars = [];
                for(var i = 0; i < sigBytes; i += 3){
                    var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
                    var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
                    var triplet = byte1 << 16 | byte2 << 8 | byte3;
                    for(var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++){
                        base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
                    }
                }
                // Add padding
                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    while(base64Chars.length % 4){
                        base64Chars.push(paddingChar);
                    }
                }
                return base64Chars.join("");
            },
            /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */ parse: function(base64Str) {
                // Shortcuts
                var base64StrLength = base64Str.length;
                var map = this._map;
                var reverseMap = this._reverseMap;
                if (!reverseMap) {
                    reverseMap = this._reverseMap = [];
                    for(var j = 0; j < map.length; j++){
                        reverseMap[map.charCodeAt(j)] = j;
                    }
                }
                // Ignore padding
                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    var paddingIndex = base64Str.indexOf(paddingChar);
                    if (paddingIndex !== -1) {
                        base64StrLength = paddingIndex;
                    }
                }
                // Convert
                return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for(var i = 0; i < base64StrLength; i++){
                if (i % 4) {
                    var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                    var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                    var bitsCombined = bits1 | bits2;
                    words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                    nBytes++;
                }
            }
            return WordArray.create(words, nBytes);
        }
    })();
    return CryptoJS.enc.Base64;
});


/***/ }),

/***/ 21:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

;
(function(root, factory) {
    if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(845));
    } else {}
})(void 0, function(CryptoJS) {
    (function(Math1) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        // Initialization and round constants tables
        var H = [];
        var K = [];
        // Compute constants
        (function() {
            function isPrime(n) {
                var sqrtN = Math1.sqrt(n);
                for(var factor = 2; factor <= sqrtN; factor++){
                    if (!(n % factor)) {
                        return false;
                    }
                }
                return true;
            }
            function getFractionalBits(n) {
                return (n - (n | 0)) * 0x100000000 | 0;
            }
            var n = 2;
            var nPrime = 0;
            while(nPrime < 64){
                if (isPrime(n)) {
                    if (nPrime < 8) {
                        H[nPrime] = getFractionalBits(Math1.pow(n, 1 / 2));
                    }
                    K[nPrime] = getFractionalBits(Math1.pow(n, 1 / 3));
                    nPrime++;
                }
                n++;
            }
        })();
        // Reusable object
        var W = [];
        /**
	     * SHA-256 hash algorithm.
	     */ var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function() {
                this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function(M, offset) {
                // Shortcut
                var H = this._hash.words;
                // Working variables
                var a = H[0];
                var b = H[1];
                var c = H[2];
                var d = H[3];
                var e = H[4];
                var f = H[5];
                var g = H[6];
                var h = H[7];
                // Computation
                for(var i = 0; i < 64; i++){
                    if (i < 16) {
                        W[i] = M[offset + i] | 0;
                    } else {
                        var gamma0x = W[i - 15];
                        var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                        var gamma1x = W[i - 2];
                        var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                    }
                    var ch = e & f ^ ~e & g;
                    var maj = a & b ^ a & c ^ b & c;
                    var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                    var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                    var t1 = h + sigma1 + ch + K[i] + W[i];
                    var t2 = sigma0 + maj;
                    h = g;
                    g = f;
                    f = e;
                    e = d + t1 | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = t1 + t2 | 0;
                }
                // Intermediate hash value
                H[0] = H[0] + a | 0;
                H[1] = H[1] + b | 0;
                H[2] = H[2] + c | 0;
                H[3] = H[3] + d | 0;
                H[4] = H[4] + e | 0;
                H[5] = H[5] + f | 0;
                H[6] = H[6] + g | 0;
                H[7] = H[7] + h | 0;
            },
            _doFinalize: function() {
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var nBitsTotal = this._nDataBytes * 8;
                var nBitsLeft = data.sigBytes * 8;
                // Add padding
                dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math1.floor(nBitsTotal / 0x100000000);
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                data.sigBytes = dataWords.length * 4;
                // Hash final blocks
                this._process();
                // Return final computed hash
                return this._hash;
            },
            clone: function() {
                var clone = Hasher.clone.call(this);
                clone._hash = this._hash.clone();
                return clone;
            }
        });
        /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */ C.SHA256 = Hasher._createHelper(SHA256);
        /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */ C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
});


/***/ }),

/***/ 44:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    splitCookiesString: ()=>splitCookiesString,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b;
        this._headers = responseHeaders;
        const setCookie = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders);
        (_b = responseHeaders.get("set-cookie")) != null ? _b : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : // TODO: remove splitCookiesString when `getSetCookie` adoption is high enough in Node.js
        // https://developer.mozilla.org/en-US/docs/Web/API/Headers/getSetCookie#browser_compatibility
        splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 137:
/***/ ((module) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(410));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map