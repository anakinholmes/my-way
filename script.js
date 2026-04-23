/**
 * History Explorer — script.js
 *
 * Picks a random history section from the data array and renders
 * it into the card on the page.  A new random section is shown each
 * time the "Show Another Section" button is clicked.
 */

const historyData = [
  {
    era: "Ancient History",
    title: "The Rise of Ancient Egypt",
    period: "c. 3100 – 30 BCE",
    region: "Northeast Africa (Nile Valley)",
    body: "Ancient Egypt was one of the world's earliest and longest-lasting civilizations, flourishing along the fertile banks of the Nile River for more than three thousand years. Unified around 3100 BCE under the legendary Pharaoh Menes, Egypt developed a sophisticated culture featuring monumental architecture, a complex writing system (hieroglyphics), and a rich religious tradition centered on a vast pantheon of gods. The Pharaoh was considered both a divine ruler and the intermediary between the gods and humanity.",
    facts: [
      "The Great Pyramid of Giza, built around 2560 BCE, is the only surviving wonder of the ancient world.",
      "Ancient Egyptians developed one of the first 365-day solar calendars.",
      "They pioneered advances in medicine, mathematics, and engineering.",
      "The Rosetta Stone (196 BCE) was the key to deciphering hieroglyphics in the 19th century.",
      "Cleopatra VII (69–30 BCE) was the last active ruler of the Ptolemaic Kingdom of Egypt."
    ],
    quote: "Man fears Time, yet Time fears the Pyramids.",
    quoteAuthor: "— Arab proverb"
  },
  {
    era: "Classical Antiquity",
    title: "The Golden Age of Athens",
    period: "c. 480 – 404 BCE",
    region: "Greece (Attica)",
    body: "Following the Greek victories against Persia at Marathon and Salamis, Athens entered a remarkable period of intellectual, artistic, and political achievement under the statesman Pericles. Democracy was expanded, the Parthenon was constructed on the Acropolis, and Athenian thinkers laid the foundations for Western philosophy, drama, and science. Playwrights like Sophocles and Aristophanes, philosophers like Socrates and Plato, and the historian Thucydides all flourished in this era.",
    facts: [
      "The Athenian assembly (ekklesia) allowed all male citizens to vote on laws — a radical idea at the time.",
      "The Parthenon was completed in 438 BCE and housed a massive gold-and-ivory statue of Athena.",
      "Socrates wrote nothing himself; his ideas survive through the dialogues written by his student Plato.",
      "The Peloponnesian War (431–404 BCE) between Athens and Sparta ultimately ended the golden age.",
      "Athens established the world's first known jury system for criminal trials."
    ],
    quote: "The secret of happiness is freedom, and the secret of freedom is courage.",
    quoteAuthor: "— Thucydides"
  },
  {
    era: "Classical Antiquity",
    title: "The Roman Republic and Its Fall",
    period: "509 – 27 BCE",
    region: "Mediterranean world (centered on Italy)",
    body: "Rome began as a small city-state on the Tiber River and grew into a republic governed by elected magistrates and a powerful Senate. Over five centuries, Roman legions conquered the Italian peninsula, Carthage, Greece, and vast swathes of Europe and the Near East. Yet the very success of Roman arms created destabilizing social pressures: land inequality, the rise of powerful warlords, and a series of civil wars that culminated in Julius Caesar's crossing of the Rubicon in 49 BCE and his assassination on the Ides of March, 44 BCE.",
    facts: [
      "Roman law, including the Twelve Tables (450 BCE), forms the basis of many modern legal systems.",
      "At its height, the Roman Republic fielded armies of over 300,000 soldiers.",
      "Julius Caesar reformed the calendar in 46 BCE, producing the Julian calendar still used as a base today.",
      "The phrase 'crossing the Rubicon' derives from Caesar's fateful act of leading an army into Italy.",
      "Augustus Caesar became the first Roman Emperor in 27 BCE, ending five centuries of republican rule."
    ],
    quote: "I came, I saw, I conquered.",
    quoteAuthor: "— Julius Caesar (Veni, Vidi, Vici)"
  },
  {
    era: "Medieval Period",
    title: "The Viking Age",
    period: "c. 793 – 1066 CE",
    region: "Scandinavia, North Atlantic, Europe",
    body: "From their Scandinavian homelands, Norse warriors, traders, and explorers — collectively known as Vikings — sailed the seas of Europe, the North Atlantic, and beyond. Their longships, masterpieces of craftsmanship, could navigate both open oceans and shallow rivers. Vikings raided monasteries from Ireland to Russia, founded Dublin and Kyiv, traded as far as Constantinople and Baghdad, and reached North America almost 500 years before Columbus, establishing a settlement at L'Anse aux Meadows in Newfoundland around 1000 CE.",
    facts: [
      "The word 'Viking' may derive from the Old Norse word 'vík', meaning a bay or creek.",
      "Viking longships could be carried overland between rivers, making them devastatingly mobile.",
      "Leif Eriksson reached North America around 1000 CE, calling it Vinland.",
      "The Runic alphabet (Elder Futhark) was used for writing, carving messages on stones and objects.",
      "The end of the Viking Age is often marked by the Battle of Hastings in 1066 CE."
    ],
    quote: "Cattle die, kinsmen die, the self must also die; but glory never dies, for the man who is able to achieve it.",
    quoteAuthor: "— Hávamál (Words of the High One), Norse poem"
  },
  {
    era: "Medieval Period",
    title: "The Black Death",
    period: "1347 – 1351 CE",
    region: "Eurasia and North Africa",
    body: "The Black Death was the deadliest pandemic in recorded human history, killing an estimated 30–60% of Europe's population within four years. Caused by the bacterium Yersinia pestis, it swept westward from Central Asia along trade routes, arriving in Sicily in October 1347. Cities were overwhelmed; bodies piled in streets; flagellant groups marched through towns whipping themselves in penance. The catastrophe fundamentally reshaped medieval European society — labor became scarce, feudal bonds weakened, and new cultural attitudes toward mortality and individual worth began to emerge.",
    facts: [
      "Between 75 and 200 million people died across Eurasia in the mid-14th century.",
      "Some European cities lost over half their populations in a single year.",
      "The plague reached England in 1348 and killed around a third of its population.",
      "Labor shortages after the plague gave surviving peasants greater bargaining power.",
      "The pandemic spurred advancements in public health — Venice introduced the world's first quarantine system in 1377."
    ],
    quote: "How many valiant men, how many fair ladies, breakfast with their kinfolk and the same night supped with their ancestors in the next world!",
    quoteAuthor: "— Giovanni Boccaccio, The Decameron (1353)"
  },
  {
    era: "Early Modern Period",
    title: "The Renaissance",
    period: "14th – 17th century CE",
    region: "Italy, then all of Europe",
    body: "The Renaissance (French for 'rebirth') was a fervent cultural and intellectual movement that began in the Italian city-states and spread throughout Europe. Inspired by the rediscovery of classical Greek and Roman texts, Renaissance thinkers promoted humanism — placing human experience, reason, and potential at the center of inquiry. Artists like Leonardo da Vinci and Michelangelo achieved breathtaking levels of naturalism; scientists like Copernicus and Galileo began overturning medieval cosmology; writers like Dante, Petrarch, and Shakespeare transformed literature.",
    facts: [
      "Leonardo da Vinci's notebooks contain designs for flying machines, armored vehicles, and solar power — centuries ahead of their time.",
      "Michelangelo painted the Sistine Chapel ceiling (1508–1512) while lying on his back on scaffolding.",
      "Gutenberg's printing press (~1450) allowed Renaissance ideas to spread rapidly across Europe.",
      "Nicolaus Copernicus proposed a heliocentric model of the solar system in 1543.",
      "The Renaissance saw the rise of perspective in painting, transforming how artists depicted space and depth."
    ],
    quote: "The greatest deception men suffer is from their own opinions.",
    quoteAuthor: "— Leonardo da Vinci"
  },
  {
    era: "Early Modern Period",
    title: "The Age of Exploration",
    period: "15th – 17th century CE",
    region: "Global (Europe, Americas, Africa, Asia)",
    body: "Driven by a hunger for trade routes, wealth, and Christian missionary zeal, European powers — chiefly Portugal, Spain, England, France, and the Netherlands — launched a wave of maritime exploration that permanently altered the world. Portuguese sailors charted the African coast and reached India; Christopher Columbus reached the Americas in 1492; Ferdinand Magellan's expedition circumnavigated the globe (1519–1522). The resulting 'Columbian Exchange' of crops, animals, diseases, and people between hemispheres had profound and often catastrophic effects on indigenous populations.",
    facts: [
      "Columbus's 1492 voyage opened contact between Europe and the Americas, though Norse explorers had arrived centuries earlier.",
      "The Columbian Exchange introduced potatoes, tomatoes, and maize to Europe — transforming diets worldwide.",
      "An estimated 90% of indigenous Americans died from diseases brought by Europeans within a century of contact.",
      "Vasco da Gama's sea route to India (1498) broke the Ottoman monopoly on the spice trade.",
      "The Treaty of Tordesillas (1494) divided the non-European world between Spain and Portugal."
    ],
    quote: "By prevailing over all obstacles and distractions, one may unfailingly arrive at his chosen goal or destination.",
    quoteAuthor: "— Christopher Columbus"
  },
  {
    era: "Early Modern Period",
    title: "The Scientific Revolution",
    period: "16th – 18th century CE",
    region: "Europe",
    body: "The Scientific Revolution transformed humanity's understanding of nature through systematic observation, experimentation, and mathematical reasoning. Copernicus, Kepler, and Galileo overturned the Earth-centered model of the cosmos; William Harvey described blood circulation; Isaac Newton unified terrestrial and celestial mechanics with his laws of motion and universal gravitation. The revolution established the modern scientific method and laid foundations for every scientific discipline that followed.",
    facts: [
      "Isaac Newton's Principia Mathematica (1687) is considered one of the most important books in the history of science.",
      "Galileo was placed under house arrest by the Inquisition for supporting the heliocentric model.",
      "The invention of the telescope (1608) and microscope (~1590) opened two previously invisible worlds.",
      "Francis Bacon championed empiricism and inductive reasoning as the basis of scientific knowledge.",
      "René Descartes' analytical geometry merged algebra and geometry, enabling calculus and modern physics."
    ],
    quote: "If I have seen further, it is by standing on the shoulders of giants.",
    quoteAuthor: "— Isaac Newton"
  },
  {
    era: "Modern Period",
    title: "The French Revolution",
    period: "1789 – 1799 CE",
    region: "France (and reverberations across Europe)",
    body: "The French Revolution dismantled the ancien régime — the monarchy, nobility, and Church — and established ideals of liberty, equality, and popular sovereignty that continue to shape democratic thought worldwide. Beginning with financial crisis and popular anger, it moved through the storming of the Bastille in 1789, the Declaration of the Rights of Man, the execution of King Louis XVI, and the Reign of Terror under Robespierre, before ending with Napoleon Bonaparte's coup in 1799. The Revolution exported its ideas — and its wars — across Europe.",
    facts: [
      "The Bastille fortress, symbol of royal tyranny, was stormed on July 14, 1789 — now France's national holiday.",
      "The Declaration of the Rights of Man and of the Citizen (1789) was a landmark in human rights history.",
      "The Reign of Terror (1793–1794) saw approximately 17,000 official executions and 40,000 deaths in total.",
      "The metric system was introduced by the revolutionary government to rationalize weights and measures.",
      "Napoleon Bonaparte rose to power partly because he was seen as a stabilizing force after the chaos of the Revolution."
    ],
    quote: "Liberty, Equality, Fraternity.",
    quoteAuthor: "— Motto of the French Revolution"
  },
  {
    era: "Modern Period",
    title: "The Industrial Revolution",
    period: "c. 1760 – 1840 CE",
    region: "Britain, then Western Europe and North America",
    body: "The Industrial Revolution transformed agrarian, hand-craft economies into ones dominated by industry and machine manufacturing. Beginning in Britain with textile mills, steam engines, and iron foundries, it spread rapidly across Europe and North America. Factories drew workers from the countryside into rapidly growing cities; railways and steamships shrank distances; mass production made goods affordable that had previously been luxuries. The revolution also brought grim working conditions, child labor, and urban squalor — sparking early labor movements and socialist thought.",
    facts: [
      "James Watt's improved steam engine (1769) became the prime mover of the Industrial Revolution.",
      "By 1850, more people in Britain lived in cities than in the countryside — a first in history.",
      "The Luddite movement (1811–1816) saw textile workers smash machinery threatening their livelihoods.",
      "Child labor was common; children as young as five worked in coal mines and textile factories.",
      "The first public railway using steam locomotives opened between Stockton and Darlington, England, in 1825."
    ],
    quote: "It was the best of times, it was the worst of times.",
    quoteAuthor: "— Charles Dickens, A Tale of Two Cities (1859)"
  },
  {
    era: "Modern Period",
    title: "World War I",
    period: "1914 – 1918 CE",
    region: "Europe, Middle East, Africa, and beyond",
    body: "Called 'The Great War' by those who lived through it, World War I was triggered by the assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo in June 1914. A web of alliances drew the major European powers into a conflict unlike any before: industrialized slaughter in the trenches of the Western Front, poison gas, aerial bombing, and submarine warfare. Over 17 million people died. The war ended four empires — the Ottoman, Austro-Hungarian, Russian, and German — and its harsh peace terms at Versailles sowed the seeds for World War II.",
    facts: [
      "The assassination of Archduke Franz Ferdinand on June 28, 1914, set off the chain of events leading to war.",
      "An estimated 17 million people died — military and civilian — making it one of the deadliest conflicts ever.",
      "The Western Front's trenches stretched around 640 km from Belgium to Switzerland.",
      "The Battle of the Somme (1916) saw 57,000 British casualties on the first day alone.",
      "The Treaty of Versailles (1919) imposed heavy reparations on Germany, contributing to economic collapse."
    ],
    quote: "In Flanders fields the poppies blow, between the crosses, row on row.",
    quoteAuthor: "— Lt. Col. John McCrae, 'In Flanders Fields' (1915)"
  },
  {
    era: "Modern Period",
    title: "World War II",
    period: "1939 – 1945 CE",
    region: "Global",
    body: "World War II was the most destructive conflict in human history, involving more than 30 countries and resulting in between 70 and 85 million deaths — the majority of them civilians. It was fought on multiple fronts: the blitzkrieg across Europe, the brutal campaign on the Eastern Front, naval battles in the Atlantic, and island-hopping in the Pacific. The Holocaust — Nazi Germany's systematic murder of six million Jews and millions of others — stands as one of history's greatest crimes. The war ended with atomic bombs dropped on Hiroshima and Nagasaki and the founding of the United Nations.",
    facts: [
      "The Holocaust killed approximately 6 million Jewish people and 5–6 million others including Roma, disabled people, and political prisoners.",
      "The Soviet Union suffered the greatest losses — an estimated 27 million deaths.",
      "D-Day (June 6, 1944) saw the largest seaborne invasion in history with over 156,000 Allied troops landing in Normandy.",
      "The atomic bombings of Hiroshima (Aug 6) and Nagasaki (Aug 9) in 1945 killed 130,000–226,000 people.",
      "The United Nations was founded in October 1945 to prevent future world wars."
    ],
    quote: "Never in the field of human conflict was so much owed by so many to so few.",
    quoteAuthor: "— Winston Churchill, speech to the House of Commons, August 20, 1940"
  },
  {
    era: "Cold War Era",
    title: "The Space Race",
    period: "1957 – 1969 CE",
    region: "United States and Soviet Union (global significance)",
    body: "The Space Race was a 20th-century competition between the United States and the Soviet Union for supremacy in spaceflight capability. It began when the Soviets launched Sputnik — the first artificial Earth satellite — on October 4, 1957, shocking the West. The Soviets sent the first human, Yuri Gagarin, to orbit Earth in 1961. The Americans responded with NASA's Apollo program. On July 20, 1969, Apollo 11 astronaut Neil Armstrong became the first human to walk on the Moon, fulfilling President Kennedy's 1961 pledge.",
    facts: [
      "Sputnik's launch in October 1957 shocked Americans and triggered the creation of NASA in 1958.",
      "Yuri Gagarin became the first human in space on April 12, 1961 — a date now celebrated as World Space Day.",
      "Neil Armstrong's first words on the Moon: 'That's one small step for [a] man, one giant leap for mankind.'",
      "The Apollo program employed more than 400,000 engineers, scientists, and technicians at its peak.",
      "The Space Race spurred technologies now used in GPS, satellite communications, memory foam, and scratch-resistant lenses."
    ],
    quote: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.",
    quoteAuthor: "— President John F. Kennedy, Rice University, September 12, 1962"
  },
  {
    era: "Cold War Era",
    title: "The Civil Rights Movement (USA)",
    period: "1954 – 1968 CE",
    region: "United States",
    body: "The American Civil Rights Movement was a decades-long struggle by Black Americans and their allies to end institutionalized racial discrimination, disenfranchisement, and segregation. Key milestones included the Supreme Court's desegregation ruling in Brown v. Board of Education (1954), the Montgomery Bus Boycott (1955–56), sit-ins at Greensboro lunch counters (1960), the March on Washington (1963) at which Dr. Martin Luther King Jr. delivered his 'I Have a Dream' speech, and the passage of the Civil Rights Act of 1964 and Voting Rights Act of 1965.",
    facts: [
      "Rosa Parks refused to give up her seat to a white passenger on December 1, 1955, sparking the Montgomery Bus Boycott.",
      "The 381-day boycott of Montgomery's bus system was a pivotal early victory and elevated Rev. Martin Luther King Jr.",
      "The March on Washington (August 28, 1963) drew approximately 250,000 people.",
      "The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin.",
      "Dr. Martin Luther King Jr. was assassinated in Memphis, Tennessee, on April 4, 1968."
    ],
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    quoteAuthor: "— Dr. Martin Luther King Jr., Washington D.C., August 28, 1963"
  },
  {
    era: "Contemporary History",
    title: "The Fall of the Berlin Wall",
    period: "November 9, 1989",
    region: "Berlin, Germany (global significance)",
    body: "The Berlin Wall, erected in August 1961 by East Germany to prevent its citizens from fleeing to the West, became the most potent symbol of the Cold War division of Europe. On the evening of November 9, 1989, an East German government spokesman announced — in a garbled live broadcast — that citizens could cross the border immediately. Crowds gathered at the Wall, guards stood down, and jubilant Berliners began dismantling it with hammers and pickaxes. The fall set in motion the reunification of Germany and the collapse of communist regimes across Eastern Europe.",
    facts: [
      "The Wall stretched 155 km around West Berlin, with a 'death strip' patrolled by guards with shoot-to-kill orders.",
      "At least 140 people died attempting to cross the Berlin Wall between 1961 and 1989.",
      "The announcement on November 9 was unplanned — the spokesman had misread his briefing notes.",
      "Germany was officially reunified on October 3, 1990 — less than a year after the Wall fell.",
      "The fall of the Wall is often cited as the symbolic end of the Cold War."
    ],
    quote: "Tear down this wall!",
    quoteAuthor: "— President Ronald Reagan, Brandenburg Gate, West Berlin, June 12, 1987"
  },
  {
    era: "Ancient History",
    title: "The Silk Road",
    period: "c. 130 BCE – 1453 CE",
    region: "Asia, Middle East, Europe, Africa",
    body: "The Silk Road was not a single road but a vast network of trade routes connecting China, Central Asia, South Asia, the Middle East, East Africa, and Europe. Named for the lucrative Chinese silk that flowed westward, it also carried spices, glassware, paper, gunpowder, and ideas — including Buddhism, Islam, and later the plague. The routes enabled remarkable cultural exchange: Chinese silk for Roman gold, Indian mathematics for Middle Eastern astronomy, and eventually the paper and printing technology that would fuel the Renaissance.",
    facts: [
      "The Silk Road got its name from the profitable silk trade — though the term was coined only in 1877 by a German geographer.",
      "Buddhism spread from India to China and East Asia largely along Silk Road trade networks.",
      "Marco Polo's journey to China (1271–1295) re-energized European interest in the Far East.",
      "The Silk Road was a vector for the Black Death, which traveled from Central Asia westward along its routes.",
      "The Ottoman conquest of Constantinople (1453) disrupted overland trade routes, spurring European sea exploration."
    ],
    quote: "The road is always better than the inn.",
    quoteAuthor: "— Miguel de Cervantes"
  }
];

