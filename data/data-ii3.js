'use strict';

// data-ii3.js — Information & Ideas, 30 questions
// Central Ideas ×5, CoE-Text ×6, CoE-Quantitative ×5, Logical Completion ×7, Supporting Evidence ×7
// IDs: ii_c_091–ii_c_120  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_II3 = [

  // ── Central Ideas (5) ─────────────────────────────────────────────────────

  {
    id: 'ii_c_091', num: 91, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Octopuses are among the most intelligent invertebrates known to science. They can open jars, navigate mazes, use tools, and distinguish between individual humans by appearance. Despite this intelligence, octopuses are largely solitary animals that live for only one to two years. Researchers have noted a puzzle: most animals with high intelligence are social species that live long enough to build on learned experiences. Octopuses appear to have evolved intelligence through a different pathway — one not dependent on social learning or extended lifespan.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Octopuses are the most intelligent animals in the ocean.',
      B: 'Octopuses are highly intelligent despite lacking the social structures and longevity typically associated with high animal intelligence.',
      C: 'Octopuses evolved their intelligence specifically to hunt prey more effectively.',
      D: 'Animal intelligence always evolves in response to social pressures.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage presents octopus intelligence as a puzzle: high intelligence without sociality or longevity — the usual prerequisites. B correctly captures both the intelligence and the exception to the expected pattern. A claims octopuses are the most intelligent ocean animals — no such comparison is made. C attributes octopus intelligence to hunting — no such evolutionary explanation is given. D claims intelligence always evolves socially — the passage presents octopuses as a counterexample to this pattern.',
  },

  {
    id: 'ii_c_092', num: 92, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The Great Barrier Reef, the world\'s largest coral reef system, is made not of rock but of the calcium carbonate skeletons of billions of tiny coral polyps — animals, not plants. The polyps live in symbiosis with photosynthetic algae called zooxanthellae, which provide the coral with nutrients and give reefs their vivid colors. When ocean temperatures rise even slightly above normal for extended periods, corals expel their zooxanthellae in a stress response called "bleaching." Without their algae, corals lose both their color and their primary nutrient source, and will die if temperatures do not return to normal within weeks.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'The Great Barrier Reef is the largest natural structure on Earth.',
      B: 'Coral reefs are built by animals, not plants, and depend on a symbiotic relationship with algae that is fatally disrupted by elevated temperatures.',
      C: 'Coral bleaching can be reversed if human intervention occurs quickly enough.',
      D: 'Most ocean ecosystems are more vulnerable to temperature change than freshwater ecosystems.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage covers coral\'s animal nature, its symbiosis with zooxanthellae, and how elevated temperatures break that symbiosis fatally. B correctly captures all three elements. A claims largest natural structure — the passage says largest coral reef system, and this is a detail, not the main idea. C says bleaching can be reversed by human intervention — the passage says temperatures must return to normal, not that humans can intervene. D introduces a freshwater comparison the passage never makes.',
  },

  {
    id: 'ii_c_093', num: 93, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'The concept of "place cells" — neurons in the hippocampus that fire when an animal is in a specific physical location — was first described in rats by John O\'Keefe in 1971. Later work by May-Britt and Edvard Moser identified "grid cells" in the entorhinal cortex that fire in regular triangular lattice patterns across any environment, apparently providing a coordinate system. Together, place cells and grid cells form what researchers call the brain\'s GPS — a biological navigation system that constructs a spatial map of the environment and tracks the individual\'s position within it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'John O\'Keefe\'s discovery of place cells was more scientifically significant than the Mosers\' discovery of grid cells.',
      B: 'Place cells and grid cells together form a neural navigation system that maps the environment and tracks position within it.',
      C: 'The hippocampus and the entorhinal cortex are the only brain regions involved in spatial navigation.',
      D: 'All mammals use identical neural mechanisms for spatial orientation.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage introduces place cells, then grid cells, and concludes that together they form the brain\'s GPS — a navigation system for mapping environments and tracking position. B correctly integrates both discoveries into the main idea. A claims comparative significance — the passage presents both discoveries as contributing parts of one system. C claims these are the only regions — the passage does not make this exclusive claim. D generalizes to all mammals — the passage describes findings in rats and does not generalize universally.',
  },

  {
    id: 'ii_c_094', num: 94, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Sociologist C. Wright Mills introduced the concept of the "sociological imagination" as the capacity to understand personal troubles in terms of public issues — to see the connection between individual biography and the broader social and historical forces that shape it. Unemployment, for example, is not merely a personal failure when millions are unemployed; it is a structural condition produced by economic systems. The sociological imagination allows individuals to see their private experiences as products of forces larger than themselves, and enables social scientists to connect individual cases to broader patterns.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Mills believed that personal failures are always the result of structural economic conditions.',
      B: 'The sociological imagination is the capacity to connect personal experience to larger social and historical structures, reframing individual troubles as public issues.',
      C: 'Sociology is a more important discipline than psychology because it studies structural causes of behavior.',
      D: 'Unemployment is the most important social problem that sociological research addresses.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage defines the sociological imagination (connecting personal to structural), illustrates it with unemployment, and states its dual function: allowing individuals to see their lives differently and scientists to connect cases to patterns. B correctly captures the definition and its application. A claims Mills believed all personal failures are structural — the passage uses unemployment as one example, not a universal claim. C claims sociology is more important than psychology — no such comparison is made. D says unemployment is the most important problem — it is used as an illustration.',
  },

  {
    id: 'ii_c_095', num: 95, type: 'ii_central_ideas', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Historian Saidiya Hartman\'s concept of "critical fabulation" names a practice of historical writing that acknowledges and works within the limits of the archive: because the archives of slavery and colonialism were produced by those in power, they systematically omit, distort, or render invisible the experiences of enslaved and colonized people. Critical fabulation uses imagination and speculation — clearly labeled as such — to reconstruct lives that the archive refuses to tell. Rather than pretending to a positivist objectivity the archive cannot support, it makes the gaps and silences of the historical record legible as themselves historical evidence.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Hartman argues that the archives of slavery contain sufficient evidence to reconstruct any enslaved person\'s life if analyzed with sufficient care.',
      B: 'Critical fabulation is Hartman\'s method of using imagination within the limits of the archive to reconstruct lives the archive omits, treating the archive\'s gaps as evidence in themselves.',
      C: 'Hartman argues that traditional historical methods should be abandoned in favor of fiction.',
      D: 'Positivist historical methods are inadequate because they are used by historians who favor those in power.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly integrates the two key elements: critical fabulation uses imagination (clearly labeled) to work within archival limits, and it treats the archive\'s silences as themselves legible as historical evidence. A claims the archive is sufficient — the passage says it omits and distorts. C says Hartman wants to abandon history for fiction — she is developing a historical method, not abandoning the discipline. D attributes positivism\'s inadequacy to historian bias — the passage attributes it to what the archive can and cannot support.',
  },


  // ── CoE-Text (6) ──────────────────────────────────────────────────────────

  {
    id: 'ii_c_096', num: 96, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying bioluminescence — the production of light by living organisms — have found that the ability evolved independently in different lineages at least 50 separate times. In deep-sea environments where no sunlight penetrates, bioluminescence is the primary source of light. Deep-sea organisms use bioluminescent displays for a variety of functions, including attracting prey, communicating with potential mates, and confusing or deterring predators.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the claim that bioluminescence serves multiple distinct functions in deep-sea environments?',
    choices: {
      A: 'A study finding that bioluminescence evolved independently in at least 50 lineages',
      B: 'Observations showing that the same species uses bioluminescent displays differently when hunting, reproducing, and responding to predators',
      C: 'Data showing that deep-sea bioluminescent organisms produce more light than their shallow-water counterparts',
      D: 'Evidence that bioluminescence requires more metabolic energy than other light-producing mechanisms',
    },
    answer: 'B', isSPR: false,
    explanation: 'The claim is that bioluminescence serves multiple distinct functions (prey attraction, mate communication, predator deterrence). B directly supports this by showing that a single species uses its bioluminescence differently in different behavioral contexts — direct evidence of multiple functions. A supports the independent evolution claim, not the multiple-function claim. C compares light intensity across depths — relevant to the deep-sea context but not to the multiple-function claim. D describes metabolic cost — not relevant to functional diversity.',
  },

  {
    id: 'ii_c_097', num: 97, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Linguists studying language change have observed that words at the ends of sentences tend to shift in meaning and grammatical function more rapidly than words in other positions. This process, called "grammaticalization," often produces function words — words like "while," "although," and "because" — out of what were originally content words with full lexical meaning. The English word "while" began as a noun meaning "period of time" before shifting to its current function as a conjunction.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the claim that grammaticalization transforms content words into function words?',
    choices: {
      A: 'A study showing that speakers of different languages prefer different sentence structures',
      B: 'Historical records showing that "because" was originally a phrase meaning "by the cause," which over time fused and lost its original nominal meaning',
      C: 'Data showing that function words are used more frequently than content words in spoken English',
      D: 'Evidence that words at the ends of sentences are more likely to be stressed than those in other positions',
    },
    answer: 'B', isSPR: false,
    explanation: '"Because" starting as a nominal phrase ("by the cause") and losing its lexical meaning to become a conjunction is a direct example of a content word/phrase becoming a function word through grammaticalization. B directly supports the claim. A discusses cross-linguistic sentence structure preferences — not relevant to grammaticalization. C shows function words are more frequent — frequency does not explain transformation from content to function words. D discusses sentence-final stress — relevant to change rates but not to the content-to-function transformation claim.',
  },

  {
    id: 'ii_c_098', num: 98, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Psychologists studying "stereotype threat" have found that when people are reminded of a negative stereotype about a group they belong to before taking a test, their performance on that test declines — even among individuals who do not personally endorse the stereotype. Researchers propose that the awareness of the stereotype creates a cognitive burden: part of the individual\'s mental capacity is occupied with monitoring their performance and worrying about confirming the stereotype, leaving fewer resources for the test itself.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly undermine the proposed cognitive-burden explanation for stereotype threat effects?',
    choices: {
      A: 'An experiment finding that stereotype threat effects are eliminated when test-takers are given additional time to complete the exam',
      B: 'A study showing that stereotype threat effects persist even when participants are explicitly told not to think about the stereotype during the test',
      C: 'Evidence that stereotype threat does not affect performance on very simple tasks that require minimal cognitive resources',
      D: 'Data showing that people who strongly identify with the stereotyped group show larger stereotype threat effects than those with weaker group identification',
    },
    answer: 'C', isSPR: false,
    explanation: 'The cognitive-burden explanation holds that monitoring and worry consume working memory, reducing available capacity for the test. If stereotype threat effects disappear on simple tasks that require minimal cognitive resources, there is no capacity to drain — the burden explanation cannot apply there. C would undermine the explanation by showing the effect disappears exactly when the cognitive burden mechanism should still operate (reminder is present; just fewer resources needed). A — extra time could be explained by more time to overcome the burden. B — explicit instruction not to think likely increases intrusive thinking, consistent with the burden model. D — stronger identification showing larger effects is consistent with the burden model (more personal stake = more monitoring).',
  },

  {
    id: 'ii_c_099', num: 99, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Historian Yuval Noah Harari has argued that what distinguishes Homo sapiens from other animals is the ability to believe in and cooperate around "imagined realities" — things that exist only in collective belief, such as nations, corporations, human rights, and money. Unlike the factual realities that other animals can perceive, imagined realities exist only as long as people continue to believe in them and act accordingly. This capacity for collective fiction is, in Harari\'s account, the foundation of human civilization: it allows millions of strangers to cooperate in ways that no other species can achieve.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly challenge Harari\'s argument?',
    choices: {
      A: 'Evidence that some human rights — such as the right not to be tortured — are recognized across cultures with no contact with one another',
      B: 'Evidence that chimpanzees defer to dominant individuals who hold no physically enforced authority — a form of social hierarchy based on shared acknowledgment rather than force',
      C: 'Data showing that human money economies are older than previously thought, dating back 15,000 years',
      D: 'Research finding that beliefs in shared supernatural beings correlate with larger social group size in human societies',
    },
    answer: 'B', isSPR: false,
    explanation: 'Harari\'s claim is that cooperation around imagined realities — things that exist only in collective belief — distinguishes humans from other animals. B challenges this directly by offering evidence that chimpanzees also maintain social hierarchies based on shared acknowledgment rather than physical force — a form of collective belief about status that parallels human imagined realities. A supports Harari by showing cross-cultural recognition of imagined rights. C makes money older — a detail that does not challenge the core claim. D supports Harari by linking shared belief to large-group cooperation.',
  },

  {
    id: 'ii_c_100', num: 100, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosophers of science have proposed that scientific theories are never conclusively verified but can only be falsified — proven false by a single disconfirming observation. This "falsifiability criterion," associated with Karl Popper, holds that a theory is scientific only if it makes predictions specific enough to be contradicted by possible evidence. Theories that can be interpreted to be consistent with any possible evidence — such as certain psychoanalytic or astrological claims — are not falsifiable and therefore not genuinely scientific, regardless of how compelling their explanations seem.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support Popper\'s falsifiability criterion as a distinction between science and non-science?',
    choices: {
      A: 'A history showing that psychoanalytic practitioners have repeatedly revised their theories to accommodate cases that seemed to disconfirm them',
      B: 'Evidence that physicists often refuse to accept findings that contradict currently accepted theories',
      C: 'A study showing that scientists are more intelligent than practitioners of pseudoscience',
      D: 'Data showing that falsifiable theories tend to produce more practical applications than non-falsifiable ones',
    },
    answer: 'A', isSPR: false,
    explanation: 'Popper\'s criterion says non-scientific theories accommodate any evidence rather than making specific testable predictions. A directly illustrates this for psychoanalysis: practitioners revise their theories whenever disconfirming cases arise, making the theory consistent with any possible evidence — exactly what falsifiability says disqualifies a theory. B says physicists resist contradicting findings — this is about scientists\' psychology, not about whether theories are falsifiable. C uses intelligence as a distinguishing criterion — Popper\'s criterion is about theories\' logical structure, not practitioners\' intelligence. D says falsifiable theories produce better applications — this is an additional consequence, not a test of the demarcation criterion.',
  },

  {
    id: 'ii_c_101', num: 101, type: 'ii_coe_t', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Climate scientists studying the relationship between Arctic sea ice loss and mid-latitude weather patterns have proposed that as the Arctic warms faster than lower latitudes, the temperature gradient that drives the jet stream weakens. A weaker jet stream becomes more "wavy" — creating persistent high- and low-pressure systems that lock weather patterns in place, producing longer droughts, heat waves, and cold snaps than would occur with a stronger, more stable jet stream. The mechanism remains debated among atmospheric scientists.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the claim that Arctic warming weakens the jet stream in a way that produces persistent extreme weather?',
    choices: {
      A: 'Historical data showing that the Arctic has warmed approximately four times faster than the global average since 1980',
      B: 'Atmospheric models showing that as the Arctic-to-equator temperature gradient decreases, the amplitude of jet stream waves increases, and the time those waves remain stationary also increases',
      C: 'Records showing that the frequency of summer heat waves in Europe has increased over the same period that Arctic sea ice has declined',
      D: 'Evidence that polar vortex disruptions are more common during years with below-average Arctic sea ice extent',
    },
    answer: 'B', isSPR: false,
    explanation: 'The proposed mechanism has two steps: reduced temperature gradient → weaker, wavier jet stream → persistent extreme weather. B directly models both steps — the gradient decrease causes larger-amplitude, longer-stationary waves — providing mechanistic support for the entire causal chain. A establishes that the Arctic has warmed faster — necessary background but does not demonstrate the jet stream mechanism. C shows correlation between sea ice loss and European heat waves — suggestive but does not show the jet stream mechanism. D shows polar vortex disruptions correlate with sea ice loss — related but the polar vortex is a distinct phenomenon from the wavy-jet-stream mechanism.',
  },


  // ── CoE-Quantitative (5) ──────────────────────────────────────────────────

  {
    id: 'ii_c_102', num: 102, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying reading comprehension tested two groups of students: one that read a passage on paper and one that read the same passage on a screen. After reading, all students completed a comprehension test. The researchers hypothesized that students who read on paper would score higher than those who read on screen because paper reading promotes deeper processing.',
    table: 'Comprehension Test Scores (0–100)\n\nGroup         | Mean Score | Sample Size\n--------------+------------+------------\nPaper readers |     74.2   |    120\nScreen readers|     73.8   |    118',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice best describes how the data in the table relate to the researchers\' hypothesis?',
    choices: {
      A: 'The data support the hypothesis: paper readers scored meaningfully higher than screen readers.',
      B: 'The data neither clearly support nor refute the hypothesis: the difference between groups is negligible.',
      C: 'The data refute the hypothesis: screen readers scored higher than paper readers.',
      D: 'The data are consistent with the hypothesis because the sample sizes are different.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The paper readers scored 74.2 and screen readers 73.8 — a difference of 0.4 points on a 100-point scale with ~120 students per group. This is negligibly small and provides no meaningful support for the hypothesis. B correctly describes the data as neither supporting nor refuting. A says paper readers scored meaningfully higher — a 0.4-point difference is not meaningful. C says screen readers scored higher — paper readers actually scored marginally higher. D says different sample sizes are consistent with the hypothesis — sample size has no bearing on supporting a hypothesis about mean differences.',
  },

  {
    id: 'ii_c_103', num: 103, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A botanist studying the effects of different watering schedules on plant growth measured the average height of tomato plants after 8 weeks under three watering conditions: daily watering, watering every three days, and watering once per week. She predicted that daily watering would produce the tallest plants.',
    table: 'Average Tomato Plant Height After 8 Weeks\n\nWatering Schedule   | Average Height (cm)\n--------------------+--------------------\nDaily               |        42.3\nEvery 3 days        |        61.7\nOnce per week       |        38.1',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice best describes the relationship between the botanist\'s prediction and the data?',
    choices: {
      A: 'The data fully support the prediction: daily-watered plants were tallest.',
      B: 'The data partially support the prediction: daily-watered plants were taller than once-per-week plants but shorter than every-3-days plants.',
      C: 'The data do not support the prediction: daily-watered plants were not tallest.',
      D: 'The data are inconclusive because the differences between conditions are too small to be meaningful.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The botanist predicted daily watering would produce the tallest plants. The data show every-3-days watering produced the tallest plants (61.7 cm), while daily watering (42.3 cm) was intermediate and once-per-week (38.1 cm) was shortest. The prediction was not supported. C correctly identifies this. A says daily-watered plants were tallest — they were not. B says daily was taller than weekly but shorter than every-3-days — this is factually true but the framing "partially support" is wrong; the prediction was specifically that daily would be tallest. D says differences are too small — a 19.4 cm difference between daily and every-3-days is substantial.',
  },

  {
    id: 'ii_c_104', num: 104, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Economists studying the relationship between minimum wage increases and employment have debated whether raising the minimum wage reduces employment among low-wage workers. A research team studied employment changes in fast-food restaurants in counties on either side of a state border where one state raised its minimum wage and the adjacent state did not, using the adjacent-county pairs as a natural experiment.',
    table: 'Fast-Food Employment Change After Minimum Wage Increase\n\nLocation              | Employment Change (%)\n----------------------+----------------------\nTreated counties      |          +1.8\n(wage increase state) |\nControl counties      |          +0.9\n(no wage increase)    |',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice best describes what the data suggest about the relationship between minimum wage increases and fast-food employment in this study?',
    choices: {
      A: 'The minimum wage increase reduced fast-food employment in treated counties.',
      B: 'The minimum wage increase was associated with greater employment growth in treated counties than in adjacent control counties.',
      C: 'Fast-food employment remained unchanged in both treated and control counties.',
      D: 'The data show that minimum wage increases always increase fast-food employment.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Treated counties (wage increase) showed +1.8% employment growth; control counties (no wage increase) showed +0.9% — the treated counties grew more. B correctly identifies the association. A says the increase reduced employment — employment increased in treated counties. C says employment was unchanged — both groups show positive changes. D says the data prove minimum wage always increases employment — this single study does not establish a universal causal law.',
  },

  {
    id: 'ii_c_105', num: 105, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Ecologists tracking monarch butterfly populations at their overwintering sites in Mexico recorded the hectares of forest occupied by butterfly colonies each winter from 2010 to 2022. They predicted that conservation efforts begun in 2015, including milkweed restoration and reduced pesticide use, would reverse the population decline observed in previous years.',
    table: 'Monarch Butterfly Colony Area at Mexican Overwintering Sites\n\nYear  | Area (hectares)\n------+----------------\n2010  |      4.02\n2012  |      2.94\n2014  |      0.67\n2016  |      2.91\n2018  |      2.48\n2020  |      2.83\n2022  |      2.94',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice most accurately describes what the data suggest about the ecologists\' prediction?',
    choices: {
      A: 'The data fully support the prediction: populations recovered to pre-2010 levels after conservation began.',
      B: 'The data partially support the prediction: populations rebounded from the 2014 low after conservation began in 2015 but have not returned to 2010 levels and show year-to-year variability.',
      C: 'The data refute the prediction: populations continued to decline after conservation began.',
      D: 'The data are inconclusive because only two data points exist after 2015.',
    },
    answer: 'B', isSPR: false,
    explanation: 'After the 2014 low of 0.67 ha, post-2015 data show values of 2.91, 2.48, 2.83, and 2.94 — a clear recovery from the 2014 minimum. However, these figures remain well below the 2010 baseline of 4.02, and the data fluctuate year to year. B correctly captures this: partial support, with recovery from the low but not to baseline, and with variability. A says pre-2010 levels were restored — 2022\'s 2.94 ha is still below 2010\'s 4.02. C says populations continued to decline — they clearly rebounded from 2014. D says only two data points exist post-2015 — there are four: 2016, 2018, 2020, 2022.',
  },

  {
    id: 'ii_c_106', num: 106, type: 'ii_coe_q', domain: 'info_ideas', difficulty: 'hard',
    passage: 'A sleep researcher hypothesized that adults who sleep fewer than seven hours per night would show greater performance decline on a reaction-time task after five days of sleep restriction than adults who sleep seven or more hours per night. Participants were randomly assigned to either a sleep-restriction group (limited to six hours per night) or a control group (allowed to sleep as much as they wanted, averaging 8.2 hours) for five consecutive days.',
    table: 'Mean Reaction Time (milliseconds) — Reaction-Time Task\n\nGroup              | Day 1 (baseline) | Day 5\n-------------------+------------------+------\nSleep restriction  |       312        |  389\nControl            |       308        |  314',
    dualText: null, notes: null, noteTask: null, underline: null,
    question: 'Which choice most accurately uses the data to evaluate the researcher\'s hypothesis?',
    choices: {
      A: 'The data fully support the hypothesis: the sleep-restriction group\'s reaction time declined by 77 ms, compared to 6 ms in the control group.',
      B: 'The data do not support the hypothesis because the control group also showed some performance decline.',
      C: 'The data support the hypothesis only weakly because the baseline reaction times of the two groups were different.',
      D: 'The data are inconclusive because the control group\'s average sleep was not exactly seven hours.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The sleep-restriction group\'s reaction time worsened by 77 ms (312→389) while the control group changed by only 6 ms (308→314) — a large difference consistent with the hypothesis. A correctly uses the data to confirm the prediction. B says the control group\'s slight decline undermines support — a 6 ms change vs. 77 ms is negligible and does not negate the hypothesis. C says different baselines are a problem — the 4 ms baseline difference (312 vs. 308) is trivial relative to the 77 ms vs. 6 ms change. D says the control sleeping 8.2 hours rather than exactly 7 is a problem — the hypothesis is that 7+ hours protects performance; 8.2 hours exceeds this threshold.',
  },


  // ── Logical Completion (7) ────────────────────────────────────────────────

  {
    id: 'ii_c_107', num: 107, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'The mimic octopus of the Indo-Pacific can impersonate the appearance, movement, and behavior of other animals — including flatfish, lionfish, and sea snakes — in what researchers believe is a response to predation pressure. What makes the mimic octopus unusual is not that it mimics one dangerous species but that it appears to select which species to mimic based on the identity of the threat it faces. When threatened by a damselfish, for example, it mimics the sea snake, which preys specifically on damselfish. This selectivity suggests that the mimic octopus is not simply running a fixed behavioral program but ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'learns its mimicry behavior from other octopuses in the same habitat',
      B: 'assesses the specific threat and selects the most contextually appropriate impersonation',
      C: 'mimics the most toxic available species regardless of which predator is present',
      D: 'has developed a fixed hierarchical ranking of species to imitate based on general danger level',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage contrasts "not simply running a fixed behavioral program" with the damselfish-sea snake example of contextual selection. The logical completion names what it is doing instead of running a fixed program: evaluating the threat and selecting the appropriate response. B completes this contrast correctly. A introduces social learning from other octopuses — not supported by anything in the passage. C says it mimics the most toxic species regardless of threat — the passage explicitly says it selects based on the identity of the threat. D says it uses a fixed hierarchical ranking — the passage says it is not running a fixed program.',
  },

  {
    id: 'ii_c_108', num: 108, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Researchers studying memory consolidation have found that the brain replays experiences during sleep, particularly during slow-wave sleep, in a compressed form that allows the hippocampus to transfer information to long-term cortical storage. Students who sleep after studying perform better on memory tests than students who stay awake for the same period, even when total study time is held constant. This suggests that sleep is not merely a passive state of rest but ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'reduces the amount of new information the brain can process the following day',
      B: 'an active process that contributes to learning by consolidating recently acquired memories',
      C: 'produces different effects on memory depending on the type of material studied',
      D: 'eliminates the need for students to review material before examinations' ,
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage builds to the contrast "not merely passive rest but ___." The evidence — replay during sleep, better performance after sleeping than staying awake — supports completing this with an active, learning-relevant function. B correctly names sleep as an active process that consolidates memory. A says sleep reduces next-day processing capacity — opposite of the supportive evidence. C introduces variation by material type — not discussed. D eliminates the need to review — the passage supports sleep as beneficial, not as a replacement for study.',
  },

  {
    id: 'ii_c_109', num: 109, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'In 1889, when the Eiffel Tower was completed, it was widely derided by Parisian artists and intellectuals as an eyesore — a "truly tragic street lamp" and "a gigantic black factory chimney," in the words of its critics. The tower was originally intended to be dismantled after 20 years. Yet within decades of its construction it became the most visited monument in the world and is now inseparable from Parisian identity. The Eiffel Tower\'s history suggests that aesthetic judgments about new structures are ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'more reliable than other forms of cultural evaluation',
      B: 'not always reliable guides to a structure\'s long-term cultural significance',
      C: 'invariably negative when made by professional artists and intellectuals',
      D: 'shaped primarily by a structure\'s functional utility rather than its appearance',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage contrasts initial near-universal condemnation with eventual near-universal celebration. The logical conclusion is that early aesthetic judgments failed to predict long-term significance. B correctly completes this. A says aesthetic judgments are more reliable than other forms — the passage shows the opposite. C says professional aesthetic judgments are invariably negative — too strong; the passage gives one example. D says judgments are shaped by functional utility — the passage is about aesthetic reception, not utility.',
  },

  {
    id: 'ii_c_110', num: 110, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'medium',
    passage: 'When animals are exposed to a stimulus repeatedly without any positive or negative consequence, they gradually stop responding to it — a process called "habituation." Habituation is considered the simplest form of learning: the nervous system learns that a stimulus is neither rewarding nor harmful and reduces the resources devoted to responding to it. Critically, habituation is stimulus-specific: an animal habituated to one tone will still respond fully to a different tone at the same volume. This specificity suggests that habituation is ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'a form of sensory fatigue in which the relevant sensory organs become less sensitive overall',
      B: 'a learned adjustment to a specific stimulus rather than a general reduction in sensory responsiveness',
      C: 'found exclusively in vertebrate animals with complex nervous systems',
      D: 'more pronounced for auditory stimuli than for visual or tactile stimuli',
    },
    answer: 'B', isSPR: false,
    explanation: 'The stimulus-specificity evidence — habituated to one tone, still responds to a different tone — rules out general sensory fatigue and supports a stimulus-specific learned adjustment. B correctly completes this logic. A describes general sensory fatigue — explicitly ruled out by the different-tone response. C says it\'s found only in vertebrates — no such restriction is discussed. D claims auditory > visual/tactile — no cross-modality comparison is made.',
  },

  {
    id: 'ii_c_111', num: 111, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Behavioral economists have documented a phenomenon called "present bias": people systematically overvalue immediate rewards relative to future rewards, even when they know that waiting would produce a better outcome. When asked to choose between receiving $100 today and $110 in one week, most people choose the $100 today — even though they would confidently say in the abstract that a 10% weekly return is excellent. However, when asked to choose between $100 in 52 weeks and $110 in 53 weeks, the same people typically prefer to wait the extra week for $110. This inconsistency — different choices for the same time interval depending on when it begins — suggests that people do not discount future rewards at a constant rate but ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'become more patient as the amount of money involved increases',
      B: 'apply a much steeper discount to the near future than to delays that begin in the distant future',
      C: 'prefer smaller immediate rewards only when they are uncertain about receiving the larger reward later',
      D: 'discount future rewards at a constant rate that changes across demographic groups',
    },
    answer: 'B', isSPR: false,
    explanation: 'The inconsistency — impatient when the immediate option is today, patient when both options are a year away — is the signature of hyperbolic discounting: a very steep discount applied to delays involving the present, which flattens out for delays entirely in the future. B correctly identifies this. A says larger amounts increase patience — amount is held constant in both scenarios. C says preference for immediate rewards requires uncertainty — the passage presents certainty about both options. D says discounting is constant but varies demographically — the passage describes intra-individual inconsistency, not constant demographic variation.',
  },

  {
    id: 'ii_c_112', num: 112, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'The late Pleistocene megafauna extinction — the disappearance of mammoths, giant sloths, saber-toothed cats, and dozens of other large species across multiple continents roughly 10,000 to 50,000 years ago — has been attributed to two main causes: climate change at the end of the last glacial maximum, and the arrival of modern humans in previously unoccupied territories. One line of evidence bearing on this debate is the timing of extinctions across continents: in Africa, where hominins and large mammals coevolved over millions of years, megafauna extinctions are much less pronounced than in the Americas and Australia, where humans arrived relatively recently. This pattern suggests that ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'climate change was a more significant driver of megafauna extinctions than human hunting across all regions',
      B: 'African megafauna survived because Africa\'s climate changed less dramatically than the Americas or Australia',
      C: 'animals with a long evolutionary history of coexisting with hominid hunters had developed behavioral defenses, reducing their vulnerability relative to animals meeting humans for the first time',
      D: 'humans are exclusively responsible for all Pleistocene megafauna extinctions without any contribution from climate factors',
    },
    answer: 'C', isSPR: false,
    explanation: 'The geographic pattern — minimal extinction in Africa (long hominin coevolution), severe extinction in Americas and Australia (first human contact) — supports the conclusion that the difference is coevolutionary experience, not climate per se. C correctly identifies the logical completion: coevolution with hunters gave African megafauna time to develop anti-predator behaviors against human hunters. A says climate was more important across all regions — the geographic pattern is the opposite of what a climate explanation would predict. B says Africa had less climate change — no climate data for Africa vs. other continents is provided. D says humans are exclusively responsible — the passage acknowledges both causes and is drawing a relative conclusion.',
  },

  {
    id: 'ii_c_113', num: 113, type: 'ii_logical_completion', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Researchers studying income mobility in the United States have found that while absolute mobility — the likelihood that children earn more than their parents — has declined substantially over the past half century, it remains heavily influenced by geographic location. Children born in the San Jose, California metro area have a roughly 12.9% chance of rising from the bottom income quintile to the top, while children born in Charlotte, North Carolina have approximately a 4.4% chance of doing the same. The researchers found that the factors most predictive of mobility vary by region but include residential segregation, school quality, social capital, and family structure. The data suggest that upward mobility in the United States is ______.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice most logically completes the text?',
    choices: {
      A: 'primarily determined by individual effort and is therefore roughly equal across all regions',
      B: 'higher on average in the United States than in any other developed country',
      C: 'not a uniform national phenomenon but a highly place-dependent outcome shaped by local structural conditions',
      D: 'declining uniformly across all regions regardless of local policy differences',
    },
    answer: 'C', isSPR: false,
    explanation: 'The passage presents dramatic variation between San Jose (~12.9%) and Charlotte (~4.4%) and identifies local structural factors as most predictive. The logical completion names what this variation means: mobility is not uniform but place-dependent. C correctly captures this. A says mobility is equal across regions due to individual effort — the large geographic gap directly contradicts this. B claims U.S. mobility is highest globally — no international comparison is made. D says mobility is declining uniformly — the passage emphasizes regional variation, not uniformity.',
  },


  // ── Supporting Evidence (7) ───────────────────────────────────────────────

  {
    id: 'ii_c_114', num: 114, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'A marine biologist argues that cleaning stations — locations on coral reefs where small fish called "cleaner wrasse" remove parasites from larger client fish — are more than transactional services. She contends that cleaner wrasse recognize individual client fish and adjust their behavior based on prior interactions, suggesting a form of social memory and relationship maintenance that goes beyond simple service exchange.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the biologist\'s argument?',
    choices: {
      A: 'Cleaner wrasse visit more clients per day in areas of higher fish density',
      B: 'Cleaner wrasse that previously chased away a client fish spend more time grooming that fish on its next visit, consistent with a reconciliation behavior',
      C: 'Cleaner wrasse in captivity continue to perform cleaning behaviors even without the presence of parasites',
      D: 'The number of parasite species removed at cleaning stations varies by reef region',
    },
    answer: 'B', isSPR: false,
    explanation: 'The biologist argues for individual recognition and relationship maintenance based on prior interactions. B directly supports this by describing behavior (extra grooming after a prior conflict) that requires both individual recognition and memory of a specific prior interaction — precisely the argument. A supports the high-service-frequency pattern at cleaning stations — not about individual recognition. C shows cleaning behavior persists without parasites — not about individual recognition or memory. D shows parasite diversity — not about relationship maintenance.',
  },

  {
    id: 'ii_c_115', num: 115, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'easy',
    passage: 'Historians studying the Black Death (1347–1353) have argued that the plague\'s aftermath reshaped European society by dramatically increasing the bargaining power of survivors. With a third to half of the population dead, labor was scarce and the survivors — especially peasants and craftspeople — could demand higher wages and better conditions than had been possible before the epidemic. One historian argues specifically that the plague accelerated the decline of feudal serfdom in Western Europe by making it economically unsustainable for landowners to compel unpaid labor from a suddenly scarce workforce.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the historian\'s argument about the plague and feudal serfdom?',
    choices: {
      A: 'Records showing that plague mortality was higher in densely populated cities than in rural areas',
      B: 'Legal records from English manors in the 1350s and 1360s showing a marked increase in serfs successfully petitioning for release from their bonds, citing landowners\' need for their continued labor',
      C: 'Evidence that the Black Death spread primarily along trade routes connecting major European port cities',
      D: 'Church records showing that plague victims were disproportionately poor and elderly',
    },
    answer: 'B', isSPR: false,
    explanation: 'The argument is that labor scarcity after the plague made serfdom economically unsustainable — serfs could negotiate better terms because landowners needed them. B directly supports this: legal records of serfs successfully petitioning for release because landowners needed their labor are direct evidence that the mechanism the historian proposes (scarce labor → leverage for serfs) operated in practice. A shows urban vs. rural mortality differences — not about serfdom. C shows spread along trade routes — not about serfdom. D shows demographics of plague victims — not about serfdom.',
  },

  {
    id: 'ii_c_116', num: 116, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Cognitive scientists studying the "Dunning-Kruger effect" have found that people with limited knowledge in a domain tend to overestimate their competence, while experts tend to be more accurately calibrated or even slightly underestimate their relative standing. The proposed explanation is that the skills needed to perform well in a domain are the same skills needed to evaluate performance — so novices lack both competence and the metacognitive ability to recognize their incompetence.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly challenge the proposed explanation for the Dunning-Kruger effect?',
    choices: {
      A: 'A cross-cultural study finding that the Dunning-Kruger effect is observed in societies with different educational systems',
      B: 'An experiment in which novices are given accurate performance feedback before making self-assessments and still overestimate their competence by the same amount as novices who received no feedback',
      C: 'A study finding that experts\' self-assessments become more accurate when they are reminded to consider how their performance compares to peers',
      D: 'Evidence that overconfidence among novices is most pronounced for skills they have recently learned rather than skills they have never studied',
    },
    answer: 'B', isSPR: false,
    explanation: 'The proposed explanation is that novices overestimate because they lack the metacognitive skills to recognize incompetence. B challenges this directly: if novices still overestimate even after receiving accurate feedback (which should bypass the metacognitive deficit by providing the evaluation externally), then the metacognitive-deficit explanation is insufficient — something else must be driving the overconfidence. A shows cross-cultural replication — supports the effect\'s generality but not the proposed explanation. C shows experts improve with prompting — consistent with calibration but not about novice metacognition. D says overconfidence is pronounced for recently learned skills — could be consistent with the metacognitive explanation.',
  },

  {
    id: 'ii_c_117', num: 117, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'medium',
    passage: 'Literary scholar bell hooks argued that the mainstream feminist movement of the 1960s and 1970s, led primarily by white, middle-class women, framed its central problem as the boredom and frustration of women confined to the domestic sphere. This framing, hooks contended, excluded the experience of Black women and poor women, who had always worked — often at back-breaking labor — and for whom domestic confinement was a privilege they had never known. The feminist movement\'s agenda thus addressed the specific grievances of a narrow demographic while presenting itself as speaking for all women.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which piece of evidence, if true, would most directly support hooks\'s argument?',
    choices: {
      A: 'Statistics showing that women\'s workforce participation increased significantly in the decades following the feminist movement of the 1960s and 1970s',
      B: 'Feminist movement literature from the 1960s and 1970s that focuses almost exclusively on the frustrations of college-educated women with careers unfulfilling relative to their education, with little mention of low-wage women\'s working conditions',
      C: 'Data showing that the gender wage gap was larger for Black women than for white women in the 1960s',
      D: 'Evidence that feminist leaders in the 1960s made public statements supporting civil rights legislation',
    },
    answer: 'B', isSPR: false,
    explanation: 'Hooks argues the movement\'s framing excluded non-white and working-class women by focusing on the frustrations of privileged domestic confinement. B directly supports this by showing that the movement\'s own literature focused on college-educated women\'s professional frustrations with little attention to low-wage working women — direct textual evidence of the exclusionary framing hooks describes. A shows workforce participation increased — this is an outcome, not evidence of the framing\'s exclusionary character. C shows the wage gap was larger for Black women — relevant context but doesn\'t directly show the movement ignored this. D shows feminist leaders supported civil rights — compatibility with civil rights does not show the movement\'s framing included working-class and Black women\'s specific concerns.',
  },

  {
    id: 'ii_c_118', num: 118, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Researchers studying neural plasticity in adult brains have challenged the once-dominant view that the adult brain is a fixed structure incapable of generating new neurons. Evidence from studies of the hippocampus suggests that neurogenesis — the birth of new neurons — continues into adulthood and is stimulated by exercise, enriched environments, and learning. Some researchers have proposed that adult hippocampal neurogenesis plays a critical role in pattern separation: the ability to distinguish between highly similar memories and encode new experiences as distinct rather than merging them with existing memories.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly support the claim that adult hippocampal neurogenesis is specifically involved in pattern separation?',
    choices: {
      A: 'A study showing that blocking neurogenesis in adult mice does not affect their performance on tasks requiring the recall of well-established memories but significantly impairs their ability to distinguish between nearly identical spatial environments',
      B: 'Evidence that exercise increases both neurogenesis rates and overall hippocampal volume in adult humans',
      C: 'A study finding that humans who engage in more learning activities throughout adulthood show slower cognitive decline in old age',
      D: 'Research showing that the rate of neurogenesis in the hippocampus is higher in younger adults than in older adults',
    },
    answer: 'A', isSPR: false,
    explanation: 'The claim is that neurogenesis is specifically involved in pattern separation. A directly tests this causal claim: blocking neurogenesis selectively impairs the ability to distinguish nearly identical environments (pattern separation) while leaving established memory recall intact. This specific impairment — precisely the function proposed — directly supports the hypothesis. B shows exercise increases both neurogenesis and volume — relevant background but doesn\'t test the specific pattern-separation claim. C links learning activities to slower cognitive decline — too broad to specifically support pattern separation. D shows age-related neurogenesis decline — interesting background but doesn\'t connect neurogenesis to pattern separation specifically.',
  },

  {
    id: 'ii_c_119', num: 119, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Economists studying the long-run effects of colonial institutions have argued that the type of colonialism established in a territory — whether extraction-focused, with a small settler population and coercive labor institutions, or settlement-focused, with large European immigration and property rights protecting settlers — has persistent effects on economic development decades and even centuries after independence. The argument is that extraction colonies created institutions designed to channel wealth to a small elite, while settlement colonies created inclusive institutions that protected a broader population\'s rights and incentivized investment. These institutional differences have proven remarkably durable.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding would most directly support the argument that colonial institutional type has persistent effects on economic development?',
    choices: {
      A: 'A study showing that countries with more natural resources had higher rates of colonial extraction',
      B: 'Economic historians\' finding that in 1900, extraction colonies had lower per capita incomes than settlement colonies — a difference already visible at that time',
      C: 'Evidence that countries with higher rates of European settler mortality during the colonial period subsequently adopted more extraction-focused colonial institutions',
      D: 'A cross-national study finding that former settlement colonies have significantly higher per capita incomes, better-functioning legal institutions, and lower corruption levels today — and that these differences persist even after controlling for geography, natural resources, and other factors',
    },
    answer: 'D', isSPR: false,
    explanation: 'The argument is that institutional type has persistent effects on development long after independence. D directly supports this: current outcomes (income, institutions, corruption) that differ by colony type and persist after controlling for confounders are precisely the persistent institutional effect the argument describes. A shows natural resources correlate with extraction — relevant to why extraction colonies were created but not to their persistent effects on development. B shows the gap existed in 1900 — shows early divergence but not persistence after independence. C shows settler mortality led to extraction institutions — this is background on how institutions were determined, not evidence of their persistence.',
  },

  {
    id: 'ii_c_120', num: 120, type: 'ii_supporting_evidence', domain: 'info_ideas', difficulty: 'hard',
    passage: 'Philosopher and neuroscientist Patricia Churchland has argued against the view that folk psychological concepts — beliefs, desires, intentions — pick out real neural kinds. She predicts that as neuroscience advances, folk psychology will be displaced by a neuroscientific vocabulary that more accurately describes what is actually happening in brains. This "eliminative materialism" holds that folk psychological categories are not merely incomplete but fundamentally miscategorize mental reality, in the same way that pre-scientific "caloric fluid" turned out not to refer to any real thing in chemistry.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which finding, if true, would most directly challenge eliminative materialism as Churchland describes it?',
    choices: {
      A: 'Brain imaging studies showing that a consistent neural signature can be identified whenever a participant reports having formed a belief about a factual matter, and that this signature reliably predicts belief-consistent behavior across diverse contexts',
      B: 'Evidence that the development of cognitive neuroscience has proceeded faster than Churchland predicted',
      C: 'Research showing that folk psychological terms vary across languages and cultures',
      D: 'Data showing that patients with damage to prefrontal regions have impaired decision-making despite intact sensory processing',
    },
    answer: 'A', isSPR: false,
    explanation: 'Eliminative materialism claims that folk psychological categories like "belief" do not pick out real neural kinds and will be replaced. A directly challenges this: if there is a consistent, behaviorally predictive neural signature corresponding specifically to "belief," then "belief" does pick out a real neural kind — the opposite of the eliminativist prediction. B says neuroscience developed faster — does not address whether folk categories are real. C says folk terms vary cross-culturally — cross-cultural variation in vocabulary is not evidence that the categories fail to pick out neural kinds. D shows prefrontal damage impairs decisions — shows brain-decision links but is not specific to whether folk psychological categories are the right level of description.',
  },

];
