import plotly.graph_objects as go

# Exemple : créer un graphique à partir de DONNÉES (pas d'un PNG)
# Remplacez ces données par vos vraies données
x_data = ['Article A', 'Article B', 'Article C', 'Article D']
y_data = [10, 25, 15, 30]

fig = go.Figure(data=[go.Bar(x=x_data, y=y_data)])

fig.update_layout(
    title="Comparaison Ranking Hubs",
    xaxis_title="Articles",
    yaxis_title="Nombre de backtracking"
)

# Exporter en HTML autonome
fig.write_html("browsers/Comparaison_ranking_hubs.html", 
               include_plotlyjs='cdn',  # ou 'inline' pour autonome
               config={'displayModeBar': True})

print("Graphique créé : browsers/Comparaison_ranking_hubs.html")