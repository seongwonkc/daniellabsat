'use strict';

// data-eoi4.js — EOI questions 181–240 (60 questions)
// 30 transitions (eoi_t_091–120) + 30 synthesis (eoi_s_091–120)
// 20 easy / 20 medium / 20 hard

const DL_EOI4_TRANSITIONS = [

  // ── EASY (7) ──────────────────────────────────────────────────────────────

  {
    id: 'eoi_t_091', num: 91, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Penguins are flightless birds uniquely adapted to aquatic life. Their wings have evolved into flippers optimized for swimming, allowing them to reach speeds of up to 25 kilometers per hour underwater. _______ their dense, waterproof feathers and a thick layer of fat provide insulation against the extreme cold of Antarctic waters.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'As a result,', C: 'Additionally,', D: 'For example,' },
    answer: 'C', isSPR: false,
    explanation: '"Additionally" signals a further, separate adaptation (insulating feathers and fat) beyond the flipper adaptation described in sentence two. "However" signals contrast. "As a result" implies insulation follows causally from the flipper adaptation. "For example" would make insulation an illustration of swimming speed.',
  },

  {
    id: 'eoi_t_092', num: 92, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The discovery of gold in California in January 1848 initially attracted only local prospectors. _______ news spread rapidly, and by 1849 over 300,000 people had traveled to California from the rest of the United States, Latin America, Europe, Australia, and Asia — transforming a sparsely populated territory into a booming society almost overnight.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Nevertheless,', B: 'Similarly,', C: 'For instance,', D: 'However,' },
    answer: 'A', isSPR: false,
    explanation: '"Nevertheless" captures the contrast between the modest initial reaction (only local prospectors) and the massive subsequent migration. "Similarly" implies the global migration parallels the local initial response. "For instance" would make the 300,000 migrants an illustration of the modest initial response. "However" also signals contrast and is plausible, but "nevertheless" better expresses the concessive structure: despite the modest start, the scale became enormous.',
  },

  {
    id: 'eoi_t_093', num: 93, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Many species of deep-sea fish produce their own light through bioluminescence. _______ the anglerfish dangles a glowing lure in front of its mouth to attract prey in the otherwise lightless depths.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For instance,', C: 'Moreover,', D: 'Consequently,' },
    answer: 'B', isSPR: false,
    explanation: '"For instance" correctly signals that the anglerfish is one example of the bioluminescent deep-sea fish described in sentence one. "However" signals contrast. "Moreover" adds a new separate point. "Consequently" implies the anglerfish\'s lure is a consequence of the general bioluminescence fact.',
  },

  {
    id: 'eoi_t_094', num: 94, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'By the end of the Second World War, most of Europe\'s industrial infrastructure had been severely damaged or destroyed by bombing and ground combat. _______ the Marshall Plan, launched by the United States in 1948, provided over $13 billion in economic assistance to help Western European nations rebuild.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Nevertheless,', C: 'In response,', D: 'Similarly,' },
    answer: 'C', isSPR: false,
    explanation: '"In response" signals that the Marshall Plan was a direct response to the destruction described — it was explicitly designed to address postwar devastation. "Furthermore" adds a consistent additional point. "Nevertheless" implies the Marshall Plan occurred despite the destruction, rather than because of it. "Similarly" implies the Plan parallels the destruction.',
  },

  {
    id: 'eoi_t_095', num: 95, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Children develop language remarkably quickly: most have mastered the basic grammatical structure of their native language by age four, without formal instruction. _______ no computer program or artificial intelligence system has ever equaled the natural speed and efficiency of human language acquisition.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'As a result,', B: 'For example,', C: 'Indeed,', D: 'However,' },
    answer: 'C', isSPR: false,
    explanation: '"Indeed" reinforces the prior claim with emphatic confirmation — the AI comparison serves as particularly striking evidence of how remarkable child language acquisition is. "As a result" implies the AI limitation follows from children\'s speed. "For example" would make AI an illustration of children\'s rapid development, which is logically backwards. "However" signals contrast, but the AI limitation supports rather than contradicts the child development claim.',
  },

  {
    id: 'eoi_t_096', num: 96, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Mount Everest, at 8,849 meters above sea level, is the highest mountain on Earth measured from sea level. _______ Mauna Kea in Hawaii, when measured from its base on the ocean floor, is actually taller by this measure — over 10,000 meters from base to summit.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Therefore,', C: 'Similarly,', D: 'However,' },
    answer: 'D', isSPR: false,
    explanation: '"However" signals the contrast between Everest\'s claim to the title (from sea level) and Mauna Kea\'s competing claim (from ocean base). The passage introduces a different measurement criterion that complicates the initial claim. "Furthermore" adds a consistent supporting point. "Therefore" implies Mauna Kea\'s height follows from Everest\'s height. "Similarly" implies Mauna Kea parallels Everest.',
  },

  {
    id: 'eoi_t_097', num: 97, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Trees in a forest communicate and share nutrients through networks of mycorrhizal fungi that connect their root systems underground. _______ foresters studying old-growth forests have found that large, established trees — sometimes called "mother trees" — actively channel carbon and water to younger seedlings through these fungal networks.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'In contrast,', B: 'Specifically,', C: 'Nevertheless,', D: 'As a result,' },
    answer: 'B', isSPR: false,
    explanation: '"Specifically" narrows from the general claim (trees communicate through fungal networks) to a particular observed behavior (mother trees channeling carbon to seedlings). "In contrast" signals opposition. "Nevertheless" implies the channeling occurs despite some obstacle. "As a result" implies the channeling is a consequence of the communication network claim rather than a specific instance of it.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'eoi_t_098', num: 98, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Public health researchers have consistently found that socioeconomic status is among the strongest predictors of health outcomes — wealthier people live longer, healthier lives on average. Some argue this reflects access to healthcare. _______ studies that control for healthcare access still find large health disparities by income, suggesting that other pathways — chronic stress, neighborhood conditions, diet quality — explain much of the relationship.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'Indeed,', C: 'Accordingly,', D: 'However,' },
    answer: 'D', isSPR: false,
    explanation: '"However" signals the contrast between the healthcare-access explanation (sentence two) and the evidence that complicates it (studies controlling for healthcare access still show disparities). "Similarly" implies the controlled studies parallel the access explanation. "Indeed" would reinforce the access explanation. "Accordingly" implies the controlled studies follow from the access explanation.',
  },

  {
    id: 'eoi_t_099', num: 99, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Before Johannes Gutenberg\'s printing press, books in Europe were copied by hand — a laborious process that took months per volume and kept books so expensive that only wealthy institutions and individuals could own them. _______ the printing press could produce hundreds of copies in the time it took a scribe to copy one, and prices dropped dramatically — enabling literacy to spread beyond the educated elite for the first time.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For example,', C: 'As a result,', D: 'Previously,' },
    answer: 'A', isSPR: false,
    explanation: '"However" contrasts the hand-copying era with the printing press era. The passage moves from the constraints of manuscript production to the disruption that the press represented. "For example" would make the press an illustration of hand-copying. "As a result" implies the press\'s efficiency followed causally from hand-copying\'s slowness. "Previously" signals temporal sequence but misidentifies the relationship — the press is a contrast to, not a prior stage of, hand-copying.',
  },

  {
    id: 'eoi_t_100', num: 100, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The reintroduction of wolves to Yellowstone National Park in 1995 produced unexpected cascading effects. The wolves reduced elk populations and changed their grazing behavior; _______ vegetation in riparian areas recovered, beaver populations returned, river channels narrowed and stabilized, and songbird diversity increased — a sequence of ecological changes triggered ultimately by the predator\'s return.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'therefore,', B: 'however,', C: 'for instance,', D: 'previously,' },
    answer: 'A', isSPR: false,
    explanation: '"Therefore" (lowercase, after semicolon) signals that the cascade of ecological changes logically follows from the wolves reducing elk and changing grazing behavior. "However" signals contrast. "For instance" would make the cascade an illustration of something more general. "Previously" signals temporal prior state, not consequence.',
  },

  {
    id: 'eoi_t_101', num: 101, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'For most of the twentieth century, the standard model of economic development held that industrialization was the universal path to prosperity — that every nation would follow the same trajectory from agriculture to manufacturing to services. _______ the development trajectories of countries like South Korea, Taiwan, and Singapore — which achieved rapid growth through export-oriented manufacturing — differ significantly from those of countries like Botswana or Norway, which built wealth on natural resources with very different institutional arrangements.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'In other words,', C: 'Similarly,', D: 'Yet,' },
    answer: 'D', isSPR: false,
    explanation: '"Yet" signals the contrast between the universal industrialization model (sentence one) and the empirical evidence of divergent trajectories (sentence two). "Furthermore" adds a consistent supporting point. "In other words" implies sentence two restates sentence one. "Similarly" implies the development trajectories parallel the universal model rather than contrasting with it.',
  },

  {
    id: 'eoi_t_102', num: 102, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Historians of science have noted that many major discoveries were the result of accidents or unexpected observations — the discovery of X-rays, penicillin, and the cosmic microwave background all arose from noticing something that wasn\'t supposed to be there. _______ these discoveries required scientists who were alert to the unexpected rather than dismissing anomalous observations as experimental error.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'By contrast,', C: 'Crucially,', D: 'As a result,' },
    answer: 'C', isSPR: false,
    explanation: '"Crucially" signals that the following point identifies the essential condition that made accidental discovery possible — alertness to the unexpected is the key variable. "However" signals contrast. "By contrast" also signals opposition. "As a result" implies alertness to anomalies follows from the accidents, but sentence two is identifying a necessary condition of the accidents, not a consequence.',
  },

  {
    id: 'eoi_t_103', num: 103, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Proponents of electoral college reform in the United States argue that the current system can produce winners who received fewer total votes than their opponents — as happened in 2000 and 2016 — undermining the democratic principle of majority rule. Defenders counter that the electoral college preserves the influence of smaller states and ensures that presidential candidates must build geographically broad coalitions. _______ the debate reflects a deeper tension between two different conceptions of what democratic representation should achieve.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For example,', B: 'Moreover,', C: 'Ultimately,', D: 'Nevertheless,' },
    answer: 'C', isSPR: false,
    explanation: '"Ultimately" signals the deepest or final framing of the issue — the specific arguments on both sides reflect a fundamental tension about democratic representation. "For example" would make the tension an illustration. "Moreover" adds a new parallel point. "Nevertheless" implies the tension persists despite some prior resolution.',
  },

  {
    id: 'eoi_t_104', num: 104, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Theoretical physicist Richard Feynman was known not only for his Nobel Prize-winning work on quantum electrodynamics but also for his gift for explaining complex ideas accessibly. He argued that if a scientist cannot explain their field to a bright non-specialist, they probably don\'t understand it as well as they think. _______ Feynman developed the "Feynman technique" — a learning method based on explaining a concept as if to a complete beginner as a test of one\'s own comprehension.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'In keeping with this view,', C: 'Even so,', D: 'By contrast,' },
    answer: 'B', isSPR: false,
    explanation: '"In keeping with this view" signals that the Feynman technique is a practical application consistent with his belief about explanation as a test of understanding. "However" signals contrast. "Even so" signals concession. "By contrast" signals opposition — but the technique embodies rather than contradicts the prior belief.',
  },

  {
    id: 'eoi_t_105', num: 105, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Conservation biologists have found that protecting large, contiguous wilderness areas is more effective for biodiversity than protecting an equivalent area in many small, fragmented patches. Large, connected habitats support species that require large territories, maintain viable populations for genetic diversity, and allow animals to migrate in response to seasonal or climate changes. _______ even well-funded conservation programs have struggled to expand protected areas in the face of competing land-use pressures from agriculture, development, and resource extraction.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Moreover,', B: 'Similarly,', C: 'In practice,', D: 'For instance,' },
    answer: 'C', isSPR: false,
    explanation: '"In practice" signals the gap between what is known to be most effective (large contiguous areas) and the practical reality of implementation (competing land-use pressures). The sentence describes the difficulty of applying the principle in the real world. "Moreover" adds a consistent supporting point. "Similarly" implies the practical difficulty parallels the conservation principle. "For instance" would make the difficulty an illustration of the conservation principle.',
  },

  {
    id: 'eoi_t_106', num: 106, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Cognitive scientists have demonstrated that working memory — the capacity to hold and manipulate information over short periods — is a critical predictor of academic performance, more consistently correlated with achievement than IQ scores alone. _______ working memory is highly trainable: structured interventions have been shown to expand working memory capacity, particularly in children, with downstream benefits for reading comprehension and mathematical reasoning.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'What\'s more,', C: 'For example,', D: 'In contrast,' },
    answer: 'B', isSPR: false,
    explanation: '"What\'s more" signals a separate, additional claim that extends the significance of the prior finding — the trainability of working memory is a further important fact beyond its predictive value. "However" signals contrast. "For example" would make trainability an illustration of the predictive claim. "In contrast" signals opposition.',
  },

  {
    id: 'eoi_t_107', num: 107, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The philosopher Thomas Nagel argued in his famous 1974 essay "What Is It Like to Be a Bat?" that subjective conscious experience cannot be explained by any objective physical description of the brain. We can know every physical fact about a bat\'s echolocation system, he argued, and still have no idea what it is like to experience the world through echolocation. _______ no amount of third-person scientific knowledge can ever fully capture first-person subjective experience.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For instance,', B: 'In other words,', C: 'That said,', D: 'However,' },
    answer: 'B', isSPR: false,
    explanation: '"In other words" signals that sentence three restates Nagel\'s argument in its most general and abstract form — "no amount of third-person knowledge can capture first-person experience" is the broader principle that the bat echolocation example illustrated. "For instance" would make sentence three a further example. "That said" introduces a qualification. "However" signals contrast.',
  },


  // ── HARD (13) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_t_108', num: 108, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Critics of "effective altruism" — the view that charitable giving should be guided by rigorous evidence of impact per dollar — argue that the framework privileges immediately measurable outcomes over structural changes that are harder to quantify but more transformative. Advocates of effective altruism respond that structural change is also a legitimate priority, and that the movement has funded work on existential risks, systemic advocacy, and institutional reform. _______ the most rigorous proponents of the framework acknowledge that measuring impact in domains like policy change and norm-shifting is genuinely difficult and that their tools are better suited to evaluating direct interventions than to predicting the effects of systemic change.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'However,', C: 'Similarly,', D: 'Admittedly,' },
    answer: 'D', isSPR: false,
    explanation: '"Admittedly" introduces a genuine concession — the effective altruism proponents themselves acknowledge the measurement limitations that critics pointed to. After defending the framework (sentence two), sentence three concedes a real limitation. "Furthermore" would add a further defense. "However" would signal contrast with the defense, but the concession in sentence three is coming from the effective altruism advocates themselves. "Similarly" implies the acknowledgment parallels the defense.',
  },

  {
    id: 'eoi_t_109', num: 109, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Evolutionary biologist Stephen Jay Gould argued that the history of life on Earth is fundamentally contingent — if the tape of life were rewound and replayed, the outcome would be radically different because small, unpredictable events early in a lineage\'s history determine which paths are available later. His colleague Simon Conway Morris countered that convergent evolution — the independent arrival at similar forms by distantly related organisms — suggests that the space of viable biological solutions is actually quite constrained. _______ Conway Morris\'s position implies that something like intelligence, vision, and flight would likely evolve again even if the specific organisms were entirely different.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Accordingly,', C: 'By contrast,', D: 'That is,' },
    answer: 'D', isSPR: false,
    explanation: '"That is" signals that sentence three draws out the full implication of Conway Morris\'s convergence argument: if the viable solution space is constrained, then specific adaptive features would re-evolve even with different organisms. This is a restatement of the prior sentence\'s claim in its most concrete implications. "However" signals contrast with Conway Morris\'s view. "Accordingly" implies the implication follows formally. "By contrast" signals opposition to Conway Morris.',
  },

  {
    id: 'eoi_t_110', num: 110, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Literary theorist Roland Barthes declared "the death of the author" in his 1967 essay of the same name, arguing that once a text is produced, the author\'s intentions become irrelevant to interpretation — meaning is created in the encounter between the text and the reader. This view has been enormously influential in literary criticism, where it legitimized readings that the author might have rejected. _______ it has also been criticized for allowing any reading whatsoever, dissolving the distinction between more and less defensible interpretations.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'For instance,', C: 'That said,', D: 'In fact,' },
    answer: 'A', isSPR: false,
    explanation: '"Furthermore" signals a separate, additional point that extends the assessment: the criticism is a distinct concern beyond the influence described in sentence two. Both the influence and the critique are true of Barthes\'s theory — the sentence adds a further (negative) dimension. "That said" would introduce the critique as a qualification that limits the prior praise, which has merit, but "furthermore" treats the critique as a parallel additional point rather than a qualification. "For instance" would make the critique an illustration. "In fact" would reinforce the influence.',
  },

  {
    id: 'eoi_t_111', num: 111, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'During the late Roman Republic, the office of dictator was a constitutional mechanism — a magistrate could be appointed dictator for a fixed term of six months to deal with a specific emergency, after which they were expected to resign and return to private life. This system worked reasonably well for centuries. _______ Sulla\'s dictatorship of 82–79 BCE and Caesar\'s permanent dictatorship in 44 BCE transformed the office from an emergency tool into a mechanism for personal domination, ultimately destroying the republican institutions it was designed to protect.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'Accordingly,', C: 'Eventually,', D: 'In fact,' },
    answer: 'C', isSPR: false,
    explanation: '"Eventually" signals a temporal development — after centuries of functioning well, the mechanism was ultimately corrupted by Sulla and Caesar. The passage describes a historical arc from constitutional function to abuse. "Similarly" implies the corruption parallels the proper function. "Accordingly" implies the corruption follows from the proper function. "In fact" reinforces rather than develops the prior claim.',
  },

  {
    id: 'eoi_t_112', num: 112, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The sociologist Erving Goffman described social interaction as a kind of performance: we present carefully managed versions of ourselves to different audiences depending on context, much as actors manage their presentations in front of different audiences. This "presentation of self" involves not just what we say but how we dress, the props we use, and the setting in which we choose to interact. _______ Goffman distinguished between "front stage" behavior — what we consciously perform for others — and "backstage" behavior, where the performance is relaxed and the mask comes off.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'By contrast,', B: 'Moreover,', C: 'However,', D: 'For this reason,' },
    answer: 'B', isSPR: false,
    explanation: '"Moreover" signals a further, additional component of Goffman\'s framework — the front/backstage distinction is a separate, elaborating concept beyond the presentation-of-self performance described in sentences one and two. "By contrast" implies the backstage distinction opposes the prior sentences. "However" signals contrast. "For this reason" implies the distinction follows causally from the performance description.',
  },

  {
    id: 'eoi_t_113', num: 113, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'In moral philosophy, the concept of "supererogation" refers to acts that go beyond what morality requires — acts that are praiseworthy if performed but not blameworthy if omitted. Giving a significant portion of one\'s income to effective charities is typically considered supererogatory: morally admirable, but not obligatory. _______ philosopher Peter Singer has argued that affluent people in wealthy nations have a genuine moral obligation to give substantially — making what most consider supererogatory actually obligatory.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'Furthermore,', C: 'However,', D: 'Consequently,' },
    answer: 'C', isSPR: false,
    explanation: '"However" signals that Singer\'s view contradicts the conventional classification of substantial charitable giving as supererogatory. Sentence three introduces a position that challenges the prior classification, reframing the obligatory/supererogatory distinction. "Similarly" implies Singer\'s view parallels the conventional view. "Furthermore" adds a consistent point. "Consequently" implies Singer\'s argument follows from the supererogatory classification.',
  },

  {
    id: 'eoi_t_114', num: 114, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The printing press did not merely change who could read books — it fundamentally altered what knowledge looked like. Before print, texts existed in multiple variant forms as copyists inevitably introduced small changes; there was no authoritative original. Print standardized texts, fixing them in reproducible identical copies that could be checked against each other. _______ this standardization made it possible to argue about the content of a text across long distances, since readers in different cities now had access to identical versions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Nevertheless,', B: 'For instance,', C: 'By contrast,', D: 'In turn,' },
    answer: 'D', isSPR: false,
    explanation: '"In turn" signals a causal chain: standardization → enabling long-distance textual argument. The passage describes a sequence of consequences — print created standardization, and standardization in turn enabled shared reference across distance. "Nevertheless" implies the long-distance argument persists despite some obstacle. "For instance" would make long-distance argument an illustration of standardization. "By contrast" signals opposition.',
  },

  {
    id: 'eoi_t_115', num: 115, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Psychologist Daniel Kahneman proposed that human cognition operates through two systems: System 1, which is fast, automatic, and associative; and System 2, which is slow, deliberate, and rule-governed. Most everyday decisions are handled by System 1, which is efficient but prone to systematic errors — biases. System 2 can correct these biases, but only when it is deployed, and it requires effort. _______ people often default to System 1 even when the stakes would warrant deliberate System 2 reasoning.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'As a result,', C: 'For example,', D: 'By contrast,' },
    answer: 'B', isSPR: false,
    explanation: '"As a result" correctly signals that defaulting to System 1 even in high-stakes situations follows from System 2\'s effort requirement — because System 2 requires effort, people often avoid deploying it. "Furthermore" adds a new separate point. "For example" would make the default behavior an illustration of System 2. "By contrast" signals opposition between the systems rather than a consequence of their properties.',
  },

  {
    id: 'eoi_t_116', num: 116, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The Black Death killed an estimated one-third to one-half of Europe\'s population between 1347 and 1351 — one of the most catastrophic demographic collapses in recorded history. _______ historians have argued that the plague paradoxically contributed to the conditions that enabled the Renaissance: the labor shortage that followed raised wages for surviving workers, weakened feudal hierarchies, and created social mobility that eroded old certainties about the natural order — including, eventually, certainties about the place of the Church.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'Similarly,', C: 'Paradoxically,', D: 'However,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence two explicitly names the "paradox" — the passage uses the word itself — so "paradoxically" is the precise signal. The catastrophic plague leading to conditions for cultural flourishing is a genuine historical paradox. "Therefore" implies the Renaissance conditions are a straightforward consequence. "Similarly" implies the Renaissance conditions parallel the plague\'s catastrophe. "However" signals contrast rather than paradox.',
  },

  {
    id: 'eoi_t_117', num: 117, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Philosophers of mind have proposed multiple theories to explain consciousness, ranging from substance dualism — the view that mind and body are fundamentally different kinds of things — to physicalism, which holds that mental states are identical to or constituted by physical brain states. Each theory faces serious objections. _______ the "hard problem" of consciousness — explaining why physical processes in the brain are accompanied by subjective experience at all — remains unsolved on any current theory.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For instance,', B: 'In contrast,', C: 'Nevertheless,', D: 'More specifically,' },
    answer: 'A', isSPR: false,
    explanation: '"For instance" introduces the hard problem as a specific example of the serious objections mentioned in sentence three — it is an illustration of what the objections look like in practice. "In contrast" signals opposition. "Nevertheless" implies the hard problem persists despite some resolution. "More specifically" would also work here, narrowing from general objections to one — but "for instance" more clearly frames it as one example among possible others.',
  },

  {
    id: 'eoi_t_118', num: 118, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'For decades, medical educators assumed that students learned best through passive observation — watching experienced physicians perform procedures before attempting them — supplemented by lecture-based instruction. _______ research in cognitive science and medical education has established that active retrieval practice, spaced repetition, and simulation-based training produce far superior retention and skill transfer than passive observation, regardless of the expertise level of the observed practitioner.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'For this reason,', C: 'More recently,', D: 'Granted,' },
    answer: 'C', isSPR: false,
    explanation: '"More recently" signals a temporal development — the cognitive science research represents newer findings that challenge the longstanding assumption. The passage describes a shift in understanding across time. "Similarly" implies the research parallels the prior assumption. "For this reason" implies the research follows from the prior assumption. "Granted" introduces a concession, but sentence two challenges rather than qualifies the prior claim.',
  },

  {
    id: 'eoi_t_119', num: 119, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The philosopher Simone de Beauvoir argued in The Second Sex (1949) that woman is not born but made — that femininity is not a natural state but a social construction imposed on individuals assigned female at birth through a process of enculturation that begins in infancy. She identified the mechanism as the treatment of man as the universal human and woman as the "Other" — defined always in relation to and deviation from the male norm. _______ every social institution, from language to law to religion, encodes this hierarchy and reproduces it across generations.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'Consequently,', C: 'For de Beauvoir,', D: 'However,' },
    answer: 'C', isSPR: false,
    explanation: '"For de Beauvoir" attributes the claim in sentence three specifically to her argument — it signals that the following statement is part of her theoretical framework rather than an independent claim or a logical consequence. Sentence three draws out the institutional implication of her argument about the Other, and attributing it to de Beauvoir keeps the exposition within her framework. "Therefore" implies sentence three follows as a logical consequence. "Consequently" implies causation. "However" signals contrast.',
  },

  {
    id: 'eoi_t_120', num: 120, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Early maps of the African interior, produced by European cartographers in the eighteenth and early nineteenth centuries, famously contained large areas labeled "terra incognita" or filled with speculative geography — mythical mountains, imagined rivers, and invented kingdoms. As European expeditions penetrated deeper into the continent, these blank and speculative spaces were progressively filled in with surveyed geography. _______ the replacement of imagined geography with surveyed geography was not neutral: it was inseparable from the colonial project of transforming African territories into assets to be extracted and administered.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Similarly,', C: 'Nevertheless,', D: 'Crucially,' },
    answer: 'D', isSPR: false,
    explanation: '"Crucially" flags that the following sentence identifies the politically and ethically essential dimension of the mapping process — that it was inseparable from colonialism is not merely additional context but the most important interpretive claim. "Furthermore" adds a consistent supporting point without signaling its critical importance. "Similarly" implies the colonial connection parallels the geographical correction. "Nevertheless" implies the colonial connection persists despite something.',
  },

];


