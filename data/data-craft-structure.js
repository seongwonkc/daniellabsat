'use strict';

// ── Craft & Structure (60 questions) ─────────────────────────────────────────
// 20 easy / 20 medium / 20 hard
//
// Types: Words in Context (12, all literary), Precise/Logical Word (10, academic),
// Main Purpose / Main Idea (10), Overall Structure (8), Function of Underlined (10),
// Cross-Text Connections (10, all 5 relationship types × 2)
//
// WiC: attribution line in passage field; underline field = target word
// Function of Underlined: underline field = underlined sentence verbatim
// Cross-Text: passage = Text 1; dualText = Text 2

// Craft & Structure — Words in Context (12 questions)
// ALWAYS literary: fiction, memoir, autobiography, poetry
// ALWAYS includes attribution line
// Target word: common English word in a non-obvious contextual meaning
// All four choices are valid dictionary definitions; only one fits context
// Difficulty: 4 easy / 4 medium / 4 hard

const CS_WIC = [

  // ── EASY (4) ──────────────────────────────────────────────────────────────

  {
    id: 'cs_c_001', num: 1, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Thomas Hardy\'s 1874 novel Far from the Madding Crowd.\n\nBathsheba was not a woman to be moved by sentiment alone; she required ground for her decisions. The stewardship of Weatherbury Farm was a matter of calculation, not affection, and no passionate argument would sway her unless it rested on something as solid and verifiable as the facts before her. She had made this clear to Boldwood, and she intended to make it equally clear to anyone else who approached her with hope where reason was required.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "ground" most nearly mean?',
    choices: {
      A: 'soil or earth beneath one\'s feet',
      B: 'rational basis or justification',
      C: 'a position or territory to be defended',
      D: 'the area surrounding a large building',
    },
    answer: 'B', isSPR: false,
    explanation: 'In this context, Bathsheba "required ground for her decisions," meaning she required a rational basis or justification — solid reasoning, not emotion. B is correct. A ("soil or earth") is a primary dictionary definition of "ground" but does not fit a sentence about decision-making. C ("territory to be defended") plays on the phrase "stand one\'s ground" but is not supported by the passage\'s focus on reasoning and calculation. D ("area surrounding a building") is another standard meaning of "ground" (as in "grounds of an estate") but is irrelevant to the discussion of how Bathsheba makes decisions.',
  },

  {
    id: 'cs_c_002', num: 2, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Edith Wharton\'s 1905 novel The House of Mirth.\n\nBy the following morning, Lily had nearly persuaded herself that the matter was settled — that she had reached an understanding, if not with the world, then at least with her own conscience. But such quiet conviction had a way of dissolving in daylight, leaving her once again to examine her choices with a clarity she preferred to avoid. The settled feeling never lasted past breakfast.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "settled" most nearly mean?',
    choices: {
      A: 'moved to take up permanent residence somewhere',
      B: 'resolved or decided upon',
      C: 'calm and free from agitation',
      D: 'paid in full, as a financial obligation',
    },
    answer: 'B', isSPR: false,
    explanation: 'In this context, Lily has "nearly persuaded herself that the matter was settled," meaning she has nearly convinced herself that the question has been resolved or decided. B is correct. A ("moved to take up permanent residence") is a common meaning of "settled" but makes no sense in the context of Lily\'s internal deliberation. C ("calm") is plausible and tempting — a settled feeling could sound like calmness — but the passage distinguishes between the sense that a matter has been resolved ("an understanding with her conscience") and the emotional calmness that follows; the word refers to the former. D ("paid in full") is a financial meaning of "settled" that is clearly irrelevant to Lily\'s situation.',
  },

  {
    id: 'cs_c_003', num: 3, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Willa Cather\'s 1918 novel My Ántonia.\n\nThe prairie had a strange power to draw people back, even those who had fled it in their youth. Jim Burden, returning after long years in the city, felt that magnetic pull as the train crossed the open land — something in the flat horizon and the smell of the grass working on him against his will, pulling at a part of himself he had thought safely left behind in childhood.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "draw" most nearly mean?',
    choices: {
      A: 'depict or illustrate with lines',
      B: 'remove or extract from a container',
      C: 'attract or pull toward',
      D: 'reach or arrive at a conclusion',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, the prairie has "a strange power to draw people back," meaning the power to attract or pull them toward it — as reinforced by the phrases "magnetic pull" and "pulling at a part of himself" later in the passage. C is correct. A ("depict with lines") is a common meaning of "draw" but is irrelevant to the prairie\'s effect on people. B ("remove from a container") is another meaning of "draw" (as in drawing water from a well) but does not fit the prairie\'s gravitational pull on people\'s emotions. D ("reach a conclusion") is also a standard use of "draw" (draw conclusions) but is not supported by this passage\'s focus on physical and emotional attraction.',
  },

  {
    id: 'cs_c_004', num: 4, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from W.E.B. Du Bois\'s 1903 essay collection The Souls of Black Folk.\n\nThe problem of the color line is not one that a society can set aside for a more convenient moment. It must be addressed with the same urgency one would bring to any illness threatening the body politic. To address this question fully, Du Bois argued, Americans must first honestly confront what had been sanctioned by their silence and perpetuated by their institutions.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "address" most nearly mean?',
    choices: {
      A: 'speak or deliver remarks to a gathering',
      B: 'write a recipient\'s name and location on a package',
      C: 'deal seriously with or apply oneself to',
      D: 'provide directions to a specific location',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, Du Bois argues that the problem of the color line must be "addressed with the same urgency one would bring to any illness" — meaning dealt with seriously and directly applied to. C is correct. A ("speak to a gathering") is a common meaning of "address" (as in delivering an address), and Du Bois is indeed writing about speaking out, but "address this question" does not mean to deliver a speech to it — it means to engage with it. B ("write a recipient\'s name on a package") is a primary dictionary meaning entirely irrelevant to this context. D ("provide directions") conflates "address" the noun (a location) with the verb form used here.',
  },


  // ── MEDIUM (4) ────────────────────────────────────────────────────────────

  {
    id: 'cs_c_005', num: 5, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Charlotte Brontë\'s 1847 novel Jane Eyre.\n\nMr. Rochester was not handsome in the conventional sense — the face was too dark, the features too blunt. But there was something in his bearing that commanded attention before he spoke a word: an assurance that had nothing to do with wealth or rank, and everything to do with some quality of will that announced itself the moment he entered a room.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "bearing" most nearly mean?',
    choices: {
      A: 'the act of carrying something heavy from one place to another',
      B: 'a mechanical component that reduces friction between moving parts',
      C: 'the way a person holds and carries themselves; their demeanor',
      D: 'a connection or relevance to the matter being discussed',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, Rochester\'s "bearing" is what "commanded attention before he spoke" — it is his manner of carrying himself, his physical presence and demeanor. C is correct. A ("carrying something heavy") is a gerundive use of "bearing" irrelevant to a description of personal presence. B ("a mechanical component") is a technical meaning of "bearing" found in engineering, not applicable here. D ("relevance to a topic") as in "this has no bearing on the matter" — while a valid idiomatic use of "bearing," it does not fit a description of how a person presents himself physically.',
  },

  {
    id: 'cs_c_006', num: 6, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Joseph Conrad\'s 1902 novella Heart of Darkness.\n\nMarlow had traveled far enough into the interior that the last trace of the familiar world had disappeared — no newspapers, no clocks, no sounds connecting him to the life he had known. Only the river remained constant, and even it seemed transformed, moving through the forest with purposes entirely its own.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "trace" most nearly mean?',
    choices: {
      A: 'a line drawn to represent something',
      B: 'a path or route followed by a traveler',
      C: 'a copy produced by drawing over an original',
      D: 'a very small remaining amount; a vestige',
    },
    answer: 'D', isSPR: false,
    explanation: 'In this context, the "last trace of the familiar world had disappeared" — the very last remaining vestige or remnant of it was gone. D is correct. A ("a line drawn to represent something") is a meaning of "trace" as a noun (the trace of a pencil) that does not fit here, since the familiar world is not something drawn. B ("a path followed") is the meaning in "trace a route" — also a valid use, but Marlow is not following a remaining path of the familiar world; he has left it entirely behind. C ("a copy drawn over an original") is the drafting/artistic meaning of "trace" that is entirely irrelevant to this passage\'s description of isolation.',
  },

  {
    id: 'cs_c_007', num: 7, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Henry James\'s 1881 novel The Portrait of a Lady.\n\nIsabel was engaged in the sort of reflection she performed best alone — that quiet weighing of alternatives, that careful mapping of possible futures, which required both solitude and a certain freedom from the pressure of others\' expectations. She had been at it for some hours before she heard the first carriage on the gravel.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "engaged" most nearly mean?',
    choices: {
      A: 'promised in marriage to another person',
      B: 'employed in exchange for a wage',
      C: 'activated, as a mechanical device',
      D: 'occupied or deeply absorbed in an activity',
    },
    answer: 'D', isSPR: false,
    explanation: 'In this context, Isabel "was engaged in the sort of reflection she performed best alone" — she was occupied with or absorbed in private contemplation. D is correct. A ("promised in marriage") is one of the most common meanings of "engaged" and is especially associated with the Victorian novel, making it an attractive but wrong answer — the passage says nothing about a fiancé and specifies that the activity is reflection. B ("employed in exchange for a wage") is a valid meaning (an engaged professional) but does not fit Isabel\'s solitary contemplation. C ("activated, as a mechanism") is the technical sense of "engage a gear" that is irrelevant to Isabel\'s inner life.',
  },

  {
    id: 'cs_c_008', num: 8, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Virginia Woolf\'s 1925 novel Mrs Dalloway.\n\nFrom the top of the omnibus, Clarissa could command a view of London that she never failed to find moving — the rooftops extending in every direction, the parks glimpsed between buildings, the whole improbable construction of the city laid before her like everything that had ever mattered.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "command" most nearly mean?',
    choices: {
      A: 'give authoritative instructions to',
      B: 'deserve or be worthy of',
      C: 'have a position from which one can take in',
      D: 'exercise military leadership over',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, Clarissa "could command a view of London" from the top of the bus — meaning she could take in or have a full view from that elevated position. C is correct. A ("give instructions to") is the most common meaning of "command" as a verb, but one does not give orders to a view; the phrasing here describes having access to a perspective. B ("deserve or be worthy of") is the sense in "command respect" — as in, the view commands respect, which is a possible reading but does not match the specific structure "command a view of London," where the speaker is the one commanding. D ("exercise military leadership") is a primary meaning of "command" that is clearly inconsistent with a woman on a bus enjoying the scenery.',
  },


  // ── HARD (4) ──────────────────────────────────────────────────────────────

  {
    id: 'cs_c_009', num: 9, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Gustave Flaubert\'s 1857 novel Madame Bovary, translated by Karl Marx\'s daughter Eleanor Marx-Aveling.\n\nMonsieur Homais was particular about his shop — about the precise arrangement of jars on the upper shelves, about the weight of powders measured out for customers, about the wording on labels, which he composed with a care that bordered on the obsessive. No detail was too small to escape his attention, and none too large to be improved by his personal intervention.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "particular" most nearly mean?',
    choices: {
      A: 'relating to a single specific item rather than a general category',
      B: 'especially notable or significant',
      C: 'exacting or fastidious; demanding precision in matters of detail',
      D: 'clearly defined or distinct from other things',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, "Monsieur Homais was particular about his shop" in the sense of being exacting and demanding about every detail of its operation — as the rest of the sentence confirms with his obsessive attention to arrangement, weight, and wording. C is correct. A ("relating to a specific item") is the most common grammatical use of "particular" ("a particular book," "a particular problem") — but "was particular about his shop" uses the word as a predicate adjective meaning fastidious, not as a specifying adjective. B ("especially notable") captures the sense in "of particular importance" but does not fit this context about Homais\'s behavior. D ("clearly defined") represents yet another valid meaning but also does not describe a person\'s attitude toward their work environment.',
  },

  {
    id: 'cs_c_010', num: 10, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Thomas Hardy\'s 1891 novel Tess of the d\'Urbervilles.\n\nThe milking-parlour was close that evening — the air thick with the breath of cattle and the sharp smell of warm milk, the wooden walls retaining the heat of the day long after the sun had left the fields. Tess moved methodically through her work, her thoughts traveling somewhere far from the task her hands performed, until the door at the far end swung open on its hinges.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "close" most nearly mean?',
    choices: {
      A: 'near in physical distance',
      B: 'oppressively warm and lacking fresh air; stuffy',
      C: 'intimate or strongly attached',
      D: 'nearly reaching a particular level or amount',
    },
    answer: 'B', isSPR: false,
    explanation: 'In this context, the milking-parlour "was close that evening" — an older English usage meaning the air was stuffy, warm, and stale, which is immediately confirmed by the description of thick air, animal breath, and retained heat. B is correct. A ("near in physical distance") is the most common meaning of "close" as an adjective but does not apply to a room in isolation — a room cannot be near in distance without specifying what it is near to. C ("intimate or strongly attached") is the sense in "a close friend" — it does not describe the physical atmosphere of a working milking parlour. D ("nearly reaching a level") as in "close to fifty" is an adverbial usage that does not function as a predicate adjective describing a room.',
  },

  {
    id: 'cs_c_011', num: 11, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Fyodor Dostoevsky\'s 1880 novel The Brothers Karamazov, translated by Constance Garnett.\n\nFor the space of a long evening, Alyosha deliberated in silence. The question was not simple — it touched on loyalty and truth and the obligations a man owed to those who had formed him, and no obvious answer presented itself. He walked the length of the corridor three times before anything resembling a resolution had taken shape.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "deliberated" most nearly mean?',
    choices: {
      A: 'spoke carefully and with clear intent',
      B: 'moved at a slow and measured pace',
      C: 'weighed considerations carefully before reaching a decision',
      D: 'acted in a calculated or premeditated manner',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, Alyosha "deliberated in silence" while working through a complex question involving loyalty, truth, and obligation — he weighed the considerations before him carefully before arriving at a resolution. C is correct. A ("spoke carefully") is the adjectival meaning of "deliberate" as in "deliberate speech" — but Alyosha is explicitly deliberating "in silence," which rules out a meaning related to speaking. B ("moved at a slow pace") draws on the adjectival sense "deliberate movements" meaning measured and unhurried — while Alyosha does walk in the passage, the deliberating is his mental activity, not his gait. D ("acted in a calculated manner") is the sense in "a deliberate act" meaning intentional — but Alyosha has not yet acted; the deliberation precedes any action.',
  },

  {
    id: 'cs_c_012', num: 12, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Herman Melville\'s 1851 novel Moby-Dick.\n\nIshmael\'s account of the whale was unlike anything in the naturalist\'s literature — not a scientific description of anatomy or migration, but something closer to a moral argument conducted through the medium of one man\'s obsessive pursuit. To read it fully was to understand that facts, however accurate, could never exhaust the meaning of what that creature had come to represent.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: null,
    question: 'As used in the text, what does the word "account" most nearly mean?',
    choices: {
      A: 'a formal record of financial transactions',
      B: 'an explanation offered to justify one\'s actions',
      C: 'a narrative description or report',
      D: 'relative importance or worth',
    },
    answer: 'C', isSPR: false,
    explanation: 'In this context, Ishmael\'s "account of the whale" refers to his narrative, his written description and report of the creature — explicitly contrasted with the impersonal "scientific description" of the naturalists. C is correct. A ("financial record") is the banking/accounting meaning of "account" that is obviously irrelevant to a novel. B ("justification for actions") captures the sense in "give an account of oneself" meaning to explain or justify — but Ishmael is writing a story about a whale, not defending any action. D ("relative importance") is the meaning in "of no account," meaning of no significance — it does not function here as a noun phrase describing a piece of writing.',
  },

];


// Craft & Structure — Precise/Logical Word (10 questions)
// Academic, scientific, or historical passages. Single blank — one word or phrase.
// Passage makes wrong answers clearly wrong once carefully read.
// Includes double-negative subtype and near-synonym distinction subtype.
// Difficulty: 3 easy / 4 medium / 3 hard

const CS_PRECISE_WORD = [

  // ── EASY (3) ──────────────────────────────────────────────────────────────

  {
    id: 'cs_c_013', num: 13, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'In 1912, Alfred Wegener proposed that the continents were once joined in a single landmass and had since drifted apart. At the time, most geologists _______ his hypothesis, arguing that no known force was strong enough to move entire continents. It was not until the 1960s, when seafloor spreading provided the missing mechanism, that the theory gained widespread acceptance.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'welcomed',
      B: 'ignored',
      C: 'dismissed',
      D: 'misunderstood',
    },
    answer: 'C', isSPR: false,
    explanation: '"Dismissed" is the most precise choice: the geologists actively rejected Wegener\'s hypothesis on specific grounds (no known mechanism), which is dismissal, not mere ignorance or misunderstanding. "Welcomed" is directly contradicted by the passage, which states geologists resisted the theory. "Ignored" implies a lack of attention, but the passage specifies that geologists engaged with and challenged the hypothesis — they did not ignore it. "Misunderstood" implies a comprehension failure, but the passage indicates geologists understood the hypothesis and rejected it on mechanical grounds.',
  },

  {
    id: 'cs_c_014', num: 14, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The discovery of insulin by Frederick Banting and Charles Best in 1921 _______ the treatment of type 1 diabetes. Before their work, the disease was almost universally fatal within months of onset; after the first successful insulin injections, patients who had been near death began to recover.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'complicated',
      B: 'transformed',
      C: 'initiated',
      D: 'concluded',
    },
    answer: 'B', isSPR: false,
    explanation: '"Transformed" is the most precise choice: the discovery changed the nature of diabetes treatment fundamentally — from a near-certain death sentence to a manageable condition. "Complicated" contradicts the passage, which describes a dramatic improvement. "Initiated" implies that treatment of diabetes began with Banting and Best, but diabetes was managed (though poorly) before insulin; the discovery transformed existing approaches rather than starting them. "Concluded" implies that the discovery ended treatment, which is the opposite of what the passage describes.',
  },

  {
    id: 'cs_c_015', num: 15, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Unlike many of its competitors, the company chose to _______ its pricing strategy rather than respond to market pressure with immediate discounts. Management argued that maintaining consistent prices signaled quality and long-term reliability to customers, even if it meant accepting slower short-term growth.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'abandon',
      B: 'revise',
      C: 'defend',
      D: 'publicize',
    },
    answer: 'C', isSPR: false,
    explanation: '"Defend" most precisely captures the company\'s posture: it held its pricing strategy against external pressure and articulated reasons for maintaining it. "Abandon" is directly contradicted by the passage — the company kept its pricing strategy rather than giving in. "Revise" implies changing the strategy, which contradicts the passage\'s emphasis on consistency. "Publicize" focuses on communication rather than the act of holding firm against pressure, missing the core meaning of the sentence.',
  },


  // ── MEDIUM (4) ────────────────────────────────────────────────────────────

  {
    id: 'cs_c_016', num: 16, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Research on human memory has consistently shown that recall is not a passive playback of stored information but an active reconstruction. Each time a memory is retrieved, it becomes _______ to modification — new information encountered at the moment of retrieval can alter the memory itself, which is then re-stored in its updated form.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'immune',
      B: 'resistant',
      C: 'susceptible',
      D: 'opposed',
    },
    answer: 'C', isSPR: false,
    explanation: '"Susceptible" means vulnerable or liable to a particular condition — here, to modification — which is exactly what the passage establishes: retrieved memories can be altered. C is correct. "Immune" means protected from modification, which directly contradicts the passage\'s claim that memories change upon retrieval. "Resistant" implies some protection against modification, which also contradicts the research finding that memories are regularly and reliably altered. "Opposed" means in conflict with something, which does not express the quality of being open or vulnerable to a process.',
  },

  {
    id: 'cs_c_017', num: 17, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The philosopher\'s critics accused him of _______ his central argument: while his early papers had proposed a clear and testable claim about moral intuition, his later work steadily retreated from specific commitments, replacing them with qualifications that left the original claim unrecognizable.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'elaborating',
      B: 'abandoning',
      C: 'diluting',
      D: 'restating',
    },
    answer: 'C', isSPR: false,
    explanation: '"Diluting" most precisely describes the accusation: the philosopher did not entirely abandon his central argument but progressively weakened it through qualifications until it was unrecognizable. "Elaborating" suggests development or expansion, which contradicts the negative charge and the image of a position that becomes less clear over time. "Abandoning" implies a complete departure from the argument, but the passage indicates it remained present in a weakened form — the critics\' charge is that it was weakened through qualification, not dropped. "Restating" implies repetition rather than the gradual dilution described.',
  },

  {
    id: 'cs_c_018', num: 18, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The survey of ancient Mediterranean trade routes revealed that goods traveled with remarkable consistency across centuries, following paths that _______ topography rather than ignored it: rivers and mountain passes determined routes just as surely as commercial demand did.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'reflected',
      B: 'contested',
      C: 'preceded',
      D: 'exploited',
    },
    answer: 'A', isSPR: false,
    explanation: '"Reflected" correctly captures the relationship: the trade routes mirrored or corresponded to the topography, following its contours rather than ignoring them. The sentence explicitly sets up a contrast with "ignored," so the correct answer must be its opposite — something the routes did with the landscape. "Contested" implies fighting against or disputing, which is the opposite of what the passage describes. "Preceded" implies the routes existed before the topography, which is chronologically impossible. "Exploited" implies taking advantage of the terrain strategically — while partially plausible, it suggests an intentional tactical use rather than simple correspondence, and is less precise than "reflected."',
  },

  // medium — double-negative structure
  {
    id: 'cs_c_019', num: 19, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'It is by no means _______ to predict earthquake occurrence with precision: while scientists understand the geological conditions that make earthquakes possible, the specific timing and magnitude of any given event remain beyond the reach of current models. Seismologists have indeed demonstrated that certain faults are overdue for a major rupture, but "overdue" can span decades.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'difficult',
      B: 'possible',
      C: 'inadvisable',
      D: 'premature',
    },
    answer: 'B', isSPR: false,
    explanation: 'The double-negative structure "It is by no means [X]" requires an [X] that, when negated, produces the meaning established by the rest of the passage — that precise prediction is not currently achievable. "By no means possible" = not possible = impossible, which is confirmed by the passage\'s explanation that timing and magnitude remain "beyond the reach of current models." B is correct. "By no means difficult" = not difficult = easy — but the passage establishes that prediction is currently impossible, not merely difficult. "By no means inadvisable" = not inadvisable = advisable — this creates the wrong logical sentence ("it is advisable to predict..."). "By no means premature" = not premature = timely, which does not address whether prediction is currently achievable.',
  },


  // ── HARD (3) ──────────────────────────────────────────────────────────────

  {
    id: 'cs_c_020', num: 20, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Historians of early cinema have debated whether the medium\'s first decade should be understood as a period of experimentation or of consolidation. The most persuasive accounts _______ a false dichotomy: experimentation and consolidation were not competing impulses but simultaneous ones, as filmmakers worked out conventions even as they invented new ones.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'reinforce',
      B: 'propose',
      C: 'resist',
      D: 'document',
    },
    answer: 'C', isSPR: false,
    explanation: '"Resist" most precisely captures the rhetorical move: the most persuasive accounts push back against the false dichotomy between experimentation and consolidation, refusing to accept that the two are opposites. C is correct. "Reinforce" means to strengthen or confirm — but the passage\'s argument is that the dichotomy is false; reinforcing it would be the opposite of what the persuasive accounts do. "Propose" means to put forward an idea — but the persuasive accounts are not advancing the false dichotomy; they are countering it. "Document" means to provide evidence of — a false dichotomy is a conceptual error, not a phenomenon one records.',
  },

  {
    id: 'cs_c_021', num: 21, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The two theorists arrived at the same conclusion through _______ routes: one began with the behavior of individual agents and worked upward to system-level predictions, while the other derived the same predictions from aggregate data and worked backward to explain individual behavior. Neither knew of the other\'s work until a conference brought them together.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'complementary',
      B: 'divergent',
      C: 'independent',
      D: 'opposing',
    },
    answer: 'B', isSPR: false,
    explanation: '"Divergent" most precisely describes the routes: the two theorists took fundamentally different paths — one moving from micro to macro, the other from macro to micro — that nonetheless converged on the same conclusion. The routes themselves were divergent (different in direction), even though the destinations were identical. "Complementary" implies the routes worked together or filled each other\'s gaps, but the passage emphasizes that the theorists worked independently and only met afterward. "Independent" describes the theorists\' working relationship (they were unaware of each other) rather than the nature of their routes. "Opposing" implies the routes contradicted each other, but they differed in direction without opposing each other\'s conclusions.',
  },

  {
    id: 'cs_c_022', num: 22, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The policy\'s _______ effects were immediately apparent: while it was designed to reduce housing costs for low-income renters, by limiting new construction it had the long-term consequence of reducing housing supply and driving costs higher. Within a decade, the very population it was meant to help had been priced out of the neighborhoods the policy was designed to protect.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: {
      A: 'subtle',
      B: 'preliminary',
      C: 'counterproductive',
      D: 'controversial',
    },
    answer: 'C', isSPR: false,
    explanation: '"Counterproductive" most precisely describes the effects: the policy produced outcomes opposite to its stated purpose — it was meant to help low-income renters but ultimately harmed them. C is correct. "Subtle" implies the effects were not easily noticed, but the passage states they were "immediately apparent." "Preliminary" implies early or introductory effects, with more to follow — but the passage describes the effects as the final outcome, not a prelude. "Controversial" implies public debate and disagreement about the policy, which the passage does not address; the passage describes the policy\'s factual outcomes, not responses to it.',
  },

];


