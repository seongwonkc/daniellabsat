'use strict';

// data-cs5.js — Craft & Structure, 30 questions
// WiC ×6, Precise Word ×5, Main Purpose ×4, Structure ×3, Function ×6, Cross-Text ×6
// IDs: cs_c_151–cs_c_180  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_CS5 = [

  // ── WiC (6) ───────────────────────────────────────────────────────────────

  {
    id: 'cs_c_151', num: 151, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Edith Wharton\'s 1905 novel The House of Mirth.\n\nShe was so evidently the victim of the civilization which had produced her, that the links of her bracelet seemed like manacles chaining her to her fate.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "manacles" most nearly mean?',
    choices: { A: 'decorative jewelry made from precious metals', B: 'metal restraints used to bind a prisoner\'s wrists', C: 'symbolic tokens of social obligation', D: 'pieces of armor worn for protection' },
    answer: 'B', isSPR: false,
    explanation: 'Wharton uses "manacles" — handcuffs or wrist shackles — as a metaphor: the bracelet\'s links look like the chains that bind a prisoner. B correctly identifies manacles as metal restraints. A ("decorative jewelry") describes what a bracelet is, not what manacles are. C ("social obligation tokens") describes the metaphorical implication rather than the literal meaning of "manacles." D ("armor") is unrelated.',
  },

  {
    id: 'cs_c_152', num: 152, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Gustave Flaubert\'s 1857 novel Madame Bovary, translated from French.\n\nEverything immediately surrounding her — boring countryside, imbecile petty bourgeoisie, the mediocrity of existence — seemed to her exceptional, particular to herself, her misfortune, and she carried it within her, consoled by its bitterness, finding in her unhappiness a certain sickly voluptuousness.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "voluptuousness" most nearly mean?',
    choices: { A: 'extravagant physical luxury and comfort', B: 'a pleasurable self-indulgence; sensuous satisfaction', C: 'an intense longing for something unattainable', D: 'an attitude of rebellious defiance' },
    answer: 'B', isSPR: false,
    explanation: '"Sickly voluptuousness" — Emma finds a kind of sensuous, self-indulgent satisfaction in her unhappiness. B correctly identifies voluptuousness as pleasurable self-indulgence. A ("physical luxury") is a related meaning but too focused on material comfort — Emma\'s voluptuousness is psychological. C ("longing for the unattainable") describes a different aspect of Emma\'s character. D ("rebellious defiance") has no support in the passage.',
  },

  {
    id: 'cs_c_153', num: 153, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Zora Neale Hurston\'s 1937 novel Their Eyes Were Watching God.\n\nShe had been waiting a long time for something, and it had come at last. She felt like someone had handed her a yard of silk. It felt right to be here. She felt the immensity of it. This was her house and she owned it. She was one with it. In fact, she was it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "immensity" most nearly mean?',
    choices: { A: 'large physical size or spatial extent', B: 'the overwhelming significance or magnitude of something', C: 'a feeling of confusion and disorientation', D: 'a state of complete physical exhaustion' },
    answer: 'B', isSPR: false,
    explanation: '"She felt the immensity of it" — the "it" refers not to a large physical space but to the meaning and significance of this moment: owning her own home, becoming one with it, being it. B correctly captures immensity as overwhelming significance or magnitude. A ("large physical size") is the literal spatial meaning but the passage is about psychological and emotional magnitude. C ("confusion") contradicts the tone of arrival and completion. D ("exhaustion") has no textual support.',
  },

  {
    id: 'cs_c_154', num: 154, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Fyodor Dostoevsky\'s 1880 novel The Brothers Karamazov, translated from Russian.\n\n"I do not want harmony. From love for humanity I do not want it. I would rather remain with my unavenged suffering and unsatisfied indignation, even if I were wrong. Besides, too high a price is asked for harmony; it\'s beyond our means to pay so much to enter on it."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "indignation" most nearly mean?',
    choices: { A: 'a feeling of deep melancholy and grief', B: 'anger or resentment at what is perceived as unjust', C: 'a desire for revenge or retribution', D: 'shame resulting from personal failure' },
    answer: 'B', isSPR: false,
    explanation: '"Unsatisfied indignation" — Ivan refuses to surrender his anger at injustice even for the sake of cosmic harmony. B correctly identifies indignation as anger or resentment at perceived injustice. A ("melancholy") is a different emotional register — Ivan is angry, not sorrowful. C ("desire for revenge") is related but distinct — indignation is the feeling of anger at injustice; revenge desire is a possible consequence. D ("shame from failure") is incorrect — Ivan\'s feeling is directed outward at injustice, not inward at himself.',
  },

  {
    id: 'cs_c_155', num: 155, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from William Faulkner\'s 1929 novel The Sound and the Fury.\n\nIt is a tale told by an idiot, full of sound and fury, signifying nothing. That was not what he said. He said it is a tale told by an idiot. Which was not what I said, either, because I said he had no business being there at all. But I was wrong. That it was a tale told by an idiot, full of sound and fury, signifying nothing — that was a judgment that was a more exact description.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "judgment" most nearly mean?',
    choices: { A: 'a formal legal verdict', B: 'an act of condemning someone', C: 'an evaluative assessment or opinion', D: 'the capacity for good decision-making' },
    answer: 'C', isSPR: false,
    explanation: '"That was a judgment that was a more exact description" — the character is calling the Shakespeare quotation an evaluative assessment that more precisely captures the situation being described. C correctly identifies judgment here as an evaluative assessment or opinion. A ("formal legal verdict") requires a legal context. B ("condemnation") would describe a negative moral judgment specifically — the passage does not indicate moral condemnation. D ("capacity for good decision-making") is a different sense of "judgment."',
  },

  {
    id: 'cs_c_156', num: 156, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from James Joyce\'s 1916 novel A Portrait of the Artist as a Young Man.\n\nHis soul had arisen from the grave of boyhood, spurning her graveclothes. Yes! Yes! Yes! He would create proudly out of the freedom and power of his soul, as the great artificer whose name he bore, a living thing, new and soaring and beautiful, impalpable, imperishable.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "impalpable" most nearly mean?',
    choices: { A: 'impossible to understand or comprehend', B: 'incapable of being touched or grasped physically; intangible', C: 'impossible to destroy or damage', D: 'lacking emotional depth or sensitivity' },
    answer: 'B', isSPR: false,
    explanation: '"Impalpable, imperishable" — Joyce pairs the intangible quality (impalpable) with the indestructible quality (imperishable). B correctly identifies impalpable as incapable of being physically touched or grasped — the work of art transcends material form. A ("impossible to understand") conflates impalpable with incomprehensible. C ("impossible to destroy") is the meaning of "imperishable" — the word immediately following. D ("lacking emotional depth") is unrelated to the word\'s meaning.',
  },


  // ── Precise Word (5) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_157', num: 157, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'When a volcano erupts explosively, it releases not only lava but enormous quantities of ash, gases, and pyroclastic flows — fast-moving currents of hot gas and rock. The 1815 eruption of Mount Tambora in Indonesia was so powerful that it _______ enough material into the upper atmosphere to block sunlight globally, causing the "Year Without a Summer" in 1816.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'absorbed', B: 'ejected', C: 'dissolved', D: 'collected' },
    answer: 'B', isSPR: false,
    explanation: '"Ejected" most precisely describes the volcanic action of explosively expelling material into the atmosphere. "Absorbed" is the opposite direction of movement. "Dissolved" implies material being broken down in a liquid. "Collected" implies accumulation rather than explosive expulsion.',
  },

  {
    id: 'cs_c_158', num: 158, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Ancient Rome\'s legal system laid the foundation for most modern Western legal traditions. Roman jurists developed concepts that _______ legal practice to this day: the distinction between public and private law, the presumption of innocence, and the right of individuals to be heard before judgment.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'contradict', B: 'complicate', C: 'predate', D: 'inform' },
    answer: 'D', isSPR: false,
    explanation: '"Inform" most precisely names the relationship: Roman concepts shape and provide the basis for modern legal practice. "Contradict" means oppose — the opposite of forming a foundation. "Complicate" implies the concepts make modern practice harder rather than providing its basis. "Predate" simply means came before — true but too narrow, not capturing the active influence.',
  },

  {
    id: 'cs_c_159', num: 159, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The widespread adoption of the railroad in the nineteenth century did not merely accelerate the movement of goods and people — it _______ the very concept of time. Before railways, towns set their clocks by local solar noon, producing dozens of incompatible local times across a country. Railway scheduling required a single, coordinated standard time, which became the model for the global time zone system.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'preserved', B: 'observed', C: 'standardized', D: 'questioned' },
    answer: 'C', isSPR: false,
    explanation: '"Standardized" most precisely captures what happened: the railroad transformed the concept of time by imposing a uniform standard, replacing incompatible local times. "Preserved" implies keeping the existing local-time system. "Observed" implies noticing or following existing time, not transforming it. "Questioned" implies philosophical doubt about time, not practical standardization.',
  },

  {
    id: 'cs_c_160', num: 160, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Literary critics studying oral poetry have found that bards reciting epics like the Iliad and the Odyssey did not memorize fixed texts but _______ each performance using a repertoire of stock phrases, formulaic epithets, and narrative modules that could be combined and adapted to fit the rhythm and occasion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'transcribed', B: 'composed', C: 'translated', D: 'recited' },
    answer: 'B', isSPR: false,
    explanation: '"Composed" most precisely captures the process: bards created each performance in the moment from modular components — they composed, rather than reproduced a fixed text. "Transcribed" implies writing down an existing text. "Translated" implies converting from one language to another. "Recited" implies reproducing a fixed, memorized text — exactly what the passage says they did not do.',
  },

  {
    id: 'cs_c_161', num: 161, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The philosophical tradition of pragmatism, developed by William James and John Dewey, holds that the meaning and truth of a proposition are determined not by its correspondence to some abstract reality but by its _______ consequences — what difference it makes to believe it, how it functions in guiding action.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'moral', B: 'emotional', C: 'practical', D: 'rhetorical' },
    answer: 'C', isSPR: false,
    explanation: '"Practical" most precisely names what pragmatism emphasizes: consequences for action, what difference believing something makes in practice. The word is also the root of "pragmatism," making it the most technically precise choice. "Moral" is too narrow — pragmatism is about consequences for action generally, not only moral ones. "Emotional" focuses on feeling rather than action guidance. "Rhetorical" focuses on persuasive effect, not practical function in guiding action.',
  },


  // ── Main Purpose (4) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_162', num: 162, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Harriet Beecher Stowe\'s 1852 novel Uncle Tom\'s Cabin.\n\n"I was a fool to think I could make anything good out of such a life as mine," said George, bitterly. Marie\'s heart was evidently touched; for a moment, she seemed almost human. "I\'m sorry for you, George," said she. "Poor fellow! It is a hard thing — I suppose — to be a slave." George started, and looked up with a kind of wondering surprise. "I had forgotten you were a slave," said Marie, carelessly; "I always think of you as different — somehow."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of this passage?',
    choices: {
      A: 'To portray George\'s grief over his enslaved condition and Marie\'s careless dismissal of it',
      B: 'To suggest that Marie is a compassionate figure who understands George\'s suffering',
      C: 'To show that George and Marie have developed a genuine friendship that transcends social class',
      D: 'To demonstrate that slavery was an accepted and unremarkable institution in the antebellum South',
    },
    answer: 'A', isSPR: false,
    explanation: 'The passage shows George\'s bitterness about his enslaved life, Marie\'s brief moment of apparent sympathy, and then her careless "I had forgotten you were a slave" — which reveals that her "compassion" immediately evaporates into thoughtlessness. A correctly identifies the double movement: George\'s grief and Marie\'s dismissal. B claims Marie is genuinely compassionate — her final line reveals the opposite. C claims a transcendent friendship — the passage shows the opposite of equality. D claims slavery is presented as unremarkable — George\'s bitterness shows it is very much remarked upon.',
  },

  {
    id: 'cs_c_163', num: 163, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Ecologists have debated whether large predators should be reintroduced to ecosystems from which they have been removed. Proponents cite the concept of "trophic cascades": the reintroduction of wolves to Yellowstone in 1995 is said to have altered elk grazing patterns, allowed riparian vegetation to recover, stabilized riverbanks, and even changed the physical course of rivers. Critics caution that Yellowstone\'s wolf reintroduction has been narratively simplified — the changes in elk behavior and vegetation resulted from multiple interacting factors, and similar experiments have not produced comparable results in other ecosystems.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that large predator reintroduction is the most effective conservation strategy available',
      B: 'To describe the trophic cascade concept and complicate its application by noting that the most cited example may be overstated',
      C: 'To explain the specific mechanisms by which wolves alter elk behavior in grassland ecosystems',
      D: 'To argue that Yellowstone\'s wolf reintroduction was an ecological failure',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the two-part structure: introduce the trophic cascade concept with Yellowstone as the cited example, then complicate it with the critics\' caution that the narrative has been simplified and results haven\'t replicated. A advocates for predator reintroduction as the best strategy — the passage presents a debate. C explains mechanisms specifically — the passage describes outcomes but is more interested in the debate. D says Yellowstone was a failure — the critics don\'t say this, they say the story has been oversimplified.',
  },

  {
    id: 'cs_c_164', num: 164, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Karl Marx and Friedrich Engels\'s 1848 pamphlet The Communist Manifesto, translated from German.\n\nA spectre is haunting Europe — the spectre of Communism. All the Powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Czar, Metternich and Guizot, French Radicals and German police-spies. Where is the party in opposition that has not been decried as Communistic by its opponents in power? Where the Opposition that has not hurled back the branding reproach of Communism, against the more advanced opposition parties, as well as against its reactionary adversaries?',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of this passage?',
    choices: {
      A: 'To describe the specific policies of the Communist movement that European governments feared',
      B: 'To establish that Communism is a recognized and feared political force across Europe, using the breadth of opposition as evidence of its significance',
      C: 'To criticize the Pope, the Czar, and European governments for their political repression',
      D: 'To propose a formal alliance between Communist parties across European nations',
    },
    answer: 'B', isSPR: false,
    explanation: 'Marx and Engels open by establishing the spectre of Communism as a force so threatening that vastly different political actors — Pope and Czar, radicals and police-spies — have united against it. The rhetorical questions reinforce this: everyone uses "Communist" as a label against opponents. B correctly identifies this as establishing Communism\'s recognized significance through the universality of its opponents\' fear. A claims specific policies are described — the passage does not describe policies. C claims the focus is criticism of specific rulers — they are examples, not the subject. D proposes an alliance — the passage makes an observation, not a proposal.',
  },

  {
    id: 'cs_c_165', num: 165, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Archaeologist Timothy Pauketat has argued that the city of Cahokia — a pre-Columbian settlement near present-day St. Louis that reached a population of perhaps 20,000 by 1100 CE — represents not a gradual development but a "Big Bang": an extraordinarily rapid urbanization that transformed a dispersed agricultural population into a densely organized city within a generation. Pauketat contends that this compression challenges models of social complexity that assume slow, incremental change and requires instead an account of the specific events, leaders, and ideological transformations that triggered sudden reorganization.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To present evidence that Cahokia was the largest pre-Columbian city in North America',
      B: 'To summarize Pauketat\'s argument that Cahokia\'s rapid urbanization challenges incremental models of social complexity and demands event-based explanation',
      C: 'To compare Cahokia\'s development with that of other pre-Columbian cities in the Mississippi Valley',
      D: 'To argue that all pre-Columbian cities underwent rapid rather than gradual development',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures both components: the empirical claim (Cahokia urbanized in a generation, not gradually) and its theoretical implication (challenges incremental complexity models, requires event-based explanation). A focuses on Cahokia\'s size — the passage does not compare it with other cities in terms of largest. C compares Cahokia with other Mississippi Valley cities — no comparison is made. D generalizes Pauketat\'s finding to all pre-Columbian cities — Pauketat\'s argument is specifically about Cahokia.',
  },


  // ── Structure (3) ─────────────────────────────────────────────────────────

  {
    id: 'cs_c_166', num: 166, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Crows are among the most cognitively sophisticated non-primate animals known. They make and use tools, solve multi-step problems, remember human faces, and hold grudges against people who have treated them negatively. They also demonstrate a behavior called "metacognition" — awareness of one\'s own knowledge states — by reliably seeking more information when uncertain rather than guessing, which was once thought to be exclusively a human or great-ape capacity.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It makes a general claim about crows, supports it with examples of cognitive abilities, and highlights the most surprising ability by noting it challenges a prior assumption.',
      B: 'It argues that crows are more intelligent than great apes by listing comparable cognitive abilities.',
      C: 'It describes the evolution of crow intelligence from primitive tool use to complex metacognition.',
      D: 'It presents competing scientific claims about whether non-human animals can possess metacognition.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the structure: general claim (cognitively sophisticated), supporting examples (tools, problem-solving, face recognition, grudges), highlighted surprising ability (metacognition, which was thought to be exclusively human/ape). B claims crows are more intelligent than great apes — no such comparison is made. C describes an evolutionary narrative not present in the passage. D presents competing claims — the passage does not describe a debate about metacognition but reports the finding.',
  },

  {
    id: 'cs_c_167', num: 167, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Alexis de Tocqueville\'s 1835 work Democracy in America, translated from French.\n\nWhen all the privileges of birth and fortune are abolished, when all professions are accessible to all, and a man\'s own energies may place him at the top of any one of them, an easy and unbounded career seems open to his ambition and he will readily persuade himself that he is born to no common destiny. But this is an erroneous view, which experience corrects daily.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes the conditions of democratic equality, presents the expectation of unlimited advancement those conditions generate, and then identifies that expectation as an error.',
      B: 'It celebrates democratic equality as the foundation of individual ambition and personal achievement.',
      C: 'It argues that birth privileges should be replaced by a merit-based system to ensure equal opportunity.',
      D: 'It traces the historical development of democratic ideals from Enlightenment philosophy to practical governance.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: description of democratic conditions (no birth or fortune privileges), the expectation generated (unlimited career open to ambition), and the correction (this view is "erroneous" and experience corrects it). B claims Tocqueville celebrates democracy — he identifies an error in the democratic expectation. C claims advocacy for a merit system — Tocqueville is describing conditions, not prescribing reform. D traces a historical development not present in this passage.',
  },

  {
    id: 'cs_c_168', num: 168, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The "resource curse" hypothesis holds that countries with abundant natural resources — oil, diamonds, minerals — tend to have weaker economic growth, less democratic governance, and more corruption than resource-poor countries. Early versions of the theory attributed this to Dutch Disease: the influx of resource revenues appreciates the exchange rate, making other exports uncompetitive and deindustrializing the broader economy. Later theorists emphasized political economy: resource wealth allows governments to fund themselves without taxing citizens, reducing accountability, and creating rent-seeking incentives that crowd out productive investment. Empirical tests of the resource curse have produced mixed results, with some studies finding the predicted negative effects and others finding that institutional quality, not resources per se, determines outcomes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It states the resource curse hypothesis, presents two distinct theoretical explanations for it, and notes that empirical evidence is mixed.',
      B: 'It argues that Dutch Disease is a more compelling explanation for the resource curse than political economy accounts.',
      C: 'It traces the political history of oil-producing nations to demonstrate the resource curse\'s effects.',
      D: 'It presents the resource curse as a settled empirical finding with broad support across studies.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the four-part structure: hypothesis (resource curse), first explanation (Dutch Disease), second explanation (political economy/rent-seeking), empirical assessment (mixed results). B claims Dutch Disease is superior — the passage presents both explanations without ranking them. C describes political history — the passage describes theoretical mechanisms. D claims settled empirical support — the passage explicitly says results are mixed.',
  },


  // ── Function of Underlined (6) ────────────────────────────────────────────

  {
    id: 'cs_c_169', num: 169, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The sun produces energy through nuclear fusion, in which hydrogen atoms are fused together under extreme temperature and pressure to form helium, releasing enormous amounts of energy in the process. The sun converts approximately 600 million tons of hydrogen into helium every second. Despite this rate of consumption, the sun has enough hydrogen to continue fusing for another five billion years.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Despite this rate of consumption, the sun has enough hydrogen to continue fusing for another five billion years.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It explains the mechanism by which the sun converts hydrogen to helium.',
      B: 'It provides a surprising contrast to the enormous consumption rate described in the prior sentence.',
      C: 'It warns that the sun\'s hydrogen reserves will eventually be depleted.',
      D: 'It introduces a new topic about the future of the solar system.',
    },
    answer: 'B', isSPR: false,
    explanation: '"Despite" signals the contrast: even with 600 million tons per second being consumed, the sun has five billion more years of fuel. B correctly identifies this as a surprising contrast to the enormous consumption rate. A describes the mechanism — that was in the first sentence. C says it warns of depletion — the sentence is providing reassurance, not a warning. D says it introduces a new topic — it concludes the passage\'s single topic.',
  },

  {
    id: 'cs_c_170', num: 170, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Scientists once assumed that the deep ocean floor was essentially barren — too cold, dark, and food-scarce to support complex life. The discovery of hydrothermal vents in 1977 overturned this assumption: vent communities support thriving ecosystems of tube worms, clams, shrimp, and microbes. The microbes at the base of these food chains are chemosynthetic rather than photosynthetic — they derive energy from chemical reactions involving hydrogen sulfide rather than from sunlight.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'The microbes at the base of these food chains are chemosynthetic rather than photosynthetic — they derive energy from chemical reactions involving hydrogen sulfide rather than from sunlight.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a new problem about the sustainability of deep-sea ecosystems.',
      B: 'It explains why scientists originally assumed the deep ocean was barren.',
      C: 'It specifies the mechanism that makes vent ecosystems possible in the absence of sunlight.',
      D: 'It challenges the finding that hydrothermal vents support thriving ecosystems.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The prior sentence establishes that vent communities support thriving ecosystems. The underlined sentence explains the underlying mechanism: chemosynthesis replaces photosynthesis, using hydrogen sulfide instead of sunlight. C correctly identifies this as specifying the enabling mechanism. A introduces a sustainability problem — no such problem is raised. B explains the original barren assumption — that was the scientists\' prior view about the lack of sunlight; the underlined sentence explains how life works without it. D challenges the finding — it explains it.',
  },

  {
    id: 'cs_c_171', num: 171, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Historians of science have noted that many important discoveries were made by scientists working at the margins of their fields or in between established disciplines — people who had enough expertise to recognize a significant problem but were not so embedded in a field\'s assumptions that they could not question them. Physicist Erwin Schrödinger wrote What Is Life? as an outsider to biology; his speculations about the physical basis of heredity influenced Francis Crick\'s work on DNA. Mathematician Alan Turing contributed foundational ideas to both computer science and theoretical biology despite having no formal training in either field.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Mathematician Alan Turing contributed foundational ideas to both computer science and theoretical biology despite having no formal training in either field.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides a second example supporting the claim that outsiders and marginal figures have made important scientific contributions.',
      B: 'It introduces a counterexample that complicates the general pattern established in the prior sentences.',
      C: 'It summarizes the main argument of the passage.',
      D: 'It explains why Turing\'s lack of training allowed him to contribute more than formally trained scientists.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The passage establishes the general claim about marginal scientists, gives Schrödinger as a first example, and then gives Turing as a second. B says it complicates the pattern — Turing confirms the pattern. C says it summarizes the main argument — it is an example, not a summary. D says it explains why the lack of training helped specifically — the sentence states the fact without explaining the mechanism.',
  },

  {
    id: 'cs_c_172', num: 172, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Philosopher Emmanuel Levinas argued that ethics begins not in abstract principles or rational calculation but in the face-to-face encounter with another person. The "face" of the other — their vulnerability, their mortality, their absolute otherness — makes an unconditional demand: do not kill me, do not harm me, acknowledge my existence. This demand cannot be derived from any prior principle; it arrives first, before any system of ethics, as the founding event of moral experience.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'This demand cannot be derived from any prior principle; it arrives first, before any system of ethics, as the founding event of moral experience.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a philosophical objection to Levinas\'s face-to-face ethics from the perspective of rationalist philosophers.',
      B: 'It emphasizes the primacy and unconditional character of the other\'s demand by specifying that it precedes all systematic ethics.',
      C: 'It provides an example of the kind of unconditional demand the face of the other makes.',
      D: 'It summarizes Levinas\'s overall philosophical project.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence describes the demand the other\'s face makes. The underlined sentence clarifies what makes this demand distinctive: it is not derived from prior principles, it precedes all ethical systems. B correctly identifies this as emphasizing the primacy and unconditional nature of the demand. A introduces an objection — no objection is present; the passage is presenting Levinas\'s view. C provides an example — the underlined sentence makes a structural claim about the demand\'s relationship to ethics, not an additional example. D says it summarizes the overall project — it characterizes one specific feature of the ethical demand.',
  },

  {
    id: 'cs_c_173', num: 173, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from George Orwell\'s 1946 essay "Politics and the English Language."\n\nIn our time, political speech and writing are largely the defence of the indefensible. Things like the continuance of British rule in India, the Russian purges and deportations, the dropping of the atom bombs on Japan, can indeed be defended, but only by arguments too brutal for most people to face, and which do not square with the professed aims of political parties. Thus political language has to consist largely of euphemism, question-begging and sheer cloudy vagueness.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Thus political language has to consist largely of euphemism, question-begging and sheer cloudy vagueness.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces Orwell\'s argument about political language as a new topic.',
      B: 'It names the specific linguistic features that follow logically from the situation of indefensible defense described in the prior sentences.',
      C: 'It provides examples of political speeches that use euphemism and vagueness.',
      D: 'It contradicts the claim that political positions can be defended at all.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences establish the situation: political positions must be defended but can only be defended with arguments too brutal to state directly. The underlined sentence draws the necessary conclusion ("thus") about what political language must do as a result: use euphemism, question-begging, and vagueness. B correctly identifies this as naming the linguistic features that follow logically from the situation. A says it introduces a new topic — "thus" signals it is a conclusion from what came before. C says it provides examples of specific speeches — it names categories of language, not examples. D says it contradicts the prior claim — it follows from it.',
  },

  {
    id: 'cs_c_174', num: 174, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Evolutionary theorist Stephen Jay Gould argued that the history of life is fundamentally contingent — if the tape of life were rewound and replayed, the result would be entirely different from the one we have. This is not because evolution is random in all respects but because small, unpredictable events can set a lineage on a path that forecloses alternatives: the Cambrian explosion\'s mass extinction of animal body plans removed possibilities that, had they survived, would have redirected the entire subsequent trajectory of evolution. Intelligence in bipedal primates was not an inevitable destination but one possible outcome among millions that were equally probable.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Intelligence in bipedal primates was not an inevitable destination but one possible outcome among millions that were equally probable.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides evidence that the Cambrian mass extinction redirected evolution.',
      B: 'It applies the contingency argument directly to human intelligence, making concrete what the passage\'s abstractions imply about the status of human existence.',
      C: 'It introduces a new argument about the relationship between intelligence and bipedalism.',
      D: 'It qualifies Gould\'s claim by acknowledging that at least human intelligence was an inevitable outcome.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage establishes contingency abstractly (tape rewound → different result, Cambrian mass extinction closing off paths). The underlined sentence applies this to the most human-centric possible implication: even human intelligence, even us, was not inevitable. B correctly identifies this as concretizing the abstract argument in its most personally significant form. A says it provides evidence about the Cambrian extinction — the Cambrian extinction was discussed in the prior sentence. C says it introduces an argument about intelligence and bipedalism — the sentence illustrates contingency, it does not analyze the intelligence-bipedalism relationship. D says it qualifies Gould by conceding human inevitability — it says exactly the opposite.',
  },


  // ── Cross-Text (6) ────────────────────────────────────────────────────────

  {
    id: 'cs_c_175', num: 175, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nEcologists studying the reintroduction of gray wolves to Yellowstone National Park in 1995 have reported a "trophic cascade": elk populations declined, elk avoided browsing in riparian areas, willows and aspens recovered, beaver populations increased, and stream morphology improved. Wolves are often cited as a "keystone species" whose presence restructures entire ecosystems.',
    dualText: 'Text 2\n\nA 2014 study by ecologists Arthur Middleton and colleagues found that elk behavior changes attributed to wolves in the trophic cascade narrative were also influenced by hunters, bears, and drought — and that the recovery of woody vegetation in riparian zones was not as widespread as claimed. The authors argued that the Yellowstone trophic cascade had become a compelling story told beyond what the data support.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how does the evidence in Text 2 relate to the claims in Text 1?',
    choices: {
      A: 'It confirms the trophic cascade by providing additional data about elk behavior changes',
      B: 'It challenges the trophic cascade narrative by showing that multiple factors drove the observed changes and that the vegetation recovery was overstated',
      C: 'It supports the keystone species concept while disputing the specific role of wolves',
      D: 'It argues that the Yellowstone reintroduction failed to achieve any measurable ecological effects',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 2 directly complicates Text 1 by pointing to multiple other causal factors (hunters, bears, drought) and by finding that vegetation recovery was not as widespread as claimed. B correctly identifies this as challenging the narrative. A says it confirms the cascade — Text 2 challenges it. C says it supports keystone species but disputes wolves\' role — Text 2 challenges the entire multi-step narrative, not just wolf attribution. D says the reintroduction had no effects — Text 2 says the effects were less than claimed and have multiple causes, not that they were absent.',
  },

  {
    id: 'cs_c_176', num: 176, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nThe following text is from W.E.B. Du Bois\'s 1903 essay collection The Souls of Black Folk.\n\nOne ever feels his two-ness, — an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder.',
    dualText: 'Text 2\n\nThe following text is from James Baldwin\'s 1955 essay collection Notes of a Native Son.\n\nI know, in any case, that the most crucial time in my own development came when I was forced to recognize that I was a kind of bastard of the West; when I followed the line of my past I did not find myself in Europe but in Africa. And this meant that in some subtle way, in a way quite real though difficult to define, I brought to Shakespeare, Bach, Rembrandt, to the stones of Paris, the cathedral at Chartres, and to the Empire State Building, a special attitude — a peculiar relationship to these things which is mine.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes how Text 2 builds on or modifies the experience described in Text 1?',
    choices: {
      A: 'Text 2 rejects Du Bois\'s double consciousness by arguing that African Americans are fully American',
      B: 'Text 2 explores a similar divided inheritance but focuses on the productive relationship it creates with Western cultural tradition rather than the internal conflict',
      C: 'Text 2 argues that the African heritage of Black Americans is incompatible with Western culture',
      D: 'Both texts present Black American identity as an irresolvable tragedy',
    },
    answer: 'B', isSPR: false,
    explanation: 'Du Bois describes "two warring ideals" and the danger of being torn asunder — internal conflict. Baldwin acknowledges a divided inheritance (bastard of the West, roots in Africa not Europe) but describes this as giving him a "special attitude" and "peculiar relationship" to Western culture — a distinctive positioning that is productive, not merely painful. B correctly captures this: Baldwin engages the same divided experience but reframes it as generating a particular perspective rather than only conflict. A says Text 2 rejects double consciousness — Baldwin acknowledges the division. C says African heritage is incompatible with Western culture — Baldwin says he has a special relationship with both. D says both present irresolvable tragedy — Baldwin\'s tone is not tragic.',
  },

  {
    id: 'cs_c_177', num: 177, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nPsychologist Carol Dweck\'s research on "growth mindset" — the belief that abilities can be developed through effort — has been widely adopted in educational settings. Numerous studies in Dweck\'s lab found that teaching students to believe their intelligence is malleable improved their academic motivation and outcomes compared with students taught a fixed view of intelligence.',
    dualText: 'Text 2\n\nA 2018 preregistered replication study by researchers at Case Western Reserve University failed to reproduce the core finding of Dweck\'s growth mindset intervention in a sample of 2,500 students. The researchers found no statistically significant difference in academic outcomes between students who received a growth mindset intervention and those in the control group. They concluded that the effect sizes in the original research may have been inflated by small samples and flexible data analysis practices.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'How would the researchers in Text 2 most likely characterize Dweck\'s original findings?',
    choices: {
      A: 'As theoretically compelling but impractical to implement at scale in real school settings',
      B: 'As likely inflated by methodological limitations, with effects that may not be as robust as originally reported',
      C: 'As accurate for younger students but not applicable to the high school students tested in the replication',
      D: 'As generalizable to all populations provided the intervention is delivered with sufficient fidelity',
    },
    answer: 'B', isSPR: false,
    explanation: 'The researchers found no significant effects in a large preregistered replication and attribute the original findings to small samples and flexible data analysis — standard concerns about inflated effect sizes. B correctly captures this characterization. A says the findings are impractical to implement — the replication dispute is about whether the effects are real, not about implementation logistics. C attributes the failure to age/population mismatch — the researchers conclude methodological problems in the original, not population specificity. D says the findings are generalizable with fidelity — the replication suggests they may not be generalizable at all.',
  },

  {
    id: 'cs_c_178', num: 178, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nPhilosopher Immanuel Kant argued that moral obligations are absolute: the same action is right or wrong regardless of its consequences. To lie, even to a murderer asking where your innocent friend is hiding, is always wrong — because the moral law, which demands truthfulness, admits of no exceptions. Consequences are never the agent\'s moral responsibility; only the will to act from duty matters.',
    dualText: 'Text 2\n\nPhilosopher John Stuart Mill held that the morality of an action is determined entirely by its consequences for overall happiness. The right action in any situation is the one that produces the greatest good for the greatest number. A world in which lies are told to protect innocent lives is morally better than one in which truthfulness causes preventable deaths — and a moral theory that produces the latter outcome has a serious defect.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the central disagreement between Kant in Text 1 and Mill in Text 2?',
    choices: {
      A: 'Whether lying to protect an innocent person is practically possible',
      B: 'Whether moral obligations should be derived from duty and universal principles or from the consequences actions produce for overall welfare',
      C: 'Whether individual happiness or collective happiness should be the primary goal of moral action',
      D: 'Whether the same action can be both right and wrong depending on who performs it',
    },
    answer: 'B', isSPR: false,
    explanation: 'Kant grounds morality in duty and universal principles independent of consequences. Mill grounds morality entirely in consequences for overall happiness. B correctly identifies this as the central disagreement: deontological duty-based ethics vs. consequentialist outcome-based ethics. A is about practical possibility — both philosophers are engaging in normative argument, not practical dispute. C is about individual vs. collective happiness — both texts are about the lying-to-murderer scenario, not a happiness-distribution dispute. D is about context-dependence — Mill\'s theory is universal in its own way (always maximize happiness); it is not about context-dependent permissibility.',
  },

  {
    id: 'cs_c_179', num: 179, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nLinguist Deborah Tannen argued in You Just Don\'t Understand (1990) that men and women have systematically different conversational goals: men use conversation to establish status and independence ("report talk"), while women use it to build connection and intimacy ("rapport talk"). These different orientations produce systematic misunderstandings between men and women even when both parties are communicating in good faith.',
    dualText: 'Text 2\n\nCommunication researcher Kathryn Dindia conducted a meta-analysis of hundreds of studies on gender and communication and found that sex differences in communication are, on average, very small — considerably smaller than popular accounts like Tannen\'s suggest. Within-group variation (differences among men or among women) is substantially larger than between-group variation (differences between men and women). Dindia suggested that gender differences in communication have been exaggerated in popular treatments that emphasize dramatic illustrative anecdotes over systematic data.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Dindia most likely characterize Tannen\'s account of gender and communication?',
    choices: {
      A: 'As an accurate description of differences that apply universally across all cultures',
      B: 'As based on systematic data collection that subsequent research has replicated and confirmed',
      C: 'As overstating actual differences by relying on illustrative cases rather than systematic evidence showing that variation within genders exceeds variation between them',
      D: 'As applicable to older generations but not to contemporary men and women',
    },
    answer: 'C', isSPR: false,
    explanation: 'Dindia\'s meta-analysis finds small average differences between sexes (much smaller than popular accounts suggest) and larger within-group than between-group variation. She attributes the exaggeration to reliance on dramatic anecdotes rather than systematic data. C correctly captures this: Tannen overstates by using anecdotes when data shows within-group variation exceeds between-group variation. A says Tannen accurately describes universal differences — Dindia finds the differences are small. B says Tannen\'s account is confirmed by subsequent research — the opposite. D limits Tannen\'s account to older generations — Dindia\'s critique is about method, not generational applicability.',
  },

  {
    id: 'cs_c_180', num: 180, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from Frederick Douglass\'s 1845 autobiography Narrative of the Life of Frederick Douglass, an American Slave.\n\nI have often been utterly astonished, since I came to the north, to find persons who could speak of the singing, among slaves, as evidence of their contentment and happiness. It is impossible to conceive of a greater mistake. Slaves sing most when they are most unhappy. The songs of the slave represent the sorrows of his heart; and he is relieved by them, only as an aching heart is relieved by its tears.',
    dualText: 'Text 2\n\nThe following text is from the 1853 narrative of Solomon Northup, Twelve Years a Slave.\n\nI would make mention of the music of the whip, and the sorrow of those who are compelled to yield to its lash. But music — there is music in the fields. I have heard it in my own voice — songs that came from the heart, but not from happiness. We sang because we had to, because it kept the living breath in us, and also because it was, in those dark moments, the one thing that was ours.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a similarity in how Douglass in Text 1 and Northup in Text 2 characterize enslaved people\'s singing?',
    choices: {
      A: 'Both argue that singing was primarily a form of communication used to plan resistance.',
      B: 'Both characterize singing not as evidence of happiness but as an expression of grief or a survival mechanism.',
      C: 'Both suggest that northern observers understood the true meaning of enslaved people\'s songs.',
      D: 'Both describe singing as something that enslaved people actively chose to do for its aesthetic pleasure.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Douglass explicitly states that singing was an expression of unhappiness and sorrow — not contentment. Northup states songs came from the heart "but not from happiness" and were sung because "we had to" to keep living. B correctly identifies this shared characterization: singing as grief expression or survival mechanism, not evidence of happiness. A says both describe singing as resistance planning — neither text makes this claim. C says both suggest northern observers understood — Douglass says northerners who see it as contentment are mistaken. D says it was an aesthetic choice — Northup explicitly says "we had to."',
  },

];
