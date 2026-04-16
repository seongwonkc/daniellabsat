'use strict';

// ── SEC — Standard English Conventions (60 questions) ─────────────────────────
// 30 Form/Structure/Sense + 30 Boundaries
// 10 easy / 10 medium / 10 hard per domain
//
// FSS subtypes: Subject-Verb Agreement (gerund, intervening phrase, inverted
// syntax, "as well as", long participial phrase, collective noun, neither/nor),
// Pronoun-Antecedent Agreement (personal number, demonstrative, possessive vs.
// contraction), Verb Tense (consistency, literary present, past perfect "by year",
// present "currently", present perfect "since"/"ever since"), Dangling Modifier
// (standard, attribute variant, "it"/"there"/abstract noun/it-cleft traps),
// Modal + Finite/Nonfinite (modal+plain form, past-perspective "would", finite in
// main clause, finite in relative clause, consequence supplement, participial
// within subject)
//
// Boundaries subtypes: Comma + Coordinating Conjunction, No comma in compound
// predicate, Period + next-sentence participial phrase (×5), However Pattern A
// and B, No-punctuation rules (restrictive appositive, compound predicate,
// verb+object, professional title), Colon for elaboration, Comma after
// subordinate clause, Commas around interrupting participial phrase, Comma + colon
// combination, Parallel possessives, Indirect question + period, Supplementary
// date/fact element (matched commas), Correlative conjunctions, No punctuation
// between two coordinated clauses, Conjunctive adverb placement, Em-dash for
// supplementary elaboration, Matched punctuation pairs

// SEC — Subject-Verb Agreement (7 questions)
// Subtypes: gerund subject, intervening phrase, inverted syntax, "as well as",
// long intervening participial phrase, collective noun, neither/nor
// Difficulty: 3 easy / 2 medium / 2 hard

const SEC_SVA = [

  // easy — gerund subject
  {
    id: 'sec_f_001', num: 1, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Using high-resolution satellite imagery to track deforestation in real time _______ scientists with a powerful new tool for documenting the rate and extent of forest loss across remote regions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'provide', B: 'are providing', C: 'provides', D: 'have provided' },
    answer: 'C', isSPR: false,
    explanation: 'The subject is the gerund phrase "Using high-resolution satellite imagery to track deforestation in real time," which functions as a singular noun. "Provides" correctly agrees with this singular subject. "Provide" and "have provided" treat the subject as plural. "Are providing" is also plural and uses progressive aspect without contextual justification.',
  },

  // easy — intervening prepositional phrase
  {
    id: 'sec_f_002', num: 2, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Each of the expedition\'s carefully preserved field notebooks _______ a detailed record of the team\'s daily observations during their six-month survey of the Atacama Desert\'s flora.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'contain', B: 'are containing', C: 'have contained', D: 'contains' },
    answer: 'D', isSPR: false,
    explanation: '"Each of the [plural noun]" constructions take a singular verb — the head of the subject is "each," not "notebooks." "Contains" correctly agrees with the singular head noun. "Contain" and "have contained" incorrectly treat "notebooks" as the subject. "Are containing" is plural and uses progressive aspect unnecessarily.',
  },

  // easy — inverted syntax (there)
  {
    id: 'sec_f_003', num: 3, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Among the strongest predictors of long-term academic success in mathematics _______ a solid foundation in algebraic reasoning built during the middle school years.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'are', B: 'is', C: 'being', D: 'have been' },
    answer: 'B', isSPR: false,
    explanation: 'In inverted sentences, the true subject follows the verb. The actual subject here is "a solid foundation" (singular), requiring "is." "Are" incorrectly treats "predictors" in the prepositional phrase as the subject. "Being" is a nonfinite form and cannot serve as the main predicate. "Have been" is plural and introduces perfect aspect without contextual justification.',
  },

  // easy — "as well as"
  {
    id: 'sec_f_004', num: 4, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The ringtail possum, as well as several closely related marsupial species, _______ arboreal habitats in the temperate and subtropical forests of eastern Australia.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'inhabit', B: 'are inhabiting', C: 'inhabits', D: 'inhabiting' },
    answer: 'C', isSPR: false,
    explanation: '"As well as" introduces a supplementary phrase and does not change the number of the grammatical subject. The true subject remains "The ringtail possum" (singular), requiring "inhabits." "Inhabit" and "are inhabiting" incorrectly treat "species" as the subject. "Inhabiting" is a nonfinite form and cannot serve as the main predicate.',
  },

  // medium — long intervening participial phrase
  {
    id: 'sec_f_005', num: 5, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The researchers\' findings, compiled from data collected across fourteen field sites and analyzed using three independent statistical models, _______ significant variations in soil carbon content that challenge prevailing theories of nutrient cycling.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'reveals', B: 'is revealing', C: 'reveal', D: 'has revealed' },
    answer: 'C', isSPR: false,
    explanation: 'The head noun of the subject is "findings" (plural), despite the long intervening participial phrase "compiled from data collected across fourteen field sites and analyzed using three independent statistical models." "Reveal" correctly agrees with the plural subject. "Reveals," "is revealing," and "has revealed" all treat "findings" as singular.',
  },

  // medium — collective noun
  {
    id: 'sec_f_006', num: 6, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The ethics committee, after reviewing testimony from over forty stakeholders and consulting three independent legal advisors, _______ its final recommendations to the board of directors.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'submit', B: 'were submitting', C: 'submitted', D: 'have submitted' },
    answer: 'C', isSPR: false,
    explanation: 'In Standard American English, collective nouns like "committee" are treated as singular. Past-tense "submitted" correctly agrees with the singular subject and is consistent with the procedural past-tense context. "Submit" is present tense without justification. "Were submitting" treats the collective noun as plural and introduces progressive aspect unnecessarily. "Have submitted" is plural present perfect.',
  },

  // hard — neither/nor (nearer subject plural)
  {
    id: 'sec_f_007', num: 7, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Neither the field coordinator nor the four independent data collectors _______ notified about the change to the sampling protocol until the final week of the study.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'was', B: 'has been', C: 'is', D: 'were' },
    answer: 'D', isSPR: false,
    explanation: 'In "neither/nor" constructions, the verb agrees with the subject closest to it. The closer subject is "the four independent data collectors" (plural), requiring the plural past-tense verb "were." "Was" would be correct only if the nearer subject were singular. "Has been" is singular present perfect. "Is" is singular present tense, inconsistent with the past-event context.',
  },

];


// SEC — Pronoun-Antecedent Agreement (5 questions)
// Subtypes: personal pronoun number, demonstrative (this/these for singular/plural
// event or referent), possessive vs. contraction (its/it's, their/they're)
// Difficulty: 2 easy / 2 medium / 1 hard

