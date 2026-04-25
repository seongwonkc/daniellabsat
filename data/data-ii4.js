'use strict';

// data-ii4.js — Information & Ideas, 30 questions
// Central Ideas ×5, CoE-Text ×6, CoE-Quantitative ×4, Logical Completion ×7, Supporting Evidence ×8
// IDs: ii_c_121–ii_c_150  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_II4 = [

  // ── Central Ideas (5) ─────────────────────────────────────────────────────

  {
    id: 'ii_c_121', num: 121, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Fireflies produce their signature flashes through a chemical reaction in their abdomens involving an enzyme called luciferase, which catalyzes the oxidation of a compound called luciferin. Different firefly species use different flash patterns — specific intervals, durations, and colors — to attract mates of the same species. Because each species has a distinct code, multiple firefly species can coexist in the same habitat without interference. This system also exposes fireflies to a danger: some Photuris firefly females mimic the flash signals of other species to lure males of those species, which they then eat.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Fireflies produce light through a chemical reaction involving luciferase and luciferin.',
      B: 'Firefly flash patterns serve as species-specific mating codes that allow coexistence but also create vulnerability to predatory mimicry.',
      C: 'All firefly species use identical flash patterns, which is why multiple species can coexist in the same habitat.',
      D: 'Photuris fireflies are the most dangerous predators in habitats where multiple firefly species coexist.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes the species-specific flash codes (enabling coexistence) and then the exploitation of those codes by Photuris females (creating vulnerability). B correctly captures both the function and its exploitation. A states only the chemistry — a supporting detail. C says all species use identical patterns — the opposite; species-specific codes are the mechanism. D claims Photuris is the most dangerous predator — no such ranking is made.',
  },

  {
    id: 'ii_c_122', num: 122, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The concept of "food deserts" — urban and rural areas where residents lack access to affordable, nutritious food — has been widely used in public health research and policy. However, researchers have begun to challenge the assumption that geographic access is the primary barrier to healthy eating. Studies tracking individuals\' actual grocery shopping behavior find that many residents of food deserts travel to supermarkets in other areas, while many residents of areas with abundant grocery stores still buy unhealthy food. These findings suggest that distance to a grocery store is less predictive of dietary quality than income, food preferences, time constraints, and cultural food practices.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The concept of food deserts is entirely incorrect and should be abandoned in public health research.',
      B: 'Research on actual shopping behavior suggests that geographic access to groceries is not the primary determinant of dietary quality, which depends more on economic, cultural, and time-related factors.',
      C: 'Urban areas have fewer healthy food options than rural areas, creating inequitable access to nutrition.',
      D: 'Grocery stores should be required to locate in underserved neighborhoods to address the food desert problem.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage presents evidence challenging the geographic access assumption — people travel, and nearby stores don\'t guarantee healthy eating — and proposes income, preferences, time, and culture as better predictors. B correctly captures both the challenge and the alternative explanation. A says food deserts should be abandoned — the passage challenges one assumption, not the whole concept. C says urban areas have fewer healthy options — no urban-rural comparison is made. D makes a policy recommendation not present in the passage.',
  },

  {
    id: 'ii_c_123', num: 123, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The historian\'s challenge is not to judge the past by present standards but to understand why people in the past made the choices they did — to enter the conceptual world of another time, with its different assumptions about religion, social hierarchy, the natural world, and the self. This does not mean accepting those assumptions as correct; it means recognizing that behaviors that seem obvious errors from the present often made sense within the frameworks available to those who chose them. The goal is understanding, not exculpation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Historians should avoid making any moral judgments about historical figures or events.',
      B: 'Historical understanding requires entering the conceptual frameworks of past people without endorsing them or excusing the choices made within them.',
      C: 'Present moral standards are not applicable to any historical period because values change over time.',
      D: 'The primary purpose of historical study is to demonstrate the superiority of present-day values over past ones.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage makes a three-part argument: understand from within the past\'s frameworks; this doesn\'t mean accepting those frameworks; the goal is understanding, not exculpation. B correctly captures all three. A says historians should avoid moral judgments — the passage explicitly says this does not mean accepting past frameworks as correct. C says present standards never apply to the past — the passage is more nuanced; it distinguishes between understanding and judging. D says history demonstrates present superiority — the opposite of the passage\'s goal.',
  },

  {
    id: 'ii_c_124', num: 124, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Coral reefs cover less than 1% of the ocean floor yet support an estimated 25% of all marine species — a density of biodiversity comparable to that of tropical rainforests. This disproportionate diversity is produced by the structural complexity of the reef: the nooks, caverns, and overhangs created by coral skeletons provide habitat for organisms at every scale, from microscopic bacteria to large reef sharks. Reef degradation therefore threatens not just coral itself but the entire web of species — including commercially important fish — that depend on reef structure for shelter, reproduction, and feeding.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Coral reefs are the most biodiverse ecosystems on Earth, supporting more species than any other habitat.',
      B: 'The structural complexity of coral reefs produces disproportionate biodiversity, making reef degradation a threat to a wide web of marine species.',
      C: 'Coral reefs should be legally protected because of their commercial value to fishing industries.',
      D: 'Tropical rainforests and coral reefs are essentially equivalent in their biodiversity and conservation importance.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures the chain of reasoning: structural complexity → disproportionate biodiversity → reef degradation threatens the whole dependent web. A says coral reefs are the most biodiverse — the passage compares them to tropical rainforests rather than claiming overall supremacy. C makes a legal/policy recommendation not in the passage. D says rainforests and reefs are equivalent — the passage draws an analogy, not an equivalence claim.',
  },

  {
    id: 'ii_c_125', num: 125, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosopher Hannah Arendt introduced the concept of the "banality of evil" to describe her observations of Adolf Eichmann\'s trial in Jerusalem. Contrary to expectations of encountering a monster, Arendt found Eichmann to be a bureaucrat — a man of no particular ideological fervor who organized mass deportations not from hatred but from a failure of thinking, an inability or unwillingness to consider the moral reality of his actions from the perspective of those they affected. The lesson Arendt drew was not that evil is ordinary but that it can be perpetrated by ordinary people who substitute bureaucratic role-following for moral judgment.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Arendt argued that Adolf Eichmann was not truly responsible for the Holocaust because he was merely following orders.',
      B: 'Arendt\'s observation of Eichmann led her to conclude that mass atrocities can be carried out by people who lack ideological hatred, when bureaucratic role-following substitutes for independent moral judgment.',
      C: 'Arendt believed that evil is always banal and that no human being is capable of genuine malice.',
      D: 'The "banality of evil" concept implies that bureaucratic systems are inherently more dangerous than ideologically motivated actors.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures Arendt\'s argument: Eichmann was not a monster but a bureaucrat whose "thoughtlessness" — failure to engage moral judgment — enabled mass murder. A says Arendt denied Eichmann\'s responsibility — she was criticizing the substitution of role for judgment, not excusing him. C says Arendt believed evil is always banal — the passage explicitly says the lesson is not that evil is ordinary but that ordinary people can perpetrate it. D claims bureaucratic systems are more dangerous than ideological actors — no such comparative claim is made.',
  },


  // ── CoE-Text (6) ──────────────────────────────────────────────────────────

  {
    id: 'ii_c_126', num: 126, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Ornithologists studying migratory birds have found that some species navigate using the Earth\'s magnetic field. Experiments with European robins showed that the birds can detect the inclination of magnetic field lines — the angle at which the field lines dip toward the Earth\'s surface — and use this information to determine their latitude. When researchers placed birds in rooms with artificially altered magnetic fields, the birds consistently oriented toward the apparent "magnetic north" of the artificial field rather than the true geographic north.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the conclusion that robins use magnetic inclination rather than magnetic intensity or direction to determine latitude?',
    choices: {
      A: 'Evidence that robins fly at night, when visual landmarks are less useful for navigation',
      B: 'An experiment in which a magnetic field with the same intensity and direction as Earth\'s but with the inclination angle reversed causes robins to orient as if they are in the opposite hemisphere',
      C: 'Data showing that robins raised in captivity without exposure to magnetic fields still migrate in the correct direction',
      D: 'Records showing that the migratory routes of European robins have remained stable over centuries despite changes in geographic landmarks',
    },
    answer: 'B', isSPR: false,
    explanation: 'The claim is that robins use inclination specifically. B isolates inclination by holding intensity and direction constant while reversing inclination — if the birds orient as if in the opposite hemisphere, the inclination angle must be what they\'re responding to. A supports nighttime/non-visual navigation — relevant but not specific to inclination. C shows innate magnetic navigation — supports magnetoreception generally but not inclination specifically. D shows route stability — supports navigation competence but not inclination as the specific cue.',
  },

  {
    id: 'ii_c_127', num: 127, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A sociologist argues that the rise of remote work has increased social isolation among workers by reducing the informal social interactions — conversations at the coffee machine, impromptu hallway discussions — that historically fostered workplace relationships and a sense of belonging. She predicts that remote workers will report higher loneliness and lower job satisfaction than on-site workers over time, even when controlling for salary and job content.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the sociologist\'s prediction?',
    choices: {
      A: 'A study finding that remote workers have shorter commute times than on-site workers and report lower commute-related stress',
      B: 'A longitudinal survey showing that remote workers\' reported loneliness and job satisfaction scores diverge from on-site workers\' scores over eighteen months, with remote workers reporting greater loneliness and lower satisfaction even after adjusting for salary and job type',
      C: 'Data showing that remote work is more common in technology industries than in healthcare or manufacturing',
      D: 'Evidence that companies offering remote work attract more job applications than those that do not',
    },
    answer: 'B', isSPR: false,
    explanation: 'The sociologist predicts higher loneliness and lower satisfaction for remote workers over time, controlling for salary and job content. B directly tests and confirms this prediction: longitudinal data with the specified controls showing the predicted divergence. A shows commute benefit — not about loneliness or satisfaction. C shows industry distribution — not about worker outcomes. D shows hiring appeal — not about satisfaction or loneliness.',
  },

  {
    id: 'ii_c_128', num: 128, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Evolutionary biologists studying altruism have identified "reciprocal altruism" — cooperation among non-kin in which organisms perform costly acts for others on the expectation of future return — as a mechanism that can evolve without kin selection. For reciprocal altruism to be evolutionarily stable, several conditions must be met: individuals must encounter each other repeatedly, must be able to identify cheaters, and must be able to punish or exclude them. In small, stable groups where individuals interact repeatedly and recognize one another, reciprocal altruism is expected to evolve; in large, anonymous groups, it is not.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly challenge the claim that cheater detection and punishment are required for reciprocal altruism to evolve?',
    choices: {
      A: 'Evidence that vampire bats share blood meals with non-kin who have previously shared with them',
      B: 'A study of a large anonymous online community showing stable patterns of reciprocal cooperation in the absence of any mechanism for identifying or punishing non-cooperators',
      C: 'Research finding that cooperation in small primate groups is correlated with the frequency of face-to-face contact among group members',
      D: 'Data showing that humans have larger working memory capacity for tracking social obligations than other primates',
    },
    answer: 'B', isSPR: false,
    explanation: 'The claim requires cheater detection and punishment for reciprocal altruism to be evolutionarily stable. B challenges this directly: if stable reciprocal cooperation exists in a large, anonymous online community where cheaters cannot be identified or punished, the requirement for these mechanisms is not universal. A supports reciprocal altruism in small groups — consistent with the theory, not a challenge. C correlates cooperation with contact — supports the small-stable-group condition. D shows humans track obligations well — supports the preconditions, not a challenge.',
  },

  {
    id: 'ii_c_129', num: 129, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Historians studying the causes of World War I have long debated the relative weight of structural factors — the alliance system, military mobilization timetables, imperial competition — and contingent ones — the specific decisions made by specific individuals in the summer of 1914. Christopher Clark\'s work The Sleepwalkers (2012) argued that political leaders in 1914 stumbled into war without fully grasping the consequences of their decisions, emphasizing the role of miscalculation, misperception, and the pace of mobilization in producing an outcome none of the major powers initially desired.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support Clark\'s interpretation of the war\'s origins?',
    choices: {
      A: 'Diplomatic records from July 1914 showing that key decision-makers in Austria-Hungary, Germany, and Russia sent messages expressing confidence that military mobilization could be halted before escalating to general war, even as mobilization proceeded',
      B: 'Evidence that Germany had secretly planned and desired a general European war since at least 1912',
      C: 'Historical analysis showing that World War I\'s military mobilization timetables had been in place unchanged since 1905',
      D: 'Research finding that public opinion in most European countries strongly supported going to war in August 1914',
    },
    answer: 'A', isSPR: false,
    explanation: 'Clark\'s "sleepwalkers" thesis emphasizes miscalculation and misperception — leaders who did not grasp the consequences of their decisions. A directly supports this: messages showing leaders believed they could halt mobilization while it was already proceeding demonstrates exactly the kind of misperception Clark describes. B shows Germany planned the war — the opposite of sleepwalking. C shows timetables were old — structural context but does not show the misperception Clark emphasizes. D shows public support — not about elite decision-making miscalculation.',
  },

  {
    id: 'ii_c_130', num: 130, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosopher Peter Railton has argued for a form of moral realism that grounds moral facts in facts about human welfare — specifically, in what a fully informed, rational agent would desire if they had complete information about the consequences of their choices for human flourishing. On this view, moral judgments are not expressions of arbitrary preference but claims about objective states of the world that can be true or false. A key implication is that persistent moral disagreement does not refute moral realism: disagreements may result from factual errors, incomplete information, or biased reasoning that could in principle be corrected.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly challenge Railton\'s view?',
    choices: {
      A: 'Evidence that most moral disagreements between cultures are about factual matters — such as whether certain practices cause harm — rather than about fundamental values',
      B: 'Research showing that even fully informed, rational agents with identical knowledge of consequences reliably disagree about which outcomes maximize human welfare, with no convergence over time',
      C: 'Historical data showing that moral views have changed substantially over centuries in response to new factual information',
      D: 'Evidence that brain damage to areas associated with emotional processing impairs moral judgment',
    },
    answer: 'B', isSPR: false,
    explanation: 'Railton grounds moral facts in what fully informed rational agents would desire. B directly challenges this: if such agents, with identical information, persistently disagree about what maximizes welfare with no convergence, then the standard Railton proposes does not produce determinate moral facts — undermining his realism. A supports Railton by suggesting disagreement is factual, not fundamental. C supports Railton by showing facts drive moral change. D shows emotion\'s role in judgment — relevant to moral psychology but not specifically to Railton\'s rational-agent standard.',
  },

  {
    id: 'ii_c_131', num: 131, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Neuroscientists studying addiction have proposed that the prefrontal cortex\'s role in impulse control is systematically impaired in addiction, creating an imbalance in which limbic system signals driving drug-seeking behavior are not adequately modulated by prefrontal inhibitory control. This "dual process" account predicts that effective addiction treatment should target prefrontal function — either by pharmacologically strengthening inhibitory control, or by behavioral therapies that rebuild the neural circuits supporting deliberate self-regulation.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the dual process account of addiction?',
    choices: {
      A: 'Evidence that social support from family members reduces relapse rates among people recovering from addiction',
      B: 'Brain imaging data showing that when people with substance use disorders successfully resist drug cravings, prefrontal activation is significantly higher than in those who relapse, even when limbic activation levels are comparable',
      C: 'Research finding that the average duration of addiction is shorter for alcohol than for opioids',
      D: 'Evidence that childhood trauma increases the risk of developing addiction in adulthood',
    },
    answer: 'B', isSPR: false,
    explanation: 'The dual process account predicts that prefrontal inhibitory control modulates limbic drug-seeking. B directly tests this: if resisting cravings requires higher prefrontal activation with comparable limbic activation, it demonstrates that prefrontal control is the differentiating variable — exactly what the model predicts. A shows social support helps — a behavioral factor, not about the prefrontal/limbic mechanism. C compares addiction duration by substance — relevant to severity but not to the prefrontal mechanism. D shows childhood trauma as risk factor — an etiological finding, not about the prefrontal/limbic mechanism during craving.',
  },


  // ── CoE-Quantitative (4) ──────────────────────────────────────────────────

  {
    id: 'ii_c_132', num: 132, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A high school athletic director tracked the number of student athletes who participated in organized after-school sports during three consecutive academic years. She wanted to determine whether a new athletics initiative launched at the start of the second year had increased participation.',
    table: 'Student Athlete Participation\n\nYear   | Number of Participants\n-------+------------------------\nYear 1 |          312\nYear 2 |          389\nYear 3 |          401',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice most accurately describes what the data suggest about the athletics initiative?',
    choices: {
      A: 'The initiative had no effect: participation declined over the three years.',
      B: 'The initiative appears to have increased participation: the number rose substantially from Year 1 to Year 2 and continued to grow in Year 3.',
      C: 'The initiative increased participation in Year 2 but the decline from Year 2 to Year 3 suggests the effect was not sustained.',
      D: 'The data cannot support any conclusion because the sample size is too small.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Participation rose from 312 in Year 1 to 389 in Year 2 (+77) after the initiative launched, and continued to 401 in Year 3. B correctly describes this upward trend. A says participation declined — it increased. C says there was a decline from Year 2 to Year 3 — participation rose from 389 to 401 in Year 3. D says sample is too small — the question is about trend, not statistical sampling.',
  },

  {
    id: 'ii_c_133', num: 133, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'A nutritionist studying protein intake across three dietary patterns collected data on the average daily protein consumption (in grams) of adult participants following omnivore, vegetarian, and vegan diets. She hypothesized that omnivore diets would supply substantially more protein than plant-based diets.',
    table: 'Average Daily Protein Intake (grams) by Diet Type\n\nDiet Type    | Average Protein (g) | Standard Deviation\n-------------+---------------------+-------------------\nOmnivore     |        88.4         |        18.2\nVegetarian   |        72.1         |        14.6\nVegan        |        65.8         |        15.3',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice best describes the relationship between the data and the nutritionist\'s hypothesis?',
    choices: {
      A: 'The data fully support the hypothesis: omnivore intake was more than twice that of vegan intake.',
      B: 'The data partially support the hypothesis: omnivore intake was higher than both plant-based diets, though the differences, while meaningful, were not as dramatic as "substantially more" might imply.',
      C: 'The data refute the hypothesis: vegan protein intake exceeded omnivore intake.',
      D: 'The data cannot be evaluated because the standard deviations overlap considerably.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Omnivore (88.4 g) exceeded vegetarian (72.1 g, a 16.3 g difference) and vegan (65.8 g, a 22.6 g difference). These are meaningful but not massive differences — omnivores consumed about 34% more than vegans, which is notable but perhaps not "substantially more" depending on interpretation. B correctly describes partial support with appropriate hedging. A says omnivore intake was more than double vegan — 88.4 is not double 65.8. C says vegan exceeded omnivore — the opposite. D says overlapping standard deviations prevent evaluation — they affect statistical significance but the pattern is still interpretable.',
  },

  {
    id: 'ii_c_134', num: 134, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Researchers studying urban tree canopy coverage and public health outcomes collected data from fifteen neighborhoods in a large metropolitan area. They hypothesized that neighborhoods with higher tree canopy coverage would have lower rates of heat-related emergency department visits during summer months.',
    table: 'Tree Canopy Coverage and Summer Heat-Related ED Visits\n\nNeighborhood Canopy Coverage | Mean Heat-Related ED Visits per 10,000 residents\n-----------------------------+-----------------------------------------------\nLow (0–10%)                  |                     28.4\nModerate (11–30%)            |                     19.7\nHigh (31–60%)                |                     11.2',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice most accurately describes the relationship between the data and the researchers\' hypothesis?',
    choices: {
      A: 'The data refute the hypothesis: high canopy neighborhoods had more ED visits than low canopy neighborhoods.',
      B: 'The data support the hypothesis: ED visit rates decrease consistently as canopy coverage increases, with high-canopy neighborhoods showing less than half the rate of low-canopy neighborhoods.',
      C: 'The data partially support the hypothesis: canopy coverage reduced ED visits only in low-canopy neighborhoods.',
      D: 'The data are inconclusive because the neighborhoods have different population sizes.',
    },
    answer: 'B', isSPR: false,
    explanation: 'ED visits decrease consistently: 28.4 (low) → 19.7 (moderate) → 11.2 (high). High-canopy neighborhoods show 11.2 vs. 28.4, which is less than half (28.4/11.2 ≈ 2.5 times lower). B correctly describes this monotonic pattern consistent with the hypothesis. A says high canopy had more visits — the opposite. C says reduction only in low-canopy — the trend is consistent across all three levels. D says population sizes prevent evaluation — the data are already normalized per 10,000 residents.',
  },

  {
    id: 'ii_c_135', num: 135, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'hard',
    passage: 'An economist studying the effects of public library access on economic mobility analyzed data from 300 counties across the United States. She compared the upward income mobility rates (defined as the percentage of children born in the bottom income quartile who reached the top quartile as adults) in counties with below-median library funding per capita versus counties with above-median library funding per capita, controlling for median household income, educational attainment, and urbanization.',
    table: 'Upward Income Mobility by Library Funding Level (Controlling for Income, Education, Urbanization)\n\nLibrary Funding Level | Mean Upward Mobility Rate | 95% Confidence Interval\n----------------------+---------------------------+------------------------\nBelow median          |           8.2%            |       [7.6%, 8.8%]\nAbove median          |           10.7%           |       [10.1%, 11.3%]',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice most accurately uses the data to evaluate the economist\'s analysis?',
    choices: {
      A: 'The data show that library funding causes upward economic mobility, as counties with above-median funding show a 2.5 percentage point higher mobility rate.',
      B: 'The data show an association between above-median library funding and higher upward mobility rates, and the non-overlapping confidence intervals suggest this difference is statistically meaningful, though the study design cannot establish causation.',
      C: 'The data are inconclusive because the study only examined 300 counties, which is too few to draw any conclusions.',
      D: 'The data support a causal claim because the researcher controlled for household income, education, and urbanization.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The data show 10.7% vs. 8.2% with non-overlapping confidence intervals (10.1–11.3 vs. 7.6–8.8), indicating a statistically meaningful association. However, observational studies with controls cannot establish causation — there may be unmeasured confounders. B correctly describes the association as meaningful while noting the limitation. A says it shows causation — observational studies with controls cannot establish causation. C says 300 counties is too few — this is a reasonable sample for county-level analysis. D says controls establish causal claims — controlling for observed variables cannot rule out unmeasured confounders.',
  },


  // ── Logical Completion (7) ────────────────────────────────────────────────

  {
    id: 'ii_c_136', num: 136, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Geologists studying rock formations have found that the same distinct layer of clay, rich in iridium — an element rare on Earth but common in asteroids — appears in rock records on every continent. This layer corresponds to the K-Pg boundary, the geological moment at which non-avian dinosaur fossils disappear from the record. The worldwide presence of this iridium-rich layer at the exact moment of the mass extinction event strongly supports the hypothesis that ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'asteroids regularly bombarded Earth during the Cretaceous period',
      B: 'a massive asteroid impact deposited iridium-rich material globally and contributed to the mass extinction that ended the age of dinosaurs',
      C: 'iridium was more abundant on Earth\'s surface before the K-Pg boundary than it is today',
      D: 'volcanic eruptions were the primary cause of the K-Pg mass extinction event',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage presents: a global iridium-rich clay layer; iridium is common in asteroids; this layer coincides with the mass extinction. The logical conclusion is a global asteroid impact depositing the material and contributing to the extinction. B connects all three elements. A claims regular asteroid bombardment — the evidence supports one major impact. C says iridium was more abundant before the boundary — the passage says iridium is rare on Earth and common in asteroids. D says volcanic eruptions caused the extinction — not supported by the iridium evidence.',
  },

  {
    id: 'ii_c_137', num: 137, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying the "spotlight effect" found that people overestimate how much others notice and remember their appearance and behavior. In experiments, participants who wore an embarrassing t-shirt estimated that approximately 50% of other participants noticed and could remember the shirt, while in reality only about 25% did. This consistent overestimation occurs because people are hyperaware of their own actions and states, and they ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'are deliberately monitoring other people\'s reactions to form accurate social judgments',
      B: 'incorrectly assume that others share their own heightened focus on themselves',
      C: 'tend to notice embarrassing behaviors in others more readily than ordinary behaviors',
      D: 'have stronger memories for negative experiences than for neutral ones',
    },
    answer: 'B', isSPR: false,
    explanation: 'The spotlight effect arises from being hyperaware of one\'s own actions and then projecting that awareness onto others. B correctly completes this — people assume others are as focused on them as they are on themselves. A says people accurately monitor others\' reactions — the passage shows their estimates are wrong. C says they notice embarrassing behaviors in others — the effect is about self-focused awareness, not awareness of others. D says negative memories are stronger — memory strength is a separate phenomenon.',
  },

  {
    id: 'ii_c_138', num: 138, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Scientists studying the chemistry of the early Earth have found that many of the organic compounds essential to life — amino acids, nucleobases, lipid precursors — can form spontaneously from simple inorganic molecules under conditions that may have existed on early Earth. This finding addresses what was once called the "origin of life" problem\'s first barrier: the assembly of life\'s molecular building blocks from non-organic starting materials. However, demonstrating that building blocks can form is not the same as explaining how they assembled into self-replicating molecules capable of Darwinian evolution. The origin of life question therefore ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'has been fully resolved by research on prebiotic chemistry',
      B: 'remains open, with the formation of building blocks established but the transition to self-replication unexplained',
      C: 'does not require an explanation because life\'s building blocks form spontaneously',
      D: 'is a question better addressed by theology than by chemistry or biology',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage presents what has been solved (building block formation) and explicitly states that this is not the same as explaining self-replication. The logical completion acknowledges progress while noting what remains unexplained. B correctly captures this. A says the question is fully resolved — the passage explicitly says it is not. C says no explanation is needed because building blocks form spontaneously — the passage says this doesn\'t address self-replication. D suggests theology — incompatible with the scientific framing of the passage.',
  },

  {
    id: 'ii_c_139', num: 139, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Anthropologists studying gift economies have found that in many traditional societies, the circulation of goods through gift exchange — rather than market transactions — creates and maintains social bonds, establishes hierarchies, and generates obligations. Marcel Mauss, in his foundational work The Gift (1925), observed that gift-giving always involves three obligations: to give, to receive, and to reciprocate. What appears to be a freely given gesture is embedded in a network of social expectations. This analysis suggests that the distinction contemporary Western societies draw between gifts (free, altruistic) and economic exchange (calculated, self-interested) ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'is unique to modern capitalism and has no basis in universal human behavior',
      B: 'may be less absolute than assumed, since gift exchange is itself governed by implicit obligations and social calculations',
      C: 'reflects a more sophisticated understanding of exchange than gift economies provide',
      D: 'is confirmed by cross-cultural research showing that all societies prefer market transactions to gift exchanges',
    },
    answer: 'B', isSPR: false,
    explanation: 'Mauss shows that "freely given" gifts actually involve obligations to give, receive, and reciprocate — they are embedded in social calculations. The passage leads to the conclusion that the clean Western gift/exchange distinction is undermined. B correctly completes this by naming the undermining: gifts are not freely altruistic but involve implicit obligations. A says this distinction is unique to modern capitalism — too strong; the passage shows gift economies everywhere have obligations but doesn\'t claim the sharp distinction is uniquely capitalist. C says Western distinction reflects sophistication — the opposite of the passage\'s implication. D says all societies prefer markets — contradicted by the cross-cultural gift economy evidence.',
  },

  {
    id: 'ii_c_140', num: 140, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosophers of science studying the relationship between scientific theories and the evidence that supports them have noted that scientific theories are always "underdetermined" by evidence: for any body of evidence, multiple logically incompatible theories can be constructed that are equally consistent with that evidence. This means that evidence alone never uniquely determines which theory is correct. The criterion scientists actually use to choose among empirically equivalent theories — simplicity, coherence with existing knowledge, fertility in generating new predictions — are theoretical values rather than empirical ones. This suggests that the choice between empirically equivalent theories is ultimately ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'arbitrary and can be made by flipping a coin when evidence alone is indeterminate',
      B: 'guided by non-empirical theoretical values, implying that scientific theory choice involves judgments that go beyond what evidence alone can determine',
      C: 'impossible, which is why scientists make no progress in resolving debates between empirically equivalent theories',
      D: 'made entirely on the basis of empirical evidence gathered by future experiments' ,
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage establishes that evidence underdetermines theory choice and that actual selection criteria (simplicity, coherence, fertility) are theoretical values, not empirical ones. The logical completion names what follows: theory choice involves non-empirical value judgments beyond evidence. B correctly captures this. A says choices are arbitrary — the passage says they use theoretical values, not random selection. C says progress is impossible — the passage does not claim this. D says future evidence resolves the choice — the underdetermination claim implies that any evidence is also compatible with multiple theories.',
  },

  {
    id: 'ii_c_141', num: 141, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Population geneticists studying the dispersal of anatomically modern humans out of Africa have found that genetic diversity decreases in a consistent pattern as geographic distance from Africa increases: populations in sub-Saharan Africa have the highest genetic diversity, East Asian and Native American populations have the lowest, and European populations fall in between. This gradient is exactly what would be expected if a relatively small founder population left Africa and then sent successive smaller founder populations to colonize new regions — each bottleneck further reducing diversity. The data most strongly support a model in which ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'modern human diversity was produced by multiple independent origins in different regions of the world',
      B: 'all non-African human populations descend from a relatively small group that left Africa, with diversity diminishing through successive bottlenecks as populations dispersed to more distant regions',
      C: 'genetic diversity is primarily determined by climate, since colder regions show lower diversity',
      D: 'European populations are genetically more similar to African populations than to East Asian populations',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes a decrease-with-distance gradient and explicitly says it matches successive bottleneck dispersal from Africa. B captures the complete model: small founder population from Africa, with successive bottlenecks reducing diversity. A proposes multiple independent origins — the gradient pattern is incompatible with this. C attributes diversity to climate — the passage attributes it to bottleneck dispersal. D says Europeans are more similar to Africans than to East Asians — the passage describes a linear gradient but not a binary similarity claim.',
  },

  {
    id: 'ii_c_142', num: 142, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Behavioral economists studying retirement savings have found that the default enrollment structure of retirement savings plans dramatically affects participation rates. In opt-in plans — where employees must actively enroll — participation rates are typically 20–40% in the first year. In opt-out plans — where employees are automatically enrolled unless they actively withdraw — participation rates exceed 90%. Importantly, the contribution rates and investment allocations in both plan types are identical; only the default differs. This finding is difficult to explain with standard economic theory, which assumes that rational actors with consistent preferences would make the same savings decision regardless of whether they have to opt in or opt out. The data suggest instead that ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'individuals\' retirement savings decisions are primarily determined by their income level rather than plan structure',
      B: 'defaults powerfully shape behavior by exploiting inertia and the status quo bias — people tend to accept whatever option requires no action, regardless of whether it is genuinely preferred',
      C: 'opt-out plans are superior to opt-in plans because they maximize total retirement savings in the economy',
      D: 'rational actors always prefer opt-out plans because they require less active decision-making' ,
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage establishes that identical plans with different defaults produce 20–40% vs. 90%+ participation — a large behavioral difference explained not by income or preferences but by which option requires action. B correctly identifies the explanation: inertia and status quo bias. A says income determines decisions — income is the same in both conditions since only the default changes. C makes a policy normative claim — the passage draws a descriptive behavioral conclusion. D says rational actors prefer opt-out — the point is that this is irrational behavior explained by status quo bias, not a rational preference for less effort.',
  },


  // ── Supporting Evidence (8) ───────────────────────────────────────────────

  {
    id: 'ii_c_143', num: 143, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A zoologist argues that elephants demonstrate self-awareness by recognizing themselves in mirrors rather than treating their reflection as another individual. She notes that elephants touch their reflections in ways that suggest curiosity, make unusual repetitive movements while watching their reflections, and attempt to look behind mirrors — behaviors consistent with mirror self-recognition.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the zoologist\'s argument?',
    choices: {
      A: 'A study finding that elephants have a larger brain-to-body-size ratio than most other land mammals',
      B: 'An experiment in which an elephant with a mark painted on its forehead in a location not visible without a mirror repeatedly touches the mark on its own forehead when placed in front of a mirror',
      C: 'Evidence that elephants in the wild form long-term social bonds and remember individual humans who have harmed them',
      D: 'Records showing that elephants in captivity display the repetitive movements associated with stress',
    },
    answer: 'B', isSPR: false,
    explanation: 'The mark test is the standard behavioral test for mirror self-recognition: touching the mark on one\'s own body demonstrates that the animal understands the mirror image represents itself. B directly supports the self-recognition argument. A shows brain-to-body ratio — relevant to general intelligence but not specifically to mirror self-recognition. C shows social memory and individual recognition — related to cognition but not mirror self-recognition specifically. D shows captive stress behaviors — not related to the self-recognition argument.',
  },

  {
    id: 'ii_c_144', num: 144, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A public health researcher argues that soda taxes — taxes on sugar-sweetened beverages — reduce consumption of those beverages and thereby improve public health outcomes. She reviews the evidence from cities that have implemented soda taxes and argues that the taxes successfully alter purchasing behavior.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the researcher\'s argument?',
    choices: {
      A: 'Data showing that soda tax revenues have been used to fund public health programs in several cities',
      B: 'Sales data from Philadelphia showing that taxed beverage sales fell by 38% in the two years after the tax was implemented, while sales of untaxed beverages did not increase proportionally',
      C: 'Survey results showing that many consumers are unaware of the soda tax in their city',
      D: 'Evidence that soda taxes are more politically popular in urban areas than in rural areas',
    },
    answer: 'B', isSPR: false,
    explanation: 'The argument is that soda taxes reduce consumption of taxed beverages. B directly supports this with sales data showing a 38% decline in taxed beverage sales without a proportional shift to untaxed alternatives — demonstrating reduced consumption, not merely substitution. A shows revenue use — not about consumption change. C shows consumer unawareness — if anything, undermines the price-signal mechanism. D shows political popularity — not about consumption outcomes.',
  },

  {
    id: 'ii_c_145', num: 145, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Literary scholars studying the Harlem Renaissance have argued that the movement represented not only an artistic and literary flowering but a deliberate cultural strategy: by producing work of undeniable quality and sophistication, African American artists and intellectuals sought to challenge the racist premise that Black Americans were intellectually inferior. Alain Locke, one of the movement\'s leading theorists, argued that the "New Negro" was self-defining rather than defined by others\' prejudices.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which piece of evidence would most directly support the argument that Harlem Renaissance artists understood their work as a deliberate strategy to counter racial prejudice?',
    choices: {
      A: 'Biographical records showing that many Harlem Renaissance writers studied at historically Black colleges and universities',
      B: 'Published statements by Langston Hughes, Zora Neale Hurston, and Countee Cullen explicitly describing their art as both personally expressive and a form of cultural argument against racist assumptions about Black intellectual capacity',
      C: 'Literary criticism from the 1920s noting that Harlem Renaissance literature addressed themes of racial identity and urban migration',
      D: 'Sales figures showing that Harlem Renaissance novels reached wide audiences including white readers in the 1920s and 1930s',
    },
    answer: 'B', isSPR: false,
    explanation: 'The argument is about deliberate intent — artists understood their work as a strategy against racist assumptions. B directly supports this by providing explicit first-person statements from named artists connecting their art to that anti-racist cultural strategy. A shows educational backgrounds — relevant context but not about strategic intent. C shows critics noted racial themes — external observation, not evidence of the artists\' own strategic intent. D shows wide readership — relevant to impact but not to the intentional strategy claim.',
  },

  {
    id: 'ii_c_146', num: 146, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Economists studying the relationship between income inequality and economic growth have found that high inequality reduces long-run economic growth, particularly in developing economies. The proposed mechanisms include: limited access to credit and education for low-income groups (who cannot invest in human capital), reduced aggregate demand from low-wage workers with little purchasing power, and political instability associated with extreme inequality. Critics of this view point out that some periods of rapid industrialization were accompanied by rising inequality, suggesting the relationship is more complex.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the critics\' position that the relationship between inequality and growth is more complex than a simple negative relationship?',
    choices: {
      A: 'A cross-country study showing that among all countries with data from 1980 to 2020, those with higher Gini coefficients had lower average GDP growth rates',
      B: 'Historical analysis showing that South Korea and Taiwan experienced rapid GDP growth during the 1960s–1980s while simultaneously reducing inequality — consistent with both growth and equality being achievable together',
      C: 'Economic modeling showing that redistribution policies in high-inequality countries improve long-run growth projections',
      D: 'Data from 19th-century industrializing economies showing that real wages for factory workers actually rose as industrial production and inequality both increased during certain decades',
    },
    answer: 'D', isSPR: false,
    explanation: 'The critics argue that some rapid industrialization periods had rising inequality — suggesting inequality can coexist with growth. D directly supports this by providing historical data showing that wages and production rose alongside rising inequality — precisely the "more complex" relationship the critics are pointing to. A confirms the negative relationship across countries — supports the main finding, not the critics. B shows growth with decreasing inequality — supports the idea that inequality is not necessary for growth, but doesn\'t show rising inequality accompanying growth as the critics claim. C shows redistribution improves growth — policy support for the main finding, not the critics\' position.',
  },

  {
    id: 'ii_c_147', num: 147, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Evolutionary biologists have proposed that aging — the progressive decline in physiological function with age — is not a design flaw but an evolutionary consequence of declining natural selection pressure late in life. The "disposable soma" theory, developed by Thomas Kirkwood, holds that organisms allocate limited resources between reproduction and bodily repair; because natural selection acts most strongly on early reproductive success, organisms under-invest in the repair mechanisms that would extend maximum lifespan beyond reproductive usefulness. Aging is therefore the cost of early reproductive investment.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the disposable soma theory?',
    choices: {
      A: 'Evidence that organisms with higher metabolic rates age more quickly',
      B: 'A study showing that caloric restriction — which reduces reproductive investment — extends maximum lifespan in multiple species, and that the extension is proportional to the degree of restriction',
      C: 'Data showing that longer-lived species tend to have lower cancer rates',
      D: 'Evidence that aging rates are correlated with environmental temperature across ectothermic species',
    },
    answer: 'B', isSPR: false,
    explanation: 'The disposable soma theory predicts a trade-off: invest in reproduction → under-invest in repair → earlier aging. B directly tests this by reducing reproductive investment (caloric restriction lowers reproduction) and observing proportionally extended lifespan — the predicted consequence of shifting resources toward repair. A shows metabolic rate correlates with aging — consistent with oxidative damage theories but not specifically the reproduction-repair trade-off. C shows longevity and cancer rates — relevant to aging mechanisms but not the reproductive investment trade-off. D shows temperature effects on ectotherms — relevant to metabolic rate theories.',
  },

  {
    id: 'ii_c_148', num: 148, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Cognitive scientists studying the representation of number in the brain have proposed that humans have two distinct numerical systems: an exact system for small numbers, processed symbolically and dependent on language, and an approximate number system (ANS) for larger quantities, which represents numerosity as an analog magnitude that is innate and independent of language. Evidence for the ANS includes its presence in infants before language acquisition and in adult humans without formal mathematical education.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the claim that the approximate number system is independent of language?',
    choices: {
      A: 'Research showing that people across cultures use different words for numbers but converge on the same estimates for large quantities',
      B: 'A study of adult members of an Amazonian community whose language has words only for "one," "two," and "many," showing that they reliably distinguish 40 objects from 80 objects but cannot do so when the task requires exact verbal counting',
      C: 'Evidence that numerical reasoning develops earlier in bilingual children than in monolingual children',
      D: 'Brain imaging data showing that different brain regions are activated when participants compare two- versus three-digit numbers',
    },
    answer: 'B', isSPR: false,
    explanation: 'The ANS is proposed to be language-independent. B provides strong evidence for this: speakers of a language with no words for large numbers can still distinguish 40 from 80 (ANS operation) but fail at tasks requiring exact verbal counting (language-dependent system). This dissociation demonstrates the ANS operating without linguistic support. A shows cross-cultural convergence — relevant but the convergence could occur through shared language structures. C shows bilingual development patterns — not about language independence of the ANS. D shows brain regions for different number sizes — relevant to numeric processing but not to language independence.',
  },

  {
    id: 'ii_c_149', num: 149, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Legal scholars studying mandatory minimum sentencing laws have argued that these laws reduce judicial discretion in a way that produces unjust outcomes: by removing the judge\'s ability to consider individual circumstances — the defendant\'s history, the specifics of the offense, mitigating factors — mandatory minimums impose the same sentences on cases that differ substantially in moral culpability. Prosecutors, knowing the mandatory minimum a charge will trigger, gain leverage that effectively transfers sentencing discretion from judges to the executive branch.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the scholars\' argument that mandatory minimums produce unjust outcomes by ignoring individual circumstances?',
    choices: {
      A: 'Statistical analysis showing that mandatory minimum sentences are imposed more frequently in federal courts than in state courts',
      B: 'Case study evidence documenting individual defendants who received the same mandatory minimum sentence despite widely divergent roles in the same criminal conspiracy — a first-time peripheral participant receiving the same sentence as the operation\'s organizer',
      C: 'Evidence that prosecutors in mandatory minimum jurisdictions charge defendants with more serious offenses than prosecutors in jurisdictions without mandatory minimums',
      D: 'Data showing that states with mandatory minimum laws have lower rates of violent crime than states without them',
    },
    answer: 'B', isSPR: false,
    explanation: 'The scholars argue that removing judicial discretion leads to unjust outcomes by ignoring individual circumstances. B directly illustrates this: the same mandatory minimum sentence for a first-time peripheral participant and the operation\'s organizer shows that the law is blind to substantially different moral culpability — exactly the unjust outcome described. A shows federal vs. state frequency — not about justice of outcomes for individuals. C shows prosecutorial charging behavior — supports the discretion-transfer argument but not the unjust-outcomes claim about individual circumstances. D shows crime rate effects — about deterrence, not individual justice.',
  },

  {
    id: 'ii_c_150', num: 150, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Economic historians studying the British Industrial Revolution have debated why industrialization occurred first in Britain rather than in other European countries — notably France, which had comparable natural resources, a sophisticated commercial economy, and a large scientific community. One prominent explanation focuses on wage levels: British wages were among the highest in the world in the early eighteenth century, while energy costs (from abundant coal) were low. This "high-wage economy" hypothesis, developed by Robert Allen, argues that high wages gave British entrepreneurs the incentive to invest in labor-saving machinery in a way that entrepreneurs in low-wage economies did not.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the high-wage economy hypothesis?',
    choices: {
      A: 'Documentation that Britain had better-protected property rights than France in the eighteenth century, reducing the risk of investment in new machinery',
      B: 'Historical wage data showing that the specific industries that industrialized earliest in Britain (textiles, mining) were precisely those in which British wages were highest relative to the cost of the machinery that eventually replaced workers in those industries',
      C: 'Evidence that James Watt\'s steam engine patent was better enforced in Britain than similar patents in France',
      D: 'Data showing that literacy rates were higher in Britain than in France in the eighteenth century',
    },
    answer: 'B', isSPR: false,
    explanation: 'The high-wage hypothesis predicts that industrialization occurred where wages were high relative to machine costs — creating incentives to substitute capital for labor. B directly tests this at the industry level: if the earliest-industrializing industries are precisely those where wages were highest relative to machinery costs, the incentive mechanism operates exactly as predicted. A shows better property rights — relevant to investment incentives generally but not specifically to the wage-machinery cost incentive. C shows patent enforcement — relevant to innovation incentives but not to the wage-cost mechanism. D shows literacy rates — relevant to human capital but not to the wage-cost incentive.',
  },

];
