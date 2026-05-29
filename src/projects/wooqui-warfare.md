---
title: "WooquiWarfare"
context: "Semestre 1 - SAE - Binômes"
tags: ["Java"]
screenCaps: 
  - "/miniature/warfare-1.png"
  - "/miniature/warfare.png"
  - "/miniature/warfare-3.png"

summary: "Jeu en terminal de bataille navale en version simplifiée de Java, avec un aspect ludique mathématique"
order: "8"
---

## Objectifs du projet 

L'objectif principal du projet était de nous introduire à des programmes Java (ici développé avec une version réduite de Java nommée iJava) plus importants que ceux de TP, et avec plus de liberté dans les consignes. Pour ce faire, nous avions pour tâche de créer un jeu basique, limité au terminal. De plus, celui-ci devait comporter un aspect ludique car il serait potentiellement présenté à des collégiens.

Pour répondre à ce défi, mon binôme et moi avons choisi de créer un jeu de bataille navale où chaque tir devait être validé par une question de mathématique, le tout sur fond de monde post-apocalyptique à armes de destruction massive contrôlés par des équations.

## Rôle personnel

Durant ce projet, j'ai assumé le rôle de chef d'équipe, et ainsi j'ai été responsable de la plupart des décisions stratégiques. J'ai notamment travaillé sur la conception, en prenant en charge les classes à utiliser et leurs interactions, en prenant soin de toujours anticiper les difficultés/extensions que nous pourrions affronter. Ce travail d'évolution perpétuelle de la conception m'a permis de développer mes compétences de réflexion pour répondre au mieux au problème posé, mais aussi de présentation, car je devais expliquer ma logique et convaincre (entre autre grâce à des UML) mon binôme et notre tuteur.

J'ai notamment travaillé sur la construction des navires, la sécurisation des différentes saisies et le système de sauvegarde/chargement des parties.

## Résultats 

Nous avons obtenu un jeu satisfaisant, sans bugs apparents. Le système de sauvegarde était fonctionnel et les parties se déroulaient sans soucis. 
D'autant plus, nous avons été sélectionné pour la présentation auprès des collégiens, et bien que seulement deux groupes aient eu l'occasion de tester notre jeu, les deux s'en sont donnés à coeur joie. 

<u>Note finale</u> : **15.50/20** pour le rendu, **19.00/20** pour la soutenance

## Compétences 

### Compétences techniques 

* **Programmation orientée objet basique** : classes, énumérations, héritage, polymorphisme : Ce projet a été notre premier comportant une réelle organisation de classes liées les unes aux autres.
* **Structuration d'archives** : Nous avons appris à correctement placer nos classes, nos binaires (ignorés sur le git)
* **Création d'UML** : nous avons maintenu un UML à jour du projet tout au long de son évolution afin d'avoir en tête les responsabilités de chacun et de débattre de la logique de certains points
* **Code en Java** : Bien que nous étions limité à une version simplifiée de Java, ce projet constitue tout de même notre premier projet Java, et pour moi, mon premier projet de développement informatique.


### Compétences transversales

* **Compétences de présentation** : Que ce soit auprès de nos professeurs ou au sein de notre binôme, il était primordial de se faire comprendre lorsqu'on présentait à la fois le travail fait,  mais aussi les modifications envisagées.
* **Confiance en ses coéquipiers** : J'ai dû apprendre à faire confiance dans le travail de mes coéquipiers, chose à laquelle j'étais peu habitué avant le BUT, mais aussi dans leur avis. J'ai appris à accepter la critique, le débat mais aussi l'entraide.
* **Coordination d'une équipe** : J'ai assumé le rôle de chef de projet, ce qui m'a assez plu. Ainsi, j'ai été chargé de définir le fil conducteur de nos avancées, de m'assurer du respect du cahier des charges et des dates de rendus, tout en aidant mon équipe dans le besoin.
* **Animation** : J'étais en charge de la présentation auprès des collégiens, et j'ai donc du les motiver en combinant l'aspect ludique (compétition, scores), l'aspect mathématique et les détails techniques de la conception du jeu. 

## Analyse 

Ce projet constituant notre premier travail plus conséquent qu'un simple TP, il a été à la fois la source de premiers défis et apprentissages, tout en étant parsemé de concepts désormais archaïques.

J'y ai découvert que j'aimais écrire du code extensible et lisible (en tout cas à mes yeux) plutôt que de privilégier l'optimisation et la rapidité de rendu à tout prix.

Le point le plus important, et c'est qui nous a couté beaucoup de points, est que le code était trop lourd. Les fichiers n'étaient pas assez aérés, les conventions de nommages parfois dur à interpréter, il y avait peu de commentaires... C'est un point qui m'a marqué et qui a influencé ma méthode de travail dans la suite. 

Le système de sauvegarde était assez complexe, surtout à cause d'une erreur communication avec notre responsable, mais il reste fonctionnel et j'en suis content.

En points à améliorer :
* La logique de P.O.O était à raffiner (aucun pattern).
* Les tests étaient trop sommaires.
* Pas de réel système de difficulté progressive ou en fonction de l'âge du joueur.
* L'interface utilisateur devait être régulièrement expliquée, dénotant un manque de clarté.

Ce projet a débuté ma passion pour un domaine qui me tient à coeur : la conception logicielle.

## Lien du Gitlab

[Wooqui-warfare](https://github.com/LouisHUARD/WooquiWarfare)