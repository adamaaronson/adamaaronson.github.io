---
title: "Animals to Play H-O-R-S-E With"
image: "/assets/images/horse.jpg"
---

H-O-R-S-E (pronounced “horse”) is a basketball minigame you play when you don't feel like playing a real game but you have a basketball and a hoop and a friend.

For the uninitiated, here's how it works. Players take turns taking trickshots, and if one player makes it, the other player has to match that shot. If the other player misses, they gain a letter in the word H-O-R-S-E, starting with H. If you miss five shots that your opponent made and spell the whole word, you lose! It's a timeless classic, enjoyed by everyone from middle schoolers to [NBA All-Stars](https://en.wikipedia.org/wiki/NBA_All-Star_Weekend_H–O–R–S–E_Competition) to [Obama](https://youtu.be/Y9JAtl3Jm3k).

![Obama playing H-O-R-S-E](/assets/images/obama.jpg){: class="img-right"}

There's nothing special about horses.<sup>[citation needed]</sup> You could just as easily play Z-E-B-R-A or H-U-M-A-N, and the game would play out exactly the same. Players at home might be familiar with P-I-G, a game that's identical to H-O-R-S-E, except you lose after three letters instead of five. This is perfect if you're in a time crunch, or you otherwise lack the commitment to play for five whole letters. 

But what if you're a real power player? What if you have all the time in the world? What if you want to play H-O-R-S-E, but make it even *longer*?

What's the longest animal name you can play H-O-R-S-E with?

## The rules

You can't play H-I-P-P-O, for example. If a player gains a P, how do you know if they missed their third or fourth shot? In H-O-R-S-E, you can describe a game's state just by saying "Alice is at R, Bob is at S." But in H-I-P-P-O, you'd have to say "Alice is at H-I-P, Bob is at H-I-P-P." That's way too much work, and it'll get really tiring for even longer animal names.

So we have a rule: no repeated letters allowed. In other words, the animal's name has to be an *isogram*, a word where every letter appears exactly once (alternatively known as a *heterogram*, but *isogram* wins because it's one of those nice self-descriptive wordplay terms—*isogram* is itself an isogram).

That means our question boils down to: **what's the longest animal name that's an isogram?**

I posed this question to my friends while we were waiting for our pub trivia sheet to be graded, and we contemplated it for a solid 15 minutes. The longest one we thought of that night at Murphy's Pub was the 10-letter **ANGLERFISH** (hat tip to my friend Aakash for that). That would make for one long game of H-O-R-S-E!

But we can do better. It's surprisingly hard to think of isograms, let alone ones longer than 10 letters. That's where computers come in.

## The plan

It seems like no one has tried to solve this problem before, possibly because it bears no societal implications.

Isograms are rare, especially long ones. As words get longer, they contain more letters,<sup>[citation needed]</sup> so there are fewer possible letters to add that aren't already in the word somewhere. This means the probability that a randomly spelled word is an isogram [decays roughly exponentially](https://en.wikipedia.org/wiki/Exponential_decay) as its length increases. (Incidentally, this is just like the [birthday problem](https://en.wikipedia.org/wiki/Birthday_problem), which asks about the probability of a random group of people having any shared birthdays. Except here, the people come from a planet with 26-day years.)

English words aren't spelled with random letters, but they still more or less follow the same isogram distribution. If we look at a [list of English words](https://norvig.com/ngrams/enable1.txt), we can see the steep falloff in isograms as word length increases. About 66% of five-letter words are isograms, versus about 5% of ten-letter words and 0.06% of fifteen-letter words—the only two being DERMATOGLYPHICS and UNCOPYRIGHTABLE—and there are none any longer:

![Graph of isograms](/assets/images/isogramgraph.png){: class="img-big"}

Of course, we're not looking for any old isogram, we want animal isograms! Rather than an English dictionary, we need a list of animal names. In particular, we want a *massive* list of animal names. More animals means more chances for rare long isograms to appear.

