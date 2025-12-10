---
layout: default
---

# Backtrack to the future

## Chapter 1 : Finding your way in the big bad network

Imagine this: you are given a map and you have to find your way from one point to the other. Pretty easy, right?

Now imagine you are given this map:

<iframe src="network_map_random_nodes.html" width="100%" height="600" style="border:none;"></iframe>

<iframe src="network_map_clustered_nodes.html" width="100%" height="600" style="border:none;"></iframe>

This is the task given to you in the game Wikispeedia: you have to find your way from one article to another using only hyperlinks. On the map above, each dot is an article.


Now that sounds pretty scary, we get it. 

You may want to go back, retrace your steps to create a better future (AKA reach the correct destination). And actually it turns out a lot of users in Wikispeedia do just that.

![Pie chart](figures/pie_chart_chap_1.png)


20% of paths in our Wikispeedia dataset contain backtracking. 
You can take a look at what paths past users have done here:

// interactive map to highlight paths


When we saw this, we immediately wondered where these people backtracked to, why they did it, what pushed them to go back and, obviously, whether it would make them more likely to lose the game. 

Let's take a look!


## Chapter 2 : Where did you come from, where did you go?


## Chapter 3 : Why are users backtracking?

### Hypothesis 1 : Experience level

### Hypothesis 2 : Subjects in the path

Another reason we think users may want to go back is if they are not familiar with the subject of the final article or with the subject of the starting article. Lack of familiarity would prevent them from being to plan an efficient path and could therefore cause some backtracking.

To look into this hypothesis, we decided to create heatmaps of start and end categories of articles in paths of the dataset.

![Heatmap 1](figures/heatmap_1.png)

![Heatmap 2](figures/heatmap_2.png)


Both finished and unfinished paths seemed to carry more backtracking in the same category combinations.


For exemple, when users are tasked with navigating from Science to Science, they tend to backtrack the most.

// Top 10 articles that cause most backtracks


Here are the top 10 articles that cause the most backtracking when they are the target of the path. The score NormalizedCount was calculated by normalizing the number of paths with this article as a target that contained backtracking to the amount of times this article is a target in the path.

In the list, the articles appear are part of the categories that were highlighted on the heatmap as being problematic, such as Everyday_life and Science.


## Chapter 4 : Will backtracking doom you to fail ?

### Paths with and without backtracking in successful and unsuccessful paths

### Number of backtracks in finished and unfinished paths histogram

![Distribution of finished vs unfinished paths](figures/distrib_fin_vs_unfin.png)


This graph shows us the distribution of paths per certain amount of backtracking. It serves to highlight the wide range of amounts of backtracking in the database.

### Spearman's Rank correlation

In order to determine whether there was any significant non linear correlation between backtraking and success, we computed the Spearman's rank correlation on paths with and without backtracking and failure and success.

// Results of Spearman

Games where the user has backtracked have a slight tendency to be unsuccessful.


## Chapter 5 : The effect of backtracking on user difficulty perception

Ratings are optionally given by the user after finishing the game and range from 1 ("easy") to 5 ("brutal"). We wanted to describe how backtracking affect the ratings (i.e. the difficulty perception). After some data processing, we made the following linear regression:

![OLS1](figures/ols1.png)

// OLS Reg results

Backtracking has a clear and substantial impact on how players perceive the difficulty of the game. Because ratings range from 1 (“easy”) to 5 (“brutal”), higher values indicate a stronger sense of challenge. In the regression, the number of backtracks shows a strong negative coefficient (–0.23), meaning that each additional backtrack is associated with a lower difficulty rating once path length, duration, and shortest‐path length are controlled for. This indicates that players who backtrack frequently do not interpret these movements as signs of a demanding or punishing task. Instead, backtracking seems to reflect exploration that does not translate into a feeling of high difficulty. Overall, the number of backtracks is a robust predictor of lower perceived difficulty.


![OLS2](figures/ols2.png)

// OLS2 reg results


## Chapter 6 : Conclusion

With this analysis of the Wikispeedia dataset, we were able to conclude that:

- users usually go ... when they backtrack
- an experienced Wikispeedia user ...
- the average Wikispeedia user backatracks more when it comes to subjects like science 
- backatracking has little effect on overall success in the game 
- users who backtrack actaully find the game easier than those who don't 

These all lead us to conclude that backtracking will not affect your game negatively. You may actually find your games easier if you allow yourself to backtrack and it will not make you more likely to fail.


All this to say, it's not about the destination, it's about the journey.