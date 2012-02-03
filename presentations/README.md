# Presentations

This is a steadily growing collection of presentations that can be used to talk about Appcelerator, Titanium, and other associated topics. These are close or identical to what we actually use, but you can feel free to customize them to your heart's content. 

In short, **these presentations are free for anyone to use and you can modify them however you like**. If you do something particularly cool or helpful (like a <a href="#localizations">localization</a>), we'd love to hear about it. You can do one of 2 things to notify us (which you have no obligation to do):

* Submit a pull request with your changes to this project
* Send us an email at community at appcelerator dot com

## Create/Modify a Presentation

All presentations in this repository are created using [impress.js](http://bartaz.github.com/impress.js/#/bored). So before diving in, you'll likely want to take a look at that project and its educational resources. It's pretty basic, but it's a new paradigm for creating presentations.  

If you have already taken a look, or are brave enough to just try to do it based on our templates, let's get going.  

### Create a Presentation

```bash
git clone git@github.com:appcelerator-titans/Toolkit.git
cd Toolkit/presentations
cp -r template YOUR_PRESENTATION
cd YOUR_PRESENTATION
```

### Modify Existing Presentation

```bash
git clone git@github.com:appcelerator-titans/Toolkit.git
cd YOUR_TARGET_PRESENTATION
```

In the presentation folder, you'll find all the presentation-specific files. Here's the critical ones that will help you shape the presentation.

* **index.html** - The main HTML file for the presentation. 
* **css/presentation.css** - The style sheet for this presentation. This will compliment the base stylesheet located at `../common/css/appc.css`, as well as the `../common/css/showoff.css` responsible for the navigation panel and a few other animations.
* **js/localizations.js** - This file contains all the language localizations for the presentation. All translations are filled in here and are then dynamically populated based on the browser's locale. See the [localizations]() for more details.
* **images/\*** - A collection of images to use in the presentation. You'll find various Appcelerator and Titanium logos in here for easy access.

## Localizations<a name="localizations">&nbsp;</a>

The **best** way you can help us with these presentations is to submit text localizations. We'd like these presentations to be available in as many languages as possible. Fortunately, it's pretty quick and easy to submit a localization for one (or more) of these presentations if you have the linguistic skills.

So let's assume you want to add support for a new language in the [Welcome to Titanium]() presentation. Here's the steps you would follow.

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