const SEC_PRONOUN = [

  // easy — personal pronoun number (plural antecedent)
  {
    id: 'sec_f_008', num: 8, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Paleontologists who study the fossil record of marine invertebrates must be proficient in a wide range of analytical techniques; _______ findings often depend on the precise identification of microscopic shell and skeletal structures.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'our', B: 'its', C: 'one\'s', D: 'their' },
    answer: 'D', isSPR: false,
    explanation: 'The antecedent "paleontologists" is plural, requiring the plural possessive pronoun "their." "Its" is singular and refers to things rather than people. "Our" incorrectly shifts to first person, implying the speaker is among the paleontologists. "One\'s" is an indefinite possessive that does not refer to a specific antecedent.',
  },

  // easy — possessive vs. contraction (its / it\'s)
  {
    id: 'sec_f_009', num: 9, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The monarch butterfly undertakes a remarkable annual migration; _______ journey can span up to 4,800 kilometers between its northern breeding grounds and its overwintering sites in central Mexico.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it\'s', B: 'its\'', C: 'their', D: 'its' },
    answer: 'D', isSPR: false,
    explanation: 'A possessive pronoun is needed to show that the journey belongs to the monarch butterfly (singular). "Its" is the possessive form of "it." "It\'s" is a contraction of "it is," producing the grammatically incorrect "it is journey can span." "Its\'" is not a standard form in English. "Their" is plural and does not agree with the singular antecedent "the monarch butterfly."',
  },

  // medium — demonstrative (plural referent → "these")
  {
    id: 'sec_f_010', num: 10, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Scientists have recently identified two previously unknown mechanisms by which the brain clears metabolic waste during sleep. _______ mechanisms may help explain why chronic sleep deprivation is so consistently associated with cognitive impairment.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'This', B: 'That', C: 'It', D: 'These' },
    answer: 'D', isSPR: false,
    explanation: '"These" is the plural demonstrative adjective that correctly modifies the plural noun "mechanisms" and refers to the two mechanisms named in the prior sentence. "This" and "that" are singular demonstratives and do not agree with the plural noun "mechanisms." "It" is a singular pronoun and cannot modify a noun directly.',
  },

  // medium — demonstrative (singular event → "this")
  {
    id: 'sec_f_011', num: 11, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'In 1903, Marie Curie became the first woman to receive the Nobel Prize in Physics. _______ achievement came despite substantial opposition from male colleagues who had long minimized her contributions to the field.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'These', B: 'Those', C: 'They', D: 'This' },
    answer: 'D', isSPR: false,
    explanation: '"This" is the singular demonstrative adjective that correctly modifies the singular noun "achievement" and refers to the single event described in the prior sentence — Curie\'s 1903 Nobel Prize. "These" and "those" are plural demonstratives and do not agree with the singular noun "achievement." "They" is a personal pronoun and cannot directly modify a noun.',
  },

  // hard — possessive vs. contraction (their / they\'re / there / its — all four)
  {
    id: 'sec_f_012', num: 12, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'When researchers compared the two competing models of galaxy formation, _______ predictions diverged sharply in the high-redshift regime — the period when the universe was less than one billion years old.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'they\'re', B: 'there', C: 'its', D: 'their' },
    answer: 'D', isSPR: false,
    explanation: '"Their" is the plural possessive pronoun correctly referring to "the two competing models" — the predictions belong to both models individually. "They\'re" is a contraction of "they are," producing the grammatically incorrect "they are predictions diverged sharply." "There" is a location adverb or expletive and cannot express possession. "Its" is singular possessive and does not agree with the plural antecedent "two competing models."',
  },

];


// SEC — Verb Tense (6 questions)
// Subtypes: tense consistency (simple past), literary present, past perfect
// with "by [year]", present tense with "currently", present perfect with "since",
// present perfect with "ever since"
// Difficulty: 2 easy / 2 medium / 2 hard

const SEC_TENSE = [

  // easy — tense consistency (simple past narrative)
  {
    id: 'sec_f_013', num: 13, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'In 1953, Francis Crick and James Watson published their landmark paper describing DNA\'s double-helix structure. The model _______ the X-ray diffraction work of Rosalind Franklin, whose images had provided crucial structural evidence.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'builds on', B: 'would build on', C: 'has built on', D: 'built on' },
    answer: 'D', isSPR: false,
    explanation: 'The passage narrates completed past events, established by "published" in the prior sentence. "Built on" (simple past) maintains tense consistency. "Builds on" shifts to present tense without justification. "Has built on" (present perfect) implies ongoing relevance to the present, which is inappropriate in a historical narrative. "Would build on" implies a conditional or future-in-the-past context not supported by the sentence.',
  },

  // easy — literary present
  {
    id: 'sec_f_014', num: 14, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'In her 1980 essay "Writing in the Dark," Welsh poet Gillian Clarke _______ the act of composing poetry as an exploration of the threshold between conscious intention and unconscious memory.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'described', B: 'had described', C: 'depicts', D: 'was depicting' },
    answer: 'C', isSPR: false,
    explanation: 'It is conventional to use the present tense when discussing the content of a literary or essayistic work. "Depicts" correctly applies the literary present. "Described" shifts to past tense, violating this convention. "Had described" is past perfect, inappropriately implying completion before some other past event. "Was depicting" is past progressive and likewise inconsistent with the literary present.',
  },

  // medium — past perfect with "by [year]"
  {
    id: 'sec_f_015', num: 15, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'By the time the Cassini spacecraft ended its mission in September 2017, it _______ detailed scientific data about Saturn\'s rings, moons, and atmosphere for more than thirteen years.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'collects', B: 'has collected', C: 'collected', D: 'had collected' },
    answer: 'D', isSPR: false,
    explanation: 'Together with "By the time [the mission] ended in September 2017," the past perfect "had collected" correctly indicates that the data collection was completed before the specified past reference point. CollegeBoard: this construction indicates the action occurred before the stated past moment. "Collected" (simple past) does not establish that temporal relationship. "Has collected" (present perfect) implies the collection continues to the present. "Collects" (present tense) is incompatible with the past-tense frame.',
  },

  // medium — present tense with "currently"
  {
    id: 'sec_f_016', num: 16, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Migratory shorebirds travel vast distances between breeding and wintering grounds each year. Currently, the red knot _______ critical stopover sites along the Delaware Bay, where it feeds on horseshoe crab eggs to replenish energy reserves for the final leg of its journey.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'used', B: 'had used', C: 'was using', D: 'uses' },
    answer: 'D', isSPR: false,
    explanation: 'The adverb "currently" signals that the present tense is required. "Uses" correctly describes the red knot\'s behavior as an ongoing present reality. "Used" (simple past) contradicts "currently." "Had used" (past perfect) is also incompatible with "currently." "Was using" (past progressive) is likewise inconsistent with the present-tense cue.',
  },

  // hard — present perfect with "since"
  {
    id: 'sec_f_017', num: 17, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Since Watson and Crick published their landmark paper describing DNA\'s double-helix structure in 1953, scientists _______ hundreds of additional biomolecular structures using increasingly powerful crystallographic and computational tools.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'determined', B: 'had determined', C: 'have determined', D: 'were determining' },
    answer: 'C', isSPR: false,
    explanation: '"Since" followed by a past-tense reference point requires the present perfect in the main clause when the action continues into the present. "Have determined" correctly expresses that structure determination began in 1953 and remains ongoing. "Determined" (simple past) implies the work ended at a specific past point. "Had determined" (past perfect) implies completion before a subsequent past event, not continuation into the present. "Were determining" (past progressive) describes an action ongoing at a specific past moment rather than a process continuing to the present.',
  },

  // hard — present perfect with "ever since" (established past origin)
  {
    id: 'sec_f_018', num: 18, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Carbon dating techniques, first developed in the late 1940s by Willard Libby and his colleagues at the University of Chicago, _______ scientists to determine the age of organic materials with unprecedented precision ever since.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'enabled', B: 'have enabled', C: 'had enabled', D: 'enable' },
    answer: 'B', isSPR: false,
    explanation: '"Ever since" signals that the capability began at a specific point in the past and continues to the present — the appropriate tense is the present perfect. "Have enabled" correctly expresses this ongoing relevance from a historical origin. "Enabled" (simple past) implies the capability ended at some point. "Had enabled" (past perfect) implies the capability ended before a subsequent past event. "Enable" (simple present) fails to acknowledge the historical starting point established by "first developed in the late 1940s."',
  },

];


