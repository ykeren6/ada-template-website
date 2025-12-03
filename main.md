---
layout: default
---

# Backtrack to the future

## Chapter 1 : Finding your way in the big bad network

Imagine your mission is to find your way from one article to another in a gigantic network of Wikipedia articles, the map should pretty much look like this for you the first time :

<iframe src="network_map_random_nodes.html" width="100%" height="600" style="border:none;"></iframe>


So the first step would be to visualize these articles in a better way in order to understand our mission. For this, the plain text articles have been used to build a network map where nodes are displayed by semantic (using a **TF/IDF** matrix) and colored by their assigned category (provided in a separate dataframe). This results in something a little bit more understandable :

<iframe src="network_map_clustered_nodes.html" width="100%" height="600" style="border:none;"></iframe>