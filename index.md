---
layout: test
---

# IndiADA Jones and the raiders of human knowledge

## Chapter 1 : Finding your way in the big bad network

Imagine this: you are an untrademarked, totally unspecific explorer and you are tasked with exploring an ancient ruin containing all of humanity's knowledge. You are given a map and you have to find your way from one point in the ruin to another. Pretty easy, right?


Now imagine you are given this map:


<div class="jungle-reveal">
    <div class="jungle-reveal-click-catcher"></div>
    <div class="jungle-reveal-overlay">
        <div class="jungle-leaf jungle-leaf-left"></div>
        <div class="jungle-leaf jungle-leaf-right"></div>
    </div>
    <div class="jungle-reveal-hint">🌿 Click to reveal 🌿</div>
    <iframe data-src="browsers/network_map_random_nodes.html" width="100%" height="600" style="border:none;"></iframe>
</div>


This is the task given to you in the game Wikispeedia: you have to find your way from one article to another using only hyperlinks. On the map above, each dot is an article and each line represents a hyperlink from one to the other. When you start the game, you are dropped into your start article and you have to navigate in Wikipedia to your target article. The map is actually just in your mind. Understanding how users choose to navigate this network can be very informative about what subjects users believe relate to each other. 

You can take a look at what that can look like here by choosing a past adventure other explorers have gone on:


<iframe src="browsers/network_map_clustered_nodes_with_dropdown.html" width="100%" height="600" style="border:none;"></iframe>


This map is maybe closer to how you would actually imagine it to be to orient yourself. The articles are sorted by proximity of vocabulary used in each one, so Paris is sorted close to France, anything to do with Poland forms a cluster... 

Now this task sounds pretty scary, we get it. 

You could set out and get caught in dangerous traps. You may want to go back, retrace your steps to try and find your way in this maze. And actually it turns out a lot of explorers (or okay... just Wikispeedia nerds) do just that.

<div style="text-align: center;">
    <iframe 
      src="figures/backtracking_pie.html"
      style="display: inline-block;"
      width="65%"
      height="450"
      frameborder="0">
    </iframe>
</div>


About 20% of paths in our Wikispeedia dataset contain backtracking. 

When we saw this, we immediately wondered where these people backtracked to, what pushed them to go back and, obviously, whether it would make them more likely to lose the game. 

Let's take a look!

<br><br>

## Chapter 2 : Where did you come from, where did you go?


People use backtracking sometimes. However, before asking why, let's first look at how. How do people use backtracking, and more importantly, where do they go? Remember that the map is not visible, so it is virtually impossible for you to know whether you are on the right track or not.

To begin with, we will determine which sites are network hubs and which are backtracking hubs. In this context, network hubs are sites that have a large number of hyperlinks, and therefore connections to other sites, while backtracking hubs are sites that have been found to be a return point when using backtrack.


<div style="text-align: center;">
    <iframe 
      src="figures/hub_network_top30.html"
      style="display: inline-block;"
      width="90%"
      height="600"
      frameborder="0">
    </iframe>
</div>

<div style="text-align: center;">
    <iframe 
      src="figures/hub_backtrack_top30.html"
      style="display: inline-block;"
      width="90%"
      height="600"
      frameborder="0">
    </iframe>
</div>


Interesting... We can already see that certain sites are quite high up in both distributions. But is this a happy coincidence, or could there actually be a hidden connection between the two ?

In order to determine whether there is a direct correlation between the number of links and the backtrace count, we need to look at all the points. 


<div style="text-align: center;">
    <iframe 
      src="figures/compare_hub_rankings.html"
      style="display: inline-block;"
      width="90%"
      height="600"
      frameborder="0">
    </iframe>
</div>


The correlation between the number of links and the number of backtraces is quite low, suggesting that the hubs in the network are not necessarily the same as those frequently used for backtracking. However, there is a point of high density on the right side of the graph, indicating that there is a certain set of sites that follows the correlation. 

Let's go a little further to better understand what is happening in the high-density zone. Let's do a Spearman Correlation and P-Value test for the data sets that are the first n elements of each dataFrame. The idea is to identify which sets produce the highest correlation. Why? We'll get to that very soon...


<div style="text-align: center;">
    <iframe 
      src="figures/slope_similarity.html"
      style="display: inline-block;"
      width="90%"
      height="600"
      frameborder="0">
    </iframe>