// SEC — Dangling Modifier (6 questions)
// Subtypes: standard participial, attribute variant (possessive subject),
// wrong-answer traps: "it" expletive, "there" expletive, abstract noun, it-cleft
// Difficulty: 1 easy / 2 medium / 3 hard

const SEC_DANGLING = [

  // easy — standard participial (agents: researchers)
  {
    id: 'sec_f_019', num: 19, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Having analyzed the migration routes of over three thousand individual birds using GPS tracking devices, _______ that many species travel significantly farther north each year as warming temperatures extend the range of available food sources.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it became apparent', B: 'a conclusion was reached', C: 'there emerged evidence', D: 'the researchers concluded' },
    answer: 'D', isSPR: false,
    explanation: 'The participial phrase "Having analyzed the migration routes...using GPS tracking devices" must logically modify the subject of the main clause — only "the researchers" could spend time analyzing migration data. "It became apparent" places the function word "it" after the modifier, which illogically suggests "it" performed the analysis. "A conclusion was reached" makes an abstract noun the subject — conclusions cannot analyze migration routes. "There emerged evidence" uses an expletive construction that also cannot logically perform the analysis.',
  },

  // medium — standard participial ("awarded" — the work is the subject, not the author)
  {
    id: 'sec_f_020', num: 20, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Awarded the Pulitzer Prize for Fiction in 1961, _______ the racial tensions and moral complexities facing a small Alabama town in the 1930s.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'there is a novel exploring', B: 'Harper Lee\'s To Kill a Mockingbird explores', C: 'it was Harper Lee who explored', D: 'the critical exploration of' },
    answer: 'B', isSPR: false,
    explanation: '"Awarded the Pulitzer Prize for Fiction in 1961" modifies the work that received the prize — To Kill a Mockingbird. "Harper Lee\'s To Kill a Mockingbird" correctly names the novel as the grammatical subject. "There is a novel exploring" uses an expletive ("there is") that cannot logically receive a Pulitzer Prize. "It was Harper Lee who explored" is an it-cleft construction; CollegeBoard identifies it-clefts as incorrect after long introductory modifiers because they produce unnecessarily wordy and confusing sentences. "The critical exploration of" makes an abstract noun the subject — the exploration cannot win a Pulitzer Prize.',
  },

  // medium — attribute variant (possessive subject)
  {
    id: 'sec_f_021', num: 21, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'A cornerstone of the Enlightenment, _______ philosophical arguments for individual liberty and the separation of church and state profoundly shaped the constitutional frameworks of emerging democracies in the eighteenth century.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'John Locke made', B: 'it was John Locke whose', C: 'the philosophy of John Locke\'s', D: 'John Locke\'s' },
    answer: 'D', isSPR: false,
    explanation: 'The appositive "A cornerstone of the Enlightenment" logically describes John Locke. In the attribute modifier pattern, the possessive "John Locke\'s" allows "philosophical arguments" to serve as the grammatical subject while tying the appositive back to Locke as its logical referent — this is the accepted construction on the DSAT. "John Locke made" restructures the sentence into an independent clause, which does not fit the blank. "It was John Locke whose" is an it-cleft construction, which CollegeBoard identifies as incorrect after introductory modifiers. "The philosophy of John Locke\'s" is grammatically redundant.',
  },

  // hard — "it" expletive trap
  {
    id: 'sec_f_022', num: 22, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Recognized as one of the defining works of American Romanticism, _______ continues to be among the most widely taught novels in secondary schools across the United States.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it', B: 'Hawthorne\'s The Scarlet Letter', C: 'it was Nathaniel Hawthorne who wrote the novel that', D: 'the recognition of The Scarlet Letter' },
    answer: 'B', isSPR: false,
    explanation: '"Recognized as one of the defining works of American Romanticism" must modify the thing that was recognized — The Scarlet Letter. "Hawthorne\'s The Scarlet Letter" correctly names the novel as the grammatical subject. "It" is a function-word placeholder; CollegeBoard states that placing "it" after a long introductory modifier illogically suggests "it" is the entity being described, which it cannot be. "It was Nathaniel Hawthorne who wrote the novel that" is an it-cleft, explicitly identified by CollegeBoard as incorrect in this position. "The recognition of The Scarlet Letter" is an abstract noun — it cannot "continue to be widely taught."',
  },

  // hard — "there" expletive + abstract noun traps
  {
    id: 'sec_f_023', num: 23, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'By carefully examining the isotopic ratios preserved in ancient coral samples, _______ of past ocean temperatures spanning hundreds of thousands of years.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'a detailed picture emerges', B: 'there emerges a detailed picture', C: 'it becomes possible to construct a detailed picture', D: 'researchers can construct a detailed picture' },
    answer: 'D', isSPR: false,
    explanation: '"By carefully examining the isotopic ratios" must logically modify the subject of the main clause — only researchers can perform a careful examination. "Researchers can construct a detailed picture" correctly supplies this agent. "A detailed picture emerges" makes an abstract noun the implied examiner — pictures cannot examine coral samples. "There emerges a detailed picture" uses the expletive "there"; expletives cannot logically analyze data. "It becomes possible to construct a detailed picture" places the function word "it" after the modifier; CollegeBoard identifies this as incorrect because "it" cannot logically examine isotopic ratios.',
  },

  // hard — it-cleft trap (most common hard variant)
  {
    id: 'sec_f_024', num: 24, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Named among the hundred most influential books of the twentieth century by Time magazine, _______ the intersection of race, memory, and identity in the aftermath of American slavery.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'Toni Morrison\'s Beloved explores', B: 'it was Toni Morrison who explored', C: 'there are themes in Beloved that explore', D: 'the exploration of' },
    answer: 'A', isSPR: false,
    explanation: '"Named among the hundred most influential books" modifies the novel Beloved. "Toni Morrison\'s Beloved" correctly names the novel as the grammatical subject; the possessive ties the modifier to Morrison as the implied agent while preserving the novel as what was named. "It was Toni Morrison who explored" is an it-cleft — CollegeBoard explicitly states it-clefts are "unnecessarily wordy and confusing" after long introductory modifiers. "There are themes in Beloved that explore" uses an expletive construction. "The exploration of" is an abstract noun phrase that creates a sentence fragment.',
  },

];