Once we have a list, finding its longest isogram is actually the easy part. We can just use [Wordlisted](https://aaronson.org/wordlisted/), a webapp I made that lets you upload any wordlist, search it for words with various features (one of which is isograms, conveniently), and sort the results by length. Thanks, past me!

So here's the plan: acquire a comprehensive list of animal names, and throw it into Wordlisted to find its longest isogram. Easy, right?

But uh, where do you get a comprehensive list of animal names?

## Take 1: A-Z Animals

If you google "list of animals," one of the top hits is the aptly named website [A-Z Animals](https://a-z-animals.com/animals/). It's a big honkin' list of animals ranging from aardvark to zuchon, with fun facts about each one. This seems like a good starting place.

So I whipped up a Python script to scrape the A-Z Animals list using [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/), and before I knew it I had a txt file of 2,093 animal names. Maybe not comprehensive, but pretty good. I tossed it into Wordlisted, and out popped a 12-letter isogram, the new front runner for longest H-O-R-S-E animal:

BREDL'S PYTHON
{: class="big-word"}

![Bredl's python](/assets/images/bredlspython.jpg){: class="img-big"}
*from [A-Z Animals](https://a-z-animals.com/animals/bredls-python/)*
{: class="image-attribution"}

How fitting! Python in, python out. [Bredl's python](https://en.wikipedia.org/wiki/Morelia_bredli) is a python species native to Australia, named after Australian snake guy Josef Bredl. According to A-Z Animals, "these snakes love to climb trees, and young snakes often hide high in the branches."

That's progress! But we can do better.

## Take 2: WordNet

My next order of business was to consult wordplay programming maven Alex Boisvert of [Crossword Nexus](https://crosswordnexus.com) fame. I asked him the question at hand: what's the best way to scrape a massive list of animal names? Spitballing, I suggested I could try [WordNet](https://wordnet.princeton.edu), an enormous database of lexical items tied together with synonyms and other relations.

As it turned out, one of WordNet's relations is hyponyms, words that describe a subset of other words—for example, *square* is a hyponym of *rectangle*, and *waffle* is a hyponym of *food*. That means finding a list of animals was as simple as finding every word in WordNet that's a hyponym of *animal*. Naturally, Alex had a chunk of Python code sitting around that did exactly that: find every word in WordNet that's a hyponym of some other word.

After a few minutes of figuring out how to download WordNet (it's pretty easy with [NLTK](https://www.nltk.org/data.html)), a few seconds of running Alex's code, and a few minutes of cleaning up the resulting data, I now had a txt file of 7,262 animals. A marked improvement over A-Z Animals! 

With more animals came more isograms, and with more isograms came a new longest isogram. Introducing an animal you can play a 13-letter game of H-O-R-S-E with:

JUNCO HYEMALIS
{: class="big-word"}

![Junco hyemalis](/assets/images/juncohyemalis.jpg){: class="img-big"}
*from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dark-eyed_Junco,_Washington_State_02.jpg)*
{: class="image-attribution"}

*Junco hyemalis* is the scientific name of the [dark-eyed junco](https://en.wikipedia.org/wiki/Dark-eyed_junco), a species of sparrow native to North America. That's right, WordNet has both common names and scientific names. That feels fine to me, since this is all in the name of science.

It just so happens that *Junco hyemalis* contains exactly one of each vowel, making it *supervocalic* (another self-descriptive wordplay term). It even has a Y, making it *euryvocalic* (another!). In fact, you'll see that long isograms tend to be super- or euryvocalic. As words get longer, they need more vowels, and since isograms can't repeat old vowels, they'll eventually need to use all five or six.

Unlike WordNet, A-Z Animals doesn't list scientific names like *Junco hyemalis*, but it *does* list the dark-eyed junco! Their fun fact about our favorite euryvocalic isogram bird is: "they are called snowbirds because many subspecies reappear in the winter."

Lovely! But we can do better.

## Take 3: Wikidata

I figured there had to be some way to scrape every animal from either Wikipedia or its sister database Wikidata.

So I reached out to [Lucas Werkmeister](https://twitter.com/LucasWerkmeistr), a Wikidata developer who I found through some shenanigans he did with [depths of wikipedia](https://twitter.com/depthsofwiki/status/1575098937144270849?s=20&t=X94qpHpzIu_YGmFpVYQY5A). I asked him my question, and soon enough he sent me [this query](https://query.wikidata.org/#SELECT%20%3Fanimal%20%3FtaxonName%20WHERE%20%7B%0A%20%20%3Fanimal%20wdt%3AP171%2B%20wd%3AQ729%3B%0A%20%20%20%20%20%20%20%20%20%20wdt%3AP105%20wd%3AQ7432%3B%0A%20%20%20%20%20%20%20%20%20%20wdt%3AP225%20%3FtaxonName.%0A%7D) written in SPARQL (pronounced "sparkle") that scours Wikidata for every species in the animal kingdom along with its taxon name (Wikidata's term for scientific name). I tried running his query in the Wikidata Query Service, but the request timed out. This was both a problem, since I couldn't get the results, and a good sign, since that meant there were a *ton* of results.

Thankfully, Lucas pointed me toward a [Mastodon post](https://wikis.world/@hare/109249558901040810) that addressed this very issue. One reply to this post led me to [QLever](https://qlever.cs.uni-freiburg.de/wikidata) (pronounced "clever"), an open-source SPARQL engine developed at the University of Freiburg in Germany. Not only did QLever run Lucas's Wikidata query without timing out, it ran it in like 2 seconds.

After downloading the data from QLever and cleaning it up in Python, I suddenly had a txt file of *over 1,700,000* animal names, ranging from the absurdly-named beetle *Aaaaba nodosus* to the sponge-dwelling cnidarian *Zyzzyzus warreni*. Take that, A-Z Animals! Like WordNet, Wikidata stores both common names and scientific names, but unlike WordNet, Wikidata has *several orders of magnitude* more animals.

Plugging a list of 1,700,000 animals into Wordlisted was a real moment of truth, both as a search for isograms and as a stress test for Wordlisted. But this was a success on all counts, yielding a result in a league of its own. Against all odds, here's a 16-letter isogram animal:

HABRONYX FULVIPES
{: class="big-word"}

![Habronyx](/assets/images/habronyx.jpg){: class="img-big"}
*This isn't even Habronyx fulvipes, it's a close relative in the Habronyx genus (from [iNaturalist](https://inaturalist.nz/taxa/250578-Habronyx)). As far as I could tell, there are no images of Habronyx fulvipes on the internet. I would love to know what this little guy really looks like!*
{: class="image-caption"}

*Habronyx fulvipes* is a species of wasp [first described](https://www.gbif.org/species/1303643) in 1965 by Henry Keith Townes, Setsuya Momoi, and Marjorie Townes. It has no Wikipedia page in English, but it does have one in [Dutch](https://nl.wikipedia.org/wiki/Habronyx_fulvipes) and a few other languages. It also has no A-Z Animals page, which means I can't tell you their fun fact, so instead I'll come up with my own. My fun fact is, "its species name *fulvipes* is Latin for *yellow legs*, which is a reference to the wasp's yellow legs."

More importantly, *Habronyx fulvipes* is an ultra-rare 16-letter isogram (that also happens to be euryvocalic), longer than any isogram in the English dictionary and more than three times the length of H-O-R-S-E. For all intents and purposes, this is the answer to our question. But here are some honorable mentions:

- Longest one-word isogram animal: **PAMBDELURION** (12 letters), an extinct [species of arthropod](https://en.wikipedia.org/wiki/Pambdelurion), which is also supervocalic and sounds like a sci-fi villain
- Longest common name isogram animal: **BROWN PALM CIVET** (14 letters), a [species of civet](https://en.wikipedia.org/wiki/Brown_palm_civet), which can also be pluralized to the isogram **BROWN PALM CIVETS** (15 letters)
- Longest isogram animal with an English Wikipedia page: a tie between **AMPHONYX LUCIFER** (15 letters), a euryvocalic [species of moth](https://en.wikipedia.org/wiki/Amphonyx_lucifer), and **GLYPHODES UMBRIA** (15 letters), a euryvocalic [species of moth](https://en.wikipedia.org/wiki/Glyphodes_umbria)
- Shortest isogram animal: probably **OX**

Hopefully that should give you plenty of options. A little Wikidata query will go a long way!

## Moral of the story

Society has progressed past the need for H-O-R-S-E. Soon enough, all the cool kids will be on the court, sinking trickshot after trickshot, playing H-A-B-R-O-N-Y-X-F-U-L-V-I-P-E-S.