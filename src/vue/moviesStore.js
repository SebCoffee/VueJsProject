import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    index: 1,
    movies:[
        {
            id: 0,
            title: "Fast and Furious",
            year: '2001',
            real: 'Rob Cohen',
            synopsis: "Dominic Toretto est un ex-prisonnier (de la prison de Lompoc) désormais pilote de courses de rue. Il est entouré d\'une bande (qu\'il considère comme sa famille) composée de Letty, Vince, Jesse, Leon et de sa sœur Mia Toretto. Un nouveau veut se joindre à cette bande, Brian Earl Spilner (Brian O\'Conner) mais pour des raisons différentes de celles des courses de rues. Brian O\'Conner fait partie du Los Angeles Police Department et est un génie quand il s\'agit de prendre le volant ou de faire de la mécanique. Il est donc choisi pour enquêter sur des attaques de camions, les principaux suspects étant des pilotes de rue. Dom Toretto et sa bande sont les premiers à être visés par cette accusation. Brian doit donc infiltrer la bande de Dom mais l\'épreuve est difficile. Après une course illégale, la police intervient pour stopper les street racers ; Dom et Brian, qui participaient à la course, prennent la fuite. Dominic est sur le point de se faire arrêter mais Brian parvient à lui sauver la mise.Brian a désormais une place dans la bande mais l'amitié et l'amour vont fragiliser le policier infiltré. Il tombe amoureux de Mia Toretto, la sœur de Dominic et va vivre une petite histoire avec elle. Il sait que Dom est le fameux coupable de toutes ces attaques mais ne veut pas l\'admettre et va ainsi lancer ses collègues sur de fausses pistes. Le sergent découvre le petit jeu de Brian et lui demande de faire un choix. Lors d\'une attaque de camion, la tâche va se compliquer lorsque Vince est blessé. Brian arrive à temps pour le sauver et avouera plus tard qu\'il est policier.Quand Jesse se fait tuer par la bande rivale de Dom, dirigée par Tran, Dom le poursuit avec Brian. Tran se fait tirer dessus par O\'Conner. Brian retrouve Dom et font une dernière course mais cela va mal se passer lorsque la voiture du père de Toretto, conduite par son fils, percute un camion et n\'aura donc plus aucun moyen de fuir. Mais Brian fait son choix et lui laisse la clé de sa voiture pour qu\'il puisse fuir... Brian perd ainsi sa plaque de policier.",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tfatf-logo.svg/220px-Tfatf-logo.svg.png"
        }, 
        {
            id: 1,
            title: "Turbo-Charged Prelude",
            year: '2003',
            real: 'Philip G. Atwell',
            synopsis: "Après avoir aidé Dominic Toretto à échapper aux autorités, Brian O'Conner prépare ses affaires et quitte sa maison au volant de sa Mitsubishi 3000 GT modifiée. Peu de temps après, la police de Los Angeles arrive à sa maison, mais ils ne le trouvent pas. Un des officiers trouve l'insigne que Brian a laissé, révélant qu'il a démissionné... Le FBI, mis au courant des événements, lance alors une chasse à l\'homme nationale. En attendant, Brian voyage à travers l\'Arizona, le Nouveau-Mexique et le Texas, gagnant chaque course de rue auxquelles il participe pour payer sa fuite. Cependant, il est obligé d\'abandonner sa voiture à un motel de Dallas lorsque des policiers sont avertis de sa présence. Il monte dans la voiture d\'une femme inconnue, qui le dépose devant un magasin de voitures d\'occasion. Après avoir vu un article dans le journal, elle reconnait Brian mais ne le dénonce pas. Au garage d'occasions, Brian achète une Nissan Skyline GTR R34, puis voyage vers l'est. Il continue à rassembler de l'argent grâce aux courses de rue et modifie sa voiture. En quittant Atlanta, il décide finalement d\'aller à Miami plutôt qu\'à New York. À Miami, il tombe sur la Mazda RX-7 d\'Orange Julius et sur la Toyota Supra de Slap Jack...",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tfatf-logo.svg/220px-Tfatf-logo.svg.png"
        },
        {
            id: 2,
            title: "2 Fast 2 Furious",
            year: '2003',
            real: 'John Singleton',
            synopsis: "Après avoir laissé s'échapper le fugitif Dominic Toretto, l'ancien officier de police Brian O'Conner est maintenant lui aussi en cavale et quitte Los Angeles pour Miami afin de commencer une nouvelle vie. Mais une nuit, il est pris par les agents des douanes. Le FBI lui offre une dernière chance : s'il accepte de prendre part à une opération conjointe des douanes et du FBI, son passé criminel sera effacé. Le but de la mission est d'arrêter Carter Verone, baron de la drogue argentin. Pour le prendre en flagrant délit de blanchiment d'argent, il devra faire appel à ses compétences de pilote de rue. Refusant le partenaire que le FBI veut lui adjoindre, il impose la présence d'un ancien ami, Roman Pearce, devenu pilote de stock car et assigné à résidence pour des délits commis des années auparavant. Ils seront secondés par la plantureuse Monica Fuentes, « fiancée » de Carter et en fait flic infiltrée depuis longtemps, tout comme Brian à l'époque de l'affaire Toretto.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2fast2furious-logo.svg/220px-2fast2furious-logo.svg.png"
        },
        {
            id: 3,
            title: "Los Bandoleros",
            year: '2009',
            real: 'Vin Diesel',
            synopsis: "Tego Leo est emprisonné en République dominicaine. Santos bavarde avec un vieil homme incapable de trouver assez d'essence, les prix étant de plus en plus élevés. Han Seoul-Oh arrive de l'aéroport et est accueilli par Cara Mirtha et Malo. Ils le conduisent derrière la maison de Santos, où se trouve sa tante Rubia et où Dominic Toretto travaille sur sa voiture. Après un repas de bienvenue avec la famille et après avoir fait évader Leo, Dominic rencontre dans un night-club un politicien local, qui les informe d'une opportunité pour détourner un convoi d'essence. Dominic est ensuite étonné par l'arrivée de Letty, qui a suivi sa trace au Mexique...",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tfatf-logo.svg/220px-Tfatf-logo.svg.png"
        },
        {
            id: 4,
            title: "Fast and Furious: Tokyo Drift",
            year: '2006',
            real: 'Justin Lin',
            synopsis: "Sean Boswell est un passionné de courses automobiles ayant eu plusieurs ennuis avec la police californienne. Pour éviter la prison, il doit se rendre chez son père, militaire basé à Tokyo. Sean se sent exclu des autres élèves jusqu’à ce qu'il rencontre Twinkie qui lui fait découvrir le drifting, un sport clandestin où l'audace, l'élégance et la fluidité sont plus importants que la vitesse. Malheureusement, Sean va faire la rencontre de DK (« Drift King »). Pour Sean, ce n'est plus un amusement mais bel et bien une véritable course.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tfatf-tokyodrift-logo.svg/220px-Tfatf-tokyodrift-logo.svg.png"
        },
        {
            id: 5,
            title: "Fast and Furious 4",
            year: '2009',
            real: 'Justin Lin',
            synopsis: "Le meurtre de Leticia \"Letty\" Ortiz oblige Dominic Toretto, un ancien taulard en cavale, et l'agent Brian O'Conner à revenir à L.A. où leur querelle se rallume. Mais confrontés à un ennemi commun, Arturo Braga, ils sont contraints à former une alliance incertaine s'ils espèrent parvenir à déjouer ses plans. De l'attaque de convoi aux glissades de précision qui les mèneront hors de leurs propres frontières, les deux hommes trouveront le meilleur moyen de prendre leur revanche : en poussant les limites de ce qui est faisable au volant d'un bolide.",
            img: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/63/Fast-and-furious-4.jpg/220px-Fast-and-furious-4.jpg"
        },
        {
            id: 6,
            title: "Fast and Furious 5",
            year: '2011',
            real: 'Justin Lin',
            synopsis: "Depuis que Brian O'Conner et Mia Toretto ont extirpé Dominic Toretto des mains de la justice, ils ont dû franchir de nombreuses frontières pour échapper aux autorités. Retirés à Rio, ils sont contraints de monter un dernier coup pour se faire blanchir et retrouver leur liberté. Ils se constituent une équipe d'élite, réunissant les pilotes les plus avertis, conscients que leur seule chance d'être acquittés pour bonne conduite nécessite une confrontation avec l'homme d'affaires véreux, Hernan Reyes, qui souhaite les voir morts. Mais il n'est pas le seul à leurs trousses. L'impitoyable agent fédéral Luke Hobbs n'a jamais manqué ses cibles. Affecté à la traque des fugitifs, lui et son équipe de choc élaborent un implacable dispositif d'assaut destiné à les capturer. Passant le Brésil au crible, Luke réalise combien la frontière qui sépare les bons des méchants est ténue. Il doit alors s'en remettre à son instinct pour acculer ses proies et éviter qu'un autre ne les débusque avant lui.",
            img: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e1/Fast-and-furious5-logo.png/220px-Fast-and-furious5-logo.png"
        },
        {
            id: 7,
            title: "Fast and Furious 6",
            year: '2013',
            real: 'Justin Lin',
            synopsis: "Dominic Toretto, Brian O'Conner et toute leur équipe, après le casse de Rio de Janeiro, ayant fait tomber un empire criminel en empochant 100 millions de dollars, se sont dispersés dans le monde entier. Mais l’incapacité de rentrer chez eux et l’obligation de vivre en cavale permanente, laissent à leur vie le goût amer de l’inaccomplissement. Pendant ce temps Luke Hobbs traque un groupe de chauffeurs mercenaires aux talents redoutables, dont le meneur, Owen Shaw est secondé d’une main de fer par l’amour que Dominic croyait avoir perdu pour toujours : Leticia Ortiz. La seule façon d’arrêter leurs agissements est de les détrôner en surpassant leur réputation. Luke demande donc à Dominic de rassembler son équipe de choc à Londres. En retour ? Ils seront tous graciés et pourront retourner auprès de leurs familles, afin de vivre une vie normale.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The-fast-and-the-furious-6.png/290px-The-fast-and-the-furious-6.png"
        },
        {
            id: 8,
            title: "Fast and Furious 7",
            year: '2015',
            real: 'James Wan',
            synopsiys: "Après avoir vaincu Owen Shaw (Luke Evans) et sa bande, et avoir obtenu l’amnistie, Dominic Toretto (Vin Diesel), Brian O’Conner (Paul Walker) et leurs amis sont de retour aux États-Unis pour mener à nouveau une vie de famille tranquille. Brian commence à s’habituer à sa vie de père tandis que Dom tente d’aider Letty (Michelle Rodríguez) à retrouver la mémoire en la ramenant aux Race Wars (« Guerres de courses ») ; cependant, après une altercation avec Hector (Noel Gugliemi), un vieil ami à eux et organisateur du tournoi, elle s’en va. Plus tard, Dom la retrouve au cimetière devant sa tombe, persuadée qu’elle ne retrouvera jamais la mémoire. Alors que Dom se prépare à la détruire, Letty l’arrête, insistant sur le fait que la Letty qu’il a connu est morte le jour où elle a perdu la mémoire, et donc que c’est une nouvelle Letty qu’il a en face de lui. Et sur ces mots, Letty abandonne Dom et disparaît en voiture. Au début du film, le frère aîné de Owen, Deckard Shaw (Jason Statham), s’est introduit par effraction dans l’hôpital sécurisé où Owen se trouve dans le coma et a juré de le venger de Dom et son équipe. Shaw s’introduit ensuite par effraction dans le bureau de Hobbs (Dwayne Johnson) au Département de la sécurité diplomatique. Alors qu’il est pris sur le fait par Hobbs en train de télécharger les profils de l’équipe de Dom, Shaw dévoile son identité et se jette sur Hobbs. Durant la bagarre, il s’enfuit en lançant une bombe sur Hobbs et sa partenaire, Elena Neves (Elsa Pataky), les projetant du haut de l’immeuble sur le toit d’une voiture. Grièvement blessé, Hobbs est transféré d’urgence à l’hôpital par Elena qui est sortie indemne de la chute. Dans le même temps, Dom apprend que sa sœur Mia (Jordana Brewster) est de nouveau enceinte, et la convainc d’en parler à Brian malgré ses réticences. Cependant, une bombe, cachée dans un colis en provenance de Tokyo, explose et détruit la maison de Toretto quelques secondes après que Han (Sung Kang), un des membres de son équipe, est assassiné par Shaw à Tokyo. Plus tard, Dom rend visite à Hobbs à l’hôpital où il apprend que Shaw est un ex-assassin des forces spéciales cherchant à venger son frère. Dom part alors à Tokyo pour ramener le corps de Han. Il rencontre là-bas Sean Boswell (Lucas Black), un ami de Han, qui lui rend quelques affaires personnelles trouvées sur le lieu de l’accident dont la croix en argent qui lie Dom à Letty. Aux funérailles de Han à Los Angeles, tous les membres de l’équipe, dont Roman Pearce (Tyrese Gibson) et Tej Parker (Chris Bridges), sont présents. Roman fait le vœu de ne plus vouloir assister à aucun autre enterrement, mais Brian lui fait remarquer qu’il en reste toujours un et d’importance, celui de Shaw. Soudain, Dom remarque une voiture qui les observe, il sait que c’est Shaw et part à sa poursuite. Un jeu de poker-menteur s’engage alors entre les deux hommes à bord de leurs bolides, qui se termine par une collision frontale. Tandis qu’ils se préparent à se battre, Shaw s’éclipse au moment où arrive sur les lieux une équipe des services secrets menée par Frank Petty (plus communément appelé M. Personne) (Kurt Russell). Petty informe Dom qu’il va l’aider à arrêter Shaw à condition qu’il l’aide à stopper un mercenaire du nom de Mose Jakande (Djimon Hounsou), récupérer l’œil de Dieu — un programme informatique qui utilise tous les terminaux numériques pour traquer une personne en particulier — et libérer son créateur, une hackeuse nommée Ramsey (Nathalie Emmanuel), des mains des hommes de Jakande. Dom fait appel à Brian, Letty, Roman et Tej pour l’aider. Brian promet alors à Mia qu’après la mort de Shaw, il se dévouera entièrement à sa vie de père de famille. Pour sauver Ramsey, l’équipe se jette depuis un avion au-dessus des montagnes du Caucase avec leurs voitures, prend en embuscade le convoi de Jakande et libère Ramsey. Ils se rendent ensuite à Abou Dabi où un milliardaire a acheté la voiture dans laquelle est cachée la mémoire USB contenant l’œil de Dieu. L’équipe entre alors par effraction dans son appartement situé dans un étage élevé des Etihad Towers et parvient à voler la clé USB. Mais Shaw les retrouve et se bat contre Dom. Accompagné par Brian, Dom traverse deux immeubles avec la voiture du milliardaire jusqu'à sa destruction. Tout le monde arrive néanmoins de justesse à s’en sortir vivant. Grâce à l’œil de Dieu, l’équipe de Dom retrouve Shaw qui se cache dans une usine éloignée. Dom, Brian, Petty et son unité sont sur le point de le capturer alors qu'il est tranquillement en train de dîner seul quand ils sont pris en embuscade par Jakande et sa milice qui ont fait alliance avec Shaw. S’ensuit un combat : les hommes de Petty sont tués, Petty est blessé alors qu’il prend la fuite avec Dom et Brian et Jakande récupère l’œil de Dieu. Sur le chemin du retour, Petty alerte Dom et Brian de l’intention de Jakande d’utiliser l’œil de Dieu pour traquer Ramsey. Puis, ils arrêtent la voiture, laissant Petty sur le bord de la route où un hélicoptère s’apprête à l’évacuer. L’équipe décide alors de rentrer à Los Angeles, que ses membres connaissent bien, pour affronter Shaw, Jakande et ses hommes. Dom envisage de s’occuper de Shaw tandis que Brian et le reste de la bande se préparent à suivre Jakande et reprendre le contrôle de l’œil de Dieu. Au même moment, Mia révèle à Brian qu’elle est enceinte d’un deuxième enfant, une fille. Alors que Jakande poursuit Brian et le reste de la bande à bord d’un hélicoptère furtif et d’un drone, se servant de l’œil de Dieu pour traquer Ramsey, l’équipe utilise de son côté Ramsey pour pirater le programme. Hobbs, voyant à la télévision l’équipe en difficulté, sort de l’hôpital et détruit le drone en l’éperonnant avec une ambulance. Après que Brian a réussi à re-détourner le signal du programme à son portable, Ramsey termine avec succès le piratage, reprend le contrôle de l’œil de Dieu et parvient à le mettre hors service. Dans le même temps, Dom et Shaw s’engagent dans une bagarre dans un parking avant que Jakande n’intervienne en les attaquant tous les deux. Shaw est arrêté après qu’une partie du garage se soit effondrée sur lui. Dom s'attaque ensuite à Jakande en envoyant son véhicule sur l’hélicoptère. Si Dom manque de peu la cible, il réussit quand même à accrocher un sac rempli de grenades sur l’hélicoptère avant de s'écraser avec sa voiture. Hobbs tire ensuite sur le sac de grenades, détruisant ainsi l’hélicoptère et tuant Jakande. Voyant Dom inconscient, l’équipe craint qu’il ne soit mort. Alors que Letty prend Dom dans ses bras, elle lui révèle qu’elle a recouvré la mémoire. Elle se rappelle même la cérémonie de leur mariage intime à Saint-Domingue. Dom reprend conscience juste après et dit : « C'est pas trop tôt ». Plus tard, Shaw est emmené en secret par Hobbs dans une prison haute sécurité de la CIA. Pendant ce temps, sur la plage, Brian et Mia jouent avec leur fils Jack tandis que Dom, Letty, Roman, Tej et Ramsey les observent, appréciant leur bonheur et prenant conscience que Brian est mieux ainsi, avec sa famille. Dom part en silence, mais Brian le rattrape. Dom se remémore les moments qu’il a eus avec Brian, ils se disent adieu et partent chacun vivre leur vie de leur côté.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Furious-7-logo.png/220px-Furious-7-logo.png"
        },
        {
            id: 9,
            title: "Fast and Furious 8",
            year: '2017',
            real: 'Chris Morgan',
            synopsis: "Dom (Vin Diesel) et Letty (Michelle Rodríguez) sont en lune de miel à La Havane (Cuba) lorsqu'une inconnue, qui se révélera être Cipher (Charlize Theron), aborde Dom et lui montre une vidéo qui va le convaincre de travailler pour elle. Quant à Hobbs (Dwayne Johnson), il est devenu, pour faire plaisir à sa fille, l'entraîneur de l'équipe de football féminin où celle-ci joue. Lors d'une mission dirigée par Hobbs à Berlin afin de récupérer une bombe IEM, et alors que tout semble fini, Dom percute le véhicule de Hobbs afin de s'emparer de cette dernière pour Cipher. Hobbs, envoyé en prison, y retrouvera Deckard Shaw (Jason Statham), avec qui il s'évadera avec l'aide de M. Personne (Kurt Russell) et de son nouvel adjoint, Eric (Scott Eastwood). Réunis par M. Personne, Hobbs et la « famille » s'allient à contre cœur avec Shaw (dont Cipher est également une ennemie) afin de retrouver Dom et comprendre les raisons de sa trahison. En réalité, Cipher retient en otage son ex-petite amie, Elena (Elsa Pataky), et leur fils dont il ignorait l'existence. Cipher, qui sait à quel point la famille est importante pour Dom, les a enlevés pour tenir ce dernier à sa merci. Lors d'une course poursuite à New York, Dom est chargé de récupérer les codes nucléaires détenus par le ministre de la Défense russe, en visite aux États-Unis. Pendant ce temps, Dom rencontre discrètement la mère des frères Shaw (Helen Mirren) afin de monter un plan contre Cipher, qui est la personne qui a entraîné Owen Shaw (Luke Evans) dans la criminalité. Cependant, Dom abat froidement Deckard, ce qu'observe Cipher sur ses écrans. Cipher n'est pas satisfaite de la mission de Dom à New York : il n'a pas pu se résoudre à tuer Letty et l'a laissée partir avec les codes nucléaires, avant qu'elle ne soit finalement rattrapée par Rhodes (Kristofer Hivju), le bras droit de Cipher. En représailles, Elena est exécutée par Rhodes devant Dom, son fils étant pour l'instant épargné. La traque se poursuit à Vladovin en Russie, dans une base navale secrète où un sous-marin SNLE note 1 est volé par Cipher, afin de faire chanter les gouvernement mondiaux à la guerre nucléaire. C'est au cours de cette mission que Dom révèle à Cipher le plan qu'il a fomenté pour sauver son fils et la piéger : pendant qu'il aidait Cipher à s'emparer du sous-marin nucléaire, Deckard, qui a en réalité survécu, et son frère Owen ont débarqué dans l'avion de Cipher afin de reprendre le fils de Dom pour le ramener à son père sain et sauf. Dom peut alors tuer Rhodes, vengeant ainsi Elena. Dom rejoint ensuite la « famille » - qui est rassurée de le voir à nouveau de leur côté - et utilise le missile antinavire que Cipher lance contre lui par vengeance pour couler le sous-marin. Après avoir neutralisé tous les agents de Cipher dans l'avion, Deckard se retrouve face à face avec elle pour lui régler son compte, mais elle réussit à s'enfuir en sautant de l'avion en parachute.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fast_and_Furious_8_Logo.svg/220px-Fast_and_Furious_8_Logo.svg.png"
        },
    ]
}

const mutations = {
    Add(state, newMovie) {
        movie.id = state.index+1;
        state.index++;
        state.movies.push(newMovie);
    },
    Edit(state, editedMovie) {
        var movieIndex = state.movies.findIndex((movie)=> {
            return movie.id === editedMovie.id;
          });
          state.movies[movieIndex] = editedMovie;
    },
    Delete(state, id) {
        var movieIndex = state.movies.findIndex((movie)=> {
            return movie.id === id;
            });
        state.movies.splice(movieIndex,1);
    },
}

const actions ={
    Add(context, newMovie) {
        context.commit('Add', newMovie);
     },
    Delete(context, id) {
    context.commit('Delete', id);
    },
    Edit(context, editedMovie)  {
    console.log('pass');
    context.commit('Edit', editedMovie);
    }
}

const getters = {
    getMovie: (state) => (id) => {
     return state.movies.find(function(movie){return movie.id === Number(id);});
    }
}

export default new Vuex.Store({
    state: state,
    
    mutations: mutations,

    actions: actions,

    getters: getters
})