// SEC — Modal + Finite/Nonfinite Verb (6 questions)
// Subtypes: modal + plain form (including past-perspective "would"), finite verb
// in main clause, finite verb in relative clause, nonfinite consequence supplement
// after main clause, nonfinite participial within subject
// Difficulty: 1 easy / 2 medium / 3 hard

const SEC_MODAL_FINITE = [

  // easy — finite verb required in main clause
  {
    id: 'sec_f_025', num: 25, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The Amazon River, carrying approximately 20 percent of all freshwater discharged into the world\'s oceans, _______ into the Atlantic at a rate that defies easy comprehension.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'emptying', B: 'to empty', C: 'having emptied', D: 'empties' },
    answer: 'D', isSPR: false,
    explanation: 'A main clause requires a finite (tensed) verb. "Empties" is the finite predicate the main clause needs. "Carrying approximately 20 percent of all freshwater" is already a participial modifier — the main clause still requires its own finite predicate. "Emptying," "to empty," and "having emptied" are all nonfinite forms and cannot serve as the main predicate.',
  },

  // medium — finite verb in relative clause ("which" clause)
  {
    id: 'sec_f_026', num: 26, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Scientists have identified the protein\'s three-dimensional shape, _______ ultimately determines how effectively it binds to its target receptor in the cell membrane.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it', B: 'having', C: 'which', D: 'to' },
    answer: 'C', isSPR: false,
    explanation: 'A "which" relative clause requires a finite verb — "which ultimately determines" correctly supplies this. "It" creates a comma splice by introducing a new subject without a conjunction. "Having" is a nonfinite present participle that cannot serve as the main verb of a relative clause — CollegeBoard states that "which" relative clauses require a finite verb. "To" creates an infinitive phrase ("to ultimately determines") that is ungrammatical.',
  },

  // medium — modal + plain form (evidential "may")
  {
    id: 'sec_f_027', num: 27, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The preliminary results from the small pilot study suggest that the new compound _______ interfere with the enzyme responsible for the inflammatory cascade, though the mechanism remains poorly understood.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'must', B: 'shall', C: 'may', D: 'ought to' },
    answer: 'C', isSPR: false,
    explanation: '"May" expresses evidential possibility — appropriate when "preliminary results...suggest" signals inconclusive early findings. "Must" expresses logical necessity or strong certainty, which preliminary evidence does not support. "Shall" expresses formal obligation or future certainty. "Ought to" expresses normative expectation or recommendation rather than evidential possibility.',
  },

  // hard — nonfinite consequence supplement after main clause
  {
    id: 'sec_f_028', num: 28, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The Larsen C ice shelf collapsed during the winter of 2017, _______ a massive iceberg roughly the size of Delaware into the Weddell Sea.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'released', B: 'it released', C: 'releasing', D: 'having released' },
    answer: 'C', isSPR: false,
    explanation: 'A nonfinite present participle ("releasing") correctly follows the main clause as a supplementary element describing the consequence of the collapse. "Released" (finite past tense) without a conjunction creates a comma splice — two main clauses joined by only a comma. "It released" also creates a comma splice by introducing a new subject and finite verb without a conjunction. "Having released" (past perfect participle) illogically implies the iceberg release was completed before the collapse, inverting the sequence.',
  },

  // hard — past-perspective "would" + plain form
  {
    id: 'sec_f_029', num: 29, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'In the early 1970s, engineers at Bell Labs were developing what _______ become the first commercially viable cellular telephone network, though widespread deployment remained decades away.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'should', B: 'would', C: 'to', D: 'having' },
    answer: 'B', isSPR: false,
    explanation: '"Would" + the plain form "become" correctly expresses a past-perspective reference to something that occurred later — "what would become the first commercially viable cellular network." CollegeBoard: when narrating from a point of view in the past about something that happened subsequently, "would" + plain form is correct even when describing a completed event. "Should" introduces normative connotation (obligation) inconsistent with the narrative frame. "To" creates an infinitive "what to become," which is ungrammatical here. "Having" produces "what having become," also ungrammatical.',
  },

  // hard — nonfinite participial within subject (vs. finite verb that creates double predicate)
  {
    id: 'sec_f_030', num: 30, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Experimental data _______ that repeated low-dose exposure to the compound enhanced spatial memory in rodents prompted researchers to begin planning a human clinical trial.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'have suggested', B: 'suggested', C: 'suggesting', D: 'to suggest' },
    answer: 'C', isSPR: false,
    explanation: 'The nonfinite present participle "suggesting" correctly forms a restrictive phrase inside the subject — "Experimental data suggesting that repeated low-dose exposure...prompted researchers." The main verb of the sentence is "prompted." Using a finite verb like "have suggested" or "suggested" would create an ungrammatical sentence with two predicates ("suggested" and "prompted") without a conjunction to join them. "To suggest" is an infinitive that cannot function as a restrictive modifier within the subject in this construction.',
  },

];


// SEC — Comma + Coordinating Conjunction (5 questions)
// Two independent clauses joined by comma + FANBOYS (but, and, so, yet, or)
// Also covers: comma splice as the primary wrong-answer type
// Difficulty: 2 easy / 2 medium / 1 hard

