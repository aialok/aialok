---
layout: post
title:  "Transforming README to Web: A Guide to Building Pages with Jekyll and Markdown"
date:   2023-12-27 02:12:51 +0530
categories: jekyll update
---
# Building a README to Page Generator with Jekyll and Markdown

As a passionate open-source enthusiast, I often find myself looking for ways to enhance the visibility and presentation of my projects on GitHub. One powerful tool in this endeavor is Jekyll, a static site generator that works seamlessly with GitHub Pages. In this blog post, I'll walk you through how I leverage Jekyll to transform my README.md files into beautifully rendered web pages.

## What is Jekyll?

[Jekyll](https://jekyllrb.com/) is a simple, blog-aware, static site generator that converts plain text into static websites and blogs. It's often used to build GitHub Pages sites, and it works well with Markdown, the language commonly used for README files.

## Setting Up Jekyll for GitHub Pages

To get started, I make sure to have Jekyll installed on my machine. If it's not installed, I use the following command:

```bash
gem install bundler jekyll
```

Next, I create a new Jekyll site using the following commands:

```bash
jekyll new my-page
cd my-page
```

Now, I have a basic Jekyll project. I customize the `_config.yml` file to configure settings such as the site name, description, and theme.

## Converting README to Markdown

To use Jekyll as a README to page generator, I replace the default `index.html` with my `README.md` file. I rename the `README.md` file to `index.md` to ensure Jekyll recognizes it as the main page.

```bash
mv README.md index.md
```

I can now edit `index.md` using Markdown syntax to provide detailed information about my project. I include headings, lists, images, and any other elements that can make my page informative and visually appealing.

## Customizing Layouts

Jekyll allows me to customize layouts to control the structure and style of my pages. I create a simple layout file, say `page.html`, in the `_layouts` directory. This layout file includes the necessary HTML structure and styles.

```html
---
layout: default
---

<div class="container">
  {{ content }}
</div>
```

I make sure to link my custom styles or any additional assets in the `<head>` section of the layout file.

## Serving the Site Locally

To preview my README as a web page, I run the Jekyll development server:

```bash
bundle exec jekyll serve
```

I can then open my browser and navigate to [http://localhost:4000](http://localhost:4000) to see how my README looks as a rendered page.

## Pushing to GitHub Pages

Once satisfied with the layout and content, I commit the changes and push them to my GitHub repository. GitHub Pages will automatically build and deploy the Jekyll site. I can access the live site at `https://username.github.io/repository`.

By using Jekyll to convert README files into web pages, I enhance the documentation and presentation of my projects on GitHub. This approach allows me to leverage the power of Markdown for easy content creation while utilizing Jekyll's capabilities for styling and structure. It's a simple yet effective way to make a lasting impression with clear and visually appealing project documentation.