let currentIndex = null;

/**
 * Returns a random index different from the current one,
 * ensuring a fresh section is shown each time.
 */
function getRandomIndex() {
  if (historyData.length === 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * historyData.length);
  } while (idx === currentIndex);
  return idx;
}

/**
 * Renders the history section at the given index into the card.
 */
function renderSection(index) {
  const section = historyData[index];

  document.getElementById('card-era').textContent    = section.era;
  document.getElementById('card-title').textContent  = section.title;
  document.getElementById('card-period').textContent = section.period;
  document.getElementById('card-region').textContent = section.region;
  document.getElementById('card-body').textContent   = section.body;

  // Key facts
  const factsList = document.getElementById('facts-list');
  factsList.innerHTML = '';
  section.facts.forEach(function (fact) {
    const li = document.createElement('li');
    li.textContent = fact;
    factsList.appendChild(li);
  });

  // Quote (optional)
  const quoteWrapper = document.getElementById('card-quote-wrapper');
  if (section.quote) {
    document.getElementById('card-quote').textContent       = section.quote;
    document.getElementById('card-quote-author').textContent = section.quoteAuthor || '';
    quoteWrapper.removeAttribute('hidden');
  } else {
    quoteWrapper.setAttribute('hidden', '');
  }

  // Counter (index only; total is set once on init)
  document.getElementById('current-index').textContent = index + 1;

  // Re-trigger the fade-in animation by cloning the card
  const card = document.getElementById('history-card');
  card.style.animation = 'none';
  // Force reflow before restoring animation
  void card.offsetWidth;
  card.style.animation = '';

  currentIndex = index;
}

/**
 * Shows a new random history section.
 */
function showRandom() {
  const idx = getRandomIndex();
  renderSection(idx);
}

// Initial render
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('total-count').textContent = historyData.length;
  showRandom();
  document.getElementById('btn-random').addEventListener('click', showRandom);
});