// Craft & Structure — Main Purpose / Main Idea (10 questions)
// Both literary and academic passages acceptable.
// One clear purpose; wrong answers are too narrow, too broad, or misattribute direction.
// Stems: "Which choice best states the main purpose of the text?" or
//        "Which choice best states the main idea of the text?"
// Difficulty: 3 easy / 4 medium / 3 hard

const CS_MAIN_PURPOSE = [

  // ── EASY (3) ──────────────────────────────────────────────────────────────

  {
    id: 'cs_c_023', num: 23, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The mantis shrimp has sixteen types of photoreceptors — more than any other known animal. Humans have three, which allow us to see millions of colors. Despite having so many more photoreceptors, mantis shrimp appear to be poor at distinguishing between similar colors. Scientists now believe the shrimp use their receptors not to discriminate between colors on a continuous spectrum but to recognize specific color signals rapidly, the way a computer uses binary code rather than graduated calculation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Mantis shrimp have the most photoreceptors of any known animal, making them the most visually capable creatures on Earth.',
      B: 'Scientists have recently discovered that mantis shrimp have sixteen types of photoreceptors in their eyes.',
      C: 'Although mantis shrimp have many more photoreceptors than humans, they likely use them for rapid color recognition rather than fine color discrimination.',
      D: 'Researchers believe that color vision in animals evolved differently depending on each species\' ecological needs.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly captures the full main idea: the passage establishes the surprising number of photoreceptors (more than humans), then presents the counterintuitive finding (poor at discrimination despite more receptors), and then explains the proposed explanation (rapid recognition rather than discrimination). C synthesizes all three elements. A overstates the conclusion — the passage explicitly notes they are poor discriminators, making "most visually capable" inaccurate. B is too narrow — it states only the opening fact without the explanation that is the passage\'s real focus. D introduces a claim about evolutionary history that the passage does not make.',
  },

  {
    id: 'cs_c_024', num: 24, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Frederick Douglass\'s 1845 autobiography Narrative of the Life of Frederick Douglass, an American Slave.\n\nI have often been utterly astonished, since I came to the north, to find persons who could speak of the singing, among slaves, as evidence of their contentment and happiness. It is impossible to conceive of a greater mistake. Slaves sing most when they are most unhappy. The songs of the slave represent the sorrows of his heart; and he is relieved by them, only as an aching heart is relieved by its tears.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To describe the musical traditions that developed among enslaved people in the American South',
      B: 'To correct a widespread misinterpretation of enslaved people\'s singing as a sign of happiness',
      C: 'To compare the emotional experiences of enslaved people in the South with those of free people in the North',
      D: 'To argue that music can serve as a form of political resistance for oppressed people',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the main purpose: Douglass directly challenges the mistaken belief that enslaved people\'s singing indicated contentment, arguing that singing was in fact an expression of sorrow. A is too narrow and mischaracterizes the passage — it describes "musical traditions," but the passage is not celebrating those traditions; it is correcting an interpretation of them. C introduces a comparison with free people in the North that the passage does not make — Douglass mentions the North only to explain where he learned of the misinterpretation. D makes a claim about political resistance that the passage does not support — singing is described as an emotional release (like tears), not as a form of resistance.',
  },

  {
    id: 'cs_c_025', num: 25, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The first transatlantic telegraph cable, completed in 1858, reduced the time needed to transmit a message between Britain and North America from ten days — the average duration of a ship voyage — to a matter of minutes. The cable failed within three weeks, but a replacement completed in 1866 proved permanent and transformed international communication and commerce. News that had crossed oceans in weeks now traveled in seconds, fundamentally altering the pace at which governments, markets, and journalists operated.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The first transatlantic telegraph cable was completed in 1858 but failed within three weeks of operation.',
      B: 'The transatlantic telegraph cable dramatically reduced communication time between Britain and North America, transforming international operations.',
      C: 'International telegraph technology in the nineteenth century allowed governments and markets to operate more efficiently than before.',
      D: 'The development of undersea telegraph cables was the most significant technological achievement of the nineteenth century.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly states the main idea: the cable dramatically reduced communication time (from ten days to minutes) and that transformation had significant consequences for how international affairs operated. A is too narrow — it focuses only on the first cable\'s failure, which is a subordinate detail in the passage. C is too broad in one direction and too narrow in another: it mentions governments and markets but omits the central claim about communication speed, and adds "more efficiently" as a characterization the passage does not explicitly make. D makes a superlative claim ("most significant achievement") that the passage does not assert.',
  },


  // ── MEDIUM (4) ────────────────────────────────────────────────────────────

  {
    id: 'cs_c_026', num: 26, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'In ecology, a keystone species is one whose impact on its environment is disproportionately large relative to its population size. Sea otters are a classic example: they prey heavily on sea urchins, which left unchecked would overgraze kelp forests and destroy the habitat of dozens of other species. When sea otter populations were decimated by the fur trade in the eighteenth and nineteenth centuries, urchin populations exploded and vast stretches of kelp forest disappeared — taking with them the fish, invertebrates, and seabirds that depended on the habitat. The recovery of sea otter populations in the twentieth century has been accompanied by the gradual return of those kelp forests.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that sea otters should be protected from hunting to prevent further damage to marine ecosystems',
      B: 'To define keystone species and illustrate the concept using sea otters as an example',
      C: 'To explain how the fur trade contributed to the destruction of kelp forest ecosystems in the Pacific Ocean',
      D: 'To compare the ecological roles of sea otters and sea urchins in kelp forest ecosystems',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the two-part structure of the passage: it defines keystone species and then uses sea otters as an extended illustration. A introduces a conservation argument — protecting sea otters from hunting — but the passage does not advocate for any policy; it describes past events and ecological relationships. C is too narrow: the fur trade is a supporting historical detail, not the main focus. D incorrectly characterizes the passage as a comparison between sea otters and sea urchins — the urchins appear only as the prey that otters control; the otters, not the urchins, are the subject.',
  },

  {
    id: 'cs_c_027', num: 27, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Zora Neale Hurston\'s 1937 novel Their Eyes Were Watching God.\n\nShe was stretched on her back beneath the pear tree soaking in the alto chant of the visiting bees, the gold of the sun and the panting breath of the breeze when the inaudible voice of it all came to her. She saw a dust-bearing bee sink into the sanctum of a bloom; the thousand sister-calyxes arch to meet the love embrace and the ecstatic shiver of the tree from root to tingling twig, and she felt a pain remorseful sweet that left her limp and languid.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To describe a young woman\'s awakening to the possibilities of romantic and sensual experience',
      B: 'To document the natural sounds and sights of a pear tree in full bloom',
      C: 'To explain how nature can provide comfort to a person experiencing emotional distress',
      D: 'To argue that women in the South had limited access to the emotional experiences they craved',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly identifies the passage\'s purpose: through richly symbolic imagery of pollination — a bee entering a bloom, the tree shivering from root to branch — Hurston depicts a young woman experiencing an awakening to the possibilities of love and sensual connection, culminating in a "pain remorseful sweet." B is too narrow, treating the pear tree imagery as literal description rather than recognizing its symbolic function. C misidentifies the emotional state — the passage does not describe distress or comfort; it describes awakening and longing. D makes a social argument about women in the South that the passage does not address.',
  },

  {
    id: 'cs_c_028', num: 28, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The notion that ancient Greeks saw the world in black and white — that they lacked a word for "blue" and therefore could not perceive it — misunderstands how language and perception interact. Experimental studies show that speakers of languages with more color terms do perform better on certain color discrimination tasks, suggesting that language shapes perception at the margins. But this shaping occurs at the edges of categorical boundaries, not at the core: the Greeks clearly distinguished sea and sky from land and stone, even if their color vocabulary carved the spectrum differently than ours does.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Ancient Greek had no word for blue, which limited how ancient Greeks could perceive and describe color.',
      B: 'Research has conclusively demonstrated that language determines how people perceive the physical world.',
      C: 'While language influences color perception at categorical boundaries, the claim that ancient Greeks could not perceive blue is an exaggeration.',
      D: 'The study of how ancient languages described color reveals important differences between modern and ancient ways of perceiving the world.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly synthesizes the passage\'s argument: it acknowledges the real but limited influence of language on perception (the experimental evidence) while pushing back against the stronger claim that ancient Greeks could not perceive blue at all. A is directly contradicted by the passage — the main purpose is to refute this claim, not endorse it. B overstates the passage\'s position: the passage says language shapes perception "at the margins," not that it determines perception. D makes a vague claim about ancient worldviews that the passage does not support — the passage is specifically about refuting the "no blue" claim, not documenting ancient perceptual differences broadly.',
  },

  {
    id: 'cs_c_029', num: 29, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Octavia Butler is often credited as the first African American woman to achieve commercial and critical success in the science fiction genre. But Butler resisted the idea that her race and gender should be read primarily as limiting context rather than as creative resource. Her Patternist series and Kindred drew on African American history — particularly the experience of slavery and its afterlives — not to constrain her work within the bounds of one community\'s experience but to ask questions about power, survival, and humanity that she believed science fiction was uniquely equipped to explore.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To identify Octavia Butler as the first African American woman to succeed commercially in science fiction',
      B: 'To summarize the key themes in Butler\'s Patternist series and Kindred',
      C: 'To describe how Butler used her background as a creative resource rather than a limitation',
      D: 'To argue that science fiction is the genre most suited to exploring questions about race and power',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly captures the central claim: the passage acknowledges Butler\'s historical position but argues that the more important story is how she turned her background into a creative tool for exploring universal human questions. A is too narrow — identifying Butler\'s historical position is only the setup for the passage\'s larger point. B is too narrow — the passage mentions the works only to illustrate how Butler used her background; summarizing their themes is not the main goal. D introduces a general argument about science fiction that the passage does not make — the passage says Butler believed SF was equipped for certain explorations, not that SF is the best genre for exploring race.',
  },


  // ── HARD (3) ──────────────────────────────────────────────────────────────

  {
    id: 'cs_c_030', num: 30, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Many philosophers have argued that moral intuitions — the immediate sense that certain acts are wrong, independent of reasoned analysis — cannot serve as a reliable guide to ethics because they are too easily explained away as evolutionary byproducts or cultural artifacts. But this argument proves too much. If moral intuitions are unreliable because they can be explained causally, then so can any belief we hold, including the beliefs that support moral reasoning itself. The debunking argument undermines itself.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To defend moral intuitions as the primary basis for ethical decision-making',
      B: 'To demonstrate that the argument for discarding moral intuitions is self-undermining',
      C: 'To compare evolutionary and cultural explanations for the origin of moral intuitions',
      D: 'To suggest that philosophical reasoning is no more reliable than moral intuition in guiding ethical behavior',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the main purpose: the passage does not defend moral intuitions per se but instead shows that the argument against them ("the debunking argument") destroys itself by applying equally to any belief, including the beliefs that support reasoning. A mischaracterizes the argument — the author does not argue that intuitions should be our primary ethical guide, only that the debunking argument fails. C describes a comparison the passage does not make — evolutionary and cultural explanations are mentioned only as examples of causal explanations, not as alternatives being compared. D states a conclusion the passage does not draw — the passage does not claim reasoning is unreliable; it claims that the reasoning used against intuitions is self-refuting.',
  },

  {
    id: 'cs_c_031', num: 31, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Seventeenth-century Dutch landscape painting is sometimes dismissed as merely decorative — skillful but ultimately trivial in its insistence on depicting cows, canals, and flat fields rather than the mythological and religious subjects that dominated Italian and Flemish painting. This view misreads the genre. Dutch landscapes were deeply engaged with the theological meaning of the natural world, with questions of stewardship and labor, and with a specifically Protestant vision of the spiritual value of ordinary life. The cow in the meadow was not an evasion of serious meaning but a vehicle for it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that Dutch landscape painting deserves more critical attention than Italian and Flemish painting',
      B: 'To explain the theological and social themes embedded in seventeenth-century Dutch landscape painting',
      C: 'To challenge the view that Dutch landscape painting was merely decorative by revealing its serious thematic content',
      D: 'To describe the differences between Dutch painting and the mythological and religious traditions that dominated elsewhere in Europe',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly identifies the passage\'s rhetorical structure: it presents a dismissive view (decorative, trivial) and then refutes it by demonstrating that Dutch landscapes engaged with significant theological, spiritual, and social themes. A misrepresents the argument — the passage does not claim Dutch painting is superior to Italian or Flemish painting, only that it is not trivial. B is close but too narrow — explaining the themes is how the passage achieves its purpose, but the main purpose is to refute the dismissal, not simply to describe the themes. D describes a comparison the passage does not make — the other traditions are mentioned only as context for the dismissal being challenged.',
  },

  {
    id: 'cs_c_032', num: 32, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Virginia Woolf\'s 1929 essay "A Room of One\'s Own."\n\nA woman must have money and a room of her own if she is to write fiction; and that, as you will see, leaves the great problem of the true nature of woman and the true nature of fiction unsolved. I have shirked the duty of coming to a conclusion upon these two questions; women and fiction remain, so far as I am concerned, unsolved problems. But in order to make some amends I am going to do what I can to show you how I arrived at this opinion about the room and the money.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that women writers require financial resources and private space as preconditions for literary work',
      B: 'To acknowledge the limits of the speaker\'s argument while offering to explain its reasoning',
      C: 'To demonstrate that questions about the nature of women and fiction cannot be answered by any single writer',
      D: 'To apologize for failing to resolve the questions about women and fiction that the essay raises',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures the double move of this passage: Woolf both acknowledges that she has not resolved the large questions (women and fiction remain "unsolved problems") and commits to explaining how she arrived at her central claim (about money and a room). A focuses on the central thesis about money and space, but the passage in question is not primarily advancing that argument — it is framing the argument\'s limitations while offering to trace its logic. C overstates the epistemic claim — Woolf says these are unsolved problems for her, not that they are inherently unanswerable. D mischaracterizes the tone — "making some amends" is not an apology but a pivot toward offering the reasoning behind the conclusion.',
  },

];


