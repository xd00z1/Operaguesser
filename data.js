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
    }
];
