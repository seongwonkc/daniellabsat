'use strict';

// data-sec2.js — SEC questions 61–120 (60 questions)
// 30 FSS (sec_f_031–060) + 30 Boundaries (sec_b_031–060)
// 20 easy / 20 medium / 20 hard

// SEC Batch 2 — 30 questions (15 FSS + 15 Boundaries)
// IDs: sec_f_031–sec_f_045 and sec_b_031–sec_b_045
// Difficulty: 10 easy / 10 medium / 10 hard

const SEC_B2_FSS = [

  // ── EASY (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_f_031', num: 31, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The number of endangered plant and animal species currently listed by the International Union for Conservation of Nature _______ over 44,000 — nearly a third of all assessed species on Earth.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'exceed', B: 'exceeds', C: 'exceeding', D: 'have exceeded' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun of the subject is "number" (singular), not "species." "Exceeds" correctly agrees with the singular subject. "Exceed" and "have exceeded" treat the subject as plural. "Exceeding" is a nonfinite form that cannot serve as the main predicate.',
  },

  {
    id: 'sec_f_032', num: 32, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Watching an entire season of a television series in a single sitting _______ a behavior that did not exist before on-demand streaming services made every episode immediately available.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'are', B: 'being', C: 'is', D: 'were' },
    answer: 'C', isSPR: false,
    explanation: 'The subject is the gerund phrase "Watching an entire season of a television series in a single sitting," which functions as a singular noun. "Is" correctly agrees with the singular gerund subject. "Are" and "were" treat the subject as plural. "Being" is a nonfinite form and cannot serve as the main predicate.',
  },

  {
    id: 'sec_f_033', num: 33, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'In her groundbreaking 1963 essay "Can the Subaltern Speak?", theorist Gayatri Spivak _______ that marginalized groups are systematically silenced not only through direct oppression but through the very discourses that claim to represent them.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'argued', B: 'had argued', C: 'argues', D: 'was arguing' },
    answer: 'C', isSPR: false,
    explanation: 'When discussing the content of a written work, the literary present tense is used. "Argues" correctly applies this convention. "Argued" shifts to past tense, violating the literary present. "Had argued" is past perfect. "Was arguing" is past progressive — all are inconsistent with the literary present.',
  },

  {
    id: 'sec_f_034', num: 34, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'There _______ numerous accounts of ball lightning — a rare atmospheric phenomenon in which luminous orbs of plasma appear during or after thunderstorms — but scientists have struggled to reproduce or fully explain it under laboratory conditions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'is', B: 'was', C: 'being', D: 'are' },
    answer: 'D', isSPR: false,
    explanation: 'In sentences beginning with "there," the true subject follows the verb. The subject here is "numerous accounts" (plural), requiring "are." "Is" and "was" treat the subject as singular. "Being" is nonfinite and cannot serve as the main predicate.',
  },

  {
    id: 'sec_f_035', num: 35, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'By 1945, the Allied forces _______ the German military on multiple fronts for over a year, exhausting its supply lines and breaking the cohesion of its command structure.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'pressured', B: 'have pressured', C: 'pressure', D: 'had pressured' },
    answer: 'D', isSPR: false,
    explanation: '"By 1945" signals that the action was completed before a specific past reference point. "Had pressured" (past perfect) correctly expresses this prior completion. "Pressured" (simple past) does not establish the temporal relationship with 1945. "Have pressured" (present perfect) implies the action continues to the present. "Pressure" (simple present) is inconsistent with the historical context.',
  },


  // ── MEDIUM (5) ────────────────────────────────────────────────────────────

  {
    id: 'sec_f_036', num: 36, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The complexity of the diplomatic negotiations between the two nations, further complicated by the recent change in both governments and the involvement of three international mediating organizations, _______ even the most experienced foreign policy analysts.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'challenge', B: 'are challenging', C: 'have challenged', D: 'challenges' },
    answer: 'D', isSPR: false,
    explanation: 'The head noun of the subject is "complexity" (singular), despite the long intervening phrase "of the diplomatic negotiations...and the involvement of three international mediating organizations." "Challenges" correctly agrees with the singular subject. "Challenge," "are challenging," and "have challenged" treat the subject as plural.',
  },

  {
    id: 'sec_f_037', num: 37, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Having identified a previously unknown species of deep-sea fish using only degraded environmental DNA samples, _______ that the technique could be used to survey marine biodiversity in waters too deep for physical sampling.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'there was a conclusion that', B: 'a determination was made', C: 'the research team concluded', D: 'it was concluded by researchers' },
    answer: 'C', isSPR: false,
    explanation: 'The participial phrase "Having identified a previously unknown species...using only degraded environmental DNA samples" must logically modify the subject of the main clause — only a research team can perform such an identification. "The research team concluded" correctly names the human agents. "There was a conclusion that" uses an expletive. "A determination was made" makes an abstract noun the subject. "It was concluded by researchers" places the function word "it" after the modifier, which illogically suggests "it" performed the identification.',
  },

  {
    id: 'sec_f_038', num: 38, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Each of the seventeen candidate compounds identified in the initial screening process _______ further testing for toxicity, bioavailability, and therapeutic efficacy before any could advance to preclinical trials.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'require', B: 'are requiring', C: 'requires', D: 'have required' },
    answer: 'C', isSPR: false,
    explanation: '"Each of the [plural noun]" constructions take a singular verb — the head of the subject is "each," not "compounds." "Requires" correctly agrees with the singular head noun. "Require," "are requiring," and "have required" incorrectly treat "compounds" as the subject.',
  },

  {
    id: 'sec_f_039', num: 39, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'A leading figure in the development of behavioral economics, _______ widely cited research on how cognitive biases systematically distort human judgment when making financial decisions under uncertainty.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'Daniel Kahneman produced', B: 'it was Daniel Kahneman who produced', C: 'the research of Daniel Kahneman\'s', D: 'Daniel Kahneman\'s' },
    answer: 'D', isSPR: false,
    explanation: 'In the attribute modifier pattern, the appositive "A leading figure in the development of behavioral economics" logically describes Kahneman. The possessive "Daniel Kahneman\'s" allows "widely cited research" to serve as the grammatical subject while tying the appositive back to Kahneman. "Daniel Kahneman produced" would work structurally but changes the sentence to an independent clause that doesn\'t fit the blank. "It was Daniel Kahneman who produced" is an it-cleft, which CollegeBoard identifies as incorrect after introductory modifiers. "The research of Daniel Kahneman\'s" is redundant.',
  },

  {
    id: 'sec_f_040', num: 40, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Neither the lead investigator nor the two co-authors _______ aware of the statistical error in the dataset until a reviewer flagged it during the peer review process.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'was', B: 'is', C: 'has been', D: 'were' },
    answer: 'D', isSPR: false,
    explanation: 'In "neither/nor" constructions, the verb agrees with the subject closest to it. The closer subject is "the two co-authors" (plural), requiring the plural past-tense verb "were." "Was" would agree with a singular nearer subject. "Is" is present tense, inconsistent with the past-event context. "Has been" is singular present perfect.',
  },


  // ── HARD (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_f_041', num: 41, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Recognized as the foundational text of modern conservatism, _______ the classical liberal tradition by insisting that gradual reform, not revolutionary change, is the only legitimate response to social injustice.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it was Edmund Burke who extended', B: 'there is Edmund Burke\'s work extending', C: 'Edmund Burke\'s Reflections on the Revolution in France extends', D: 'the extension of' },
    answer: 'C', isSPR: false,
    explanation: '"Recognized as the foundational text of modern conservatism" modifies the text — Reflections on the Revolution in France. C correctly names the text as the grammatical subject while using the literary present. A is an it-cleft, which CollegeBoard identifies as incorrect after introductory modifiers. B uses the expletive "there is." D creates a sentence fragment.',
  },

  {
    id: 'sec_f_042', num: 42, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The proliferation of antibiotic-resistant bacteria in hospital settings, driven by decades of widespread antibiotic use and compounded by the near-collapse of the antibiotic drug development pipeline in recent years, _______ a public health crisis that infectious disease specialists have been warning about since the early 2000s.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'represent', B: 'representing', C: 'have represented', D: 'represents' },
    answer: 'D', isSPR: false,
    explanation: 'The head noun is "proliferation" (singular), despite the long intervening phrase. "Represents" correctly agrees with the singular subject. "Represent" and "have represented" treat the subject as plural. "Representing" is nonfinite.',
  },

  {
    id: 'sec_f_043', num: 43, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'To accurately model the long-term economic effects of automation on labor markets across multiple industries and demographic groups, _______ both the rate of technological adoption and the elasticity of labor demand in each sector.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'a model must incorporate', B: 'it is necessary to incorporate', C: 'economists must incorporate', D: 'the incorporation of' },
    answer: 'C', isSPR: false,
    explanation: '"To accurately model...must incorporate" — the infinitive phrase must logically modify the subject of the main clause. Only economists can model labor markets. C supplies the correct agent. A makes "a model" the subject of the modifier — models cannot model things; economists use models. B uses the function word "it" as a placeholder. D creates a sentence fragment.',
  },

  {
    id: 'sec_f_044', num: 44, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Gravitational wave data collected by LIGO since 2015 _______ that black holes merge far more frequently than pre-detection theoretical models had predicted, forcing a revision of assumptions about binary black hole formation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'suggest', B: 'suggested', C: 'suggesting', D: 'has suggested' },
    answer: 'A', isSPR: false,
    explanation: 'The subject is "data" (plural in standard scientific usage). "Suggest" correctly agrees with the plural subject in the simple present tense, appropriate for a finding that remains currently relevant. "Suggested" (simple past) implies the data no longer suggest this. "Suggesting" is nonfinite. "Has suggested" is singular.',
  },

  {
    id: 'sec_f_045', num: 45, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Experimental data _______ that repeated low-dose exposure to the compound slows tau protein aggregation in neural tissue may be sufficient to justify advancing the compound to a Phase II clinical trial.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'suggests', B: 'suggested', C: 'suggesting', D: 'have suggested' },
    answer: 'C', isSPR: false,
    explanation: 'The nonfinite present participle "suggesting" correctly forms a restrictive phrase inside the subject — "Experimental data suggesting that repeated low-dose exposure...slows tau protein aggregation." The main verb of the sentence is "may be." Using a finite verb here ("suggests," "suggested," "have suggested") would create a sentence with two predicates without a conjunction, which is ungrammatical.',
  },

];