const DL_EOI4_SYNTHESIS = [

  // ── EASY (7) ──────────────────────────────────────────────────────────────

  {
    id: 'eoi_s_091', num: 91, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Marie Curie was a Polish-French physicist and chemist born in Warsaw in 1867.',
      'She was the first woman to win a Nobel Prize, the first person to win Nobel Prizes in two different sciences, and remains the only person to have won in both Physics and Chemistry.',
      'Her Nobel Prize in Physics (1903) was for her research on radiation; her Nobel Prize in Chemistry (1911) was for the discovery of the elements polonium and radium.',
      'She coined the term "radioactivity."',
      'She died in 1934 from aplastic anemia, almost certainly caused by decades of exposure to radiation.',
    ],
    noteTask: 'introduce Marie Curie to an unfamiliar audience and convey what made her career historically significant',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Marie Curie coined the term "radioactivity."',
      B: 'Marie Curie was a Polish-French scientist who became the first person to win Nobel Prizes in two different sciences — Physics (1903) and Chemistry (1911) — making her a uniquely significant figure in the history of science.',
      C: 'Curie died in 1934 from aplastic anemia caused by decades of radiation exposure.',
      D: 'Curie discovered polonium and radium, for which she won the 1911 Nobel Prize in Chemistry.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces Curie (name, nationality, field), states her historical significance (first to win Nobels in two sciences), and names the prizes. A gives only one minor accomplishment. C describes only her death. D gives only one set of discoveries.',
  },

  {
    id: 'eoi_s_092', num: 92, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The placebo effect refers to the measurable improvement in a patient\'s condition following a treatment that has no pharmacological activity.',
      'The effect can be physiological as well as psychological: studies have shown real changes in blood pressure, pain markers, and immune function following placebo administration.',
      'The strength of the placebo effect is influenced by factors including the color of pills, the apparent authority of the provider, the setting, and the patient\'s expectations.',
      'Open-label placebos — in which patients know they are taking a placebo — have been shown to produce significant benefits in some conditions, including IBS and depression.',
      'The placebo effect is a fundamental challenge in clinical trial design, which is why randomized controlled trials use control groups receiving placebos.',
    ],
    noteTask: 'explain the placebo effect and one aspect of it that is particularly surprising',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The placebo effect is a fundamental challenge in clinical trial design.',
      B: 'The strength of the placebo effect depends on factors like pill color, provider authority, and patient expectations.',
      C: 'The placebo effect is the improvement in a patient\'s condition from a pharmacologically inactive treatment; remarkably, open-label placebos — where patients know they are taking a placebo — still produce measurable benefits in some conditions.',
      D: 'The placebo effect can produce real physiological changes, including alterations in blood pressure and immune function.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C defines the placebo effect and highlights the most surprising aspect: that open-label placebos (where patients know the treatment is a placebo) still work — directly challenging the expectation that belief is required. A gives only the clinical trial implication. B describes moderating factors without explaining what the effect is. D describes the physiological nature, which is interesting but less surprising than open-label placebos working.',
  },

  {
    id: 'eoi_s_093', num: 93, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The French Revolution began in 1789 with the convening of the Estates-General and escalated through the storming of the Bastille on July 14, 1789.',
      'Key revolutionary events included the abolition of feudalism, the Declaration of the Rights of Man and of the Citizen, the execution of Louis XVI in 1793, and the Reign of Terror.',
      'The Revolution ended the absolute monarchy in France and introduced principles of liberty, equality, and popular sovereignty.',
      'Napoleon Bonaparte rose to power in the wake of the Revolution, eventually becoming Emperor in 1804.',
      'The French Revolution\'s ideals spread across Europe and influenced subsequent independence movements and democratic revolutions worldwide.',
    ],
    noteTask: 'summarize the French Revolution — covering what it ended, what principles it introduced, and its broader historical significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The storming of the Bastille on July 14, 1789, is often considered the symbolic beginning of the French Revolution.',
      B: 'The French Revolution ended French absolute monarchy, established principles of liberty, equality, and popular sovereignty, and spread these ideals across Europe — influencing democratic movements worldwide.',
      C: 'Napoleon Bonaparte rose to power following the French Revolution and became Emperor in 1804.',
      D: 'The Reign of Terror was one of the most violent phases of the French Revolution.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B addresses all three required components: what it ended (absolute monarchy), what principles it introduced (liberty, equality, popular sovereignty), and broader significance (spread across Europe, influenced democratic movements). A gives only the starting event. C gives only Napoleon\'s rise. D gives only one violent episode.',
  },

  {
    id: 'eoi_s_094', num: 94, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'DNA replication is the process by which a cell copies its DNA before dividing.',
      'The double helix "unzips" along the length of the molecule, and each strand serves as a template for a new complementary strand.',
      'The enzyme DNA polymerase adds nucleotides to the growing strand in a specific sequence — A pairs with T, and G pairs with C.',
      'This process is called "semiconservative replication" because each new DNA molecule contains one original strand and one newly synthesized strand.',
      'Errors in replication can cause mutations; cells have several proofreading mechanisms that catch and correct most errors.',
    ],
    noteTask: 'explain DNA replication to an unfamiliar audience, including what makes it "semiconservative"',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'DNA replication errors can cause mutations, but cells have proofreading mechanisms to catch most of them.',
      B: 'DNA replication is the process by which a cell copies its DNA by unzipping the double helix and using each strand as a template for a new complementary strand; the result is called "semiconservative" because each new molecule contains one original and one new strand.',
      C: 'DNA polymerase adds nucleotides following the rule that A pairs with T and G pairs with C.',
      D: 'Before a cell divides, it must copy its DNA so each daughter cell receives a complete genome.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B explains the process (unzipping the helix, using each strand as a template) and defines "semiconservative" (each new molecule has one original + one new strand). Both required components are present. A describes error correction without explaining the process or semiconservative replication. C describes base pairing without explaining the full process. D provides motivation without explaining the mechanism or semiconservative nature.',
  },

  {
    id: 'eoi_s_095', num: 95, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Apollo 11 mission launched on July 16, 1969, and landed on the Moon on July 20, 1969.',
      'Astronauts Neil Armstrong and Buzz Aldrin landed on the lunar surface in the Eagle module; Michael Collins remained in orbit in the Command Module.',
      'Armstrong became the first human to walk on the Moon, famously saying: "That\'s one small step for man, one giant leap for mankind."',
      'The mission fulfilled President Kennedy\'s 1961 challenge to land a man on the Moon before the end of the decade.',
      'Armstrong and Aldrin spent approximately 2.5 hours on the lunar surface and collected 21.5 kilograms of lunar samples.',
    ],
    noteTask: 'introduce the Apollo 11 mission and use Armstrong\'s famous quotation to convey its significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Neil Armstrong spent approximately 2.5 hours on the lunar surface and collected 21.5 kilograms of lunar samples.',
      B: 'The Apollo 11 mission landed astronauts Neil Armstrong and Buzz Aldrin on the Moon on July 20, 1969 — fulfilling Kennedy\'s challenge and marking what Armstrong called "one giant leap for mankind."',
      C: 'Michael Collins remained in orbit while Armstrong and Aldrin descended to the lunar surface.',
      D: 'Armstrong said: "That\'s one small step for man, one giant leap for mankind."',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the mission (names, date, landing), states its significance (fulfilling Kennedy\'s challenge), and uses Armstrong\'s quotation to convey the moment\'s magnitude. A gives only logistical details. C gives only Collins\'s role. D uses only the quotation without introducing the mission or its significance.',
  },

  {
    id: 'eoi_s_096', num: 96, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Climate feedback loops are processes in which an initial change in climate triggers a secondary effect that amplifies or dampens the original change.',
      'The ice-albedo feedback is a positive feedback: as Arctic ice melts, darker ocean water is exposed, absorbing more solar radiation, raising temperatures further, melting more ice.',
      'The water vapor feedback is also positive: warming increases atmospheric water vapor, which is itself a greenhouse gas, amplifying warming.',
      'The lapse rate feedback is negative: a warming atmosphere decreases the rate at which temperature drops with altitude, slightly reducing the greenhouse effect.',
      'Positive feedback loops are of particular concern because they can accelerate warming beyond initial projections.',
    ],
    noteTask: 'explain what climate feedback loops are and distinguish between positive and negative feedbacks using one example of each',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Climate feedback loops can be positive or negative, with positive feedbacks of particular concern because they accelerate warming.',
      B: 'Climate feedback loops are processes in which initial climate changes trigger secondary effects that amplify or dampen the original change; the ice-albedo feedback is a positive example (melting ice exposes darker water that absorbs more heat), while the lapse rate feedback is a negative one (reduced temperature drop with altitude slightly counters warming).',
      C: 'The ice-albedo and water vapor feedbacks are both positive, potentially accelerating warming beyond initial projections.',
      D: 'As Arctic ice melts, it exposes darker ocean water that absorbs more solar radiation, further raising temperatures.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B defines feedback loops, gives one positive example (ice-albedo), and gives one negative example (lapse rate) — all three required components. A gives only the distinction and a general concern. C gives two positive examples without a negative example. D describes only the ice-albedo feedback without explaining feedback loops or distinguishing types.',
  },

  {
    id: 'eoi_s_097', num: 97, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Industrial Revolution began in Britain in the latter half of the eighteenth century and spread to Europe and North America during the nineteenth century.',
      'Key technological innovations included the steam engine, power loom, blast furnace, and later, the internal combustion engine and electric power.',
      'The transition from agricultural to industrial economies concentrated workers in urban factories, transforming patterns of work, family life, and social organization.',
      'Industrial production dramatically increased the output of goods, lowering costs and raising material living standards for many — though the conditions for industrial workers were often dangerous and exploitative.',
      'The Industrial Revolution is considered one of the most significant transformations in human history, comparable in scope to the Neolithic Revolution.',
    ],
    noteTask: 'introduce the Industrial Revolution and convey both its transformative benefits and its costs',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Industrial Revolution began in Britain in the late eighteenth century and spread across Europe and North America.',
      B: 'The Industrial Revolution transformed economies, work, and social organization — raising material living standards through increased production, but at significant cost to workers who faced dangerous conditions and exploitation.',
      C: 'Key innovations of the Industrial Revolution included the steam engine, power loom, and internal combustion engine.',
      D: 'The Industrial Revolution is comparable in historical significance to the Neolithic Revolution.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B conveys the transformation (economies, work, social organization), the benefits (raised living standards), and the costs (dangerous conditions, exploitation). Both required components are present. A gives only origin and spread. C gives only technological innovations. D gives only a comparative significance statement.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'eoi_s_098', num: 98, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'A 2022 study led by Dr. Priya Mehta at the Indian Institute of Technology examined whether financial incentives could sustainably increase handwashing behavior among rural households in Rajasthan.',
      'The study randomized 480 households into two groups: one received cash incentives for verified handwashing compliance over six months; the other received educational materials only.',
      'During the six-month incentive period, the incentive group showed handwashing compliance 62% of the time, compared to 31% in the education-only group.',
      'After the incentives were removed, compliance in the incentive group fell to 34% within three months — virtually identical to the education-only group.',
      'The researchers concluded that financial incentives produced short-term behavior change but did not create durable hygiene habits.',
    ],
    noteTask: 'present the study\'s key finding in a way that distinguishes between the immediate and lasting effects of the incentive',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'An IIT study found that cash incentives increased handwashing compliance from 31% to 62%.',
      B: 'Financial incentives for handwashing compliance doubled compliance during the six-month incentive period — but within three months of removal, rates fell to 34%, virtually the same as the education-only group, indicating that incentives produced short-term behavior change without creating durable habits.',
      C: 'Dr. Priya Mehta led a study on handwashing behavior in rural Rajasthan.',
      D: 'Handwashing education alone produced 31% compliance, compared to 62% with financial incentives.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states the short-term effect (doubled compliance, 31% to 62%), the post-incentive collapse (fell to 34%, matching the control group), and the conclusion (short-term change, no durable habits). The distinction between immediate and lasting effects is explicit. A gives only the short-term effect. C gives only authorship. D gives only the during-period comparison without the post-incentive outcome.',
  },

  {
    id: 'eoi_s_099', num: 99, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Psychologist Stanley Milgram conducted his obedience experiments at Yale University between 1961 and 1963.',
      'Participants were instructed by an authority figure to administer electric shocks of increasing intensity to a "learner" (actually a confederate) who answered questions incorrectly.',
      'Approximately 65% of participants administered the maximum shock level of 450 volts — even when the learner screamed, pleaded to stop, and then went silent.',
      'No actual shocks were delivered; the learners were acting.',
      'Milgram concluded that ordinary people are capable of committing harmful acts when instructed by a perceived authority figure — a finding he connected to the behavior of Holocaust perpetrators.',
    ],
    noteTask: 'describe what the Milgram experiments found and explain their significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'In Milgram\'s experiments, participants were instructed to administer electric shocks of increasing intensity to a confederate.',
      B: 'Milgram\'s obedience experiments showed that approximately 65% of ordinary people would administer apparently lethal shocks to a protesting stranger when instructed by an authority figure — a finding Milgram connected to how ordinary people can participate in atrocities like the Holocaust.',
      C: 'No actual shocks were administered in Milgram\'s experiments.',
      D: 'The experiments were conducted at Yale University between 1961 and 1963.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states the key finding (65% administered maximum shocks to protesting strangers under authority), the significance (ordinary people can participate in atrocities, connected to the Holocaust). Both required components are present. A describes only the procedure. C gives only a methodology note. D gives only location and dates.',
  },

  {
    id: 'eoi_s_100', num: 100, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Langston Hughes was a central figure of the Harlem Renaissance, a cultural movement in African American literature, music, and art centered in New York in the 1920s and 1930s.',
      'His 1926 essay "The Negro Artist and the Racial Mountain" argued that Black artists should embrace rather than reject their racial identity and cultural heritage.',
      'In the essay, Hughes wrote: "We younger Negro artists who create now intend to express our individual dark-skinned selves without fear or shame."',
      'Hughes incorporated jazz and blues rhythms into poetry, creating what became known as jazz poetry.',
      'His poem "Harlem" (1951), which begins "What happens to a dream deferred?", inspired Lorraine Hansberry\'s play A Raisin in the Sun.',
    ],
    noteTask: 'introduce Langston Hughes and use a quotation to convey his position on Black artistic identity',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Langston Hughes pioneered jazz poetry by incorporating jazz and blues rhythms into verse.',
      B: 'Langston Hughes was a key figure of the Harlem Renaissance who argued that Black artists should embrace rather than reject their cultural heritage; as he declared, "We younger Negro artists who create now intend to express our individual dark-skinned selves without fear or shame."',
      C: 'Hughes\'s poem "Harlem" inspired Lorraine Hansberry\'s A Raisin in the Sun.',
      D: 'Hughes wrote "The Negro Artist and the Racial Mountain" in 1926.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces Hughes (Harlem Renaissance figure), states his position on Black artistic identity (embrace rather than reject cultural heritage), and uses the quotation to convey that position directly. A gives only his jazz poetry innovation. C gives only an influence fact. D gives only a date and title.',
  },

  {
    id: 'eoi_s_101', num: 101, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The concept of "herd immunity" refers to the indirect protection of unimmunized individuals when a sufficiently large proportion of a population has become immune to an infectious disease.',
      'The threshold for herd immunity varies by disease: measles requires approximately 95% immunity; polio requires approximately 80–85%; COVID-19 estimates varied but were generally above 70%.',
      'Immunity can be acquired through natural infection or vaccination.',
      'Herd immunity does not require 100% vaccination; even non-vaccinated individuals benefit when the virus has few hosts through which to spread.',
      'The concept is contested when applied to COVID-19 because natural infection confers variable immunity and variants can evade prior immunity.',
    ],
    noteTask: 'explain herd immunity to an unfamiliar audience, including why it matters even for unvaccinated individuals',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Herd immunity thresholds vary: measles requires 95% immunity, while COVID-19 estimates were generally above 70%.',
      B: 'Herd immunity is the indirect protection of unvaccinated individuals that occurs when enough of a population is immune to a disease — even those who have not been vaccinated benefit because widespread immunity leaves the virus few hosts through which to spread.',
      C: 'Immunity can be acquired through either natural infection or vaccination.',
      D: 'The herd immunity concept is contested when applied to COVID-19 because variants can evade prior immunity.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B defines herd immunity (indirect protection for unimmunized individuals), explains the mechanism (virus has few hosts), and directly addresses why it matters for unvaccinated people. Both required components are present. A gives only threshold numbers. C gives only the acquisition methods. D gives only the COVID-19 controversy.',
  },

  {
    id: 'eoi_s_102', num: 102, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'In pre-modern Europe, spices such as pepper, cinnamon, cloves, and nutmeg were extraordinarily valuable — worth more than gold by weight in some cases.',
      'Their value stemmed partly from scarcity (they could only be grown in tropical Asia) and partly from their uses: preserving food, masking the flavor of spoiled meat, and medicinal applications.',
      'The desire to control the spice trade drove Portuguese and Spanish exploration of sea routes to Asia beginning in the late fifteenth century.',
      'Vasco da Gama\'s 1498 route around Africa to India broke the Arab and Venetian monopoly on the spice trade and redirected vast wealth to Portugal.',
      'The profitability of the spice trade directly funded subsequent European colonialism in Asia and the Americas.',
    ],
    noteTask: 'explain the role of spices in driving European exploration and the consequences of that exploration',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Pepper, cinnamon, and nutmeg were worth more than gold by weight in pre-modern Europe.',
      B: 'The extraordinary value of Asian spices — arising from scarcity and diverse uses — drove Portuguese and Spanish exploration of sea routes; da Gama\'s 1498 route around Africa broke existing trade monopolies and redirected wealth to Portugal, with the spice trade\'s profits directly funding subsequent European colonialism.',
      C: 'Vasco da Gama sailed around Africa to India in 1498.',
      D: 'Spices were used in pre-modern Europe to preserve food and for medicinal purposes.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B explains why spices drove exploration (scarcity and value), describes what that exploration achieved (da Gama breaking monopolies, wealth to Portugal), and states the consequence (funded colonialism). Both required components are present and connected. A gives only the value without the exploration connection. C gives only da Gama\'s voyage. D gives only the uses.',
  },

  {
    id: 'eoi_s_103', num: 103, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The concept of "implicit bias" refers to unconscious attitudes or stereotypes that affect behavior without the person\'s awareness or conscious endorsement.',
      'The Implicit Association Test (IAT), developed by psychologists Anthony Greenwald and Mahzarin Banaji in 1998, measures the strength of unconscious associations between concepts.',
      'Studies using the IAT have found implicit racial biases in a majority of white Americans and in many Black and Hispanic Americans as well.',
      'Critics of the IAT argue that the test\'s predictive validity for real-world discriminatory behavior is limited.',
      'Proponents argue that even weak implicit biases can have significant aggregate effects when multiplied across thousands of decisions.',
    ],
    noteTask: 'summarize the concept of implicit bias, name the tool used to measure it, and acknowledge the debate about its significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Implicit bias refers to unconscious attitudes affecting behavior; the IAT, developed in 1998, measures these associations, though critics question its predictive validity for real-world discrimination while proponents argue even weak biases have significant aggregate effects.',
      B: 'The Implicit Association Test was developed by Greenwald and Banaji in 1998 to measure unconscious associations.',
      C: 'Studies have found implicit racial biases in a majority of white Americans.',
      D: 'Implicit biases are unconscious attitudes that affect behavior without a person\'s awareness.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A summarizes implicit bias (unconscious attitudes affecting behavior), names the IAT, and presents both sides of the debate (critics: limited predictive validity; proponents: aggregate effects). All three required components are present. B gives only the IAT\'s development. C gives only one finding. D defines implicit bias without the IAT or the debate.',
  },

  {
    id: 'eoi_s_104', num: 104, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The gig economy refers to a labor market characterized by short-term, flexible work arrangements facilitated by digital platforms, rather than permanent employment.',
      'Examples include Uber drivers, Deliveroo couriers, and TaskRabbit handypeople.',
      'Proponents argue that gig work offers flexibility and low barriers to entry for workers, and efficiency gains for consumers.',
      'Critics argue that gig workers are misclassified as independent contractors rather than employees, denying them benefits like health insurance, paid leave, and minimum wage protections.',
      'In 2021, the UK Supreme Court ruled that Uber drivers were workers entitled to minimum wage and holiday pay, not independent contractors.',
    ],
    noteTask: 'explain the gig economy, present both a pro and a con argument, and indicate how a legal case is relevant to the debate',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The gig economy relies on short-term work facilitated by digital platforms like Uber and Deliveroo.',
      B: 'The gig economy — flexible, platform-facilitated work — is praised for its flexibility and efficiency but criticized for misclassifying workers as contractors and denying them benefits; the UK Supreme Court\'s 2021 ruling that Uber drivers are workers entitled to minimum wage directly engaged this latter concern.',
      C: 'In 2021, the UK Supreme Court ruled that Uber drivers were workers, not independent contractors.',
      D: 'Critics argue that gig workers are denied benefits like health insurance and paid leave because they are classified as independent contractors.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B explains the gig economy (flexible, platform-facilitated work), presents a pro (flexibility, efficiency) and a con (misclassification, denied benefits), and uses the UK Supreme Court case to illustrate the legal relevance to the contractor classification debate. All three required components are present. A gives only the definition. C gives only the legal case. D gives only the con argument.',
  },

  {
    id: 'eoi_s_105', num: 105, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before the Copernican Revolution, the dominant European model of the universe was geocentric: Earth sat at the center, with the Sun, Moon, planets, and stars revolving around it.',
      'Nicolaus Copernicus published De revolutionibus orbium coelestium in 1543, proposing a heliocentric model with the Sun at the center.',
      'Copernicus\'s model required some epicycles and was not immediately more accurate than the geocentric model, but it was simpler.',
      'Galileo\'s telescopic observations in 1610 — including the moons of Jupiter and the phases of Venus — provided evidence inconsistent with the geocentric model.',
      'Johannes Kepler\'s laws of planetary motion, derived from Tycho Brahe\'s observational data, showed that planets move in ellipses around the Sun — eliminating the need for epicycles.',
    ],
    noteTask: 'place the Copernican Revolution in the context of the prior geocentric model and trace the key developments that eventually replaced it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Copernicus proposed a heliocentric model in 1543 to replace the geocentric model.',
      B: 'The geocentric model had placed Earth at the center of the universe; Copernicus proposed heliocentrism in 1543, Galileo\'s 1610 telescopic observations provided evidence against geocentrism, and Kepler\'s elliptical laws eliminated the last structural need for the old model.',
      C: 'Galileo observed the moons of Jupiter and phases of Venus in 1610.',
      D: 'Kepler showed that planets travel in ellipses around the Sun, derived from Tycho Brahe\'s data.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B provides the prior model (geocentric), traces the key developments (Copernicus 1543, Galileo 1610, Kepler ellipses), and shows how the old model was progressively replaced. The historical arc is complete. A gives only the Copernican proposal. C gives only Galileo\'s observations. D gives only Kepler\'s contribution.',
  },

  {
    id: 'eoi_s_106', num: 106, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Sandra Cisneros is an American novelist, poet, and short story writer born in Chicago in 1954.',
      'Her debut novel The House on Mango Street (1984) is a coming-of-age story about Esperanza, a young Latina girl growing up in a Chicago barrio.',
      'The novel is written in a series of vignettes that blend prose and poetry, blurring the boundaries between genres.',
      'Cisneros has described the book as an attempt to write about the kind of house and neighborhood she grew up in — one that was "not in the books I read as a child."',
      'The House on Mango Street is one of the most widely taught texts in American secondary schools and universities.',
    ],
    noteTask: 'introduce The House on Mango Street and use a quotation to convey the personal motivation behind it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The House on Mango Street is one of the most widely taught texts in American schools and universities.',
      B: 'Sandra Cisneros\'s 1984 debut novel The House on Mango Street is a vignette-based coming-of-age story about a young Latina girl in a Chicago barrio; Cisneros wrote it to depict the kind of neighborhood "not in the books I read as a child."',
      C: 'Cisneros was born in Chicago in 1954 and grew up in a barrio neighborhood.',
      D: 'The novel blends prose and poetry in a series of vignettes, blurring genre boundaries.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the work (title, author, year, type), describes its content (coming-of-age, Latina girl, Chicago barrio), and uses Cisneros\'s quotation to convey her motivation (writing the neighborhood absent from books she read). Both required components are present. A gives only the book\'s educational reach. C gives only biographical facts. D describes only the formal technique.',
  },

  {
    id: 'eoi_s_107', num: 107, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before 1800, global average life expectancy at birth was approximately 30–35 years.',
      'The dramatic increase in life expectancy since then is largely attributed to reductions in child mortality rather than extended lifespans for adults.',
      'Key drivers include: clean water and sanitation infrastructure (reducing waterborne disease), vaccination campaigns (eliminating or controlling smallpox, polio, measles), and improved maternal healthcare.',
      'Global average life expectancy reached approximately 73 years by 2020.',
      'Significant disparities remain: life expectancy in some Sub-Saharan African countries is below 60, while in Japan it exceeds 84.',
    ],
    noteTask: 'explain what drove the increase in life expectancy since 1800 and note the key clarification about what "life expectancy" gains actually reflect',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Life expectancy globally reached approximately 73 years by 2020, compared to 30–35 years before 1800.',
      B: 'The gains in life expectancy since 1800 — driven primarily by clean water, vaccination, and maternal care — mostly reflect reductions in child mortality rather than longer adult lifespans, meaning the average person born today is less likely to die young, not significantly more likely to reach old age than one born in 1750.',
      C: 'Significant disparities in life expectancy remain: Sub-Saharan African countries average below 60 years while Japan exceeds 84.',
      D: 'Vaccination campaigns eliminated or controlled diseases like smallpox, polio, and measles, contributing to longer lives.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B names the key drivers (clean water, vaccination, maternal care) and includes the crucial clarification (gains reflect reduced child mortality, not extended adult lifespans). Both required components are present and well connected. A gives only the before/after numbers without drivers or clarification. C gives only the disparity data. D gives only one driver without the clarification.',
  },


  // ── HARD (13) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_s_108', num: 108, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Historian Eric Hobsbawm coined the term "invented tradition" in 1983 to describe practices presented as ancient that are actually recent creations.',
      'Classic examples include the Scottish Highland tradition of tartan and kilts (largely constructed in the nineteenth century as British romanticization of Scotland), and many national anthems and flags created in the nineteenth and twentieth centuries.',
      'Hobsbawm argued that invented traditions serve to legitimate present social and political arrangements by connecting them to an apparently timeless past.',
      'Hobsbawm stated: "Invented traditions are responses to novel situations which take the form of reference to old situations, or which establish their own past by quasi-obligatory repetition."',
      'The concept has been applied to analyze nationalism, colonialism, and the construction of ethnic identities.',
    ],
    noteTask: 'introduce Hobsbawm\'s concept of "invented tradition," use a quotation to define it, and give a concrete example',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Hobsbawm coined the term "invented tradition" to describe practices presented as ancient that are actually recent creations.',
      B: 'Eric Hobsbawm introduced the concept of "invented tradition" — practices presented as ancient that are actually recent — defining them as "responses to novel situations which take the form of reference to old situations"; Scottish Highland dress, largely constructed in the nineteenth century, is a vivid example.',
      C: 'Invented traditions legitimate present social arrangements by connecting them to an apparently timeless past.',
      D: 'The concept of invented tradition has been applied to analyze nationalism, colonialism, and ethnic identity construction.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the concept (recent practices presented as ancient), uses the quotation to define it, and gives the Scottish Highland dress example. All three required components are present. A introduces the concept without the quotation or example. C gives only the function of invented traditions. D gives only the concept\'s applications.',
  },

  {
    id: 'eoi_s_109', num: 109, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'In 2019, approximately 820 million people globally were chronically undernourished.',
      'The world currently produces enough food calories to feed approximately 10 billion people — significantly more than the 2019 global population of 7.7 billion.',
      'Approximately one-third of all food produced globally is lost or wasted at some point between production and consumption.',
      'Hunger is concentrated in sub-Saharan Africa and South Asia; these regions account for approximately 75% of the world\'s chronically hungry.',
      'Food security researchers generally argue that hunger is primarily a problem of distribution, access, and purchasing power — not of global production capacity.',
    ],
    noteTask: 'use quantitative data to make and support the argument that global hunger is not primarily a production problem',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Approximately 820 million people were chronically undernourished in 2019.',
      B: 'The world produces enough food to feed over 10 billion people — more than the current global population — yet 820 million go chronically hungry; with one-third of all food lost or wasted and hunger concentrated in regions of poverty rather than low production, the evidence points to distribution and access as the core problem, not output.',
      C: 'Food is lost or wasted at a rate of approximately one-third of all production.',
      D: 'Sub-Saharan Africa and South Asia account for approximately 75% of the world\'s chronically hungry.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B marshals multiple quantitative data points to support the distribution argument: global production exceeds population needs (10B capacity vs. 7.7B population), yet 820M are hungry; one-third of food is wasted; hunger is concentrated in poor regions. The argument is explicitly stated and supported. A gives only the hungry count. C gives only the waste figure. D gives only the regional concentration.',
  },

  {
    id: 'eoi_s_110', num: 110, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The concept of "moral luck" was introduced by philosophers Thomas Nagel and Bernard Williams in 1976.',
      'Moral luck refers to the degree to which moral judgments about a person are influenced by factors outside their control.',
      'Nagel identified four types: resultant luck (whether an action results in harm), circumstantial luck (whether one is placed in circumstances requiring moral choices), constitutive luck (having the character and dispositions one has), and causal luck (how one\'s actions are determined by prior causes).',
      'The concept creates tension with the intuition that people should be morally assessed only for what is within their control.',
      'Nagel stated: "How things turn out affects our moral assessments in ways that seem arbitrary from a prior perspective, but which we cannot simply disregard."',
    ],
    noteTask: 'introduce moral luck, explain the tension it creates, and use Nagel\'s quotation to capture this tension',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Nagel and Williams introduced the concept of moral luck in 1976.',
      B: 'Moral luck — introduced by Nagel and Williams in 1976 — refers to how factors outside our control affect moral judgments of us, creating tension with the principle that people should only be judged for what they control; as Nagel put it, moral outcomes "affect our moral assessments in ways that seem arbitrary from a prior perspective, but which we cannot simply disregard."',
      C: 'Nagel identified four types of moral luck: resultant, circumstantial, constitutive, and causal.',
      D: 'Moral luck refers to the influence of factors outside a person\'s control on moral assessments of them.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces moral luck (Nagel and Williams, 1976), explains the tension (judged for factors outside control, vs. the principle that only controlled things merit judgment), and uses the quotation to capture the paradox (seems arbitrary but cannot be disregarded). All three required components are present. A gives only authorship and date. C lists only the types. D defines the concept without the tension or the quotation.',
  },

  {
    id: 'eoi_s_111', num: 111, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before germ theory, the dominant explanation for the spread of infectious disease was miasma theory — the idea that disease was caused by "bad air" arising from decaying organic matter.',
      'John Snow\'s 1854 investigation of a cholera outbreak in London\'s Soho district is considered a founding moment of modern epidemiology.',
      'Snow mapped cholera cases and traced them to a single contaminated water pump on Broad Street, demonstrating that the disease spread through contaminated water rather than air.',
      'His methodology — systematic case mapping and source tracing — established the template for epidemiological investigation.',
      'Snow\'s work predated the discovery of Vibrio cholerae by Robert Koch in 1883, meaning he identified the transmission route without knowing the pathogen.',
    ],
    noteTask: 'place Snow\'s 1854 investigation in the context of the prior miasma theory it challenged, describe his methodology, and indicate its significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'John Snow mapped cholera cases in 1854 to a contaminated water pump, disproving miasma theory.',
      B: 'When miasma theory held that bad air caused disease, John Snow\'s 1854 case-mapping investigation traced a cholera outbreak to a contaminated water pump — demonstrating waterborne transmission before germ theory — and established systematic case mapping and source tracing as the template for epidemiological investigation.',
      C: 'Snow\'s work predated Robert Koch\'s discovery of Vibrio cholerae by nearly 30 years.',
      D: 'John Snow is considered a founding figure of modern epidemiology.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B provides the prior theory (miasma), describes Snow\'s methodology (case mapping, source tracing), and states its significance (established the epidemiological template; achieved before germ theory). All three required components are present. A gives only the outcome without the prior context, methodology, or significance. C gives only the pre-germ-theory timing. D gives only the general historical assessment.',
  },

  {
    id: 'eoi_s_112', num: 112, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'A 2023 meta-analysis led by Dr. Yuki Tanaka at Kyoto University reviewed 38 randomized controlled trials examining whether mindfulness-based cognitive therapy (MBCT) reduces relapse rates in patients with recurrent major depression.',
      'The analysis included 2,411 participants across 12 countries.',
      'Patients who received MBCT had a 31% lower relapse rate over a 12-month follow-up period compared to patients receiving usual care or active controls.',
      'The benefit was especially pronounced in patients with three or more prior episodes of depression.',
      'The researchers concluded that MBCT is an evidence-based treatment for preventing recurrence in high-risk patients.',
    ],
    noteTask: 'present the study and its most clinically significant finding, noting for whom the benefit was greatest',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Dr. Yuki Tanaka led a 2023 meta-analysis of 38 trials involving 2,411 participants.',
      B: 'A 2023 Kyoto University meta-analysis of 38 trials found that MBCT reduced 12-month depression relapse rates by 31% compared to standard care — with the benefit especially pronounced in patients with three or more prior episodes, the population at highest risk.',
      C: 'MBCT is an evidence-based treatment for recurrent depression.',
      D: 'The meta-analysis included participants from 12 countries.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B identifies the study (Kyoto, 38 trials), states the most clinically significant finding (31% reduction in relapse), and specifies for whom the benefit was greatest (patients with 3+ prior episodes, highest-risk population). All three required components are present. A gives only methodology. C states only the conclusion. D gives only geographic scope.',
  },

  {
    id: 'eoi_s_113', num: 113, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The philosopher Hannah Arendt developed the concept of "the banality of evil" following her coverage of the Eichmann trial in Jerusalem in 1961.',
      'Arendt argued that Eichmann was not a monster or ideological fanatic but an ordinary bureaucrat — thoughtless rather than evil — who committed atrocities through unthinking compliance with authority.',
      'The concept provoked enormous controversy, particularly among Jewish communities who felt it diminished Eichmann\'s moral responsibility.',
      'Arendt clarified that "banality" referred not to the scale or horror of the evil, which she did not minimize, but to the mediocrity of its agent.',
      'She wrote: "The trouble with Eichmann was precisely that so many were like him, and that the many were neither perverted nor sadistic, that they were, and still are, terribly and terrifyingly normal."',
    ],
    noteTask: 'introduce the concept of the banality of evil, convey Arendt\'s key distinction using a quotation, and acknowledge the controversy it provoked',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Hannah Arendt developed the concept of the banality of evil after covering the Eichmann trial in 1961.',
      B: 'Arendt\'s concept of the banality of evil — arising from the Eichmann trial — argued that atrocities can be committed by ordinary, thoughtless people rather than monsters; her remark that Eichmann and many like him were "terribly and terrifyingly normal" captures this, though it provoked controversy among those who felt it diminished his responsibility.',
      C: 'Arendt clarified that "banality" referred to the mediocrity of the agent, not the scale of the evil.',
      D: 'The Eichmann trial in Jerusalem in 1961 was a defining moment in twentieth-century legal and philosophical thought.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the concept (ordinary/thoughtless people can commit atrocities), uses the quotation to convey the key claim (they were "terribly and terrifyingly normal"), and acknowledges the controversy (diminished responsibility). All three required components are present. A gives only origin and date. C gives only Arendt\'s clarification. D gives only historical context.',
  },

  {
    id: 'eoi_s_114', num: 114, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The opioid epidemic in the United States resulted in approximately 645,000 overdose deaths between 1999 and 2021.',
      'The epidemic is commonly described in three waves: the first (late 1990s) driven by prescription opioids, particularly OxyContin; the second (2010s) driven by heroin as prescription access was restricted; the third (2013–present) driven by illicit fentanyl and synthetic opioids.',
      'Purdue Pharma, manufacturer of OxyContin, aggressively marketed the drug to physicians and downplayed its addictive potential.',
      'In 2022, members of the Sackler family, which owned Purdue Pharma, agreed to pay approximately $6 billion to settle opioid-related lawsuits.',
      'The epidemic has disproportionately affected rural white communities, though Black and Indigenous communities have seen rising rates in the fentanyl wave.',
    ],
    noteTask: 'provide a historical overview of the opioid epidemic using the three-wave framework and indicate who bore initial legal accountability',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The opioid epidemic has caused approximately 645,000 overdose deaths since 1999.',
      B: 'The U.S. opioid epidemic unfolded in three waves: prescription opioids in the late 1990s, heroin in the 2010s as prescriptions were restricted, and synthetic fentanyl from 2013 onward; for its role in the first wave, Purdue Pharma\'s Sackler family agreed to a $6 billion settlement in 2022.',
      C: 'Purdue Pharma aggressively marketed OxyContin and downplayed its addictive potential.',
      D: 'Illicit fentanyl and synthetic opioids have driven the third wave of the epidemic since 2013.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B traces all three waves (prescription opioids, heroin, fentanyl) and names the party that bore initial legal accountability (Purdue/Sackler, $6B settlement). Both required components are present in a coherent historical overview. A gives only the death toll. C gives only Purdue\'s conduct. D gives only the third wave.',
  },

  {
    id: 'eoi_s_115', num: 115, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Philosopher John Stuart Mill developed the "harm principle" in On Liberty (1859): the only legitimate reason for society to restrict individual freedom is to prevent harm to others.',
      'The principle has been enormously influential in liberal political philosophy and law.',
      'Mill stated: "The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others."',
      'Critics argue that the boundary between self-harm and harm to others is difficult to draw: an individual\'s drug use may harm their family; reckless driving harms the public insurance pool.',
      'Libertarians have used the harm principle to argue against paternalistic legislation; communitarians have argued that it underestimates the social embeddedness of individuals.',
    ],
    noteTask: 'introduce Mill\'s harm principle using his own words, and acknowledge that the boundary the principle draws is contested',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Mill\'s harm principle holds that freedom can be restricted only to prevent harm to others.',
      B: 'John Stuart Mill stated in On Liberty (1859) that "the only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others" — but critics argue that the line between self-harm and harm to others is difficult to draw in practice.',
      C: 'Libertarians use the harm principle to oppose paternalistic laws; communitarians challenge its individualist assumptions.',
      D: 'On Liberty was published in 1859 and has been enormously influential in liberal political philosophy.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B uses Mill\'s own words (from the notes) to state the principle and follows with the contested boundary (self-harm vs. harm to others). Both required components are present. A paraphrases without Mill\'s quotation. C describes how the principle is used by different schools without introducing it or using Mill\'s words. D gives only publication information.',
  },

  {
    id: 'eoi_s_116', num: 116, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Economist Joseph Schumpeter introduced the concept of "creative destruction" in his 1942 book Capitalism, Socialism and Democracy.',
      'Schumpeter argued that capitalism grows not through incremental improvement but through periodic revolutionary restructuring in which new industries and technologies destroy existing ones.',
      'Historical examples include: automobiles destroying the carriage and horse trade; digital photography destroying the film industry; streaming platforms destroying the DVD rental market.',
      'Schumpeter stated: "The fundamental impulse that sets and keeps the capitalist engine in motion comes from the new consumer goods, the new methods of production...that the capitalist enterprise creates."',
      'Critics have argued that creative destruction ignores the social costs borne by workers whose industries are displaced.',
    ],
    noteTask: 'introduce Schumpeter\'s concept of creative destruction, use an example to illustrate it, and acknowledge a key criticism',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Schumpeter argued that capitalism grows through periodic revolutionary restructuring rather than incremental improvement.',
      B: 'Joseph Schumpeter\'s concept of "creative destruction" — from Capitalism, Socialism and Democracy (1942) — holds that capitalist growth occurs when new industries and technologies destroy existing ones, as streaming platforms destroyed the DVD rental market; critics note, however, that this process imposes social costs on displaced workers.',
      C: 'Digital photography destroyed the film industry and automobiles destroyed the carriage trade.',
      D: 'Schumpeter\'s concept has been criticized for ignoring the costs borne by displaced workers.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the concept (Schumpeter, 1942, capitalism grows through new industries destroying old ones), illustrates it (streaming vs. DVD rentals), and acknowledges the criticism (social costs for displaced workers). All three required components are present. A gives only the concept without example or criticism. C gives only examples. D gives only the criticism.',
  },

  {
    id: 'eoi_s_117', num: 117, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'A 2021 study at the University of Toronto led by Dr. Aisha Kamara examined whether STEM mentorship programs for Black girls in grades 6–8 improved science self-efficacy and persistence.',
      'Self-efficacy refers to a person\'s belief in their capacity to execute the behaviors required to produce specific performance attainments.',
      'The study randomized 312 students across 14 schools into a mentorship group (meeting twice monthly with a Black woman STEM professional) and a control group receiving standard curriculum only.',
      'After one academic year, mentorship group students showed a 28% improvement in science self-efficacy scores versus 6% in the control group.',
      'Mentorship group students also reported significantly higher intentions to pursue STEM careers at the end of the year.',
    ],
    noteTask: 'present the study, its most important quantitative finding, and its implications for STEM career aspirations',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The study randomized 312 students across 14 schools into a mentorship group and a control group.',
      B: 'A University of Toronto study found that Black girls who met twice monthly with a Black woman STEM professional showed a 28% improvement in science self-efficacy versus 6% for the control group — and reported significantly higher intentions to pursue STEM careers.',
      C: 'Self-efficacy refers to a person\'s belief in their capacity to execute the behaviors needed for specific performance outcomes.',
      D: 'STEM mentorship programs for Black girls improve science self-efficacy and career intentions.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B identifies the study (University of Toronto, Black girl STEM mentorship), states the key quantitative finding (28% vs. 6% self-efficacy improvement), and gives the career aspiration implication (higher STEM career intentions). All three required components are present. A gives only methodology. C gives only the self-efficacy definition. D gives a vague summary without the quantitative finding or specifics.',
  },

  {
    id: 'eoi_s_118', num: 118, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The concept of "intersectionality" was introduced by legal scholar Kimberlé Crenshaw in a 1989 paper.',
      'Crenshaw argued that analyses of race discrimination and sex discrimination considered separately failed to capture the distinct experience of Black women, who faced discrimination at the intersection of both identities.',
      'She illustrated the concept with a legal case in which Black women could not sue General Motors for discrimination because they were not disadvantaged as Black workers (GM hired Black workers, only men) or as female workers (GM hired women, only white).',
      'Crenshaw stated: "Because the intersectional experience is greater than the sum of racism and sexism, any analysis that does not take intersectionality into account cannot sufficiently address the particular manner in which Black women are subordinated."',
      'Intersectionality has since been widely applied across sociology, law, education, and public health to analyze overlapping systems of disadvantage.',
    ],
    noteTask: 'introduce intersectionality, use the GM case example and a quotation to explain why separate analyses are insufficient',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Kimberlé Crenshaw introduced intersectionality in 1989 to analyze the combined effects of race and gender discrimination.',
      B: 'Crenshaw\'s concept of intersectionality — introduced in 1989 — argues that the combined experience of multiple forms of discrimination exceeds the sum of its parts; the GM case, where Black women fell through the gaps of both race and sex discrimination law, illustrates why, as Crenshaw argued, "any analysis that does not take intersectionality into account cannot sufficiently address the particular manner in which Black women are subordinated."',
      C: 'Intersectionality has been applied across sociology, law, education, and public health.',
      D: 'The GM case showed that Black women could not sue for race discrimination (GM hired Black men) or sex discrimination (GM hired white women).',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces intersectionality (1989, experience exceeds sum of parts), uses the GM case to illustrate why separate analyses fail, and uses the quotation to capture why the combined analysis is necessary. All three required components are present and integrated. A introduces the concept without the case or quotation. C gives only the concept\'s reach. D describes only the case without the concept or quotation.',
  },

  {
    id: 'eoi_s_119', num: 119, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Prior to the 2008 global financial crisis, most economists and regulators believed that modern financial markets were largely self-correcting — that the price system efficiently incorporated all available information and that major systemic failures were highly unlikely.',
      'The 2008 crisis, triggered by the collapse of the US subprime mortgage market and the cascading failure of mortgage-backed securities, exposed severe vulnerabilities in banks, insurance companies, and financial systems that risk models had not predicted.',
      'Former Federal Reserve Chairman Alan Greenspan admitted in 2008 Congressional testimony that he had "found a flaw" in his ideology — his belief that the self-interest of banks would protect shareholders.',
      'The crisis required approximately $700 billion in government bailouts in the United States alone.',
      'Post-crisis reforms including the Dodd-Frank Act introduced stress tests, higher capital requirements, and enhanced oversight of systemically important financial institutions.',
    ],
    noteTask: 'place the 2008 financial crisis in the context of prior assumptions, use Greenspan\'s testimony to illustrate the ideological significance of the crisis, and note what was done in response',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The 2008 financial crisis required approximately $700 billion in government bailouts in the United States.',
      B: 'Before 2008, economists assumed financial markets were largely self-correcting; the crisis that year exposed catastrophic flaws in this view — leading Alan Greenspan to acknowledge publicly that he had "found a flaw" in his belief that bank self-interest would protect shareholders — and prompted major regulatory reforms through Dodd-Frank.',
      C: 'Alan Greenspan admitted in 2008 Congressional testimony that he had found a flaw in his ideology.',
      D: 'The Dodd-Frank Act introduced stress tests, capital requirements, and oversight of systemically important financial institutions.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states the prior assumption (self-correcting markets), uses Greenspan\'s testimony to illustrate the ideological significance (he found a flaw in his core belief), and notes the regulatory response (Dodd-Frank). All three required components are present. A gives only the bailout figure. C gives only Greenspan\'s admission. D gives only the regulatory response.',
  },

  {
    id: 'eoi_s_120', num: 120, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Chimamanda Ngozi Adichie is a Nigerian novelist and essayist born in 1977.',
      'Her 2009 TED talk "The Danger of a Single Story" has been viewed over 30 million times and argues that reducing people or places to a single narrative produces dangerous misunderstanding.',
      'In the talk, Adichie describes how as a child in Nigeria she read only British and American books, causing her to believe that literature characters must be white and foreign to be worth writing about.',
      'She stated: "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete. They make one story become the only story."',
      'The talk has been widely used in education to discuss media representation, cultural bias, and the ethics of storytelling.',
    ],
    noteTask: 'introduce "The Danger of a Single Story," use Adichie\'s quotation to convey her central argument, and indicate the talk\'s educational significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Adichie\'s TED talk has been viewed over 30 million times.',
      B: 'Chimamanda Ngozi Adichie\'s 2009 TED talk "The Danger of a Single Story" argues that reducing people or places to a single narrative creates dangerous misunderstanding; as she put it, "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete" — a message widely used in education to discuss representation and storytelling ethics.',
      C: 'As a child, Adichie read only British and American books, which shaped her understanding of who literary characters could be.',
      D: 'Adichie argues that stereotypes are dangerous not because they are untrue but because they are incomplete.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the talk (Adichie, 2009, single story creates misunderstanding), uses the quotation to convey the central argument (stereotypes are incomplete, not necessarily untrue), and indicates the educational significance (used to discuss representation and storytelling ethics). All three required components are present. A gives only the view count. C gives only the personal anecdote. D paraphrases the quotation without introducing the talk or its educational significance.',
  },

];

const DL_EOI4 = [...DL_EOI4_TRANSITIONS, ...DL_EOI4_SYNTHESIS];
