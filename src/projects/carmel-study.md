---
title: "Visualisation 2D de résultats"
context: "Semestre 4 - Stage - Travail seul"
tags: ["Python", "PyQt"]
screenCaps: 
  - "/miniature/carmel-1.png"
  - "/miniature/carmel-2.svg"

summary: "carmel-study est une interface à code_Carmel, un programme de calcul Fortran servant à la simulation d'effets électro-magnétiques sur des pièces mécaniques modélisés. Le laboratoire du Lamel, qui développe carmel-study et code_Carmel, souhaitait développer sa capacité de post-traitement en introduisant des fonctionnalités de visualisation des résultats et de créations de graphiques."
---

## Objectifs du projet 

L'objectif du projet (et par la même occasion, l'objectif de mon stage), est d'ajouter une nouvelle fonctionnalité d'interfaçage à carmel_study. Carmel_study est un module de l'application graphique SALOME permettant d'exploiter les résultats d'un programme de calcul, code_Carmel. La fonctionnalité dont j'ai la charge correspond à une nouvelle étape de visualisation des résultats, à la fois avec un affichage par défaut et aussi avec un créateur personnalisé de graphes, permettant d'aller aux delà des résultas immédiats.

L'objectif de ce travail est de faciliter l'exploitation des résultats, en partie pour les chercheurs, mais surtout auprès des étudiants qui utilisent ce même logiciel.

## Rôle personnel

Durant ce projet, j'ai été guidé par mon tuteur de stage, avec qui nous avons défini le cahier des charges. Sur certains points autres que la visualisation, comme l'intégration de carmel_study au nouvelles versions de Salome et à Windows, j'ai aussi travaillé en collaboration directe avec lui. Pour le développement de la visualisation, je suis resté en autonomie la plupart du temps, tout en organisant des réunions pour discuter des mes obstacles actuels avec mon tuteur.

## Résultats 

Le stage n'étant pas terminé, je ne peux me prononcer, mais pour l'instant, je suis satisfait de mon avancée.

## Compétences 

### Compétences techniques 

* Aprentissage de Python et PyQt : Bien que j'en ai déjà fait l'expérience dans mes études antérieures, je n'avais pas poussé vraiment loin l'utilisation de Python. Ce projet m'a permis de renforcer ma compréhension du langage pour être preque au même niveau que celle de Java.
* Utilisation de fichiers de configuration : Le projet se voulant manipulable facilement par mon tuteur, celui-ci comporte des fichiers de configuration
* Développement sur Windows et environnement virtuels : A l'IUT, nous avons pour habitude de travailler sur des machines Linux, alors que pour ce projet, j'avais un environnement Windows. Cela m'a donc forcé à m'adapter aux spécificités de l'OS, réapprendre des concepts basiques du système et à m'assurer de maintenir une application fonctionnant tant sur un Linux que sur un Windows. Enfin, j'ai aussi découvert les environnements de développement virtuels. 
* Découverte de pytest: J'ai appris à utiliser, et surtout à configurer, le module pytest pour exécuter des fichiers de tests.

### Compétences transversales
* Reprendre du travail pré-existant : Le base de code ce carmel study est très conséquente, forte de plusieurs années de nombreux collaborateurs. Travailler avec m'a appris à essayer de mettre à la place des autres pour comprendre un travail complexe auquel je n'ai eu  aucune part.
* Se soumettre à un cahier des charges : Même si j'ai eu une grande liberté dans son exécution, le cahier des charges est assez rigide, alors que j'avais plutôt l'habitude d'en diriger l'écriture. Cette expérience m'a appris à mieux me plier aux contraintes et à faire preuve d'ingéniosité lorsque je suis confronté à des obstacles impossibles à esquiver.
* Utilisation plus prononcée de Git : Ce projet m'a fait réaliser que je limitais vraiment le rôle de git au sein de mon flux de travail. Je comprends désormais son importance tant sur la description de tâches, la discussion dans l'équipe et le développement parallèle.

## Analyse 
*Partie encore en cours d'écriture*

J'ai des lacunes de clean_code sur lesquelles je dois vraiment travailler. De même pour la conception de test, qui me suit dans de nombreux projets.

## Lien Git

[Site de code carmel](https://code-carmel.univ-lille.fr/)

(Le gitlab n'est pas publique)