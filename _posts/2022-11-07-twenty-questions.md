---
title: "Twenty Questions"
image: "/assets/images/thequestions.jpg"
---

Let's play a game. I'm thinking of a number from 1 to 100. You guess, and I tell you whether my number is higher or lower.

Naturally, your first guess is 50, since you're trying to cut the possibilities perfectly in half. I tell you it's higher, so you guess 75. I tell you it's lower. You keep splitting the possibilities in half, until eventually you've narrowed it down to one number (it was 59, good job). With this strategy, it turns out you can figure out any number from 1 to 100 in at most seven guesses. Or any number from 1 to a million in at most twenty.

In computer science, we've got a name for this narrowing-down procedure: [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm). As long as the possibilities are sorted in some way (like numbers in numerical order), we can home in on one at lightning speed just by repeatedly cutting the possibilities in half. 

But guessing numbers isn't very interesting. What if we could generalize binary search to more than just numbers—what if we could binary search through *all of the things*?

As it turns out, you can. It's a little game called Twenty Questions.

## Twenty Questions is a weird game

We've all played it. At the core of Twenty Questions, you have an answerer and one or more guessers. The answerer thinks of a thing, and the guessers have to deduce that thing purely by asking the answerer yes–no questions. Traditionally, the guessers have a whopping twenty questions to guess the thing, otherwise they lose.

![Beef Rapp](/assets/images/beefrapp.jpg){: class="img-right"}

As a game, this doesn't really seem fair. If the answerer is motivated to win, they can just think of a thing so obscure that the guessers couldn't possibly guess it in twenty questions. And that's super easy to do, since twenty questions isn't enough to guess almost anything!

