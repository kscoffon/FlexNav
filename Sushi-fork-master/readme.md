# Sushi Restaurant Review

- [Sushi Restaurant Review](#sushi-restaurant-review)
  - [Homework](#homework)
  - [Accounts and Installs](#accounts-and-installs)
  - [The Terminal](#the-terminal)
    - [A Note For Windows Users](#a-note-for-windows-users)
  - [Initialize GIT and Create a Branch](#initialize-git-and-create-a-branch)
  - [Sushi Exercise](#sushi-exercise)
  - [Google fonts](#google-fonts)
    - [Linking to a css file from css](#linking-to-a-css-file-from-css)
  - [Formatting the Navigation](#formatting-the-navigation)
  - [Absolute Positioning](#absolute-positioning)
    - [Demo - example of another pseudo selector:](#demo---example-of-another-pseudo-selector)
  - [Styling the Aside](#styling-the-aside)
    - [Floating](#floating)
  - [Pseudo Elements vs Pseudo Classes](#pseudo-elements-vs-pseudo-classes)
  - [Relative Positioning and Centering](#relative-positioning-and-centering)
  - [More Design Elements](#more-design-elements)
  - [Formatting the Content](#formatting-the-content)
  - [Responsive Design](#responsive-design)
    - [Adding Simple Responsiveness](#adding-simple-responsiveness)
  - [CSS Demos](#css-demos)
  - [Highlighting the Navigation](#highlighting-the-navigation)
  - [JavaScript - DOM Scripting](#javascript---dom-scripting)
  - [Aside - playing with the console](#aside---playing-with-the-console)
  - [A Quick Note on jQuery](#a-quick-note-on-jquery)
  - [Creating the Popover](#creating-the-popover)
      - [QuerySelector](#queryselector)
      - [addEventListener](#addeventlistener)
    - [Moving the Toggle](#moving-the-toggle)
    - [Using Event Delegation](#using-event-delegation)
  - [Closing the Pop Over](#closing-the-pop-over)
  - [HomeWork](#homework-1)
    - [1. A Close (✖︎) Link](#1-a-close-︎-link)
  - [ARIA](#aria)
    - [End Sushi](#end-sushi)

## Homework

Continue with the CSS lessons on Front End Masters. Prepare the CSS project (the coffe checkout form) for handing in on Monday.

<!-- 1. use JavaScript to toggle the value of `aria-hidden` when the modal is shown or hidden. (Hint: use `document.querySelector` to select the modal and then use `setAttribute` to set the value of `aria-hidden`.)
1. check your git install and configure it using the two Github links below or try [this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. use CSS to style the page so that it looks better. You may examine the two files I showed (ver1.html and ver2.html) in the `other > home-work-samples` directory for inspiration. -->

<!-- Use your newly acquired CSS and HTML skills to improve the design the restaurant review page so that it looks better. You may examine the two files I showed (ver1.html and ver2.html) in the `other > home-work-samples` directory for inspiration. -->

<!-- 1. Play [Practice your CSS selectors](https://flukeout.github.io) - see how far you can get -->
<!-- 1. Read [A Complete Guide to CSS Concepts and Fundamentals | Tania Rascia](https://www.taniarascia.com/overview-of-css-concepts/) -->


## Accounts and Installs

1. Install [Git](https://git-scm.com/) on your computer. Windows users install [here](https://gitforwindows.org).
1. Create an account on [Github](http://github.com)
1. NEW! Install [NodeJS LTS](https://nodejs.org/en/) - "long term service" on your computer


## The Terminal

There are many good reasons to acquire a basic understanding of the command line terminal. In this class we will use the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app for GIT and GITHUB as well as for Node Package Manager (NPM).

---

### A Note For Windows Users

A rough equivalent to the Unix Terminal is [Powershell](https://docs.microsoft.com/en-us/powershell/) but there are important differences. Alternatives to Powershell include the app that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." _Unless you are very experienced with Windows, I suggest using Git Bash instead of Powershell on Windows._

---

Some basic shell commands (note: the convention in documentation is to use `$` to indicate a prompt - do NOT include it when copying and pasting a command):

```sh
$ pwd  // print working directory
$ cd <path-to-folder> // change directory
$ cd .. // go up one level
$ cd ~ // go to your home directory
$ ls  // list files
$ ls -l  // flags expand the command
$ ls -al
```

Demo: tab completion and history.

Demo: on a mac you can `cd` into a folder via drag and drop or by copying and pasting a folder into the terminal.

Before continuing we will run the following commands:

```sh
$ node --version
$ npm --version
$ git --version
$ node
> var total = 12+12
> total
> var el = document.querySelector('.anything') // error
> .exit // or control + c to exit node
$ clear // or command + k to clear the terminal
```

Use `cd` or the copy and paste method to cd into today's folder.

If you want to learn more about the terminal try reading [this article](https://www.git-tower.com/blog/more-productive-mastering-terminal/?vgo_ee=e7b8PdtP0aWH7ZIgym%2BTUayPUFd7JHyq9acdSgULWaM%3D).

## Initialize GIT and Create a Branch

[Configure](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) your installation of git:

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global init.defaultBranch main
$ git config --list
# $ :q
```

## Sushi Exercise

In this exercise we use the contents of the app folder to begin looking at layout focusing on the following properties:

- margin
- padding
- display
- float
- overflow
- position
- z-index
- visibility

Open `before.html` in VS Code. This style of code is often referred to as "tag soup" - it makes little sense to anyone looking at the code.

Note the lack of semantics and the preponderance of visual markup code in the HTML. This is how HTML was written from the late 90's to about a decade ago and is similar to how HTML emails are written today. It is still possible to find this kind of HTML in use.

Open `index.html`. This is an HTML5 document that uses semantic HTML. Note the impact of semantics and how the content is understandable.

Open `index.html` in Chrome using Go Live. Note the defaults for margins and padding used to display the body and the unordered list (`<ul>`).

Add a CSS declaration to `styles.css` as follows:

```css
body {
  margin: 12px;
  color: #333;
  font-family: Verdana, Arial, sans-serif;
}
```

and link it to `index.html` in the head:

```html
<link rel="stylesheet" href="css/styles.css" />
```

## Google fonts

Google has a CDN (Content Delivery Network) offering [free fonts](https://fonts.google.com) for use in HTML documents.

We'll use to demonstrate loading external stylesheets via `@import` vs the `<link>` tag.

We will use [Lato](https://fonts.google.com/specimen/Lato) for our main text and [Lobster](https://fonts.google.com/specimen/Lobster) for our headers.

### Linking to a css file from css

```css
@import url("http://fonts.googleapis.com/css?family=Lato:300,400,700");
```

Add this to the _top_ of our css (@import statements should always come first) to use the font within our stylesheet.

Edit the body css rule:

```css
font-family: Lato, Verdana, Arial, sans-serif;
```

Link a second Google font css file from `index.html`:

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
```

In `styles.css`:

```css
header {
  font-family: "Lobster", cursive;
  font-weight: normal;
}
```

`<link>` is generally preferred over `@import`.

Note: `h1` tags are bold by default but Lobster has no bold version. Thus we use `font-weight: normal` to keep the browser from applying bold.

```css
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
header h2 {
  font-size: 2rem;
}
```

`header h1` is a [_descendant selector_](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator).

Here we apply the same properties to multiple items using a comma in the selector:

```css
header h1,
header h2
```

and then override one of the properties in the next CSS rule.

In CSS, order is important. The second CSS rule will cancel out the first in this example:

```css
header h2 {
  font-size: 2rem;
}
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
```

CSS selector [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is important. The first CSS rule will now be applied since its selector - `body header h2` - is more specific than the second - `header h2`:

```css
body header h2 {
  font-size: 2rem;
}
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
```

Note the _margin collapsing_ between the `h1` and `h2` and paragraph tags.

## Formatting the Navigation

Note that we have two `<ul>`s - unordered lists - in our page.

Add a _class_ to the `<ul>` that will form the navigation for our page. We now have a name space that will allow us to target it exclusively:

```html
<ul class="nav">
  <li><a href="#">Cuisines</a></li>
  ...
</ul>
```

We have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply different styles.

Add the following to our style sheet:

```css
.nav {
  list-style: none;
  padding: 0;
}
.nav li {
  display: inline-block;
  margin-right: 10px;
}
.nav a {
  color: #fff;
  text-decoration: none;
  padding: 4px;
  display: block;
  background-color: #600;
}
.nav a:hover {
  color: #222;
  background-color: #f0dfb4;
}
```

Note:

- `list-style` (bullet styles)
- `display: inline-block`
- `text-decoration` (link underlining)
- `display: block`
- color models (examine chip in VS Code)

Also note the use of a colon to target the hover state. This is an example of a _pseudo_ selector. So called because, unlike other selectors, it doesn't really target an HTML tag per se but a state.

Examine the dev tool's color picker. Also, note again the ability to force element hover state.

Add css to `nav a`:

```css
transition: all 0.5s linear;
```

Transition is another CSS [short cut](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). Try editing the animation's timing using the dev tool inspector's animation settings.

Note: to animate only one property specify it instead of `all`:

```css
transition: background-color 0.5s linear;
```

## Absolute Positioning

_Edit_ the nav CSS rule to position it

```css
.nav {
  list-style: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 24px;
}
```

Examine the nav ul in the inspector. Note the coordinate system.

- Toggle the position property on and off in the inspector
- Use left instead of right to observe stacking

### Demo - example of another pseudo selector:

To remove the right hand space from the final nav item (so it "hugs" the right hand side of the window) we could add a class to the element ( `<li class="last-item">`) and format it accordingly:

```css
.nav .last-item {
  margin-right: 0;
}
```

Instead, let's use another "pseudo" selector - [.last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child):

```css
.nav li {
  display: inline-block;
  margin-right: 10px;
}
.nav li:last-child {
  margin-right: 0px;
}
```

This is a more advanced but much cleaner solution as it does not require adding a class to the html.

## Styling the Aside

In the HTML, add an `<aside>` tag around the table and the unordered list.

```html
<article>
  <h2>Geido</h2>
  <p class="summary">...</p>
  <!-- OPEN THE aside HERE before the table -->
  <aside>
    <table>
      ...
    </table>

    <ul>
      ...
    </ul>
    <!-- AND CLOSE IT HERE after the <ul> -->
  </aside>
</article>
```

Then add the following CSS:

```css
aside {
  position: absolute;
  top: 200px;
  left: 24px;
  width: 180px;
  background-color: #f0dfb4;
  padding: 6px;
  border: 1px solid #600;
}
```

Note how the text flows under the aside.

Add margin to move the article over to the right:

```css
article {
  margin: 0 20px 0 240px;
}
```

The four values for margin run clockwise from the top.

<!-- ### CSS Variables

(These)[https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables] allow us to store commonly used information as a variable for use throughout our css.

```
html {
  --bg-color: #f0dfb4;
}
```

```
.nav a {
  ...
  background-color: var(--bg-color);
}

aside {
  ...
  background-color: var(--bg-color);
}
``` -->

### Floating

Format the pull quote and image:

```css
article img {
  float: right;
}

blockquote {
  float: right;
  width: 40%;
  font-size: 24px;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content. [Live example](https://theintercept.com/2019/02/04/google-ai-project-maven-figure-eight/) - use the inspector to examine the blockquote at multiple widths.

## Pseudo Elements vs Pseudo Classes

WARNING: this is fairly "nit picky" but you should have some idea of the difference between the two in order to understand documentation.

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`. A pseudo-element allows you to create items that do not normally exist in the document tree such as `::before` or `::first-line`.

- Pseudo Class: `:hover`
- Pseudo Element: `::before`

```css
blockquote::before {
  content: "“";
  font-size: 4rem;
  font-weight: bold;
  font-family: serif;
  color: #333;
  line-height: 0.1em;
  vertical-align: -0.4em;
  color: #600;
}
```

Or

```css
article p::first-line {
  font-weight: bold;
}
```

<!-- Note the `+` in the selector. This is an [adjacent sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). -->

A complete list of pseudo classes and pseudo elements is located [on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements).

See my Pen <a href="https://codepen.io/DannyBoyNYC/pen/ZwrwoQ/">Intro-pseudo</a> on <a href="https://codepen.io">CodePen</a>.

## Relative Positioning and Centering

Currently our document "flexes" as we make the window wider to make use of all the available horizontal space. This flexibility is a best practice, but in order to understand why let's examine the drawbacks of fixed widths.

Add a wrapper `<div id="wrapper">` to the entire content area after the `<body>` tag and close it before the closing `</body>` tag:

```html
  <body>
    <div id="wrapper">
      <nav>
        ...
      </footer>
    </div>
  </body>
```

Add the following to our CSS style block.

```css
#wrapper {
  max-width: 840px;
}
```

Demo: note that we did not use `width`:

```css
#wrapper {
  width: 840px;
}
```

Then center it in the browser.

```css
#wrapper {
  max-width: 840px;
  margin: 0 auto 0 auto;
  border: 1px solid #999;
}
```

Add a relative positioning property.

```css
#wrapper {
  position: relative;
  ...;
}
```

Note the impact the relative positioning has on the layout (toggle it on and off using the inspector). The two absolutely positioned elements (aside and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box.

The rule here is _absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree_. This is an important CSS design pattern and we will see it again.

## More Design Elements

Edit the CSS body rule to include `background-color: #ddd;`:

```css
body {
  margin: 12px;
  color: #333;
  font-family: "Lato", Verdana, Arial, sans-serif;
  line-height: 1.6;
  background-color: #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper.

```css
#wrapper {
  background-color: #fff;
  padding: 1rem;
  ...;
}
```

Select the wrapper div and note how the body background color and margin is grayed out in the inspector. Neither it nor the margin are [inherited](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) by other elements.

Add a box shadow to the wrapper CSS:

```css
#wrapper {
  box-shadow: 6px 6px 10px #999;
  ...;
}
```

Note the chip in the styles inspector that allows you to finesse the box shadow.

Make it more of a glow:

```css
#wrapper {
  box-shadow: 0px 0px 6px 2px #aaa;
  ...;
}
```

## Formatting the Content

Add color and a border:

```css
header h1,
header h2 {
  color: #600;
  ...;
}

header h2 {
  ...
  border-bottom: 1px dotted #600;
}
```

Format elements in the list and table:

```css
aside {
  font-size: 0.875rem;
  box-shadow: 3px 3px 3px #ddd;
  border-radius: 4px;
  ...;
}

aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  margin: 0.5rem;
  padding: 0;
}
```

And change the ugly default blue for the links:

```css
a {
  color: #600;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
```

<!-- ### A Note on Inline CSS

We've already seen the link tag and @import methods of adding css to our document.

- As an external .css file via linking (HTML `<link>` tag)
- As an external .css file via importing (CSS `@import` statements)

Some additional ways to add CSS to an HTML document:

- Inline via the HTML `style=` attribute
- In page via the HTML `<style>` tag

The style tag is inefficient because it applies to a specific page only.

Inline styles are inefficient because they apply to a single element on a single page:

```html
<p style="margin-top: 12px;"></p>
```

We are not using them here however each has its use cases. -->

<!-- However this method is often used when dynamically changing the page after it has been loaded in the browser.

Try using the inspector to inspect a dynamic page (such as [http://www.w3schools.com/jquery/jquery_animate.asp](http://www.w3schools.com/jquery/jquery_animate.asp)). Note how it displays animation by temporarily highlighting inline css in purple.

Ideally, all your stylesheets should be located in a single file to reduce the number of requests the browser needs to make to the server (a major cause of slow loading sites). -->

<!-- ## Additional CSS3 Enhancements

As work on new versions of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee [http://W3C.org](http://W3C.org) decided to break the process into modules. (For compatibility and advice see [http://CanIuse.com](http://CanIuse.com).)

Some of the earlier CSS 3 specifications included provisions for visual effects such as rounded corners, drop shadows and gradients. A useful page that allows you to become familiar with these enhancements is [http://css3generator.com/](http://css3generator.com/).

Newer CSS modules that we will look at include CSS Grids and Flexbox.

Add rounded corners to the info div and buttons. (See [https://developer.mozilla.org/en/CSS/border-radius](https://developer.mozilla.org/en/CSS/border-radius) for specifications.)

```css
aside {
  border-radius: 6px;
  ...;
}
``` -->

<!-- ```css
nav a {
  border-radius: 3px;
  ...;
}
``` -->

<!-- Add a [drop shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) to the CSS for the info div:

```css
aside {
  box-shadow: 3px 4px 6px #d6d6d6;
  ...;
}
```

Add a box shadow to the `wrapper`'s CSS:

```css
box-shadow: 10px 10px 20px #aaa;
``` -->

<!-- Add CSS 3 Gradients. (See: http://www.colorzilla.com/gradient-editor/) -->

<!-- ## Highlight one of the tabs

A simple way to create navigation on a web site.

1 Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review"></body>
```

2 Add a list item to the nav list with a class of review-link.

```html
<li><a class="t-review" href="#">Reviews</a></li>
```

3 Add the following to our CSS block:

```css
.review-page .review-link {
  color: #fff;
  background: #600;
}
```

Note that the tab is now highlighted. -->

## Responsive Design

Take a moment to resize the browser.

Toggle the device button in the developer tools.

Add the device meta tag to the head of the HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Toggle the device button in the developer tools again.

### Adding Simple Responsiveness

Responsive design uses media queries in conjunction with a flexible layout to allow us to adapt the page to various devices.

The first media query was the _print_ media query. Demo:

```css
@media print {
  * {
    /* display: none !important; */
    color: red;
  }
}
```

We will add CSS that overrides undesirable features to correct the display on smaller devices.

Begin by removing the margin from the body and article and fixing the nav to the top of the screen.

```css
@media all and (max-width: 800px) {
  body {
    margin: 0;
  }
  article {
    margin-left: 0;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
  }
}
```

Use the [flexbox CSS module](https://codepen.io/DannyBoyNYC/pen/QYaNab) on the nav:

```css
@media all and (max-width: 800px) {
  /* ... omitted for bevity  */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
  }
  .nav li {
    margin: 0;
    flex-grow: 1;
  }
  .nav li a {
    border-radius: 0;
  }
}
```

Note that the absolutely positioned aside region scrolls _over the top_ of the navbar. Normally you'd use `z-index` to control this.

Revert aside's position property to `static` (the default).

```css
@media all and (max-width: 800px) {
  /* ... omitted for bevity  */
  aside {
    position: static;
    float: none;
    margin-right: 20px;
    width: 100%;
  }
}
```

Add adjustments to the image and blockquote:

```css
@media all and (max-width: 800px) {
  /* ... omitted for bevity  */
  blockquote {
    width: 100%;
    float: none;
    margin: 0;
  }
  img {
    float: none;
    width: 100%;
  }
}
```

## CSS Demos

Below are some demos of the major layout features covered so far.

[Front end foundations collection](https://codepen.io/collection/nZyrPj/) on Codepen.io.

- CodePen [Intro-margin-auto](https://codepen.io/DannyBoyNYC/pen/qgpVaL)

```html
<div class="container">
  <div class="inner">Hello</div>
</div>
```

```css
.container {
  width: 300px;
  height: 200px;
  border: 3px solid red;
  margin: 0 auto;
}
.inner {
  width: 150px;
  height: 100px;
  border: 2px solid black;
  margin: 0 auto;
}
```

- CodePen [Intro-position](https://codepen.io/DannyBoyNYC/pen/YBYyoq)

```html
<div class="container">
  <div class="inner"></div>
</div>
```

```css
div {
  width: 200px;
  height: 200px;
  border: 20px solid;
  position: relative;
  box-sizing: border-box;
}

.inner {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  border-color: red;
}
```

- CodePen [Intro-float](https://codepen.io/DannyBoyNYC/pen/pGpgyQ)

```html
<div class="container">
  <div class="inner">Hello</div>
</div>
```

```css
div {
  width: 200px;
  border: 20px solid;
}

.inner {
  width: 100px;
  height: 100px;
  border-color: red;
  float: right;
}
```

- CodePen [Intro-flexbox](https://codepen.io/DannyBoyNYC/pen/QYaNab)

```html
<div class="container">
  <nav>
    <ul>
      <li><a href="#">Cuisines</a></li>
      <li><a href="#">Recipes</a></li>
      <li><a href="#">Reviews</a></li>
      <li><a href="#">Delivery</a></li>
    </ul>
  </nav>
</div>
```

```css
ul {
  margin: 0;
  padding: 6px;
  /*   display: flex; */
}

ul li {
  display: inline;
  /*   flex-grow: 1 */
}

ul a {
  padding: 8px;
  border: 1px solid #333;
}
```

See also:

- [Pseudo Classes](https://codepen.io/DannyBoyNYC/pen/ZwrwoQ).
- [Border Box Model](https://codepen.io/DannyBoyNYC/pen/gqeKqd)

Note: download `flexbox-nav-ready` branch (includes page links) and perform flexbox layout before proceeding.

## Highlighting the Navigation

A simple way to create opportunities for section differentiation or themes across a web site is to add a class at a high level of the page.

Note: before continuing note the behavior of the navigation tabs in the device simulator - there is no such thing as `:hover` on devices.

Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
  ...
</body>
```

('p-' stands for page.)

Edit the nav so it uses classes on the tabs and 'real' links:

```html
<nav>
  <ul class="nav">
    <li class="t-cuisine"><a href="cuisines.html">Cuisines</a></li>
    <li class="t-recipe"><a href="recipes.html">Recipes</a></li>
    <li class="t-review"><a href="index.html">Reviews</a></li>
    <li class="t-delivery"><a href="delivery.html">Delivery</a></li>
  </ul>
</nav>
```

('t-' stands for tab.)

I have placed a series of placeholder HTML pages in the "other" directory.

Move them to the `app` folder and click on the tabs to test.

Add the following to our CSS block:

```css
.p-review .t-review a {
  color: #600;
  background: #f0dfb4;
}
```

The Reviews tab is now highlighted - but only on the reviews section.

Expand the css rule to allow the other tabs to display highlighted as well.

```css
.p-review .t-review a,
.p-cuisines .t-cuisine a,
.p-delivery .t-delivery a,
.p-recipes .t-recipe a {
  color: #600;
  background: #f0dfb4;
}
```

Note: we could chose to use these top level page classes and some CSS to customize other items on the page and create a visual scheme whereby each section of the site has its own distinct look.

## JavaScript - DOM Scripting

This semester we will observe how the three pillars of web development (HTML, CSS and JavaScript) work together to create the modern web.

Even though we have just begun learning HTML and CSS, I will briefly introduce JavaScript so that we can cover all three as a cohesive system.

<!-- An example of [mobile first design](https://www.nytimes.com/interactive/2018/12/28/nyregion/nyc-property-tax-photos.html?fallback=0&recId=1GuXvkf8n9fJPZ4Orme791unw08&locked=0&geoContinent=NA&geoRegion=CA&recAlloc=story-desks&geoCountry=US&blockId=signature-journalism-vi&imp_id=986464160&action=click&module=editorsPicks&pgtype=Article&region=Footer). -->

"DOM" is an acronym for [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model).

The DOM is an application programming interface (API) that treats an HTML document as a tree structure where each node on the tree is an object representing a part of the document.

The first question many people ask is - what's the difference between the HTML tree and the DOM?

Examine lesson one and the number of cat click displayed. View both the source of the page as well as the DOM in the developer tools. The HTML has "0" as the starting point and changed as we clicked. The HTML wasn't altered, the DOM was.

<!-- Demo: a Create React App page

- view the Elements in Dev tools
- view the HTML in View Page Source

This page has almost no HTML. It relies on the DOM and DOM manipulation via JavaScript in order to display anything. The page is said to render on the front end. -->

<!-- ### Variable Assignment and Types

In the browser console (one line at a time):

```js
var width = 100;
width;
typeof width;

width = width + 300;
width; // now 400

var wide = true;
wide;
typeof wide;

var testString = '123456';
typeof testString;
``` -->

Link `scripts.js` to `index.html` before the closing body tag:

```html
...
  <script src="js/scripts.js"></script>
</body>
```

Currenty we have this list item in the aside region of `index.html`:

```html
<li><a href="#">Map</a> | <a href="#">Directions</a></li>
```

Add a link to a [Google map](https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734) to the map link's href:

```html
<li>
  <a
    class="map"
    target="_blank"
    href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734"
  >
    Map
  </a>
</li>
```

Note the target attribute for the anchor tag. We have also used `class="map"` to identify the href.

## Aside - playing with the console

Note the contents of `scripts.js`. Open the developer tools in Chrome and display the JavaScript Console.

In order to gain insight into the DOM and some central concepts we will uncomment and recomment lines in `scripts.js` and examine the output in the console.

If you are interested in an additional run through of this content please see [Traversy's video series](https://youtu.be/0ik6X4DJKCc) on DOM scripting.

---

The DOM scripting techniques we will start with are:

- [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll)
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

You will also be introduced to:

- [event types](https://developer.mozilla.org/en-US/docs/Web/Events)
- [functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)

## A Quick Note on jQuery

[jQuery](https://jquery.com) is / was an incredibly popular JavaScript library that has been in use for over a decade. When you search for information about JavaScript or JavaScript techniques your results will likely contain a multitude of references to it. The reasons for using jQuery have dramatically decreased in recent years due to the rapid evolution of JavaScript as well as increasing standardization.

For the purposes of this course, you should try to ignore these as we focus solely on "vanilla JavaScript."

## Creating the Popover

#### QuerySelector

Make sure everything in `scripts.js` has been deleted _and_ that the map link in the HTML has a class of `map`.

Add this to `scripts.js`:

```js
var mapClicker = document.querySelector(".map");
console.log(mapClicker);
```

Note: you use the `document.querySelector()` method to find _the first_ matching element on a page.

If an element isn’t found, querySelector() returns null. If you try to do something with the nonexistent element, an error will be thrown (a very common mistake).

#### addEventListener

Use `addEventListener` to listen for a click on `mapClicker`:

```js
var mapClicker = document.querySelector(".map");

mapClicker.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("You clicked on the map link.");
});
```

Without `preventDefault()` a click would launch the link in a new tab. Since we want to show a map on _our_ page we need to prevent navigating away from the page.

You use the `EventTarget.addEventListener()` method to listen for events on an element. You can find a full list of available [events on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Events).

Let's examine the event.

When you click on anything on the page an event occurs. We can examine the event in the console.

```js
var mapClicker = document.querySelector(".map");

mapClicker.addEventListener("click", function (event) {
  console.log(event); // The event details
  console.log(event.target); // The clicked element
  event.preventDefault();
});
```

We run the `<EventTarget>.addEventListener()` method on the element we want to listen for events on. It accepts two arguments: the event to listen for, and a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) to run when the event happens.

The `event.target` property is the element that triggered the event. The event object has other properties as well, many of them specific to the type of event that occurred.

A [JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) is a list of commands or statements that, in this case, are run when the event occurs.

In this case our function is known as a [callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).

`addEventListener()` is the so called outer function. It is a function provided to us by the browser (a browser API) and is also referred to as a [method](https://developer.mozilla.org/en-US/docs/Glossary/Method), but more on that later.

Create and call a `show` callback function to run when the event (the user clicks on `mapClicker`) occurs:

```js
var mapClicker = document.querySelector(".map");

mapClicker.addEventListener("click", show);

function show(e) {
  console.log(e); // The event details
  console.log(e.target); // The clicked element
  e.preventDefault();
}
```

Add the following HTML to the bottom of the `index.html` - after the footer and before `<script>`:

```html
<div class="popover">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.821674756671!2d-73.97492268461596!3d40.67789794763805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1490213487125"
    width="300"
    height="225"
    frameborder="0"
    style="border:0"
    allowfullscreen
  ></iframe>
</div>
```

The div and iframe will be visible at the bottom of the page.

Note that it uses an [iframe](https://www.w3schools.com/tags/tag_iframe.asp). An inline frame is used to embed another HTML document within the current HTML document. It is often used in advertising.

Style the popover div:

```css
.popover {
  padding: 1rem;
  width: 300px;
  height: 225px;
  background: #fff;
  border: 2px solid #600;
  border-radius: 4px;
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  /*display: none;*/
}
```

Note the `position: fixed` as well as the `top` and `left` properties - we center the div with 50% and then use `calc` to subtract half the width and height of the div.

Uncomment / add `display: none` so the popover div is initially hidden.

Add a new utility rule to the css:

```css
.showme {
  display: block;
}
```

Try:

In the Elements inspector, try adding the `showme` class to the popover.

Select the popover div in the Elements inspector and use the `.cls` tool (next to `:hov`).

Create a new variable `popOver` containing a reference to the popover DOM node (aka the popover div).

```js
var mapClicker = document.querySelector(".map");
var popOver = document.querySelector(".popover"); // NEW

...
```

Use the browser's [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) API to toggle the `showme` class:

```js
var mapClicker = document.querySelector(".map");
var popOver = document.querySelector(".popover");

mapClicker.addEventListener("click", show);

function show(e) {
  popOver.classList.toggle("showme"); // NEW
  e.preventDefault();
}
```

The map should appear and disappear when you click on the link.

### Moving the Toggle

If we want to manipulate the display of other items based on the presence of the popover we need to add the `showme` class higher up in the DOM.

We'll go all the way to the top by adding the class on the body tag:

```js
var mapClicker = document.querySelector(".map");
var body = document.querySelector("body"); // NEW

mapClicker.addEventListener("click", show);

function show(e) {
  body.classList.toggle("showme"); // NEW
  e.preventDefault();
}
```

This will require us to edit the CSS selector:

```css
.showme .popover {
  display: block;
}
```

There are many advantages to toggling the class at a higher level in the DOM. One is that it allows us to manipulate the display of other items:

```css
.showme #wrapper {
  filter: blur(4px) grayscale(100%) opacity(50%);
}
```

Note: we are using the [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) CSS property to blur the background image.

Note: it becomes more difficult for the user to close the popover.

### Using Event Delegation

This will be the final iteration of this script.

It common to use what is known as _event delegation_ in JavaScript.

Event Delegation refers to the process of using the browser's native event propagation or "bubbling" to listen for and handle events at a higher level in the DOM.

This is different than attaching a listener to the element on which the event originated as we listen for events on the entire document.

Events "bubble up" from the targeted element to their parent elements and all the way up through their ancestors and eventually to the document and window - the highest levels of a page.

So instead of listening to specific elements, we’ll listen for all click events on the page, and then test to see if the clicked item has a specific name before running the function.

Let's start over again by examining the event targets:

```js
document.addEventListener("click", show);

function show(e) {
  console.log(e.target);
  // 'event.target' is the clicked element
  e.preventDefault();
}
```

Note: `preventDefault()` here disables _all_ our links - even those on our navbar.

Try:

- clicking anywhere on the page with the Console open.

We will use [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) and an [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement:

```js
function testMe(num) {
  if (num > 8) {
    console.log("num is > 8:", num);
  } else {
    console.log("num is , 8:", num);
  }
}

testMe(5);
```

We test for the item being clicked on and use [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) to toggle the class name on the body tag:

```js
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  console.log(e.target);
  if (e.target.matches(".map")) {
    body.classList.toggle("showme");
    e.preventDefault();
  }
}
```

Event delegation allows us to intercept and control any click on the entire document via the browser's built in event bubbling mechanism.

## Closing the Pop Over

```js
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map")) {
    body.classList.add("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}
```

## HomeWork

### 1. A Close (✖︎) Link

Add to the top of the `popover` div:

```html
<a class="closer" href="#">✖︎</a>
```

E.g.:

```html
  <div class="popover">
    <a class="closer" href="#">✖︎</a>
    <iframe>
      ...
  </div>
```

To format the close link, temporarily disable the `display: none` property on the popover's CSS and add:

```css
.popover .closer {
  position: absolute;
  top: -11px;
  right: -14px;
  color: #600;
  cursor: pointer;
}
```

The close button will be positioned relative to its nearest positioned ancestor which, in this case, is the popover div which already has a `position: static` property.

Note the (here superfluous) `cursor` property. Here is a [list of available cursors](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor) in CSS.

Add some additional formatting to the close link:

```css
.popover .closer {
  ...
  text-decoration: none;
  background-color: #fff;
  padding: 0.25rem;
  border: 2px solid #600;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
```

Note: `border-radius: 50%` creates a circle - as long as the box is perfectly square.

Re-enable the `display:none` property on the popover div.

We will use - [element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) and an `if` statement to test for the item being clicked on, then use `classList` to add or remove a class:

```js
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map")) {
    body.classList.add("showme");
    e.preventDefault();
  }
  if (e.target.matches(".closer")) {
    body.classList.remove("showme");
    e.preventDefault();
  }
}
```

Let's refactor the script by using an 'or' operator `||` in JavaScript:

```js
if (
  event.target.classList.contains('map') ||
  event.target.classList.contains('closer')
)
```

With our toggle, e.g.:

```js
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    body.classList.toggle("showme");
    e.preventDefault();
  }
}
```

There are many operators in JavaScript. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators). We will focus on the most common.

Allow the user to click anywhere outide the popover to close it.

```js
var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    body.classList.toggle("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}
```

## ARIA

[ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) is an acronym for Accessible Rich Internet Applications. It is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

Add `aria-modal="true"` to the modal's HTML. This will allow screen readers to know that the modal is a modal.

Add `aria-hidden="true"` to the modal's HTML. This will allow screen readers to know that the modal is hidden. We use JavaScript to toggle the value of `aria-hidden` when the modal is shown or hidden.

---

See the samples on CodePen for [querySelector](https://codepen.io/DannyBoyNYC/pen/wNXPKY) and [querySelectorAll](https://codepen.io/DannyBoyNYC/pen/exKegp)].

### End Sushi
