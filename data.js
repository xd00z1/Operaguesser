const operas = [
    {
        title: "La Bohème",
        composer: "Giacomo Puccini",
        year: 1896,
        plot: "A group of bohemians share an apartment in Paris. The poet Rodolfo and the seamstress Mimì fall in love, but their romance is tested by poverty and pride. As winter sets in, they face hardship and separation.",
        characters: "Rodolfo, Mimì, Marcello, Musetta, Colline, Schaunard"
    },
    {
        title: "The Magic Flute",
        composer: "Wolfgang Amadeus Mozart",
        year: 1791,
        plot: "Prince Tamino is given a magic flute to rescue Princess Pamina from an evil sorcerer. With the help of the bird-catcher Papageno and magical instruments, he discovers that nothing is as it seems and grows in wisdom and enlightenment.",
        characters: "Tamino, Pamina, Papageno, Papagena, Queen of the Night, Sarastro"
    },
    {
        title: "Rigoletto",
        composer: "Giuseppe Verdi",
        year: 1851,
        plot: "The hunchbacked jester Rigoletto seeks revenge against the dissolute Duke who seduced his daughter Gilda. His plans for vengeance backfire tragically when he accidentally causes his daughter's death.",
        characters: "Rigoletto, Gilda, The Duke, Sparafucile, Giovanna, Monterone"
    },
    {
        title: "Carmen",
        composer: "Georges Bizet",
        year: 1875,
        plot: "The seductive Carmen, a cigarette factory worker, enchants the soldier Don José, leading him to desert the army. Their passionate but destructive affair ends in tragedy as his jealousy and her independence collide.",
        characters: "Carmen, Don José, Escamillo, Micaëla, Zuniga, Dancaïre"
    },
    {
        title: "Tosca",
        composer: "Giacomo Puccini",
        year: 1900,
        plot: "The opera singer Tosca becomes entangled in political turmoil when she tries to save her lover, the painter Mario Cavaradossi, from execution. She bargains with the corrupt police chief Scarpia, with devastating consequences.",
        characters: "Tosca, Mario Cavaradossi, Baron Scarpia, Cesare Angelotti, Attavanti"
    },
    {
        title: "Don Giovanni",
        composer: "Wolfgang Amadeus Mozart",
        year: 1787,
        plot: "The notorious seducer Don Giovanni pursues women across Spain, always escaping his debts and conquests. When he kills the Commendatore, the statue of the dead man comes alive to drag him to hell.",
        characters: "Don Giovanni, Leporello, Donna Anna, Don Ottavio, Donna Elvira, Zerlina"
    },
    {
        title: "La Traviata",
        composer: "Giuseppe Verdi",
        year: 1853,
        plot: "Violetta, a courtesan with a heart of gold, falls in love with Alfredo. Though he loves her, his family pressures him to leave her. Heartbroken and dying of consumption, Violetta receives his forgiveness too late.",
        characters: "Violetta, Alfredo, Giorgio Germont, Annina, Baron Douphol, Flora"
    },
    {
        title: "The Marriage of Figaro",
        composer: "Wolfgang Amadeus Mozart",
        year: 1786,
        plot: "The valet Figaro plans to marry Susanna, but the lecherous Count Almaviva wants her first. Through a series of clever schemes, misunderstandings, and disguises, Figaro outsmarts the Count and secures his wedding.",
        characters: "Figaro, Susanna, Count Almaviva, Countess Rosina, Cherubino, Marcellina"
    },
    {
        title: "The Barber of Seville",
        composer: "Gioachino Rossini",
        year: 1816,
        plot: "The barber Figaro helps Count Almaviva win the heart of the beautiful Rosina, who is kept under lock and key by her elderly guardian. Through wit and disguise, they overcome obstacles to love.",
        characters: "Figaro, Count Almaviva, Rosina, Dr. Bartolo, Don Basilio, Berta"
    },
    {
        title: "Aida",
        composer: "Giuseppe Verdi",
        year: 1871,
        plot: "Aida, an Ethiopian princess enslaved in Egypt, is torn between love for the Egyptian warrior Radamès and loyalty to her father. A love triangle with Amneris, daughter of the Pharaoh, leads to tragic consequences.",
        characters: "Aida, Radamès, Amneris, King of Egypt, Amonasro, Ramfis"
    },
    {
        title: "The Marriage of Figaro",
        composer: "Wolfgang Amadeus Mozart",
        year: 1786,
        plot: "The valet Figaro and maid Susanna prepare for their wedding, but the licentious Count Almaviva desires Susanna. Through a series of comic intrigues and disguises, order is restored and true love wins out.",
        characters: "Figaro, Susanna, Count Almaviva, Countess, Cherubino, Marcellina"
    },
    {
        title: "The Flying Dutchman",
        composer: "Richard Wagner",
        year: 1843,
        plot: "The cursed Flying Dutchman, condemned to sail the seas forever, seeks redemption through love. He meets Senta, who believes she can save him, but the curse proves too powerful.",
        characters: "The Flying Dutchman, Senta, Erik, Daland, Mary, Helmsman"
    },
    {
        title: "Lohengrin",
        composer: "Richard Wagner",
        year: 1850,
        plot: "A mysterious knight appears to defend Elsa of Brabant in trial by combat. Though they fall in love and marry, Elsa breaks her promise not to ask his name, causing the knight to leave and Elsa to die of grief.",
        characters: "Lohengrin, Elsa, Telramund, Ortrud, King Henry, Gottfried"
    },
    {
        title: "The Ring Cycle - Das Rheingold",
        composer: "Richard Wagner",
        year: 1869,
        plot: "The Rhinemaidens guard a magical gold that grants power to whoever forges it into a ring. The dwarf Alberich steals the gold, and the gods pursue him to claim the precious ring.",
        characters: "Alberich, Wotan, Fricka, Freia, Loge, Rhinemaidens"
    },
    {
        title: "Tristan and Isolde",
        composer: "Richard Wagner",
        year: 1865,
        plot: "The warrior Tristan escorts the Irish princess Isolde to her betrothed. A magic potion causes them to fall passionately in love, leading to forbidden romance and tragic death.",
        characters: "Tristan, Isolde, King Mark, Kurwenal, Brangäne, Melot"
    },
    {
        title: "The Twilight of the Gods",
        composer: "Richard Wagner",
        year: 1876,
        plot: "The final part of the Ring Cycle: Siegfried retrieves the ring and gives it to Brünnhilde. Betrayal leads to Siegfried's death, Brünnhilde sacrifices herself, and Götterdämmerung (Twilight of the Gods) begins.",
        characters: "Siegfried, Brünnhilde, Gunther, Gutrune, Hagen, Rhinemaidens"
    },
    {
        title: "Faust",
        composer: "Charles Gounod",
        year: 1859,
        plot: "The aged scholar Faust makes a deal with Mephistopheles: if he can find a moment so perfect he wishes it to last, Mephistopheles can have his soul. Faust seduces the innocent Marguerite, with tragic results.",
        characters: "Faust, Méphistophélès, Marguerite, Valentin, Siebel, Martha"
    },
    {
        title: "Madame Butterfly",
        composer: "Giacomo Puccini",
        year: 1904,
        plot: "Cio-Cio-San, a young Japanese geisha, marries an American naval officer. He abandons her, and she gives up her son. Years later, he returns with an American wife to claim the boy, leading Butterfly to take her own life.",
        characters: "Cio-Cio-San, Pinkerton, Suzuki, Sharpless, The Bonze, Kate Pinkerton"
    },
    {
        title: "Il Trovatore",
        composer: "Giuseppe Verdi",
        year: 1853,
        plot: "A gypsy woman is wrongly executed by the Count di Luna for witchcraft. Her son Manrico becomes a rebel against the Count. The Count falls in love with Leonora, creating a complex love triangle and tragic ending.",
        characters: "Manrico, Leonora, Count di Luna, Azucena, Ferrando, Ines"
    },
    {
        title: "The Tempest",
        composer: "Various",
        year: 1612,
        plot: "An opera based on Shakespeare's play: the sorcerer Prospero uses magic to shipwreck his usurping brother on an island. Through supernatural intervention, he restores his daughter Miranda to her rightful place.",
        characters: "Prospero, Miranda, Ariel, Caliban, Antonio, Alonso"
    }
];
