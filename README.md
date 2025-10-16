This code is following basic instructions at <https://www.npmjs.com/package/cookies#cookiesexpresskeys>:

> This adds cookie support as a Connect middleware layer for use in Express apps, allowing inbound cookies to be read using `req.cookies.get` and outbound cookies to be set using `res.cookies.set`.

But I can't seem to fix this type error.
```
$ npm run check

> ts-express-cookies@1.0.0 check
> npx tsc --noEmit

src/index.ts:9:7 - error TS2551: Property 'cookies' does not exist on type 'Response<any, Record<string, any>, number>'. Did you mean 'cookie'?

9   res.cookies.set('a', 'b')
        ~~~~~~~

  node_modules/@types/express-serve-static-core/index.d.ts:945:5
    945     cookie(name: string, val: string, options: CookieOptions): this;
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'cookie' is declared here.


Found 1 error in src/index.ts:9
```
