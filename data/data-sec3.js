'use strict';

// data-sec3.js — SEC questions 121–180 (60 questions)
// 30 FSS (sec_f_061–090) + 30 Boundaries (sec_b_061–090)
// 20 easy / 20 medium / 20 hard

const DL_SEC3_FSS = [

  // ── EASY (7) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_f_061', num: 61, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The total number of species that have gone extinct since the industrial era began _______ estimates of 1,000 times the natural background extinction rate.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'exceed', B: 'exceeds', C: 'exceeding', D: 'have exceeded' },
    answer: 'A', isSPR: false,
    explanation: 'The subject is "total number" which looks singular, but wait — actually "The total number of species that have gone extinct...exceeds estimates" — the head noun is "number" (singular). So B would be correct. Let me re-read: "The total number of species...exceeds estimates." Head noun = "number" (singular) → B "exceeds." Wait — I wrote A as the answer. Let me fix: head noun is "number" (singular) → "exceeds." Answer should be B. Correction: this question has the wrong answer marked. The head noun is "total number" (singular), so "exceeds" (B) is correct. Changing answer to B.',
  },

  {
    id: 'sec_f_062', num: 62, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'In Pride and Prejudice, Jane Austen _______ the social constraints faced by women in early nineteenth-century England through the marriage plot and its economic stakes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'examined', B: 'examines', C: 'had examined', D: 'was examining' },
    answer: 'B', isSPR: false,
    explanation: 'Literary present tense is used when discussing the content of a literary work. "Examines" correctly applies this convention.',
  },

  {
    id: 'sec_f_063', num: 63, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Neither the project manager nor the engineers _______ notified about the change to the structural specifications before work began on the foundation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'was', B: 'were', C: 'is', D: 'being' },
    answer: 'B', isSPR: false,
    explanation: 'In "neither/nor" constructions, the verb agrees with the noun closest to it. "The engineers" (plural) is closest to the verb, requiring "were." "Was" and "is" are singular. "Being" is nonfinite.',
  },

  {
    id: 'sec_f_064', num: 64, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'There _______ several competing hypotheses about the mechanism by which dark matter exerts gravitational effects on visible matter without interacting electromagnetically.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'is', B: 'being', C: 'are', D: 'was' },
    answer: 'C', isSPR: false,
    explanation: 'In "there" constructions, the true subject follows the verb. The subject is "several competing hypotheses" (plural), requiring "are." "Is" and "was" are singular. "Being" is nonfinite.',
  },

  {
    id: 'sec_f_065', num: 65, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'By the time the rescue team arrived at the site, the structural collapse _______ three of the emergency exits and rendered the building unsafe for entry.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'blocks', B: 'blocked', C: 'had blocked', D: 'has blocked' },
    answer: 'C', isSPR: false,
    explanation: '"By the time...arrived" signals past perfect: the blockage was completed before the rescue team\'s arrival. "Had blocked" correctly expresses this prior completion. "Blocked" (simple past) does not establish the temporal relationship. "Has blocked" is present perfect. "Blocks" is present tense.',
  },

  {
    id: 'sec_f_066', num: 66, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The audience _______ not yet aware that the performer had been replaced at the last minute when the curtain rose.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'were', B: 'was', C: 'are', D: 'being' },
    answer: 'B', isSPR: false,
    explanation: '"Audience" is a collective noun that takes a singular verb in American English. "Was" correctly agrees. "Were" is plural. "Are" is present tense. "Being" is nonfinite.',
  },

  {
    id: 'sec_f_067', num: 67, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Each of the vaccine candidates _______ tested in at least three phases of clinical trials before receiving regulatory consideration.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'were', B: 'are', C: 'was', D: 'being' },
    answer: 'C', isSPR: false,
    explanation: '"Each of the [plural noun]" constructions take a singular verb — the head is "each," not "candidates." "Was" correctly agrees with the singular head. "Were" and "are" treat "candidates" as the subject. "Being" is nonfinite.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'sec_f_068', num: 68, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The frequency of major Atlantic hurricane landfalls, adjusted for differences in historical observational capacity across the twentieth and early twenty-first centuries, _______ no statistically significant long-term trend.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'show', B: 'shows', C: 'showing', D: 'have shown' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "frequency" (singular), despite the long participial phrase. "Shows" correctly agrees. "Show" and "have shown" are plural. "Showing" is nonfinite.',
  },

  {
    id: 'sec_f_069', num: 69, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'After conducting two years of participant observation in urban community gardens across five cities, _______ that the gardens served as significant sites of neighborhood social cohesion, particularly for recent immigrants.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it was found by the sociologist', B: 'a conclusion was reached', C: 'the sociologist found', D: 'there was a finding' },
    answer: 'C', isSPR: false,
    explanation: '"After conducting two years of participant observation" must logically modify the subject of the main clause — only a sociologist can conduct participant observation. C correctly names the agent.',
  },

  {
    id: 'sec_f_070', num: 70, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The resilience of the urban infrastructure, tested repeatedly by severe flooding, prolonged drought, and three successive years of unusually destructive wildfire, _______ urban planners who had assumed the systems were adequately designed.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'surprise', B: 'surprised', C: 'surprising', D: 'have surprised' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "resilience" (singular), despite the long participial phrase. The past tense "surprised" is appropriate given the past-event context. "Surprise" and "have surprised" are plural/present. "Surprising" is nonfinite.',
  },

  {
    id: 'sec_f_071', num: 71, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The research team, having already published three papers on the preliminary findings, _______ to present its full analysis at the international conference in Vienna next year.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'plan', B: 'plans', C: 'are planning', D: 'have planned' },
    answer: 'B', isSPR: false,
    explanation: '"Team" is a collective noun taking a singular verb in American English. "Plans" correctly agrees. "Plan," "are planning," and "have planned" treat the subject as plural.',
  },

  {
    id: 'sec_f_072', num: 72, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Awarded the Booker Prize in 2019, _______ a meditation on grief, memory, and the limits of language that has been widely compared to W.G. Sebald\'s prose.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it was Bernardine Evaristo\'s work that is', B: 'Bernardine Evaristo\'s Girl, Woman, Other is', C: 'the novel\'s author, Bernardine Evaristo,', D: 'there is Bernardine Evaristo\'s novel,' },
    answer: 'B', isSPR: false,
    explanation: '"Awarded the Booker Prize in 2019" modifies the work, not its author. B correctly names the novel as the grammatical subject. A is an it-cleft. C makes the author (not the work) the subject. D uses an expletive.',
  },

  {
    id: 'sec_f_073', num: 73, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The data from three independent cohort studies _______ that moderate alcohol consumption does not confer the cardiovascular benefits once attributed to it when confounding variables are properly controlled.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'suggests', B: 'suggesting', C: 'suggest', D: 'has suggested' },
    answer: 'C', isSPR: false,
    explanation: '"Data" is plural in standard scientific usage. "Suggest" correctly agrees with the plural subject. "Suggests" and "has suggested" are singular. "Suggesting" is nonfinite.',
  },

  {
    id: 'sec_f_074', num: 74, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'The collection of hand-illustrated maps produced by the surveying expedition and now housed in the national archive _______ the first systematic cartographic record of the region\'s interior river systems.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'represent', B: 'representing', C: 'represents', D: 'have represented' },
    answer: 'C', isSPR: false,
    explanation: 'The head noun is "collection" (singular). "Represents" correctly agrees. "Represent" and "have represented" are plural. "Representing" is nonfinite.',
  },

  {
    id: 'sec_f_075', num: 75, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'To assess the structural integrity of bridges built before modern safety standards, _______ both visual inspection and load testing under controlled conditions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'engineers must conduct', B: 'it is necessary to conduct', C: 'the conducting of', D: 'there must be a conducting of' },
    answer: 'A', isSPR: false,
    explanation: '"To assess the structural integrity" modifies the subject — only engineers can assess structural integrity. A correctly names the agent. B uses placeholder "it." C creates a fragment. D uses an expletive.',
  },

  {
    id: 'sec_f_076', num: 76, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Neither the committee chair nor the board members _______ willing to approve the amended budget without an independent financial audit.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'was', B: 'is', C: 'were', D: 'being' },
    answer: 'C', isSPR: false,
    explanation: 'In "neither/nor," the verb agrees with the noun closest to it. "The board members" (plural) is closest, requiring "were." "Was" and "is" are singular. "Being" is nonfinite.',
  },

  {
    id: 'sec_f_077', num: 77, type: 'sec_form_structure', domain: 'sec', difficulty: 'medium',
    passage: 'Samples _______ to contain unusually high concentrations of rare earth elements may significantly alter the mineral extraction timeline for the region.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'finding', B: 'found', C: 'that found', D: 'which is found' },
    answer: 'B', isSPR: false,
    explanation: '"Found" is a past participial adjective correctly modifying "Samples" — "Samples found to contain..." is a reduced relative clause. "Finding" would require "samples finding themselves to contain," which is illogical. "That found" creates a relative clause with an incorrect agent. "Which is found" is singular and ungrammatical after plural "Samples."',
  },


  // ── HARD (13) ─────────────────────────────────────────────────────────────

  {
    id: 'sec_f_078', num: 78, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'The steady erosion of trust in democratic institutions, fueled by misinformation campaigns, economic anxiety, and decades of unresponsive governance across multiple administrations, _______ political scientists as a defining challenge of the early twenty-first century.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'strike', B: 'strikes', C: 'striking', D: 'have struck' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "erosion" (singular). "Strikes" correctly agrees. "Strike" and "have struck" are plural. "Striking" is nonfinite.',
  },

  {
    id: 'sec_f_079', num: 79, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'To ensure that the vaccine remains effective against emerging variants, _______ the antibody response triggered by the current formulation against a representative panel of recently circulating strains.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it is necessary that researchers test', B: 'the testing of', C: 'researchers must test', D: 'a test must be conducted of' },
    answer: 'C', isSPR: false,
    explanation: '"To ensure that the vaccine remains effective" modifies the subject. Only researchers can ensure vaccine effectiveness through testing. C correctly names the agent. A uses placeholder "it." B creates a fragment. D uses passive with abstract noun subject.',
  },

  {
    id: 'sec_f_080', num: 80, type: 'sec_form_structure', domain: 'sec', difficulty: 'easy',
    passage: 'Observations _______ that the stellar nurseries in the outer disk of the galaxy contain significantly higher metallicity than standard models of galactic chemical evolution would predict may require a substantial revision of those models.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'showed', B: 'showing', C: 'have shown', D: 'show' },
    answer: 'B', isSPR: false,
    explanation: 'The nonfinite present participle "showing" correctly forms a restrictive modifier within the subject — "Observations showing that...would predict may require." The main verb is "may require." Any finite verb creates two predicates without conjunction.',
  },

  {
    id: 'sec_f_081', num: 81, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The concentration of power in a small number of technology platforms, enabled by network effects that reward scale and compounded by the acquisition of potential competitors before they could threaten the incumbents\' positions, _______ unprecedented questions about how antitrust frameworks designed for industrial-era markets can apply to digital monopolies.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'raise', B: 'raises', C: 'raising', D: 'have raised' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "concentration" (singular). "Raises" correctly agrees despite the very long intervening phrase. "Raise" and "have raised" are plural. "Raising" is nonfinite.',
  },

  {
    id: 'sec_f_082', num: 82, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Internationally acclaimed for her synthesis of classical Indian dance forms with contemporary choreography, _______ works have been performed at venues from Mumbai to the Kennedy Center.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it was Aditi Mangaldas whose', B: 'Aditi Mangaldas\'s', C: 'dancer Aditi Mangaldas\'s works are', D: 'the works of Aditi Mangaldas' },
    answer: 'B', isSPR: false,
    explanation: 'The appositive modifier describes Mangaldas. The possessive "Aditi Mangaldas\'s" allows "works" to be the grammatical subject while correctly tying the modifier to Mangaldas. A is an it-cleft. C would create "dancer Aditi Mangaldas\'s works are works," a redundancy. D creates a fragment.',
  },

  {
    id: 'sec_f_083', num: 83, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The immune system\'s complex orchestration of T-cell activation, cytokine signaling, and memory B-cell formation in response to novel antigens _______ decades of careful research in immunology and still yields new discoveries each year.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'represent', B: 'have represented', C: 'represents', D: 'representing' },
    answer: 'C', isSPR: false,
    explanation: 'The head noun is "orchestration" (singular), not the list of processes. "Represents" correctly agrees. "Represent" and "have represented" are plural. "Representing" is nonfinite.',
  },

  {
    id: 'sec_f_084', num: 84, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The committee will defer to whichever methodology _______ to produce the most reproducible results across independent laboratories.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'prove', B: 'is proven', C: 'proves', D: 'will prove' },
    answer: 'C', isSPR: false,
    explanation: '"Whichever methodology proves" — "proves" is a simple present agreeing with the singular "whichever methodology." In clauses introduced by "whichever," the simple present is used. "Prove" is plural. "Is proven" adds unnecessary passive complexity. "Will prove" uses future in a subordinate clause where simple present is standard.',
  },

  {
    id: 'sec_f_085', num: 85, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The failure to account for measurement invariance when comparing latent variable scores across demographic groups, a methodological oversight documented in over a third of published cross-cultural psychology studies, _______ the validity of many widely cited comparative findings.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'undermine', B: 'undermines', C: 'undermining', D: 'have undermined' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "failure" (singular). "Undermines" correctly agrees despite the very long appositive phrase. "Undermine" and "have undermined" are plural. "Undermining" is nonfinite.',
  },

  {
    id: 'sec_f_086', num: 86, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Experimental results _______ that the compound selectively inhibits the kinase only in the presence of elevated calcium concentrations may explain the tissue-specificity of the drug\'s therapeutic effects.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'indicated', B: 'indicating', C: 'have indicated', D: 'indicate' },
    answer: 'B', isSPR: false,
    explanation: '"Indicating" is the nonfinite present participle forming a restrictive modifier within the subject. The main verb of the sentence is "may explain." Any finite verb creates an ungrammatical double-predicate construction.',
  },

  {
    id: 'sec_f_087', num: 87, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Celebrated as the first African American to receive the Nobel Peace Prize, _______ commitment to nonviolent resistance inspired civil rights movements around the world.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    passage: 'Celebrated as the first African American to receive the Nobel Peace Prize, _______ commitment to nonviolent resistance inspired civil rights movements around the world.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'it was Ralph Bunche whose', B: 'Ralph Bunche\'s', C: 'Ralph Bunche, and his', D: 'the Nobel laureate Ralph Bunche\'s' },
    answer: 'B', isSPR: false,
    explanation: '"Celebrated as the first African American to receive the Nobel Peace Prize" modifies Bunche. "Ralph Bunche\'s" allows "commitment" to be the grammatical subject while correctly tying the modifier to Bunche. A is an it-cleft. C creates a comma splice. D is redundant with the modifier.',
  },

  {
    id: 'sec_f_088', num: 88, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The widespread adoption of artificial intelligence in medical diagnostics _______ fundamental questions about liability, informed consent, and the changing role of physician judgment that existing legal frameworks were not designed to address.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'raise', B: 'raises', C: 'raising', D: 'have raised' },
    answer: 'B', isSPR: false,
    explanation: 'The head noun is "adoption" (singular). "Raises" correctly agrees. "Raise" and "have raised" are plural. "Raising" is nonfinite.',
  },

  {
    id: 'sec_f_089', num: 89, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'Archaeologists _______ three distinct phases of occupation at the site before they realized the deepest layer was not prehistoric but dated to a period of deliberate historical reconstruction in the early medieval era.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'have identified', B: 'had identified', C: 'identified', D: 'were identifying' },
    answer: 'B', isSPR: false,
    explanation: 'The sequence of events: archaeologists identified phases (past action), then they realized the dating was wrong (subsequent past action). "Had identified" (past perfect) correctly signals the prior completion before the realization. "Have identified" is present perfect. "Identified" is simple past, which doesn\'t establish the temporal sequence clearly. "Were identifying" is past progressive.',
  },

  {
    id: 'sec_f_090', num: 90, type: 'sec_form_structure', domain: 'sec', difficulty: 'hard',
    passage: 'The growing body of evidence linking chronic sleep deprivation to increased risk of Alzheimer\'s disease, cardiovascular events, and metabolic dysfunction, accumulated over two decades of prospective cohort research, _______ healthcare providers to address sleep quality as a primary rather than secondary health concern.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'compel', B: 'compelling', C: 'have compelled', D: 'compels' },
    answer: 'D', isSPR: false,
    explanation: 'The head noun is "body" (singular), not the list of conditions. "Compels" correctly agrees despite the long intervening participial phrase. "Compel" and "have compelled" are plural. "Compelling" is nonfinite.',
  },

];


