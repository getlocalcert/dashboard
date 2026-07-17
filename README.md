# LocalCert Dashboard
This dashboard is the main website and interactive UI for creating LocalCert subdomains.


## Local testing

    npm i
    npm run dev

By default the dashboard sends requests to the production API.
To test against a local API, edit `API_BASE` in src/app/dashboard/page.tsx.

A good test ACME token is: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
