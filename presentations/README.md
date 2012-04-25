# Presentations

This is a steadily growing collection of presentations that can be used to talk about Appcelerator, Titanium, and other associated topics. These are close or identical to what we actually use, but you can feel free to customize them to your heart's content. 

In short, **these presentations are free for anyone to use and you can modify them however you like**. If you do something particularly cool or helpful (like a <a href="#localizations">localization</a>), we'd love to hear about it. You can do one of 2 things to notify us (which you have no obligation to do):

* Submit a pull request with your changes to this project
* Send us an email at community at appcelerator dot com

## Reveal.js Crash Course

All presentations in this repository are created using [reveal.js](https://github.com/hakimel/reveal.js). So before diving in, you'll likely want to take a look at that project and its educational resources. It's pretty basic, but it's a new paradigm for creating presentations. The best way to really get a sense of how different it is is to visit the [reveal.js website](http://lab.hakim.se/reveal-js/#/) and see for yourself. One quick reference I found was [this blog post](http://amimetic.co.uk/?p=239) as well.

But, if you want to ignore me and get started right away, here's a straight-to-the-point rundown of reveal.js and how it's used for these presentations. It's not a complete doc, and I again urge you to check out the [reveal.js website](http://lab.hakim.se/reveal-js/#/). That said, here we go.

### Supported Browsers

Since you're going to be presenting in a browser of your own choosing, wide compatibility isn't much of an issue. Knowing that, though, you still need to use a modern browser with CSS 3D Tranform support to see it in its full glory:

* Chrome
* Safari 5.1+
* Firefox 10+

### Sections

Presentations consist of HTML5 **_sections_**.  In reveal.js, sections are essentially equal to a typical presentation's slides. They represent a single view state of the presentation. Steps are navigated in a few ways:

* **Forward** - right arrow / directional pad click
* **Back** - left arrow / directional pad click
* **Navigation Panel** - press the space bar for holistic overview

You create a section in your presentation by defining an HTML element inside of the main `<div class="slides">` element. Below is a basic, 2-step example.

<a name="stepexample">&nbsp;</a>

```html
<div class="slides">
    <section>
        <h1>This is my first step!</h1>
    </section>
    <section>
        <h2>This is my second step!</h2>
    </section>
</div>
``` 

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
* **css/presentation.css** - The style sheet for this presentation. This will compliment the base stylesheet located at `../common/css/appc.css`.
* **js/localizations.js** - This file contains all the language localizations for the presentation. All translations are filled in here and are then dynamically populated based on the browser's locale. See the <a href="#localizations">localizations</a> for more details.
* **images/\*** - A collection of images to use in the presentation. You'll find various Appcelerator and Titanium logos in here for easy access.

## Localizations<a name="localizations">&nbsp;</a>

### Adding Localized Text to Presentations

Making text in presentations based on the template here is pretty simple. All you need to do is give the HTML element that contains your localized text a class name with the prefix `l_` and then add that class name as an entry in the `js/localizations.js` file. So for example:

```html
<div class="slides">
    <section>
        <span class="l_localizeMe">Here is some text that needs localization</span>
    </section>
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

So let's assume you want to add support for a new language in the [Welcome to Titanium](https://github.com/appcelerator-titans/Toolkit/tree/master/presentations/welcome) presentation. Here's the steps you would follow.

1. Goto `Toolkit/presentations/welcome/js`
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

* [reveal.js](https://github.com/hakimel/reveal.js) - HTML5/JS presentation framework
* [l10n.js](https://github.com/eligrey/l10n.js/tree/) - Javascript Localization library

### Contributors

* We need translators!