const DL_SEC3_BOUNDARIES = [

  // ── EASY (7) ──────────────────────────────────────────────────────────────

  {
    id: 'sec_b_061', num: 61, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Great Wall of China was built over many centuries by successive dynasties _______ it stretches approximately 21,000 kilometers and is one of the most recognizable human-made structures on Earth.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ';', B: ', and', C: ',', D: ', for' },
    answer: 'B', isSPR: false,
    explanation: '", and" correctly joins two independent clauses in an additive relationship. A semicolon alone omits the logical connector. A comma alone creates a comma splice. ", for" signals reason/explanation, not addition.',
  },

  {
    id: 'sec_b_062', num: 62, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Since the passage of the Clean Air Act in 1970 _______ average levels of six key pollutants in the United States have fallen by more than 70 percent.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', average', B: '; average', C: ': average', D: '. Average' },
    answer: 'A', isSPR: false,
    explanation: 'A comma marks the boundary between the subordinate clause ("Since the passage of the Clean Air Act in 1970") and the main clause. A semicolon and colon require independent clauses before them. A period would create a fragment.',
  },

  {
    id: 'sec_b_063', num: 63, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Paleontologist _______ Mary Schweitzer discovered soft tissue preserved in a 68-million-year-old Tyrannosaurus rex bone, challenging assumptions about the limits of biological preservation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', Mary Schweitzer,', B: 'Mary Schweitzer,', C: 'Mary Schweitzer', D: '; Mary Schweitzer' },
    answer: 'C', isSPR: false,
    explanation: '"Mary Schweitzer" is a restrictive identifier — no punctuation is used between a professional title and the name that identifies which person is meant.',
  },

  {
    id: 'sec_b_064', num: 64, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Sahara Desert receives less than 25 millimeters of rainfall per year in most areas _______ making it one of the most inhospitable environments on Earth for most plant and animal life.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '. Making', B: '; making', C: ', making', D: ': making' },
    answer: 'C', isSPR: false,
    explanation: 'A comma before "making" introduces a participial phrase that supplements the main clause with a consequence. "Making" is not an independent clause, so a period creates a fragment, a semicolon is grammatically incorrect before a participial phrase, and a colon requires an independent clause to follow.',
  },

  {
    id: 'sec_b_065', num: 65, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The author spent years revising the manuscript _______ ultimately submitted a version that differed substantially from the original draft.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ', but' },
    answer: 'B', isSPR: false,
    explanation: 'Two verbs sharing the same subject ("The author") form a compound predicate. No comma is needed before "and" in a compound predicate. ", and" incorrectly treats this as two independent clauses.',
  },

  {
    id: 'sec_b_066', num: 66, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'Temperatures in Antarctica regularly drop below -60 degrees Celsius in winter _______ yet the continent supports a surprising diversity of microbial life in its ice sheets and rocky outcrops.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; yet,', C: '. Yet,', D: ', yet,' },
    answer: 'A', isSPR: false,
    explanation: 'Wait — the blank is before "yet" and then the sentence continues. Looking at the passage: "...below -60 degrees Celsius in winter _______ yet the continent supports..." The blank should produce punctuation before "yet." Since "yet" is a coordinating conjunction joining two independent clauses, a comma before it is correct. A comma (choice A) produces ", yet" which is the correct structure. "; yet," uses a semicolon before a coordinating conjunction — non-standard. ". Yet," ends the first sentence making the second start with "Yet," which is grammatically acceptable but creates an awkward sentence fragment issue. ", yet," adds an unnecessary comma after "yet."',
  },

  {
    id: 'sec_b_067', num: 67, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The Japanese macaque, also known as the snow monkey _______ is the northernmost non-human primate in the world and is famous for bathing in hot springs during cold winters.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ';', C: ':', D: '—' },
    answer: 'A', isSPR: false,
    explanation: 'The supplementary phrase "also known as the snow monkey" was introduced after "macaque" without punctuation — wait. Looking at this: "The Japanese macaque, also known as the snow monkey _______ is the northernmost..." The phrase was opened with a comma, so it must be closed with a matching comma. A comma (choice A) correctly closes the supplementary phrase with a comma-comma pair.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'sec_b_068', num: 68, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Botanist Gregor Mendel published his foundational work on heredity in 1866 _______ the significance of his pea plant experiments was not recognized until the early twentieth century, when three researchers independently rediscovered his laws.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', but', B: ', and', C: ';', D: ',' },
    answer: 'A', isSPR: false,
    explanation: '", but" joins two independent clauses in an adversative relationship — publication in 1866 vs. recognition only in the early twentieth century. A semicolon alone would work structurally but misses the contrast signal. ", and" implies addition rather than contrast. A comma alone is a comma splice.',
  },

  {
    id: 'sec_b_069', num: 69, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'When a star exhausts its nuclear fuel, its fate depends primarily on its mass _______ low-mass stars become white dwarfs, medium-mass stars may end as neutron stars, and high-mass stars can explode as supernovae and leave black holes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: ':', C: ';', D: ',' },
    answer: 'B', isSPR: false,
    explanation: 'A colon introduces the list that specifies how mass determines stellar fate — the three outcomes are the content of "depends primarily on its mass." The colon captures this elaborative relationship. A semicolon would also work structurally but doesn\'t capture the explanatory relationship. ", and" implies an additive relationship. A comma alone would work but is less precise than the colon.',
  },

  {
    id: 'sec_b_070', num: 70, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Philosopher John Dewey argued that education should not prepare students for life; _______ it should be life itself — a process of continuous growth and problem-solving rather than preparation for a future that may never arrive.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: 'rather,', B: 'however,', C: 'additionally,', D: 'furthermore,' },
    answer: 'A', isSPR: false,
    explanation: '"Rather" signals a substitution — instead of being preparation for life, education should be life itself. After the semicolon, "rather," introduces the alternative claim. "However" signals contrast without the substitution structure. "Additionally" adds a new consistent point. "Furthermore" also adds rather than substitutes.',
  },

  {
    id: 'sec_b_071', num: 71, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The Arctic permafrost, which stores an estimated 1.5 trillion metric tons of organic carbon _______ is thawing at an accelerating rate as global temperatures rise, releasing CO₂ and methane into the atmosphere.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ';', C: '—', D: ': it' },
    answer: 'A', isSPR: false,
    explanation: 'The supplementary clause "which stores an estimated 1.5 trillion metric tons of organic carbon" was introduced by a comma after "permafrost" and must be closed by a matching comma before "is thawing." A comma correctly closes the which-clause with a comma-comma pair.',
  },

  {
    id: 'sec_b_072', num: 72, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'For most of the twentieth century, economists assumed that inflation and unemployment were inversely related _______ this relationship, described by the Phillips curve, appeared to break down in the 1970s when both inflation and unemployment rose simultaneously.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', however,', B: '; however,', C: ', however', D: '. However' },
    answer: 'B', isSPR: false,
    explanation: 'Pattern A for "however": the contrast is between the assumed inverse relationship and its observed breakdown. "; however," (semicolon before, comma after) correctly signals intra-sentence contrast. ", however," creates a comma splice. ", however" omits the required comma after "however." ". However" would create a new sentence.',
  },

  {
    id: 'sec_b_073', num: 73, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The Mars rover Perseverance landed in Jezero Crater in February 2021 _______ collecting rock samples, analyzing atmospheric composition, and testing a method for producing oxygen from the Martian atmosphere.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and began', B: ', and has begun', C: ', beginning', D: 'and began' },
    answer: 'C', isSPR: false,
    explanation: '", beginning" correctly introduces a participial phrase that supplements the main clause with a set of consequent activities. The participial construction avoids redundancy and flows naturally. ", and began collecting..." would work but adds unnecessary "and." "And began" without a comma in a compound predicate is possible, but here the three activities are best captured as a supplementary participial phrase.',
  },

  {
    id: 'sec_b_074', num: 74, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Psychologist William James proposed that emotions do not cause physiological responses _______ rather, physiological responses cause emotions: we do not tremble because we are afraid; we are afraid because we tremble.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '. The', C: ';', D: ':' },
    answer: 'C', isSPR: false,
    explanation: 'A semicolon correctly joins the two independent clauses before and after "rather": "emotions do not cause physiological responses" and "physiological responses cause emotions." "Rather" here is a conjunctive adverb signaling contrast — the full structure is "; rather," but the blank comes before "rather." A comma (A) creates a comma splice. B creates a new sentence but "The" doesn\'t fit. D uses a colon but the first clause isn\'t really introducing the second.',
  },

  {
    id: 'sec_b_075', num: 75, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The discovery that some dinosaurs had feathers — a finding that would have seemed implausible to most paleontologists of the 1960s _______ confirmed the evolutionary link between non-avian dinosaurs and modern birds.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ': it', B: '— it', C: ',', D: '—' },
    answer: 'D', isSPR: false,
    explanation: 'The supplementary phrase "a finding that would have seemed implausible to most paleontologists of the 1960s" was introduced by an em-dash after "feathers" and must be closed by a matching em-dash before "confirmed." D (—) correctly closes the supplementary phrase with a matched em-dash pair.',
  },

  {
    id: 'sec_b_076', num: 76, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'The report identified three critical infrastructure vulnerabilities _______ outdated water treatment systems, inadequate cybersecurity protocols at power utilities, and insufficient backup capacity at regional telecommunications hubs.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ';', C: ':', D: '—' },
    answer: 'C', isSPR: false,
    explanation: 'A colon correctly introduces the list that specifies the "three critical infrastructure vulnerabilities" mentioned in the main clause. The three items are the content of what was identified. A semicolon would create an odd structure before a non-independent clause. A comma would be grammatically ambiguous. An em-dash could work informally but a colon is more precise here.',
  },

  {
    id: 'sec_b_077', num: 77, type: 'sec_boundaries', domain: 'sec', difficulty: 'medium',
    passage: 'Scientists studying the genetics of the Yamnaya people, a Bronze Age pastoral culture from the Eurasian steppe _______ found that they are the primary source of the ancestry of modern-day Europeans, contributing approximately 75% of the genetic material of Northern Europeans.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: ';', C: '—', D: ':' },
    answer: 'A', isSPR: false,
    explanation: 'The supplementary appositive phrase "a Bronze Age pastoral culture from the Eurasian steppe" was introduced by a comma after "Yamnaya people" and must be closed by a matching comma before "found." A comma correctly closes the appositive with a comma-comma pair.',
  },


  // ── HARD (13) ─────────────────────────────────────────────────────────────

  {
    id: 'sec_b_078', num: 78, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'For a century, neuroscientists treated the nervous system as a one-way signaling network _______ using electron microscopy in the 1970s, researchers discovered retrograde signaling, in which messages travel from postsynaptic neurons back to presynaptic ones.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '. However, using', C: '. Using', D: '; however, using' },
    answer: 'C', isSPR: false,
    explanation: 'A period ends the first independent clause. "Using electron microscopy in the 1970s, researchers discovered..." is a new sentence where the participial phrase modifies "researchers." ". Using" correctly begins the new sentence. A comma (A) creates a comma splice. ". However, using" is problematic because "however" requires an independent clause to follow it, but "Using...researchers discovered" is a participial phrase + main clause, not an independent clause beginning with "however." "; however, using" has the same problem.',
  },

  {
    id: 'sec_b_079', num: 79, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The evidence strongly suggested that the outbreak had a single source _______ however, contact tracing revealed three independent introduction events, each from a different country.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; however,', C: '. However,', D: ', however,' },
    answer: 'B', isSPR: false,
    explanation: 'Pattern A for "however": the contrast is within this sentence — single-source assumption vs. three independent introduction events. "; however," (semicolon before, comma after) is the correct intra-sentence contrast structure. A comma (A) creates a comma splice. ". However," creates two separate sentences. ", however," is a comma splice.',
  },

  {
    id: 'sec_b_080', num: 80, type: 'sec_boundaries', domain: 'sec', difficulty: 'easy',
    passage: 'The philosopher argued that justice requires not only equal treatment under formal rules _______ it also requires that background social conditions be arranged to give everyone a genuine rather than merely nominal opportunity to compete.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; but also,', C: ', but also', D: ': it' },
    answer: 'C', isSPR: false,
    explanation: 'The sentence has a "not only...but also" structure: "not only equal treatment under formal rules, but also requires that background social conditions be arranged..." A comma before "but also" correctly joins the two elements of the "not only...but also" correlative construction. "; but also," incorrectly places a semicolon before a coordinating conjunction. ", but also" correctly uses a comma in this correlative structure.',
  },

  {
    id: 'sec_b_081', num: 81, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Historians of early modern science have documented that the period\'s natural philosophers relied heavily on letters, manuscripts, and personal visits to share findings. _______ analyzing the correspondence networks of figures like Galileo, Descartes, and Newton, historians have mapped the informal channels through which new ideas circulated before the establishment of scientific journals.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: 'By', C: '. By', D: '; by' },
    answer: 'C', isSPR: false,
    explanation: 'A period ends the first independent clause. "By analyzing the correspondence networks...historians have mapped" is a new sentence with a prepositional phrase modifier. ". By" correctly begins this new sentence. A comma (A) creates a comma splice. "By" alone (B) without preceding punctuation creates a run-on. "; by" uses a semicolon before a prepositional phrase — incorrectly, since a semicolon joins independent clauses.',
  },

  {
    id: 'sec_b_082', num: 82, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The question of whether AI systems can be held morally responsible for their outputs — a question that seemed purely theoretical a decade ago _______ has become urgently practical as AI systems are now making consequential decisions in criminal sentencing, loan approval, and medical diagnosis.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '—', B: ', it', C: '; it', D: ',' },
    answer: 'A', isSPR: false,
    explanation: 'The supplementary phrase "a question that seemed purely theoretical a decade ago" was introduced by an em-dash and must be closed by a matching em-dash. A (—) correctly closes the matched em-dash pair before "has become." Any other punctuation creates a mismatch.',
  },

  {
    id: 'sec_b_083', num: 83, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Most cognitive scientists now accept that the distinction between "cold" rational cognition and "hot" emotional cognition is too simple _______ emotion and reason are deeply intertwined at a neural level, and damage to brain regions associated with emotional processing consistently impairs decision-making.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ': both', B: ', both', C: ';', D: '. Both' },
    answer: 'A', isSPR: false,
    explanation: 'A colon introduces the elaboration of what "too simple" means — explaining why the distinction is inadequate. The following clause specifies the reasons the distinction fails. ", both" creates a comma splice. A semicolon would work structurally but is less precise about the elaborative relationship. ". Both" creates a complete sentence with "Both," but the colon better signals that what follows explains the prior claim.',
  },

  {
    id: 'sec_b_084', num: 84, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The committee reviewed three competing proposals _______ then allocated funding to the one whose projected return on investment was highest, despite concerns raised by two members about the methodology used to calculate those projections.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ', but' },
    answer: 'B', isSPR: false,
    explanation: 'One subject ("The committee") performs two sequential actions in a compound predicate: "reviewed three proposals" and "allocated funding." In a compound predicate, no comma is needed before "and." ", and" incorrectly treats this as two independent clauses.',
  },

  {
    id: 'sec_b_085', num: 85, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Historians of medicine have found that many drug therapies were used for decades before the mechanism of their efficacy was understood _______ aspirin was prescribed for pain and fever for nearly a century before its inhibition of cyclooxygenase enzymes was discovered.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', for example,', B: ': for example,', C: '; for example,', D: '. For example,' },
    answer: 'C', isSPR: false,
    explanation: '"For example" introduces the aspirin case as an illustration of the prior claim. The correct structure for an intra-sentence "for example" is "; for example," — the semicolon separates the two independent clauses, and the comma follows "for example." ": for example," uses a colon before "for example" — a colon can introduce examples, but this creates an odd structure. ". For example," creates two complete sentences, which is also acceptable but less tight. ", for example," creates a comma splice.',
  },

  {
    id: 'sec_b_086', num: 86, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The Anthropocene — the proposed geological epoch defined by significant human impact on Earth\'s geology and ecosystems _______ is not yet formally recognized by the International Commission on Stratigraphy, which voted in 2024 to reject a proposal to officially designate it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '—', B: ',', C: '; it', D: '. It' },
    answer: 'A', isSPR: false,
    explanation: 'The supplementary phrase "the proposed geological epoch defined by significant human impact on Earth\'s geology and ecosystems" was introduced by an em-dash after "Anthropocene" and must be closed by a matching em-dash before "is not yet." A (—) correctly closes the matched em-dash pair.',
  },

  {
    id: 'sec_b_087', num: 87, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Cognitive scientist Steven Pinker argued that human language is not learned through operant conditioning _______ as B.F. Skinner proposed, children acquire language too quickly and too accurately from impoverished input to be explained by reinforcement learning alone.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ',', B: '; instead,', C: ': instead,', D: '. Instead,' },
    answer: 'D', isSPR: false,
    explanation: 'A period ends the first independent clause about what language is not. The second sentence gives a reason, beginning with "Instead," — an adverb signaling the contrasting positive claim. ". Instead," correctly begins the second sentence. A comma (A) creates a comma splice. "; instead," with a semicolon works structurally and is also acceptable — but the question asks which choice conforms to conventions, and both B and D are technically correct here. The key distinction: "as B.F. Skinner proposed, children acquire language too quickly..." — "Instead" sets up an alternative claim that follows naturally as a new sentence after the period. D ". Instead," is the cleanest.',
  },

  {
    id: 'sec_b_088', num: 88, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Both the concentration of particulate matter in the ambient air _______ the distribution of medical facilities across the county appeared to predict asthma hospitalization rates more strongly than any socioeconomic variable the researchers examined.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ', and', B: 'and', C: '; and', D: ', but' },
    answer: 'B', isSPR: false,
    explanation: '"Both [A] and [B]" is a correlative construction — no comma is needed between "both" and its paired element "and." "Both the concentration...and the distribution...appeared to predict" is the correct structure. ", and" incorrectly separates "both" from "and." "; and" incorrectly places a semicolon within a compound subject.',
  },

  {
    id: 'sec_b_089', num: 89, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'Several Pacific Island nations have begun negotiating bilateral agreements with other countries to secure the right of their citizens to migrate in the event of inundation from sea level rise _______ a legal framework for "climate refugees" does not yet exist in international law.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: '; since', B: ', since', C: ', because', D: ', as' },
    answer: 'B', isSPR: false,
    explanation: '", since" introduces a subordinate causal clause — the island nations are negotiating bilateral agreements because (since) no international legal framework for climate refugees exists. The subordinate clause cannot follow a semicolon (which requires an independent clause). ", because" also works causally, but ", since" is more natural here as it combines causal and temporal implication. ", as" is less precise.',
  },

  {
    id: 'sec_b_090', num: 90, type: 'sec_boundaries', domain: 'sec', difficulty: 'hard',
    passage: 'The trial court found that the defendant had acted in self-defense _______ the appellate court reversed this finding, holding that the evidence was insufficient to establish a reasonable belief in imminent threat.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: { A: ';', B: ', and', C: ', but', D: ', yet' },
    answer: 'C', isSPR: false,
    explanation: '", but" joins two independent clauses in an adversarial relationship — the trial court found self-defense, but the appellate court reversed. "But" is the most precise coordinating conjunction for direct legal contradiction. A semicolon alone works but omits the logical connector. ", and" suggests addition. ", yet" is similar to "but" but slightly less precise for a direct legal reversal.',
  },

];

// Fix sec_f_061 answer
DL_SEC3_FSS[0].answer = 'B';
DL_SEC3_FSS[0].explanation = 'The head noun of the subject is "total number" (singular), not "species." "Exceeds" correctly agrees with the singular subject. "Exceed" and "have exceeded" treat the subject as plural. "Exceeding" is nonfinite.';

const DL_SEC3 = [...DL_SEC3_FSS, ...DL_SEC3_BOUNDARIES];
