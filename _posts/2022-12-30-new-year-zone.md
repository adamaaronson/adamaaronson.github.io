---
title: "New Year Zone"
image: "/assets/images/new-year-zone.jpg"
---

This Christmas Eve, my mom asked me, "hey, are you gonna do that New Year site this year?" I hadn't thought about it in almost a year, but last New Year's Eve my dad and I had talked about making some kind of site that celebrates the New Year around the world.

"Hmm, I do have a bunch of time to kill," I said, being in my last winter break of college.

A week later, New Year Zone was born. But to tell the full story, we have to go back.

## My dad Larry says:

![Circus barker](/assets/images/barker.jpg){: class="img-right"}

Back in the 1980s, I came up with the fun idea to compile a list of locations worldwide that celebrated the New Year at each hour of the day on December 31. I kept the handwritten list in a safe place and pulled it out every New Year’s Eve for years. (Actually, I kept the list inside a Styrofoam skimmer hat that I’m pretty sure I got from Constructive Playthings (US Toy Company) when I ran a Purim carnival together with my friend Dave sometime in the early '80s. Also, I hand-colored a half-inch dowel rod with festive stripes, and each year on New Year’s Eve, I’d happily wear the skimmer hat and carry the dowel rod (as though I was some sort of circus barker), celebrating the New Year each hour according to my list.)

Flash forward to December 31, 2021, when I mentioned to Adam that I wanted to create an app or website that would alert people each hour on the hour where it was a New Year all day on New Year’s Eve. Seed planted! A year later, Adam took the leading oar and made it happen. Thank you Adam. And welcome to NEW YEAR ZONE™!

## Thanks Larry, now back to Adam:

That Larry guy, what a character! Anyway, New Year Zone is a website that counts down to the New Year in every time zone, so that you can celebrate every hour like my dad did in the '80s. It was a joint project between the two of us: think of me as the lead engineer and designer, and my dad as the product manager. The site's design takes inspiration from my dad's striped dowel rod, but unlike his dowel rod, it changes colors for each new time zone!

I developed New Year Zone in TypeScript and React, with SCSS for styling and [Framer Motion](https://www.framer.com/motion/) for animation. The project is built with [Vite](https://vitejs.dev) and hosted with [Cloudflare Pages](https://pages.cloudflare.com) (which I gotta thank my friend Christian for helping me configure).

Building the site presented tons of fun little technical challenges, like how to synchronize 38 clocks, how to fit a timer perfectly to the width of the screen (it's harder than it should be), or how to implement a Wordlesque sharing functionality. The countdowns use the widely loved [JavaScript Date API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), syncing with your device's clock to accurately determine the current time and your local time zone. 

## About time

As it turns out, when you make a website about time zones, you learn a lot about time zones along the way. Here are some of my favorite time zone facts:

- There are 38 time zones. I feel like this number is never talked about like how there are 50 US states or 118 elements. But the secret's out, there are 38, count 'em!
- The latest time zone, [UTC+14](https://en.wikipedia.org/wiki/UTC%2B14:00), is *26 hours* later than the earliest one, [UTC−12](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00). If you do the math, that's more than a day! That means you could be later in the day on Sunday than someone else is on Saturday, at the same time.
- I knew there were some time zones offset by 30 minute intervals, but did you know there are a few offset by 45 minutes? New Zealand's Chatham Islands use UTC+13:45 time, Nepal uses UTC+5:45, and wait 'til you hear about the next one.
- My new favorite time zone is [UTC+8:45](https://en.wikipedia.org/wiki/UTC%2B08:45), known in Australia as Central Western Time. It applies to a few towns along a stretch of highway connecting South Australia and Western Australia, with a total population of about 200 people. Legend has it, they couldn't decide between South Australia and Western Australia's time zones, so they just created their own. The Australian government hates this and doesn't officially recognize Central Western Time, but Australia's wild west doesn't care. Road signs along the highway will kindly remind you to advance your clocks by 45 minutes.<br/><br/>

![Central Western Time Zone](/assets/images/centralwestern.jpg){: class="img-big"}
*from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Entering_Central_Western_Time_Zone.jpg)*
{: class="image-attribution"}

## Get in the zone!

Now it's your turn to be the New Year circus barker! Grab the nearest styrofoam hat and striped dowel rod, and tell your friends about New Year Zone. And wherever you are in the world, Happy New Year!

<a class="fancy-link" href="https://newyear.zone/" rel="noreferrer noopener" target="_blank">
    <img class="fancy-link-image" src="/assets/images/new-year-zone-icon.jpg">
    <span class="fancy-link-text">
        New Year Zone
    </span>
</a>