const SEC_B2_BOUNDARIES = [

  // ── EASY (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_b_031', num: 31, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Pacific Ocean covers approximately 165 million square kilometers _______ it contains more than half of the world\'s oceanic water and is larger than all of Earth\'s landmasses combined.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ';', B: ', and', C: ', but', D: ',' },
    answer: 'B', isSPR: false,
    explanation: 'Two independent clauses in an additive relationship are joined by a comma + "and." ", and" correctly joins the size figure to the additional comparative facts. A semicolon alone is grammatically correct but omits the logical connector "and" that signals addition. ", but" signals contrast — the second clause is not in contrast with the first. A comma alone creates a comma splice.',
  },

  {
    id: 'sec_b_032', num: 32, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Although deep-sea hydrothermal vents were not discovered until 1977 _______ biologists have since found hundreds of species uniquely adapted to their extreme conditions, including tube worms over two meters long and shrimp that thrive near superheated water.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ': biologists', B: 'biologists', C: '; biologists', D: ', biologists' },
    answer: 'D', isSPR: false,
    explanation: 'When a sentence opens with a subordinate clause ("Although..."), a comma marks the boundary before the main clause. ", biologists" correctly places the comma after the subordinate clause. A colon requires an independent clause before it — the "Although" clause is dependent. A semicolon also requires an independent clause before it. No punctuation runs the dependent and independent clauses together without the required boundary.',
  },

  {
    id: 'sec_b_033', num: 33, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Ecologist _______ E.O. Wilson pioneered the study of sociobiology — the application of evolutionary theory to understanding the social behavior of animals, including humans.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', E.O. Wilson,', B: 'E.O. Wilson,', C: '; E.O. Wilson;', D: 'E.O. Wilson' },
    answer: 'D', isSPR: false,
    explanation: '"E.O. Wilson" is a restrictive identifier for the professional title "Ecologist" — it specifies which ecologist is meant. No punctuation is needed. Adding commas (choice A) would treat the name as nonrestrictive, implying it could be removed without changing which ecologist is referenced — but it cannot. A comma after the name only (choice B) is also incorrect. Semicolons (choice C) have no grammatical role in a title-name construction.',
  },

  {
    id: 'sec_b_034', num: 34, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Scientists have long sought to understand what role sleep plays in memory consolidation _______ how the brain\'s glymphatic system clears metabolic waste during sleep.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ',' },
    answer: 'B', isSPR: false,
    explanation: 'Two indirect questions — "what role sleep plays in memory consolidation" and "how the brain\'s glymphatic system clears metabolic waste" — complete the same verb "understand." Because there are only two coordinated elements (not a series of three or more), no comma is needed before "and." ", and" incorrectly adds a comma before a coordinating conjunction joining only two parallel elements.',
  },

  {
    id: 'sec_b_035', num: 35, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The human genome contains approximately 3 billion base pairs _______ only about 1–2% of them encode proteins, with the function of much of the remaining DNA still poorly understood.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; yet', C: ', yet', D: ', so' },
    answer: 'C', isSPR: false,
    explanation: 'Two independent clauses express an adversative contrast — the genome is vast, yet only 1–2% encodes proteins. "Yet" is the coordinating conjunction signaling this contrast, and it requires a comma before it when joining two independent clauses. A comma alone creates a comma splice. "; yet" uses a semicolon before a coordinating conjunction — non-standard, since a semicolon already fully separates independent clauses, making "yet" redundant. ", so" signals result rather than contrast.',
  },


  // ── MEDIUM (5) ────────────────────────────────────────────────────────────

  {
    id: 'sec_b_036', num: 36, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Marie Curie devoted years to isolating radioactive elements under difficult laboratory conditions _______ becoming the first person to win Nobel Prizes in two different scientific fields in recognition of that work.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '. Becoming', C: ', and eventually', D: '; becoming' },
    answer: 'C', isSPR: false,
    explanation: 'The sentence has one subject ("Marie Curie") performing two sequential actions — dedicating years and eventually winning the prizes. ", and eventually" correctly joins the two verb phrases as a compound predicate. A comma alone before "becoming" creates a comma splice — but actually "becoming" is a participial phrase, not an independent clause, so a comma alone could work. However, the "and eventually" phrasing best captures the sequential relationship. ". Becoming" creates a sentence fragment. "; becoming" incorrectly uses a semicolon before a participial phrase rather than an independent clause.',
  },

  {
    id: 'sec_b_037', num: 37, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Philosopher Isaiah Berlin introduced the distinction between "negative liberty" — freedom from external interference — and "positive liberty," which he defined as the capacity to direct one\'s own life _______ the two concepts have been central to debates about political freedom ever since.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: ';', C: ',', D: ': and' },
    answer: 'A', isSPR: false,
    explanation: 'Two independent clauses in an additive relationship: Berlin introduced the distinction, and those concepts have been central ever since. ", and" correctly joins them with a comma before the coordinating conjunction. A semicolon alone (choice B) is also grammatically correct for joining two independent clauses — but it omits the "and" that signals the additive relationship, and the question asks for the most logical completion given the additive meaning. A comma alone (choice C) creates a comma splice. ": and" is non-standard.',
  },

  {
    id: 'sec_b_038', num: 38, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The Chicxulub asteroid impact, dated to approximately 66 million years ago _______ triggered a chain of environmental catastrophes — including global wildfires, a "nuclear winter" caused by debris blocking sunlight, and the collapse of food chains — that led to the extinction of non-avian dinosaurs.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '. It', B: '— it', C: ';', D: ',' },
    answer: 'D', isSPR: false,
    explanation: 'The supplementary phrase "dated to approximately 66 million years ago" was introduced by a comma after "impact" and must be closed by a matching comma before the main verb "triggered." A comma (choice D) correctly closes the supplementary element with a comma-comma matched pair. ". It" creates a sentence fragment — the participial phrase alone cannot stand as a sentence. "— it" uses an em-dash to close a phrase that was opened with a comma, creating a mismatched punctuation pair. A semicolon cannot close a supplementary phrase.',
  },

  {
    id: 'sec_b_039', num: 39, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Cognitive scientist Steven Pinker has argued that violence has declined dramatically over the long arc of human history _______ critics have questioned both his metrics and his interpretation of the historical record.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ';', B: ', however,', C: ', yet', D: ', but' },
    answer: 'D', isSPR: false,
    explanation: 'Two independent clauses express contrast — Pinker\'s argument versus critics\' challenges. "But" is the coordinating conjunction signaling this contrast, and it requires a comma before it when joining two independent clauses. A semicolon alone correctly joins the clauses but omits the logical connector that signals contrast. ", however," uses "however" as a conjunctive adverb — this would require "; however," (semicolon before, comma after) for Pattern A, or the sentence would need restructuring. ", yet" could also work here, but ", but" is more natural for this direct adversative relationship.',
  },

  {
    id: 'sec_b_040', num: 40, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Biologist Lynn Margulis proposed in 1967 that mitochondria — the energy-producing organelles in eukaryotic cells — were once free-living bacteria that became incorporated into larger cells _______ an endosymbiotic process in which both organisms benefited from the partnership.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', through', B: ': through', C: 'through', D: '; through' },
    answer: 'C', isSPR: false,
    explanation: 'No punctuation is needed between the verb "incorporated" and the prepositional phrase "through an endosymbiotic process" that completes its meaning. The prepositional phrase is the direct modifier explaining how the incorporation occurred — any punctuation between the verb and this modifier results in an ungrammatical sentence. ", through" inserts an unnecessary comma. ": through" uses a colon, which requires an independent clause to follow. "; through" uses a semicolon before a prepositional phrase rather than an independent clause.',
  },


  // ── HARD (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_b_041', num: 41, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'For two decades, astronomers assumed dark matter formed smooth, uniform halos around galaxies _______ analyzing data from the Subaru Telescope in 2021, researchers found that dark matter concentrations in nearby dwarf galaxies were far lumpier and more structured than uniform-halo models predicted.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '. However, analyzing', C: '. Analyzing', D: '; however,' },
    answer: 'C', isSPR: false,
    explanation: 'A period ends the first independent clause. "Analyzing data from the Subaru Telescope in 2021" is a participial phrase that modifies "researchers," the subject of the new sentence. A comma (choice A) creates a comma splice. ". However, analyzing" uses "however" to signal contrast — but "analyzing...researchers found" is not an independent clause following "however,"; the participial phrase must be part of the new sentence, not a clause beginning. "; however," implies contrast between the two clauses in this sentence, but "however" requires an independent clause to follow it, and "analyzing...researchers found" is a participial phrase followed by a main clause.',
  },

  {
    id: 'sec_b_042', num: 42, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Primatologist Jane Goodall\'s 1960 observations of chimpanzees using tools challenged the definition of humanity that had previously seemed self-evident _______ human beings were the only animals that made and used tools.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ': that', B: ', that', C: '; that', D: '— that' },
    answer: 'A', isSPR: false,
    explanation: 'A colon correctly introduces the content of the "definition of humanity" — specifying what that definition was: that humans were the only tool-using animals. The colon signals elaboration of the noun phrase "definition of humanity." ", that" creates a comma before a restrictive that-clause, which is incorrect. "; that" uses a semicolon before a subordinate clause rather than an independent clause. "— that" uses an em-dash, which could introduce an amplifying phrase, but a colon is more precise when the following clause specifies the content of a preceding noun.',
  },

  {
    id: 'sec_b_043', num: 43, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The data showed that species richness in the rewilded plots had increased significantly over five years _______ however, species that required large territories or low-disturbance conditions remained absent, suggesting the rewilded areas were still too small and isolated to support the full range of native biodiversity.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', however', B: '. However,', C: '; however,', D: ', however;' },
    answer: 'C', isSPR: false,
    explanation: 'Pattern A for "however": the contrast here is between the two clauses within this sentence — species richness increased vs. sensitive species remained absent. "; however," (semicolon before, comma after) correctly signals this intra-sentence contrast. ", however" (choice A) omits the required comma after "however." ". However," (choice B) would create two separate sentences — the second beginning "However, species that required large territories..." which is grammatically correct but changes the structure so that the two observations are in separate sentences rather than in a single sentence emphasizing their contrast. ", however;" (choice D) reverses the punctuation, creating Pattern B — but Pattern B signals contrast with the preceding sentence, not between the two clauses here.',
  },

  {
    id: 'sec_b_044', num: 44, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Both the cognitive demands of the task _______ the emotional state of the participants appeared to influence response times, with stressed participants under high cognitive load showing the largest performance decrements.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ', but' },
    answer: 'B', isSPR: false,
    explanation: '"Both [A] and [B]" is a correlative structure — no comma is needed between "both" and "and" in this construction. "Both the cognitive demands...and the emotional state...appeared to influence" is a parallel compound subject. "And" alone (no comma) correctly completes the "both...and" correlative. ", and" incorrectly separates "both" from its paired element "and." "; and" incorrectly uses a semicolon within a compound subject. ", but" changes the logical relationship to contrast.',
  },

  {
    id: 'sec_b_045', num: 45, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The committee reviewed the proposed amendments thoroughly, _______ however, the final revisions will require approval from the full board before they can be implemented across all divisions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', the final revisions', B: '. The final revisions', C: 'the final revisions', D: '; the final revisions' },
    answer: 'B', isSPR: false,
    explanation: 'The passage already contains "however" — the question is about what punctuation ends the first sentence (before "however" begins the second). The structure should be: "[First sentence.] However, [second sentence]." ". The final revisions" ends the first sentence with a period, and the second sentence begins with "However," + the rest of the content. This is correct. The full intended sentence is: "...thoroughly. However, the final revisions will require approval..." A comma (choice A) would create a comma splice — the committee reviewed thoroughly, and then a new thought begins with however. "The final revisions" alone (C) creates a run-on. A semicolon (D) before "the final revisions" would join two independent clauses — but "however" is inside the second clause, creating an awkward structure without a comma after "however."',
  },

];


