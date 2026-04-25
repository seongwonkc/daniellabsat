'use strict';

// data-ii2.js — Information & Ideas, 30 questions
// Central Ideas ×5, CoE-Text ×5, CoE-Quantitative ×5, Logical Completion ×7, Supporting Evidence ×8
// IDs: ii_c_061–ii_c_090  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_II2 = [

  // ── Central Ideas (5) ─────────────────────────────────────────────────────

  {
    id: 'ii_c_061', num: 61, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Tardigrades, microscopic animals also known as "water bears," are among the most resilient organisms on Earth. They survive extreme dehydration by entering a suspended state called cryptobiosis, in which metabolic activity essentially ceases. In this state, they have withstood temperatures from near absolute zero (−272°C) to over 150°C, pressures six times greater than the deepest ocean trench, radiation doses lethal to most life, and exposure to the vacuum of outer space. When water returns, they revive and resume normal activity within hours.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Tardigrades are the smallest animals currently known to science.',
      B: 'Tardigrades survive extreme conditions by entering cryptobiosis, a state of suspended metabolism that protects them from a remarkably wide range of lethal environments.',
      C: 'Cryptobiosis is a biological mechanism unique to tardigrades and not found in any other animals.',
      D: 'Tardigrades have been sent to outer space as part of experiments testing the limits of biological survival.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies both the mechanism (cryptobiosis, suspended metabolism) and the range of conditions it protects against. A makes a size claim the passage does not support — "microscopic" is not "smallest known." C makes an exclusivity claim the passage does not assert. D mentions outer space as one example but mischaracterizes it as an experiment rather than a condition survived.',
  },

  {
    id: 'ii_c_062', num: 62, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The following text is from Zora Neale Hurston\'s 1942 memoir Dust Tracks on a Road.\n\nI was glad when somebody told me, "You may go and collect Negro folklore." In a way it would not be a new experience for me. When I pitched headforemost into the world I landed in the crib of negroism. From the earliest rocking of my cradle, I had known about the capers Brer Rabbit is apt to pull off. Jake never had a chance to forget the ways of God in Polk County and neither had the other Negroes in that area.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Hurston was reluctant to collect folklore because the work reminded her of a difficult childhood.',
      B: 'Hurston welcomed the assignment to collect folklore because the tradition was already deeply embedded in her upbringing.',
      C: 'Hurston argues that Brer Rabbit stories are the most important form of Black American folklore.',
      D: 'Hurston reflects on the difficulty of preserving folklore traditions in a rapidly changing world.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Hurston says she was "glad" to receive the assignment and frames it as "not a new experience" — she grew up immersed in the folklore she was asked to collect. B correctly captures this. A says she was reluctant — the opposite of "glad." C narrows to Brer Rabbit stories specifically; the passage uses them as one example. D introduces themes of preservation and change the passage does not address.',
  },

  {
    id: 'ii_c_063', num: 63, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Historians studying the Black Death have traditionally estimated that the plague killed approximately one-third of Europe\'s population between 1347 and 1353. More recent scholarship, using improved demographic data from parish records, tax lists, and burial registers, suggests the death toll may have been significantly higher — between 40 and 60 percent in many regions. This upward revision changes not only the scale of the catastrophe but also our understanding of its long-term consequences: greater mortality may explain why the labor shortages that followed led to unusually rapid improvements in wages and living conditions for surviving peasants.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The Black Death was the deadliest pandemic in European history.',
      B: 'New demographic evidence suggests the Black Death was even more deadly than traditionally believed, with implications for understanding its long-term economic effects.',
      C: 'Improved historical records have allowed scholars to accurately determine the death toll of the Black Death for the first time.',
      D: 'Labor shortages caused by the Black Death were the primary driver of economic growth in medieval Europe.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B captures both the new evidence (higher death toll than traditional estimate) and its significance (implications for understanding labor shortages and wage growth). A makes a comparative claim the passage does not make. C overstates — the passage says the new estimates are higher, not that they are now accurate for the first time. D asserts labor shortages as "primary driver of economic growth" — the passage is more cautious, suggesting higher mortality may explain rapid improvements.',
  },

  {
    id: 'ii_c_064', num: 64, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'When architects design for extreme heat, they face a fundamental conflict between the desire for natural light — which occupants prefer and which reduces electricity use — and the need to exclude solar gain, which drives up cooling loads. Traditional responses to this problem in hot climates — deep overhangs, thick walls, courtyard layouts with shaded central spaces — modulate rather than eliminate daylight. Contemporary "smart glass" technologies that dynamically adjust tint in response to sunlight intensity offer a third path: admitting daylight while blocking heat. But their high cost and reliance on electricity to function limit their deployment in contexts where both are scarce.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Smart glass is the most effective solution to the problem of heat and light in architectural design.',
      B: 'Traditional architectural strategies for hot climates are inferior to modern technological approaches.',
      C: 'The tension between admitting natural light and excluding solar heat has produced multiple architectural strategies, each with its own trade-offs.',
      D: 'Architects in hot climates should prioritize reducing electricity use over occupant comfort.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly captures the organizing idea: the fundamental conflict between light and heat has led to multiple strategies — traditional modulation and smart glass — each with limitations. A claims smart glass is most effective; the passage ends by noting its limitations. B claims traditional strategies are inferior; the passage presents them as legitimate responses, not failures. D introduces a priority claim about electricity vs. comfort that the passage does not make.',
  },

  {
    id: 'ii_c_065', num: 65, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Feminist philosopher Sandra Harding challenged the ideal of scientific objectivity by arguing that the demand for a "view from nowhere" — research purged of the researcher\'s social position — actually reinforces existing inequalities rather than transcending them. Because dominant social positions are taken as the unmarked default, research conducted from those positions passes as universal even when it embeds the particular interests and blind spots of those groups. Harding\'s "strong objectivity" calls instead for researchers to acknowledge and analyze their social position as part of the research process — making the standpoint explicit improves, rather than undermines, the objectivity of knowledge.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Harding argues that science is inherently biased and cannot be made objective under any conditions.',
      B: 'Harding challenges the traditional view that objectivity requires a standpoint-free perspective, proposing that explicit acknowledgment of one\'s social position produces stronger objectivity.',
      C: 'Harding proposes that only researchers from marginalized social positions can conduct truly objective research.',
      D: 'The traditional ideal of scientific objectivity is widely rejected by contemporary philosophers of science.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B accurately captures Harding\'s two-part argument: critique of "view from nowhere" objectivity (which embeds dominant standpoints) and the alternative (strong objectivity through explicit standpoint analysis). A overstates — Harding proposes a stronger form of objectivity, not the impossibility of objectivity. C attributes a claim about which researchers can be objective that the passage does not make — Harding argues for standpoint analysis by all researchers. D makes a sociological claim about the field that goes beyond what the passage states.',
  },


  // ── CoE-Text (5) ──────────────────────────────────────────────────────────

  {
    id: 'ii_c_066', num: 66, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Psychologist Mihaly Csikszentmihalyi described "flow" as a state of complete absorption in an activity, characterized by effortless concentration, a sense of control, and the loss of self-consciousness and time awareness. His research found that people consistently reported flow during activities that matched their skill level to the challenge at hand: too easy and they felt bored; too hard and they felt anxious.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which quotation from a student\'s research notes would best illustrate the conditions Csikszentmihalyi described as necessary for flow?',
    choices: {
      A: '"I noticed I felt most absorbed when I was playing chess against someone just slightly better than me — I had to focus hard but I could keep up."',
      B: '"I find I concentrate best when I\'m working completely alone in a quiet room with no distractions."',
      C: '"I lose track of time whenever I listen to music, no matter what I\'m doing at the time."',
      D: '"I feel most in control of my work when I have a clear deadline and a detailed plan."',
    },
    answer: 'A', isSPR: false,
    explanation: 'The passage identifies the key condition for flow as a match between skill and challenge. A directly illustrates this: playing someone "slightly better" creates a challenge that matches but slightly exceeds the student\'s skill level — the exact condition described. B describes environmental factors (solitude, quiet) that the passage does not identify as necessary for flow. C attributes time loss to passive music listening regardless of activity — not tied to skill-challenge balance. D describes control through planning, not the skill-challenge dynamic.',
  },

  {
    id: 'ii_c_067', num: 67, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Biologists studying ant colonies have found that individual ants follow simple local rules — follow pheromone trails, pick up objects when encountering others of the same type, deposit objects in clusters — yet the collective behavior that emerges from these interactions produces sophisticated outcomes: organized foraging routes, structured waste disposal, and the regulation of colony temperature through coordinated fanning. No single ant directs or oversees this process.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the passage\'s claim about how sophisticated colony-level outcomes are produced?',
    choices: {
      A: 'An experiment showing that colonies with larger populations maintain more stable internal temperatures than smaller colonies',
      B: 'An observation that removing the queen from a colony disrupts foraging routes for several weeks',
      C: 'A simulation demonstrating that following only three simple local rules produces foraging patterns indistinguishable from those of real ant colonies',
      D: 'A study finding that worker ants exposed to pheromones from a different species become confused and ineffective',
    },
    answer: 'C', isSPR: false,
    explanation: 'The passage claims sophisticated outcomes emerge from simple local rules without central direction. C directly supports this by showing that just three local rules produce realistic complex foraging patterns — confirming that simplicity generates sophistication. A shows a size effect on temperature regulation but does not address how the outcome is produced. B implies the queen matters for foraging — this suggests central direction, which the passage contradicts. D describes pheromone confusion between species, which is about signal specificity, not about how local rules produce complex outcomes.',
  },

  {
    id: 'ii_c_068', num: 68, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Art historian T.J. Clark argued that the visual disruptions in Édouard Manet\'s paintings — flattened depth, fragmented surfaces, ambiguous spatial relationships — were not technical failures or stylistic experiments but deliberate responses to the specific character of modern urban life. The city, Clark contended, produced a new kind of social fragmentation and surface-level encounter that Manet\'s formal strategies enacted rather than merely represented.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which quotation from a critic\'s analysis would most directly support Clark\'s argument?',
    choices: {
      A: '"Manet\'s technical training at the École des Beaux-Arts was adequate but not exceptional; his innovations likely reflect gaps in classical instruction rather than deliberate choices."',
      B: '"In Manet\'s Bar at the Folies-Bergère, the mirror behind the barmaid reflects a scene spatially impossible given her position — a formal distortion that produces the same disorienting anonymity of a chance urban encounter."',
      C: '"The flat, poster-like quality of Manet\'s later work influenced the development of commercial graphic design more than it influenced subsequent painters."',
      D: '"Manet frequently repainted canvases multiple times, suggesting the visual ambiguities in the final versions may have been unintentional residues of his process."',
    },
    answer: 'B', isSPR: false,
    explanation: 'Clark argues formal disruptions deliberately enact the fragmentation of modern urban life. B supports this by identifying a specific formal impossibility (the mirror reflection) and connecting it to the disorienting anonymity of urban encounter — precisely the connection Clark draws between formal strategy and social content. A contradicts Clark by attributing disruptions to inadequate training. C notes commercial graphic design influence but does not connect formal disruptions to urban social content. D contradicts Clark by suggesting visual ambiguities may be unintentional.',
  },

  {
    id: 'ii_c_069', num: 69, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Economic historian Gregory Clark argued in A Farewell to Alms (2007) that the English Industrial Revolution succeeded where earlier economic expansions had stalled because centuries of selection pressure had gradually changed the behavioral characteristics of the English population. Wealthier, more patient, and more literate individuals left more descendants; their traits — deferred gratification, literacy, numeracy — became more common over generations and ultimately enabled the sustained economic growth that defined industrialization.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly challenge Clark\'s argument?',
    choices: {
      A: 'A study showing that literacy rates in England rose significantly in the century before industrialization',
      B: 'Evidence that industrialization in England spread most rapidly in regions with lower literacy rates than the national average',
      C: 'A finding that wealthy English families had higher average fertility than poor families in the seventeenth and eighteenth centuries',
      D: 'Historical records showing that merchants in pre-industrial England frequently engaged in long-distance trade requiring deferred payment',
    },
    answer: 'B', isSPR: false,
    explanation: 'Clark argues that industrialization succeeded because literacy, numeracy, and deferred gratification had become common in England. B directly challenges this by showing industrialization spread fastest in low-literacy regions — if the spread patterns contradict the predicted relationship between the proposed traits and industrial success, the model is undermined. A supports Clark by confirming rising literacy before industrialization. C supports Clark by confirming wealthy families (who supposedly transmitted the traits) were more reproductively successful. D supports Clark by showing deferred payment (requiring patience) was common among merchants.',
  },

  {
    id: 'ii_c_070', num: 70, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Neuroscientist Lisa Feldman Barrett argues against the classical view that emotions are universal, hardwired programs produced by distinct brain regions. Instead, she proposes that emotions are constructed in the moment by the brain\'s predictive processing system, which integrates sensory information with prior learning and cultural context to produce an emotional experience. On this view, what counts as "fear" or "sadness" is not a fixed biological signal but a concept built from experience — which is why emotional categories differ across cultures and why individuals can learn to experience emotion differently.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support Barrett\'s argument?',
    choices: {
      A: 'Brain imaging studies showing that the amygdala activates during fearful experiences across all tested cultures',
      B: 'Research demonstrating that individuals who grew up in cultures without a lexical category for a specific emotion type report experiencing that emotion less frequently and less distinctly than those with such a category',
      C: 'Studies finding that patients with damage to emotion-processing brain regions lose the ability to express emotions facially but retain emotional experiences internally',
      D: 'Cross-cultural studies confirming that the same six facial expressions are recognized as representing the same emotions in cultures across five continents',
    },
    answer: 'B', isSPR: false,
    explanation: 'Barrett argues emotions are constructed from cultural context and prior learning, not hardwired biological signals. B directly supports this: if the presence of a cultural/linguistic category for an emotion affects how frequently and distinctly it is experienced, that confirms emotions are built from cultural context rather than fixed biological signals. A supports the classical view by showing consistent amygdala activation. C is about expression vs. experience and does not directly address whether emotions are culturally constructed. D supports the classical view of universal emotional expressions.',
  },


  // ── CoE-Quantitative (5) ──────────────────────────────────────────────────

  {
    id: 'ii_c_071', num: 71, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying urban green space conducted a study examining the relationship between the percentage of a city neighborhood covered by tree canopy and residents\' self-reported well-being scores (measured on a 0–100 scale).',
    dualText: null,
    table: 'Canopy Coverage (%) | Mean Well-Being Score | Sample Size\n0–10% | 54.2 | 312\n11–20% | 61.8 | 287\n21–30% | 67.3 | 263\n31–40% | 72.1 | 198\n41%+ | 74.6 | 142',
    notes: null, noteTask: null, underline: null,
    question: 'Which choice most effectively uses data from the table to complete the following statement? "The data suggest a relationship between urban tree canopy and resident well-being, as neighborhoods with more than 40% canopy coverage reported well-being scores _______ those with 10% coverage or less."',
    choices: {
      A: 'nearly identical to',
      B: 'more than 20 points higher than',
      C: 'approximately 15 points lower than',
      D: 'only slightly higher than',
    },
    answer: 'B', isSPR: false,
    explanation: 'The table shows a mean well-being score of 54.2 for 0–10% canopy coverage and 74.6 for 41%+ coverage. The difference is 74.6 − 54.2 = 20.4 points — "more than 20 points higher." B is the only choice consistent with the actual figures. A ("nearly identical") is false — there is a 20-point gap. C ("15 points lower") inverts the relationship. D ("only slightly higher") understates a 20-point difference.',
  },

  {
    id: 'ii_c_072', num: 72, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A historian compiled data on the approximate share of global manufacturing output produced by each of the world\'s major economies in selected years.',
    dualText: null,
    table: 'Country | 1870 | 1913 | 1938 | 1973 | 2020\nUnited Kingdom | 31.8% | 13.6% | 10.7% | 4.9% | 1.8%\nUnited States | 23.3% | 35.8% | 28.7% | 26.4% | 17.6%\nGermany | 13.2% | 14.8% | 12.7% | 5.9% | 6.2%\nChina | 12.5% | 3.6% | 3.1% | 3.9% | 28.7%\nAll others | 19.2% | 32.2% | 44.8% | 58.9% | 45.7%',
    notes: null, noteTask: null, underline: null,
    question: 'Which choice most accurately uses data from the table to complete the following statement? "The most dramatic single-country shift in global manufacturing share between 1870 and 2020 was _______ ."',
    choices: {
      A: 'the decline of Germany from 13.2% to 6.2%',
      B: 'the decline of the United Kingdom from 31.8% to 1.8%',
      C: 'the rise of the United States from 23.3% to 35.8% between 1870 and 1913',
      D: 'the rise of China from 3.6% to 28.7% between 1913 and 2020',
    },
    answer: 'B', isSPR: false,
    explanation: 'The United Kingdom fell from 31.8% to 1.8% — a drop of 30 percentage points across 1870–2020. China rose from 3.6% (its 1913 nadir) to 28.7% in 2020 — a rise of 25.1 points. Germany dropped 7 points. The US rose 12.5 points (peak 1913) then fell. The UK\'s 30-point decline is the largest single-country shift. B is correct. D is the second largest but still smaller. C covers only a short sub-period. A is a modest 7-point shift.',
  },

  {
    id: 'ii_c_073', num: 73, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'A sleep researcher collected data on average nightly sleep duration and next-day cognitive performance scores (measured by standardized tests of attention and memory) across a group of 240 participants over four weeks.',
    dualText: null,
    table: 'Average Nightly Sleep | Attention Score (0–100) | Memory Score (0–100)\nUnder 5 hours | 48.3 | 51.2\n5–6 hours | 61.7 | 63.4\n6–7 hours | 74.2 | 75.8\n7–8 hours | 82.1 | 83.6\nOver 8 hours | 79.4 | 80.1',
    notes: null, noteTask: null, underline: null,
    question: 'A student claims that cognitive performance consistently improves as sleep duration increases. Which choice uses data from the table to most accurately evaluate this claim?',
    choices: {
      A: 'The claim is fully supported: both attention and memory scores increase steadily from under 5 hours to over 8 hours.',
      B: 'The claim is partially supported: performance improves from under 5 hours to the 7–8 hour range, but scores drop slightly above 8 hours.',
      C: 'The claim is unsupported: the data show no consistent relationship between sleep duration and cognitive performance.',
      D: 'The claim is fully supported for memory but unsupported for attention.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Both attention and memory scores increase from under 5 hours (48.3/51.2) through the 7–8 hour range (82.1/83.6), but both drop slightly in the over-8-hours category (79.4/80.1). The claim that performance "consistently improves" is only partially accurate — it is violated at the highest sleep duration. B correctly captures this. A overstates by claiming consistent improvement to over 8 hours. C understates by saying there is no relationship at all. D introduces an attention/memory distinction that the data do not support.',
  },

  {
    id: 'ii_c_074', num: 74, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'A linguist studying code-switching — the practice of alternating between two languages within a single conversation — recorded the frequency of code-switching events per hour for bilingual speakers in different settings.',
    dualText: null,
    table: 'Setting | Language Pair | Code-Switches / Hour\nHome (family) | Spanish–English | 43.2\nHome (family) | Korean–English | 38.7\nWorkplace (colleagues) | Spanish–English | 12.4\nWorkplace (colleagues) | Korean–English | 9.1\nPublic (strangers) | Spanish–English | 3.8\nPublic (strangers) | Korean–English | 2.9',
    notes: null, noteTask: null, underline: null,
    question: 'Which choice most effectively uses data from the table to complete the following statement? "The data suggest that social context exerts a stronger influence on code-switching frequency than language pair, since _______ ."',
    choices: {
      A: 'Spanish–English speakers consistently code-switch more frequently than Korean–English speakers across all settings',
      B: 'code-switching rates for both language pairs drop dramatically from home to public settings, with home rates more than ten times higher than public rates',
      C: 'Korean–English speakers code-switch less frequently in workplace settings than at home',
      D: 'workplace code-switching rates are lower for Korean–English speakers than for Spanish–English speakers',
    },
    answer: 'B', isSPR: false,
    explanation: 'To support the claim that social context has more influence than language pair, the evidence must show that the context effect is larger than the language-pair effect. Home rates (43.2/38.7) are more than 10× higher than public rates (3.8/2.9), regardless of language pair — a massive context effect. Meanwhile, differences between language pairs within the same setting are small (43.2 vs. 38.7 at home; 3.8 vs. 2.9 in public). B correctly uses both the magnitude and consistency of the context effect. A highlights a language-pair difference, which would support the opposite claim. C notes only one pair\'s home-to-workplace shift. D also compares language pairs, not contexts.',
  },

  {
    id: 'ii_c_075', num: 75, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'hard',
    passage: 'A marine biologist studying coral reef health at five sites measured coral cover percentage (the proportion of the reef surface covered by live coral) and the species richness of resident fish populations at each site over a ten-year period.',
    dualText: null,
    table: 'Site | Coral Cover 2013 | Coral Cover 2023 | Fish Species 2013 | Fish Species 2023\nSite A | 58% | 21% | 84 | 47\nSite B | 62% | 59% | 91 | 89\nSite C | 44% | 18% | 67 | 31\nSite D | 71% | 68% | 103 | 98\nSite E | 39% | 12% | 58 | 19',
    notes: null, noteTask: null, underline: null,
    question: 'A researcher argues that coral cover decline is associated with fish species loss, but that the relationship is not perfectly proportional. Which choice uses data from the table to most accurately support this argument?',
    choices: {
      A: 'Site B and Site D both maintained high coral cover and showed minimal fish species loss, while Sites A, C, and E all lost more than 30 percentage points of coral cover and lost between 37 and 67% of their fish species.',
      B: 'All five sites show simultaneous declines in both coral cover and fish species richness between 2013 and 2023.',
      C: 'Site E experienced the largest coral cover decline (27 percentage points) and also the largest absolute fish species loss (39 species).',
      D: 'Sites with lower initial coral cover (Sites C and E) showed greater proportional losses in fish species than sites with higher initial cover.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The argument requires two components: (1) association between coral loss and fish species loss, and (2) imperfect proportionality. A demonstrates both: the sites with high coral maintenance (B and D: change of −3% and −3%) show near-zero fish species loss, while the three declining sites lost 37–67% of fish species — confirming the association. The variation in fish species loss (37% at A, 54% at C, 67% at E) despite broadly similar large coral cover declines confirms the relationship is not perfectly proportional. B establishes only the association, not the imperfect proportionality. C identifies the largest decline at E but doesn\'t demonstrate the full association or the non-proportionality. D compares proportional fish loss across initial-cover groups without demonstrating the imperfect proportionality of the relationship itself.',
  },


  // ── Logical Completion (7) ────────────────────────────────────────────────

  {
    id: 'ii_c_076', num: 76, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Research on human decision-making under uncertainty has consistently shown that people evaluate outcomes in relation to a reference point rather than in absolute terms. A gain of $100 from a starting point of $1,000 is experienced differently from a gain of $100 from a starting point of $500, even though the objective gain is identical. Furthermore, losses are felt more acutely than equivalent gains — losing $100 hurts more than gaining $100 feels good. This means that the way a choice is framed — as a gain or as a loss — significantly influences decisions, even when the underlying options are objectively the same. This phenomenon is called _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'motivated reasoning', B: 'the availability heuristic', C: 'loss aversion and framing effects', D: 'confirmation bias' },
    answer: 'C', isSPR: false,
    explanation: 'The passage describes two related phenomena: losses being felt more acutely than equivalent gains (loss aversion) and framing the same options differently leading to different choices (framing effects). C correctly names both phenomena described. A ("motivated reasoning") involves interpreting information in line with prior beliefs — not described here. B ("availability heuristic") involves judging probability by how easily examples come to mind. D ("confirmation bias") involves seeking information that confirms existing beliefs.',
  },

  {
    id: 'ii_c_077', num: 77, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Ecologists define an invasive species as one introduced outside its native range that spreads aggressively and causes ecological or economic harm. Not all introduced species become invasive — most fail to establish self-sustaining populations. But the small percentage that do can have disproportionate effects: they may prey on native species that have no evolutionary defenses against them, outcompete native species for resources, or disrupt the food web relationships that native ecosystems depend on. The impacts are often irreversible because _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'introduced species typically require human intervention to survive in a new environment',
      B: 'once an invasive species drives a native species to extinction or eliminates its habitat, that species and its ecological relationships cannot be restored',
      C: 'ecologists have not yet developed effective methods for predicting which introduced species will become invasive',
      D: 'economic damage from invasive species runs into billions of dollars annually in the United States alone',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage sets up an explanation of why impacts are "often irreversible." B directly provides this explanation: extinction and habitat loss cannot be undone, making the ecological disruptions permanent. A describes dependency on human intervention — this contradicts the idea that invasive species spread aggressively without help. C identifies a predictive challenge — relevant to management, not to why impacts are irreversible. D provides an economic statistic without explaining the irreversibility.',
  },

  {
    id: 'ii_c_078', num: 78, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Astronomers studying pulsar timing arrays have found slight irregularities in the arrival times of radio pulses from millisecond pulsars — extremely precise natural clocks that rotate hundreds of times per second. These irregularities follow a specific pattern consistent with the background deformation of spacetime caused by gravitational waves at very low frequencies — far lower than those detected by interferometers like LIGO. The source of this gravitational wave background is likely the combined signal from _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'the radiation emitted by neutron stars collapsing into black holes within our galaxy',
      B: 'millions of pairs of supermassive black holes slowly spiraling together in merging galaxies across the universe',
      C: 'the acoustic oscillations from the early universe that also produced the cosmic microwave background',
      D: 'the interference between pulsar signals and interstellar magnetic fields',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes a low-frequency gravitational wave background detected by pulsar timing arrays. The leading astrophysical explanation for this background is the combined signal from billions of supermassive black hole binaries gradually merging across cosmic time — sources that produce very low-frequency gravitational waves at the scale of years to decades. B correctly identifies this. A describes neutron star–black hole collapses, which produce higher-frequency waves detectable by LIGO. C describes cosmic microwave background physics — acoustic oscillations from the early universe, not gravitational waves. D incorrectly attributes the signal to pulsar-magnetic field interaction rather than an extragalactic source.',
  },

  {
    id: 'ii_c_079', num: 79, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'In 1982, sociologists William Julius Wilson and Robert Sampson introduced the concept of "collective efficacy" — the shared belief within a neighborhood community that residents can act together to achieve common goals, particularly around social control. Neighborhoods with high collective efficacy tend to have lower rates of violence even when controlling for poverty and concentrated disadvantage. This finding complicated a simple economic explanation for urban violence: _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'poor neighborhoods consistently experience more violence than wealthy ones, regardless of other social factors',
      B: 'two equally poor neighborhoods can have dramatically different violence rates depending on the strength of their shared social bonds',
      C: 'collective efficacy is difficult to measure because it depends on subjective perceptions of community trust',
      D: 'urban violence declined significantly in American cities throughout the 1990s despite continued poverty',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage says the collective efficacy finding "complicated a simple economic explanation." To complete this logic, the answer must explain what aspect of economic explanations was complicated. B does this: if two equally poor neighborhoods differ in violence due to social cohesion, poverty alone cannot explain violence — the social variable matters independently. A restates economic determinism without complicating it. C raises a measurement problem — methodologically relevant but not the logical completion of the stated complication. D describes a historical trend rather than completing the explanation of why economic accounts are insufficient.',
  },

  {
    id: 'ii_c_080', num: 80, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Computational models of climate systems have grown increasingly accurate at predicting short-term weather events and medium-range seasonal patterns. However, climate scientists note that predicting long-term trajectories involves a fundamentally different challenge than weather forecasting. In weather forecasting, small errors in initial conditions propagate forward and eventually dominate the forecast, placing an inherent ceiling on useful prediction range. In long-term climate projection, by contrast, _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'chaotic sensitivity to initial conditions remains the dominant source of uncertainty',
      B: 'predictions are less dependent on precise initial conditions and more determined by the forcing factors — such as greenhouse gas concentrations — imposed on the system',
      C: 'computer models are less reliable than in weather forecasting due to the greater complexity of the system',
      D: 'scientists rely primarily on historical ice core and sediment data rather than computational modeling',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage contrasts weather forecasting (dominated by sensitive dependence on initial conditions) with long-term climate projection. The logical completion must identify what makes climate projection different from weather forecasting in the relevant respect. B correctly completes the contrast: in climate projection, the forcing factors (greenhouse gas concentrations) dominate, not chaotic initial-condition sensitivity. A would make climate projection identical to weather forecasting — contradicting the "fundamentally different challenge" framing. C claims climate models are less reliable generally — an unsupported comparative judgment. D incorrectly attributes climate projection primarily to historical data rather than models.',
  },

  {
    id: 'ii_c_081', num: 81, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosopher Nelson Goodman posed a thought experiment now known as the "grue paradox." Suppose that emeralds are observed to be green, and we formulate the hypothesis that "all emeralds are green." But consider another property: "grue," which means "green if observed before the year 3000, blue if observed after." All the evidence we currently have is equally consistent with the hypothesis "all emeralds are grue." Goodman used this to argue that the problem of induction is not simply about the quantity of confirming evidence — it is also about _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'the reliability of human perception when observing colored objects under different lighting conditions',
      B: 'the difficulty of distinguishing green and blue in languages with a single color category for both',
      C: 'why the same body of observed evidence can confirm incompatible hypotheses, raising the question of what makes one predicate more "projectible" than another',
      D: 'the impossibility of making any justified predictions about future events based on past observation',
    },
    answer: 'C', isSPR: false,
    explanation: 'The grue paradox shows that the same observations ("this emerald is green") confirm both "all emeralds are green" and "all emeralds are grue" — two incompatible hypotheses about the future. Goodman\'s point is that induction\'s problem is not quantity of evidence but determining which predicates (like "green") are legitimate projections as opposed to artificially constructed ones (like "grue"). C correctly identifies this: the problem is that identical evidence confirms incompatible hypotheses, raising the projectibility question. A introduces perceptual issues about color observation not relevant to Goodman\'s argument. B brings in cross-linguistic color categories — unrelated. D overstates — Goodman shows a specific problem with induction, not that all prediction is impossible.',
  },

  {
    id: 'ii_c_082', num: 82, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Studies of placebo effects in clinical medicine have repeatedly shown that patients who receive inert treatments — sugar pills, saline injections — often show measurable physiological improvements across conditions including pain, Parkinson\'s disease symptoms, and irritable bowel syndrome. These improvements cannot be explained by the pharmacological action of the placebos themselves. Researchers have proposed that placebo effects are mediated by the brain\'s predictive processing mechanisms: the expectation of improvement, combined with ritual elements of treatment, activates real neurochemical processes — including endogenous opioid release — that produce physiological change. This means that the "active ingredient" in many placebo-responsive conditions may be _______ .',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'the chemical composition of the inert substance rather than the expectation associated with taking it',
      B: 'the patient\'s belief system and cultural background rather than any biological mechanism',
      C: 'the expectation of improvement itself and the neurobiological processes it activates',
      D: 'the therapeutic relationship between doctor and patient independent of any neurochemical process',
    },
    answer: 'C', isSPR: false,
    explanation: 'The passage identifies expectation + ritual elements as activating real neurochemical processes (endogenous opioid release). The logical completion is that the "active ingredient" is the expectation itself and the neurobiological response it triggers. C correctly synthesizes this. A attributes activity to the chemical composition of the inert substance — contradicted by the passage\'s statement that pharmacological action cannot explain the effects. B reduces the effect to belief/culture while denying biological mechanism — but the passage specifically identifies neurochemical mediation (opioid release). D invokes the therapeutic relationship but excludes neurochemical processes — the passage explicitly includes them.',
  },


  // ── Supporting Evidence (8) ───────────────────────────────────────────────

  {
    id: 'ii_c_083', num: 83, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Biologists studying bird migration have proposed that some species use Earth\'s magnetic field as a navigational cue — a so-called "magnetic compass." Researchers have found that certain migratory birds have chains of magnetic particles in cells near their beaks, and that disrupting these particles experimentally causes birds to orient incorrectly.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most strengthen the researchers\' conclusion about magnetic navigation?',
    choices: {
      A: 'Birds raised in captivity with no exposure to natural magnetic fields show the same migratory orientation as wild birds.',
      B: 'Birds fitted with tiny magnets that distort the local magnetic field they experience show the same misdirection as birds whose magnetic particles were experimentally disrupted.',
      C: 'The magnetic particles found near birds\' beaks are chemically identical to those found in the navigational systems of sea turtles.',
      D: 'Birds navigate most accurately on clear nights, suggesting they primarily rely on star patterns rather than magnetic fields.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The researchers link magnetic particles to navigation via the disruption experiment. B strengthens this by showing an independent manipulation (artificial magnetic distortion) produces the same misdirection as direct particle disruption — converging evidence that magnetic field sensing drives orientation. A describes captive birds with correct orientation regardless of magnetic exposure — this might suggest magnetic field sensing isn\'t necessary. C establishes cross-species chemical similarity but not functional evidence for navigation. D suggests star navigation is primary, which would weaken the magnetic compass hypothesis.',
  },

  {
    id: 'ii_c_084', num: 84, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Psychologists studying social media use have argued that passive consumption — scrolling through others\' posts without posting or interacting — is associated with lower well-being than active engagement, such as commenting or sending messages. They suggest the mechanism is social comparison: passive consumption exposes users to curated highlights of others\' lives, generating unfavorable self-comparisons, while active engagement creates genuine connection.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the researchers\' proposed mechanism?',
    choices: {
      A: 'Participants who reduce social media use to less than thirty minutes per day report significant improvements in well-being after two weeks.',
      B: 'Passive consumption of social media is more common among users aged 18–24 than among older users.',
      C: 'Participants who report frequent unfavorable comparisons to others\' social media posts show lower well-being scores, with the effect absent among active posters who report feeling connected.',
      D: 'Social media platforms that display post engagement metrics (likes, shares) have higher rates of passive consumption than those that hide metrics.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The proposed mechanism is social comparison during passive use causing lower well-being, while active engagement creates connection instead. C directly tests this mechanism: lower well-being linked to unfavorable comparisons (passive users) vs. absent effect among active posters (connection). This confirms the mechanism. A shows that reducing use improves well-being — consistent with the claim but doesn\'t distinguish active vs. passive use. B establishes demographic patterns but not the mechanism. D describes platform design effects on passive use rates, not the social comparison mechanism.',
  },

  {
    id: 'ii_c_085', num: 85, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Historian Saidiya Hartman argues that the transatlantic slave trade created a lasting form of dispossession she calls "the afterlife of slavery" — the persistence of racial inequality in economic, educational, and civic life long after legal emancipation. She contends that freedom from legal enslavement did not produce substantive equality because the structural conditions that reproduced racial disadvantage — exclusion from property ownership, educational gatekeeping, political disenfranchisement — were largely preserved rather than dismantled.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support Hartman\'s argument?',
    choices: {
      A: 'Studies showing that Black Americans were the primary victims of racially targeted violence during the Reconstruction era',
      B: 'Evidence that formerly enslaved people and their descendants were systematically denied access to Homestead Act land distributions, creating a wealth gap that persists to the present',
      C: 'Historical records documenting that emancipation was implemented at different times in different Confederate states',
      D: 'Data showing that incarceration rates for Black Americans are disproportionately high in states with historically higher rates of enslavement',
    },
    answer: 'B', isSPR: false,
    explanation: 'Hartman argues that structural conditions reproducing racial disadvantage — including exclusion from property ownership — were preserved after emancipation. B provides a direct example: denial of Homestead Act land (property exclusion) created a persistent wealth gap — exactly the structural continuity she describes. A shows racial violence, which is consistent but describes violence rather than the structural reproduction of economic disadvantage. C describes timing of emancipation — relevant to legal history but not Hartman\'s structural argument. D shows present incarceration patterns — consistent but does not directly establish the structural continuity between the slave era and present conditions.',
  },

  {
    id: 'ii_c_086', num: 86, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Materials scientists have developed a new type of self-healing polymer that can repair damage autonomously when exposed to ultraviolet light. In the proposed mechanism, UV irradiation triggers a reversible chemical reaction that reconnects broken polymer chains at the site of damage. The researchers claim the material can fully restore its original tensile strength after fracture within two hours of UV exposure.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most weaken the researchers\' claim?',
    choices: {
      A: 'The material requires UV light with a wavelength of 365 nm to initiate the healing reaction, while standard sunlight contains a broader spectrum.',
      B: 'The polymer maintains its tensile strength after UV exposure in undamaged samples.',
      C: 'Samples that underwent the healing process showed full recovery of tensile strength in laboratory conditions but showed only 40% strength recovery after healing in ambient indoor light.',
      D: 'The reversible chemical reaction responsible for healing has been observed in other polymer systems under similar UV conditions.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The claim is that UV exposure restores original tensile strength after fracture within two hours. C directly weakens this by showing that while laboratory UV conditions produce full recovery, realistic ambient conditions (indoor light) produce only 40% recovery — meaning the claim does not hold under practical conditions. A identifies a wavelength specificity requirement that might limit application, but doesn\'t directly contradict the strength-recovery claim under proper UV conditions. B shows stability of undamaged samples — irrelevant to the healing claim. D shows the mechanism occurs in other systems — this supports rather than weakens the mechanistic claim.',
  },

  {
    id: 'ii_c_087', num: 87, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Economist Raj Chetty has argued that the neighborhood where a child grows up has an independent, causal effect on their long-term economic mobility — above and beyond the effects of their family\'s income or education. He proposes that neighborhood characteristics such as social capital, school quality, and exposure to working adults with stable employment are the active mechanisms. Moving a low-income child to a higher-opportunity neighborhood at a young age, Chetty argues, produces substantially better adult outcomes than moving the same child at a later age.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support Chetty\'s claim about age-at-move effects?',
    choices: {
      A: 'Children who move to high-opportunity neighborhoods at age 9 earn, on average, significantly more in adulthood than identical children who moved at age 14, even when controlling for family income and the destination neighborhood.',
      B: 'High-opportunity neighborhoods are disproportionately located in suburban areas with access to high-quality public transportation.',
      C: 'Children from families with higher incomes are more likely to move to high-opportunity neighborhoods than those from lower-income families.',
      D: 'Long-term exposure to environmental pollutants in low-opportunity neighborhoods is associated with worse health outcomes in adulthood.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Chetty argues that moving at a younger age produces better outcomes than moving later — an age-at-move effect. A directly supports this: children moved at 9 earn more than those moved at 14 despite equivalent family income and destination neighborhood — isolating the age effect. B describes geographic patterns of high-opportunity areas, not age-at-move effects. C describes who moves, not when. D links environmental pollution to health outcomes — relevant to neighborhood effects generally but not the specific age-at-move claim.',
  },

  {
    id: 'ii_c_088', num: 88, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Evolutionary biologists have proposed that altruistic behavior in social species — helping others at cost to oneself — evolved through "kin selection": genes that promote altruism spread because they help copies of themselves in related individuals. William Hamilton formalized this in his rule: altruistic behavior evolves when rB > C, where r is genetic relatedness between helper and recipient, B is the benefit to the recipient, and C is the cost to the helper.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which observation would most directly support Hamilton\'s rule?',
    choices: {
      A: 'Highly altruistic behaviors — such as self-sacrifice — are observed most commonly in contexts where the beneficiary is a full sibling (r = 0.5) rather than a half-sibling (r = 0.25) or an unrelated individual.',
      B: 'Altruistic behavior is observed in species with complex social hierarchies, suggesting that status rather than relatedness drives helping behavior.',
      C: 'Animals that engage in altruistic behavior tend to live longer than those that do not.',
      D: 'Altruistic behavior is more common in warm climates where food scarcity creates strong interdependence among group members.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Hamilton\'s rule predicts that altruism is more likely when genetic relatedness (r) is higher because more of the helper\'s genes are shared with the beneficiary. A directly tests this: the higher rate of self-sacrifice toward full siblings (r = 0.5) vs. half-siblings (r = 0.25) vs. unrelated individuals (r ≈ 0) follows the predicted pattern from the rule (higher r → more likely rB > C). B invokes status rather than relatedness — this challenges kin selection. C suggests altruism benefits helpers\' longevity — irrelevant to kin selection. D invokes climate and food scarcity — ecological factors that don\'t test the relatedness prediction.',
  },

  {
    id: 'ii_c_089', num: 89, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Cognitive scientists studying the "spacing effect" have found that distributing practice over time produces better long-term retention than massing the same amount of practice in a single session. The prevailing explanation is that spaced practice triggers a retrieval process each time a learner returns to material: the effort required to retrieve partially forgotten information strengthens the memory trace more effectively than review when the information is still fresh.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the proposed mechanism?',
    choices: {
      A: 'Students who study in multiple short sessions retain information better than those who study in one long session, even when the total study time is equal.',
      B: 'Students who practice retrieval when recall is moderately difficult — not too easy, not impossible — show greater long-term retention than those who practice retrieval when material is either very fresh or entirely forgotten.',
      C: 'Spacing effects are observed across multiple species, including rats and pigeons, in operant conditioning tasks.',
      D: 'Students who take notes by hand during spaced sessions retain information better than those who type their notes.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The proposed mechanism is that retrieval effort when material is partially forgotten strengthens memory traces. B directly tests this: students who retrieve at moderate difficulty (partial forgetting — the spacing condition) outperform those retrieving when material is very fresh (not forgotten, no retrieval effort) or entirely forgotten (retrieval fails, no strengthening). This tests the "effortful retrieval" mechanism that explains why spacing works. A confirms the spacing effect itself but does not isolate the retrieval-effort mechanism. C shows cross-species generalization — supports the phenomenon\'s generality, not the specific mechanism. D introduces note-taking modality — unrelated to spacing mechanisms.',
  },

  {
    id: 'ii_c_090', num: 90, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Linguist Joan Bybee has argued that frequency of use directly shapes the mental representation of language: words and constructions that are used frequently are stored and processed as holistic chunks, while infrequent forms are computed from rules. This predicts that high-frequency irregular forms (such as "went" for the past tense of "go") are less vulnerable to regularization errors than low-frequency irregular forms (such as "slew" for "slew/slayed").',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support Bybee\'s prediction?',
    choices: {
      A: 'Children acquire the past tense forms of frequent regular verbs before they acquire frequent irregular past tenses.',
      B: 'Language change data show that low-frequency irregular verbs are much more likely to be regularized over centuries than high-frequency ones, regardless of the language family.',
      C: 'Languages with more complex morphological systems tend to have larger inventories of irregular forms.',
      D: 'Adults process high-frequency words faster than low-frequency words in lexical decision tasks, regardless of regularity.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Bybee predicts high-frequency irregular forms are more resistant to regularization than low-frequency ones. B directly tests this prediction across historical language change data: low-frequency irregulars regularize more often than high-frequency ones across language families — exactly the predicted pattern. A describes acquisition order for regular vs. irregular forms — relevant to language learning but not to the frequency-based regularization prediction. C describes inventory size by morphological complexity — unrelated to frequency effects on individual irregular forms. D shows faster processing for high-frequency words generally — supports chunking as a concept but does not test the regularization prediction.',
  },

];
