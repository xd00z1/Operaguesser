const operas = [
    {
        title: "La Bohème",
        composer: "Giacomo Puccini",
        year: 1896,
        plot: "A group of struggling artists share an apartment in Paris. A poet and a seamstress fall in love, but their romance is tested by poverty and pride. As winter sets in, they face hardship and tragic separation.",
        characters: "Rodolfo, Mimì, Marcello, Musetta, Colline, Schaunard"
    },
    {
        title: "Tosca",
        composer: "Giacomo Puccini",
        year: 1900,
        plot: "An opera singer becomes entangled in political intrigue when she attempts to save her lover, a painter, from execution by a corrupt chief of police. She makes a dark bargain with devastating consequences.",
        characters: "Tosca, Mario Cavaradossi, Baron Scarpia, Cesare Angelotti, Attavanti"
    },
    {
        title: "Madama Butterfly",
        composer: "Giacomo Puccini",
        year: 1904,
        plot: "A young Japanese geisha marries an American naval officer who eventually abandons her and their child. When he returns years later with a new wife to reclaim their son, the heartbroken woman chooses death over living with her loss.",
        characters: "Cio-Cio-San, Pinkerton, Suzuki, Sharpless, The Bonze, Kate Pinkerton"
    },
    {
        title: "Turandot",
        composer: "Giacomo Puccini",
        year: 1926,
        plot: "In ancient China, an icy princess vows to marry only the suitor who can solve her three riddles; those who fail are executed. An unknown prince answers correctly, then wagers his own life on a single condition: that she discover his name by dawn.",
        characters: "Turandot, Calàf, Liù, Timur, Emperor Altoum, Ping, Pang, Pong"
    },
    {
        title: "Gianni Schicchi",
        composer: "Giacomo Puccini",
        year: 1918,
        plot: "When a wealthy man dies leaving his fortune to a monastery, his greedy relatives enlist a cunning outsider to impersonate the deceased and dictate a new will. Instead, the trickster leaves the best of the estate to himself.",
        characters: "Gianni Schicchi, Lauretta, Rinuccio, Zita, Simone"
    },
    {
        title: "The Magic Flute",
        composer: "Wolfgang Amadeus Mozart",
        year: 1791,
        plot: "A young prince is given a magical flute to rescue a princess from a supposed sorcerer. With help from a comic bird-catcher and enchanted instruments, he undergoes trials of wisdom and discovers nothing is as it first seemed.",
        characters: "Tamino, Pamina, Papageno, Papagena, Queen of the Night, Sarastro"
    },
    {
        title: "Don Giovanni",
        composer: "Wolfgang Amadeus Mozart",
        year: 1787,
        plot: "A notorious seducer and libertine pursues women relentlessly, evading justice at every turn. When he kills a noblewoman's father, the statue of the slain man comes alive to claim his soul and drag him to damnation.",
        characters: "Don Giovanni, Leporello, Donna Anna, Don Ottavio, Donna Elvira, Zerlina"
    },
    {
        title: "The Marriage of Figaro",
        composer: "Wolfgang Amadeus Mozart",
        year: 1786,
        plot: "A clever valet and a young maid plan their wedding, but a lecherous nobleman pursues the bride. Through witty schemes, elaborate deceptions, and disguises, the couple outwits their master and wins the day.",
        characters: "Figaro, Susanna, Count Almaviva, Countess Rosina, Cherubino, Marcellina"
    },
    {
        title: "Così fan tutte",
        composer: "Wolfgang Amadeus Mozart",
        year: 1790,
        plot: "A cynical old bachelor bets two young officers that their fiancées will prove unfaithful. The men disguise themselves and woo each other's partners to test their loyalty, with unsettling and morally ambiguous results.",
        characters: "Fiordiligi, Dorabella, Ferrando, Guglielmo, Despina, Don Alfonso"
    },
    {
        title: "Rigoletto",
        composer: "Giuseppe Verdi",
        year: 1851,
        plot: "A deformed court jester seeks revenge against a licentious nobleman who seduces his daughter. His elaborate plan for vengeance backfires tragically when a case of mistaken identity leads to devastating consequences.",
        characters: "Rigoletto, Gilda, The Duke, Sparafucile, Giovanna, Monterone"
    },
    {
        title: "La Traviata",
        composer: "Giuseppe Verdi",
        year: 1853,
        plot: "A sophisticated courtesan falls in love and attempts to reform, but is pressured to abandon her lover by his family. Dying of consumption and heartbroken, she receives his forgiveness only too late.",
        characters: "Violetta, Alfredo, Giorgio Germont, Annina, Baron Douphol, Flora"
    },
    {
        title: "Aida",
        composer: "Giuseppe Verdi",
        year: 1871,
        plot: "An enslaved African princess in Egypt is torn between love for an Egyptian warrior and loyalty to her homeland and father. A fierce love triangle with the Pharaoh's daughter creates political intrigue and a tragic end.",
        characters: "Aida, Radamès, Amneris, King of Egypt, Amonasro, Ramfis"
    },
    {
        title: "Il Trovatore",
        composer: "Giuseppe Verdi",
        year: 1853,
        plot: "A gypsy woman is wrongly executed for witchcraft. Her son becomes a rebel against the nobleman responsible, and the two men become rivals for the same noblewoman, unaware of a secret binding their fates together.",
        characters: "Manrico, Leonora, Count di Luna, Azucena, Ferrando, Ines"
    },
    {
        title: "Otello",
        composer: "Giuseppe Verdi",
        year: 1887,
        plot: "A celebrated Moorish general, newly victorious, is poisoned by jealousy when his scheming ensign convinces him that his devoted wife has been unfaithful. The manipulation drives him to murder and suicide.",
        characters: "Otello, Desdemona, Iago, Cassio, Emilia, Roderigo"
    },
    {
        title: "Falstaff",
        composer: "Giuseppe Verdi",
        year: 1893,
        plot: "A fat, vain old knight schemes to seduce two wealthy married women for their money, sending them identical love letters. The women discover the plot and, with the whole town, orchestrate a humiliating comeuppance.",
        characters: "Falstaff, Alice Ford, Ford, Nannetta, Fenton, Mistress Quickly"
    },
    {
        title: "Nabucco",
        composer: "Giuseppe Verdi",
        year: 1842,
        plot: "A Babylonian king conquers Jerusalem and enslaves the Hebrews. When he proclaims himself a god, he is struck mad, and his ambitious daughter seizes power. Famous for its chorus of exiled slaves longing for their homeland.",
        characters: "Nabucco, Abigaille, Fenena, Ismaele, Zaccaria"
    },
    {
        title: "Macbeth",
        composer: "Giuseppe Verdi",
        year: 1847,
        plot: "Spurred by a prophecy from witches and by his ruthless wife, a Scottish general murders the king to seize the throne. Guilt and paranoia consume the couple as more blood is spilled to keep the crown.",
        characters: "Macbeth, Lady Macbeth, Banquo, Macduff, Malcolm"
    },
    {
        title: "Don Carlo",
        composer: "Giuseppe Verdi",
        year: 1867,
        plot: "A Spanish prince is in love with the woman who becomes his stepmother when she marries his tyrannical father, the king. Political intrigue, religious oppression, and a doomed friendship play out against the Inquisition.",
        characters: "Don Carlo, Elisabeth of Valois, King Philip II, Rodrigo, Princess Eboli, Grand Inquisitor"
    },
    {
        title: "Un ballo in maschera",
        composer: "Giuseppe Verdi",
        year: 1859,
        plot: "A governor is in love with the wife of his closest friend and adviser. When the friend discovers the affair, he joins a conspiracy to assassinate the governor at a masked ball.",
        characters: "Riccardo, Amelia, Renato, Ulrica, Oscar"
    },
    {
        title: "The Flying Dutchman",
        composer: "Richard Wagner",
        year: 1843,
        plot: "A cursed sea captain, doomed to sail the oceans forever, is allowed ashore once every seven years to seek salvation through faithful love. A devoted young woman believes she can redeem him, but the curse proves nearly unbreakable.",
        characters: "The Dutchman, Senta, Erik, Daland, Mary, Helmsman"
    },
    {
        title: "Tannhäuser",
        composer: "Richard Wagner",
        year: 1845,
        plot: "A knight-minstrel torn between sacred and sensual love escapes the goddess of desire's realm, then scandalizes a song contest by praising carnal pleasure. He makes a pilgrimage for absolution, redeemed at last by a woman's sacrifice.",
        characters: "Tannhäuser, Elisabeth, Venus, Wolfram, Landgrave Hermann"
    },
    {
        title: "Lohengrin",
        composer: "Richard Wagner",
        year: 1850,
        plot: "A mysterious swan-borne knight appears to defend a noblewoman in a trial by combat. They fall in love and marry, but she breaks her sacred promise never to ask his name or origin, and the revelation forces him to depart.",
        characters: "Lohengrin, Elsa, Telramund, Ortrud, King Henry, Gottfried"
    },
    {
        title: "Tristan und Isolde",
        composer: "Richard Wagner",
        year: 1865,
        plot: "A knight escorts an Irish princess to marry his king. A magical potion ignites a passionate and forbidden love between them, leading to secret trysts, betrayal, and a transcendent death.",
        characters: "Tristan, Isolde, King Mark, Kurwenal, Brangäne, Melot"
    },
    {
        title: "Die Meistersinger von Nürnberg",
        composer: "Richard Wagner",
        year: 1868,
        plot: "In medieval Nuremberg, a young knight competes in a song contest to win a goldsmith's daughter, guided by a wise cobbler-poet who must help him satisfy the guild's rigid rules while outmaneuvering a pedantic rival.",
        characters: "Walther, Eva, Hans Sachs, Beckmesser, Pogner, David"
    },
    {
        title: "Das Rheingold",
        composer: "Richard Wagner",
        year: 1869,
        plot: "The first part of the Ring cycle: water spirits guard a magical gold that grants limitless power when forged into a ring by one who renounces love. A dwarf steals the treasure, and the ruler of the gods schemes to seize it, unleashing a curse.",
        characters: "Wotan, Alberich, Loge, Fricka, Freia, Rhinemaidens"
    },
    {
        title: "Die Walküre",
        composer: "Richard Wagner",
        year: 1870,
        plot: "The second part of the Ring cycle: twin siblings separated at birth meet and fall in love. A warrior maiden defies her father, the ruler of the gods, to protect them, and is punished with a magic sleep encircled by fire. Famous for the Ride of the Valkyries.",
        characters: "Siegmund, Sieglinde, Brünnhilde, Wotan, Fricka, Hunding"
    },
    {
        title: "Siegfried",
        composer: "Richard Wagner",
        year: 1876,
        plot: "The third part of the Ring cycle: a fearless young hero, raised by a scheming dwarf, reforges a shattered sword, slays a dragon guarding a cursed ring, and passes through a wall of fire to awaken the sleeping warrior maiden destined to be his bride.",
        characters: "Siegfried, Mime, The Wanderer, Brünnhilde, Fafner, Alberich"
    },
    {
        title: "Götterdämmerung",
        composer: "Richard Wagner",
        year: 1876,
        plot: "The final part of the Ring cycle: a hero, his memory stolen by a potion, is drawn into betrayal and murder. His widow returns the cursed ring to the river and rides into his funeral pyre, and the reign of the gods ends in flames.",
        characters: "Siegfried, Brünnhilde, Gunther, Gutrune, Hagen, Rhinemaidens"
    },
    {
        title: "Parsifal",
        composer: "Richard Wagner",
        year: 1882,
        plot: "An innocent fool, ignorant even of his own name, stumbles upon a brotherhood guarding a holy relic. Resisting a sorcerer's enchantress, he gains wisdom through compassion, recovers a sacred spear, and heals the brotherhood's wounded king.",
        characters: "Parsifal, Kundry, Amfortas, Gurnemanz, Klingsor"
    },
    {
        title: "Salome",
        composer: "Richard Strauss",
        year: 1905,
        plot: "A princess becomes obsessed with an imprisoned prophet who rejects her advances. She performs a seductive dance for her lecherous stepfather and demands as her reward the prophet's severed head on a silver platter.",
        characters: "Salome, Herod, Herodias, Jochanaan, Narraboth"
    },
    {
        title: "Elektra",
        composer: "Richard Strauss",
        year: 1909,
        plot: "A princess is consumed by grief and rage after her mother and her mother's lover murder her father, the king. She waits obsessively for her exiled brother to return and carry out a bloody revenge.",
        characters: "Elektra, Klytämnestra, Chrysothemis, Orest, Aegisth"
    },
    {
        title: "Der Rosenkavalier",
        composer: "Richard Strauss",
        year: 1911,
        plot: "An aging aristocrat carries on an affair with a young man, knowing she must one day lose him to a younger woman. Sent to deliver a silver rose on behalf of a boorish baron, the youth falls in love with the intended bride.",
        characters: "The Marschallin, Octavian, Sophie, Baron Ochs, Faninal"
    },
    {
        title: "Ariadne auf Naxos",
        composer: "Richard Strauss",
        year: 1912,
        plot: "At a wealthy patron's mansion, a serious opera troupe and a comedy troupe are ordered to perform simultaneously to save time. A tragic heroine abandoned on an island is unexpectedly consoled by a flirtatious comedienne and the arrival of a young god.",
        characters: "Ariadne, Bacchus, Zerbinetta, The Composer, Music Master"
    },
    {
        title: "Die Fledermaus",
        composer: "Johann Strauss II",
        year: 1874,
        plot: "A man about to serve a short jail sentence is lured to a lavish masked ball instead. There an elaborate practical joke unfolds as his own disguised wife flirts with him, all staged as revenge for an old humiliation.",
        characters: "Eisenstein, Rosalinde, Adele, Dr. Falke, Prince Orlofsky, Frank"
    },
    {
        title: "The Barber of Seville",
        composer: "Gioachino Rossini",
        year: 1816,
        plot: "A clever barber helps a nobleman win the heart of a young woman kept under lock and key by her strict guardian. Through witty deceptions and clever disguises, they outsmart every obstacle to true love.",
        characters: "Figaro, Count Almaviva, Rosina, Dr. Bartolo, Don Basilio, Berta"
    },
    {
        title: "La Cenerentola",
        composer: "Gioachino Rossini",
        year: 1817,
        plot: "A kind-hearted girl, mistreated by her vain stepfather and stepsisters, wins the love of a prince who has disguised himself as his own valet to find a bride who loves him truly. A Cinderella tale that trades the glass slipper for a bracelet.",
        characters: "Angelina, Don Ramiro, Dandini, Don Magnifico, Alidoro"
    },
    {
        title: "Lucia di Lammermoor",
        composer: "Gaetano Donizetti",
        year: 1835,
        plot: "Forced by her scheming brother into a political marriage, a fragile young woman is separated from her true love through forged letters. On her wedding night she descends into madness and murders her groom.",
        characters: "Lucia, Edgardo, Enrico, Raimondo, Arturo"
    },
    {
        title: "L'elisir d'amore",
        composer: "Gaetano Donizetti",
        year: 1832,
        plot: "A shy peasant, hopelessly in love with a wealthy landowner, buys a fake 'love potion'—really cheap wine—from a traveling quack. A string of comic misunderstandings follows before he unexpectedly wins her heart.",
        characters: "Nemorino, Adina, Dulcamara, Belcore, Giannetta"
    },
    {
        title: "Don Pasquale",
        composer: "Gaetano Donizetti",
        year: 1843,
        plot: "A wealthy old bachelor plans to marry out of spite to disinherit his nephew. The nephew's clever friend arranges a sham marriage to a seemingly demure bride who transforms into a domestic nightmare, curing the old man of his folly.",
        characters: "Don Pasquale, Norina, Ernesto, Dr. Malatesta"
    },
    {
        title: "Norma",
        composer: "Vincenzo Bellini",
        year: 1831,
        plot: "A Druid high priestess has secretly borne two children to a Roman occupier who now loves a younger priestess. Torn between vengeance, love, and duty to her people, she ultimately confesses her guilt and sacrifices herself on the pyre.",
        characters: "Norma, Pollione, Adalgisa, Oroveso, Clotilde"
    },
    {
        title: "Carmen",
        composer: "Georges Bizet",
        year: 1875,
        plot: "A seductive factory worker enchants a naïve soldier, luring him to desert the military and abandon his sweetheart. Their passionate but destructive affair spirals into jealousy and obsession, ending in a fatal confrontation outside a bullring.",
        characters: "Carmen, Don José, Escamillo, Micaëla, Zuniga, Dancaïre"
    },
    {
        title: "Faust",
        composer: "Charles Gounod",
        year: 1859,
        plot: "An aging scholar bargains with the Devil: in exchange for youth, he pledges his soul. Restored to his prime, he seduces and abandons an innocent maiden, whose ruin and redemption bring the tale to a shattering close.",
        characters: "Faust, Méphistophélès, Marguerite, Valentin, Siebel, Martha"
    },
    {
        title: "The Tales of Hoffmann",
        composer: "Jacques Offenbach",
        year: 1881,
        plot: "A poet recounts three doomed love affairs over drinks in a tavern—with a lifelike mechanical doll, a fatally ill young singer, and a scheming Venetian courtesan—each thwarted by a different incarnation of his nemesis.",
        characters: "Hoffmann, Olympia, Antonia, Giulietta, Nicklausse, The Four Villains"
    },
    {
        title: "Samson et Dalila",
        composer: "Camille Saint-Saëns",
        year: 1877,
        plot: "A Hebrew strongman leading a revolt is seduced by a Philistine temptress who coaxes from him the secret that his strength lies in his hair. Betrayed, blinded, and enslaved, he summons a final surge of power to bring down the temple.",
        characters: "Samson, Dalila, High Priest, Abimélech, Old Hebrew"
    },
    {
        title: "Manon",
        composer: "Jules Massenet",
        year: 1884,
        plot: "A beautiful, pleasure-loving young woman torn between true love and the lure of wealth abandons her devoted suitor for a life of luxury, then loses everything in a spiral toward ruin and death.",
        characters: "Manon, Chevalier des Grieux, Lescaut, Count des Grieux, Guillot"
    },
    {
        title: "Werther",
        composer: "Jules Massenet",
        year: 1892,
        plot: "A sensitive young poet falls hopelessly in love with a woman already promised to another. Unable to bear her marriage or master his own despair, he is consumed by a fatal romantic melancholy.",
        characters: "Werther, Charlotte, Albert, Sophie, The Bailiff"
    },
    {
        title: "Cavalleria Rusticana",
        composer: "Pietro Mascagni",
        year: 1890,
        plot: "In a Sicilian village on Easter morning, a young soldier has abandoned his fiancée for a married former lover. The betrayed woman exposes the affair to the cuckolded husband, leading to a duel of honor and death.",
        characters: "Santuzza, Turiddu, Lola, Alfio, Mamma Lucia"
    },
    {
        title: "Pagliacci",
        composer: "Ruggero Leoncavallo",
        year: 1892,
        plot: "The leader of a traveling theater troupe discovers his wife is unfaithful. As they perform a comedy that mirrors his own betrayal, he loses the ability to separate the play from reality and kills her before the audience.",
        characters: "Canio, Nedda, Tonio, Silvio, Beppe"
    },
    {
        title: "Fidelio",
        composer: "Ludwig van Beethoven",
        year: 1805,
        plot: "A devoted wife disguises herself as a young man and takes work at a prison to rescue her husband, a political prisoner secretly held by a corrupt governor who intends to murder him before he can be discovered.",
        characters: "Leonore, Florestan, Don Pizarro, Rocco, Marzelline, Don Fernando"
    },
    {
        title: "Orfeo ed Euridice",
        composer: "Christoph Willibald Gluck",
        year: 1762,
        plot: "A legendary musician descends into the underworld to retrieve his dead wife, permitted to lead her back on one condition: that he not look at her until they reach the world above. His resolve fails at the final moment.",
        characters: "Orfeo, Euridice, Amore"
    },
    {
        title: "Dido and Aeneas",
        composer: "Henry Purcell",
        year: 1689,
        plot: "A Carthaginian queen falls in love with a Trojan hero shipwrecked on her shores. When scheming witches trick him into abandoning her to fulfill his destiny, she dies of a broken heart. Famous for its closing lament.",
        characters: "Dido, Aeneas, Belinda, Sorceress, Spirit"
    },
    {
        title: "Eugene Onegin",
        composer: "Pyotr Ilyich Tchaikovsky",
        year: 1879,
        plot: "A bored, aloof aristocrat coldly rejects a shy young woman's heartfelt love letter, then kills his best friend in a pointless duel. Years later he meets her again—now a poised noblewoman married to a prince—and realizes too late what he threw away.",
        characters: "Onegin, Tatyana, Lensky, Olga, Prince Gremin"
    },
    {
        title: "Boris Godunov",
        composer: "Modest Mussorgsky",
        year: 1874,
        plot: "A Russian tsar is haunted by guilt over the murdered child heir whose throne he seized. As a pretender claiming to be the dead prince rallies an army, the tormented ruler descends into madness and death.",
        characters: "Boris Godunov, Grigory, Pimen, Marina, Shuisky"
    },
    {
        title: "Peter Grimes",
        composer: "Benjamin Britten",
        year: 1945,
        plot: "In an English fishing village, a rough and misunderstood fisherman falls under suspicion when his young apprentice dies. As hostility from the townsfolk mounts and a second boy comes to harm, the outcast is driven to a tragic end.",
        characters: "Peter Grimes, Ellen Orford, Captain Balstrode, Auntie, Bob Boles"
    },
    {
        title: "Wozzeck",
        composer: "Alban Berg",
        year: 1925,
        plot: "A poor, downtrodden soldier is tormented by his superiors and used as a medical experiment, then betrayed by the mother of his child. Poverty, humiliation, and jealousy drive him to murder and self-destruction.",
        characters: "Wozzeck, Marie, Drum Major, Captain, Doctor"
    },
    {
        title: "The Rake's Progress",
        composer: "Igor Stravinsky",
        year: 1951,
        plot: "A young man abandons his sweetheart when a mysterious servant leads him into a life of London debauchery. The servant is the devil in disguise, and the reckoning comes as a wager for the young man's very soul.",
        characters: "Tom Rakewell, Anne Trulove, Nick Shadow, Baba the Turk, Trulove"
    },
    {
        title: "Porgy and Bess",
        composer: "George Gershwin",
        year: 1935,
        plot: "In a poor Black community on the American South's Catfish Row, a disabled beggar takes in a troubled woman fleeing her violent lover. Their fragile happiness is threatened by drugs, a hurricane, and the return of her old life.",
        characters: "Porgy, Bess, Crown, Sportin' Life, Clara"
    },
    {
        title: "L'Orfeo",
        composer: "Claudio Monteverdi",
        year: 1607,
        plot: "The earliest widely performed opera. A legendary Thracian musician, told that his bride has died of a snakebite on their wedding day, charms his way into the underworld with his singing to win her back, only to lose her again by breaking a single condition.",
        characters: "Orfeo, Euridice, Messenger, Charon, Pluto, Proserpina"
    },
    {
        title: "The Coronation of Poppea",
        composer: "Claudio Monteverdi",
        year: 1643,
        plot: "In imperial Rome, an emperor's ambitious mistress schemes to displace his wife and seize the throne, brushing aside a philosopher's counsel and every moral objection. Ambition and lust triumph over virtue.",
        characters: "Poppea, Nerone, Ottavia, Ottone, Seneca, Drusilla"
    },
    {
        title: "Giulio Cesare",
        composer: "George Frideric Handel",
        year: 1724,
        plot: "A Roman general arrives in Egypt amid civil war and is drawn to a seductive young queen who is battling her treacherous brother for the throne. Political intrigue, disguise, and vengeance drive the plot.",
        characters: "Cesare, Cleopatra, Tolomeo, Cornelia, Sesto, Achilla"
    },
    {
        title: "Rinaldo",
        composer: "George Frideric Handel",
        year: 1711,
        plot: "During the First Crusade, a Christian knight's beloved is abducted by a sorceress allied with the Saracens. With magical aid he storms an enchanted garden to rescue her. Famous for the lament 'Lascia ch'io pianga.'",
        characters: "Rinaldo, Almirena, Armida, Argante, Goffredo"
    },
    {
        title: "Alcina",
        composer: "George Frideric Handel",
        year: 1735,
        plot: "A sorceress lures knights to her magic island and transforms her discarded lovers into beasts and stones. A warrior maiden disguised as a man arrives to rescue her bewitched betrothed and break the enchantress's power.",
        characters: "Alcina, Ruggiero, Bradamante, Morgana, Oronte"
    },
    {
        title: "Serse",
        composer: "George Frideric Handel",
        year: 1738,
        plot: "A Persian king's infatuation with a noblewoman already promised to his own brother sets off a tangle of jealousy, disguise, and misdirected letters. Opens with the celebrated aria 'Ombra mai fu,' sung to a plane tree.",
        characters: "Serse, Arsamene, Romilda, Atalanta, Amastre"
    },
    {
        title: "Rodelinda",
        composer: "George Frideric Handel",
        year: 1725,
        plot: "A deposed king, believed dead, returns in secret to find a usurper pressuring his faithful queen to remarry. Her steadfast devotion and his reappearance turn the tables on the tyrant.",
        characters: "Rodelinda, Bertarido, Grimoaldo, Eduige, Garibaldo"
    },
    {
        title: "Platée",
        composer: "Jean-Philippe Rameau",
        year: 1745,
        plot: "To cure a goddess of her jealousy, the gods stage a mock wedding between the king of the gods and a vain, homely marsh nymph who believes herself irresistible. A comic ballet that ends in her good-humored humiliation.",
        characters: "Platée, Jupiter, Mercure, Junon, La Folie"
    },
    {
        title: "La serva padrona",
        composer: "Giovanni Battista Pergolesi",
        year: 1733,
        plot: "A short comic intermezzo: a cunning maid schemes to marry her grumbling bachelor employer by inventing a fake rival suitor, and maneuvers him into proposing before he realizes what has happened.",
        characters: "Serpina, Uberto, Vespone"
    },
    {
        title: "Iphigénie en Tauride",
        composer: "Christoph Willibald Gluck",
        year: 1779,
        plot: "A priestess in exile, forced to sacrifice strangers to a goddess, is confronted with two captives who turn out to include her long-lost brother, unleashing an agonized recognition and rescue.",
        characters: "Iphigénie, Oreste, Pylade, Thoas, Diane"
    },
    {
        title: "Idomeneo",
        composer: "Wolfgang Amadeus Mozart",
        year: 1781,
        plot: "A king of Crete, saved from a storm at sea, vows to sacrifice the first person he meets ashore, who proves to be his own son. He tries desperately to evade the terrible promise as a sea monster ravages his kingdom.",
        characters: "Idomeneo, Idamante, Ilia, Elettra, Arbace"
    },
    {
        title: "The Abduction from the Seraglio",
        composer: "Wolfgang Amadeus Mozart",
        year: 1782,
        plot: "A Spanish nobleman schemes to rescue his beloved and her maid from the harem of a Turkish pasha. Caught during the escape, the lovers are unexpectedly spared by the pasha's magnanimity.",
        characters: "Belmonte, Konstanze, Blonde, Pedrillo, Osmin, Pasha Selim"
    },
    {
        title: "La clemenza di Tito",
        composer: "Wolfgang Amadeus Mozart",
        year: 1791,
        plot: "A Roman emperor, betrayed by a close friend who is drawn into an assassination plot by a vengeful woman, chooses mercy over punishment and pardons the conspirators who sought his death.",
        characters: "Tito, Vitellia, Sesto, Servilia, Annio, Publio"
    },
    {
        title: "Der Freischütz",
        composer: "Carl Maria von Weber",
        year: 1821,
        plot: "A marksman desperate to win a shooting contest and his bride bargains for enchanted bullets cast at midnight in a haunted glen, with the help of a man in league with a demonic huntsman. The final bullet nearly destroys everything he loves.",
        characters: "Max, Agathe, Kaspar, Ännchen, Samiel, Ottokar"
    },
    {
        title: "The Italian Girl in Algiers",
        composer: "Gioachino Rossini",
        year: 1813,
        plot: "A resourceful Italian woman, shipwrecked and captured, outwits the bey of Algiers who wants her for his harem, engineering a comic escape with her lover through flattery, disguise, and a ridiculous fake ceremony.",
        characters: "Isabella, Mustafà, Lindoro, Taddeo, Elvira"
    },
    {
        title: "William Tell",
        composer: "Gioachino Rossini",
        year: 1829,
        plot: "In occupied Switzerland, a legendary marksman is forced by a tyrannical governor to shoot an apple off his own son's head, an outrage that ignites a national uprising for freedom. Famous for its galloping overture.",
        characters: "Guillaume Tell, Arnold, Mathilde, Gesler, Jemmy"
    },
    {
        title: "I puritani",
        composer: "Vincenzo Bellini",
        year: 1835,
        plot: "During the English civil war, a Puritan's daughter loses her reason when her Royalist betrothed appears to abandon her at the altar to help a fugitive queen escape. His eventual return and a royal pardon restore her sanity.",
        characters: "Elvira, Arturo, Riccardo, Giorgio, Walton"
    },
    {
        title: "La sonnambula",
        composer: "Vincenzo Bellini",
        year: 1831,
        plot: "A village bride-to-be is disgraced when she is discovered in a stranger's room, having sleepwalked there in the night. Her innocence is proven only when the whole town watches her cross a high mill roof while fast asleep.",
        characters: "Amina, Elvino, Count Rodolfo, Lisa, Teresa"
    },
    {
        title: "The Daughter of the Regiment",
        composer: "Gaetano Donizetti",
        year: 1840,
        plot: "A spirited orphan raised as the mascot of a French regiment falls for a young peasant, then is reclaimed by an aristocratic aunt determined to marry her off to nobility. Famous for a tenor aria with nine high Cs.",
        characters: "Marie, Tonio, Sulpice, Marquise of Berkenfield"
    },
    {
        title: "Anna Bolena",
        composer: "Gaetano Donizetti",
        year: 1830,
        plot: "A king, weary of his second queen and enamored of her lady-in-waiting, engineers false charges of adultery to send the queen to the scaffold. She descends into madness and forgives him as she awaits execution.",
        characters: "Anna Bolena, Enrico VIII, Giovanna Seymour, Percy, Smeton"
    },
    {
        title: "Maria Stuarda",
        composer: "Gaetano Donizetti",
        year: 1835,
        plot: "Two rival queens confront each other in a fictional meeting; the imprisoned Scottish queen, provoked, hurls insults at her English cousin and seals her own fate, going to the scaffold with dignity and faith.",
        characters: "Maria Stuarda, Elisabetta, Leicester, Talbot, Cecil"
    },
    {
        title: "Les Troyens",
        composer: "Hector Berlioz",
        year: 1863,
        plot: "An epic in two parts: the fall of Troy, foreseen by a doomed prophetess, then a Trojan hero's passionate love affair with the queen of Carthage, which he abandons to fulfill his destiny of founding Rome, driving her to suicide.",
        characters: "Énée, Didon, Cassandre, Chorèbe, Anna"
    },
    {
        title: "Roméo et Juliette",
        composer: "Charles Gounod",
        year: 1867,
        plot: "Two young lovers from feuding noble families of Verona marry in secret, but a chain of duels, banishment, and a sleeping potion gone tragically wrong drives them both to death.",
        characters: "Roméo, Juliette, Mercutio, Tybalt, Frère Laurent"
    },
    {
        title: "Orpheus in the Underworld",
        composer: "Jacques Offenbach",
        year: 1858,
        plot: "A satirical operetta in which a bored musician is secretly glad when his unfaithful wife is carried off to Hades, but public opinion shames him into reclaiming her. Home of the famous galloping can-can.",
        characters: "Orphée, Eurydice, Pluton, Jupiter, Public Opinion"
    },
    {
        title: "The Pearl Fishers",
        composer: "Georges Bizet",
        year: 1863,
        plot: "In ancient Ceylon, two friends who long ago swore to renounce a woman they both loved find their bond tested when she reappears as a veiled temple priestess. Famous for the tenor–baritone duet 'Au fond du temple saint.'",
        characters: "Nadir, Zurga, Leïla, Nourabad"
    },
    {
        title: "Lakmé",
        composer: "Léo Delibes",
        year: 1883,
        plot: "In British-occupied India, the daughter of a vengeful Brahmin priest falls in love with an English officer, a forbidden union that ends in tragedy. Famous for the shimmering 'Flower Duet.'",
        characters: "Lakmé, Gérald, Nilakantha, Mallika, Frédéric"
    },
    {
        title: "Thaïs",
        composer: "Jules Massenet",
        year: 1894,
        plot: "A monk sets out to convert a beautiful Alexandrian courtesan to a life of faith, only to find his own soul consumed by desire for her just as she embraces holiness. Famous for the orchestral 'Méditation.'",
        characters: "Thaïs, Athanaël, Nicias, Palémon"
    },
    {
        title: "Pelléas et Mélisande",
        composer: "Claude Debussy",
        year: 1902,
        plot: "A prince finds a mysterious, sorrowful woman weeping by a forest spring and marries her, but she and his younger half-brother drift into a tender, doomed love. A dreamlike symbolist tragedy of jealousy and fate.",
        characters: "Pelléas, Mélisande, Golaud, Arkel, Geneviève"
    },
    {
        title: "Louise",
        composer: "Gustave Charpentier",
        year: 1900,
        plot: "A Parisian seamstress defies her possessive working-class parents to live with her artist lover in bohemian Montmartre, torn between family duty and the intoxicating freedom of the city itself.",
        characters: "Louise, Julien, The Mother, The Father"
    },
    {
        title: "L'enfant et les sortilèges",
        composer: "Maurice Ravel",
        year: 1925,
        plot: "A naughty child who smashes his toys and torments the household animals finds the furniture, the crockery, and the garden creatures springing to life to reproach him, until a single act of kindness redeems him.",
        characters: "The Child, The Mother, Fire, The Princess, The Cat"
    },
    {
        title: "Dialogues des Carmélites",
        composer: "Francis Poulenc",
        year: 1957,
        plot: "During the French Revolution, a timid young aristocrat joins a Carmelite convent seeking refuge from her fears, only to face the ultimate test of courage when the nuns are condemned to the guillotine for their faith.",
        characters: "Blanche, Madame de Croissy, Mother Marie, Sister Constance, Madame Lidoine"
    },
    {
        title: "Die Frau ohne Schatten",
        composer: "Richard Strauss",
        year: 1919,
        plot: "An empress who is part spirit casts no shadow, a sign she cannot bear children, and must obtain one within three days or her husband will turn to stone. Her quest tests two very different couples' capacity for compassion and sacrifice.",
        characters: "The Empress, The Emperor, The Nurse, Barak, Barak's Wife"
    },
    {
        title: "Arabella",
        composer: "Richard Strauss",
        year: 1933,
        plot: "An impoverished Viennese family pins its hopes on marrying off its elder daughter well, while the younger, raised as a boy to save money, secretly loves an officer who believes her male. A wealthy stranger and a glass of water set things right.",
        characters: "Arabella, Mandryka, Zdenka, Matteo, Waldner"
    },
    {
        title: "Capriccio",
        composer: "Richard Strauss",
        year: 1942,
        plot: "In an elegant 'conversation piece,' a widowed countess is courted by both a poet and a composer, each embodying one side of opera's oldest question: which matters more, the words or the music?",
        characters: "The Countess, Flamand, Olivier, La Roche, The Count"
    },
    {
        title: "Hänsel und Gretel",
        composer: "Engelbert Humperdinck",
        year: 1893,
        plot: "Two poor children lost in the woods stumble upon a gingerbread house belonging to a witch who fattens children to eat them. They outwit her, shove her into her own oven, and free the other children she had turned to gingerbread.",
        characters: "Hänsel, Gretel, The Witch, Gertrud, Peter"
    },
    {
        title: "The Merry Widow",
        composer: "Franz Lehár",
        year: 1905,
        plot: "Diplomats of a tiny bankrupt principality scheme to keep a wealthy widow's fortune at home by marrying her off to a countryman, who happens to be her former sweetheart. A sparkling operetta of pride and rekindled love.",
        characters: "Hanna Glawari, Danilo, Valencienne, Camille, Baron Zeta"
    },
    {
        title: "Die tote Stadt",
        composer: "Erich Wolfgang Korngold",
        year: 1920,
        plot: "A widower who has turned his home into a shrine to his dead wife becomes obsessed with a dancer who resembles her. A feverish dream of desire, jealousy, and imagined murder leads him back to reality and release.",
        characters: "Paul, Marietta, Frank, Brigitta"
    },
    {
        title: "The Threepenny Opera",
        composer: "Kurt Weill",
        year: 1928,
        plot: "A biting musical satire set in London's criminal underworld, following a charming gangster, his marriage to a beggar-king's daughter, and the corrupt bargains that keep him from the gallows. Home of 'Mack the Knife.'",
        characters: "Macheath, Polly Peachum, Mr. Peachum, Jenny, Tiger Brown"
    },
    {
        title: "Lulu",
        composer: "Alban Berg",
        year: 1937,
        plot: "A magnetic, amoral woman rises through a series of husbands and lovers, each destroyed in her wake, before her own fall into poverty and a fatal encounter with a murderer in London. Left unfinished at the composer's death.",
        characters: "Lulu, Dr. Schön, Alwa, Countess Geschwitz, Schigolch"
    },
    {
        title: "The Queen of Spades",
        composer: "Pyotr Ilyich Tchaikovsky",
        year: 1890,
        plot: "An obsessive gambler becomes convinced that an old countess knows the secret of three winning cards. His fixation destroys the woman who loves him and drives him to ruin and death at the gaming table.",
        characters: "Hermann, Lisa, The Countess, Yeletsky, Tomsky"
    },
    {
        title: "Prince Igor",
        composer: "Alexander Borodin",
        year: 1890,
        plot: "A medieval Russian prince is captured while campaigning against a nomadic khan, who treats his royal prisoner with chivalrous respect while his own kingdom slides into disorder back home. Famous for the 'Polovtsian Dances.'",
        characters: "Igor, Yaroslavna, Vladimir, Konchak, Galitsky"
    },
    {
        title: "The Golden Cockerel",
        composer: "Nikolai Rimsky-Korsakov",
        year: 1909,
        plot: "A lazy, foolish tsar is given a magical golden cockerel that crows to warn of danger, but his greed and an enchanting foreign queen bring about his comic and fatal downfall. A biting satire of autocratic misrule.",
        characters: "Tsar Dodon, Queen of Shemakha, The Astrologer, The Golden Cockerel"
    },
    {
        title: "The Love for Three Oranges",
        composer: "Sergei Prokofiev",
        year: 1921,
        plot: "A melancholy, hypochondriac prince, cursed to fall in love with three oranges, journeys to distant lands to find them, freeing the princesses trapped inside. A whimsical fairy-tale satire, famous for its March.",
        characters: "The Prince, Truffaldino, Leandro, Fata Morgana, Princess Ninetta"
    },
    {
        title: "War and Peace",
        composer: "Sergei Prokofiev",
        year: 1946,
        plot: "An epic adaptation of Tolstoy's novel, sweeping from the ballrooms and love affairs of Russian aristocracy into Napoleon's catastrophic 1812 invasion and the burning of Moscow.",
        characters: "Natasha, Prince Andrei, Pierre, Anatol, Napoleon, Kutuzov"
    },
    {
        title: "Lady Macbeth of the Mtsensk District",
        composer: "Dmitri Shostakovich",
        year: 1934,
        plot: "A stifled provincial merchant's wife takes a brutish lover and murders her way toward freedom, disposing of her father-in-law and husband, before betrayal ends her on a Siberian prison convoy. Famously denounced by Stalin.",
        characters: "Katerina, Sergei, Boris, Zinovy"
    },
    {
        title: "Jenůfa",
        composer: "Leoš Janáček",
        year: 1904,
        plot: "A Moravian village girl, pregnant and abandoned, is at the mercy of her stern, proud stepmother, who secretly drowns the newborn to protect the family's honor. Discovery, guilt, and hard-won forgiveness follow.",
        characters: "Jenůfa, Laca, Števa, Kostelnička, Grandmother Buryjovka"
    },
    {
        title: "The Cunning Little Vixen",
        composer: "Leoš Janáček",
        year: 1924,
        plot: "A forester captures a wild vixen who escapes to live, love, and raise a family in the forest. Her spirited life and sudden death become a radiant meditation on nature's endless cycle of renewal.",
        characters: "The Vixen, The Fox, The Forester, Harašta, The Schoolmaster"
    },
    {
        title: "Kátya Kabanová",
        composer: "Leoš Janáček",
        year: 1921,
        plot: "Trapped in a loveless marriage under a tyrannical mother-in-law in a Russian river town, a sensitive young woman risks an affair while her husband is away, is consumed by guilt, confesses publicly, and drowns herself in the Volga.",
        characters: "Kátya, Boris, Kabanicha, Tichon, Varvara"
    },
    {
        title: "The Bartered Bride",
        composer: "Bedřich Smetana",
        year: 1866,
        plot: "In a Bohemian village, a young woman's true love appears to sell his claim on her to a marriage broker, scandalizing everyone, until his clever scheme reveals he is the wealthy rival's long-lost brother and he wins her honestly after all.",
        characters: "Mařenka, Jeník, Kecal, Vašek, Micha"
    },
    {
        title: "Rusalka",
        composer: "Antonín Dvořák",
        year: 1901,
        plot: "A water nymph longs to become human to win a prince's love and trades her voice for legs, warned that failure will doom them both. Betrayed and left mute, she becomes a spirit of death. Famous for the 'Song to the Moon.'",
        characters: "Rusalka, The Prince, Ježibaba, Vodník, Foreign Princess"
    },
    {
        title: "Bluebeard's Castle",
        composer: "Béla Bartók",
        year: 1918,
        plot: "A new bride insists on opening the seven locked doors of her brooding husband's dark castle, each revealing something of his soul and his past, until she joins his former wives among the shadows. A one-act psychological allegory.",
        characters: "Bluebeard, Judith"
    },
    {
        title: "The Turn of the Screw",
        composer: "Benjamin Britten",
        year: 1954,
        plot: "A governess at an isolated country house becomes convinced that the two children in her care are being corrupted by the ghosts of a former valet and governess. Her increasingly desperate efforts to save them end in tragedy.",
        characters: "The Governess, Miles, Flora, Peter Quint, Miss Jessel, Mrs. Grose"
    },
    {
        title: "Billy Budd",
        composer: "Benjamin Britten",
        year: 1951,
        plot: "Aboard an 18th-century British warship, a handsome, good-natured sailor is falsely accused of mutiny by a malevolent master-at-arms. When he strikes his accuser dead, his anguished captain is bound by naval law to condemn him to hang.",
        characters: "Billy Budd, Captain Vere, Claggart, Dansker"
    },
    {
        title: "A Midsummer Night's Dream",
        composer: "Benjamin Britten",
        year: 1960,
        plot: "In an enchanted wood, quarreling fairy royalty, a mischievous sprite with a love potion, four confused young lovers, and a troupe of bumbling amateur actors tangle together into a magical midsummer comedy.",
        characters: "Oberon, Tytania, Puck, Bottom, Lysander, Hermia"
    },
    {
        title: "Vanessa",
        composer: "Samuel Barber",
        year: 1958,
        plot: "A woman who has waited twenty years for a lost lover is visited by his son, who instead seduces her young niece before deserting her. A drama of romantic illusion, self-deception, and its cost passed from one generation to the next.",
        characters: "Vanessa, Anatol, Erika, The Baroness, The Doctor"
    },
    {
        title: "Amahl and the Night Visitors",
        composer: "Gian Carlo Menotti",
        year: 1951,
        plot: "A poor disabled shepherd boy and his mother give shelter to the Three Kings on their journey to Bethlehem. The boy's gift of his own crutch to the newborn child brings about a miracle. A beloved Christmas opera written for television.",
        characters: "Amahl, The Mother, Kaspar, Melchior, Balthazar"
    },
    {
        title: "Susannah",
        composer: "Carlisle Floyd",
        year: 1955,
        plot: "In a rural Tennessee mountain community, a beautiful, innocent young woman is falsely branded a sinner by hypocritical church elders after she is seen bathing in a creek, and is slowly destroyed by their persecution.",
        characters: "Susannah, Sam, Olin Blitch, Little Bat, Elder McLean"
    },
    {
        title: "Nixon in China",
        composer: "John Adams",
        year: 1987,
        plot: "A minimalist retelling of President Nixon's historic 1972 visit to Communist China, capturing the staged political theater, the outsized personalities of the leaders, and their private, searching reflections.",
        characters: "Richard Nixon, Pat Nixon, Chou En-lai, Mao Tse-tung, Chiang Ch'ing"
    },
    {
        title: "Doctor Atomic",
        composer: "John Adams",
        year: 2005,
        plot: "In the tense final hours before the first atomic bomb test in the New Mexico desert in 1945, the physicist leading the Manhattan Project wrestles with dread, ambition, and profound moral doubt.",
        characters: "J. Robert Oppenheimer, Kitty Oppenheimer, Edward Teller, General Groves, Robert Wilson"
    },
    {
        title: "Akhnaten",
        composer: "Philip Glass",
        year: 1984,
        plot: "A hypnotic, ritualistic portrait of the ancient Egyptian pharaoh who overturned centuries of tradition to worship a single sun-god, and whose radical, inward-looking reign collapsed after his death.",
        characters: "Akhnaten, Nefertiti, Queen Tye, Horemhab, Amenhotep"
    },
    {
        title: "Satyagraha",
        composer: "Philip Glass",
        year: 1980,
        plot: "A meditative, Sanskrit-language opera depicting the young Gandhi's years in South Africa and the birth of his philosophy of nonviolent resistance, structured around scenes overseen by historical and spiritual figures.",
        characters: "Gandhi, Miss Schlesen, Mrs. Naidoo, Kasturbai, Parsi Rustomji"
    },
    {
        title: "The Tempest",
        composer: "Thomas Adès",
        year: 2004,
        plot: "A modern operatic setting of Shakespeare's play: an exiled sorcerer conjures a storm to shipwreck his enemies on his island, engineering justice, his daughter's marriage, and at last his own reconciliation and renunciation of magic.",
        characters: "Prospero, Ariel, Miranda, Ferdinand, Caliban"
    },
    {
        title: "Dead Man Walking",
        composer: "Jake Heggie",
        year: 2000,
        plot: "Based on Sister Helen Prejean's memoir, a nun becomes the spiritual adviser to a convicted murderer on death row, confronting guilt, the possibility of forgiveness, and the reality of capital punishment.",
        characters: "Sister Helen Prejean, Joseph De Rocher, Mrs. De Rocher, Owen Hart"
    },
    {
        title: "Le Grand Macabre",
        composer: "György Ligeti",
        year: 1978,
        plot: "An absurdist, apocalyptic farce set in a decaying land where a figure claiming to be Death announces the end of the world amid drunkenness, lust, and bumbling politicians, only for the promised apocalypse to fizzle out anticlimactically.",
        characters: "Nekrotzar, Piet the Pot, Astradamors, Mescalina, Gepopo"
    },
    {
        title: "La Gioconda",
        composer: "Amilcare Ponchielli",
        year: 1876,
        plot: "In 17th-century Venice, a devoted street singer sacrifices herself amid a web of love, jealousy, and blackmail entangling a spy, a noblewoman, and her own blind mother. Home of the famous 'Dance of the Hours.'",
        characters: "La Gioconda, Enzo, Barnaba, Laura, Alvise, La Cieca"
    },
    {
        title: "Andrea Chénier",
        composer: "Umberto Giordano",
        year: 1896,
        plot: "During the French Revolution, an idealistic poet and an aristocrat's daughter fall in love as the Terror closes in. Denounced by a jealous rival turned revolutionary, the poet is sent to the guillotine, and she chooses to die at his side.",
        characters: "Andrea Chénier, Maddalena, Gérard, Bersi, Roucher"
    },
    {
        title: "Adriana Lecouvreur",
        composer: "Francesco Cilea",
        year: 1902,
        plot: "A celebrated 18th-century French actress and a rival princess vie for the love of the same nobleman. The jealous princess takes her revenge by sending a bouquet of poisoned violets that kills the unsuspecting actress.",
        characters: "Adriana, Maurizio, Princess de Bouillon, Michonnet, Abbé"
    },
    {
        title: "Mefistofele",
        composer: "Arrigo Boito",
        year: 1868,
        plot: "A grand setting of the Faust legend, framed by a wager in heaven, in which the Devil leads an aging scholar through earthly love and a classical dream of ancient Greece toward a final, contested redemption.",
        characters: "Mefistofele, Faust, Margherita, Elena, Marta"
    },
    {
        title: "Manon Lescaut",
        composer: "Giacomo Puccini",
        year: 1893,
        plot: "A young woman drawn to luxury abandons her student lover for a rich old man, is arrested as a courtesan, and is deported to the American wilderness, where she dies of exhaustion in her lover's arms.",
        characters: "Manon Lescaut, Des Grieux, Lescaut, Geronte"
    },
    {
        title: "The Girl of the Golden West",
        composer: "Giacomo Puccini",
        year: 1910,
        plot: "In a California Gold Rush mining camp, the tough but tender woman who runs the saloon falls for a bandit on the run and wins his freedom by cheating the sheriff who loves her in a tense, rigged game of cards.",
        characters: "Minnie, Dick Johnson, Jack Rance, Nick, Ashby"
    },
    {
        title: "Suor Angelica",
        composer: "Giacomo Puccini",
        year: 1918,
        plot: "In a convent, a noblewoman forced years earlier to give up her illegitimate child learns from a cold aunt that the boy has died. In despair she takes poison, then, praying for forgiveness, receives a consoling vision of grace.",
        characters: "Sister Angelica, The Princess, The Abbess, Sister Genovieffa"
    },
    {
        title: "Il tabarro",
        composer: "Giacomo Puccini",
        year: 1918,
        plot: "On a barge on the Seine, an aging skipper discovers his young wife's affair with a stevedore and takes brutal revenge, hiding the dead lover's body beneath the heavy cloak in which he once sheltered her.",
        characters: "Michele, Giorgetta, Luigi, Tinca, Frugola"
    }
];