// SEC Batch 3 — 30 questions (15 FSS + 15 Boundaries)
// IDs: sec_f_046–sec_f_060 and sec_b_046–sec_b_060
// Difficulty: 10 easy / 10 medium / 10 hard

const SEC_B3_FSS = [

  // ── EASY (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_f_046', num: 46, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The collection of ancient manuscripts held in the university\'s rare books library _______ some of the earliest surviving copies of Greek philosophical texts, dating back to the fourth century BCE.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'include', B: 'are including', C: 'includes', D: 'have included' },
    answer: 'C', isSPR: false,
    explanation: 'The head noun of the subject is "collection" (singular), not "manuscripts." "Includes" correctly agrees with the singular subject. "Include," "are including," and "have included" treat the subject as plural.',
  },

  {
    id: 'sec_f_047', num: 47, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The participants in the longitudinal study were asked to update _______ dietary logs every two weeks using a standardized app that tracked both caloric intake and macronutrient composition.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'its', B: 'our', C: 'their', D: 'one\'s' },
    answer: 'C', isSPR: false,
    explanation: '"Participants" is plural, requiring the plural possessive pronoun "their." "Its" is singular. "Our" incorrectly shifts person. "One\'s" is indefinite and does not refer to a specific plural antecedent.',
  },

  {
    id: 'sec_f_048', num: 48, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'In Invisible Man, Ralph Ellison _______ the psychological cost of racial invisibility through the narrator\'s unnamed protagonist, whose journey from the Deep South to Harlem traces the failure of American society\'s promises.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'examined', B: 'had examined', C: 'examines', D: 'was examining' },
    answer: 'C', isSPR: false,
    explanation: 'The literary present tense is used when discussing the content of a literary work. "Examines" correctly applies this convention. "Examined," "had examined," and "was examining" all shift to past tense, violating the literary present.',
  },

  {
    id: 'sec_f_049', num: 49, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Among the most significant unresolved questions in modern physics _______ how to reconcile the theory of general relativity, which describes gravity at cosmic scales, with quantum mechanics, which governs matter at subatomic scales.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'are', B: 'is', C: 'being', D: 'have been' },
    answer: 'B', isSPR: false,
    explanation: 'In this inverted sentence, the true subject follows the verb. The subject is "how to reconcile...with quantum mechanics" — an infinitive phrase functioning as a singular noun. "Is" correctly agrees with the singular subject. "Are" and "have been" treat the subject as plural. "Being" is nonfinite.',
  },

  {
    id: 'sec_f_050', num: 50, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Researchers studying social media use and adolescent mental health released two major reports last year. _______ reports found a significant correlation between heavy use and increased rates of anxiety and depression among teenagers.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'This', B: 'That', C: 'These', D: 'It' },
    answer: 'C', isSPR: false,
    explanation: '"These" correctly modifies the plural noun "reports" and refers to the two reports named in the prior sentence. "This" and "that" are singular and do not agree with the plural noun "reports." "It" is a singular pronoun that cannot directly modify a noun.',
  },


  // ── MEDIUM (5) ────────────────────────────────────────────────────────────

  {
    id: 'sec_f_051', num: 51, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The extraordinary resilience of the deep-sea community of organisms, maintained for millions of years despite volcanic eruptions, pressure fluctuations, and the near-total absence of sunlight, _______ biologists who study the limits of life on Earth.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'fascinate', B: 'fascinating', C: 'has fascinated', D: 'have fascinated' },
    answer: 'C', isSPR: false,
    explanation: 'The head noun of the subject is "resilience" (singular), despite the long participial phrase that interrupts it. "Has fascinated" correctly agrees with the singular subject and uses present perfect to indicate ongoing relevance. "Fascinate" and "have fascinated" treat the subject as plural. "Fascinating" is nonfinite.',
  },

  {
    id: 'sec_f_052', num: 52, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Having spent three years conducting fieldwork in remote highland communities in Peru, _______ that traditional agricultural calendars were more precisely calibrated to local microclimatic conditions than any modern meteorological model had achieved.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it became clear to the anthropologist', B: 'the anthropologist found', C: 'a finding emerged', D: 'there was a discovery' },
    answer: 'B', isSPR: false,
    explanation: '"Having spent three years conducting fieldwork" must logically modify the subject of the main clause — only an anthropologist can spend years doing fieldwork. "The anthropologist found" correctly names the agent. "It became clear to the anthropologist" places the function word "it" after the modifier. "A finding emerged" makes an abstract noun the subject — findings cannot conduct fieldwork. "There was a discovery" uses an expletive.',
  },

  {
    id: 'sec_f_053', num: 53, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'In the 1940s, engineers at NASA\'s predecessor agency were developing the early computational tools that _______ become essential for calculating the trajectories needed to navigate spacecraft through the solar system.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'should', B: 'would', C: 'to', D: 'having' },
    answer: 'B', isSPR: false,
    explanation: '"Would" + plain form "become" correctly expresses a past-perspective reference to something that occurred later — "tools that would become essential" describes a future development from the perspective of the 1940s narrative. "Should" introduces normative connotation. "To" creates an ungrammatical infinitive within a relative clause. "Having" produces an ungrammatical phrase.',
  },

  {
    id: 'sec_f_054', num: 54, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The ecosystem collapse that occurred in the region, compounded by three successive years of drought and accelerated by the loss of keystone predators whose populations had been decimated by hunting, _______ as a cautionary example in subsequent conservation policy discussions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'serve', B: 'served', C: 'serving', D: 'have served' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "collapse" (singular), and the past-tense context ("that occurred") signals that the simple past "served" is appropriate. "Serve" and "have served" are plural/present perfect. "Serving" is nonfinite.',
  },

  {
    id: 'sec_f_055', num: 55, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The asteroid belt between Mars and Jupiter contains millions of rocky objects _______ ranging in size from dust particles to the dwarf planet Ceres, which is approximately 940 kilometers in diameter, provides scientists with clues about the early solar system.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'and these objects,', B: 'and, these objects', C: ';', D: 'these objects,' },
    answer: 'A', isSPR: false,
    explanation: 'The sentence needs to introduce a new subject ("these objects") for the second clause\'s verb "provides." "And these objects," + the participial phrase + "provides" creates a compound sentence where the first clause describes what the belt contains and the second explains the scientific significance. A semicolon alone (choice C) cannot be followed by "ranging...provides" as a participial phrase + main verb without a new subject. "These objects," (choice D) without "and" creates a comma splice.',
  },


  // ── HARD (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_f_056', num: 56, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Celebrated internationally for its synthesis of indigenous Andean musical traditions with Western harmonic structures, _______ compositions draw on both the pentatonic scales of Quechua song and the contrapuntal techniques of Bach.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it was composer Gabriela Ortiz whose', B: 'composer Gabriela Ortiz\'s', C: 'there are composer Gabriela Ortiz\'s', D: 'Gabriela Ortiz being a composer whose' },
    answer: 'B', isSPR: false,
    explanation: 'In the attribute modifier pattern, the appositive "Celebrated internationally for its synthesis of indigenous Andean musical traditions with Western harmonic structures" logically describes Ortiz. The possessive "composer Gabriela Ortiz\'s" allows "compositions" to serve as the grammatical subject while tying the appositive to Ortiz. "It was composer Gabriela Ortiz whose" is an it-cleft, explicitly incorrect after introductory modifiers. "There are" uses an expletive construction. "Gabriela Ortiz being a composer whose" creates a fragment.',
  },

  {
    id: 'sec_f_057', num: 57, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The collapse of the Bronze Age palatial economies around 1200 BCE, attributed variously to climate change, migration, internal revolt, and disruption of the long-distance trade networks on which those economies depended, _______ historians as one of the most consequential and poorly understood events in ancient history.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'fascinate', B: 'fascinating', C: 'have fascinated', D: 'fascinates' },
    answer: 'D', isSPR: false,
    explanation: 'The head noun is "collapse" (singular), despite the very long intervening phrase listing the attributed causes. "Fascinates" correctly agrees with the singular subject in the simple present tense. "Fascinate" and "have fascinated" treat the subject as plural. "Fascinating" is nonfinite.',
  },

  {
    id: 'sec_f_058', num: 58, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'To fully understand the neurological basis of language processing, _______ the distributed networks connecting Broca\'s area, Wernicke\'s area, and the motor cortex, rather than treating language as localized in a single region.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'a network model must be examined', B: 'it is necessary to examine', C: 'neuroscientists must examine', D: 'the examination of' },
    answer: 'C', isSPR: false,
    explanation: '"To fully understand the neurological basis of language processing" is an infinitive phrase that must modify the subject of the main clause — only neuroscientists can understand neurological bases. C correctly names the agent. A makes "a network model" the subject — models cannot understand things. B uses the placeholder "it." D creates a sentence fragment.',
  },

  {
    id: 'sec_f_059', num: 59, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Experimental observations _______ that matter and antimatter are produced in equal quantities following high-energy collisions prompted physicists to reconsider why the observable universe is composed almost entirely of matter.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'confirming', B: 'confirmed', C: 'have confirmed', D: 'to confirm' },
    answer: 'A', isSPR: false,
    explanation: 'The nonfinite present participle "confirming" correctly forms a restrictive modifier within the subject — "Experimental observations confirming that matter and antimatter are produced in equal quantities following high-energy collisions prompted physicists." The main verb is "prompted." Using a finite verb ("confirmed," "have confirmed") would create an ungrammatical sentence with two predicates without a conjunction. "To confirm" creates an awkward infinitive modifier that does not function correctly here.',
  },

  {
    id: 'sec_f_060', num: 60, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The reef system, stretching over 2,000 kilometers and supporting thousands of marine species, collapsed suddenly after a prolonged bleaching event _______ a stark illustration of how quickly even vast and established ecosystems can unravel under sustained thermal stress.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', it provided', B: ', providing', C: '. It provided', D: '; providing' },
    answer: 'B', isSPR: false,
    explanation: 'A nonfinite present participle ("providing") correctly follows the main clause as a supplementary consequence element — the collapse provided a stark illustration of rapid ecosystem unraveling. ", providing" attaches this consequence directly to the main clause without creating a comma splice. ", it provided" (A) creates a comma splice. ". It provided" (C) is grammatically correct as two separate sentences, but the participial construction is more precise and natural here. "; providing" (D) incorrectly uses a semicolon before a participial phrase rather than an independent clause.',
  },

];