// Craft & Structure — Text Structure (18 questions)
// Subtype A: Overall Structure (8 questions) — describes the architecture of
//   the passage in 2–3 sequential parts
// Subtype B: Function of Underlined sentence/portion (10 questions) — one
//   sentence underlined; question asks for its structural role
//
// For subtype B: the underline field contains the underlined sentence verbatim.
//   Stem: "Which choice best describes the function of the underlined [sentence]
//   in the text as a whole?"
// For subtype A: stem: "Which choice best describes the overall structure of
//   the text?"
// Difficulty: 3 easy / 8 medium / 7 hard

const CS_STRUCTURE = [

  // ── OVERALL STRUCTURE — EASY (2) ──────────────────────────────────────────

  {
    id: 'cs_c_033', num: 33, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Coral bleaching occurs when water temperatures rise above normal levels, causing corals to expel the symbiotic algae living in their tissues. Without the algae, the corals lose their color and their primary food source. If conditions return to normal quickly enough, the algae can recolonize and the coral may survive. If the stress is prolonged, however, the coral dies. Rising ocean temperatures associated with climate change have increased both the frequency and severity of bleaching events in recent decades.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It defines a biological phenomenon, explains its mechanism, describes its two possible outcomes, and connects it to a broader trend.',
      B: 'It introduces a threat to coral reefs and argues that more research is needed to address it.',
      C: 'It compares healthy and bleached coral ecosystems to illustrate the effects of climate change.',
      D: 'It describes a scientific dispute about the causes of coral bleaching and presents evidence for one side.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly traces the passage\'s four-part structure: what bleaching is (definition), how it works (mechanism: algae expelled), what happens next (two outcomes: recovery or death), and why it matters now (climate change link). B mischaracterizes the passage as an argument for more research, which is not present. C describes a comparison between healthy and bleached corals that is not made — the passage describes the process and outcomes, not a side-by-side comparison. D introduces a scientific dispute that the passage does not mention.',
  },

  {
    id: 'cs_c_034', num: 34, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Behavioral economists Richard Thaler and Cass Sunstein introduced the concept of "nudging" to describe how small changes to the environment in which people make choices can significantly alter their behavior — without restricting options or changing financial incentives. The classic example is cafeteria food placement: putting fruit at eye level and desserts out of immediate reach increases fruit consumption without removing any options. Governments and private companies have applied nudge theory to everything from organ donation enrollment to retirement savings.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It argues that nudge theory is more effective than traditional policy tools for changing human behavior.',
      B: 'It introduces a behavioral economics concept, gives a concrete example, and notes its real-world applications.',
      C: 'It compares Thaler and Sunstein\'s approach to behavioral economics with earlier theories in the field.',
      D: 'It describes the controversy surrounding nudge theory and presents both supporters\' and critics\' views.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly traces the three-part structure: introduce the concept (nudging, with its definition), illustrate it concretely (cafeteria food placement), and describe its applications (organ donation, retirement savings). A makes an evaluative argument the passage does not make — no comparison to other policy tools is offered. C describes a comparison with earlier theories that is not present; Thaler and Sunstein are introduced without any counterpart from earlier work. D describes a controversy that is not in the passage — no critics\' views are mentioned.',
  },


  // ── OVERALL STRUCTURE — MEDIUM (3) ────────────────────────────────────────

  {
    id: 'cs_c_035', num: 35, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'For decades, astronomers assumed that the universe\'s expansion was slowing — pulled back by the mutual gravitational attraction of all the matter it contained. In the late 1990s, two independent research teams measured the brightness of distant Type Ia supernovae, which serve as reliable "standard candles" for measuring cosmic distances. Both teams expected to confirm the deceleration. Instead, they found that the supernovae were farther away than a decelerating universe would predict — meaning the expansion was not slowing but accelerating. The finding implied that some unknown energy, now called dark energy, was pushing the universe outward.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes a long-held scientific assumption, explains the method used to test it, presents a surprising contradictory finding, and proposes an explanation.',
      B: 'It introduces two competing theories about the expansion of the universe and presents evidence that resolves the dispute.',
      C: 'It traces the history of cosmology from the early twentieth century to the present, focusing on the discovery of dark energy.',
      D: 'It argues that the standard model of the universe must be revised in light of new evidence about supernova brightness.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the four-part architecture: prior assumption (deceleration), methodology (Type Ia supernovae as standard candles), surprising finding (further away = accelerating), and proposed explanation (dark energy). B describes two competing theories, but the passage presents one expectation that was overturned, not a dispute between two theories. C describes a historical survey that the passage does not provide — the passage focuses on one specific discovery, not the history of cosmology. D frames the passage as an argument for revising the standard model, but the passage is descriptive, not argumentative.',
  },

  {
    id: 'cs_c_036', num: 36, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from George Orwell\'s 1946 essay "Politics and the English Language."\n\nMost people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it. Our civilization is decadent and our language — so the argument runs — must inevitably share in the general collapse. It follows that any struggle against the abuse of language is a sentimental archaism, like preferring candles to electric light or hansom cabs to aeroplanes. Underneath this is the half-conscious belief that language is a natural growth and not an instrument which we shape for our own purposes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It presents a commonly held view about language decline, describes the logic underlying it, and identifies the hidden assumption that makes the view seem plausible.',
      B: 'It refutes the idea that English is in decline by showing that anxieties about language are not new.',
      C: 'It argues that conscious effort can reverse the decline of the English language if people resist the temptation to use vague or dishonest language.',
      D: 'It compares two views of language — as a natural growth versus a deliberate instrument — and concludes that neither is fully correct.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly traces the passage\'s three-part structure: it presents the widely held view (language is declining and nothing can be done), traces its logical extension (therefore fighting language abuse is sentimental archaism), and then identifies the hidden assumption driving it (language is a natural growth rather than an instrument we control). B inverts the passage\'s stance — the passage does not refute the idea that English is in decline; it examines why people feel nothing can be done. C introduces a positive argument about conscious effort that appears in the broader essay but is not stated in this passage — this passage only diagnoses the problem. D presents a comparative structure the passage does not use; the two views are mentioned but not compared as equal alternatives.',
  },

  {
    id: 'cs_c_037', num: 37, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Nineteenth-century naturalists believed that species were fixed and immutable, created in their current form and unchanged thereafter. Charles Darwin\'s observations during the Beagle voyage — particularly the variation he noted among finches across the Galápagos Islands — led him to question this assumption. He spent the next two decades collecting evidence, consulting animal breeders, and refining his argument before publishing On the Origin of Species in 1859. The book proposed that species were not fixed but gradually changed through the mechanism of natural selection, with individuals best suited to their environment most likely to survive and reproduce.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes the scientific consensus before Darwin, explains the evidence that prompted Darwin to challenge it, and summarizes his alternative theory.',
      B: 'It argues that Darwin\'s theory of natural selection was the most important scientific development of the nineteenth century.',
      C: 'It compares Darwin\'s methods of scientific inquiry with those of earlier naturalists who believed in fixed species.',
      D: 'It traces the Beagle voyage and explains how Darwin\'s observations during the trip led directly to the publication of On the Origin of Species.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly identifies the three-part structure: prior consensus (fixed species), what challenged it (Beagle observations, especially Galápagos finches), and Darwin\'s alternative (natural selection, gradual change). B makes an evaluative claim about importance that the passage does not make. C describes a comparison of methods that is not present — the passage does not compare Darwin\'s methods with those of earlier naturalists. D overstates the Beagle\'s role — the voyage prompted Darwin to question the consensus, but the passage also describes his subsequent two decades of evidence-collection and refinement, which D omits.',
  },


  // ── OVERALL STRUCTURE — HARD (3) ──────────────────────────────────────────

  {
    id: 'cs_c_038', num: 38, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Critics have long argued that the Romantics\'s celebration of nature was nostalgic and politically conservative — a retreat from industrial modernity into an idealized past. This reading has some historical support: Wordsworth\'s later career did drift toward establishment politics, and several Romantic poets explicitly condemned the social disruptions of industrialization. But the same poets who mourned the enclosure of common lands were also attacking aristocratic hierarchy, celebrating the French Revolution, and defending the rights of the poor. The Romantics\' relationship to politics was not a withdrawal from it but an argument within it — one that combined environmental grief with social radicalism in ways that remain difficult to categorize.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It presents a critical view of Romantic nature poetry, acknowledges its partial validity, and then complicates it with contradictory evidence.',
      B: 'It traces the evolution of Romantic political thought from the French Revolution to the early nineteenth century.',
      C: 'It compares conservative and radical Romantic poets to show that the movement was politically divided.',
      D: 'It argues that scholars have consistently misread Romanticism because they focus too narrowly on Wordsworth.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the passage\'s three-part structure: presents the critical consensus (conservative retreat), grants it partial validity ("has some historical support"), and then complicates it with contradictory evidence (the same poets were also radicals). B describes a historical survey of political thought that the passage does not provide — the passage makes an argument about how to interpret the Romantics, not a timeline. C describes a comparison between conservative and radical individual poets, but the passage argues that the same poets held both positions simultaneously — not that the movement was divided between factions. D attributes the scholarly error to a narrow focus on Wordsworth, but the passage uses Wordsworth as one data point and focuses on a broader interpretive claim.',
  },

  {
    id: 'cs_c_039', num: 39, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The placebo effect is often described as evidence that belief can override biology — that a patient\'s expectation of recovery can produce real physiological changes. Open-label placebo trials, in which patients are told they are receiving a placebo and still experience improvements, complicate this picture. If belief in the treatment\'s efficacy is required for the placebo effect, why does the effect persist when patients know there is no active treatment? The most plausible explanation is that the ritual of medical care itself — being examined, receiving a prescription, following a treatment regimen — triggers neurological and hormonal responses independent of belief, suggesting the relationship between expectation and physiology is more complex than simple self-fulfilling prophecy.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It presents a popular account of the placebo effect, introduces evidence that challenges it, raises the question this evidence poses, and proposes a more nuanced explanation.',
      B: 'It argues that the placebo effect is entirely explained by the physiological responses triggered by medical ritual, not by belief or expectation.',
      C: 'It describes the history of open-label placebo trials and explains why researchers developed the approach.',
      D: 'It compares two competing scientific theories about the placebo effect and identifies the evidence that supports each.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly traces the four-part movement: popular account (belief overrides biology), complicating evidence (open-label placebos work even without belief), the question this raises (why does the effect persist?), and the proposed explanation (medical ritual triggers physiological responses). B overstates the conclusion — the passage says the explanation is "more complex than simple self-fulfilling prophecy," not that belief plays no role; it proposes a more nuanced view, not a complete replacement. C describes a historical account of open-label trials that is not present in the passage. D describes a comparison of two competing theories, but the passage presents one account, challenges it with new evidence, and proposes a modification — not a debate between two established theories.',
  },

  {
    id: 'cs_c_040', num: 40, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Grief counselors have traditionally distinguished between "normal" grief — which resolves over months as a bereaved person adapts to loss — and "complicated" or "prolonged" grief, which persists at disabling intensity for years. The diagnostic category of prolonged grief disorder, added to major psychiatric manuals in 2019 and 2022, has made this distinction official. Critics argue that pathologizing grief is a dangerous medicalization of a normal human experience, one that risks treating the depth of a person\'s love as a disorder. Defenders of the diagnosis counter that some bereaved people genuinely need clinical intervention and that withholding it in the name of normalizing grief causes unnecessary suffering.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It introduces a clinical distinction, describes how it was institutionalized, and then presents both sides of the resulting controversy.',
      B: 'It argues that prolonged grief disorder is a legitimate diagnosis that should be recognized by psychiatric institutions.',
      C: 'It traces the history of psychiatry\'s engagement with grief from the nineteenth century to the present.',
      D: 'It compares the experiences of people with prolonged grief disorder to those experiencing normal grief.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: the clinical distinction (normal vs. complicated grief), how it was formalized (official diagnosis in 2019 and 2022), and the resulting controversy presented on both sides (medicalization critique vs. clinical necessity defense). B takes the defenders\' side as the passage\'s conclusion, but the passage presents both sides without advocating for either. C describes a historical survey that the passage does not provide — the passage focuses on a contemporary controversy, not a historical arc. D describes a comparison between individuals\' experiences that is not present in the passage; the passage is about how the profession categorizes and debates grief, not about comparing individual experiences.',
  },


  // ── FUNCTION OF UNDERLINED — EASY (1) ─────────────────────────────────────

  {
    id: 'cs_c_041', num: 41, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The electric eel is not actually an eel — it belongs to the knifefish family, which is more closely related to catfish and carp than to true eels. Its body contains three specialized electric organs that together can generate discharges of up to 860 volts. These discharges serve multiple purposes: stunning prey, deterring predators, and allowing the electric eel to navigate murky river water by generating a weak continuous field that it uses to detect objects and other electric eels in its environment.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'Its body contains three specialized electric organs that together can generate discharges of up to 860 volts.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides the evidence that supports the claim that the electric eel is not a true eel.',
      B: 'It introduces the physical basis for the capabilities described in the sentence that follows.',
      C: 'It explains why the electric eel belongs to the knifefish family rather than the eel family.',
      D: 'It summarizes the main idea of the passage.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The underlined sentence describes the electric organs and their voltage capacity — establishing the physical mechanism. The following sentence then explains the multiple purposes served by "these discharges," referring directly back to the underlined sentence\'s established capacity. B correctly identifies this function: the underlined sentence sets up the physical basis for the functional explanation that follows. A incorrectly links the underlined sentence to the claim about the eel\'s taxonomy — the electric organ is not evidence for the knifefish classification. C similarly attributes a taxonomic function to a sentence that describes anatomy. D overstates the sentence\'s scope — it provides a specific anatomical detail, not a summary of the whole passage.',
  },


  // ── FUNCTION OF UNDERLINED — MEDIUM (5) ───────────────────────────────────

  {
    id: 'cs_c_042', num: 42, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Historians have long noted that the Black Death killed between one-third and one-half of Europe\'s population between 1347 and 1351. The survivors inherited property, consolidated land, and — in many regions — found themselves commanding higher wages as labor became scarce. These material gains did not come without psychological costs: contemporary accounts describe a world in which the social fabric had been torn, familiar hierarchies upended, and the certainty of a stable future shattered. The fourteenth century is now understood not simply as a period of catastrophic loss but as a moment of radical, if painful, social reorganization.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'These material gains did not come without psychological costs: contemporary accounts describe a world in which the social fabric had been torn, familiar hierarchies upended, and the certainty of a stable future shattered.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces the main argument that the Black Death had positive long-term consequences for European society.',
      B: 'It provides a counterbalance to the preceding description of material gains by acknowledging the psychological disruption they accompanied.',
      C: 'It summarizes the economic effects of the Black Death described in the prior sentence.',
      D: 'It establishes that contemporary observers misunderstood the long-term significance of the Black Death.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The preceding sentence describes the material gains of survivors (property, land, higher wages). The underlined sentence explicitly qualifies this with "did not come without psychological costs" — a counterbalancing acknowledgment. B correctly identifies this function. A mischaracterizes the passage — the main argument is about social reorganization, not positive consequences, and the underlined sentence complicates rather than introduces that argument. C misidentifies the direction of the relationship — the underlined sentence contrasts with the economic gains, not summarizes them. D introduces a claim about contemporary observers\' misunderstanding that the passage does not make.',
  },

  {
    id: 'cs_c_043', num: 43, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Langston Hughes\'s 1926 essay "The Negro Artist and the Racial Mountain."\n\nOne of the most promising of the young Negro poets said to me once, "I want to be a poet — not a Negro poet," meaning, I believe, "I want to write like a white poet"; meaning subconsciously, "I would like to be a white poet"; meaning behind that, "I would like to be white." And I was sorry the young man said that, for no great poet has ever been afraid of being himself. And I doubted then that, with his desire to run away spiritually from his race, this boy would ever be a great poet.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'And I doubted then that, with his desire to run away spiritually from his race, this boy would ever be a great poet.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a new claim about the relationship between racial identity and poetic excellence.',
      B: 'It provides the conclusion Hughes draws from his analysis of the young poet\'s statement.',
      C: 'It expresses Hughes\'s disagreement with the young poet\'s desire to write in a different style.',
      D: 'It summarizes the main theme of Hughes\'s essay about the role of Black artists in American culture.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage moves from the young poet\'s statement, to Hughes\'s unpacking of its layers of meaning, to his expression of sorrow, to — in the underlined sentence — his stated conclusion: he doubted the young man would ever be great. The underlined sentence is the culminating judgment that follows from the analysis. B correctly identifies this function. A describes the sentence as "introducing a new claim," but the sentence concludes and applies a principle stated earlier ("no great poet has ever been afraid of being himself") — it derives rather than introduces. C misidentifies the disagreement as being about "style," when Hughes\'s critique is about the young poet\'s desire to renounce his racial identity. D overstates the scope — the sentence is a specific conclusion about one person, not a summary of the essay\'s main theme.',
  },

  {
    id: 'cs_c_044', num: 44, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Linguists distinguish between a language\'s syntax — the rules governing how words are combined into sentences — and its pragmatics — the conventions governing how meaning is shaped by context, speaker intention, and social relationship. A sentence that is syntactically perfect can still fail pragmatically: "Can you pass the salt?" is structurally an inquiry about physical ability, but its conventional pragmatic function is a polite request. Learning a second language to the point of pragmatic fluency, not just grammatical correctness, is considerably harder and takes far longer than most textbooks acknowledge.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: '"Can you pass the salt?" is structurally an inquiry about physical ability, but its conventional pragmatic function is a polite request.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides a specific, familiar illustration of the abstract distinction between syntax and pragmatics introduced earlier.',
      B: 'It introduces the concept of pragmatic fluency that the final sentence develops.',
      C: 'It refutes the claim that syntactically correct sentences can fail pragmatically.',
      D: 'It defines the difference between formal and informal registers in spoken language.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The underlined sentence takes the abstract principle stated before it ("a sentence that is syntactically perfect can still fail pragmatically") and makes it concrete with a universally familiar example — the salt-passing request. A correctly identifies this as a specific illustration of an abstract distinction. B misidentifies the sentence\'s direction — it illustrates the prior point rather than introducing something new; "pragmatic fluency" appears in the sentence after the underlined one. C directly contradicts the sentence\'s function — it demonstrates, not refutes, the claim about syntactic success versus pragmatic failure. D introduces a concept about formal versus informal registers that the passage does not discuss.',
  },

  {
    id: 'cs_c_045', num: 45, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'In 1799, French soldiers in Egypt discovered a large basalt stone bearing inscriptions in three scripts: ancient Egyptian hieroglyphics, Demotic script, and ancient Greek. Because scholars could read ancient Greek, the stone provided a key for deciphering hieroglyphics, which had been unreadable for more than a thousand years. The same decree was written in all three scripts, meaning that the Greek translation could be used to work backward through the Demotic and hieroglyphic versions. Jean-François Champollion completed the decipherment in 1822, opening the entire corpus of ancient Egyptian texts to scholarly study.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'The same decree was written in all three scripts, meaning that the Greek translation could be used to work backward through the Demotic and hieroglyphic versions.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces the discovery of the Rosetta Stone and provides context for understanding its historical significance.',
      B: 'It explains the mechanism by which the stone could serve as a decipherment key.',
      C: 'It describes Jean-François Champollion\'s approach to deciphering hieroglyphics.',
      D: 'It contrasts the legibility of Greek with the illegibility of hieroglyphics to emphasize how long Egyptian writing had been unreadable.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence establishes that the stone provided "a key" for decipherment — but it does not explain how. The underlined sentence supplies the mechanism: the same text was written in all three scripts, allowing Greek to serve as a translation guide for working back through the others. B correctly identifies this as an explanation of the mechanism. A misidentifies the sentence as an introduction to the discovery — the discovery was described in the first sentence. C attributes the mechanism to Champollion, but the underlined sentence describes the logical structure of the stone itself, not Champollion\'s method. D focuses on the contrast between Greek legibility and hieroglyphic illegibility, but the underlined sentence explains how all three versions were structurally connected, not simply how different they were in legibility.',
  },

  {
    id: 'cs_c_046', num: 46, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Behavioral ecologist Karen McComb and her colleagues found that savanna elephants in Amboseli, Kenya could distinguish between the voices of 100 individual humans from three local groups — the Maasai, the Kamba, and the Samburu — and respond differently based on perceived threat level. The Maasai, who periodically kill elephants in competition over water and grazing land, triggered strong avoidance responses; the Kamba, who are primarily farmers, and the Samburu, who rarely conflict with elephants, provoked little response. This discrimination was not learned through direct experience with each group but appeared to reflect cultural knowledge transmitted within elephant family units, suggesting that elephant social groups maintain and pass on threat assessments across generations.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'This discrimination was not learned through direct experience with each group but appeared to reflect cultural knowledge transmitted within elephant family units, suggesting that elephant social groups maintain and pass on threat assessments across generations.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces new evidence that contradicts the findings described in the prior sentences.',
      B: 'It restates the central finding of McComb\'s research in simpler terms for a general audience.',
      C: 'It extends the significance of the discrimination finding by proposing a mechanism and a broader implication.',
      D: 'It summarizes the difference in responses between the Maasai and the other two groups.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The prior sentences establish what the elephants did (discriminate between groups) and how they responded. The underlined sentence takes this further by specifying how the discrimination was acquired (not direct experience, but transmitted cultural knowledge) and what this implies (social transmission of threat assessments across generations). C correctly identifies this as an extension of significance. A says the sentence contradicts the prior findings — it does not; it adds a mechanistic explanation. B misidentifies the sentence as a simplification; it adds complexity and a broader implication rather than restating. D focuses on the response differential between groups, but the underlined sentence is not about the response differential — it is about the mechanism of knowledge transmission.',
  },


  // ── FUNCTION OF UNDERLINED — HARD (4) ─────────────────────────────────────

  {
    id: 'cs_c_047', num: 47, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from James Baldwin\'s 1963 essay collection The Fire Next Time.\n\nYou were born where you were born and faced the future that you faced because you were black and for no other reason. The limits of your ambition were, thus, expected to be set forever. You were born into a society which spelled out with brutal clarity, and in as many ways as possible, that you were a worthless human being. You were not expected to aspire to excellence: you were expected to make peace with mediocrity. Wherever you have turned, James, in your short time on this earth, you have been told where you could go and what you could do (and how you could do it) and where you could live and whom you could marry.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'You were not expected to aspire to excellence: you were expected to make peace with mediocrity.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a new claim about the role of ambition in the speaker\'s life.',
      B: 'It provides a precise restatement of the prior sentence\'s claim using a contrasting parallel structure.',
      C: 'It offers a specific historical example to illustrate the broader argument about racial limits.',
      D: 'It marks a shift in tone from anger to resignation about the limitations described.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence states that the limits of the addressee\'s ambition were "expected to be set forever." The underlined sentence reframes this claim with parallel structure and opposition: "not expected to aspire to excellence" versus "expected to make peace with mediocrity." It does not add new content but restates the prior sentence\'s meaning through a contrasting pair that sharpens its emotional force. B correctly identifies this as a precise restatement using parallel structure. A misidentifies the sentence as introducing something new — it repeats and clarifies rather than introducing. C misidentifies it as a historical example — the sentence remains at the same level of abstraction as the prior sentence. D makes a claim about a shift in tone that is not textually supported; the passage maintains a consistent tone of address throughout.',
  },

  {
    id: 'cs_c_048', num: 48, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The Gettier problem, introduced in a three-page paper by philosopher Edmund Gettier in 1963, demolished a definition of knowledge that had stood largely unchallenged since Plato. Philosophers had generally held that knowledge was "justified true belief" — a person knows X if X is true, the person believes X, and the person has good justification for believing X. Gettier presented cases in which someone holds a justified true belief but, most philosophers intuitively feel, does not have knowledge. A farmer looks across a field and sees what appears to be a sheep, and he forms a justified true belief that there is a sheep in the field — but what he sees is actually a dog, and the sheep is elsewhere in the field, out of sight. He is right, but for the wrong reason.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'A farmer looks across a field and sees what appears to be a sheep, and he forms a justified true belief that there is a sheep in the field — but what he sees is actually a dog, and the sheep is elsewhere in the field, out of sight.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It presents evidence that justified true belief is a reliable definition of knowledge in most real-world situations.',
      B: 'It illustrates concretely how a person can hold a justified true belief that does not constitute knowledge.',
      C: 'It introduces the Gettier problem and explains why it undermined classical definitions of knowledge.',
      D: 'It describes a situation in which the distinction between belief and knowledge is impossible to draw.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence states the abstract principle — that Gettier found cases where someone holds justified true belief but lacks knowledge. The underlined sentence is the concrete illustration of that abstract case: the farmer has justification (apparent sheep), has a true belief (there is a sheep), but reached the right conclusion through a wrong perceptual experience. B correctly identifies this as a concrete illustration. A inverts the sentence\'s purpose — the case is specifically designed to show where justified true belief fails. C misidentifies the sentence as introducing the Gettier problem, which was introduced in the first sentence; this sentence illustrates it. D introduces a claim that the distinction between belief and knowledge is "impossible to draw," which the passage does not assert.',
  },

  {
    id: 'cs_c_049', num: 49, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Historians have debated whether the Renaissance should be understood as a clean break from the medieval period or as a gradual evolution. The revisionist view, advanced by scholars like Charles Haskins and later medievalists, holds that the twelfth century had its own "renaissance" — a recovery of classical texts, a revival of urban culture, and a flowering of scholastic philosophy — that anticipates the better-known Italian Renaissance by three centuries. The Italian Renaissance, on this account, was not the dawn of modernity but one particularly luminous moment in a longer tradition of intellectual recovery.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'The Italian Renaissance, on this account, was not the dawn of modernity but one particularly luminous moment in a longer tradition of intellectual recovery.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It summarizes the revisionist argument by reinterpreting the Italian Renaissance\'s significance in light of the prior evidence.',
      B: 'It introduces a criticism of the revisionist view by arguing that the Italian Renaissance was more important than the twelfth-century renaissance.',
      C: 'It acknowledges the importance of the Italian Renaissance while insisting that the twelfth century was more significant.',
      D: 'It restates the opening question about whether the Renaissance represents a break or an evolution from the medieval period.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The prior sentences establish the revisionist argument — the twelfth century had its own renaissance, anticipating the Italian one by centuries. The underlined sentence draws the logical consequence for how we should view the Italian Renaissance: not as a unique origin of modernity but as one moment in a longer tradition. "On this account" signals it is a conclusion of the revisionist view just described. A correctly identifies this as a summary conclusion of the revisionist argument. B mischaracterizes the sentence as a criticism of revisionism — it expresses the revisionist position, not a challenge to it. C misidentifies the sentence as insisting the twelfth century was more significant — the sentence de-emphasizes the Italian Renaissance\'s uniqueness but does not claim the twelfth century was superior. D says the sentence restates the opening question, but the sentence provides an answer to that question rather than repeating it.',
  },

  {
    id: 'cs_c_050', num: 50, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Recent research in plant biology has revealed that trees in established forests share nutrients and chemical signals through a network of fungal filaments connecting their roots — a system some researchers have called the "Wood Wide Web." Proponents argue that this network functions like a cooperative system in which larger, established trees support younger seedlings by transferring carbon and other resources. Skeptics, however, note that the same fungal connections through which resources flow can also be used by stronger trees to competitively extract nutrients from weaker neighbors.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'Skeptics, however, note that the same fungal connections through which resources flow can also be used by stronger trees to competitively extract nutrients from weaker neighbors.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a competing interpretation of the fungal network that questions the cooperative framing proposed by proponents.',
      B: 'It provides additional evidence that supports the claim that the Wood Wide Web functions as a cooperative system.',
      C: 'It identifies the scientific consensus about whether fungal networks are cooperative or competitive.',
      D: 'It explains the mechanism by which younger trees receive nutrients from larger, established neighbors.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The prior sentence describes proponents\' view that the network functions cooperatively — larger trees support smaller ones. The underlined sentence introduces a competing interpretation from skeptics: the same infrastructure can be used for competitive extraction rather than cooperative sharing. "However" signals this is a contrasting view, not additional support. A correctly identifies this as a competing interpretation that challenges the cooperative framing. B inverts the function — skeptics provide a counter-interpretation, not additional support. C overstates the sentence\'s scope — it presents one skeptical view, not the scientific consensus. D misidentifies the sentence as mechanistic explanation; it describes a possible competitive use of the network, not how younger trees receive nutrients from larger ones.',
  },

];