To understand why, we have to do some math. Asking a yes–no question is just like asking if a number is higher or lower: it gives you a [bit](https://en.wikipedia.org/wiki/Bit) of information that cuts the possibilities into two groups. That means two yes–no questions create four groups, three questions create eight groups, and in general, *n* yes–no questions create 2<sup>n</sup> groups. In particular, twenty questions is enough to distinguish 2<sup>20</sup>, or 1,048,576 types of things—this is exactly why you can deduce any number from 1 to a million in twenty guesses.

But in Twenty Questions, the answerer doesn't have to think of a number from 1 to a million, they can think of *anything*. And, well, there are *way* more than 1,048,576 things. For example, numbers are things, and we can conceive of way more than a million numbers (like negatives, or fractions, or 1,048,577), so twenty questions isn't even enough for numbers. But chances are the answerer isn't thinking of a number. What about every possible word, or location, or event, or type of pasta? It doesn't take long to realize that the number of conceivable things is infinite. As John Green (or [Georg Cantor](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument)) taught us, some infinities are bigger than others—and the number of things is a *really big* infinity.

You might be thinking, wait, if there are infinitely many things to narrow down, couldn't the game take infinitely long? Theoretically, maybe, but in practice, no. This is kind of a paradox. Even though we can conceive of infinitely many things, any *particular* thing will be guessable in a finite number of questions. After all, the answerer can only reach so far into the infinite depths of the universe before they decide on a thing, and any particular thing will be expressable in a finite number of words. Now it might not take twenty questions—in fact, it almost always won't—but the game will end eventually.

How would I know? Throughout my life, I've played a lot of Twenty Questions, whether it was with my cabinmates at overnight camp, with my friends in high school and college, or with random people on Sporcle's [Twenty Questions forum](https://www.sporcle.com/groups/20questions). Even with infinite questions, the games always find a way to end—everyone still calls it Twenty Questions, though, for old time's sake. The way I see it, playing with no question cap distills the game to its purest form. Besides, it's far more satisfying for everyone if the guessers can reach that "aha!" moment, rather than having the game be artificially cut short after a measly twenty questions.

But wait a second, if there's no question cap, how is this even a game? There isn't really a winner or a loser, unless the guessers give up, in which case the answerer is disappointed and everyone loses.

That's because Twenty Questions is a cooperative, asymmetric game. It's cooperative because everyone is ultimately working toward a common goal: deducing the answer. And it's asymmetric because different players have different amounts of information: the answerer knows the thing, but the guessers don't, and they gain more information about the thing as they ask more questions. Information asymmetry is unstable and makes us uncomfortable, but if the guessers figure out the thing, the asymmetry is eliminated and everyone's happy. So how can they get there in as few questions as possible?

## The questions

This goes back to binary search. Remember how if I'm thinking of a number from 1 to 100, you wanted to guess 50 to split the options perfectly in half? If you had instead guessed 90, the majority of the answers are lower, so most of the time I'll say "lower" and you'll still have 89 numbers to sift through. But by guessing 50, you minimize that majority, which ends up minimizing the expected number of remaining options. Splitting the options perfectly in half is the optimal strategy, ensuring that every guess gives you as much information as possible.

![Can't touch this](/assets/images/thequestions.jpg){: class="img-right"}

The same logic applies to Twenty Questions. In a truly optimal strategy, each question would split the remaining things perfectly in half. Realistically, this is pretty infeasible, unless you have a perfect mental taxonomy of everything in existence. But you can still use this as a heuristic to guide your question-choosing strategy.

For one, don't start guessing individual things (like asking "is it a toothbrush?") until you've already narrowed things down *significantly*. If the thing is right, then it's your lucky day, but if not, it makes essentially no progress and leaves you in exactly the same place as you were before. It's like playing the 1 to 100 game and guessing 100 first.

With that in mind, we can start thinking about what questions *are* effective in a game of Twenty Questions. I'll start with the first question I ask in every single game, a question so important that many other questions make no sense without answering it first, a question so ubiquitous that my friends and I started abbreviating it simply as "is it T?":

> #### "Is it tangible?"

This question crucially distinguishes two types of things: ones that exist in a physical form (like objects, places, and living things), and ones that don't (like ideas, actions, and events). This is about as good of a 50/50 split as it gets—each subgroup is its own little infinity.

So now you know whether it's tangible. Great! Now what? It's time to narrow things down.

### Tangible things

These are often easier to figure out. We have a strong intuition for how to categorize and compare physical objects, so we can more closely approximate binary search with them (remember, binary search only works on sorted data). But there are a lot of tangible things—infinitely many! Here are some questions that roughly halve that infinity into two smaller infinities:

> #### "Is it alive?"

People like to think of animals, plants, and especially other people, and luckily scientists have gotten really good at classifying these. If it's living, you can start deducing the thing taxonomically ("Is it an animal? Is it a mammal? Is it a member of the family *Mustelidae*?"). And if not, you've just cut out a ton of possibilities.

> #### "Is it countable?"

This is a little more subtle. It basically asks if the answer is more of an uncountable "stuff" (like sand or grape juice) or a countable "thing" (like a bench or a fanny pack). Lots of questions only make sense for stuffs or for things, so this is a helpful distinction moving forward.

> #### "Is there more than one of it?"

Hey, it's a question that only makes sense for things, not stuffs! If it's a yes, you can start to ask questions about how many there are or where they're usually found (inside, outside, in the bathroom, on the wall, etc.). But if it's a no, you can start narrowing down on the thing's location, which is usually a straightforward path to the endgame.

> #### "Is it bigger than a breadbox?"

This question has been known to prompt confusions like "well, it's bigger in one axis, but smaller in another" or "wait, what's a breadbox?" But this is an unironically great question. In practice, about half of the physical things we think of are bigger than a breadbox, so this question is useful to gauge whether we're dealing with more of a fridge-sized thing or a baseball-sized thing. Either way, it's [such a classic question](https://www.youtube.com/watch?v=-q9tXR7jmL8&feature=youtu.be) that it's irresistible to ask.

> #### "Is it made of a common material?"

From here, if it's a yes, you can go on to deduce the actual material, which is good to know. This is one of many "meta-questions" that I've found surprisingly useful—questions that don't carry much information themselves, but can help guide the guesser's train of thought and open the door for more informative questions. Other questions of this kin include "is it usually a certain color?,” "is it typically used by a certain type of person?," and even questions like “would it be helpful to ask about X?”

### Intangible things

![Can't touch this](/assets/images/canttouchthis.jpg){: class="img-right"}

Intangible things can be harder to conceptualize and categorize, which often makes them trickier to figure out. But don't panic! These can make for very interesting games, and they're doable as long as the guessers have a decent plan of attack.

Here's one *bad* question people always seem to be tempted to ask: "Is it an idea?" Really, basically everything is an idea, so this doesn't actually give you any information. Instead, I recommend trying some of these questions:

> #### "Can you observe it with any of the other five senses?"

Sure, you can't touch it. But can you see it, hear it, smell it, or taste it? Okay, probably not smell or taste, unless the answerer is thinking of "umami" or something. But plenty of intangible things are visible or audible (like the color purple, or the Nike Swoosh, or "Mambo No. 5"), so this is useful information.

> #### "Is it something that happens?"

A lot of intangible things are events, phenomena, or actions: things that happen! If this is the case, you can go on to figure out where, when, and other conditions under which it happens.

> #### "Is it fictional?"

Fictional characters and things are a surprisingly tough type of answer to figure out, since it's easy to go down a rabbit hole of intangibility before realizing it's just a tangible thing in an intangible universe. It's not a bad idea to ask this early on just to crack open this case.

> #### "Would you learn about it in a particular class?"

This is probably my favorite meta-question for intangible things, because it helps you deduce so many different things. If the answer here is yes, you can go on to deduce the class, which can be a helpful frame of reference. This is huge for mathematical objects, scientific phenomena, historical events, and lots of other categories of things.

> #### "Does it involve a particular tangible thing?"

Many intangible things can't exist without something tangible. For example, tennis isn't tangible, but it involves tennis balls and tennis rackets. A high five isn't tangible, but it involves human hands. In a lot of cases, this question can reduce a hard intangible Twenty Questions game into a much easier tangible game. Once you figure out that tangible thing, all that's left is to deduce how exactly it's involved. Does it require more than one of them? Does the thing move? The world is your oyster.

## The answers

Now we've talked a lot about the guessers' strategy. But that's just one side of the story! There's also a surprising amount of strategy involved in being the answerer.

In many ways, the answerer is the leader of the Twenty Questions game. Like the creator of an escape room, or the dungeon master in Dungeons & Dragons, their ultimate goal is to make the game fair and fun for the players. The answerer has two main responsibilities: answering the questions, and coming up with a thing in the first place.

When it comes to answering questions, you might think the answerer's role is pretty clear-cut: just say yes or no. But in practice, many yes–no questions are more accurately and fairly answered with more nuance than that. In cases where "yes" or "no" don't tell the full story, it's in everyone's best interest to give answers like "it depends," "usually," "irrelevant," or "I can't answer that because your question entails a false assumption about the answer." 

### Twenty Questions is not a word game

I have to get this off my chest. Look, I love word games [as much as anyone else](https://aaronson.org/crosswords/). But at its core, Twenty Questions is a *thing game*, not a word game, and there are a few problems with thinking of it as such.

First off, if the answerer is just thinking of a word, then the guessers can just deduce the answer by rote binary search, asking "is the first letter in the first half of the alphabet?" and "is the first letter between H and M?" and so on. Now if this is your definition of fun, then have at it. But to me, these kinds of questions collapse the game into a triviality, eliminating any notion of strategy or creativity. If the guessers get so frustrated that they resort to these questions, I try not to answer them and instead steer them in the right direction.

But in most cases, it doesn't even make sense to reduce the thing to the word that represents it. What we actually care about is the *referent*, the thing the word actually refers to, not the word itself. This is because one word can often have multiple possible referents, and the game falls apart unless the thing is just one of them. For instance, one of my friends once chose the thing "mark" (since my buddy Mark was right there). The thing is, "mark" can mean a lot of things—it has dozens of definitions [listed on Merriam-Webster](https://www.merriam-webster.com/dictionary/mark) as a noun alone—and my friend wasn't thinking of one in particular. This meant pretty much all his answers were wishy-washy and unclear, and it didn't take long for us guessers to rage-quit.

Sometimes the distinction between meanings is more subtle, but equally game-ruining. Let's say the answerer is thinking of McDonald's. Now, is it tangible? The correct answer is: it depends. They might be thinking of a physical McDonald's restaurant building, which is tangible, or they might be thinking of the corporate entity McDonald's, which is intangible. It's subtle, but the distinction is there. This is what linguists call [polysemy](https://en.wikipedia.org/wiki/Polysemy), when one word has multiple meanings that are closely related, but distinct.

So, when you’re the answerer, make sure to think of a *thing*, not just a word. A neat side effect of this is that the guessers don't have to name the thing verbatim, as long as it *refers* to the same thing. If the answerer thinks of a roundabout, the game still ends if someone guesses a "rotary" or a "traffic circle."

Alright, the only exception here is if the answerer's thing is literally a word, in which case the best way to deduce it is by first figuring out that it's a word, then binary searching the alphabet. But I've tried this before and I can't say I recommend it. You can imagine my friends' excitement when they found out my thing was "the word *because*."

### Here's the thing

![My Favorite Things](/assets/images/favoritethings.jpg){: class="img-right"}

Finally, this brings us to the strategy behind selecting a thing. There are a few factors to consider here.

If the answerer chooses a ludicrously obscure thing, the guessers will never figure it out, which is no fun. But if the thing is so straightforward that the guessers will quickly get it, there's less of an "aha!" moment, which makes the game less satisfying. That means selecting a thing is a balancing act: think of something that's a little out-there, but not *too* out-there.

In my experience, the most interesting things for an answerer to choose are ones that are well-known but difficult to categorize. Something like a person, food, animal, or location is a perfectly cromulent thing, but once the guessers figure out its category, deducing the thing suddenly becomes straightforward. But if the thing isn't in a clear-cut category, it takes a little more mental gymnastics to get there.

Here's an assortment of things I've found that strike that balance—familiar, but challenging to deduce—and make for a certifiably fun game of Twenty Questions:

- Air guitar
- Ball pit
- Confetti
- Five-second rule
- Foam finger
- Fourth wall
- Googly eyes
- House of cards
- Lint
- Message in a bottle
- Moving walkway
- Packing peanut
- Peek-a-boo
- [Pegman](https://www.buzzfeednews.com/article/justinesharrock/pegman-googles-weird-art-project-hidden-in-plain-sight)
- Piñata
- [Pizza table](https://en.wikipedia.org/wiki/Pizza_saver)
- Porta-potty
- Roy G. Biv
- Speed bump
- Standing ovation
- [Tube man](https://en.wikipedia.org/wiki/Tube_man)
- Velcro

## Try this at home, kids!

Now it's your turn! Go play Twenty Questions with your friends (but with infinite questions, of course), and give some of the above things a try or come up with your own. You'll quickly be reminded how elegant the game is: few rules, zero equipment, and truly infinite replay value. It feels inevitable—if you restarted society from scratch, someone somewhere would eventually reinvent Twenty Questions. It's what I like to call a "nothing game," in that you need absolutely nothing to play it, just some friends and a little bit of patience.

I might go into Twenty Questions variants and other "nothing games" in future posts. But while you're waiting, there's no better way to pass the time than a good old fashioned game of Twenty Questions.