const SEC_COMMA_CC = [

  // easy — contrast (but)
  {
    id: 'sec_b_001', num: 1, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Early astronomers assumed Venus had a surface similar to Earth\'s _______ data from Soviet Venera probes in the 1970s revealed a barren landscape baking at over 450 degrees Celsius.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: ',', C: ', but', D: '; and' },
    answer: 'C', isSPR: false,
    explanation: 'Two independent clauses express contrast — the assumed Earth-like surface versus the revealed barren reality. "But" is the coordinating conjunction that signals contrast, and it requires a comma before it when joining two independent clauses. ", and" (choice A) signals addition, not contrast. A comma alone (choice B) creates a comma splice. "; and" (choice D) is non-standard — a semicolon already fully separates two independent clauses, making "and" redundant.',
  },

  // easy — result (so)
  {
    id: 'sec_b_002', num: 2, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The bridge\'s main support cable showed signs of significant corrosion _______ the city\'s transportation authority ordered an immediate structural assessment.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ', yet', C: ', but', D: ', so' },
    answer: 'D', isSPR: false,
    explanation: 'The second clause states the result of the first — the corrosion caused the assessment. "So" signals a result or consequence and requires a comma before it when joining two independent clauses. A comma alone (choice A) creates a comma splice. ", yet" (choice B) and ", but" (choice C) both signal contrast — but ordering an inspection is a consequence of corrosion, not a contradiction of it.',
  },

  // medium — addition (and) — no comma splice temptation
  {
    id: 'sec_b_003', num: 3, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Photosynthesis converts carbon dioxide and water into glucose using energy from sunlight _______ it releases oxygen as a byproduct of the chemical reaction.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'and', B: ', yet', C: ',', D: ', and' },
    answer: 'D', isSPR: false,
    explanation: 'Two independent clauses describe parallel facts about photosynthesis in an additive relationship. A comma + "and" correctly joins two independent clauses. "And" alone (choice A) omits the required comma between two independent clauses. ", yet" (choice B) signals contrast, but both facts are simply things photosynthesis does — there is no adversative relationship. A comma alone (choice C) creates a comma splice.',
  },

  // medium — no comma in compound predicate (one subject, two verbs)
  {
    id: 'sec_b_004', num: 4, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The research team spent three years collecting data from remote field sites _______ published their findings in a peer-reviewed journal once the statistical analysis was complete.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ', but then' },
    answer: 'B', isSPR: false,
    explanation: 'The sentence has one subject ("The research team") performing two actions — "spent" and "published" — forming a compound predicate. When "and" joins two verbs belonging to the same subject, no comma is used before "and." ", and" (choice A) incorrectly implies a second independent clause is present. "; and" (choice C) uses a semicolon to separate two verbs sharing the same subject — semicolons join independent clauses only. ", but then" (choice D) introduces unnecessary contrast.',
  },

  // hard — adversative "yet" (contrast requiring adversative, not simple contrast)
  {
    id: 'sec_b_005', num: 5, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Marie Curie conducted her most important research without access to properly equipped laboratory facilities or adequate institutional funding _______ she went on to become the only person in history to receive Nobel Prizes in two different scientific disciplines.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ', so', C: ', yet', D: ', and' },
    answer: 'C', isSPR: false,
    explanation: 'The two clauses express a surprising adversative contrast — inadequate resources versus exceptional achievement. "Yet" is the coordinating conjunction that signals this adversative relationship, and it requires a comma before it. A comma alone (choice A) creates a comma splice. ", so" (choice B) signals consequence — as if the inadequate conditions caused the Nobel wins, inverting the intended meaning. ", and" (choice D) signals simple addition without the adversative quality the sentence requires.',
  },

];


// SEC — Period + Next-Sentence Participial Phrase (5 questions)
// Confirmed 6+ times on official tests. Structure:
// [Sentence 1.] [Participial phrase modifying subject of S2], [subject + verb of S2].
// The blank is at the junction between S1 and the participial phrase.
// Correct answer: always a period (or ". [capital letter]" as part of the choice).
// Wrong answers: comma (splice), run-on, "; and" or ", and" (conjunction can't
// join a participial phrase to a prior sentence).
// Difficulty: 1 easy / 2 medium / 2 hard

const SEC_PERIOD_PARTICIPIAL = [

  // easy — short participial phrase, clear subject
  {
    id: 'sec_b_006', num: 6, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'In 1928, Scottish bacteriologist Alexander Fleming observed that a mold contaminating one of his petri dishes was killing the surrounding bacteria _______ publishing his findings the following year, he hoped the substance might one day be developed into a practical treatment.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; publishing', C: ': publishing', D: '. Publishing' },
    answer: 'D', isSPR: false,
    explanation: 'A period correctly ends the first independent clause and begins a new sentence. "Publishing his findings the following year" is a participial phrase modifying "he" (Fleming), the subject of the second sentence. A comma (choice A) creates a comma splice between the two independent clauses. A semicolon (choice B) cannot be followed by a participial phrase — semicolons join two independent clauses, and "publishing his findings...he hoped" is not an independent clause on its own. A colon (choice C) similarly requires an independent clause to follow.',
  },

  // medium — participial phrase with "by" (action-as-means)
  {
    id: 'sec_b_007', num: 7, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Between 1969 and 1972, NASA sent six crewed missions to the lunar surface _______ conducting extensive geological surveys and collecting approximately 842 pounds of rock and soil samples, the astronauts significantly expanded our understanding of the Moon\'s formation and history.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ', and', C: '. Conducting', D: '; conducting' },
    answer: 'C', isSPR: false,
    explanation: 'A period ends the first independent clause. "Conducting extensive geological surveys and collecting approximately 842 pounds of rock and soil samples" is a participial phrase modifying "the astronauts," the subject of the second sentence. A comma (choice A) creates a comma splice. ", and" (choice B) uses a coordinating conjunction, but "conducting...the astronauts significantly expanded" does not form an independent clause that "and" can join to the first sentence. A semicolon (choice D) cannot be followed by a participial phrase — it requires an independent clause to follow.',
  },

  // medium — participial phrase with passive past participle ("praised by")
  {
    id: 'sec_b_008', num: 8, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Rachel Carson spent more than four years researching the effects of synthetic pesticides on wildlife and ecosystems _______ praised by scientists and condemned by chemical manufacturers upon its publication, her 1962 book Silent Spring sparked a national debate about the regulation of agricultural chemicals.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and praised', B: '; praised', C: '. Praised', D: ',' },
    answer: 'C', isSPR: false,
    explanation: 'A period ends the first independent clause about Carson\'s research. "Praised by scientists and condemned by chemical manufacturers upon its publication" is a participial phrase modifying "her 1962 book Silent Spring," the subject of the new sentence. ", and praised" (choice A) cannot join a participial phrase to a prior sentence with "and." A semicolon (choice B) requires an independent clause to follow — "praised...her 1962 book Silent Spring sparked" is not an independent clause standing alone. A comma alone (choice D) creates a comma splice.',
  },

  // hard — longer participial phrase, stronger comma-splice temptation
  {
    id: 'sec_b_009', num: 9, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'For decades, climate scientists argued that global temperatures would inevitably rise in response to increasing concentrations of atmospheric CO₂ _______ drawing on decades of observational data and multi-decade climate simulations, researchers now project that warming could exceed 2°C above pre-industrial levels by 2100 under current emissions trajectories.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ', and', C: '; however,', D: '. Drawing' },
    answer: 'D', isSPR: false,
    explanation: 'A period ends the first independent clause. "Drawing on decades of observational data and multi-decade climate simulations" is a participial phrase modifying "researchers," the subject of the new sentence. A comma (choice A) creates a comma splice — the most tempting wrong answer because the sentence is long and the participial phrase follows naturally. ", and" (choice B) cannot join a participial phrase to a prior sentence. "; however," (choice C) introduces contrast, but the second sentence supports and extends the first; additionally, "drawing...researchers now project" is not an independent clause that can follow "however,".',
  },

  // hard — participial phrase with "having" (completed prior action)
  {
    id: 'sec_b_010', num: 10, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Astronomers spent years attempting to reconcile the observed orbital velocities of stars within galaxies with predictions derived from known matter distributions _______ having found that visible matter alone could not account for the observed velocities, Swiss astronomer Fritz Zwicky proposed in 1933 that galaxies must contain large amounts of unseen mass.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ': having', C: '; having', D: '. Having' },
    answer: 'D', isSPR: false,
    explanation: 'A period ends the first independent clause. "Having found that visible matter alone could not account for the observed velocities" is a past perfect participial phrase modifying "Swiss astronomer Fritz Zwicky," the subject of the new sentence. A comma (choice A) creates a comma splice. A colon (choice B) requires an independent clause to follow — a participial phrase is not an independent clause. A semicolon (choice C) makes the same error — "having found...Fritz Zwicky proposed" is not a standalone independent clause.',
  },

];