// Craft & Structure — Cross-Text Connections (10 questions)
// Always two labeled passages (Text 1 and Text 2) with attribution lines.
// Five confirmed relationship types × 2 questions each:
//   Type 1: Full disagreement (Text 2 directly contradicts Text 1)
//   Type 2: Partial concession + modification (Text 2 concedes premise, argues different conclusion)
//   Type 3: Characterization of conclusion (how Text 2 would evaluate Text 1's conclusion)
//   Type 4: Difference in portrayal (two texts portray same subject differently)
//   Type 5: Finding a point of agreement (both texts would agree with which statement)
// Confirmed stems used verbatim from official tests.
// Difficulty: 2 easy / 4 medium / 4 hard

const CS_CROSS_TEXT = [

  // ── TYPE 1: FULL DISAGREEMENT (2) ─────────────────────────────────────────

  // easy
  {
    id: 'cs_c_051', num: 51, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nEcologist Suzanne Simard\'s research on forest communication suggests that established trees in old-growth forests actively support younger seedlings by channeling carbon and other nutrients through fungal networks connecting their roots. On this account, forests function less like collections of competing individuals than like cooperative communities in which older members support younger ones — a model with profound implications for how we manage and log forested land.',
    dualText: 'Text 2\n\nWhile fungal networks connecting tree roots are real and well-documented, some ecologists caution against the "cooperative forest" interpretation. The carbon transfers Simard observes may reflect the passive physics of connected systems rather than active "support." Moreover, the same networks through which carbon flows can also be used by larger trees to draw nutrients from smaller neighbors. The cooperative framing, critics argue, risks projecting human social values onto a process that is better described in terms of resource gradients.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Based on the texts, how would the ecologists in Text 2 most likely respond to Simard\'s characterization of forests as cooperative communities?',
    choices: {
      A: 'By agreeing that fungal networks connect tree roots but arguing that this has no implications for forest management',
      B: 'By disputing that carbon transfers occur between trees and arguing that the fungal network is not involved',
      C: 'By challenging the cooperative interpretation and suggesting the observed transfers may reflect passive resource dynamics rather than active support',
      D: 'By accepting the cooperative model while questioning whether it applies to old-growth forests specifically',
    },
    answer: 'C', isSPR: false,
    explanation: 'Text 2 ecologists challenge the cooperative framing specifically, arguing that the transfers may reflect passive physics rather than active support, and that the same networks can be used competitively. C correctly captures this challenge. A incorrectly states the Text 2 ecologists would agree there are no management implications — they question the cooperative framing, which has management implications, but they do not say the science has no implications at all. B misrepresents Text 2 — the ecologists accept that carbon transfers occur and that fungal networks exist; their challenge is interpretive, not factual. D incorrectly states that the critics accept the cooperative model; they specifically question it.',
  },

  // hard
  {
    id: 'cs_c_052', num: 52, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nPsychologist Jonathan Haidt argues that moral reasoning is largely post-hoc rationalization: people first have a moral intuition and then construct arguments to justify it. In experiments, subjects presented with morally charged scenarios reached their moral conclusions almost instantaneously, typically before engaging in any deliberation. Their subsequent reasoning, Haidt contends, was not the cause of their judgment but an attempt to explain a conclusion already reached by intuition.',
    dualText: 'Text 2\n\nHaidt\'s intuitionist model captures something real about how moral judgment often works in practice. But it overstates the case for the irrelevance of reasoning. Deliberate moral reasoning does change people\'s views over time — through exposure to new arguments, through considering cases that conflict with their initial reactions, and through the practical demands of living in communities where moral justifications must be publicly acceptable. The model mistakes a snapshot of individual decision-making for a complete account of moral development.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Based on the texts, how would the author of Text 2 most likely respond to Haidt\'s claim that moral reasoning is largely post-hoc rationalization?',
    choices: {
      A: 'By arguing that Haidt\'s experimental evidence does not accurately reflect the full range of moral reasoning that occurs across a lifetime',
      B: 'By agreeing that moral intuition is the primary driver of moral judgment and that deliberation plays no role',
      C: 'By disputing that subjects in Haidt\'s experiments reached moral conclusions before deliberating, and questioning his methodology',
      D: 'By accepting Haidt\'s conclusions fully and extending them to argue that moral education is ineffective',
    },
    answer: 'A', isSPR: false,
    explanation: 'Text 2 concedes that Haidt captures "something real" about moment-to-moment decision-making but argues the model mistakes "a snapshot of individual decision-making for a complete account of moral development." The author\'s critique is that Haidt\'s evidence is limited in scope — it shows how judgment works in an experimental moment but not how moral views develop over time through argument and community. A correctly captures this argument. B inverts Text 2\'s position — the author explicitly argues that deliberate reasoning does change people\'s views. C misidentifies the critique as a methodological challenge to the experimental evidence; Text 2 accepts the evidence but challenges its interpretive scope. D says Text 2 fully accepts Haidt\'s conclusions, which it does not — it specifically says Haidt "overstates the case."',
  },


  // ── TYPE 2: PARTIAL CONCESSION + MODIFICATION (2) ─────────────────────────

  // medium
  {
    id: 'cs_c_053', num: 53, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nHistorian Robert Gordon has argued that the economic growth generated by the great inventions of the late nineteenth and early twentieth centuries — electricity, indoor plumbing, the internal combustion engine — was uniquely transformative and unlikely to be replicated by contemporary digital technologies. The internet and smartphones have changed how we communicate and access information, but they have not fundamentally altered how we build things, move through space, or sustain physical life.',
    dualText: 'Text 2\n\nGordon is right that household electrification and running water represented more fundamental shifts in daily physical life than smartphones have so far. But his argument underestimates how the digital revolution is restructuring the organization of economic activity itself. Logistics, supply chains, financial markets, and medical diagnostics have all been transformed at the structural level by algorithmic management and data analysis — changes whose economic consequences, still accumulating, are difficult to measure by the same metrics applied to the earlier industrial transformation.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Based on the texts, how would the author of Text 2 most likely respond to Gordon\'s argument?',
    choices: {
      A: 'By fully agreeing with Gordon that digital technologies have not matched the transformative power of late nineteenth-century inventions',
      B: 'By rejecting Gordon\'s premise that electricity and indoor plumbing were more transformative than the internet',
      C: 'By conceding Gordon\'s point about physical life but arguing that digital technologies are reorganizing economic activity in comparably significant ways',
      D: 'By arguing that the economic consequences of the digital revolution have already exceeded those of industrialization',
    },
    answer: 'C', isSPR: false,
    explanation: 'Text 2 explicitly says "Gordon is right that household electrification...represented more fundamental shifts in daily physical life than smartphones have so far" — conceding Gordon\'s main point about physical life. It then pivots: "But his argument underestimates" the digital revolution\'s structural economic impact. C correctly captures this partial concession plus modification. A misses the modification — Text 2 explicitly pushes back on Gordon\'s argument. B inverts Text 2\'s position — the author accepts Gordon\'s point about physical life. D overstates Text 2\'s claim — the author says the consequences are "still accumulating" and "difficult to measure," not that they have already exceeded industrial-era gains.',
  },

  // hard
  {
    id: 'cs_c_054', num: 54, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe animal rights philosopher Peter Singer has argued that the capacity for suffering, not intelligence or species membership, is the morally relevant criterion for ethical consideration. Because many non-human animals demonstrably suffer, they have a claim to moral consideration comparable in kind — though not necessarily in degree — to that of humans. Practices that cause significant animal suffering for relatively trivial human benefits, such as factory farming for luxury consumption, are therefore morally indefensible.',
    dualText: 'Text 2\n\nSinger\'s focus on suffering as the sole morally relevant criterion captures something important: we do have reasons to minimize unnecessary animal suffering, and industrial farming practices cause vast amounts of it. But reducing moral status entirely to pain-capacity misses the significance of other features — autonomy, relationships, projects, the ability to have a future — that ground the particularly strong claims humans make on one another. A mouse and a person may both suffer, but the moral weight of their suffering differs not just in degree but in kind.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Based on the texts, how would the author of Text 2 most likely respond to Singer\'s argument?',
    choices: {
      A: 'By agreeing that animal suffering deserves moral consideration but disputing that pain-capacity alone determines the full weight of moral claims',
      B: 'By rejecting any moral consideration of animals on the grounds that only humans have morally relevant characteristics',
      C: 'By fully endorsing Singer\'s criterion of suffering but arguing that it leads to stricter protections for animals than Singer himself proposes',
      D: 'By accepting Singer\'s conclusion about factory farming while questioning whether his criterion of suffering extends to insects and fish',
    },
    answer: 'A', isSPR: false,
    explanation: 'Text 2 explicitly concedes that "we do have reasons to minimize unnecessary animal suffering" — accepting Singer\'s concern about animal pain — but then argues that "reducing moral status entirely to pain-capacity misses the significance of other features." A correctly captures this concession plus modification. B misrepresents Text 2 — the author does not reject animal moral consideration; they argue it must be understood alongside other factors. C inverts Text 2\'s argument — the author does not endorse suffering as the sole criterion; they specifically argue this criterion is incomplete. D introduces a question about insects and fish that Text 2 does not raise.',
  },


  // ── TYPE 3: CHARACTERIZATION OF CONCLUSION (2) ────────────────────────────

  // medium
  {
    id: 'cs_c_055', num: 55, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nNeurologist Antonio Damasio studied patients with damage to the ventromedial prefrontal cortex — a brain region involved in processing emotions. These patients performed normally on standard measures of intelligence and reasoning but made consistently poor decisions in their daily lives. Damasio concluded that emotion is not an obstacle to rational decision-making but an essential component of it: without emotional input, the brain loses the ability to assign appropriate weight to different possible outcomes.',
    dualText: 'Text 2\n\nDamasio\'s case studies were clinically significant, but the conclusion that emotion is necessary for good decision-making has been contested on methodological grounds. The patients studied had complex, widespread neurological damage; attributing their decision-making impairments specifically to emotional deficits, rather than to other consequences of their injuries, requires controls that early studies lacked. More recent neuroimaging work has partially supported Damasio\'s framework, but with considerable revision of the original model.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'How would the researchers described in Text 2 most likely characterize the conclusion presented in Text 1?',
    choices: {
      A: 'As an important empirical contribution that has been wholly vindicated by subsequent neuroimaging research',
      B: 'As a clinically interesting but methodologically premature conclusion that has only been partially supported by later work',
      C: 'As an implausible claim about emotion and reasoning that subsequent research has comprehensively refuted',
      D: 'As a valuable contribution to understanding normal decision-making but irrelevant to clinical cases of brain damage',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 2 says the conclusion was "contested on methodological grounds," that early studies lacked necessary controls, and that more recent work has "partially supported" Damasio\'s framework "with considerable revision." B correctly captures this evaluation: clinically interesting and partially supported but methodologically contested and not fully confirmed. A says it was "wholly vindicated" — Text 2 says it was only "partially supported" with revision. C says it was "comprehensively refuted" — Text 2 says it was partially supported, not refuted. D says Damasio\'s work is irrelevant to clinical cases — but Text 2\'s entire discussion concerns clinical neurological patients.',
  },

  // hard
  {
    id: 'cs_c_056', num: 56, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nEconomist Tyler Cowen has argued that the internet and digital distribution have been profoundly good for consumers of cultural goods: they now have access to a vastly larger and more diverse catalogue of music, literature, and film than any previous generation. The proliferation of niches, the long tail of distribution, and the fall of gatekeeping have democratized culture in ways that should be celebrated rather than mourned.',
    dualText: 'Text 2\n\nThe abundance enabled by digital distribution is real, but abundance and quality are not the same thing. The collapse of professional gatekeeping has flooded cultural markets with material that previously would not have reached mass audiences — not because it was suppressed, but because it was not good enough to warrant the cost of production and distribution. The platforms that replaced traditional curators optimize for engagement rather than quality, creating an environment in which the memorable and the important compete on unequal terms with the merely addictive.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'How would the author of Text 2 most likely characterize Cowen\'s conclusion that digital abundance should be celebrated?',
    choices: {
      A: 'As accurate about the range of material available but incomplete because it confuses the quantity of cultural goods with their quality',
      B: 'As correct about the democratic benefits of digital distribution but mistaken about the role of traditional gatekeepers',
      C: 'As overly pessimistic about the internet\'s effects on cultural markets, which have in fact improved overall quality',
      D: 'As applicable to some art forms like music and film but not to literature, where professional gatekeeping remains important',
    },
    answer: 'A', isSPR: false,
    explanation: 'Text 2 acknowledges that "the abundance enabled by digital distribution is real" — granting Cowen\'s empirical premise — but immediately challenges the conclusion: "abundance and quality are not the same thing." The author\'s characterization of Cowen\'s celebration is that it confuses quantity with quality. A correctly captures this. B misidentifies the author\'s position on gatekeepers — Text 2 defends professional gatekeeping as a quality filter, not challenges it. C inverts Text 2\'s position — the author is not optimistic about quality under platform optimization. D limits the argument to specific art forms, but Text 2 makes a general argument about cultural markets, not specific to any form.',
  },


  // ── TYPE 4: DIFFERENCE IN PORTRAYAL (2) ───────────────────────────────────

  // medium
  {
    id: 'cs_c_057', num: 57, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nThe following text is from Mary Wollstonecraft\'s 1792 treatise A Vindication of the Rights of Woman.\n\nI wish to persuade women to endeavour to acquire strength, both of mind and body, and to convince them that the soft phrases, susceptibility of heart, delicacy of sentiment, and refinement of taste, are almost synonymous with epithets of weakness. If women be educated for dependence; that is, to act according to the will of another fallible being, the moral and physical powers of woman will be eradicated.',
    dualText: 'Text 2\n\nThe following text is from Hannah More\'s 1799 educational treatise Strictures on the Modern System of Female Education.\n\nThe author is far from meaning to insinuate that women should aspire to be men, or to encroach upon those offices and honours which Providence has assigned to the other sex. Women should cultivate their particular excellences — not by imitating the harsh and decisive qualities of men, but by refining the natural sensibilities and moral feelings which render them peculiarly fitted to shape the character of those who will one day govern the world.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Which choice best describes a notable difference in how Text 1 and Text 2 portray women\'s "sensibility" or emotional refinement?',
    choices: {
      A: 'Text 1 presents emotional refinement as a form of strength women should develop, while Text 2 presents it as a form of weakness women should overcome.',
      B: 'Text 1 treats emotional refinement as a symptom of the dependence and weakness cultivated by inadequate education, while Text 2 treats it as a genuine excellence women should develop.',
      C: 'Text 1 argues that emotional refinement prevents women from governing effectively, while Text 2 argues it enables women to govern directly.',
      D: 'Both texts present emotional refinement positively, though they differ on whether it is innate or acquired.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 1 (Wollstonecraft) explicitly equates "susceptibility of heart" and "delicacy of sentiment" with weakness and the products of education for dependence — she regards them negatively. Text 2 (More) treats these same qualities ("natural sensibilities and moral feelings") as "particular excellences" women should cultivate. B correctly identifies this opposing treatment. A inverts the positions — Text 1 views emotional refinement as weakness, not strength to develop; Text 2 views it as strength, not weakness to overcome. C misrepresents Text 2 — it says women can shape character of future governors, not that women will govern directly. D incorrectly claims both texts present emotional refinement positively — Text 1 explicitly casts it as a weakness.',
  },

  // hard
  {
    id: 'cs_c_058', num: 58, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from Walt Whitman\'s 1855 preface to Leaves of Grass.\n\nThe American poets are to enclose old and new for America is the race of races. Of them a bard is to be commensurate with a people. To him the other continents arrive as contributions he gives them reception for their sake and his own sake. His spirit responds to his country\'s spirit he incarnates its geography and natural life and rivers and lakes.',
    dualText: 'Text 2\n\nThe following text is from Emily Dickinson\'s c. 1862 poem 441 ("This is my letter to the World").\n\nThis is my letter to the World\nThat never wrote to Me —\nThe simple News that Nature told —\nWith tender Majesty\n\nHer Message is committed\nTo Hands I cannot see —\nFor love of Her — Sweet — countrymen —\nJudge tenderly — of Me',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Which choice best describes a notable difference in how Text 1 and Text 2 portray the relationship between the American poet and the American people?',
    choices: {
      A: 'Text 1 presents the poet as an active force who embodies and gives voice to the national community, while Text 2 presents the poet as a figure whose communication with that community is uncertain and indirect.',
      B: 'Text 1 focuses on the poet\'s relationship with nature, while Text 2 focuses on the poet\'s relationship with other nations.',
      C: 'Both texts present the poet as a spokesperson for the American people, but Text 1 is more optimistic about the poet\'s ability to reach a wide audience.',
      D: 'Text 1 argues that poets must speak for all of humanity, while Text 2 argues that poets should address only their local communities.',
    },
    answer: 'A', isSPR: false,
    explanation: 'In Text 1, Whitman\'s poet "incarnates" his country\'s geography and spirit — a figure of confident embodiment and active envoicing. In Text 2, Dickinson\'s speaker writes to a World "That never wrote to Me" and entrusts her message to "Hands I cannot see" — a figure whose communication is tenuous, unreciprocated, and indirect. A correctly identifies this contrast. B inverts the focus — Text 1 describes the poet\'s connection to America\'s natural geography, not other nations; Text 2\'s speaker addresses "countrymen," not other nations. C claims both texts present the poet as a spokesperson, but Dickinson\'s speaker is uncertain and withdrawn, not a confident spokesperson. D misidentifies the scope of Whitman\'s claim — he writes about American poets specifically, not all of humanity.',
  },


  // ── TYPE 5: POINT OF AGREEMENT (2) ────────────────────────────────────────

  // medium
  {
    id: 'cs_c_059', num: 59, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nSociologist C. Wright Mills argued that the major decisions affecting American life — military, economic, and political — are made not by democratic deliberation but by an interlocking "power elite" composed of corporate executives, military officers, and political leaders who share educational backgrounds, social connections, and institutional interests. This elite operates largely beyond public accountability, making the formal machinery of democracy a secondary factor in how power is actually exercised.',
    dualText: 'Text 2\n\nPolitical scientists Robert Dahl and Charles Lindblom proposed a more pluralist account of American power. On their view, no single elite dominates all policy arenas; instead, different interest groups — business, labor, civic organizations, professional associations — compete for influence in different domains, with outcomes determined by shifting coalitions rather than a stable ruling class. Government policy is the product of ongoing bargaining among these competing groups, not the imposition of a unitary elite\'s preferences.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Based on the texts, both Mills and Dahl and Lindblom would most likely agree with which statement about power in American society?',
    choices: {
      A: 'The formal institutions of American democracy accurately reflect how power is actually distributed and exercised.',
      B: 'Organized groups with shared interests play a significant role in shaping political and economic outcomes.',
      C: 'A stable, identifiable ruling class controls the major decisions affecting American life.',
      D: 'Public accountability is the primary mechanism by which those who hold power are constrained.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Both texts agree that organized groups with shared interests — not individual voters or purely formal democratic processes — shape outcomes. Mills describes an interlocking power elite whose shared backgrounds and institutional connections drive major decisions. Dahl and Lindblom describe competing interest groups whose bargaining produces policy. Both require organized group interests as a central mechanism. B is the point of agreement. A is contradicted by both texts — Mills says formal democracy is a secondary factor; Dahl and Lindblom also emphasize interest group bargaining rather than formal institutions as the primary mechanism. C is Mills\'s position but is disputed by Dahl and Lindblom, who reject the idea of a single stable ruling class. D is contradicted by both texts — Mills says elites operate beyond accountability; pluralists also emphasize bargaining, not accountability, as the central mechanism.',
  },

  // hard
  {
    id: 'cs_c_060', num: 60, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from Susan Sontag\'s 1977 essay collection On Photography.\n\nIn teaching us a new visual code, photographs alter and enlarge our notions of what is worth looking at and what we have a right to observe. They are a grammar and, even more importantly, an ethics of seeing. Finally, the most grandiose result of the photographic enterprise is to give us the sense that we can hold the whole world in our heads — as an anthology of images.',
    dualText: 'Text 2\n\nThe following text is from Roland Barthes\'s 1980 essay Camera Lucida, translated by Richard Howard.\n\nThe photograph does not necessarily say what is no longer, but only and for certain what has been. The distinction is a subtle one. In front of a photograph, our consciousness does not necessarily take the nostalgic path of memory but the path of certainty: the image is full, the world is continuous, and what it shows, once, was truly there.',
    notes: null, noteTask: null, table: null,
    underline: null,
    question: 'Based on the texts, both Sontag and Barthes would most likely agree with which statement about photography?',
    choices: {
      A: 'Photography primarily serves as a historical record of events that would otherwise be forgotten.',
      B: 'Photographs change how people understand and relate to the world beyond the moment of viewing.',
      C: 'The ethics of photography requires that subjects give their consent to being photographed.',
      D: 'Photography as a medium is fundamentally nostalgic, oriented toward the preservation of the past.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Sontag argues that photographs "alter and enlarge our notions of what is worth looking at" and give us "a sense that we can hold the whole world in our heads" — photography changes how we perceive and conceptualize the world. Barthes argues that photographs give us "certainty" that something "was truly there" — they alter our relationship to reality and time, providing a kind of epistemic anchoring in the world. Both texts agree that photographs change how people understand and relate to the world. B captures this shared claim. A is too narrow for Sontag — her point is about altered vision and enlarged conceptual repertoire, not historical record-keeping; Barthes focuses on ontological certainty, not historical documentation. C introduces an ethical claim about consent that neither text addresses. D is Barthes\'s position in part but is directly contradicted by Barthes himself: "our consciousness does not necessarily take the nostalgic path" — and Sontag\'s concern is with photography\'s perceptual and conceptual effects, not nostalgia.',
  },

];


// ── Assembly ──────────────────────────────────────────────────────────────────

const DL_CS_WIC = CS_WIC;
const DL_CS_PRECISE_WORD = CS_PRECISE_WORD;
const DL_CS_MAIN_PURPOSE = CS_MAIN_PURPOSE;
const DL_CS_STRUCTURE = [...CS_STRUCTURE];
const DL_CS_CROSS_TEXT = CS_CROSS_TEXT;

const DL_CRAFT_STRUCTURE = [
  ...CS_WIC,
  ...CS_PRECISE_WORD,
  ...CS_MAIN_PURPOSE,
  ...CS_STRUCTURE,
  ...CS_CROSS_TEXT,
];
