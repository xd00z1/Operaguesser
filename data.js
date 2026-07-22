const operas = [
    {
        title: "La Bohème",
        composer: "Giacomo Puccini",
        year: 1896,
        plot: "A group of struggling artists share an apartment in Paris. A poet and a seamstress fall in love, but their romance is tested by poverty and pride. As winter sets in, they face hardship and tragic separation.",
        characters: "Rodolfo, Mimì, Marcello, Musetta, Colline, Schaunard"
    },
    {
        title: "The Magic Flute",
        composer: "Wolfgang Amadeus Mozart",
        year: 1791,
        plot: "A young prince is given a magical flute to rescue a princess from a dark sorcerer. With help from a bird-catcher and mysterious enchanted instruments, he embarks on a journey filled with trials and discovers nothing is as it seems.",
        characters: "Tamino, Pamina, Papageno, Papagena, Queen of the Night, Sarastro"
    },
    {
        title: "Rigoletto",
        composer: "Giuseppe Verdi",
        year: 1851,
        plot: "A deformed court jester seeks revenge against a licentious nobleman who seduces his daughter. His elaborate plans for vengeance backfire tragically when a case of mistaken identity leads to unexpected and devastating consequences.",
        characters: "Rigoletto, Gilda, The Duke, Sparafucile, Giovanna, Monterone"
    },
    {
        title: "Carmen",
        composer: "Georges Bizet",
        year: 1875,
        plot: "A seductive factory worker enchants a soldier, leading him to desert the military. Their passionate but destructive affair spirals into jealousy and obsession, ending in a tragic confrontation.",
        characters: "Carmen, Don José, Escamillo, Micaëla, Zuniga, Dancaïre"
    },
    {
        title: "Tosca",
        composer: "Giacomo Puccini",
        year: 1900,
        plot: "An opera singer becomes entangled in political intrigue when she attempts to save her lover, a painter, from execution by a corrupt chief of police. She makes a dark bargain with devastating consequences.",
        characters: "Tosca, Mario Cavaradossi, Baron Scarpia, Cesare Angelotti, Attavanti"
    },
    {
        title: "Don Giovanni",
        composer: "Wolfgang Amadeus Mozart",
        year: 1787,
        plot: "A notorious seducer and libertine pursues women relentlessly, evading justice at every turn. When he kills a noblewoman's father, the statue of the slain man comes alive to claim his soul and drag him to damnation.",
        characters: "Don Giovanni, Leporello, Donna Anna, Don Ottavio, Donna Elvira, Zerlina"
    },
    {
        title: "La Traviata",
        composer: "Giuseppe Verdi",
        year: 1853,
        plot: "A sophisticated courtesan falls in love and attempts to reform, but is pressured to abandon her lover by his family. Dying of consumption and heartbroken, she receives his forgiveness only too late.",
        characters: "Violetta, Alfredo, Giorgio Germont, Annina, Baron Douphol, Flora"
    },
    {
        title: "The Marriage of Figaro",
        composer: "Wolfgang Amadeus Mozart",
        year: 1786,
        plot: "A clever valet and a young maid plan their wedding, but a lecherous nobleman pursues the bride. Through witty schemes, elaborate deceptions, and disguises, the couple outwits their superior and wins the day.",
        characters: "Figaro, Susanna, Count Almaviva, Countess Rosina, Cherubino, Marcellina"
    },
    {
        title: "The Barber of Seville",
        composer: "Gioachino Rossini",
        year: 1816,
        plot: "A clever barber helps a nobleman win the heart of a young woman imprisoned by her strict guardian. Through witty deceptions and clever disguises, they outsmart obstacles to true love.",
        characters: "Figaro, Count Almaviva, Rosina, Dr. Bartolo, Don Basilio, Berta"
    },
    {
        title: "Aida",
        composer: "Giuseppe Verdi",
        year: 1871,
        plot: "An African princess enslaved in Egypt is torn between love for an Egyptian warrior and loyalty to her homeland and father. A fierce love triangle with the Pharaoh's daughter creates political intrigue and tragic consequences.",
        characters: "Aida, Radamès, Amneris, King of Egypt, Amonasro, Ramfis"
    },
    {
        title: "The Flying Dutchman",
        composer: "Richard Wagner",
        year: 1843,
        plot: "A cursed sea captain, doomed to sail the oceans forever, seeks salvation through true love. A devoted young woman believes she can redeem him, but an ancient curse proves impossible to break.",
        characters: "The Flying Dutchman, Senta, Erik, Daland, Mary, Helmsman"
    },
    {
        title: "Lohengrin",
        composer: "Richard Wagner",
        year: 1850,
        plot: "A mysterious warrior appears to defend a noblewoman in a trial by combat. They fall in love and marry, but she breaks her sacred promise not to ask about his identity. The revelation leads to heartbreak and separation.",
        characters: "Lohengrin, Elsa, Telramund, Ortrud, King Henry, Gottfried"
    },
    {
        title: "The Ring Cycle - Das Rheingold",
        composer: "Richard Wagner",
        year: 1869,
        plot: "Water spirits guard a magical gold that grants unlimited power when forged into a ring. A dwarf steals the treasure, and the gods embark on a quest to reclaim it, setting in motion a curse that will destroy them all.",
        characters: "Alberich, Wotan, Fricka, Freia, Loge, Rhinemaidens"
    },
    {
        title: "Tristan and Isolde",
        composer: "Richard Wagner",
        year: 1865,
        plot: "A warrior escorts an Irish princess to her betrothed king. A magical potion ignites a passionate and forbidden love between them, leading to deception and tragic consequences.",
        characters: "Tristan, Isolde, King Mark, Kurwenal, Brangäne, Melot"
    },
    {
        title: "The Twilight of the Gods",
        composer: "Richard Wagner",
        year: 1876,
        plot: "The final part of the Ring Cycle: A hero retrieves the magic ring and gives it to a warrior maiden. Through betrayal and sacrifice, the ring's curse destroys the old gods and reshapes the world.",
        characters: "Siegfried, Brünnhilde, Gunther, Gutrune, Hagen, Rhinemaidens"
    },
    {
        title: "Faust",
        composer: "Charles Gounod",
        year: 1859,
        plot: "An aging scholar makes a bargain with the Devil: if he can find a moment so perfect he wishes it to last forever, his soul belongs to the Devil. He pursues a young maiden, leading to destruction and damnation.",
        characters: "Faust, Méphistophélès, Marguerite, Valentin, Siebel, Martha"
    },
    {
        title: "Madame Butterfly",
        composer: "Giacomo Puccini",
        year: 1904,
        plot: "A young Japanese geisha marries an American naval officer who eventually abandons her and their child. When he returns years later with a new wife to reclaim their son, the heartbroken woman chooses death over living with her loss.",
        characters: "Cio-Cio-San, Pinkerton, Suzuki, Sharpless, The Bonze, Kate Pinkerton"
    },
    {
        title: "Il Trovatore",
        composer: "Giuseppe Verdi",
        year: 1853,
        plot: "A gypsy woman is wrongly executed for witchcraft. Her son becomes a rebel against the nobleman responsible. The nobleman falls in love with a noblewoman, creating a complex love triangle of revenge, passion, and tragedy.",
        characters: "Manrico, Leonora, Count di Luna, Azucena, Ferrando, Ines"
    },
    {
        title: "The Tempest",
        composer: "Various",
        year: 1612,
        plot: "An opera based on Shakespeare's play: a sorcerer uses magic to shipwreck his usurping brother on an island. Through supernatural intervention and orchestrated encounters, he restores his daughter to her rightful place and regains his power.",
        characters: "Prospero, Miranda, Ariel, Caliban, Antonio, Alonso"
    }
];
