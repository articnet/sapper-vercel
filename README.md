# sapper-vercel clean template

The default [Sapper](https://github.com/sveltejs/sapper) template, configured with rollup and vercel.
This was created as I could not find a sapper template that did not need intervention before being deployed on vercel (ex now.sh).


## Getting started


[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository:

```bash
# rollup 
npx degit "articnet/sapper-vercel" my-app
```

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Production mode and deployment

To deploy to [Vercel Now](https://vercel.com) when using `sapper export`, run these commands:

```bash
npm install -g vercel
vercel
```

This template includes the module `vercel-sapper` and is already configured to work with it.

