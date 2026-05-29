---
title: "EcoDrop"
context: "Semestre 4 - SAE - Travail en binômes"
tags: ["SQL", "Java","Rest"]
screenCaps: 
  - "/miniature/rest-1.png"
  - "/miniature/rest-2.webp"
summary: "Implémentation d'un service REST"
order: "2"
---

## Objectifs du projet 

L'objectif du projet était de créer un service REST comprenant plusieurs API, le tout portant sur un sujet de gestion des déchets.
Pour répondre à ce problème, nous avons  :
* Création et remplissage de la base de données
* Gestion des différents endpoints, qui doivent respecter chacun des conditions imposées par un cahier des charges 
* Système d'authentification par tokens
* Série de tests Bruno qui montrent les comportement sans erreurs mais testent aussi
* Rédaction d'une documentation enrichie sur les endpoints

## Rôle personnel

J'ai implémenté la plupart des endpoints, avec toutes les méthodes (GET,POST,PUT,PATCH,DELETE...) incluses. J'ai développé des méthodes génériques reprises par tous les endpoints, avec des paramètres pour s'accommoder à chaque situation. Ensuite, j'ai refactorisé tous les endpoints pour avoir une structure beaucoup plus claire : l'exécution s'effectuait sans aucune erreur, puis chaque exception (personnalisées) étaient traitées cas par cas. Cela a augmenté exponentiellement la lisibilité du code. J'ai aussi créé plusieurs DTO pour faciliter l'écriture des différentes méthodes des endpoints.

J'ai codé le système de token en base 64 et rajouté l'authentification nécessaire aux endpoints qui la demandaient. J'ai aussi corrigé des tests Brunos, notamment à l'ajout des token.
Enfin, j'ai rédigé la documentation sur les endpoints, leurs code de retour et d'erreur, leur niveau d'authentification, l'allure des objets récupérés...

## Résultats 

Je suis très fier des différents DAO des endpoints, car leur système d'exception permet une lisibilité accrue, couplée à une gestion minutieuse des cas d'erreurs possibles. Ils sont très faciles à étendre ou modifier 
Nous avons aussi travaillé sur un objet de source de données plus poussé que celui utilisé en TP.
Enfin, nos tests couvraient tous les cas possibles, et montraient que le cahier des charges était scrupuleusement respecté, tant dans les codes de retour que dans la forme des résultats.

Note finale : **19.00/20.00**

## Compétences 

### Compétences techniques 

* Implémentation DAO/DTO : Toutes les méthodes ont été vues (POST, PATCH, PUT, DELETE, GET). Nous avons aussi utilisé de nombreux DTO spécialisés dans une ou plusieurs méthodes afin de mieux contrôler les objets récupérés par l'utilisateur ou manipulés par le code.
* Gestion des exceptions : Comme mentionné précédemment, les différents DAO se servaient de nombreuses exceptions afin d'éclaircir le code, tout en ayant un contrôle maximal des nombreux cas d'erreur possibles.
* Ecriture de tests de requêtes dans le logiciel Bruno : J'ai pu écrire certains tests, en manipulant notamment le header de la requête (ACCEPT, AUTHENT). De plus, grâce à  mon binôme, j'ai pu aussi voir l'utilisation de scripts dans Bruno. 

### Compétences transversales

* Faire confiance à mes collègues : Durant cette SAE, le travail était assez bien réparti et j'ai pu, dans l'ensemble, faire confiance à mon binôme.
* Aller plus loin : Lors de nos discussions avec notre responsable, nous avons toujours poussé au delà des consignes, avec des fonctionnalités supplémentaires, afin de rendre un projet de qualité.
* S'adapter au changement : Chaque semaine, des nouvelles fonctionnalités étaient demandées, mais surtout, d'anciennes fonctionnalités étaient parfois modifiées. Ainsi, nous devions remettre en question régulièrement nos choix, ce qui nous poussa à essayer de les rendre "future-proof".

## Analyse 

Cette SAE s'est très bien passé, nous avons su évoluer face aux consignes changeant régulièrement. Le cahier des charges était respecté à la lettre. Cependant, j'ai délégué à mon binôme l'écriture de certaines requêtes SQL complexes alors que celle-ci auraient pu m'aider à affirmer mes connaissances.

## Lien Git

[EcoDrop](https://github.com/LouisHUARD/EcoDrop)