</div>


What can we see? Well, first of all, the score decreases as more data is taken into account, which is not very encouraging for the next parts. But we also notice that with few elements, the score is not so bad. We have a respectable correlation score with the first 250 elements or so, which was already indicated by the previous graph.

You're probably thinking that this is simply the effect of the law of small numbers, which produces results that are not necessarily relevant. However, you would be wrong to think that this is all there is to say...

There is something that has not yet been presented, namely, the distribution of hubs.


<div style="text-align: center;">
    <iframe 
      src="figures/compare_hub_distributions.html"
      style="display: inline-block;"
      width="90%"
      height="600"
      frameborder="0">
    </iframe>
</div>


How does this distribution change the situation? First of all, the distributions do not follow the same trend, but that is not very important. The reason for the previous rather weak results is highlighted here.

When testing the correlation, we relied on the location of an element in the dataframe. However, It should be noted that the lower a site's backtrack score, the more it shares the same score with other sites, unlike the number of hyperlinks. 

Why would that be a problem, you ask ? 

Well, since many sites share the same backtrack score, their ranking is no longer very meaningful if we focus on low scores. For example, take a site with a backtrack score of 1. Could you say precisely which index it should occupy in the dataframe? A normal person cannot know that. It could be element 1700 or 2400, depending of the ordrer that the code is processing the data. This will create a very significant variance and it's this aspect that greatly reduces correlation as values are added.

<br><br>

## Chapter 3 : Why are users backtracking?

### Hypothesis 1 : Experience level


As one could say, "Adventure is the best teacher, and experience is the treasure it leaves behind". There are lots of Wikispeedia adventurers that have tried to forge a path through the jungle of articles. 

Here is an overview showing the experience level of the players and their backtracking use.

<iframe 
  src="figures/experience_level.html"
  width="100%"
  height="550"
  frameborder="0">
</iframe>

Needless to say, a good portion of them are only part-time adventurers and have only played a single game or two, which results in a quite high percentage of desertion (only 52% finished paths!). On the other hand, the most seasoned adventurers have made quite a long journey in Wikispeedia, with some having instigated a few thousand games. They also have had more success in their quest (more than 82% finished paths for 301+ sessions!). 

It is very interesting to observe the strategy of our new adventurers being different than the one of our most seasoned ones: the latter had the courage to embark on more quests, but also the wisdom to retrace their steps when necessary. Indeed their average backtracking per session increases with the number of games they played.


### Hypothesis 2 : Subjects in the path


Another potential source of backtracking we wanted to look into is the category of the articles in the path. The subject of the start point and end point could have a large impact on the amount of backtracking.

To look into this hypothesis, we decided to create heatmaps of start and end categories of articles in paths of the dataset to see if any combination of two categories would lead to more backtracking.

<div style="text-align: center;">
    <iframe 
      src="figures/category_heatmap1.html"
      style="display: inline-block;"
      width="80%"
      height="650"
      frameborder="0">
    </iframe>
</div>

<div style="text-align: center;">
    <iframe 
      src="figures/category_heatmap2.html"
      style="display: inline-block;"
      width="80%"
      height="650"
      frameborder="0">
    </iframe>
</div>



Both finished and unfinished paths seemed to carry more backtracking in the same category combinations. What this analysis reveals is that some category combinations of start and end article seem to cause more backtracking. For example, when users are tasked with navigating from Science to Science, they tend to backtrack the most. Now, there are several reasons why this could happen. 

It's hard to find your way when you don't know where you're going, right ? As an explorer, if someone tells you to go to Lithuania and you don't know where Lithuania is, well, you could get lost somewhere between Estonia and Latvia and need a few attempts to find your way. Users could be more likely to backtrack when exploring these categories because they are simply unfamiliar with the subjects (hence why science, history and technology seem to cause the most backtracking)

Another possibility is that maybe people are just interested in the subject. Maybe these explorers just wanted to spend more time reading up on the subject.   

Here are the top 5 articles that cause the most backtracking when they are the target of the path.
 

| Rank | Article | Category | 
| :--- | :--- | :--- |
| **1**| Morecambe_and_Wise | Everyday_life|
| **2**| Felix_the_Cat | Everyday_life |
| **3**| Nurse_sharks | Science |
| **4**| Borage | Science |
| **5**| Lake_Victoria | Geography |


