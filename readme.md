Ce document détail les observations réalisés lors de la mise en place d'un example minimale avec Prisma.

Le tutoriel suivit est le suivant : https://www.prisma.io/docs/getting-started/quickstart


Pour avoir l'auto-completion dans les IDE: https://www.prisma.io/docs/orm/more/development-environment/editor-setup


## Création des models
La création des models se fait dans un fichier à part qui n'est pas de type standard. Pour la création des migrations et du client, il faudra faire tourner une moulinette.
`npx prisma migrate dev --name init`

Même si l'utilisation d'une moulinette peut paraitre désagréable, il semble qu'avec les plugins pour nos IDE, la completion/détection d'erreur se fait bien et n'est pas désagréable.

## Utilisation de l'API pour la création et la requete d'objets

Le client généré par la moulinette demande un peu d'apprentissage mais dès lors que l'on connais la syntaxe, le typage est vraiment bon :

**Ici création d'une voile**: En provoquant l'auto-complétions, on obtient la liste des éléments à renseigné ainsi que si il sont ou non facultatif (voir type | undefined)
![[Pasted image 20240105173615.png]]

**Lorsque l'on query ou créer un objet**: le type renvoyé est un objet ts parfaitement typé.
Exemple avec la création d'une voile:
![[Pasted image 20240105175321.png]]