// SEC — "However" Between Clauses: Pattern A and Pattern B (4 questions)
//
// Pattern A: [clause 1]; however, [clause 2]
//   Semicolon BEFORE "however," comma AFTER.
//   Signals contrast between the two clauses WITHIN this sentence.
//
// Pattern B: [clause 1], however; [clause 2]
//   Comma BEFORE "however" (attaches it to clause 1 as a modifier),
//   semicolon AFTER (joins the two independent clauses).
//   Signals that clause 1 contrasts with the PRECEDING sentence, while
//   clause 1 and clause 2 within this sentence are consistent with each other.
//
// CollegeBoard on Pattern B: "The comma after 'however' separates the
// supplementary adverb phrase 'however' from the independent clause it modifies.
// The semicolon joins the first and second independent clauses."
//
// Difficulty: 1 easy / 1 medium / 2 hard

const SEC_HOWEVER = [

  // easy — Pattern A (contrast within sentence, classic "; however,")
  {
    id: 'sec_b_011', num: 11, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Wright brothers\' first powered flight at Kitty Hawk in 1903 lasted only twelve seconds and covered a mere 36 meters _______ it remains one of the pivotal moments in the history of human technology.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; however,', B: ', however,', C: ', however', D: ': however,' },
    answer: 'A', isSPR: false,
    explanation: 'The two clauses contrast — the flight\'s modest physical dimensions versus its pivotal historical significance — and the contrast exists between the two clauses within this sentence. Pattern A ("; however,") places a semicolon before "however" and a comma after to signal this intra-sentence contrast. ", however," (choice B) creates a comma splice — a comma before "however" cannot join two independent clauses. ", however" (choice C) omits the required comma after "however." ": however," (choice D) uses a colon before "however," which is non-standard.',
  },

  // medium — Pattern A again (contrast within sentence, different content)
  {
    id: 'sec_b_012', num: 12, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The Voyager 1 probe was launched in 1977 primarily to study Jupiter and Saturn; _______ its trajectory following those planetary encounters placed it on a course that would eventually carry it beyond the solar system entirely.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'however,', B: ', however,', C: 'however', D: 'however;' },
    answer: 'A', isSPR: false,
    explanation: 'The blank comes after a semicolon that has already been placed; the blank must complete the "however" construction. "However," (with the trailing comma) correctly forms the Pattern A structure "; however," — the semicolon before the blank joins the two independent clauses and signals contrast; the comma after "however" is required. "However" without a comma (choice C) omits the required comma after the adverb. ", however," (choice B) would require a period or semicolon to precede it — the semicolon is already in place in the passage. "However;" (choice D) reverses the punctuation to Pattern B, which signals that clause 1 contrasts with the prior sentence; but here the contrast is between the two clauses within this sentence.',
  },

  // hard — Pattern B (contrast with prior sentence; two clauses within sentence are consistent)
  {
    id: 'sec_b_013', num: 13, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Some researchers have cautioned that the new drug might carry unforeseen long-term risks. The clinical trial results, however _______ every safety metric showed measurable improvement over the control group, with no serious adverse events reported in either follow-up period.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', every', B: '. Every', C: ': every', D: '; every' },
    answer: 'D', isSPR: false,
    explanation: 'This is Pattern B for "however": the comma before "however" attaches it to "The clinical trial results" as a modifier, signaling that this clause contrasts with the preceding sentence (the researchers\' caution). A semicolon after "however" then joins the two independent clauses within this sentence — "The clinical trial results, however" and "every safety metric showed measurable improvement." These two clauses are consistent with each other; the "however" signals contrast with the prior sentence, not between them. ", every" (choice A) creates Pattern A by placing a comma after "however," which would incorrectly signal that the two current clauses are in contrast — but they are not. ". Every" (choice B) creates a fragment. ": every" (choice C) uses a colon after "however," which is non-standard.',
  },

  // hard — Pattern B (second instance, different context — choosing B when A might be tempting)
  {
    id: 'sec_b_014', num: 14, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Early critics dismissed Gregor Mendel\'s findings on heredity as too theoretical to have practical value. His experiments, however _______ they provided the quantitative foundation that would eventually underpin the entire field of genetics.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', proved foundational:', B: ';', C: ', they proved foundational:', D: ': they proved foundational,' },
    answer: 'B', isSPR: false,
    explanation: 'Pattern B: the comma before "however" signals contrast with the preceding sentence (early critics\' dismissal), and a semicolon after "however" joins the two independent clauses within the current sentence — "His experiments, however" and "they provided the quantitative foundation." A semicolon alone (choice B) is correct. Choice A alters the sentence structure by inserting new content and ending in a colon. Choice C similarly inserts "they proved foundational:" before the existing clause, creating a redundancy and structural problem. Choice D places the colon before the clause and the comma after "foundational," which inverts the logical structure.',
  },

];


// SEC — No-Punctuation Rules (4 questions)
// Subtypes: restrictive appositive (no commas), compound predicate (no comma
// before "and"), no punctuation between verb and direct object, no punctuation
// between professional title and proper noun
// Difficulty: 1 easy / 2 medium / 1 hard

const SEC_NO_PUNCT = [

  // easy — restrictive appositive (no commas around identifying name)
  {
    id: 'sec_b_015', num: 15, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Renaissance architect _______ Filippo Brunelleschi designed the dome of the Florence Cathedral using a novel system of self-supporting brickwork that had no precedent in European construction.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', Filippo Brunelleschi,', B: 'Filippo Brunelleschi,', C: '; Filippo Brunelleschi;', D: 'Filippo Brunelleschi' },
    answer: 'D', isSPR: false,
    explanation: '"Filippo Brunelleschi" is a restrictive appositive that provides essential identifying information — it specifies which Renaissance architect designed the dome. Restrictive appositives require no punctuation. Adding commas (choice A) would wrongly treat the name as nonrestrictive, implying there is only one "Renaissance architect" and the name is dispensable. A comma only after the name (choice B) is also incorrect. Semicolons (choice C) have no grammatical role in an appositive construction.',
  },

  // medium — no punctuation between professional title and proper noun
  {
    id: 'sec_b_016', num: 16, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Plant cell biologist _______ Yuree Lee studies the molecular mechanisms by which plants detect and respond to changes in light intensity, ambient temperature, and soil chemistry.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', Yuree Lee,', B: 'Yuree Lee,', C: 'Yuree Lee', D: '; Yuree Lee' },
    answer: 'C', isSPR: false,
    explanation: 'When a professional title directly precedes and identifies a name, no punctuation is used between them. "Plant cell biologist Yuree Lee" treats the title as restrictive — it identifies which scientist. Adding a comma (choices A and B) would wrongly imply that "Yuree Lee" is an optional identifier, suggesting the reader already knows which plant cell biologist is meant. CollegeBoard: setting the name off with punctuation "suggests that it could be removed without affecting the coherence of the sentence, which isn\'t the case." A semicolon (choice D) has no grammatical role in a title-name construction.',
  },

  // medium — no punctuation between verb and direct object
  {
    id: 'sec_b_017', num: 17, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'After extensive consultation with community members and independent safety experts, the transportation authority decided _______ to close the bridge temporarily for emergency structural repairs.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; to close', B: ', to close', C: ': to close', D: 'to close' },
    answer: 'D', isSPR: false,
    explanation: 'No punctuation is needed between the verb "decided" and its infinitive object "to close the bridge." CollegeBoard: the direct object helps complete the idea of the verb, and any punctuation between them results in an ungrammatical sentence. "; to close" (choice A), ", to close" (choice B), and ": to close" (choice C) all insert punctuation between the verb and its object, each creating an ungrammatical sentence.',
  },

  // hard — restrictive appositive (complex multi-word identifying phrase, not a proper name)
  {
    id: 'sec_b_018', num: 18, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The twentieth-century architect _______ Le Corbusier believed that buildings should function as "machines for living" — rational, efficient structures designed around the needs of their inhabitants rather than historical aesthetic conventions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', Le Corbusier,', B: 'Le Corbusier', C: '— Le Corbusier —', D: 'Le Corbusier,' },
    answer: 'B', isSPR: false,
    explanation: '"Le Corbusier" is a restrictive appositive identifying which twentieth-century architect held the stated belief — this information is essential. No punctuation is required. ", Le Corbusier," (choice A) sets the name off with commas as if it were nonrestrictive (removable), which it is not — removing the name would leave "The twentieth-century architect believed that..." without identifying who. "— Le Corbusier —" (choice C) uses em-dashes as if the name were a supplementary aside, which misrepresents its essential identifying function. "Le Corbusier," (choice D) places an incorrect comma after the name.',
  },

];


