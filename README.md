# stebre-11ty-starter

This 11ty starter is build upon [eleventy-base-blog v9](https://github.com/11ty/eleventy-base-blog/releases/tag/v9.0.0).

## Getting Started

* [Want a more generic/detailed getting started guide?](https://www.11ty.dev/docs/getting-started/)

1. Make a directory and navigate to it:

```
mkdir my-blog-name
cd my-blog-name
```

2. Clone this Repository

```
git clone https://github.com/stebre/stebre-11ty-starter.git .
```

_Optional:_ Review `eleventy.config.js` and `_data/metadata.js` to configure the site’s options and data.

3. Install dependencies

```
npm install
```

4. Run Eleventy

Generate a production-ready build to the `_site` folder:

```
npm run build
```

Or build and host on a local development server:

```
npm run dev
```

Or you can run [debug mode](https://www.11ty.dev/docs/debugging/) to see all the internals.

https://github.com/11ty/eleventy-base-blog/releases/tag/v9.0.0


## Features

- Because it is not build on scratch, a lot of awesome functionality and features are brought by eleventy-base-blog starter. Learn more in its release notes: https://github.com/11ty/eleventy-base-blog/releases/tag/v9.0.0

### Personal flavors

#### Additions

- Add a mobile hamburger nav for smaller screens.
- Use of more css custom properties and add some more styles.
- Add .vscode setting `editor.formatOnSave`

#### Changes

- Use stylesheets more modular and use the built in css bundler.
- The basic `_includes` folder is renamed to `_templates` with the subfolders `layouts` and `includes` (which includes parts for multiple use)

#### Removed

- `ghpages` scripts declarations in `package.json`

### Implementation Notes

- `content/about/index.md` is an example of a content page.
- `content/blog/` has the blog posts but really they can live in any directory. They need only the `posts` tag to be included in the blog posts [collection](https://www.11ty.dev/docs/collections/).
- Use the `eleventyNavigation` key (via the [Eleventy Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)) in your front matter to add a template to the top level site navigation. This is in use on `content/index.njk` and `content/about/index.md`.
- Content can be in _any template format_ (blog posts needn’t exclusively be markdown, for example). Configure your project’s supported templates in `eleventy.config.js` -> `templateFormats`.
- The `public` folder in your input directory will be copied to the output folder (via `addPassthroughCopy` in the `eleventy.config.js` file). This means `./public/css/*` will live at `./_site/css/*` after your build completes.
- This project uses three [Eleventy Layouts](https://www.11ty.dev/docs/layouts/):
	- `_templates/includes/layouts/base.njk`: the top level HTML structure
	- `_templates/includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
	- `_templates/includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_templates/includes/postslist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `content/index.njk` has an example of how to use it.

#### Content Security Policy

If your site enforces a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (as public-facing sites should), you have a few choices (pick one):

1. In `base.njk`, remove `<style>{% getBundle "css" %}</style>` and uncomment `<link rel="stylesheet" href="{% getBundleFileUrl "css" %}">`
2. Configure the server with the CSP directive `style-src: 'unsafe-inline'` (less secure).
