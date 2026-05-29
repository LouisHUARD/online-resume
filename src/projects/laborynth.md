---
title: "LaboRynth"
context: "Semestre 3 - SAE - Travail de groupe"
tags: ["Java", "JavaFX"]
screenCaps: 
  - "/miniature/laborynth.png"

summary: "Création d'un jeu de labyrinthes"
---

## Objectifs du projet 

L'objectif du projet était de créer un jeu de résolution de labyrinthes. Initialement, les labyrinthes étaient aléatoires, mais il a fallut faire évoluer le code pour accomoder des labyrinthes dits "parfaits". Deux mode de jeu était proposé : un mode libre où le joueur définissait les paramètres du labyrinthe et un mode progression/carrière où le joueur devait terminer des niveaux, déclinés en trois difficultés. De plus, une mécanique de "brouillard" a été introduite, d'abord en tant que champ de vision limité puis ensuite un champ de vision qui "découvrait" la carte au fur et à mesure. Enfin, plusieurs vues de la partie devait co-exister, afin  par exemple d'avoir un carte du labyrinthe en entier à juxtaposer à sa position actuelle dans le labyrinthe.

## Rôle personnel

J'ai commencé par les vues basique des labyrinthes et un algo de génération aléatoire, mais j'ai vite du reprendre des aspects qui touchent à l'entireté du projet, comme le modèle des labyrinthes, les controlleurs associées, l'enchainement des menus...
Je me suis surtout occupé de l'arhitecture générale du projet, en mettant un point d'honneur à faire  respecter les principes SOLID et l'implémentation de patterns de designs.
J'ai introduit les labyrinthes aléatoires et un algo de génération, puis les labyrinthes parfaits et 3 algos de générations.
Enfin, j'ai aussi rédiger les rapports traitant de nos efforts en qualité de développement et efficacité du code.

Au sein du projet, j'avais pour rôle celui du chef de groupe (répartition du travail, pression sur les membres du groupe pour éviter les retards).

## Résultats 

L'application est, à mes yeux, très réussi. Visuellement, celle-ci est à la fois belle et compréhensible. Elle respecte le cahier des charges à la lettres et va même plus loin sur certains points.

Je suis content d'avoir pu intégrer différents algorithmes de labyrinthes, parfaits ou non. L'étude des labyrinthes parfait m'a aussi fait découvrir des nouvelles structures de données.

Nous avons même intégré un système d'editeurs de labyrinthes

## Compétences 

### Compétences techniques 
* Application des principes SOLID et des DesignPattern : A la fois pour respecter la consigne et par souci de produire un rendu de qualité, j'ai fait tout mon possible pour mettre en avant SOLID et uiliser un maximum de design patterns (lorsque ceux-ci sont pertinents). 
* Implémentation de structures de données adaptées : Lors du codage de mes différents algorithmes, j'ai eu recours à des structures de données particulières : certaines codifiées (comme le DisjoinSet), certaines personnalisées. Dans les deux cas, cela m'a permis d'écrire du code plus lisible et plus efficace.
* Optimisation du code : Même si ce n'est habituellement pas ma priorité, j'ai essayé ici d'optimiser mes différents algorithmes pour les rendres plus robustes face à des labyrinthes de plus en plus grands. Même pour l'aléatoire, je pense avoir su produire un code plutôt optimal.

### Compétences transversales

* Etudier le cahier des charges : J'ai appris à coder en planifiant en avances les contraintes qui allaient s'imposer au fur et à mesure de l'évolution des jalons. Bien que cela soit un cas rare dans la réalité, plus à même d'apporter des changements totalement imprévus, il reste néanmoins interessant de savoir se prémunir de refacto inutiles en codant de façon plus stable (et SOLID).
* S'imposer en groupe : En tant que chef de groupe, j'ai dû sévir plusieurs fois pour que certains des membres du groupe restent concentrés sur les objectifs. J'ai aussi été obligé de reprendre derrière certains de mes coéquipiers pour finir le travail ou l'amener à un niveau de qualité satisfaisant.
* S'adapter au travail des autres : Comme pour le second point, j'ai passé du temps à relire le  code de mes collègues et à essayer d'en conserver un maximum à chaque refacto. Me mettre dans la tête des autres est un exercice qui m'est souvent compliqué, mais lorsque cela porte ses fruits, le projet avance mieux et plus vite.  

## Analyse 

Je suis satisfait des parties que j'ai traité personnellement. J'ai passé beaucoup de temps à travailler sur les abstractions afin de me préparer aux labyrinthes parfaits, et je pense avoir réussi à éviter beaucoup de travail que les autres groupes ont eu à rattraper. 

Cependant, certains membres du groupes ont rendu les conditions du projet assez éreintantes. Je pense avoir échoué à mon rôle de chef de groupe, à la fois car je n'ai pas réussi à coordoner les membres du groupe, mais aussi car je n'ai pas assez sévi face aux manquements. J'ai récupéré trop de charge de travail pour combler les manquements, au lieu d'imposer du sérieux au sein du groupe.

## Lien Git

[LaboRynth](https://gitlab.univ-lille.fr/sae302/2025/J3_SAE3.3)