// SEC — Colon for Elaboration / Comma After Subordinate Clause /
//       Commas Around Interrupting Participial Phrase (4 questions)
// Grouped because all three are mid-sentence boundary rules.
// Difficulty: 1 easy / 2 medium / 1 hard

const SEC_MID_BOUNDARY = [

  // easy — comma after opening subordinate clause (Although...)
  {
    id: 'sec_b_019', num: 19, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Although the sample size in the original study was relatively small _______ the researchers considered the results sufficiently promising to justify planning a larger follow-up trial.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '. The', B: '; the', C: ', the', D: 'the' },
    answer: 'C', isSPR: false,
    explanation: 'When a sentence opens with a subordinate clause ("Although..."), a comma marks the boundary before the main clause. ", the" correctly separates the dependent clause from the main clause. ". The" (choice A) creates two sentence fragments — the subordinate "Although" clause cannot stand alone as a sentence. "; the" (choice B) incorrectly uses a semicolon between a dependent clause and an independent clause — semicolons join two independent clauses only. "the" with no punctuation (choice D) runs the clauses together without the required boundary comma.',
  },

  // medium — colon between main clauses for elaboration
  {
    id: 'sec_b_020', num: 20, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The expedition yielded an unexpected discovery _______ the canyon walls contained fossilized evidence of marine organisms, suggesting the region had once been submerged beneath a shallow inland sea.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; and', C: ':', D: ', and' },
    answer: 'C', isSPR: false,
    explanation: 'A colon correctly introduces an elaborating clause that specifies the content of the prior claim. Here, "the canyon walls contained fossilized evidence of marine organisms" explains exactly what the "unexpected discovery" was. A comma alone (choice A) creates a comma splice. "; and" (choice B) is non-standard — a semicolon already fully separates two independent clauses, making "and" redundant. ", and" (choice D) signals addition rather than the elaborating relationship the colon precisely captures.',
  },

  // medium — commas around interrupting participial phrase (nonfinite only)
  {
    id: 'sec_b_021', num: 21, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Percy Shelley\'s "Ode to the West Wind," _______ in 1820 as part of his collection Prometheus Unbound, is considered one of the finest examples of the Romantic ode in the English language.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'was published', B: 'it was published', C: 'published', D: 'publishing' },
    answer: 'C', isSPR: false,
    explanation: 'A supplementary participial phrase interrupting a main clause must contain a nonfinite verb and be offset by commas on both sides. "Published in 1820" (past participle) correctly forms a nonfinite phrase that modifies "Ode to the West Wind" between the two commas. "Was published" (choice A) introduces a finite verb, creating an ungrammatical sentence with two predicates — "was published" and "is considered" — without a conjunction. CollegeBoard: using a finite verb here "results in an ungrammatical sentence." "It was published" (choice B) makes the same error and adds a redundant subject. "Publishing" (choice D) is present participle, illogically implying the poem is actively doing the publishing.',
  },

  // hard — comma + colon combination (supplementary adverb + colon)
  {
    id: 'sec_b_022', num: 22, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The new archaeological evidence has complicated the traditional settlement timeline _______ several artifacts recently unearthed at the site predate the earliest known settlement by nearly three centuries.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ', though:', C: ': though', D: '; and' },
    answer: 'B', isSPR: false,
    explanation: 'The comma + colon structure: a comma after "timeline" introduces the supplementary adverb "though," and the colon following "though" introduces the elaborating clause specifying how the timeline has been complicated. CollegeBoard on this pattern: "A colon used in this way introduces information that illustrates or explains information that has come before it." A comma alone (choice A) creates a comma splice between the two independent clauses. ": though" (choice C) reverses the required order — the colon must follow "though," not precede it. "; and" (choice D) signals addition rather than elaboration.',
  },

];


// SEC — Harder Boundary Patterns (8 questions)
// Subtypes: parallel possessives, indirect question + period, conjunctive adverb
// (period/semicolon before + comma after), supplementary date/fact element
// (matched commas), correlative conjunctions (not only...but also), no
// punctuation between two coordinated clauses (exactly two, no series),
// em-dash for supplementary elaboration, matched punctuation pairs (dash-dash)
// Difficulty: all medium or hard

