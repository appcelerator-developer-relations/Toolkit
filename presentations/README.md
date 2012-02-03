# Presentations

This is a steadily growing collection of presentations that can be used to talk about Appcelerator, Titanium, and other associated topics. These are close or identical to what we actually use, but you can feel free to customize them to your heart's content. 

In short, **these presentations are free for anyone to use and you can modify them however you like**. If you do something particularly cool or helpful (like a <a href="#localizations">localization</a>), we'd love to hear about it. You can do one of 2 things to notify us (which you have no obligation to do):

* Submit a pull request with your changes to this project
* Send us an email at community at appcelerator dot com

## Impress.js Crash Course

All presentations in this repository are created using [impress.js](http://bartaz.github.com/impress.js/#/bored). So before diving in, you'll likely want to take a look at that project and its educational resources. It's pretty basic, but it's a new paradigm for creating presentations. The best way to really get a sense of how different it is is to visit the [impress.js website](http://bartaz.github.com/impress.js/#/bored) and see for yourself. Another good reference I found was [this blog post](http://www.cubewebsites.com/blog/guides/how-to-use-impress-js/) as well.

But, if you want to ignore me and get started right away, here's a straight-to-the-point rundown of impress.js and how it's used for these presentations. It's not a complete doc, and I again urge you to check out the [impress.js website](http://bartaz.github.com/impress.js/#/bored). That said, here we go.

### Supported Browsers

Since you're going to be presenting in a browser of your own choosing, wide compatibility isn't much of an issue. Knowing that, though, you still need to use one of the following browsers to get all the features of impress.js:

* Chrome
* Safari 5.1+
* Firefox 10+

### Steps

Presentations consist of **_steps_**. In impress.js, steps are essentially equal to a typical presentation's slides. They represent a single view state of the presentation. Steps are navigated in a few ways:

* **Forward** - spacebar, tab, right/down arrow, page down
* **Back** - left/up arrow, page up
* **Navigation Panel** - press 'n' to toggle

You create a step in your presentation by defining an HTML element inside of the main `<div id="impress">` element with the class `step`. Below is a basic, 2-step example.

<a name="stepexample">&nbsp;</a>

```html
<div id="impress">
    <div id="step1" class="step" data-x="0" data-y="0">
        This is my first step!
    </div>
    <div id="step2" class="step" data-x="1000" data-y="0" data-rotate-y="45" data-scale="0.5">
        This is my second step!
    </div>
</div>
``` 

### Data-\* Attributes

You'l probably notice the `data-x` and `data-y` attributes right away. These attributes, among a few others, allow you to dictate how impress.js will perform animated transitions between each step. You can make all forms of 2D & 3D transitions, including scale, translation, and rotation. Let's take a quick look at each:

* **data-x, data-y, data-z** - Used to specify a step's position along the given axis. So `<div class="step" data-x="0" data-y="300" data-z="400">` would be positioned, you guessed it, at `(0,300,400)` within the presentation.
* **data-rotate** - Rotates the step the given number of degrees in the 2D clockwise direction.
* **data-rotate-x, data-rotate-y, data-rotate-z** - Rotates the step along the given 3D axis. 
* **data-scale** - Scales up or down the size of the whole step. A practical application of this is when you want to create a footnote that you'd like to zoom in on in the next step.

So if we look again at the <a href="#stepexample">2-step example</a>, when you navigate from `step1` to `step2`, you would move 1000 pixels to the right to `step2`, which is rotated 45 degrees along its y-axis and is also 1/2 it's normal size.

### The _active_ class

When steps become active, they get the `active` class added to them. This is useful for initiating JS and CSS animations when slides become active. For a good exmaple of this, let's look at how I animate in the opacity of images on a step from the [Welcome to Titanium](https://github.com/appcelerator-titans/Toolkit/tree/master/presentations/Welcome%20to%20Titanium) presentation:

```css
/* animate in the opacity of images when active */
#donetodeath img {
    position: fixed;
    height: 150px;  
    opacity: 0;
}
 
#donetodeath.active img {
    opacity: 1;
    -webkit-transition: opacity 1s ease-in;
    -webkit-transition-delay: 2s;   
}
```

As you can see above, the opacity of the images on the `donetodeath` step are animated from `0` to `1`, but not until 2 seconds _after_ the step becomes active. Understanding the power of the `active` class is critical to creating really dynamic impress.js presentations. 

And that's it for now. As previously mentioned, firing up a presentation in a supported browser and checking out the source is probably the best way to learn how to start toying with it yourself. Be warned, once you get the hang of it, impress.js is very addicting. You'll find yourself forgetting about the content and spending your time playing with transitions and animations. 

## Create a Presentation

```bash
git clone git@github.com:appcelerator-titans/Toolkit.git
cd Toolkit/presentations
cp -r template YOUR_PRESENTATION
cd YOUR_PRESENTATION
```

## Modify Existing Presentation

```bash
git clone git@github.com:appcelerator-titans/Toolkit.git
cd YOUR_TARGET_PRESENTATION
```

In the presentation folder, you'll find all the presentation-specific files. Here's the critical ones that will help you shape the presentation.

* **index.html** - The main HTML file for the presentation. It contains all of your **_steps_**.
* **css/presentation.css** - The style sheet for this presentation. This will compliment the base stylesheet located at `../common/css/appc.css`, as well as the `../common/css/showoff.css` responsible for the navigation panel and a few other animations.
* **js/localizations.js** - This file contains all the language localizations for the presentation. All translations are filled in here and are then dynamically populated based on the browser's locale. See the <a href="#localizations">localizations</a> for more details.
* **images/\*** - A collection of images to use in the presentation. You'll find various Appcelerator and Titanium logos in here for easy access.

## Localizations<a name="localizations">&nbsp;</a>

### Adding Localized Text to Presentations

Making text in presentations based on the template here is pretty simple. All you need to do is give the HTML element that contains your localized text a class name with the prefix `l_` and then add that class name as an entry in the `js/localizations.js` file. So for example:

```html
<div id="impress">
    <div class="step" data-x="0" data-y="0">
        <span class="l_localizeMe">Here is some text that needs localization</span>
    </div>
</div>
```

would automatically be localized when the presentation loads, so long as the following entry was in the presentation's `js/localizations.js` file. In this case, let's assume we wanted to add a Spanish translation.

```javascript
String.toLocaleString({
        "en-US": {
                // English version from the presentation. This will be the default 
                // for languages with no localization entry.
		"%l_localizeMe": "Here is some text that needs localization"
	},
	"es": {
                // The Spanish translation we are adding. This will automatically 
                // be replaced if the browser's locale is 'es'
		"%l_localizeMe": "Aquí es un texto que las necesidades de localización"
	}
});
```

Now when someone wants to present in Spanish, they don't have to do anything, it will automatically be translated. There's 2 ways a presentation's locale can be determined.

1. The browser automatically determines it
2. You specify it as an attribute to the &lt;html&gt; element, like this

```html
<!-- Specify that we want to present in Spanish -->
<html lang="es">
```

### Contribute

The **best** way you can help us with these presentations is to submit text localizations. We'd like these presentations to be available in as many languages as possible. Fortunately, it's pretty quick and easy to submit a localization for one (or more) of these presentations if you have the linguistic skills.

So let's assume you want to add support for a new language in the [Welcome to Titanium](https://github.com/appcelerator-titans/Toolkit/tree/master/presentations/Welcome%20to%20Titanium) presentation. Here's the steps you would follow.

1. Goto `Toolkit/presentations/Welcome to Titanium/js`
2. Open the `localizations.js` file
3. Copy the entire `en-US` localization key and content

        "en-US": {
            "%l_welcometotitanium": "Welcome to Titanium",
            "%l_tagline": "The only cross-platform mobile development framework with NATIVE UI and performance",
            // truncated...
            "%l_qa": "Q&A",
            "%l_contact": "Contact"
        }

4. Append the new localization by pasting it to the end of the collection of localizations
5. Change the `en-US` to the [language code](http://www.w3schools.com/tags/ref_language_codes.asp) for the language to which you plan to translate. For example, if you were providing a Spanish translation, you would change the `en-US` key to `es`.
6. Translate each key's value from the current English version to your target language.

## Special Thanks

Without the help of the following people and projects, this repository would be a whole lot less interesting. 

### Projects

* [impress.js](https://github.com/bartaz/impress.js) - HTML5/JS presentation framework
* [l10n.js](https://github.com/eligrey/l10n.js/tree/) - Javascript Localization library
* [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/) - JS syntax highlighter
* [jQuery](http://jquery.com/) - If you need a description...

### Contributors

* We need translators!