const SEC_B3_BOUNDARIES = [

  // ── EASY (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_b_046', num: 46, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Astronomers using the Event Horizon Telescope captured the first image of a black hole in 2019 _______ the image showed the shadow of the supermassive black hole at the center of the galaxy M87, 55 million light-years from Earth.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; the', B: ', the', C: ', and the', D: ': the' },
    answer: 'D', isSPR: false,
    explanation: 'A colon correctly introduces the elaborating clause specifying what the image showed — this is the content of the "first image" mentioned in the main clause. The second clause explains exactly what the image depicted. ", the" creates a comma splice. ", and the" uses "and" to add information but is less precise than the colon, which captures the elaborative relationship. "; the" with a semicolon is grammatically correct but doesn\'t capture the elaborating relationship as precisely as the colon.',
  },

  {
    id: 'sec_b_047', num: 47, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Although carbon fiber is significantly stronger than steel by weight _______ it is also considerably more expensive to produce, which has limited its adoption to high-performance applications in aerospace and motorsport.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '. It', B: ', it', C: '; it', D: ': it' },
    answer: 'B', isSPR: false,
    explanation: 'A comma correctly marks the boundary between the subordinate clause ("Although carbon fiber is significantly stronger than steel by weight") and the main clause ("it is also considerably more expensive"). ". It" creates two sentence fragments. "; it" uses a semicolon between a dependent clause and an independent clause — only independent clauses can be joined by a semicolon. ": it" uses a colon after a dependent clause, which is also incorrect.',
  },

  {
    id: 'sec_b_048', num: 48, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Neuroscientist _______ Antonio Damasio proposed that emotions are not obstacles to rational decision-making but essential components of it, based on his observations of patients with damage to the prefrontal cortex.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', Antonio Damasio,', B: 'Antonio Damasio,', C: 'Antonio Damasio', D: '; Antonio Damasio' },
    answer: 'C', isSPR: false,
    explanation: 'When a professional title directly precedes and identifies a name, no punctuation is used. "Neuroscientist Antonio Damasio" — the title is restrictive, identifying which person is meant. Adding commas would incorrectly treat the name as nonrestrictive.',
  },

  {
    id: 'sec_b_049', num: 49, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Amazon River discharges approximately 209,000 cubic meters of water per second into the Atlantic Ocean _______ accounting for about 20 percent of all freshwater flowing into the world\'s oceans.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', accounting', B: '. Accounting', C: '; accounting', D: ': accounting' },
    answer: 'A', isSPR: false,
    explanation: 'A comma followed by the participial phrase "accounting for about 20 percent" correctly supplements the main clause with a consequence or additional characterization of the discharge figure. The participial phrase is not an independent clause, so a period (fragment), semicolon (requires independent clause), or colon (also requires independent clause) cannot precede it.',
  },

  {
    id: 'sec_b_050', num: 50, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The architect spent months refining the structural design _______ presented the final plans to the city council only after every load-bearing calculation had been independently verified.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ', but' },
    answer: 'B', isSPR: false,
    explanation: 'The sentence has one subject ("The architect") performing two actions in sequence — "spent months refining" and "presented the final plans." Two verbs sharing the same subject form a compound predicate. No comma is needed before "and" in a compound predicate. ", and" would incorrectly punctuate as if a second independent clause were present.',
  },


  // ── MEDIUM (5) ────────────────────────────────────────────────────────────

  {
    id: 'sec_b_051', num: 51, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Charles Darwin spent over twenty years gathering evidence before publishing On the Origin of Species in 1859 _______ gathering samples from across the globe, consulting with plant and animal breeders, and conducting extensive correspondence with naturalists on multiple continents, he built the empirical foundation that made his argument difficult to dismiss.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '. Gathering', C: '; gathering', D: ', and gathering' },
    answer: 'B', isSPR: false,
    explanation: 'A period ends the first independent clause. "Gathering samples from across the globe...he built the empirical foundation" is a new sentence where the participial phrase "Gathering...and conducting" modifies "he" (Darwin). A comma creates a comma splice. A semicolon cannot be followed by a participial phrase — it joins independent clauses. ", and gathering" creates an unbalanced structure where the participial phrase is joined to the prior clause with "and" but lacks its own main clause in that position.',
  },

  {
    id: 'sec_b_052', num: 52, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The results confirmed the researchers\' hypothesis; _______ the improvement in cognitive performance was observed only in participants who had received the full-dose intervention, not in those who received the half-dose.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'however,', B: 'therefore,', C: 'additionally,', D: 'specifically,' },
    answer: 'D', isSPR: false,
    explanation: 'The blank follows a semicolon and the following clause narrows the prior claim — it specifies the conditions under which the improvement was observed (full dose only). "Specifically" signals that the following clause provides a precise specification of what was stated in the prior clause. "However" signals contrast — the prior clause confirmed the hypothesis, so contrast is inappropriate. "Therefore" implies causation — as if the specific dosage finding is a logical consequence of confirming the hypothesis. "Additionally" would add a new separate point rather than a specification.',
  },

  {
    id: 'sec_b_053', num: 53, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Quantum entanglement — the phenomenon in which two particles become correlated such that measuring one instantly determines the state of the other, regardless of the distance separating them _______ has been experimentally confirmed over distances exceeding 1,200 kilometers.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '—', B: ',', C: ';', D: ':' },
    answer: 'A', isSPR: false,
    explanation: 'The supplementary phrase "the phenomenon in which two particles become correlated such that measuring one instantly determines the state of the other, regardless of the distance separating them" was introduced by an em-dash after "entanglement" and must be closed by a matching em-dash before the main verb "has been confirmed." An em-dash pair (dash-dash) is required — a matched pair. A comma would create a dash-comma mismatch, which CollegeBoard identifies as incorrect. A semicolon and colon also cannot close an em-dash supplementary phrase.',
  },

  {
    id: 'sec_b_054', num: 54, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'In the early twentieth century, many linguists believed that the number of sounds a language could distinguish was effectively limitless _______ subsequent research has shown that while phoneme inventories do vary widely, most languages use between 20 and 50 phonemes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; however,', B: ', however,', C: ', however', D: '. However' },
    answer: 'A', isSPR: false,
    explanation: 'Pattern A for "however": the contrast is between the early belief (limitless phoneme inventories) and the subsequent research finding (constrained range). "; however," correctly places a semicolon before "however" and a comma after it, signaling contrast between the two clauses within this sentence. ", however," creates a comma splice — a comma before "however" cannot join two independent clauses. ", however" omits the required comma after "however." ". However" ends the sentence with a period, making the following clause a new sentence without the "however," comma structure.',
  },

  {
    id: 'sec_b_055', num: 55, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The Treaty of Westphalia, signed in 1648 to end the Thirty Years\' War _______ established the principle of state sovereignty that remains foundational to international law.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '. It', B: '; it', C: '— it', D: ',' },
    answer: 'D', isSPR: false,
    explanation: 'The supplementary phrase "signed in 1648 to end the Thirty Years\' War" was introduced by a comma after "Westphalia" and must be closed by a matching comma before the main verb "established" — a comma-comma matched pair. A comma correctly closes the supplementary phrase. ". It" creates a fragment. "; it" introduces a semicolon followed by a pronoun, requiring a complete independent clause, but "it established" after a semicolon would work structurally — however, it mismatches the opening comma. "— it" uses an em-dash to close a phrase opened with a comma (mismatch).',
  },


  // ── HARD (5) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_b_056', num: 56, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'For decades, economists insisted that trade liberalization would raise living standards globally _______ analyzing the employment data from manufacturing regions in the United States and Europe after the 2001 entry of China into the World Trade Organization, researchers found that the adjustment costs fell disproportionately on workers in specific industries and communities.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '. However, analyzing', C: '. Analyzing', D: '; however, analyzing' },
    answer: 'C', isSPR: false,
    explanation: 'A period ends the first independent clause. "Analyzing the employment data...researchers found" is a new sentence where the participial phrase "Analyzing...the WTO" modifies "researchers," the subject of the new sentence. A comma (A) creates a comma splice. ". However, analyzing" (B) introduces "however" to signal contrast — but "analyzing...researchers found" is a participial phrase plus main clause, not an independent clause following "however,"; "however" requires an independent clause to follow it, and "analyzing data...researchers found" is a participial + main clause structure that should stand on its own. "; however, analyzing" (D) makes the same error with a semicolon.',
  },

  {
    id: 'sec_b_057', num: 57, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Ecologist E.O. Wilson argued that the sixth mass extinction, currently underway, differs from all previous mass extinctions in one crucial respect _______ it is being caused entirely by the actions of a single species.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; it', B: ', it', C: ': it', D: '. It' },
    answer: 'C', isSPR: false,
    explanation: 'A colon correctly introduces the clause that specifies the "crucial respect" mentioned in the first clause — the second clause elaborates on what the difference is. The colon captures the elaborative relationship between "differs in one crucial respect" and the specification of that respect. ", it" creates a comma splice. "; it" with a semicolon would also be grammatically correct for joining independent clauses, but the colon more precisely captures that the second clause is specifying the content of the "crucial respect." ". It" creates two grammatically complete sentences but loses the tight explanatory relationship.',
  },

  {
    id: 'sec_b_058', num: 58, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The 2003 invasion of Iraq was predicated on intelligence assessments claiming that Saddam Hussein possessed weapons of mass destruction. Those assessments, produced under significant institutional pressure to confirm a predetermined conclusion _______ proved to be fundamentally mistaken, with subsequent inspections finding no stockpiles of chemical, biological, or nuclear weapons.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; they', B: ', proved', C: '—', D: ',' },
    answer: 'D', isSPR: false,
    explanation: 'The supplementary phrase "produced under significant institutional pressure to confirm a predetermined conclusion" was introduced by a comma after "assessments" and must be closed by a matching comma before the main verb "proved" — a comma-comma matched pair. A comma (D) correctly closes the supplementary element. "; they" introduces a semicolon + pronoun, creating a structural mismatch with the opening comma. ", proved" without a subject would attach the supplementary phrase incorrectly to the verb. "—" would create a dash-comma mismatch.',
  },

  {
    id: 'sec_b_059', num: 59, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Philosopher Thomas Kuhn argued that science does not progress through the gradual accumulation of knowledge. It advances instead through "paradigm shifts," _______ in which an accumulating body of anomalies forces a revolutionary replacement of one entire framework of understanding with another.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'moments', B: 'that are moments', C: 'which are moments', D: 'moments that are' },
    answer: 'A', isSPR: false,
    explanation: 'The blank fills an appositive position — "paradigm shifts" is being defined by what follows the comma. "Moments in which an accumulating body of anomalies forces..." is a noun phrase that functions as an appositive specifying what paradigm shifts are. No pronoun or relative conjunction is needed before "moments" — the appositive follows directly. "That are moments" and "which are moments" introduce unnecessary relative clauses. "Moments that are" would require the participial phrase "in which..." to follow "moments that are," creating an unwieldy structure.',
  },

  {
    id: 'sec_b_060', num: 60, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Paleontologists have recently determined that several species previously classified as distinct _______ in fact constitute a single species at different developmental stages, overturning decades of taxonomy based on skeletal size differences that turned out to reflect age rather than species differences.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', they', B: ', actually', C: '; they actually', D: '' },
    answer: 'D', isSPR: false,
    explanation: 'No punctuation is needed between "classified as distinct" and "in fact constitute" — the sentence flows directly from the noun phrase modified by the relative clause ("species...classified as distinct") to the main verb "constitute." Any punctuation between the subject phrase and its predicate results in an ungrammatical sentence. ", they" creates a comma splice. ", actually" inserts an adverb with an unnecessary comma. "; they actually" creates a semicolon before a relative pronoun.',
  },

];


const DL_SEC2 = [
  ...SEC_B2_FSS, ...SEC_B2_BOUNDARIES,
  ...SEC_B3_FSS, ...SEC_B3_BOUNDARIES,
];