const SEC_HARD_BOUNDARY = [

  // medium — indirect question + period (not question mark)
  {
    id: 'sec_b_023', num: 23, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'After months of testing, the quality control team was unable to determine which stage of the production process had introduced the contaminant _______ ',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '?', B: ', so investigations continued.', C: '.', D: '; however, investigations continued.' },
    answer: 'C', isSPR: false,
    explanation: 'The sentence is declarative — it states what the team was unable to determine — and requires a period despite ending with an embedded indirect question ("which stage...had introduced the contaminant"). A question mark (choice A) incorrectly treats a declarative sentence as interrogative. ", so investigations continued." (choice B) adds an unnecessary second clause. "; however, investigations continued." (choice D) similarly appends a clause and introduces "however" to signal contrast where none is established.',
  },

  // medium — supplementary date/fact element (matched commas)
  {
    id: 'sec_b_024', num: 24, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The 12th Amendment to the United States Constitution, ratified in 1804 in response to the disputed presidential election of 1800 _______ established separate Electoral College votes for President and Vice President.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '. It', B: '— it', C: ';', D: ',' },
    answer: 'D', isSPR: false,
    explanation: 'The supplementary participial phrase "ratified in 1804 in response to the disputed presidential election of 1800" was opened by a comma after "Constitution" and must be closed by a matching comma before the main verb "established" — a comma-comma matched pair. ". It" (choice A) creates a sentence fragment — the participial phrase alone cannot stand as a sentence. "— it" (choice B) introduces a dash followed by a pronoun, which requires a matching em-dash to open the phrase rather than the comma already present; mismatching dash and comma is explicitly identified by CollegeBoard as incorrect. A semicolon (choice C) is used between independent clauses, not to close a participial phrase.',
  },

  // medium — correlative conjunctions (not only...but also)
  {
    id: 'sec_b_025', num: 25, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Darwin\'s theory of evolution by natural selection _______ transformed our understanding of biology but also provided the conceptual foundation for fields as diverse as ecology, genetics, and evolutionary psychology.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', not only,', B: 'not only', C: ', not only', D: 'not only,' },
    answer: 'B', isSPR: false,
    explanation: 'The correlative structure "not only...but also" requires no punctuation between "not only" and the first element it introduces, and no punctuation between that element and "but also." "Not only" (choice B) correctly begins the correlative without extraneous punctuation. ", not only," (choice A) disrupts the pairing with two commas. ", not only" (choice C) adds an incorrect comma before "not only." "Not only," (choice D) inserts a comma after "not only," breaking the connection between "not only" and "transformed."',
  },

  // medium — no punctuation between two coordinated clauses (only two, not a series)
  {
    id: 'sec_b_026', num: 26, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'After months of analysis, the research team was finally able to determine how the ancient trade routes shaped cultural exchange in the Mediterranean basin _______ what archaeological evidence points to direct contact between Bronze Age civilizations along the Atlantic coast.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: ',', C: ':', D: 'and' },
    answer: 'D', isSPR: false,
    explanation: 'Exactly two indirect questions complete the same verb "determine": "how the ancient trade routes shaped cultural exchange" and "what archaeological evidence points to contact." Because there are only two coordinated elements — not a series of three or more — no comma is used before "and." CollegeBoard: "Because there are only two coordinates in this case (as opposed to a series of three or more), no punctuation is needed between them." ", and" (choice A) incorrectly adds a comma when only two elements are coordinated. A comma alone (choice B) creates a comma splice. A colon (choice C) is used to introduce elaboration, not to join two parallel elements completing the same verb.',
  },

  // hard — parallel possessives (each noun needs its own possessive marker)
  {
    id: 'sec_b_027', num: 27, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Art historians have noted the striking differences between _______ use of negative space and the broader approach taken by their contemporaries in the Impressionist movement.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'Monet and Degas\'', B: 'Monet\'s and Degas\'', C: 'Monet\'s and Degas', D: 'Monet and Degas' },
    answer: 'B', isSPR: false,
    explanation: 'Each artist independently possesses his respective use of negative space — both nouns must carry their own possessive markers. "Monet\'s and Degas\'" correctly marks both nouns individually. CollegeBoard: the possessive markers "correctly indicate that the [attribute] belongs to [each entity] individually." "Monet and Degas\'" (choice A) marks only Degas, implying Monet does not independently own his approach, or that both artists share one use of negative space. "Monet\'s and Degas" (choice C) marks only Monet. "Monet and Degas" (choice D) marks neither.',
  },

  // hard — conjunctive adverb (period before + comma after)
  {
    id: 'sec_b_028', num: 28, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The early results of the solar geoengineering simulation were promising _______ therefore, the principal investigators urged caution before advocating for real-world implementation, noting that long-term atmospheric effects remained poorly modeled.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; therefore,', B: ', therefore,', C: '. Therefore,', D: ': therefore,' },
    answer: 'C', isSPR: false,
    explanation: 'The conjunctive adverb "therefore" introduces a result clause and requires either a period or semicolon before it, plus a comma after it. ". Therefore," ends the first sentence and begins the second — this is correct. ", therefore," (choice B) places a comma before "therefore" between two independent clauses, which creates a comma splice — a comma alone cannot join independent clauses regardless of what conjunctive adverb follows. "; therefore," (choice A) is also a grammatically acceptable construction (semicolon + conjunctive adverb + comma), but it is not offered as a choice here; of the options presented, C is the only correct one. ": therefore," (choice D) uses a colon before a conjunctive adverb, which is non-standard.',
  },

  // hard — em-dash for supplementary elaboration (direct, emphatic appositive)
  {
    id: 'sec_b_029', num: 29, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The Antarctic ice sheet holds approximately 26.5 million cubic kilometers of ice _______ enough, if it were to melt entirely, to raise global sea levels by nearly 58 meters.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', which is', B: '; it is', C: '—', D: ', and it is' },
    answer: 'C', isSPR: false,
    explanation: 'An em-dash directly and emphatically introduces the supplementary phrase "enough, if it were to melt entirely, to raise global sea levels by nearly 58 meters," which specifies the scale and significance of the stated quantity. ", which is" (choice A) uses a relative clause construction that works grammatically but is less direct — it inserts a relative pronoun and verb when the em-dash creates a more immediate rhetorical connection. "; it is" (choice B) introduces a semicolon and pronoun, making "it is enough" a separate independent clause, which is less precise than an appositive elaboration. ", and it is" (choice D) treats the elaboration as an additive clause with a coordinating conjunction, weakening the direct specifying relationship.',
  },

  // hard — matched punctuation pairs (dash-dash, not dash-comma mismatch)
  {
    id: 'sec_b_030', num: 30, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The compound\'s most remarkable property _______ its ability to cross the blood-brain barrier without chemical modification — makes it a promising candidate for treating neurological conditions that have long resisted pharmacological intervention.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', its ability', B: '— its ability', C: ': its ability', D: '; its ability' },
    answer: 'B', isSPR: false,
    explanation: 'A supplementary interrupting element must be offset by the same punctuation type on both sides — a matched pair. The closing punctuation is an em-dash (already present in the passage after "modification"), so the opening punctuation must also be an em-dash. "— its ability" (choice B) correctly opens the em-dash pair that is closed by the dash after "modification." CollegeBoard states explicitly that a dash cannot be paired with a comma. ", its ability" (choice A) creates a dash-comma mismatch. ": its ability" (choice C) uses a colon, which cannot be paired with a closing em-dash. "; its ability" (choice D) uses a semicolon, which also cannot be paired with a closing em-dash.',
  },

];


// ── Assembly ──────────────────────────────────────────────────────────────────

const DL_SEC_FORM_STRUCTURE = [
  ...SEC_SVA,
  ...SEC_PRONOUN,
  ...SEC_TENSE,
  ...SEC_DANGLING,
  ...SEC_MODAL_FINITE,
];

const DL_SEC_BOUNDARIES = [
  ...SEC_COMMA_CC,
  ...SEC_PERIOD_PARTICIPIAL,
  ...SEC_HOWEVER,
  ...SEC_NO_PUNCT,
  ...SEC_MID_BOUNDARY,
  ...SEC_HARD_BOUNDARY,
];

const DL_SEC = [...DL_SEC_FORM_STRUCTURE, ...DL_SEC_BOUNDARIES];