In the list, the articles that appear are part of the categories that were highlighted on the heatmap as being problematic, such as Everyday_life and Science. 

And you, do you think you can do it without getting lost ? Would you have found your way to Borage ? Find out [here](https://dlab.epfl.ch/wikispeedia/play/?article=Latin).

<br><br>

## Chapter 4 : Will backtracking doom you to fail ?

It's good to know why our Adaventurers backtrack but now, does it bring them success... or does it doom them to fail?

<!-- ### Paths with and without backtracking in successful and unsuccessful paths -->
It is interesting to show the proportion of paths which contain backtracks (or which do not!).

<div style="text-align: center;">
    <iframe 
      src="figures/stacked_columns.html"
      style="display: inline-block;"
      width="63%"
      height="450"
      frameborder="0">
    </iframe>
</div>

Actually, it does not change too much. About 20.9% of unfinished paths and 17.5% of finished paths use backtracking along the way. 

<!-- ### Number of backtracks in finished and unfinished paths histogram -->

Now, let's inspect the distribution of the number of backtracks in both finished and unfinished paths.

<iframe 
  src="figures/distrib_fin_vs_unfin.html"
  width="100%"
  height="550"
  frameborder="0">
</iframe>

Once again, the distribution is almost the same for both successful and unsuccessful games. 

This means that, well... overall it does not really seem to have a significant effect on the success of the game.


This graph shows us the distribution of paths per certain amount of backtracking. It serves to highlight the wide range of amounts of backtracking in the database.

### Spearman's Rank correlation coefficient

In order to determine whether there was any significant non linear correlation between backtraking and success, let's compute a statistical test such as the Spearman's rank correlation on paths with and without backtracking and failure and success.

In a nutshell, Spearman’s rank correlation coefficient (ρ) measures the strength and direction of the relationship between two ranked variables. It ranges from −1 (perfect negative correlation) to +1 (perfect positive correlation) while 0 indicates no correlation.

<!-- // Results of Spearman -->

| Backtracking | Spearman's coefficient | P-value |
|:---|:---|:---|
| With | -0.04 | 2.5e-29 |
| Without | 0.04 | 2.5e-29 |

We observe that games in which the user has backtracked have a slight tendency to be unsuccessful.

This confirms that there exists very low association between backtracking and outcome of the game. Thus, we do not think our backtracking adventurers will be doomed, so... if you enjoy backtracking, you do you!



<details>
<summary>Honorable mention</summary>
Before we move on to the final leg of our ADAventure, we wanted to ask you a quick question.

When you saw our first map, did you wonder what that big circle in the middle is ?

Well, so did we. From it's size on the map, we were able to determine it is the most connected article in the game.

What subject is so invaluable, so universal that it is the most connected article in the game? 

The answer: Wikipedia_Text_of_the_GNU_Free_Documentation_License

It turns out that, at the bottom of every single Wikispeedia page, there is a link to this article about the Wikipeedia license. But, once you click on it, you'll find out that there are no hyperlinks on this page. You have found yourself in a dead end. 
</details>



<br><br>

## Chapter 5 : The effect of backtracking on user difficulty perception


So, backtracking does not seem to be linked with not reaching your destination in the game (AKA failing the game).  But this realisation made us wonder whether it affected the difficulty perception our adventurers had of the game. We imagined that having to turn back again would make for a less enjoyable and more difficult path.

To analyse this, we used the rating metrics of the game. Ratings are optionally given by the user after finishing the game and range from 1 ("easy") to 5 ("brutal"). After some proper data processing, we first performed a naive analysis of univariable relationship between the number of backtracking and the average rating of each game. The first conclusion is that average rating increases as the number of backtracks increases and it was exactly what we hypothetized before doing this analysis.


<div style="text-align: center;">
    <iframe 
      src="figures/plot_rating_by_backtrack.html"
      style="display: inline-block;"
      width="93%"
      height="550"
      frameborder="0">
    </iframe>
</div>


Nonetheless, to isolate the specific effect of backtracking, we performed Ordinary Least Squares (OLS) regression. We predicted rating using the number of backtrack, game duration, the number of articles visited , and the minimal number of articles seperating the two articles.


<div style="text-align: center;">
    <iframe 
      src="figures/OLS1.html"
      style="display: inline-block;"
      width="93%"
      height="550"
      frameborder="0">
    </iframe>
</div>


| Variable | Coefficient | Std Error | t-value | P-value | [0.025 | 0.975] |
|:---|:---|:---|:---|:---|:---|:---|
| Intercept | 1.0532 | 0.025 | 41.833 | 0.000 | 1.004 | 1.103 |
| Nbr_Backtrack | -0.2313 | 0.007 | -33.478 | 0.000 | -0.245 | -0.218 |
| DurationInSec | 0.0017 | 5.31e-05 | 32.605 | 0.000 | 0.002 | 0.002 |
| Path_Length | 0.1553 | 0.003 | 58.347 | 0.000 | 0.150 | 0.161 |
| Shortest_Path_Length | 0.0074 | 0.008 | 0.951 | 0.341 | -0.008 | 0.023 |


Backtracking has a clear and substantial impact on how players perceive the difficulty of the game, but not in the way we expected. In the regression, the number of backtracks shows a strong negative coefficient (–0.23), meaning that each additional backtrack is associated with a lower difficulty rating once path length, duration, and shortest path length are controlled for. Backtacking is therefore a strong predictor of a lower difficulty scores. It seems then that our adventurers do not see retracing their steps as hard or punishing. It seems that backtracking actually makes them perceive the journey as easier. Perhaps they get more time to explore and get a more rewarding feeling when they actually manage to reach their destination.



<div style="text-align: center;">
    <iframe 
      src="figures/OLS2.html"
      style="display: inline-block;"
      width="93%"
      height="550"
      frameborder="0">
    </iframe>
</div>


| Variable | Coefficient | Std Error | t-value | P-value | [0.025 | 0.975] |
|:---|:---|:---|:---|:---|:---|:---|
| Intercept | 2.2618 | 0.006 | 410.609 | 0.000 | 2.251 | 2.273 |
| Nbr_Backtrack | -0.2754 | 0.008 | -33.478 | 0.000 | -0.292 | -0.259 |
| DurationInSec | 0.2412 | 0.007 | 32.605 | 0.000 | 0.227 | 0.256 |
| Path_Length | 0.5768 | 0.010 | 58.347 | 0.000 | 0.557 | 0.596 |
| Shortest_Path_Length | 0.0053 | 0.006 | 0.951 | 0.341 | -0.006 | 0.016 |


To check that we accurately caught this effect, we even ran a second OLS with standardized coefficients to make sure that we were isolating the impact of backtracking on the same scale as the other variables. For ratings, the standardized effect of backtracking is strongly negative (β = –0.28). This means that, when all variables are expressed in standard deviation units, an increase of one standard deviation in the number of backtracks leads to a decrease of about 0.28 standard deviations in the perceived difficulty rating. Among all predictors, backtracking is the only negative driver of difficulty perception and one of the strongest predictors overall, second only to path length.

The first linear regression could not show this effect since bactracking strongly affect the game duration and path length. More backtracking is associated with longer path length and longer game duration as shown in the following plots. Each additional backtrack increases the total path length by about 2.3 articles and adds roughly 51 seconds to the completion time. Backtracking therefore makes trajectories longer and substantially slows players down.


<div style="text-align: center;">
    <iframe 
      src="figures/backtrack_rating_relationships.html"
      style="display: inline-block;"
      width="93%"
      height="350"
      frameborder="0">
    </iframe>
</div>



Nonetheless, the effect of backtracking is independent of path length and duration, and it strongly reduces the difficulty ratings given by adventurers to their games!

<br><br>

## Chapter 6 : Conclusion


And now, you've reached the end of the adventure. 

By exploring the Wikispeedia dataset, we were able to conclude that:

- Users usually go back to well connected hubs when they backtrack
- An experienced Wikispeedia user tends to backtrack more than inexperienced users 
- Some combinations of categories of articles tend to cause more backtracking than others
- Backatracking has little effect on overall success in the game and is equally present in the finished and unfinished paths
- Counterintuitively, more backtracking is linked to lower difficulty ratings

These all lead us to the conclusion that backtracking will not affect your game negatively. You may actually find your games easier if you allow yourself to backtrack and it will not make you more likely to fail.

So, make mistakes, explore, go back and you may find that your time adventuring will feel even more rewarding.
All this to say, it's not about the destination, it's about the journey.
