---
title: "DuoGuessr"
context: "Semestre 2 - SAE - Travail en trinôme"
tags: ["Java", "JavaFX"]
screenCaps: 
  - "/miniature/duoguessr.png"

summary: "Création d'une plateforme permettant de former des paires d'étudiants lors d'un échange culturel, le tout en suivant des algorithmes qui permettent d'accomoder au mieux en fonction des conditions des participants."
---

## Objectifs du projet 

L'objectif du projet était de créer une application Java pour gérer des échanges linguistiques entre adolescent de divers pays, dans le cadre d'un projet pluridisciplinaire entre Programmation Orientée Objet (OOP), Théorie des graphes et IHM. Le but était d'utiliser l'algorithme Hongrois de graphes permettant de faire les meilleurs paires entre deux groupes d'individus en fonction d'un calcul de score de paire : affinité, habitudes alimentaires, volonté d'être avec le même genre...

## Rôle personnel

Au sein du projet, j'avais pour rôle celui du chef de groupe. J'ai majoritairement participé à la conception logicielle et l'aspect POO du projet. J'ai aussi grandement contribué à l'exploitation des fichiers XML produits, qui décrivaient les élements graphiques de l'interface, à l'aide d'un système de manager de scènes. De plus, j'étais aussi très impliqué dans la gestion de la persistence des données (par fichier CSV, qui devaient être modulables). Enfin, j'ai mené seul la tâche ardue de coder l'algorithme hongrois (qui s'est révélé être une partie bonus).
Dans une moindre mesure, j'ai aussi travaillé sur l'aspect graphique de certaines pages avec le logiciel SceneBuilder.
Une part importante de mon travail se situait sur la page visible sur la photo, qui est l'étape où l'on peut ajouter des appariements ou en empêcher avant même de calculer.

## Résultats 

L'application est, à mes yeux, très réussi. Visuellement, celle-ci est à la fois belle et compréhensible. Elle respecte le cahier des charges à la lettres et va même plus loin sur certains points.
Ma grande déception est, qu'à la fin, mon algorithme hongrois était incpables de travailler avec des matrices trop grandes, ce qui le rend alors inutile.

## Compétences 

### Compétences techniques 
* Gestion d'une application à plusieurs fenêtre : Contrairement à la plupart des nos autres projets, celui-ci s'axait sur une application entière, avec différentes fenêtre à gérer et une boucle d'exécution constante. Cela a été ma première expérience de programmation événementielle avancée.
* Utilisation d'un builder d'UI : On a utilisé SceneBuilder, mais c'est aussi un genre d'outils qu'on retrouve pour d'autres langages, ou même d'autres domaines comme les applications mobiles. Cela m'a permis de comprendre l'agencement des différents layouts et différents widgets.
* Interprétation de pseudo-code : Bien que cela n'ai pas entièrement porté ses fruits, j'ai lu différents pseudo-codes pour implémenter l'algorithme hongrois. Reproduire un alogrithme mathématique à travers un code informatique présente des défis parfois inattendus et souvent intéressants. 

### Compétences transversales

* Vidéo de présentation : Pour le rendu final, j'ai dû réaliser une vidéo de présentation du logiciel pas à pas, en soulignant les fonctionnalités respéctées du cahier des charges mais aussi les spécificités de notre logiciel. Très limité dans le temps, il m'a fallu être succint et capable de discerner les informations importantes à souligner. Cette vidéo est d'ailleur le complémentaire d'une présentation orale avec diapo que nous avions réalisé plus tôt dans le projet.  
* Design d'interface : Il fallait trouver le juste milieu entre une interface fonctionelle et plaisante esthétiquement, tout en s'assurant de ne pas avoir trop d'informations en même temps ou trop de fenêtre différentes qui appraissent.

## Analyse 

Avec du recul, je retravaillerai grandement l'application avec un modèle de MVC plus robuste, permettant une gestion plus facile des différents écran. De plus, j'éviterai d'utiliser SceneBuilder, qui s'est avéré plus compliqué dans son intégration au projet que d'écrire directement du JavaFx.

De plus, j'aurais ajouté des tests et de la documentation, car ce sont des points que nous avons plutôt mis de côté.

Enfin, si je devais réimplémenter l'algorithme hongrois, j'essaierai de d'abord mieux le comprendre mathématiquement au lieu d'essayer de l'implémenter directement

## Lien Git

[DuoGuessr](https://gitlab.univ-lille.fr/sae2.01-2.02/2025/B2)

