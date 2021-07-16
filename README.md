# Vercel Meta Fetch API

Simple API to fetch metatas from provided encoded URL.

## Usage

```
  const res = await fetch(encodeURIComponent('http://mysupersweetawesomesite.com'))
  const json = await res.json()
  console.log(json)
  // { title: 'My Super Sweet Awesome Site', description: 'See title', image: '<link to image>" }
```

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/codybarr/vercel-test-api)
