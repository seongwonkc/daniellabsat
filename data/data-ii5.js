'use strict';

// data-ii5.js — Information & Ideas, 30 questions
// Central Ideas ×5, CoE-Text ×6, CoE-Quantitative ×4, Logical Completion ×8, Supporting Evidence ×7
// IDs: ii_c_121–ii_c_150  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_II5 = [

  // ── Central Ideas (5) ─────────────────────────────────────────────────────

  {
    id: 'ii_c_151', num: 151, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The monarch butterfly undertakes one of the most remarkable migrations in the animal kingdom, traveling up to 4,500 kilometers from the northeastern United States and Canada to overwintering sites in the mountain forests of central Mexico. What makes this migration especially remarkable is that no individual butterfly completes a round trip. The butterflies that fly south in autumn are the great-grandchildren of those that flew north the previous spring — yet they navigate to the same overwintering forests their ancestors used, without any learned guidance from those ancestors.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Monarch butterflies migrate longer distances than any other insect species.',
      B: 'The monarch migration is remarkable because butterflies navigate to ancestral overwintering sites across multiple generations without learned guidance.',
      C: 'Monarch butterflies that migrate south are always the direct offspring of butterflies that migrated north.',
      D: 'Mountain forests in central Mexico provide optimal overwintering conditions for monarch butterflies.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B captures the passage\'s central claim: not just that monarchs migrate far, but that successive generations — great-grandchildren — reach the same ancestral destination without any individual having made the trip or learned from one who did. A makes a comparative claim about distance that the passage does not make. C misstates the generational gap — it\'s great-grandchildren, not offspring. D identifies a supporting detail, not the main idea.',
  },

  {
    id: 'ii_c_152', num: 152, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Probiotics — live microorganisms consumed for purported health benefits — are a multi-billion-dollar global market. However, scientific evidence for most probiotic health claims remains weak. The vast majority of probiotics sold commercially have not been tested in rigorous clinical trials for the specific conditions they claim to address. Moreover, the strains in commercial products often differ substantially from those used in published studies, making it difficult to generalize from research findings to the products consumers actually purchase.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Probiotics are ineffective and should not be consumed.',
      B: 'Despite their commercial success, most probiotics lack rigorous clinical evidence for their claimed benefits, and a gap exists between research strains and commercial products.',
      C: 'Probiotics have been proven effective for treating most gastrointestinal conditions.',
      D: 'The probiotic market is growing because consumers prefer natural health products.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures both the commercial success and the two-part evidentiary problem: lack of rigorous trials and mismatch between research and commercial strains. A overstates — the passage says evidence is weak, not that probiotics are entirely ineffective. C directly contradicts the passage. D introduces consumer preference as an explanation for market growth — not addressed in the passage.',
  },

  {
    id: 'ii_c_153', num: 153, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Historians of science have long noted that scientific revolutions tend to happen not when existing theories fail outright but when anomalies accumulate to the point where a new framework becomes preferable. Thomas Kuhn described this as a "paradigm shift": the old framework does not simply collapse under the weight of contrary evidence, because scientists can always modify auxiliary assumptions to accommodate anomalies. Change occurs when a community\'s tolerance for these patchwork accommodations is exhausted and a new paradigm offers a cleaner explanatory framework — even before the new paradigm has been fully confirmed.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Scientific paradigms shift because old theories are definitively proven false by new experiments.',
      B: 'According to Kuhn, paradigm shifts occur not when old frameworks fail outright but when accumulated anomalies exhaust a community\'s tolerance for patchwork fixes and a cleaner alternative emerges.',
      C: 'Scientists are reluctant to change their theories because they have invested too much in them personally.',
      D: 'Kuhn argued that all scientific knowledge is ultimately subjective and cannot be verified.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures Kuhn\'s mechanism: not outright failure but accumulation of anomalies, auxiliary adjustments that become unsatisfying, and a new paradigm offering cleaner explanation before full confirmation. A says old theories are definitively proven false — Kuhn explicitly argues against this. C attributes the resistance to personal investment — Kuhn\'s explanation is structural (auxiliary assumptions can always accommodate anomalies). D attributes radical subjectivism to Kuhn — the passage describes a social process of community judgment, not a claim about subjectivity.',
  },

  {
    id: 'ii_c_154', num: 154, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The following text is from John Muir\'s 1901 essay "The American Forests."\n\nThe forests of America, however slighted by man, must have been a great delight to God; for they were the best he ever planted. The whole continent was a garden, and from the beginning it seemed to be favored above all the other wild parks and gardens of the world. To prepared eyes it is still a glorious vision of enchantment, hardly less than it was when it first flashed on the gaze of the immigrants who followed Columbus through the woods of Cuba, and beheld for the first time groves of palms.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'American forests have been poorly managed, and urgent government action is needed to protect them.',
      B: 'America\'s forests represent a divinely favored natural glory that still retains its power for those with eyes prepared to appreciate it.',
      C: 'The forests encountered by Columbus\'s crew in Cuba were superior to those found elsewhere in the Americas.',
      D: 'American forests are valuable primarily for their economic potential and natural resources.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Muir\'s main idea is that American forests represent extraordinary natural beauty — divinely favored above all others — and that this glory is still visible to prepared eyes. B captures both the extravagant praise and the claim of continuing visibility. A focuses on management and government action — the passage does not make policy prescriptions. C claims Cuba\'s forests are superior — the passage uses Cuba as a first encounter point, not a comparison of quality. D attributes economic value — Muir is explicitly arguing for aesthetic and spiritual value.',
  },

  {
    id: 'ii_c_155', num: 155, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Anthropologists studying gift economies have noted that in many pre-market societies, gift exchange served functions that went well beyond simple generosity. Marcel Mauss argued that gifts are never entirely free: they carry obligations of acceptance and reciprocity that create lasting bonds between parties. Refusing a gift is an act of social rupture; accepting one creates a debt that demands repayment, maintaining a relationship of mutual obligation. What appears to be a spontaneous gesture of generosity is, from this perspective, part of a structured system of social circulation that reproduces hierarchy, alliance, and community.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Pre-market societies were more generous than modern market economies because gift-giving was common.',
      B: 'According to Mauss, gifts in pre-market societies were embedded in a structured system of reciprocal obligation that reproduced social bonds, hierarchy, and alliance rather than representing free generosity.',
      C: 'Gift exchange in pre-market societies was primarily used to prevent conflict between rival groups.',
      D: 'Marcel Mauss argued that gift economies are economically more efficient than market economies.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures Mauss\'s argument: gifts appear generous but are embedded in a structured system of obligation, reciprocity, and social reproduction. A says pre-market societies were more generous — Mauss\'s argument is that gifts are not simply generous. C says gifts primarily prevented conflict — the passage mentions alliance among other functions but does not single out conflict prevention. D claims Mauss argued for economic efficiency — he is analyzing social function, not making comparative economic claims.',
  },


  // ── CoE-Text (6) ─────────────────────────────────────────────────────────

  {
    id: 'ii_c_156', num: 156, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying the health effects of urban green space found that residents of neighborhoods with more parks, trees, and green areas reported lower levels of stress, anxiety, and depression than residents of comparable neighborhoods with less green space, even after controlling for income and other socioeconomic factors. The researchers concluded that access to urban green space has measurable mental health benefits independent of socioeconomic status.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the researchers\' conclusion?',
    choices: {
      A: 'Residents of wealthier neighborhoods reported lower stress regardless of the amount of green space present.',
      B: 'A longitudinal study found that residents who moved to greener neighborhoods showed reductions in anxiety and depression, while those who moved to less green neighborhoods showed increases.',
      C: 'Urban parks are used more frequently by younger residents than by older residents.',
      D: 'Municipalities with more green space tend to have higher property values and lower crime rates.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B directly supports the causal claim by showing within-person change tracking green space change — residents who gained green space improved; those who lost it worsened. This strengthens the case that green space itself drives mental health outcomes. A undermines the conclusion by suggesting wealth, not green space, drives outcomes. C is about usage patterns, not mental health. D links green space to property values and crime, not directly to mental health benefits.',
  },

  {
    id: 'ii_c_157', num: 157, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Linguists studying code-switching — the practice of alternating between two languages within a single conversation — have challenged the view that code-switching reflects linguistic deficiency or confusion. They argue instead that code-switching is a skilled, rule-governed practice that bilingual speakers use strategically: to signal group membership, emphasize a point, fill a lexical gap, or shift the emotional register of a conversation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the linguists\' argument?',
    choices: {
      A: 'Monolingual speakers produce fewer grammatical errors per sentence than bilingual speakers who code-switch.',
      B: 'Bilingual speakers who code-switch most frequently score highest on tests of grammatical competence in both of their languages.',
      C: 'Children exposed to two languages simultaneously take longer to reach full fluency in each than children raised with one language.',
      D: 'Code-switching occurs most often in informal settings where speakers feel relaxed and comfortable.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B directly supports the claim that code-switching reflects skill rather than deficiency: the most frequent code-switchers are the most grammatically competent — the opposite of what a deficiency account would predict. A undermines the linguists\' argument by showing monolingual speakers make fewer errors. C about slower acquisition timing does not bear on whether code-switching reflects skill. D describes a contextual pattern but does not demonstrate skill or rule-governance.',
  },

  {
    id: 'ii_c_158', num: 158, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Nutritional epidemiologist David Katz has argued that the decades-long focus on reducing dietary fat was misguided because it led food manufacturers to replace fats with refined carbohydrates and added sugars — which, Katz argues, are more harmful to metabolic health than the fats they replaced. He contends that the obesity and type 2 diabetes epidemics accelerated precisely during the period when low-fat dietary advice was most widely followed.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly weaken Katz\'s argument?',
    choices: {
      A: 'Countries that adopted low-fat dietary guidelines in the 1980s experienced greater increases in obesity than countries that did not.',
      B: 'Studies of populations whose diets are naturally high in healthy fats — olive oil, nuts, fish — show low rates of cardiovascular disease and type 2 diabetes.',
      C: 'The rise in obesity rates preceded the widespread adoption of low-fat dietary guidelines by over a decade.',
      D: 'Food manufacturers have reduced added sugar content in many products following consumer pressure.',
    },
    answer: 'C', isSPR: false,
    explanation: 'Katz argues that the low-fat advice caused the obesity epidemic by driving manufacturers toward sugar and refined carbs. If obesity rates rose before low-fat guidelines were adopted, this severs the causal link between the guidelines and the epidemic. C directly weakens his argument. A supports his argument by showing parallel trends. B supports his general point that healthy fats are not harmful. D addresses manufacturer behavior but not the timeline of the epidemic.',
  },

  {
    id: 'ii_c_159', num: 159, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Environmental historians studying the collapse of the Norse Greenland colonies argue that the settlers\' disappearance in the early 15th century resulted not primarily from climate cooling during the Little Ice Age but from cultural inflexibility: the Norse maintained European agricultural practices and livestock — cattle, sheep, and pigs — despite living alongside Inuit populations who had successfully adapted to Arctic conditions over centuries through hunting marine mammals. The Norse apparently never adopted harpoon technology or marine mammal hunting, even as conditions deteriorated.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the historians\' argument?',
    choices: {
      A: 'Pollen and ice core records show that temperatures in Greenland declined significantly in the early 15th century.',
      B: 'Archaeological evidence shows that the Norse colonies maintained large amounts of European trade goods while Inuit middens from the same period contain abundant marine mammal bones.',
      C: 'The Norse in Greenland converted to Christianity several decades before the colony\'s disappearance.',
      D: 'Climate models suggest that the Little Ice Age reduced agricultural yields across all of Northern Europe.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B provides archaeological evidence of exactly the cultural inflexibility the historians describe: the Norse clung to European goods while the Inuit around them were successfully hunting marine mammals. This supports the claim that failure to adapt, not climate alone, caused the collapse. A and D support the climate alternative explanation — the one the historians are arguing against. C describes religious conversion — not relevant to the adaptive behavior argument.',
  },

  {
    id: 'ii_c_160', num: 160, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Sociologist Randall Collins argues that emotional energy — the confidence, enthusiasm, and sense of belonging generated in face-to-face interaction rituals — is the fundamental currency of social life. People seek out interactions that generate emotional energy and avoid those that deplete it. Over time, this creates stratification: those who command high emotional energy in interactions — generating deference, attention, and solidarity from others — accumulate social power, while those who are consistently drained by interactions occupy lower positions in informal hierarchies.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support Collins\'s theory?',
    choices: {
      A: 'People with high social status report feeling energized after most social interactions, while people with lower social status report feeling drained.',
      B: 'Economic inequality has increased in most developed countries over the past four decades.',
      C: 'Individuals who spend more time in face-to-face social interaction tend to live longer and report higher life satisfaction.',
      D: 'Social media use is associated with lower levels of in-person social interaction.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A directly supports Collins\'s theory by showing the predicted pattern: high-status individuals (who command deference and solidarity) feel energized, while low-status individuals (who are depleted) feel drained. This is precisely the stratification mechanism Collins describes. B addresses economic inequality but not emotional energy dynamics. C shows health benefits of interaction but not differential effects by status or emotional energy. D addresses social media displacement but not the emotional energy stratification claim.',
  },

  {
    id: 'ii_c_161', num: 161, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Historian of science Steven Shapin has argued that the development of the modern laboratory was as much a social and spatial achievement as a technical one. Before the 17th century, natural philosophical inquiry was conducted in domestic settings — scholars\' studies, gardens, private workshops — whose access was controlled by the investigator. The emergence of the dedicated scientific laboratory created a new kind of credentialed public space where witnessed, repeatable experiments could establish knowledge claims with a kind of social authority unavailable to private investigation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support Shapin\'s argument?',
    choices: {
      A: 'Early laboratories were equipped with more sophisticated instruments than investigators\' private studies.',
      B: 'Natural philosophers whose claims were witnessed by credentialed observers in dedicated spaces were cited more frequently and accepted more widely than those whose work was conducted in private.',
      C: 'Robert Boyle\'s air pump experiments were contested by critics who questioned his results.',
      D: 'The cost of laboratory construction limited access to wealthy institutions and individuals.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Shapin\'s argument is that the laboratory\'s social space — witnessed, repeatable, credentialed — conferred a special kind of knowledge authority. B directly tests this: if claims produced in witnessed laboratory settings were more widely accepted than private claims, that supports the social authority argument. A is about instrument quality — technical, not social/spatial. C shows contestation of claims — this is about the social process of knowledge-making but doesn\'t directly support the laboratory-as-authorizing-space argument. D addresses access and cost — related to the social structure of science but not the authority-conferring function.',
  },


  // ── CoE-Quantitative (4) ──────────────────────────────────────────────────

  {
    id: 'ii_c_162', num: 162, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A team of conservation biologists studied the effect of a new wildlife corridor connecting two previously isolated forest fragments on the genetic diversity of a local salamander population. Before the corridor was established, populations in each fragment showed signs of inbreeding. After five years of corridor access, the researchers measured genetic diversity in each population.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Salamander Genetic Diversity (Heterozygosity Index)\n\nLocation          | Before Corridor | After 5 Years\n------------------|-----------------|---------------\nFragment A        | 0.31            | 0.47\nFragment B        | 0.28            | 0.44\nCombined baseline | 0.30 (avg)      | 0.46 (avg)',
    question: 'The researchers concluded that the wildlife corridor increased genetic diversity in both salamander populations. Which data from the table most directly support this conclusion?',
    choices: {
      A: 'The heterozygosity index in Fragment A was higher than in Fragment B both before and after the corridor.',
      B: 'Both Fragment A and Fragment B showed higher heterozygosity indices after five years of corridor access than before, increasing from 0.31 to 0.47 and from 0.28 to 0.44 respectively.',
      C: 'The average combined heterozygosity index was 0.30 before the corridor was established.',
      D: 'Fragment A had a higher baseline heterozygosity than Fragment B.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B cites the specific before-and-after values for both fragments showing increases — exactly the data pattern that would support the conclusion that the corridor increased genetic diversity in both populations. A describes the relative ranking of fragments, not the increase over time. C only notes the baseline, not the change. D describes between-fragment comparison before the corridor — not the temporal change that supports the conclusion.',
  },

  {
    id: 'ii_c_163', num: 163, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Researchers investigating the relationship between social media use and academic performance surveyed 800 high school students about their daily social media use and collected their GPA data. They hypothesized that students who spent more time on social media would have lower GPAs.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Daily Social Media Use and Mean GPA\n\nDaily Social Media Use | Mean GPA | n\n-----------------------|----------|-----\nLess than 1 hour       | 3.62     | 180\n1–2 hours              | 3.51     | 240\n2–3 hours              | 3.44     | 210\nMore than 3 hours      | 3.31     | 170',
    question: 'Which choice most effectively uses data from the table to support the researchers\' hypothesis?',
    choices: {
      A: 'Students who used social media for 1–2 hours had a mean GPA of 3.51, which is the most common usage group.',
      B: 'Mean GPA declined consistently across usage groups, from 3.62 for students using social media less than one hour daily to 3.31 for those using it more than three hours.',
      C: 'The group using social media less than one hour had the highest GPA at 3.62.',
      D: 'Students who used social media more than three hours daily were the smallest group, with 170 participants.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B describes the full declining trend across all four groups — a consistent negative relationship between usage and GPA that directly supports the hypothesis. A notes a single group\'s GPA and sample size — not a pattern that supports the hypothesis. C identifies only the highest-GPA group — a single data point, not a pattern. D notes a sample size — irrelevant to the hypothesis about the relationship between usage and GPA.',
  },

  {
    id: 'ii_c_164', num: 164, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'A public health researcher analyzed emergency department visits for alcohol-related injuries in a city before and after the introduction of a 10 PM alcohol sales restriction on weekends. She predicted that the restriction would reduce late-night alcohol-related injuries.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Weekend Alcohol-Related Emergency Department Visits\n\nTime Period        | Before Policy | After Policy | % Change\n-------------------|---------------|--------------|----------\n6 PM – 9:59 PM    | 142           | 139          | −2.1%\n10 PM – 1:59 AM   | 218           | 161          | −26.1%\n2 AM – 5:59 AM    | 94            | 87           | −7.4%',
    question: 'Which choice most effectively uses data from the table to support the researcher\'s prediction?',
    choices: {
      A: 'Total weekend emergency visits decreased after the policy was introduced.',
      B: 'The largest percentage decline occurred in the 10 PM–1:59 AM period — the hours most directly affected by the restriction — falling 26.1% compared to declines of 2.1% and 7.4% in adjacent time periods.',
      C: 'The 6 PM–9:59 PM period saw almost no change, declining only 2.1%.',
      D: 'Emergency visits in all three time periods decreased after the policy was introduced.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B directly and precisely supports the prediction by identifying the sharpest decline in the period targeted by the restriction (−26.1%) and contextualizing it against the much smaller declines in non-targeted periods. This pattern shows the policy had its strongest effect exactly where expected. A claims a total decline — the passage asks about supporting the specific prediction about late-night injuries. C notes the unchanged early period — this is supporting context but does not directly support the prediction. D notes all periods declined — correct but does not explain why the specific late-night period matters.',
  },

  {
    id: 'ii_c_165', num: 165, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'hard',
    passage: 'An economist studying the effects of minimum wage increases on employment examined data from pairs of neighboring counties straddling state borders — one county subject to a minimum wage increase, one that was not — to control for local economic conditions. She compared employment trends in the food service industry before and after the wage increases.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Food Service Employment Change: Border County Pairs\n\nState Pair          | Treated County | Control County | Difference\n--------------------|----------------|----------------|------------\nPair 1 (2018)       | +1.8%          | +1.6%          | +0.2 pp\nPair 2 (2019)       | +2.1%          | +2.4%          | −0.3 pp\nPair 3 (2019)       | +1.3%          | +1.1%          | +0.2 pp\nPair 4 (2020)       | −3.2%          | −3.5%          | +0.3 pp\nAverage difference  |                |                | +0.1 pp',
    question: 'The economist concluded that the minimum wage increases had no meaningful effect on food service employment. Which choice most effectively uses data from the table to support this conclusion?',
    choices: {
      A: 'Employment declined in both treated and control counties in Pair 4.',
      B: 'The average employment difference between treated and control counties across all pairs was only +0.1 percentage points, and in one pair the treated county actually had lower growth.',
      C: 'Treated counties showed positive employment growth in three of the four pairs.',
      D: 'Control counties experienced higher employment growth than treated counties in Pair 2.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B cites the evidence that most directly supports "no meaningful effect": the average difference is negligible (+0.1 pp), and even the direction is inconsistent (one pair shows treated county underperforming). This pattern of near-zero and mixed differences supports the null conclusion. A notes the Pair 4 decline in both groups — this describes a general economic effect that affected both, not the minimum wage effect specifically. C claims positive growth in treated counties — absolute growth is not the relevant measure; the comparison to controls is. D notes one pair where the control outperformed — a single data point that doesn\'t capture the overall pattern.',
  },


  // ── Logical Completion (8) ────────────────────────────────────────────────

  {
    id: 'ii_c_166', num: 166, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The Venus flytrap captures insects by snapping its leaf lobes shut when prey touches trigger hairs on the inner surface. To avoid wasting energy closing on raindrops or debris, the plant requires two trigger-hair contacts within approximately 20 seconds to spring the trap. This suggests that the Venus flytrap has evolved a primitive form of _______ — the ability to register a first stimulus and respond differently when a second follows within a specific time window.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'photosynthesis', B: 'short-term memory', C: 'aggressive mimicry', D: 'mutualism' },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes a two-stimulus threshold with a time window — registering the first contact and responding differently to the second within 20 seconds. This is structurally analogous to short-term memory: retaining information about a prior event and using it to modulate a subsequent response. B correctly names this. A ("photosynthesis") is plant energy capture from light — unrelated. C ("aggressive mimicry") describes predators mimicking harmless species. D ("mutualism") describes mutually beneficial interspecies relationships.',
  },

  {
    id: 'ii_c_167', num: 167, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Archaeologists studying the spread of agriculture in Europe have found that it arrived not through local hunter-gatherer populations gradually adopting farming practices, but through the migration of farmers from Anatolia who brought domesticated crops, livestock, and a distinct genetic signature. Genetic analysis of ancient skeletal remains shows a rapid replacement of hunter-gatherer ancestry in many regions. This evidence supports the view that the transition to agriculture in Europe was primarily a _______ rather than a cultural diffusion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'technological revolution', B: 'demographic replacement', C: 'religious transformation', D: 'linguistic divergence' },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes migration of Anatolian farmers who brought their practices and genes, with rapid replacement of hunter-gatherer ancestry — a population replacement. B correctly names "demographic replacement" as what the evidence supports, contrasted with "cultural diffusion" (the alternative model where locals gradually adopted farming). A ("technological revolution") doesn\'t capture the population movement. C ("religious transformation") has no basis in the passage. D ("linguistic divergence") is about language change, not population dynamics.',
  },

  {
    id: 'ii_c_168', num: 168, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Psychologists studying the "spotlight effect" have found that people consistently overestimate how much attention others pay to their appearance and behavior. In experiments, participants who wore embarrassing T-shirts estimated that a much higher percentage of observers had noticed them than actually had. This systematic overestimation occurs because individuals use their own heightened awareness of themselves as a proxy for others\' attention — a form of egocentric bias. The spotlight effect suggests that people generally _______ how much their actions and appearance are noticed by those around them.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'accurately predict', B: 'underestimate', C: 'overestimate', D: 'are indifferent to' },
    answer: 'C', isSPR: false,
    explanation: 'The spotlight effect is defined in the passage as consistent overestimation of others\' attention. The completion follows directly: people overestimate how much their actions are noticed. C is correct. B ("underestimate") is the opposite. A ("accurately predict") contradicts the systematic error described. D ("are indifferent to") is also inconsistent — the participants are clearly not indifferent, which is the root of the bias.',
  },

  {
    id: 'ii_c_169', num: 169, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Evolutionary biologists have found that sexual selection — in which individuals compete for mates or choose among potential partners — can drive the evolution of traits that reduce survival fitness. Male peacocks\' enormous tails, for example, make them more conspicuous to predators, harder to escape from them, and more energy-costly to grow. Yet peahens prefer males with larger, more elaborate tails. This creates a tension between _______ and sexual selection — between traits that help an organism survive and those that help it reproduce.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'genetic drift', B: 'natural selection', C: 'artificial selection', D: 'genetic mutation' },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes a tension between survival-reducing traits and reproductive advantage — the classic conflict between natural selection (which would eliminate costly survival-reducing traits) and sexual selection (which favors them for mating). B correctly names natural selection as the opposing force. A ("genetic drift") is random change in allele frequencies — not a directional survival-promoting force. C ("artificial selection") is human-directed breeding — not applicable here. D ("genetic mutation") is a source of variation, not a competing selective pressure.',
  },

  {
    id: 'ii_c_170', num: 170, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Medieval Islamic scholars preserved and expanded upon ancient Greek mathematical and scientific texts during the European Dark Ages, translating works by Aristotle, Ptolemy, and Galen into Arabic, adding commentary and corrections, and conducting original research in algebra, optics, and medicine. When these texts were translated back into Latin in the 12th and 13th centuries, they sparked the intellectual revival that preceded the European Renaissance. This suggests that the Islamic scholarly tradition served as a _______ between the ancient world and early modern Europe.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'barrier', B: 'competitor', C: 'bridge', D: 'mirror' },
    answer: 'C', isSPR: false,
    explanation: '"Bridge" most logically names the intermediary function described: the Islamic tradition received ancient knowledge, preserved and expanded it, and transmitted it forward to early modern Europe. C correctly identifies this as a bridge between eras. A ("barrier") implies obstruction — the opposite of the transmissive function described. B ("competitor") implies rivalry — the Islamic tradition is described as a transmitter, not a rival. D ("mirror") implies reflection rather than transmission between time periods.',
  },

  {
    id: 'ii_c_171', num: 171, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Behavioral economists studying retirement savings decisions have found that employees default to low or zero contribution rates when they must actively choose to enroll in retirement savings plans, but default to high contribution rates when they must actively choose to opt out. Because most employees never change defaults — the "status quo bias" — the design of the default option effectively determines most people\'s savings behavior. This finding suggests that the architecture of choice environments can _______ without restricting any individual\'s freedom to choose differently.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'eliminate individual differences in financial literacy',
      B: 'produce outcomes equivalent to mandatory savings requirements',
      C: 'substantially shape behavior at a population level',
      D: 'remove the need for financial advisors in retirement planning',
    },
    answer: 'C', isSPR: false,
    explanation: 'The passage establishes that default design determines most people\'s behavior because of status quo bias — without restricting anyone\'s freedom to opt out. The logical completion describes what this means: choice architecture can substantially shape behavior at scale while preserving individual choice. C correctly captures this. A attributes outcomes to financial literacy changes — the passage is about choice architecture, not literacy. B says outcomes equivalent to mandatory requirements — an overstatement; defaults preserve the option to opt out. D removes financial advisors — not implied by the passage.',
  },

  {
    id: 'ii_c_172', num: 172, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Historians studying the development of intellectual property law in the 19th century have found that early copyright protections were not primarily designed to reward authors for creative work but to benefit publishers and booksellers who wanted to secure exclusive rights to profitable titles. The interests of authors were largely incidental; what mattered economically and politically was the commercial value of print runs. This history suggests that the moral justification for copyright that became dominant in the 20th century — that authors have a natural right to the fruits of their intellectual labor — was a _______ rather than the original rationale for the law.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'constitutional mandate derived from democratic principles',
      B: 'later rationalization imposed on a system built for commercial interests',
      C: 'successful legal reform that overrode the original publisher-centered framework',
      D: 'philosophical principle that courts have consistently applied since the 18th century' ,
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage establishes that copyright was originally designed for publishers\' commercial interests, not authors\' natural rights. The author-rights justification came later (20th century). The logical completion identifies it as a later rationalization — a moral narrative applied after the fact to a commercially designed system. B correctly names this. A claims a constitutional mandate — the passage says nothing about constitutional origins. C says it was a successful reform overriding the old framework — the passage says nothing about one framework replacing the other; it notes the moral justification became "dominant." D says courts consistently applied it since the 18th century — the passage says it became dominant in the 20th century.',
  },

  {
    id: 'ii_c_173', num: 173, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Researchers studying the "replication crisis" in psychology found that many classic findings — including some widely cited in textbooks — failed to replicate when tested by independent research teams using larger samples and pre-registered methods. The researchers identified several methodological practices that contributed to non-replication: small sample sizes, undisclosed analysis flexibility, publication bias toward positive results, and selective reporting of outcomes. These practices can generate a literature that _______ the robustness of effects in the underlying population.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'accurately represents',
      B: 'deliberately mischaracterizes',
      C: 'systematically overstates',
      D: 'partially corrects for',
    },
    answer: 'C', isSPR: false,
    explanation: 'All the methodological problems listed — small samples, analysis flexibility, publication bias toward positives, selective outcome reporting — push in the same direction: inflating apparent effect sizes and producing false positives. The result is a literature that overstates how robust effects actually are. C correctly names this. A ("accurately represents") contradicts the whole argument about why findings fail to replicate. B ("deliberately mischaracterizes") implies intent — the passage describes methodological practices, not deliberate fraud. D ("partially corrects for") implies the literature reduces bias — the opposite is true.',
  },


  // ── Supporting Evidence (7) ───────────────────────────────────────────────

  {
    id: 'ii_c_174', num: 174, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The following text is from Charlotte Brontë\'s 1847 novel Jane Eyre.\n\nDo you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! I have as much soul as you, — and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'The student claims that Jane Eyre challenges the social assumptions of her time by asserting her spiritual and emotional equality with Mr. Rochester despite her social disadvantages. Which quotation from the text best supports this claim?',
    choices: {
      A: '"if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me"',
      B: '"Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!"',
      C: '"I have as much soul as you, — and full as much heart!"',
      D: '"it is now for me to leave you"',
    },
    answer: 'C', isSPR: false,
    explanation: 'C is the most direct assertion of equality — "I have as much soul as you, and full as much heart" — which squarely addresses the claim about spiritual and emotional equality despite social disadvantage. B is the lead-up question and denial but doesn\'t state equality as directly. A introduces a conditional speculation about hypothetical wealth and beauty, which actually shifts the argument away from equality to a transactional register. D is a partial phrase without context for supporting the claim.',
  },

  {
    id: 'ii_c_175', num: 175, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying long-term ecological changes in the Chesapeake Bay have documented significant declines in water clarity over the past century. The primary driver of this change is the proliferation of phytoplankton — microscopic algae — fueled by nitrogen and phosphorus runoff from agriculture and urban development. Dense phytoplankton blooms block sunlight from reaching underwater grasses (submerged aquatic vegetation, or SAV), which historically served as critical habitat for juvenile crabs, fish, and waterfowl.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that agricultural and urban runoff has indirectly harmed wildlife habitat in the Chesapeake Bay. Which detail from the text best supports this claim?',
    choices: {
      A: 'Water clarity in the Chesapeake Bay has declined significantly over the past century.',
      B: 'Phytoplankton are microscopic algae that proliferate when nitrogen and phosphorus are available.',
      C: 'Nitrogen and phosphorus runoff fuels phytoplankton blooms that block sunlight from reaching submerged aquatic vegetation, which is critical habitat for juvenile crabs, fish, and waterfowl.',
      D: 'Submerged aquatic vegetation has historically served as habitat for juvenile crabs, fish, and waterfowl.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C is the only choice that traces the full causal chain from runoff to wildlife habitat: runoff → phytoplankton → blocked sunlight → SAV destruction → loss of critical habitat. This directly supports "agricultural and urban runoff indirectly harmed wildlife habitat." A notes a symptom (water clarity) without connecting it to habitat. B defines phytoplankton without connecting to habitat loss. D describes SAV as habitat but doesn\'t connect it to runoff.',
  },

  {
    id: 'ii_c_176', num: 176, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The following text is from W.E.B. Du Bois\'s 1903 essay "Of the Passing of the First-Born" in The Souls of Black Folk.\n\nWell sped, my boy, before the world had dubbed your ambition insolence, had held your ideals unattainable, had schooled your loves and longings in shame and blame... Sleep, then, child, — sleep till I sleep and waken to a baby voice and the ceaseless patter of little feet — above the Veil.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that Du Bois expresses grief over his son\'s death that is simultaneously personal and deeply shaped by racial injustice. Which quotation from the text best supports this claim?',
    choices: {
      A: '"Sleep, then, child — sleep till I sleep"',
      B: '"before the world had dubbed your ambition insolence, had held your ideals unattainable, had schooled your loves and longings in shame and blame"',
      C: '"waken to a baby voice and the ceaseless patter of little feet"',
      D: '"above the Veil"',
    },
    answer: 'B', isSPR: false,
    explanation: 'B describes what the child was spared — a world that would have labeled his ambition as insolence, held his ideals unattainable, and taught his feelings shame. This passage weaves racial injustice (the specific degradation reserved for Black ambition) into the father\'s grief, making it simultaneously personal and racially shaped. A ("Sleep, then, child") is personal grief but without the racial dimension. C ("baby voice and ceaseless patter") is purely personal, evoking what is lost. D ("above the Veil") is a reference to racial reality but without the explanatory content of B.',
  },

  {
    id: 'ii_c_177', num: 177, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Neuroscientists studying memory consolidation have found that the hippocampus plays different roles in recent and remote memories. Recent memories — those formed within the past few weeks — are heavily dependent on the hippocampus for retrieval. Over time, through a process called "systems consolidation," memories become less hippocampus-dependent as they are gradually integrated into cortical networks. This suggests that memories change structurally over time, becoming distributed across neocortical regions rather than remaining localized in the hippocampus.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A researcher claims that patients with hippocampal damage should show greater impairment retrieving recent memories than remote ones. Which detail from the text best supports this claim?',
    choices: {
      A: 'The hippocampus plays different roles in recent and remote memories.',
      B: 'Systems consolidation gradually integrates memories into cortical networks, making them less hippocampus-dependent over time.',
      C: 'Recent memories are heavily dependent on the hippocampus, while remote memories have become distributed in neocortical regions through systems consolidation.',
      D: 'Memories change structurally over time.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C directly supports the prediction: recent memories are hippocampus-dependent (so hippocampal damage would impair them), while remote memories have shifted to cortical networks (so hippocampal damage would spare them). This precisely explains why patients should show greater impairment for recent than remote memories. A is a general statement without the mechanistic detail. B describes the process of consolidation but doesn\'t specify the outcome for hippocampally damaged patients as directly as C. D is too vague.',
  },

  {
    id: 'ii_c_178', num: 178, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'The following text is from Herman Melville\'s 1851 novel Moby-Dick.\n\nAnd, doubtless, my going on this whaling voyage, formed part of the grand programme of Providence that was drawn up a long time ago. It came in as a sort of brief interlude and solo between more extensive performances. I take it that this part of the bill must have run something like this: "Grand Contested Election for the Presidency of the United States." "WHALING VOYAGE BY ONE ISHMAEL." "BLOODY BATTLE IN AFFGHANISTAN."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that Ishmael uses irony to simultaneously assert and undercut the importance of his own voyage. Which quotation from the text best supports this claim?',
    choices: {
      A: '"my going on this whaling voyage, formed part of the grand programme of Providence"',
      B: '"it came in as a sort of brief interlude and solo between more extensive performances"',
      C: '"WHALING VOYAGE BY ONE ISHMAEL" placed between "Grand Contested Election for the Presidency" and "BLOODY BATTLE IN AFFGHANISTAN"',
      D: '"I take it that this part of the bill must have run something like this"',
    },
    answer: 'C', isSPR: false,
    explanation: 'C captures the ironic juxtaposition most precisely: Ishmael\'s voyage is framed as part of Providence — suggesting cosmic importance — but placed between a presidential election and a bloody war, where its relative smallness is absurdly apparent. The typographic imitation of a playbill listing all three at equal weight makes the bathos visible. This simultaneously asserts (Providence made it happen) and undercuts (it\'s sandwiched between world-historical events). B notes it is a "brief interlude" — this establishes the undercutting but not the simultaneous assertion. A asserts Providence but lacks the undercutting element. D introduces the list but doesn\'t include the juxtaposition itself.',
  },

  {
    id: 'ii_c_179', num: 179, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosopher Hannah Arendt argued in The Origins of Totalitarianism (1951) that the distinguishing feature of totalitarian movements is not their ideology per se but their destruction of the private realm and the creation of "loneliness" — a condition of radical isolation in which individuals, cut off from others and from common sense, become vulnerable to ideological manipulation. Totalitarianism succeeds, on Arendt\'s account, not primarily through terror but through the systematic dissolution of the social bonds that allow people to test reality against shared experience.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that Arendt locates the power of totalitarianism in its capacity to undermine the social conditions for critical thinking rather than in its use of force. Which detail from the text best supports this claim?',
    choices: {
      A: 'Totalitarian movements are distinguished not by their ideology but by their destruction of the private realm.',
      B: 'Individuals cut off from others and from common sense become vulnerable to ideological manipulation.',
      C: 'Totalitarianism succeeds not primarily through terror but through the systematic dissolution of social bonds that allow people to test reality against shared experience.',
      D: 'Arendt published The Origins of Totalitarianism in 1951.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C most directly supports the student\'s claim by explicitly distinguishing Arendt\'s argument from a terror-based account and identifying the dissolution of social bonds — the conditions for shared reality-testing — as the primary mechanism. This maps exactly to "undermine social conditions for critical thinking rather than use of force." A describes the target (private realm) but not the mechanism of power or the contrast with force. B describes individual vulnerability but does not make the contrast with terror. D is a bibliographic fact with no argumentative content.',
  },

  {
    id: 'ii_c_180', num: 180, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'The following text is from George Eliot\'s 1871 novel Middlemarch.\n\nIf we had a keen vision and feeling of all ordinary human life, it would be like hearing the grass grow and the squirrel\'s heart beat, and we should die of that roar which lies on the other side of silence. As it is, the quickest of us walk about well-wadded with stupidity.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that Eliot suggests human beings\' limited perception is, paradoxically, a form of psychological protection rather than simply a deficiency. Which quotation from the text best supports this claim?',
    choices: {
      A: '"If we had a keen vision and feeling of all ordinary human life"',
      B: '"we should die of that roar which lies on the other side of silence"',
      C: '"the quickest of us walk about well-wadded with stupidity"',
      D: '"it would be like hearing the grass grow and the squirrel\'s heart beat"',
    },
    answer: 'B', isSPR: false,
    explanation: 'B most directly supports the paradox: full perception would kill us — "we should die of that roar." This makes perceptual limitation a survival necessity, not merely a flaw. The student\'s claim is that limitation is protection, and B is the exact textual locus of that argument. A sets up the hypothetical but does not establish the consequence. C describes the "stupidity" through which we walk — this emphasizes the limitation but frames it critically rather than as protection. D describes the hypothetical sensory experience without yet making the protective argument.',
  },

];
