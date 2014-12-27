NPM - Hearthstone Card Search in the Terminal
==============
[![npm version](https://badge.fury.io/js/hs-card-search.svg)](http://badge.fury.io/js/hs-card-search)

![Screenshot](http://i.imgur.com/JCWUOvJ.png)

## Installation

$ npm install -g hs-card-search  

## Usage

$ hs-search -c "seal of light"

## Additional information

This is a node package for search for specific cards via data from [http://hearthstonejson.com/](http://hearthstonejson.com/).

This is a port of the ruby version i wrote, [here](https://github.com/Dervisevic/hs-card-search). The difference is of course that it now has a single command that can be used throughout the system if the package is installed globally. I also removed the non-option based part where you have autocomplete. I figured you know the name and it supports partial search.

You can search via name with the -c argument, or -t for the text on the card. -a searches both. Refer to --help for all options. They are all partial searches so murloc will find both murloc warleader and hungry crap which has murloc in the text.

I chose to limit it to this, as i found that you don't really need to search for cost or flavor text or even set type, this would bring out far too many results, this is for quick name searches.

I rewrote the app so i could quickly search globablly, which it now can, so i'm quite happy with it now. Perhaps i'll write a quick visual search with filters in angular one day as well.

Input and contributions are always welcome!
