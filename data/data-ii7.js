'use strict';

// data-ii7.js — Information & Ideas, 30 questions
// Central Ideas ×5, CoE-Text ×6, CoE-Quantitative ×3, Logical Completion ×8, Supporting Evidence ×8
// IDs: ii_c_181–ii_c_210  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_II7 = [

  // ── Central Ideas (5) ─────────────────────────────────────────────────────

  {
    id: 'ii_c_211', num: 211, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The mantis shrimp\'s punch is among the most powerful strikes in the animal kingdom relative to body size. Its specialized club-shaped appendages can accelerate faster than a bullet, delivering forces exceeding 1,500 newtons. The clubs themselves are engineered for impact resistance: layers of mineralized fiber arranged in a helicoidal structure distribute and absorb the tremendous forces generated during each strike, allowing the clubs to survive thousands of high-velocity impacts without fracturing.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The mantis shrimp is the most dangerous animal in the ocean relative to its size.',
      B: 'The mantis shrimp\'s club appendages are remarkable both for their striking power and for the structural adaptations that allow them to withstand repeated high-force impacts.',
      C: 'Helicoidal fiber structures are common in the appendages of crustaceans that hunt by striking prey.',
      D: 'The mantis shrimp\'s punch exerts more force than any other animal strike recorded by scientists.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures both aspects: the striking power (fastest acceleration, 1,500+ newtons) and the structural adaptation that enables durability (helicoidal mineralized fiber). A makes a broader claim about danger not made in the passage. C generalizes to other crustaceans — the passage focuses on mantis shrimp. D claims no other animal strike exceeds it — the passage does not make a comparative superlative claim about force.',
  },

  {
    id: 'ii_c_212', num: 212, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The following text is from Nathaniel Hawthorne\'s 1850 novel The Scarlet Letter.\n\nOn one side of the portal, and rooted almost at the threshold, was a wild rose-bush, covered, in this month of June, with its delicate gems. It had sprung up under the footsteps of the sainted Ann Hutchinson, as she entered the prison-door. Finding it so directly on the threshold of our narrative, which is now about to issue from that inauspicious portal, we could hardly do otherwise than pluck one of its flowers, and present it to the reader.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The narrator provides botanical details about the wild rose-bush to establish the historical setting.',
      B: 'The narrator introduces the rose-bush as a symbol of natural beauty and defiance growing alongside a place of punishment, and offers it to the reader as a gesture before entering a dark story.',
      C: 'The narrator argues that Ann Hutchinson was unjustly imprisoned and should be remembered as a saint.',
      D: 'The narrator uses the rose-bush to warn the reader that the story will end happily.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B captures the symbolic and narrative purpose: the rose growing at the prison threshold represents beauty persisting alongside punishment, and the narrator\'s gesture of presenting it acknowledges that the story emerging from this "inauspicious portal" will be dark. A says botanical details establish setting — the rose is symbolic, not botanical. C claims Hawthorne argues for Hutchinson\'s innocence — he calls her "sainted" but is not making an argument about her trial. D says the rose predicts a happy ending — the narrative explicitly says the portal is "inauspicious," not hopeful.',
  },

  {
    id: 'ii_c_213', num: 213, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Researchers studying ancient DNA from the remains of individuals who died during the Black Death in mid-14th-century Europe have found that survivors carried genetic variants associated with enhanced immune response to Yersinia pestis, the bacterium responsible for plague. In a striking case of rapid natural selection, these protective variants became significantly more common in European populations in the generations immediately following the plague. However, some of the same variants that protected against plague are associated with increased risk of certain autoimmune disorders in modern European populations — suggesting that evolution\'s solutions to one threat can become vulnerabilities to another.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The Black Death killed approximately one-third of Europe\'s population in the 14th century.',
      B: 'Ancient DNA analysis reveals that the Black Death drove rapid natural selection for immune variants, which spread in post-plague populations but may now predispose modern Europeans to autoimmune disorders.',
      C: 'Modern Europeans are more susceptible to bacterial infections than their medieval ancestors because of genetic changes.',
      D: 'Autoimmune disorders are caused primarily by genetic adaptations to historical epidemic diseases.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B captures all three components: the selection event (plague → immune variants selected), the rapid spread (more common in generations after), and the contemporary trade-off (same variants → autoimmune risk today). A states a historical mortality figure not given in the passage. C says modern Europeans are more susceptible to bacterial infections — the passage says they have immune variants that were protective against plague, not that they are more susceptible. D claims autoimmune disorders are caused primarily by epidemic adaptations — an overgeneralization the passage does not make.',
  },

  {
    id: 'ii_c_214', num: 214, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The following text is from Franz Kafka\'s 1915 novella The Metamorphosis, translated from German.\n\nWhen Gregor Samsa woke up one morning from unsettling dreams, he found himself changed in his bed into a monstrous vermin. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little, he could see his domelike brown belly divided into stiff arched segments on top of which the blanket, ready to slip off altogether, was just barely clinging. His many legs, pitifully thin compared with the rest of his bulk, were flickering helplessly before his eyes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Gregor Samsa is suffering from a vivid nightmare about becoming an insect.',
      B: 'The text presents Gregor\'s transformation into a vermin as a matter-of-fact event, describing his new physical form in calm, methodical detail rather than with shock or distress.',
      C: 'Gregor\'s physical transformation symbolizes the alienation of workers under capitalism.',
      D: 'The text establishes a dreamlike, surreal atmosphere in which Gregor cannot distinguish reality from fantasy.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the distinctive narrative quality: the opening sentence states the transformation bluntly, and the rest of the passage methodically describes the physical details (armor-plated back, brown belly, thin legs) without registering horror or existential crisis. A says it is a nightmare — the passage presents the transformation as real, not a dream. C identifies a common symbolic interpretation — but the main idea of this specific passage is the narrative technique, not symbolic meaning. D says Gregor cannot distinguish reality from fantasy — the passage shows Gregor observing his new body matter-of-factly, not in confusion.',
  },

  {
    id: 'ii_c_215', num: 215, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Sociologist C. Wright Mills argued in The Sociological Imagination (1959) that personal troubles must be understood in their social context — that biography and history are inseparable. A person who is unemployed, for example, is not simply experiencing an individual failure; when unemployment is widespread, it is a "public issue" whose causes lie in the organization of the economy, not in the personal shortcomings of millions of individuals simultaneously. The sociological imagination is the capacity to see the connection between individual experience and structural forces, and Mills believed that developing this capacity was the central task of social science.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Mills argued that unemployment is always a structural problem, never the result of individual behavior.',
      B: 'Mills proposed that social science should focus primarily on large-scale historical forces rather than individual psychology.',
      C: 'According to Mills, the sociological imagination is the capacity to see how individual experiences are shaped by broader social and historical structures — a capacity he regarded as social science\'s central task.',
      D: 'Mills criticized social scientists of his time for failing to address the practical needs of working-class people.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly captures both the definition of the sociological imagination (connecting individual experience to structural forces) and its status as social science\'s central task. A overstates — Mills uses unemployment as an example to show that when widespread it\'s a structural issue; he is not saying individual behavior never matters. B says social science should focus on historical forces rather than psychology — Mills argues for the connection between both levels, not abandoning one. D introduces a criticism of contemporary social scientists not made in the passage.',
  },


  // ── CoE-Text (6) ─────────────────────────────────────────────────────────

  {
    id: 'ii_c_216', num: 216, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying sleep and memory consolidation have proposed that slow-wave sleep — the deep, dreamless stage of sleep — plays a critical role in transferring newly acquired information from the hippocampus to long-term cortical storage. They hypothesize that the hippocampus replays newly learned information during slow-wave sleep, allowing the neocortex to gradually incorporate it into longer-term memory networks.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the researchers\' hypothesis?',
    choices: {
      A: 'Participants who napped after learning a task showed greater improvement on a second performance test than those who remained awake.',
      B: 'Electroencephalogram recordings during slow-wave sleep show hippocampal activity patterns that closely match those recorded during the preceding learning session.',
      C: 'REM sleep, not slow-wave sleep, is associated with memory consolidation in most mammals.',
      D: 'People who consistently get fewer than seven hours of sleep perform worse on memory tests than those who get eight or more hours.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The hypothesis specifically proposes hippocampal replay during slow-wave sleep. B directly tests this by showing that hippocampal activity during slow-wave sleep mirrors the patterns from the learning session — i.e., the hippocampus is replaying. A shows general nap benefits — it supports sleep\'s role in memory but doesn\'t specifically involve slow-wave sleep or hippocampal replay. C implicates REM rather than slow-wave sleep — this would challenge, not support, the hypothesis. D shows general sleep deprivation effects — not the specific slow-wave/hippocampal replay mechanism.',
  },

  {
    id: 'ii_c_217', num: 217, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Conservation geneticists studying cheetah populations have found that cheetahs are one of the least genetically diverse large mammals on Earth. The species apparently passed through a severe population bottleneck approximately 10,000–12,000 years ago, reducing genetic variation to levels where individual cheetahs are nearly genetically identical. Researchers have argued that this extreme homozygosity makes cheetah populations highly vulnerable to novel pathogens because the entire population has essentially the same immune system.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the researchers\' concern about pathogen vulnerability?',
    choices: {
      A: 'Cheetahs in captivity successfully accept skin grafts from unrelated individuals without rejection.',
      B: 'When a novel respiratory virus was introduced into a captive cheetah population, the mortality rate was over 50% — significantly higher than that observed in genetically diverse felid species exposed to the same virus.',
      C: 'Cheetah populations in southern Africa are larger and more stable than those in East Africa.',
      D: 'Genetic diversity in cheetahs has declined further since the 1970s due to habitat fragmentation.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B directly tests the pathogen vulnerability concern: a novel virus killing over half the cheetah population while genetically diverse felids show lower mortality is exactly the predicted outcome of low immune diversity. A shows graft tolerance — this is evidence of genetic similarity but not of pathogen vulnerability. C shows population sizes — not pathogen response. D shows further diversity decline — relevant background but not direct evidence of vulnerability to pathogens.',
  },

  {
    id: 'ii_c_218', num: 218, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Philosophers of mind debating the "hard problem of consciousness" disagree about whether physical descriptions of brain processes can ever fully explain why there is subjective experience — why there is something it is like to see red, feel pain, or hear music. Philosopher David Chalmers argues that even a complete neuroscientific account of how the brain processes information would leave untouched the question of why that processing is accompanied by any inner experience at all.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which argument, if made by a philosopher, would most directly challenge Chalmers\'s position?',
    choices: {
      A: 'Neuroscience has not yet fully mapped the neural correlates of consciousness.',
      B: 'Once we have a complete functional account of how the brain processes, integrates, and reports sensory information, there is no further fact about "inner experience" left to explain — the apparent gap is an illusion created by our conceptual framework, not a genuine explanatory gap in the world.',
      C: 'Consciousness may be a property of non-biological information-processing systems as well as biological ones.',
      D: 'The study of animal cognition suggests that subjective experience may be distributed across many species, not unique to humans.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Chalmers\'s position is that a complete functional/neuroscientific account would still leave the question of inner experience unanswered. B directly challenges this by denying there is any further fact to explain — the hard problem is a conceptual illusion, not a genuine gap. This is the "eliminativist" or "deflationary" response to the hard problem. A says neuroscience isn\'t complete yet — this concedes the potential gap rather than challenging it. C extends consciousness to non-biological systems — an extension of Chalmers\'s framework, not a challenge to it. D distributes consciousness across species — also consistent with Chalmers\'s position.',
  },

  {
    id: 'ii_c_219', num: 219, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Historians studying the collapse of the Roman Republic have proposed various explanations for why republican institutions failed in the first century BCE. Some emphasize structural factors: the Roman constitution was designed for a city-state and could not accommodate the administrative demands of a Mediterranean empire. Others emphasize individual agency: ambitious men like Caesar, Pompey, and Crassus exploited structural weaknesses for personal advancement. A third camp argues that the decline of civic virtue — the willingness of elites to subordinate personal ambition to the public good — was the essential cause.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the structural explanation over the individual agency explanation?',
    choices: {
      A: 'Julius Caesar\'s personal ambition was evident from his early political career, long before he crossed the Rubicon.',
      B: 'Archaeological evidence shows that Roman civic institutions functioned adequately in Italy but consistently failed to manage provincial governance throughout the period of expansion.',
      C: 'Documents from the late Republic show that senators frequently violated traditional norms of office-holding.',
      D: 'Biographies of Caesar and Pompey emphasize their exceptional military skills and charismatic leadership.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The structural argument is that republican institutions could not handle imperial administration. B provides evidence for this: the institutions worked in Italy but consistently broke down in provinces — the scale problem the structural argument predicts. A emphasizes Caesar\'s personal ambition — supports individual agency. C shows norm violation — supports the civic virtue decline argument. D highlights personal attributes of leaders — supports individual agency.',
  },

  {
    id: 'ii_c_220', num: 220, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Linguist Daniel Everett has argued, controversially, that the Pirahã language of the Amazon — a language spoken by a small hunter-gatherer community — lacks recursion: the ability to embed clauses within clauses indefinitely (e.g., "the man who knows the woman who met the child who..."). Noam Chomsky and other generative linguists have disputed this claim, arguing that recursion is a universal property of all human languages and is the core feature that distinguishes human language from animal communication.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly resolve this dispute in Everett\'s favor?',
    choices: {
      A: 'Pirahã speakers learn other Amazonian languages that do contain recursive structures.',
      B: 'Independent analyses by multiple linguistic teams using different methodologies consistently find that Pirahã speakers do not produce or accept recursive embedded clause structures.',
      C: 'Other languages in the Amazon basin also show limited use of recursion in everyday speech.',
      D: 'Pirahã children acquire the language on a similar timetable to children learning other languages.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The dispute is about whether Pirahã actually lacks recursion. B resolves it in Everett\'s favor by providing independent replication: multiple teams, different methods, same result — Pirahã speakers don\'t produce or accept recursive structures. This makes the absence of recursion an empirical finding, not an artifact of Everett\'s methods. A shows Pirahã speakers can learn recursive languages — consistent with both positions (the capacity exists, but Pirahã itself may lack it, or speakers choose not to use it). C shows other Amazon languages with limited recursion — broadens the claim but doesn\'t confirm Pirahã specifically. D shows normal acquisition timing — not relevant to the presence or absence of recursion.',
  },

  {
    id: 'ii_c_221', num: 221, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Economists studying the long-run effects of slavery on current economic development have found that regions with historically higher rates of enslaved people as a share of population tend to have lower per capita income today, lower levels of trust and social capital, and weaker institutions — even after controlling for geographic and other factors. Nathan Nunn has argued that these persistent effects operate not through direct transmission of poverty but through the transmission of distrust: slavery bred cultures of interpersonal distrust that inhibited the development of trade networks, cooperative institutions, and ultimately economic growth.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support Nunn\'s specific claim about the mechanism through which slavery affects long-run development?',
    choices: {
      A: 'Regions with higher historic exposure to slavery have lower rates of participation in civic organizations and higher reported levels of interpersonal distrust, which are associated with weaker market institutions.',
      B: 'Counties that had higher enslaved populations in 1860 have lower median household incomes today.',
      C: 'States with stronger historical plantation economies have fewer manufacturing firms per capita.',
      D: 'The descendants of enslaved people report lower levels of institutional trust than descendants of free Black Americans from the same period.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Nunn\'s specific claim is about the mechanism: slavery → transmitted culture of distrust → weaker cooperative institutions → worse economic outcomes. A provides evidence for the full causal chain by showing the intermediate mechanism (lower civic participation, higher distrust) linked both to historic slavery exposure and to weaker institutions. B shows the income correlation — supports the end-state association but not the trust mechanism. C shows manufacturing effects — correlational, not mechanistic. D shows distrust among descendants specifically — relevant but doesn\'t link the transmission through distrust to institutional weakness and economic outcomes.',
  },


  // ── CoE-Quantitative (3) ──────────────────────────────────────────────────

  {
    id: 'ii_c_222', num: 222, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'An agricultural researcher compared the yield of four wheat varieties grown under identical conditions to determine which variety should be recommended to local farmers.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Wheat Variety Yield Comparison\n\nVariety   | Mean Yield (tons/hectare) | Disease Resistance (1–5 scale)\n----------|--------------------------|-------------------------------\nAlpha     | 4.2                      | 3\nBeta      | 5.1                      | 4\nGamma     | 3.9                      | 5\nDelta     | 5.3                      | 2',
    question: 'If the researcher recommends Beta over Delta for farmers in disease-prone regions, which data most directly support this recommendation?',
    choices: {
      A: 'Beta has a higher yield than Alpha and Gamma.',
      B: 'Beta produces 5.1 tons per hectare — nearly as high as Delta\'s 5.3 tons — but has substantially higher disease resistance (4 vs. 2), making it a better choice where disease is a risk.',
      C: 'Delta has the highest mean yield of any variety tested.',
      D: 'Gamma has the highest disease resistance of any variety tested.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B directly supports recommending Beta over Delta in disease-prone regions by citing both the small yield trade-off (5.1 vs. 5.3 tons — nearly equal) and the large disease resistance advantage (4 vs. 2 — substantially higher). This trade-off logic is the basis for preferring Beta in risky conditions. A notes Beta\'s yield vs. Alpha and Gamma — doesn\'t address the Beta vs. Delta comparison. C notes Delta\'s yield advantage — this would support Delta, not Beta. D notes Gamma\'s disease resistance — irrelevant to the Beta vs. Delta comparison.',
  },

  {
    id: 'ii_c_223', num: 223, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'A public health researcher tracked emergency room visit rates per 100,000 population for four categories of injury in a city over a five-year period to identify trends requiring policy attention.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Emergency Room Visit Rates per 100,000 Population\n\nInjury Category          | Year 1 | Year 3 | Year 5 | Change (Y1–Y5)\n--------------------------|--------|--------|--------|----------------\nFalls (elderly)           | 412    | 438    | 467    | +55\nMotor vehicle accidents   | 187    | 181    | 175    | −12\nSports injuries           | 224    | 229    | 231    | +7\nDrug overdose             | 89     | 134    | 198    | +109',
    question: 'The researcher concluded that drug overdose requires the most urgent policy attention of any injury category. Which data most directly support this conclusion?',
    choices: {
      A: 'Drug overdose rates were lower than all other injury categories in Year 1.',
      B: 'Drug overdose showed the largest absolute increase — rising 109 per 100,000 — and the only category that more than doubled over the five-year period.',
      C: 'Motor vehicle accident rates declined over the same period.',
      D: 'Falls among the elderly showed an absolute increase of 55 per 100,000 over five years.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B provides the strongest evidence for urgency by combining the largest absolute increase (109 — nearly double the next highest, falls at 55) and the proportional explosion (89 to 198 — more than doubling). Both the scale and rate of change indicate the most alarming trend. A notes that overdose rates were lowest in Year 1 — this is not evidence of urgency; it contrasts with the rapid growth. C notes motor vehicle declines — this would argue against urgency in that category. D notes falls\' increase — a relevant comparison, but the 55-point increase is less than half of drug overdose\'s 109-point increase.',
  },

  {
    id: 'ii_c_224', num: 224, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'hard',
    passage: 'A market researcher studying customer retention for a subscription software company analyzed churn rates (percentage of customers canceling per month) across different customer segments and compared them to industry benchmarks.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    table: 'Monthly Churn Rate by Customer Segment\n\nSegment          | Company Rate | Industry Benchmark | Above/Below Benchmark\n-----------------|-------------|--------------------|-----------------------\nSmall Business   | 4.8%        | 3.5%               | +1.3 pp above\nMid-Market       | 2.1%        | 2.8%               | −0.7 pp below\nEnterprise       | 0.9%        | 1.2%               | −0.3 pp below\nFreemium         | 8.4%        | 9.1%               | −0.7 pp below',
    question: 'The researcher recommends focusing retention efforts exclusively on the small business segment. Which data most directly support this recommendation?',
    choices: {
      A: 'The freemium segment has the highest churn rate of any segment at 8.4%.',
      B: 'Small business is the only segment with a churn rate above its industry benchmark, exceeding it by 1.3 percentage points.',
      C: 'Enterprise customers have the lowest churn rate of any segment.',
      D: 'Mid-market and freemium customers both perform at or better than industry benchmarks.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B directly supports targeting small business specifically: it is the only segment performing worse than its industry benchmark — suggesting a company-specific problem rather than an industry-wide trend. This is the correct framework for "where should we focus?" — not which segment has high churn in absolute terms, but which segment underperforms its own benchmark. A notes freemium has the highest absolute churn — but freemium is below its benchmark, suggesting this is normal for freemium models. C notes enterprise\'s low churn — doesn\'t support where to focus intervention. D notes that other segments perform at or above benchmark — relevant context but not as directly supportive as B\'s identification of the underperforming segment.',
  },


  // ── Logical Completion (8) ────────────────────────────────────────────────

  {
    id: 'ii_c_225', num: 225, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Salmon are anadromous fish — they hatch in freshwater streams, migrate to the ocean where they spend most of their adult lives, and return to their natal streams to spawn. Despite spending years at sea, adult salmon consistently return to the exact stream where they hatched. Researchers believe salmon navigate using the unique chemical signature of their birth stream — a signature they _______ during the juvenile stage before their initial migration to the ocean.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'forget', B: 'imprint on', C: 'avoid', D: 'randomly encounter' },
    answer: 'B', isSPR: false,
    explanation: '"Imprint on" most logically completes the sentence: salmon learn and lock in the chemical signature of their home stream during the juvenile stage, allowing them to identify it years later. B is correct. A ("forget") contradicts the mechanism — if they forgot, they couldn\'t navigate home. C ("avoid") is the opposite of the homing behavior. D ("randomly encounter") implies chance rather than the developmental learning process described.',
  },

  {
    id: 'ii_c_226', num: 226, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Scientists studying the microbiome of the International Space Station have found that bacteria and fungi rapidly colonize the space environment and that some strains acquire _______ — genetic changes that confer resistance to antibiotics and stress conditions — more quickly in microgravity than in Earth-based laboratory conditions, raising concerns about infection management on long-duration space missions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'mutations', B: 'nutrients', C: 'camouflage', D: 'predators' },
    answer: 'A', isSPR: false,
    explanation: '"Mutations" most logically completes the sentence: genetic changes that confer resistance to antibiotics and stress are mutations — changes to the DNA sequence. A is correct. B ("nutrients") are chemical compounds for energy, not genetic changes. C ("camouflage") involves visual concealment — not applicable to bacteria. D ("predators") describes organisms that hunt other organisms — not applicable to microbial biology in this context.',
  },

  {
    id: 'ii_c_227', num: 227, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The 19th-century physician Ignaz Semmelweis observed that maternal mortality rates in the Vienna maternity ward staffed by medical students were dramatically higher than in the ward staffed by midwives. After a colleague died from a wound infection after being accidentally cut during an autopsy, Semmelweis proposed that "cadaverous particles" from the medical students\' hands were transmitted to patients. When he instituted mandatory handwashing in chlorinated lime solution, mortality rates in the medical student ward fell dramatically. Despite this, Semmelweis\'s findings were largely _______ by the medical establishment of his time, partly because germ theory had not yet been established.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'celebrated', B: 'rejected', C: 'replicated', D: 'quantified' },
    answer: 'B', isSPR: false,
    explanation: '"Rejected" most logically completes the narrative: Semmelweis had strong evidence but was largely dismissed because germ theory didn\'t yet provide a theoretical framework for his findings. B is correct. A ("celebrated") contradicts the word "largely" with a negative qualifier and the historical record. C ("replicated") would be a positive outcome — not consistent with being resisted by the establishment. D ("quantified") means measured numerically — not the relevant outcome here.',
  },

  {
    id: 'ii_c_228', num: 228, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Evolutionary biologists studying island biogeography have found that species on islands tend to evolve larger body sizes when they are the apex predator and smaller body sizes when they face resource scarcity and no natural predators. This pattern — sometimes called the "island rule" — reflects adaptive responses to different selective pressures. The extinct dwarf mammoths of the Channel Islands off California, which evolved from the much larger Columbian mammoth after being isolated on the islands, exemplify _______ driven by limited resources.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'island gigantism', B: 'island dwarfism', C: 'adaptive radiation', D: 'allopatric speciation' },
    answer: 'B', isSPR: false,
    explanation: '"Island dwarfism" most logically completes the sentence: dwarf mammoths that evolved from large Columbian mammoths represent a reduction in body size driven by limited resources — the dwarfism side of the island rule. B is correct. A ("island gigantism") is the opposite direction of body size change. C ("adaptive radiation") describes diversification into multiple ecological niches. D ("allopatric speciation") describes speciation due to geographic isolation — while it occurred, the passage is specifically about the body size change.',
  },

  {
    id: 'ii_c_229', num: 229, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The Inca Empire of South America managed a vast territory stretching thousands of kilometers along the Andes without a writing system in the conventional sense. Instead, the Inca used khipus — complex arrangements of knotted strings whose color, knot type, and position encoded information. While earlier scholars assumed khipus were purely _______ devices used to record numerical data such as census and tribute figures, more recent analyses suggest that some khipus encoded narrative and historical information in ways that go well beyond numerical accounting.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'decorative', B: 'navigational', C: 'accounting', D: 'astronomical' },
    answer: 'C', isSPR: false,
    explanation: '"Accounting" most logically completes the sentence: the passage specifically describes numerical data — census and tribute figures — as the kind of information earlier scholars thought khipus recorded. C is correct. A ("decorative") — the passage has already said they encoded information. B ("navigational") — no geographical navigation function is described. D ("astronomical") — no celestial tracking function is suggested.',
  },

  {
    id: 'ii_c_230', num: 230, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Evolutionary game theorists studying cooperation have found that in populations where individuals can observe others\' reputations, cooperation can be sustained even among strangers through a mechanism called "indirect reciprocity." In direct reciprocity, you help someone because they may help you in return. In indirect reciprocity, you help someone because observers will note your generosity, improving your reputation and making others more likely to help you in the future. The stability of this system depends critically on the _______ of reputational information — if observers systematically receive inaccurate information about who gave and who defected, the incentive to cooperate collapses.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'scarcity', B: 'reliability', C: 'secrecy', D: 'diversity' },
    answer: 'B', isSPR: false,
    explanation: '"Reliability" most logically completes the passage: indirect reciprocity depends on observers getting accurate information about who cooperated and who defected. If this information is inaccurate, the mechanism breaks down. B correctly names accuracy/reliability as the critical property. A ("scarcity") — if information is scarce, the system might fail, but the passage specifically says "systematically inaccurate information" as the failure mode, pointing to reliability. C ("secrecy") — secret reputational information would eliminate the mechanism, but the passage describes accurate vs. inaccurate information, not public vs. secret. D ("diversity") — diverse reputational information is not identified as the critical variable.',
  },

  {
    id: 'ii_c_231', num: 231, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosophers studying personal identity have long debated what makes a person at one time the same person as someone at an earlier time. John Locke proposed that personal identity consists in continuity of consciousness — memory chains that connect present experience to past experience. A problem arises for Locke\'s view, identified by philosopher Thomas Reid: if an old general remembers being a young officer who was flogged as a boy, and the young officer remembered the flogging, but the old general cannot directly remember the flogging, then by Locke\'s criterion the general is the same person as the young officer, but both are and are not the same person as the flogged boy — a _______ in the theory.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: { A: 'confirmation', B: 'refinement', C: 'contradiction', D: 'simplification' },
    answer: 'C', isSPR: false,
    explanation: '"Contradiction" most logically completes the argument: Reid\'s objection shows that Locke\'s criterion generates an inconsistency — by transitivity, the general IS the same person as the boy (via the officer), but directly applied, he is NOT the same person as the boy (no direct memory chain). This is a logical contradiction in the theory. C is correct. A ("confirmation") — the thought experiment challenges, not confirms. B ("refinement") implies a minor adjustment is needed — but Reid\'s point is that there is a fundamental logical problem, not just an imprecision. D ("simplification") implies the problem makes the theory simpler — the opposite.',
  },

  {
    id: 'ii_c_232', num: 232, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Economists studying the labor market effects of automation have found that technological displacement is not a new phenomenon — textile workers, typesetters, and switchboard operators all saw their occupations eliminated by mechanization or digitization. However, past episodes of displacement were generally followed by the emergence of new occupations that absorbed the displaced workforce. Some labor economists are concerned that the current wave of automation, driven by artificial intelligence capable of performing cognitive as well as manual tasks, may be _______ in ways that previous waves were not, potentially displacing workers faster than new job categories can emerge.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'historically unprecedented in breadth and speed',
      B: 'less disruptive than previous technological transitions',
      C: 'limited to low-skill manual occupations',
      D: 'equally distributed across income levels',
    },
    answer: 'A', isSPR: false,
    explanation: '"Historically unprecedented in breadth and speed" most logically completes the argument: the concern is specifically that this wave affects cognitive as well as manual tasks (breadth) and may displace workers faster than new categories can absorb them (speed). A captures both dimensions. B says it is less disruptive — contradicts the concern being expressed. C says it is limited to low-skill manual occupations — the passage explicitly says AI affects cognitive tasks as well. D says equally distributed across income levels — the passage doesn\'t develop a distribution argument.',
  },


  // ── Supporting Evidence (8) ───────────────────────────────────────────────

  {
    id: 'ii_c_233', num: 233, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The following text is from Walt Whitman\'s 1855 poem "Song of Myself."\n\nI believe a leaf of grass is no less than the journey-work of the stars,\nAnd the pismire is equally perfect, and a grain of sand, and the egg of the wren,\nAnd the tree-toad is a chef-d\'oeuvre for the highest,\nAnd the running blackberry would adorn the parlors of heaven,\nAnd the narrowest hinge in my hand puts to scorn all machinery',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that Whitman elevates the ordinary and small to the level of the cosmic and divine, finding equal value in all things. Which quotation from the text best supports this claim?',
    choices: {
      A: '"the narrowest hinge in my hand puts to scorn all machinery"',
      B: '"the running blackberry would adorn the parlors of heaven"',
      C: '"I believe a leaf of grass is no less than the journey-work of the stars"',
      D: '"the tree-toad is a chef-d\'oeuvre for the highest"',
    },
    answer: 'C', isSPR: false,
    explanation: 'C most directly states the claim\'s thesis: a leaf of grass — among the most ordinary things — is equal to ("no less than") the journey-work of stars — cosmic and vast. This is the most explicit statement of cosmic equivalence between the small/ordinary and the grand. B elevates the blackberry to heaven — also good, but the cosmic register is explicit only in C. A inverts machine/hand in a surprising way but doesn\'t state cosmic equivalence. D calls the tree-toad a masterwork — elevates it, but "for the highest" is less direct than C\'s explicit comparison with stars.',
  },

  {
    id: 'ii_c_234', num: 234, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Climate scientists studying permafrost thaw in Siberia and northern Canada have found that as permafrost melts, the organic matter stored in it decomposes, releasing carbon dioxide and methane into the atmosphere. Methane is a particularly potent greenhouse gas — approximately 80 times more warming than CO₂ over a 20-year period. As warming causes permafrost to thaw, the resulting emissions accelerate warming, which thaws more permafrost, releasing more emissions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student argues that permafrost thaw represents a self-reinforcing feedback loop that could accelerate climate change beyond human-caused emissions alone. Which detail from the text best supports this argument?',
    choices: {
      A: 'Permafrost thaw releases both carbon dioxide and methane.',
      B: 'Methane is approximately 80 times more warming than CO₂ over a 20-year period.',
      C: 'As warming thaws permafrost, the resulting emissions accelerate warming, which thaws more permafrost, releasing more emissions.',
      D: 'Permafrost thaw is occurring in Siberia and northern Canada.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C explicitly describes the feedback loop mechanism: warming → thaw → emissions → more warming → more thaw → more emissions. This is the self-reinforcing cycle the student\'s argument claims. A identifies the gases released — relevant but doesn\'t describe the loop. B provides methane\'s potency — supports the loop\'s severity but not its self-reinforcing structure. D gives the locations — contextual, not mechanistic.',
  },

  {
    id: 'ii_c_235', num: 235, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The following text is from Mary Shelley\'s 1818 novel Frankenstein.\n\n"I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on. Even now my blood boils at the recollection of this injustice, but I was then — had I not suffered enough? — subdued to abject and dark despair. Despair! Who dared talk of that? The monster was not then dead; he breathed; he moved. Was I, then, the real monster? The thought terrified me."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student argues that Frankenstein registers the horror of his own moral failure by momentarily reversing the question of who is the real monster. Which quotation from the text best supports this claim?',
    choices: {
      A: '"I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on."',
      B: '"Even now my blood boils at the recollection of this injustice"',
      C: '"Was I, then, the real monster? The thought terrified me."',
      D: '"The monster was not then dead; he breathed; he moved."',
    },
    answer: 'C', isSPR: false,
    explanation: 'C is the exact site of the moral reversal the student describes: Frankenstein explicitly poses the question of whether he himself is the real monster, and registers it as terrifying — a moment of self-implicating horror. A describes Victor\'s own victimhood framing — positioning himself as abandoned, not as responsible. B describes his anger — reactive, not self-accusatory. D confirms the creature\'s survival — contextual, not the moral reversal.',
  },

  {
    id: 'ii_c_236', num: 236, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Neuroscientists studying the brain regions involved in decision-making under uncertainty have found that the anterior insular cortex is consistently activated when people experience feelings of regret or anticipate potential regret before a decision. Patients with damage to the insular cortex do not show the typical pattern of regret avoidance — they make riskier choices and are less affected by the emotional consequences of bad outcomes than healthy participants.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student argues that the insular cortex plays a causal role in regret-based decision-making, not merely a correlational one. Which detail from the text best supports this causal claim?',
    choices: {
      A: 'The anterior insular cortex is activated when people experience or anticipate regret.',
      B: 'Patients with insular cortex damage make riskier choices and are less affected by bad outcomes — showing that without the insular cortex, regret-based behavior is disrupted.',
      C: 'Regret avoidance is a consistent pattern in healthy adults making decisions under uncertainty.',
      D: 'The insular cortex is active both when experiencing regret and when anticipating it before a decision.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The student\'s claim is causal — the insular cortex causes regret-based decision-making. B provides the causal evidence: patients whose insular cortex is damaged show disrupted regret behavior — the region\'s removal alters the behavior, a standard criterion for causal inference. A shows correlation (activation with regret) — not causation. C describes healthy adult patterns — not a manipulation showing causality. D elaborates the correlation — still associational, not causal.',
  },

  {
    id: 'ii_c_237', num: 237, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'The following text is from James Baldwin\'s 1955 essay "Notes of a Native Son."\n\nI had not known my father very well. We had gotten on badly, partly because we shared, in our different fashions, the vice of stubborn pride. When he was dead I realized that I had hardly ever spoken to him. When he had been dead a long time I began to wish I had. It seems to be typical of life in America, where opportunities, real and fancied, are thicker than anywhere else on the globe, that the second generation has no time to talk to the first.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student claims that Baldwin transforms a personal estrangement into a broader observation about the particular character of American immigrant and generational experience. Which quotation from the text best supports this claim?',
    choices: {
      A: '"I had not known my father very well."',
      B: '"We had gotten on badly, partly because we shared, in our different fashions, the vice of stubborn pride."',
      C: '"When he had been dead a long time I began to wish I had."',
      D: '"It seems to be typical of life in America, where opportunities, real and fancied, are thicker than anywhere else on the globe, that the second generation has no time to talk to the first."',
    },
    answer: 'D', isSPR: false,
    explanation: 'D is the exact sentence where Baldwin pivots from personal narrative to collective observation — attributing his estrangement from his father to something "typical of life in America," linking it to American opportunity culture and the gap between first and second generations. This is the transformation from personal to broadly cultural. A, B, and C are all personal statements about the relationship between Baldwin and his father specifically — they do not make the broader claim.',
  },

  {
    id: 'ii_c_238', num: 238, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Political theorists studying populism have noted that populist movements define politics as a moral struggle between "the pure people" and a corrupt elite, rather than as a competition among legitimate interests. This framing has important implications for democratic governance: because populist leaders claim to embody the will of the people as a whole, they tend to regard political opposition not as legitimate disagreement but as _______ against the people, justifying measures to silence or delegitimize opponents.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A political theorist argues that the populist framing of politics as a moral struggle between a pure people and a corrupt elite is fundamentally anti-pluralist. Which detail from the text best supports this argument?',
    choices: {
      A: 'Populism defines politics as a moral struggle rather than a competition among legitimate interests.',
      B: 'Populist leaders claim to embody the will of the people as a whole.',
      C: 'Populist leaders regard opposition not as legitimate disagreement but as an act against the people, justifying measures to silence or delegitimize opponents.',
      D: 'Populism describes a corrupt elite as the opponent of the pure people.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The argument is that populism is anti-pluralist. Anti-pluralism means denying the legitimacy of multiple competing interests and perspectives. A directly states the anti-pluralist core: populism replaces "competition among legitimate interests" (pluralism) with a moral struggle (anti-pluralism). This is the definitional anti-pluralism claim. C describes a consequence — opposition being treated as treason — which follows from the anti-pluralist framing but is a consequence, not the definitional basis. B claims embodiment of the people\'s will — relevant but describes a mechanism, not the anti-pluralist structure. D describes the villain — not the structural anti-pluralism.',
  },

  {
    id: 'ii_c_239', num: 239, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'The following text is from Chimamanda Ngozi Adichie\'s 2009 TED talk "The Danger of a Single Story."\n\nI\'ve always felt that it is impossible to engage properly with a place or a person without engaging with all of the stories of that place or that person. The consequence of the single story is this: it robs people of dignity. It makes our recognition of our equal humanity difficult. It emphasizes how we are different rather than how we are similar.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student argues that Adichie presents the single story as a failure of perception that has ethical consequences for how we relate to others. Which quotation from the text best supports this claim?',
    choices: {
      A: '"I\'ve always felt that it is impossible to engage properly with a place or a person without engaging with all of the stories."',
      B: '"The consequence of the single story is this: it robs people of dignity."',
      C: '"It makes our recognition of our equal humanity difficult."',
      D: '"It emphasizes how we are different rather than how we are similar."',
    },
    answer: 'C', isSPR: false,
    explanation: 'C best supports both parts of the claim: "makes our recognition of our equal humanity difficult" identifies the single story as a perceptual failure (failure to recognize equal humanity) with a direct ethical consequence (impaired capacity for moral recognition of others). A describes the epistemic problem — engaging without all stories — but doesn\'t directly name an ethical consequence. B identifies dignity-robbing — ethical consequence, but doesn\'t explicitly frame it as a perceptual failure. D identifies a distortion of similarity/difference — an epistemic distortion, but less explicitly ethical than C.',
  },

  {
    id: 'ii_c_240', num: 240, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'The following text is from Søren Kierkegaard\'s 1843 work Either/Or, translated from Danish.\n\nI see it all perfectly; there are two possible situations — one can either do this or that. My honest opinion and my friendly advice is this: do it or do not do it — you will regret both.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'A student argues that Kierkegaard uses the structure of advice to expose the absurdity of seeking a rational resolution to existential choice. Which quotation from the text best supports this claim?',
    choices: {
      A: '"I see it all perfectly; there are two possible situations"',
      B: '"My honest opinion and my friendly advice is this"',
      C: '"do it or do not do it — you will regret both"',
      D: '"one can either do this or that"',
    },
    answer: 'C', isSPR: false,
    explanation: 'C is where the absurdity is fully revealed: the "advice" — the conventional resolution to a dilemma — turns out to be that both options lead to regret. The advice format promises rational guidance (choose this, avoid that) but delivers its negation (either way, regret). This is exactly where Kierkegaard exposes the absurdity of seeking rational resolution. B sets up the advice frame — creating the expectation that rational guidance is coming. A establishes the clarity of the situation. D states the binary choice. None of A, B, or D contains the payoff — the revelation that both paths end in regret — which is the whole point.',
  },

];
