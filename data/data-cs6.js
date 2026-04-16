'use strict';

// data-cs6.js — Craft & Structure, 30 questions
// WiC ×5, Precise Word ×5, Main Purpose ×4, Structure ×3, Function ×5, Cross-Text ×8
// IDs: cs_c_181–cs_c_210  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_CS6 = [

  // ── WiC (5) ───────────────────────────────────────────────────────────────

  {
    id: 'cs_c_181', num: 181, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Thomas Hardy\'s 1874 novel Far from the Madding Crowd.\n\nGabriel Oak had no hope, and he had no particular wish. He had simply accepted the position — that of a man with no prospects who loved a woman with many; and the only feeling left to him was a kind of mechanical fidelity to a custom of his own nature.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "fidelity" most nearly mean?',
    choices: { A: 'the accuracy of a sound reproduction system', B: 'faithfulness or loyalty to a person, cause, or obligation', C: 'a legal obligation arising from a formal contract', D: 'the precision of a scientific measurement' },
    answer: 'B', isSPR: false,
    explanation: '"Mechanical fidelity to a custom of his own nature" — Oak\'s feeling is a persistent loyalty to his own characteristic way of being, operating like a habit. B correctly identifies fidelity as faithfulness or loyalty. A ("sound reproduction accuracy") and D ("scientific precision") are technical meanings inapplicable to emotional contexts. C ("legal obligation") implies external compulsion — Oak\'s fidelity is described as internal and natural.',
  },

  {
    id: 'cs_c_182', num: 182, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Leo Tolstoy\'s 1877 novel Anna Karenina, translated from Russian.\n\nAll happy families are alike; each unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys\' house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "intrigue" most nearly mean?',
    choices: { A: 'a complex political conspiracy', B: 'a secret romantic or sexual relationship', C: 'a feeling of fascinated curiosity', D: 'a formal diplomatic arrangement' },
    answer: 'B', isSPR: false,
    explanation: '"Carrying on an intrigue with a French girl" — the context makes clear this is a secret romantic or sexual affair; the wife discovering it and the household falling into confusion confirms its nature. B correctly identifies intrigue as a secret romantic/sexual relationship. A ("political conspiracy") requires a political context. C ("fascinated curiosity") is the verb meaning of "intrigue" but not the noun meaning used here. D ("diplomatic arrangement") has no contextual support.',
  },

  {
    id: 'cs_c_183', num: 183, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Langston Hughes\'s 1926 poem "The Weary Blues."\n\nDroning a drowsy syncopated tune,\nRocking back and forth to a mellow croon,\nI heard a Negro play.\nDown on Lenox Avenue the other night\nBy the pale dull pallor of an old gas light',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "croon" most nearly mean?',
    choices: { A: 'a sharp, bright musical tone', B: 'a soft, low murmuring or humming sound', C: 'a rapid, energetic melody', D: 'a formal musical composition' },
    answer: 'B', isSPR: false,
    explanation: '"Mellow croon" — the atmosphere of the poem is drowsy, rocking, dim. A croon fits this sensory register as a soft, low sound. B correctly identifies croon as a soft, low murmuring. A ("sharp, bright tone") contradicts the drowsy, mellow atmosphere. C ("rapid, energetic melody") contradicts "rocking back and forth" and "drowsy." D ("formal composition") is unrelated to the informal street setting.',
  },

  {
    id: 'cs_c_184', num: 184, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Ursula K. Le Guin\'s 1969 science fiction novel The Left Hand of Darkness.\n\nI had come to the end of my rope. My heart was very low. I had failed in the Treaty. I had been made a fool of, and had made a fool of myself. I sat in my room and felt bad.\n\nI had nothing to do but wait. Waiting is a trap.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the phrase "come to the end of my rope" most nearly mean?',
    choices: { A: 'to have reached the conclusion of a formal agreement', B: 'to have exhausted all available options or patience; to be at one\'s limit', C: 'to have physically reached the boundary of a confined space', D: 'to have successfully completed a long and difficult task' },
    answer: 'B', isSPR: false,
    explanation: '"Come to the end of my rope" is an idiom for having exhausted one\'s options or tolerance. The context — failed treaty, made a fool of, heart very low — confirms that the narrator has reached their limit. B correctly identifies the idiomatic meaning. A ("formal agreement") misreads "rope" literally as a contractual term. C ("physical boundary") takes the idiom literally. D ("completed a task") is the opposite of what the phrase means — it signals failure and exhaustion, not completion.',
  },

  {
    id: 'cs_c_185', num: 185, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Dostoevsky\'s 1869 novel The Idiot, translated from Russian.\n\nFor the first time in his life, Prince Myshkin felt a sudden desire to be ruthless. Not cruel — ruthless; the distinction mattered to him considerably. Cruelty was willful, a thing cultivated; but ruthlessness was purity, the capacity to follow a truth all the way to its conclusion without flinching.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "ruthless" most nearly mean?',
    choices: { A: 'having no compassion or mercy for others', B: 'proceeding without hesitation to a logical conclusion regardless of emotional cost', C: 'acting out of deliberate malice toward others', D: 'lacking the emotional capacity to feel empathy' },
    answer: 'B', isSPR: false,
    explanation: 'The passage explicitly distinguishes ruthlessness from cruelty: cruelty is willful and cultivated, while ruthlessness is "purity — following truth all the way to its conclusion without flinching." B correctly captures the passage\'s specific definition of ruthlessness as unflinching commitment to logical consequence. A ("no compassion") is the common meaning but the passage explicitly distinguishes ruthlessness from a negative quality. C ("deliberate malice") is the definition of cruelty as the passage uses it. D ("lacking empathy") describes a psychological state not equivalent to the "following truth to conclusion" definition.',
  },


  // ── Precise Word (5) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_186', num: 186, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The chameleon\'s color changes are not primarily for camouflage, as is commonly believed, but for communication: males _______ bright patterns when competing with rivals or courting females, while the more muted coloration often seen is a resting, non-signaling state.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'conceal', B: 'display', C: 'acquire', D: 'erase' },
    answer: 'B', isSPR: false,
    explanation: '"Display" most precisely names what chameleons do with bright patterns: they show them off as social signals. "Conceal" is the opposite — camouflage, which the passage says is not the primary function. "Acquire" implies obtaining the colors from outside. "Erase" implies removing the pattern.',
  },

  {
    id: 'cs_c_187', num: 187, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Archaeological evidence indicates that the Bronze Age collapse around 1200 BCE was not caused by a single factor but by _______ pressures — climate change, disruption of trade routes, migration of the Sea Peoples, and internal social instability — that interacted and amplified one another.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'independent', B: 'converging', C: 'opposing', D: 'imaginary' },
    answer: 'B', isSPR: false,
    explanation: '"Converging" most precisely captures the multi-factor model described: separate pressures coming together and interacting. "Independent" would imply the factors had no relation to one another — but the passage says they "interacted and amplified one another." "Opposing" implies the factors worked against each other. "Imaginary" implies they were not real.',
  },

  {
    id: 'cs_c_188', num: 188, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Despite producing fewer than fifty paintings in her lifetime, Vermeer achieved a level of technical _______ in his depictions of light falling across interior spaces that has never been surpassed — his works are studied by painters today with as much intensity as they were in the seventeenth century.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'conformity', B: 'mastery', C: 'recognition', D: 'ambition' },
    answer: 'B', isSPR: false,
    explanation: '"Mastery" most precisely captures the superlative quality described — a level of technical achievement that has never been surpassed. "Conformity" implies adherence to rules rather than excellence. "Recognition" refers to reputation, not technical achievement. "Ambition" describes motivation rather than attained quality.',
  },

  {
    id: 'cs_c_189', num: 189, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The historian\'s account of the French Revolution is _______ rather than national in scope: rather than focusing on events in Paris, she traces how revolutionary ideas spread, were adapted, and were contested in provincial towns, colonial territories, and neighboring states.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'economic', B: 'transnational', C: 'personal', D: 'military' },
    answer: 'B', isSPR: false,
    explanation: '"Transnational" most precisely captures the scope described: across provincial territories, colonial holdings, and neighboring states — beyond the national frame. "Economic" describes a thematic focus, not geographic scope. "Personal" implies focus on individuals rather than geographic breadth. "Military" describes a thematic focus on warfare.',
  },

  {
    id: 'cs_c_190', num: 190, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The cognitive bias known as the "curse of knowledge" makes it difficult for experts to _______ the perspective of novices: having internalized a domain so thoroughly, experts cannot easily reconstruct what it was like not to know what they know, leading them to systematically underestimate the difficulty of concepts for beginners.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'dismiss', B: 'adopt', C: 'justify', D: 'demonstrate' },
    answer: 'B', isSPR: false,
    explanation: '"Adopt" most precisely names what the curse of knowledge prevents: experts cannot take on or inhabit the perspective of novices. "Dismiss" implies experts consciously ignore the novice perspective — but the curse of knowledge is an involuntary cognitive failure, not a choice. "Justify" implies experts are defending the novice perspective. "Demonstrate" implies experts are showing their own perspective to novices.',
  },


  // ── Main Purpose (4) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_191', num: 191, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Mary Wollstonecraft\'s 1792 A Vindication of the Rights of Woman.\n\nWomen are told from their infancy, and taught by the example of their mothers, that a little knowledge of human weakness, justly termed cunning, softness of temper, outward obedience, and a scrupulous attention to a puerile kind of propriety, will obtain for them the protection of man; and should they be beautiful, every thing else is needless, for, at least, twenty years of their lives.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To celebrate the social skills that women develop through their upbringing',
      B: 'To criticize the education women receive, which teaches them to cultivate superficial traits to secure male protection rather than developing genuine knowledge and character',
      C: 'To argue that beauty is the most important attribute for women in the eighteenth century',
      D: 'To describe the curriculum of typical schools for girls in Wollstonecraft\'s time',
    },
    answer: 'B', isSPR: false,
    explanation: 'Wollstonecraft characterizes what women are taught — cunning, softness, obedience, puerile propriety — with critical language ("justly termed cunning," "puerile") and identifies the goal as securing male "protection," not genuine development. B correctly identifies this as a critique of women\'s education. A claims she celebrates these traits — her language is dismissive. C claims she argues beauty is most important — she is describing what society teaches, not endorsing it. D says she describes a school curriculum — she is making a normative argument, not a descriptive survey.',
  },

  {
    id: 'cs_c_192', num: 192, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The Fermi Paradox asks: given the vastness of the universe, the abundance of potentially habitable planets, and the age of the cosmos, why have we found no evidence of intelligent extraterrestrial life? Physicist Enrico Fermi famously posed this question in 1950 as a simple lunch-table observation: "Where is everybody?" The proposed resolutions range from the sobering — life is vanishingly rare, or intelligence reliably destroys itself before achieving interstellar capability — to the unsettling — intelligent civilizations exist but have chosen to avoid contact, or we have already been observed without our knowledge.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that intelligent extraterrestrial life almost certainly does not exist',
      B: 'To introduce the Fermi Paradox and present a range of resolutions from grim to unsettling',
      C: 'To explain why Enrico Fermi believed alien civilizations had already visited Earth',
      D: 'To demonstrate that the search for extraterrestrial intelligence is scientifically futile',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures both components: introduce the paradox (why no evidence given a universe full of potential life?) and present the resolution range (rare life / self-destruction on the sobering end; avoidance / observation on the unsettling end). A argues for non-existence — the passage presents this as one resolution, not the conclusion. C claims Fermi believed aliens visited Earth — the text presents no such belief. D argues the search is futile — the passage does not make this evaluative claim.',
  },

  {
    id: 'cs_c_193', num: 193, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Virginia Woolf\'s 1927 novel To the Lighthouse.\n\nShe was not inventing; she was only trying to smooth out something she had been given years ago folded up; something she had seen. For in the rough and tumble of daily life, with all its trades and professions, she had kept it in her mind, this drawing together, this coherence, that the moment the pans were taken from the oven, and the fish would be brought in, and the candles lit, it would all come true, all come true, all come true.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of this passage?',
    choices: {
      A: 'To describe Mrs. Ramsay\'s practical preparations for a dinner party',
      B: 'To portray Mrs. Ramsay\'s inner effort to bring into reality a long-held vision of harmony and coherence',
      C: 'To contrast the busy external world of work with the tranquility of domestic life',
      D: 'To argue that social gatherings are the primary means by which meaning is created in everyday life',
    },
    answer: 'B', isSPR: false,
    explanation: 'Woolf\'s passage focuses on Mrs. Ramsay\'s interior state — not inventing, but unfolding something seen and held. The dinner is the occasion through which she hopes the long-held vision of "drawing together" and "coherence" will be realized. B correctly identifies this as an interior portrait of effort to make a vision real. A focuses on practical preparations — the passage is about inner vision, not logistics. C claims a contrast between public and domestic worlds — the passage is not comparative in this way. D makes an argumentative claim about social gatherings — the passage is not propositional.',
  },

  {
    id: 'cs_c_194', num: 194, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Cognitive linguist George Lakoff argued that abstract thought is fundamentally metaphorical — that we understand concepts like time, argument, and causation through concrete embodied metaphors drawn from physical experience. "Time is money" (time can be spent, saved, wasted), "argument is war" (positions are defended, opponents are attacked), and "causation is force" (pushing, blocking, sending) are not rhetorical ornaments but cognitive structures through which these concepts are constituted. On this view, conceptual metaphor is not decorative — it is the architecture of thought itself.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that people use too many metaphors in everyday speech and should prefer literal language',
      B: 'To present Lakoff\'s theory that abstract cognition is structured by embodied metaphors drawn from physical experience, not merely expressed by them',
      C: 'To demonstrate that "time is money" and "argument is war" are culturally specific metaphors that vary across languages',
      D: 'To introduce the field of cognitive linguistics as an alternative to generative grammar',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures the two-part purpose: introduce the theory (abstract thought is structured by embodied metaphor) and specify its claim (metaphors constitute concepts rather than merely expressing them). A inverts Lakoff\'s argument — he says metaphors are the architecture of thought, not excessive ornaments to be pruned. C claims cultural specificity and cross-linguistic variation — the passage does not make this claim. D introduces cognitive linguistics broadly — the passage is specifically about conceptual metaphor theory.',
  },


  // ── Structure (3) ─────────────────────────────────────────────────────────

  {
    id: 'cs_c_195', num: 195, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Hurricanes form over warm ocean water when sea surface temperatures exceed about 26°C. Warm, moist air rises rapidly, creating a low-pressure area at the surface that pulls in more air. As the rising air cools, moisture condenses into clouds and rain, releasing heat that further intensifies the updraft. The Coriolis effect causes the whole system to rotate — counterclockwise in the Northern Hemisphere, clockwise in the Southern.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It states the conditions for hurricane formation and then describes the step-by-step physical processes by which a hurricane develops and rotates.',
      B: 'It argues that rising ocean temperatures are causing hurricanes to become more frequent and intense.',
      C: 'It compares hurricane formation in the Northern and Southern Hemispheres to show fundamental differences between them.',
      D: 'It defines what a hurricane is and contrasts it with other storm types.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the structure: prerequisite conditions (warm ocean water, 26°C threshold) then step-by-step formation process (warm air rises, low pressure pulls in more air, condensation releases heat, Coriolis rotation). B introduces a climate change argument the passage does not make. C focuses on the hemispheric rotation difference — mentioned only briefly at the end, not the organizing structure. D defines and contrasts storm types — no other storm types are mentioned.',
  },

  {
    id: 'cs_c_196', num: 196, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Thomas Paine\'s 1776 pamphlet Common Sense.\n\nSociety in every state is a blessing, but Government, even in its best state, is but a necessary evil; in its worst state an intolerable one. For when we suffer, or are exposed to the same miseries by a government, which we might expect in a country without government, our calamity is heightened by reflecting that we furnish the means by which we suffer.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It distinguishes society from government, characterizes government as a necessary evil, and specifies the worst case by noting the irony of government-caused harm.',
      B: 'It argues that all governments are tyrannical and should be abolished in favor of natural society.',
      C: 'It presents the history of political philosophy from ancient times to the modern era.',
      D: 'It compares the British government with the ideal of self-governance to advocate for American independence.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: distinction (society vs. government), characterization (government as necessary evil), and specification of the worst case (the irony of suffering from the government one funds). B says Paine calls for abolishing government — he calls it "necessary," not something to be eliminated. C presents a historical survey — Paine is making a normative argument. D introduces American independence as the topic — the passage is a general philosophical statement, not a specific comparison with Britain.',
  },

  {
    id: 'cs_c_197', num: 197, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Biologists studying epigenetics have found that experiences — diet, stress, environmental exposures — can alter gene expression by adding chemical marks to the genome without changing the underlying DNA sequence. Most intriguing are findings suggesting these marks can sometimes be inherited: the experiences of one generation may alter gene expression in the next, even in offspring who never had those experiences. These findings have been challenged on methodological grounds, and the mechanisms of intergenerational epigenetic inheritance in mammals remain poorly understood. Some researchers caution that the field\'s popular reception has run far ahead of what the evidence actually supports.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It introduces epigenetics, highlights the most striking potential finding, and then qualifies its certainty with methodological and evidential caveats.',
      B: 'It argues that intergenerational epigenetic inheritance is the most important finding in modern biology.',
      C: 'It presents competing theories of inheritance and argues that epigenetics provides the most complete explanation.',
      D: 'It traces the history of epigenetics research from its origins to its current controversies.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the structure: introduce epigenetics, highlight the most striking finding (intergenerational inheritance), then qualify with methodological challenges and caution about the evidence. B claims advocacy for importance — the passage presents both interest and caution. C describes a competition between theories — the passage describes a field and its uncertainties, not competing theories of inheritance. D traces a history — the passage describes the field\'s current state and uncertainty, not a chronological development.',
  },


  // ── Function of Underlined (5) ────────────────────────────────────────────

  {
    id: 'cs_c_198', num: 198, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Isaac Newton\'s theory of universal gravitation explained a remarkably wide range of phenomena — the falling of an apple, the orbits of the planets, the motion of the Moon — using a single mathematical law. The theory was so successful that for over two centuries, Newton\'s mechanics were considered the definitive account of the physical world. Then in 1915, Einstein\'s general theory of relativity revealed that Newtonian gravity was an approximation — accurate enough for most purposes but incomplete at very high masses, very high speeds, or very precise measurements.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Then in 1915, Einstein\'s general theory of relativity revealed that Newtonian gravity was an approximation — accurate enough for most purposes but incomplete at very high masses, very high speeds, or very precise measurements.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides the historical background that explains why Newton developed his gravitational theory.',
      B: 'It complicates the picture of Newtonian success by showing the conditions under which it breaks down.',
      C: 'It introduces general relativity as a topic the following text will explore in detail.',
      D: 'It argues that Einstein\'s theory is more important than Newton\'s.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences describe Newton\'s remarkable success. The underlined sentence then qualifies that success: the theory is accurate enough for most purposes but breaks down at extremes. B correctly identifies this as a complication. A says it provides background for Newton\'s development — it describes Einstein\'s revision of Newton. C says it introduces a topic to be explored — it is the concluding sentence of the passage. D claims advocacy for Einstein over Newton — the sentence presents a factual revision, not a value judgment.',
  },

  {
    id: 'cs_c_199', num: 199, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Researchers studying language evolution have found that all known human languages share certain universal properties — they all use nouns and verbs, all distinguish questions from statements, all have devices for negation and for referring to absent objects. The presence of these universals has been taken as evidence for a biologically innate "language faculty." Yet the same universals could also be explained by cognitive and communicative pressures that would constrain any communication system serving human social needs.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Yet the same universals could also be explained by cognitive and communicative pressures that would constrain any communication system serving human social needs.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides an example of a language universal not mentioned in the prior sentences.',
      B: 'It introduces an alternative explanation for the universals that does not require an innate language faculty.',
      C: 'It argues that the innate language faculty hypothesis has been definitively disproven.',
      D: 'It summarizes the main argument of the entire passage.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences describe universals and note they have been taken as evidence for an innate language faculty. The underlined sentence opens with "yet" — signaling an alternative — and proposes that cognitive and communicative pressures could also explain the same universals without invoking innateness. B correctly identifies this as an alternative explanation. A says it provides an additional example — it provides an alternative explanation. C says the innate faculty hypothesis is disproven — the sentence says "could also be explained," which is a competing hypothesis, not a disproof. D says it summarizes the main argument — it introduces a complication, not a summary.',
  },

  {
    id: 'cs_c_200', num: 200, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Zora Neale Hurston\'s 1942 memoir Dust Tracks on a Road.\n\nI was glad when somebody told me, "You may go and collect Negro folklore." In a way it would not be a new experience for me. When I pitched headforemost into the world I landed in the crib of negroism. From the earliest rocking of my cradle, I had known about the capers Brer Rabbit is apt to pull off.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'When I pitched headforemost into the world I landed in the crib of negroism.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides a literal description of Hurston\'s birth and childhood home.',
      B: 'It uses a vivid metaphor to establish that Black folk culture was Hurston\'s native environment from birth.',
      C: 'It introduces a contrast between Hurston\'s childhood and her adult scholarly career.',
      D: 'It explains why Hurston was chosen to collect folklore rather than other researchers.',
    },
    answer: 'B', isSPR: false,
    explanation: '"Pitched headforemost into the world" and "landed in the crib of negroism" are metaphors — she was immersed in Black folk culture from the very beginning of her life. B correctly identifies this as a metaphor establishing nativeness. A says it is a literal birth description — the "crib of negroism" is clearly metaphorical, not a literal birthplace. C says it introduces a contrast between childhood and adult career — the sentence is not contrastive; it supports the claim that folklore collection would not be new. D explains why she was chosen — the sentence is about her personal background, not an institutional selection process.',
  },

  {
    id: 'cs_c_201', num: 201, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Frederick Douglass\'s 1852 speech "What to the Slave Is the Fourth of July?"\n\nFellow-citizens, pardon me, allow me to ask, why am I called upon to speak here to-day? What have I, or those I represent, to do with your national independence? Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us? and am I, therefore, called upon to bring our humble offering to the national altar, and to confess the benefits and express devout gratitude for the blessings resulting from your independence to us?',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us?',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It celebrates the Declaration of Independence as a universal document applicable to all people',
      B: 'It is the central question of the passage — challenging the audience to confront whether the Declaration\'s principles actually apply to enslaved people',
      C: 'It provides a legal argument for the immediate abolition of slavery',
      D: 'It explains why Douglass feels honored to speak at the Fourth of July celebration',
    },
    answer: 'B', isSPR: false,
    explanation: 'The entire passage is structured as a series of rhetorical questions challenging the audience about their invitation to Douglass. The underlined question is the sharpest and most fundamental: have the principles of freedom and justice been extended to the enslaved? This is the question on which the speech\'s whole indictment hinges. B correctly identifies this as the central challenge. A says it celebrates the Declaration as universal — Douglass is questioning whether it is in practice. C claims a legal argument for abolition — the question is rhetorical and moral, not legal. D says it expresses honor — the rhetorical questions throughout are skeptical, not grateful.',
  },

  {
    id: 'cs_c_202', num: 202, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'In behavioral economics, the "endowment effect" describes the tendency for people to value an object more highly once they own it than they did before acquiring it. In a classic experiment, participants randomly assigned a coffee mug demanded significantly more money to sell it than participants who did not receive the mug were willing to pay to buy it — even though both groups had identical access to information about the mug\'s market value. Standard economic theory predicts no such asymmetry: rational actors should value an object the same whether or not they own it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Standard economic theory predicts no such asymmetry: rational actors should value an object the same whether or not they own it.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It summarizes the main conclusion of the behavioral economics experiment.',
      B: 'It establishes the theoretical baseline that the experimental result violates, clarifying why the endowment effect is surprising.',
      C: 'It introduces a competing explanation for why mug owners demanded more money.',
      D: 'It argues that standard economic theory is more accurate than behavioral economics.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The experiment describes the endowment effect. The underlined sentence specifies why this is surprising: standard economic theory predicts no ownership-based asymmetry. Without this baseline, the experiment\'s result might not seem anomalous. B correctly identifies this as establishing the theoretical expectation the result violates. A says it summarizes the experiment — it introduces the competing theoretical expectation. C says it introduces a competing explanation — it describes the baseline prediction that was violated. D argues for standard theory\'s accuracy — it describes what standard theory predicts, not an advocacy claim.',
  },


  // ── Cross-Text (8) ────────────────────────────────────────────────────────

  {
    id: 'cs_c_203', num: 203, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nThe following text is from Henry David Thoreau\'s 1854 work Walden.\n\nI went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.',
    dualText: 'Text 2\n\nThe following text is from Jack Kerouac\'s 1957 novel On the Road.\n\nthe only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a difference in the approach each speaker takes to the goal of living fully?',
    choices: {
      A: 'Thoreau seeks fullness through deliberate stripping away and confronting essentials; Kerouac\'s speaker celebrates fullness through explosive, boundless engagement with everything.',
      B: 'Thoreau seeks fullness in nature; Kerouac\'s speaker seeks it in urban settings.',
      C: 'Both seek fullness through solitude, but Thoreau prefers the countryside while Kerouac prefers the road.',
      D: 'Thoreau is indifferent to other people; Kerouac\'s speaker is interested only in social connections.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Thoreau\'s method is deliberate, focused, selective — front only the essential facts. Kerouac\'s speaker celebrates the mad ones who want everything at once and burn without restraint. A correctly contrasts disciplined essentiality with explosive totality. B introduces an urban/rural distinction — Text 2 doesn\'t specify an urban setting. C claims both seek solitude — Kerouac\'s speaker is celebrating social connection with the mad ones. D claims Thoreau is indifferent to others — Walden includes significant social reflection.',
  },

  {
    id: 'cs_c_204', num: 204, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nMicrobiologists studying the human gut microbiome have found that diet is the most significant factor shaping the composition of gut microbial communities. Studies of people who shift from plant-based to animal-based diets — and vice versa — show measurable changes in microbiome composition within just a few days.',
    dualText: 'Text 2\n\nA 2022 study published in Cell found that fermented foods — including yogurt, kimchi, kombucha, and kefir — increase microbiome diversity more effectively than high-fiber diets. Participants on a high-fermented-food diet for 10 weeks showed significantly greater increases in microbiome diversity than those on a high-fiber diet, and lower levels of inflammatory proteins.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how does the finding in Text 2 relate to the claim in Text 1?',
    choices: {
      A: 'It refutes Text 1 by showing that diet has no effect on microbiome composition',
      B: 'It supports Text 1\'s general claim that diet shapes the microbiome while adding specificity about which dietary approach is most effective',
      C: 'It contradicts Text 1 by showing that supplements rather than food produce the greatest microbiome changes',
      D: 'It confirms Text 1 by showing that all dietary changes produce identical effects on the microbiome',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 1 establishes that diet shapes the microbiome. Text 2 compares two types of diet (fermented foods vs. high-fiber) and finds fermented foods more effective — this supports the general diet claim while adding a more specific finding. B correctly captures this additive relationship. A says Text 2 refutes Text 1 — it confirms diet matters. C says supplements produce greater changes — Text 2 discusses food, not supplements. D says all dietary changes produce identical effects — Text 2 explicitly shows different effects from different diets.',
  },

  {
    id: 'cs_c_205', num: 205, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nSociologist Erving Goffman argued that stigma is not an attribute of the person but a relational property: an attribute is stigmatizing only in relation to a particular social context and audience. A visible disability is stigmatizing in a society that defines normalcy in particular ways; in a different social context, the same attribute might carry no stigma at all.',
    dualText: 'Text 2\n\nSociologist Randall Collins challenged Goffman\'s relational framing by noting that the distribution of stigmatized attributes is not random — certain characteristics (visible disability, race, poverty) are consistently and cross-culturally associated with stigma, regardless of the specific social context. This suggests that some attributes carry stigma not merely through relational construction but through social structures that systematically disadvantage particular kinds of difference.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Collins most likely respond to Goffman\'s claim?',
    choices: {
      A: 'By agreeing that stigma is entirely relational while arguing that some societies construct it more harmfully than others',
      B: 'By arguing that the relational framing captures individual encounters but misses the structural patterns that make certain attributes consistently stigmatized across contexts',
      C: 'By rejecting the concept of stigma entirely as too vague to be analytically useful',
      D: 'By supporting Goffman\'s claim and extending it to argue that stigma could be eliminated by changing social norms',
    },
    answer: 'B', isSPR: false,
    explanation: 'Collins accepts that stigma operates relationally at the individual encounter level but argues that certain attributes are cross-culturally and consistently stigmatized — suggesting structural patterns beyond mere relational construction. B correctly captures this: accepting the relational frame for individual encounters while pointing to structural patterns that transcend it. A agrees stigma is entirely relational — Collins challenges this by noting cross-cultural patterns. C rejects the concept — Collins engages with it and refines it. D supports Goffman and extends to norm change — Collins is challenging, not extending.',
  },

  {
    id: 'cs_c_206', num: 206, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nThe following text is from Charlotte Perkins Gilman\'s 1892 story "The Yellow Wallpaper."\n\nJohn laughs at me, of course, but one expects that in marriage. And what can one do? If a physician of high standing, and one\'s own husband, assures friends and relatives that there is really nothing the matter with one — but temporary nervous depression — a slight hysterical tendency — what is one to do?',
    dualText: 'Text 2\n\nThe following text is from Kate Chopin\'s 1899 novel The Awakening.\n\nEdna had attempted all summer to learn to swim. She had received instructions from both the men and the women; in some instances from the children. Robert had pursued a system of lessons almost daily; and he was nearly at the point of discouragement in realizing the futility of his efforts. A short, firm stroke was the end of her struggle with the sea. And who could tell how much she owed to the two sturdy arms for their guidance and their strength.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes how the female characters in Text 1 and Text 2 relate to the guidance of others?',
    choices: {
      A: 'The narrator in Text 1 is constrained by and unable to act against others\' authority; Edna in Text 2 ultimately achieves independence through patient acceptance of others\' guidance.',
      B: 'Both characters ultimately reject external authority and act entirely on their own terms.',
      C: 'The narrator in Text 1 questions but remains trapped by the authority of her husband and physician; Edna in Text 2 receives instruction from many but achieves her goal on her own in a short, decisive moment.',
      D: 'Both characters are portrayed as incompetent and dependent on male authority figures.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The narrator of Text 1 asks helplessly "what can one do?" — she questions the authority but remains trapped by it. Edna in Text 2 receives instruction from many sources all summer, but the breakthrough ("short, firm stroke") is hers. C correctly captures both: constrained questioning in Text 1, and received-then-transcended instruction in Text 2. A says Edna accepts guidance — the text suggests the final success was her own stroke. B says both reject authority — the Text 1 narrator is unable to act against authority. D says both are portrayed as incompetent and dependent — Edna achieves the goal; neither is portrayed as permanently incompetent.',
  },

  {
    id: 'cs_c_207', num: 207, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nPhilosopher John Rawls proposed the "veil of ignorance" as a thought experiment for deriving principles of justice: imagine choosing the rules of society without knowing what position you will occupy in it — your class, race, gender, or natural talent. From behind this veil, Rawls argued, rational persons would choose principles protecting the worst-off members of society, since they might end up in that position.',
    dualText: 'Text 2\n\nPhilosopher Robert Nozick challenged the Rawlsian framework by arguing that it treats existing holdings as if they require justification from a neutral standpoint — as if we begin from a state of collective ownership. But people have entitlements arising from their own choices and efforts, and a just distribution is simply one that arose through just processes, not one that satisfies any patterned principle of outcome. Taxing some people\'s labor to benefit others — even the worst-off — violates individual rights regardless of what a veil-of-ignorance exercise would prescribe.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, what is the core disagreement between Rawls and Nozick?',
    choices: {
      A: 'Whether philosophy should address distributive justice or confine itself to questions of individual rights',
      B: 'Whether redistribution in favor of the worst-off members of society is just, with Rawls defending it as what rational agents behind a veil would choose and Nozick rejecting it as a violation of individual entitlements',
      C: 'Whether the veil of ignorance is practically possible as a thought experiment',
      D: 'Whether natural talents are morally arbitrary and therefore should not determine one\'s life prospects',
    },
    answer: 'B', isSPR: false,
    explanation: 'Rawls argues that rational agents behind the veil would choose to protect the worst-off — justifying redistribution. Nozick argues that redistribution violates individual entitlements that arise from just processes, regardless of what the veil prescribes. B correctly identifies this as the core dispute. A frames it as a disciplinary scope question — both philosophers address distributive justice. C says the dispute is about practical possibility — both engage the framework; Nozick disputes its implications. D identifies the moral arbitrariness of talent — this is one of Rawls\'s premises, but Nozick\'s challenge is about entitlements and process, not about whether Rawls\'s premise is correct.',
  },

  {
    id: 'cs_c_208', num: 208, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from W.E.B. Du Bois\'s 1903 essay collection The Souls of Black Folk.\n\nThe problem of the twentieth century is the problem of the color-line — the relation of the darker to the lighter races of men in Asia and Africa, in America and the islands of the sea.',
    dualText: 'Text 2\n\nThe following text is from Frantz Fanon\'s 1952 work Black Skin, White Masks, translated from French.\n\nI am not a prisoner of History. I should not seek there for the meaning of my destiny. I should constantly remind myself that the real leap consists in introducing invention into existence. In the world through which I travel, I am endlessly creating myself.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a difference in emphasis between Du Bois in Text 1 and Fanon in Text 2?',
    choices: {
      A: 'Du Bois emphasizes a collective, structural problem defined by race; Fanon emphasizes individual self-creation and freedom from historical determination.',
      B: 'Du Bois focuses on the future; Fanon focuses on the past.',
      C: 'Both writers argue that racial identity is fixed and unchangeable.',
      D: 'Du Bois addresses global racism; Fanon addresses only colonial contexts in Africa.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Du Bois identifies the color-line as a structural, collective problem defining the century — a macroscopic racial reality. Fanon insists he is not a prisoner of History and is "endlessly creating myself" — an existential emphasis on individual invention and self-determination beyond historical constraint. A correctly contrasts collective structural framing with individual existential emphasis. B says Du Bois focuses on the future — he identifies a present century-defining problem. C says both argue racial identity is fixed — Fanon explicitly rejects this through self-creation. D limits Fanon to African colonial contexts — his statement is philosophical and universal.',
  },

  {
    id: 'cs_c_209', num: 209, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nNeuroscientist Stanislas Dehaene proposed the Global Workspace Theory of consciousness: consciousness arises when neural signals are broadcast widely across the brain through a "global workspace," integrating information from specialized processing areas and making it available for flexible, reportable use. Unconscious processing occurs in specialized modules; consciousness occurs when a signal wins the competition for access to the global workspace and is broadcast widely.',
    dualText: 'Text 2\n\nNeuroscientist Giulio Tononi proposed Integrated Information Theory (IIT): consciousness is identical to integrated information — the extent to which a system forms more than the sum of its parts, measured by a quantity called phi (Φ). Any system with high Φ — including, potentially, non-neural systems — is conscious to that degree. IIT predicts that consciousness can exist without reportability and that the cerebellum, despite containing most of the brain\'s neurons, is largely unconscious because its architecture limits integration.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, which statement reflects a disagreement between Dehaene\'s and Tononi\'s theories?',
    choices: {
      A: 'Whether consciousness involves specialized neural processing modules',
      B: 'Whether consciousness can exist without being globally broadcast and reportable',
      C: 'Whether the brain is the only organ capable of generating conscious experience',
      D: 'Whether unconscious processing takes place in the human brain',
    },
    answer: 'B', isSPR: false,
    explanation: 'Global Workspace Theory requires consciousness to be broadcast widely and reportable — that\'s the definition of access to the global workspace. IIT explicitly states consciousness can exist without reportability and that a high-Φ non-neural system could be conscious. B correctly identifies the key disagreement about reportability and broadcast. A says the dispute is about specialized modules — both theories acknowledge specialized processing. C says the dispute is about whether the brain is the only organ — GWT addresses the brain; IIT predicts non-neural systems can be conscious, but GWT doesn\'t explicitly claim brains are the only source. D says the dispute is about unconscious processing — both theories acknowledge it exists.',
  },

  {
    id: 'cs_c_210', num: 210, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nEcologist Garrett Hardin introduced the "tragedy of the commons" in 1968: rational individuals acting in self-interest will deplete a shared resource, even when each knows this is collectively disastrous. Each herder has an incentive to add one more animal to the commons because they receive the full benefit while the cost of overgrazing is shared by all. The rational individual choice produces an irrational collective outcome.',
    dualText: 'Text 2\n\nPolitical economist Elinor Ostrom challenged the tragedy of the commons by documenting hundreds of real cases in which communities successfully managed shared resources — fisheries, pastures, irrigation systems — without privatization or government intervention. Communities developed their own rules, monitoring systems, and graduated sanctions. Ostrom argued that Hardin\'s model assumed no communication and no institutional capacity — conditions rarely met in practice.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Ostrom most likely characterize Hardin\'s model?',
    choices: {
      A: 'As an accurate description of what happens when communities successfully organize to manage shared resources',
      B: 'As a useful theoretical framework that applies universally to all common resource situations',
      C: 'As a model built on unrealistic assumptions about human behavior and institutional capacity that empirical evidence refutes',
      D: 'As an argument for government intervention rather than community self-governance',
    },
    answer: 'C', isSPR: false,
    explanation: 'Ostrom documents successful community management of commons and identifies the assumptions Hardin made that don\'t hold in practice (no communication, no institutional capacity). C correctly captures this: the model rests on unrealistic assumptions that empirical cases refute. A says Ostrom confirms Hardin — the opposite. B says the model applies universally — Ostrom shows it does not when communities have institutional capacity. D claims Hardin argues for government intervention — Hardin\'s solutions include privatization, but Ostrom\'s critique is about the model\'s assumptions, not its policy prescriptions.',
  },

];
