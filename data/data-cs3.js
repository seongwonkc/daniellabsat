'use strict';

// data-cs3.js — Craft & Structure, 30 questions
// WiC ×6, Precise Word ×5, Main Purpose ×4, Structure ×3, Function ×6, Cross-Text ×6
// IDs: cs_c_091–cs_c_120  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_CS3 = [

  // ── WiC (6) ───────────────────────────────────────────────────────────────

  {
    id: 'cs_c_091', num: 91, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Charles Dickens\'s 1859 novel A Tale of Two Cities.\n\nIt was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "incredulity" most nearly mean?',
    choices: { A: 'deep religious faith', B: 'unwillingness to believe; skepticism', C: 'extreme courage in difficult times', D: 'a state of profound confusion' },
    answer: 'B', isSPR: false,
    explanation: '"Incredulity" is paired directly with "belief" as its opposite in Dickens\'s series of contrasts — just as wisdom is opposed to foolishness and Light to Darkness. B correctly identifies incredulity as unwillingness to believe or skepticism. A ("deep religious faith") would make it a synonym of "belief," not its opposite. C ("extreme courage") and D ("profound confusion") have no basis in the word\'s meaning or its context.',
  },

  {
    id: 'cs_c_092', num: 92, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Jane Austen\'s 1813 novel Pride and Prejudice.\n\nMr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "caprice" most nearly mean?',
    choices: { A: 'sudden unpredictable changes of mood or behavior', B: 'a tendency toward excessive generosity', C: 'a habit of careful deliberation before acting', D: 'stubbornness in the face of disagreement' },
    answer: 'A', isSPR: false,
    explanation: '"Caprice" appears in a list of Mr. Bennet\'s character traits alongside "quick parts, sarcastic humour, and reserve" — describing the volatile, unpredictable element of his personality that made him difficult to understand. A correctly identifies caprice as sudden unpredictable changes of mood or behavior. B ("excessive generosity") and C ("careful deliberation") are both inconsistent with the portrait of an odd, hard-to-read character. D ("stubbornness") describes rigidity — the opposite of capricious unpredictability.',
  },

  {
    id: 'cs_c_093', num: 93, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Fyodor Dostoevsky\'s 1866 novel Crime and Punishment, translated from Russian.\n\nRaskolnikov walked into a small, low-ceilinged room and felt immediately the peculiar oppression of the place — not physical, but something more insidious, a slow pressure against the spirit that the squalor of the room seemed to exude from its very walls.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "insidious" most nearly mean?',
    choices: { A: 'immediately and violently painful', B: 'proceeding gradually and harmfully in a way that is not obvious', C: 'originating from an external physical cause', D: 'producing intense feelings of nostalgia' },
    answer: 'B', isSPR: false,
    explanation: '"Something more insidious" is contrasted with "not physical" oppression — it is a slow pressure, not an immediate assault. B correctly identifies insidious as gradually and harmfully operating in a non-obvious way. A ("immediately and violently painful") contradicts the "slow pressure" characterization. C ("external physical cause") is also contradicted — the oppression is explicitly "not physical." D ("nostalgia") has no basis in the passage.',
  },

  {
    id: 'cs_c_094', num: 94, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Toni Morrison\'s 1977 novel Song of Solomon.\n\nThe days of trusting other people\'s evaluations of his life were over. He could barely tolerate the benign indifference of strangers, but the pointed scrutiny of people who thought they knew him was insupportable.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "insupportable" most nearly mean?',
    choices: { A: 'impossible to justify logically', B: 'unable to be endured', C: 'lacking adequate financial resources', D: 'without any social support network' },
    answer: 'B', isSPR: false,
    explanation: '"The pointed scrutiny...was insupportable" — the character can barely tolerate strangers\' indifference but finds the scrutiny of those who think they know him beyond bearing. B correctly identifies insupportable as unable to be endured. A ("impossible to justify logically") describes argumentation, not emotional tolerance. C ("lacking financial resources") confuses "insupportable" with "unsupported" in an economic sense. D ("without social support") similarly misreads the word.',
  },

  {
    id: 'cs_c_095', num: 95, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Herman Melville\'s 1851 novel Moby-Dick.\n\nFor as in this world, head winds are far more prevalent than winds from astern (that is, if you never violate the Pythagorean maxim), so for the most part the Commodore on the quarter-deck gets his atmosphere at second-hand from the sailors on the forecastle. He thinks he breathes it first; but not so. In much the same way do the commonalty lead their leaders in many other things, at the same time that the leaders little suspect it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "commonalty" most nearly mean?',
    choices: { A: 'the shared beliefs and customs of a society', B: 'common people; the general population as distinguished from leadership', C: 'a spirit of cooperation and mutual aid', D: 'the most frequently occurring events in daily life' },
    answer: 'B', isSPR: false,
    explanation: '"The commonalty lead their leaders" — Melville\'s point is that common people actually influence leaders more than leaders realize, just as the sailor\'s breath reaches the Commodore secondhand. B correctly identifies commonalty as common people or the general population. A ("shared beliefs and customs") confuses commonalty with "commonality." C ("cooperation and mutual aid") is unrelated. D ("frequently occurring events") is also not the meaning here.',
  },

  {
    id: 'cs_c_096', num: 96, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Virginia Woolf\'s 1927 novel To the Lighthouse.\n\nFor nothing was simply one thing. The other thing, the thing she had struggled to express, always escaped her at the last moment. It was an intermittent revelation of truth — not a permanent state but a flickering of the real world, present and then gone before the mind could arrest it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "arrest" most nearly mean?',
    choices: { A: 'to take into legal custody', B: 'to stop and hold in place; to capture', C: 'to cause extreme alarm or distress', D: 'to delay the natural development of something' },
    answer: 'B', isSPR: false,
    explanation: '"Gone before the mind could arrest it" — the revelation of truth flickers and vanishes before the mind can seize and hold it. B correctly identifies arrest here as stopping and holding in place; capturing. A ("legal custody") is the most familiar meaning but clearly does not apply to the mind\'s attempt to hold a fleeting truth. C ("cause alarm") is unrelated. D ("delay development") describes a different usage of arrest (as in "arrested development"), not the capturing sense required here.',
  },


  // ── Precise Word (5) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_097', num: 97, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The discovery of the Higgs boson in 2012 _______ a prediction first made by physicists in 1964, confirming that the theoretical framework on which the Standard Model of particle physics rests had correctly anticipated the existence of a particle that gives other particles their mass.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'contradicted', B: 'introduced', C: 'validated', D: 'replaced' },
    answer: 'C', isSPR: false,
    explanation: '"Validated" most precisely captures the relationship: the discovery confirmed that a prior theoretical prediction was correct. "Contradicted" inverts the relationship. "Introduced" implies the discovery created the prediction, not confirmed it. "Replaced" implies the prediction was superseded rather than confirmed.',
  },

  {
    id: 'cs_c_098', num: 98, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The Amazon rainforest produces so much atmospheric moisture through transpiration that it effectively _______ its own rainfall — a feedback loop in which the forest\'s continued existence depends on the precipitation it generates.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'absorbs', B: 'generates', C: 'reduces', D: 'distributes' },
    answer: 'B', isSPR: false,
    explanation: '"Generates" most precisely names the process: the forest produces moisture through transpiration, which becomes rainfall — it creates the rainfall rather than merely distributing or absorbing it. "Absorbs" describes the opposite direction of water movement. "Reduces" contradicts the passage. "Distributes" implies moving rainfall that already exists, not creating it.',
  },

  {
    id: 'cs_c_099', num: 99, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Early astronomers assumed that the universe was static and eternal — neither expanding nor contracting. Einstein initially _______ his own equations to preserve this assumption, introducing a "cosmological constant" to counteract the gravitational forces that would otherwise cause the universe to collapse, even though the equations without it predicted an expanding universe.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'corrected', B: 'misread', C: 'modified', D: 'discarded' },
    answer: 'C', isSPR: false,
    explanation: '"Modified" most precisely describes what Einstein did: he altered his equations by adding a term (the cosmological constant) to make them produce a desired result. "Corrected" implies the equations had an error that he fixed — but the equations were correct; he adjusted them to fit his assumption. "Misread" implies he made a reading error. "Discarded" implies he abandoned the equations — the opposite; he kept them but modified them.',
  },

  {
    id: 'cs_c_100', num: 100, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The concept of "moral licensing" describes a psychological phenomenon in which people who have recently done something virtuous — donated to charity, recycled, volunteered — subsequently feel _______ to behave less ethically in unrelated contexts, as if the prior good act has earned them a moral credit they can spend.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'obligated', B: 'motivated', C: 'licensed', D: 'pressured' },
    answer: 'C', isSPR: false,
    explanation: '"Licensed" is both the most precise and the term implied by the passage\'s own framing — "moral licensing" describes feeling permitted or freed to behave less ethically. "Obligated" and "pressured" imply external compulsion rather than a felt permission. "Motivated" implies an active drive, not the sense of permission or freedom from constraint that "licensing" captures.',
  },

  {
    id: 'cs_c_101', num: 101, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The historian\'s argument is _______ rather than causal: she does not claim that the introduction of the printing press caused the Reformation, but rather that the two developments shared a set of conditions — rising urban literacy, merchant patronage of religious dissent, weakening papal authority — that made each more likely.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'sequential', B: 'correlational', C: 'analogical', D: 'circumstantial' },
    answer: 'B', isSPR: false,
    explanation: '"Correlational" most precisely names the type of argument being described: the historian is saying the two developments are related through shared conditions, not that one caused the other — the definition of a correlational rather than causal relationship. "Sequential" describes temporal order, not the nature of the relationship. "Analogical" describes argument by comparison. "Circumstantial" describes indirect evidence, not a type of relational argument.',
  },


  // ── Main Purpose (4) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_102', num: 102, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Langston Hughes\'s 1926 essay "The Negro Artist and the Racial Mountain."\n\nLet the blare of Negro jazz bands and the bellowing voice of Bessie Smith singing Blues penetrate the closed ears of the colored near-intellectuals until they listen and perhaps understand. Let Paul Robeson singing Water Boy, and Rudolph Fisher writing about the streets of Harlem, and Jean Toomer holding the heart of Georgia in his hands, and Aaron Douglas drawing strange black fantasies cause the smug Negro middle class to turn from their white, respectable, ordinary books and papers to catch a glimmer of their own beauty.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To introduce readers to the work of specific Black artists including Bessie Smith and Paul Robeson',
      B: 'To urge Black intellectuals and the Black middle class to recognize and embrace the beauty of Black artistic expression rather than aspiring to white cultural standards',
      C: 'To argue that jazz and blues are more valuable art forms than literature and visual art',
      D: 'To criticize the white cultural establishment for ignoring the achievements of Black artists',
    },
    answer: 'B', isSPR: false,
    explanation: 'Hughes addresses "colored near-intellectuals" and the "smug Negro middle class," urging them to turn away from "white, respectable, ordinary" culture toward the beauty of Black artistic expression. B correctly identifies this as an appeal to Black audiences to recognize their own cultural beauty. A is too narrow — the artists are examples in service of the argument. C claims a hierarchy among art forms that Hughes does not establish. D is directed at white audiences; Hughes is explicitly addressing Black audiences.',
  },

  {
    id: 'cs_c_103', num: 103, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Conservationists have long debated whether protecting large, contiguous wildlife reserves or creating networks of smaller, connected habitat patches is a more effective strategy for preserving biodiversity. Large reserves allow apex predators to maintain functional populations and support species that require undisturbed interior habitat. Connected networks of smaller patches, by contrast, allow dispersal between populations, reducing inbreeding and allowing species to shift ranges in response to climate change. The optimal strategy likely depends on the specific species, landscape, and threats in question — no single approach is universally superior.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that large contiguous reserves are more effective than habitat networks for protecting apex predators',
      B: 'To explain why climate change has made traditional conservation strategies obsolete',
      C: 'To present the trade-offs between two conservation strategies and conclude that neither is universally superior',
      D: 'To encourage conservationists to adopt connected habitat networks as their primary strategy',
    },
    answer: 'C', isSPR: false,
    explanation: 'The passage presents both strategies\' advantages and concludes with the explicit statement that no single approach is universally superior — context determines what works. C correctly captures this. A advocates for large reserves specifically — the passage presents both sides evenly. B introduces climate change as making strategies obsolete — the passage mentions climate adaptation as one benefit, not obsolescence. D advocates for networks — again, the passage is balanced.',
  },

  {
    id: 'cs_c_104', num: 104, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from W.E.B. Du Bois\'s 1903 essay "Of Mr. Booker T. Washington and Others" in The Souls of Black Folk.\n\nMr. Washington distinctly asks that Black people give up, at least for the present, three things — First, political power; Second, insistence on civil rights; Third, higher education of Negro youth — and concentrate all their energies on industrial education, the accumulation of wealth, and the conciliation of the South. This policy has been courageously set forth. It has achieved successes, and to-day it stands as the one recognized Negro voice in America.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of this portion of the text?',
    choices: {
      A: 'To praise Booker T. Washington as the most important Black leader in American history',
      B: 'To summarize Washington\'s program precisely and acknowledge its success before mounting a critique',
      C: 'To argue that industrial education is an inadequate substitute for higher education',
      D: 'To explain why Du Bois agrees with Washington\'s focus on wealth accumulation',
    },
    answer: 'B', isSPR: false,
    explanation: 'Du Bois carefully summarizes Washington\'s three concessions and his three priorities, then acknowledges the policy has "achieved successes" — this is a deliberate strategy of fair summary followed by acknowledgment before what the broader essay makes clear is a critique. B correctly identifies this as a setup: precise summary + conceded success. A claims Du Bois is praising Washington as most important — he is being careful, not celebratory. C jumps to a critique the excerpt itself does not yet state. D incorrectly attributes agreement to Du Bois.',
  },

  {
    id: 'cs_c_105', num: 105, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Cognitive scientists studying expert performance have proposed that what separates experts from novices is not primarily innate talent but the quantity and quality of deliberate practice — effortful, feedback-rich training at the edge of current ability. K. Anders Ericsson\'s research on musicians, chess players, and athletes found that performance differences across individuals correlate strongly with accumulated hours of deliberate practice, not with years of experience or general intelligence. This finding has been widely cited as evidence that exceptional performance is available to anyone willing to invest the necessary practice time.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that innate talent plays no role in expert performance in any domain',
      B: 'To introduce and explain the deliberate practice framework, presenting it as evidence that exceptional performance depends primarily on a specific kind of effortful training rather than innate ability',
      C: 'To critique Ericsson\'s research methodology for failing to adequately control for innate ability',
      D: 'To demonstrate that chess players acquire expertise more quickly than musicians or athletes',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the passage\'s purpose: introduce deliberate practice, describe the evidence for it, and present it as evidence against innate-talent explanations. A overstates — the passage says performance differences "correlate strongly" with deliberate practice and does not claim talent plays zero role. C introduces a critique the passage does not make. D makes a domain comparison the passage does not address.',
  },


  // ── Structure (3) ─────────────────────────────────────────────────────────

  {
    id: 'cs_c_106', num: 106, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Bats are the only mammals capable of sustained flight. Their wings are not modified legs like those of birds but modified forelimbs: a thin membrane of skin stretches between elongated finger bones and the body. Most bat species navigate and hunt using echolocation — emitting ultrasonic pulses and interpreting the returning echoes to detect prey and avoid obstacles in complete darkness.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It states a defining characteristic of bats, explains the anatomy underlying it, and describes a second specialized capability.',
      B: 'It argues that bats are more evolutionarily advanced than birds because of their wing structure.',
      C: 'It compares the hunting strategies of bats and birds to show that bats are more effective predators.',
      D: 'It describes the evolution of flight from terrestrial mammals to the modern bat.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: defining characteristic (only mammal capable of sustained flight), anatomy (wing structure — modified forelimbs, elongated finger bones), and second capability (echolocation). B claims an argument about evolutionary advancement that the passage does not make. C describes a comparison with birds that the passage does not develop. D describes an evolutionary history the passage does not trace.',
  },

  {
    id: 'cs_c_107', num: 107, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Simone de Beauvoir\'s 1949 work The Second Sex, translated from French.\n\nOne is not born, but rather becomes, woman. No biological, psychological, or economic fate determines the figure that the human female presents in society; it is civilization as a whole that produces this creature, intermediate between male and eunuch, which is described as feminine.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It states a provocative claim, then refutes three categories of deterministic explanation, and attributes the production of femininity to civilization.',
      B: 'It traces the historical development of femininity from biological origins to social construction.',
      C: 'It presents a biological argument for the differences between male and female human development.',
      D: 'It acknowledges the role of civilization in shaping gender while ultimately affirming biological determinism.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: the opening claim ("one is not born, but becomes, woman"), the refutation of biological/psychological/economic determinism, and the attribution of femininity to civilization. B describes a historical developmental narrative the passage does not provide. C mischaracterizes the passage as biological — it explicitly denies biological determinism. D claims the passage affirms biological determinism — the opposite of its argument.',
  },

  {
    id: 'cs_c_108', num: 108, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Neuroscientists studying the default mode network — a set of brain regions more active during rest and mind-wandering than during focused task performance — initially interpreted it as neurological "noise": metabolic activity without meaningful function. More recently, researchers have found that the default mode network plays critical roles in autobiographical memory consolidation, future simulation, and social cognition. The initial dismissal of the network as noise may itself reflect a bias: the assumption that brain activity is only meaningful when it serves immediate external tasks.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes an initial scientific dismissal, presents evidence that revised that view, and identifies the underlying assumption that produced the error.',
      B: 'It argues that neuroscientists should focus more research on rest states than on task-based brain activity.',
      C: 'It presents conflicting evidence about the default mode network and concludes that its function remains unknown.',
      D: 'It traces the discovery of the default mode network and identifies the researcher who first described it.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: initial dismissal (neurological noise), revised view (critical roles in memory, future simulation, social cognition), and the identified underlying bias (brain activity only meaningful when task-serving). B introduces a prescriptive argument about research focus that the passage does not make. C implies the function remains unknown — the passage states it was found to have critical roles. D describes a discovery narrative the passage does not provide.',
  },


  // ── Function of Underlined (6) ────────────────────────────────────────────

  {
    id: 'cs_c_109', num: 109, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The blue whale is the largest animal known to have ever existed, reaching lengths of up to 30 meters and weights of up to 200 metric tons — heavier than the largest known dinosaurs. Despite its size, the blue whale feeds almost exclusively on krill, tiny crustaceans typically less than 6 centimeters long. A single blue whale may consume up to 40 million krill per day during feeding season.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Despite its size, the blue whale feeds almost exclusively on krill, tiny crustaceans typically less than 6 centimeters long.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides evidence that blue whales are the largest animals ever to have existed.',
      B: 'It introduces a surprising contrast between the blue whale\'s massive size and the extreme smallness of its prey.',
      C: 'It explains why the blue whale must consume 40 million krill per day.',
      D: 'It defines "krill" for readers unfamiliar with marine biology.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The word "despite" signals that the sentence is establishing a contrast — the largest animal ever eats among the smallest prey. B correctly identifies this as a contrast between size and prey. A is about establishing the size claim — that was done in the prior sentence. C reverses causality — the sentence doesn\'t explain the feeding quantity, the following sentence states it. D over-attributes — the definition of krill is a parenthetical detail, not the sentence\'s primary function.',
  },

  {
    id: 'cs_c_110', num: 110, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Scientists studying the relationship between exercise and brain health have found that aerobic exercise promotes the release of brain-derived neurotrophic factor (BDNF), a protein that supports the growth and maintenance of neurons. Studies in both rodents and humans show that regular aerobic exercise is associated with increased hippocampal volume. Reduced hippocampal volume is one of the hallmarks of Alzheimer\'s disease.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Reduced hippocampal volume is one of the hallmarks of Alzheimer\'s disease.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a new topic — Alzheimer\'s disease — unrelated to the exercise research discussed previously.',
      B: 'It explains the mechanism by which BDNF promotes neuron growth.',
      C: 'It establishes the clinical significance of the hippocampal volume finding by connecting it to a known disease.',
      D: 'It summarizes the overall conclusion of the passage.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The prior sentence establishes that exercise increases hippocampal volume. The underlined sentence immediately follows by noting that reduced hippocampal volume is a hallmark of Alzheimer\'s — implicitly establishing why the exercise finding matters clinically. C correctly identifies this as establishing clinical significance. A says it introduces an unrelated topic — the connection to Alzheimer\'s is precisely the point. B attributes a mechanistic explanation to the sentence — it doesn\'t describe BDNF. D overstates — it is a supporting detail, not the conclusion.',
  },

  {
    id: 'cs_c_111', num: 111, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Literary critic Lionel Trilling argued that the novel as a form is inherently concerned with the complexity of social manners — the gap between what people appear to be and what they are. The great novelists, Trilling contended, are those who render this gap with the most precision and moral seriousness. It is for this reason, he argued, that Jane Austen — whose novels seem to some readers merely to concern themselves with drawing-room proprieties — is among the most morally serious writers in the English tradition.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'It is for this reason, he argued, that Jane Austen — whose novels seem to some readers merely to concern themselves with drawing-room proprieties — is among the most morally serious writers in the English tradition.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces Trilling\'s theory of the novel by naming the form\'s central concern.',
      B: 'It applies Trilling\'s general theory to a specific case, using Austen to concretize and defend an initially counterintuitive claim.',
      C: 'It contradicts Trilling\'s earlier argument by suggesting that surface manners are not morally significant.',
      D: 'It summarizes readers\' typical response to Jane Austen without taking a position.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Trilling\'s general theory (novels are about the appearance/reality gap; great novelists render it seriously) is applied in the underlined sentence to Austen — whose surface subject matter (drawing-room proprieties) is precisely what some readers dismiss. The sentence uses this seeming mismatch to make the theory more concrete while defending Austen\'s moral seriousness against dismissal. B correctly identifies this as application and defense. A says it introduces the theory — the theory was introduced in the prior sentences. C claims it contradicts the argument — the opposite is true. D says it summarizes reader response without taking a position — Trilling is taking a clear position.',
  },

  {
    id: 'cs_c_112', num: 112, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'For most of the twentieth century, economists assumed that rational actors — when given clear information about financial products — would make choices consistent with their self-interest. The design of financial markets, consumer protections, and disclosure requirements all rested on this assumption. Behavioral economists have since documented hundreds of systematic deviations from rational behavior: people overweight small risks, prefer the status quo regardless of its merits, and make wildly different choices depending on how options are framed. These findings have not merely refined the economic model of human behavior — they have required its reconstruction.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'These findings have not merely refined the economic model of human behavior — they have required its reconstruction.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides a specific example of how behavioral economics has changed financial regulation.',
      B: 'It qualifies the significance of behavioral economics by suggesting its findings are incremental rather than revolutionary.',
      C: 'It emphasizes the magnitude of the behavioral economics challenge to standard economic assumptions by distinguishing refinement from reconstruction.',
      D: 'It introduces the concept of behavioral economics for readers unfamiliar with the field.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The underlined sentence makes a rhetorical distinction — not "merely refined" but "required reconstruction" — to emphasize just how fundamental the challenge from behavioral economics has been. C correctly identifies this as a statement about the magnitude of the challenge. A says it gives a specific example — it makes a general characterization. B says it qualifies the findings as incremental — the opposite; it emphasizes their radical scope. D says it introduces behavioral economics — it concludes the passage\'s argument about it.',
  },

  {
    id: 'cs_c_113', num: 113, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from James Baldwin\'s 1963 essay "The Fire Next Time."\n\nI know what the world has done to my brother and how narrowly he has survived it. And I know, which is much worse, and this is the crime of which I accuse my country and my countrymen, and for which neither I nor time nor history will ever forgive them, that they have destroyed and are destroying hundreds of thousands of lives and do not know it and do not want to know it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'And I know, which is much worse, and this is the crime of which I accuse my country and my countrymen, and for which neither I nor time nor history will ever forgive them, that they have destroyed and are destroying hundreds of thousands of lives and do not know it and do not want to know it.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It shifts from personal testimony about Baldwin\'s brother to a collective indictment of the country, framing willful ignorance as the more serious crime.',
      B: 'It qualifies the prior sentence by conceding that white Americans have no knowledge of the harm they cause.',
      C: 'It summarizes the personal history of destruction described in the prior sentence.',
      D: 'It introduces evidence that supports the claim that American society has harmed Black Americans.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The prior sentence is personal — Baldwin\'s brother and his narrow survival. The underlined sentence explicitly marks a shift ("which is much worse") from individual witness to collective indictment, and identifies the specific character of the crime: not merely the destruction but the willful ignorance — they "do not know it and do not want to know it." A correctly captures both the shift (personal to collective) and the identification of willful ignorance as the graver crime. B says it qualifies by conceding ignorance — but Baldwin is charging them with this ignorance, not excusing them through it. C says it summarizes the prior sentence — it escalates, not summarizes. D claims it introduces evidence — it makes an accusation, not an evidence claim.',
  },

  {
    id: 'cs_c_114', num: 114, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Philosopher Judith Butler argues that gender is not a stable identity one has but a performance one repeatedly enacts — constituted through stylized bodily acts, gestures, and behaviors that congeal over time into the appearance of substance. This means that what appears to be the expression of a pre-existing gender identity is actually its production: there is no gender behind the expressions; the expressions are the gender. The political consequence is that gender, having no essential nature, is also open to subversion and transformation through alternative performances.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'The political consequence is that gender, having no essential nature, is also open to subversion and transformation through alternative performances.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces Butler\'s theory of gender performativity as a new argument.',
      B: 'It draws out the political implication that follows from the performative account established in the prior sentences.',
      C: 'It concedes that Butler\'s theory has limits by acknowledging that some genders are more resistant to transformation than others.',
      D: 'It refutes arguments against Butler\'s theory by invoking its political utility.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences establish the theoretical claim: gender is performance, not expression of prior identity. The underlined sentence draws the political implication that follows from this: if gender has no essential nature, it can be subverted and transformed. B correctly identifies this as the political consequence derived from the preceding theory. A says it introduces Butler\'s theory — the theory was already established. C claims a concession about limits — the sentence asserts possibility, not limitation. D claims refutation of critics — the sentence is positive implication, not polemical response.',
  },


  // ── Cross-Text (6) ────────────────────────────────────────────────────────

  {
    id: 'cs_c_115', num: 115, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nResearchers studying sleep have found that adults who consistently get fewer than seven hours of sleep per night show significant impairments in attention, working memory, and decision-making — even when they report feeling adapted to their reduced sleep schedule. This subjective sense of adaptation is not matched by objective performance measures.',
    dualText: 'Text 2\n\nNot all adults require the same amount of sleep to function optimally. A small percentage of the population — estimated at 1–3% — carry genetic variants that allow them to function normally on as little as four to six hours of sleep per night, with no measurable cognitive impairment. These individuals are sometimes called "short sleepers."',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how do the findings in Text 2 relate to the claims in Text 1?',
    choices: {
      A: 'Text 2 contradicts Text 1 by showing that short sleep causes no cognitive impairment in any population.',
      B: 'Text 2 identifies a narrow genetic exception to the general pattern described in Text 1 without undermining the broader finding.',
      C: 'Text 2 confirms Text 1\'s claim that people consistently underestimate their own sleep impairment.',
      D: 'Text 2 challenges Text 1 by showing that subjective and objective measures of sleep adequacy usually align.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 1 establishes that adults getting under seven hours show cognitive impairment. Text 2 notes that 1–3% carry genetic variants allowing short sleep without impairment. B correctly characterizes this as a narrow genetic exception that does not undermine the general finding — "most people" are still subject to the impairment described in Text 1. A says Text 2 contradicts Text 1 entirely — but the exception applies to a small genetic minority. C says Text 2 confirms the subjective/objective mismatch — Text 2 says nothing about self-assessment. D says they usually align — Text 2 describes an exception, not a general pattern reversal.',
  },

  {
    id: 'cs_c_116', num: 116, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nThe following text is from Ralph Waldo Emerson\'s 1841 essay "Self-Reliance."\n\nTrust thyself: every heart vibrates to that iron string. Accept the place the divine providence has found for you, the society of your contemporaries, the connexion of events. Great men have always done so, and confided themselves childlike to the genius of their age, betraying their perception that the absolutely trustworthy was stirring at their heart.',
    dualText: 'Text 2\n\nThe following text is from Henry David Thoreau\'s 1854 work Walden.\n\nI went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation unless it was quite necessary.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a similarity in the ideas expressed in Text 1 and Text 2?',
    choices: {
      A: 'Both texts advocate for withdrawal from society as the path to self-knowledge.',
      B: 'Both texts express the importance of living according to one\'s own authentic inner sense rather than conforming to external expectations.',
      C: 'Both texts argue that greatness requires accepting the circumstances one is born into.',
      D: 'Both texts suggest that nature is the primary source of moral and spiritual guidance.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Emerson calls for trusting the self — the "iron string" at the heart — while Thoreau insists on living "deliberately" rather than practicing "resignation." Both prioritize authentic self-directed living over conformity. B captures this shared theme. A says both advocate withdrawal — Emerson explicitly calls for acceptance of "the society of your contemporaries," not withdrawal. C says both advocate accepting one\'s circumstances — Thoreau\'s deliberate life is precisely a rejection of unreflective circumstance. D says both find nature as primary moral guidance — only Thoreau explicitly involves nature; Emerson focuses on inner trust.',
  },

  {
    id: 'cs_c_117', num: 117, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nEconomist Milton Friedman argued in 1970 that the sole social responsibility of a business is to increase its profits for shareholders, within the rules established by law. Any expenditure of corporate resources on social goals — environmental improvement, charitable giving, worker welfare beyond what is legally required — constitutes a form of theft from shareholders, who have not consented to their capital being used for these purposes.',
    dualText: 'Text 2\n\nThe Business Roundtable, an association of major U.S. CEOs, issued a statement in 2019 that a corporation\'s purpose is not merely to serve shareholders but to create value for all stakeholders: customers, employees, suppliers, communities, and shareholders alike. The statement explicitly rejected the shareholder primacy doctrine, arguing that long-term business success requires sustained investment in all constituencies that the business touches.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Friedman most likely respond to the Business Roundtable statement?',
    choices: {
      A: 'By agreeing that stakeholder investment can benefit shareholders in the long run',
      B: 'By arguing that the statement amounts to corporate executives using shareholders\' capital for social purposes without shareholder consent',
      C: 'By acknowledging that laws requiring environmental and worker protections have made shareholder primacy outdated',
      D: 'By supporting the statement\'s emphasis on customer value while questioning the inclusion of communities',
    },
    answer: 'B', isSPR: false,
    explanation: 'Friedman argues that spending corporate resources on social goals is theft from shareholders who haven\'t consented. The Business Roundtable calls for investment in employees, communities, and other stakeholders — precisely the kind of non-shareholder expenditure Friedman condemns. B correctly identifies his likely response: the statement involves executives diverting shareholder capital to social purposes without consent. A attributes a long-term shareholder benefit argument to Friedman — this is actually the Roundtable\'s framing. C says Friedman would concede legal changes have made his view outdated — he would not. D says Friedman would partially agree — he draws no such distinctions between stakeholder types.',
  },

  {
    id: 'cs_c_118', num: 118, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nThe following text is from Emily Dickinson\'s c. 1863 poem "After great pain, a formal feeling comes."\n\nAfter great pain, a formal feeling comes —\nThe Nerves sit ceremonious, like Tombs —\nThe stiff Heart questions \'was it He, that bore,\'\nAnd \'Yesterday, or Centuries before\'?\n\nThe Feet, mechanical, go round —\nOf Ground, or Air, or Ought —\nA Wooden way',
    dualText: 'Text 2\n\nThe following text is from Charlotte Perkins Gilman\'s 1892 short story "The Yellow Wallpaper."\n\nI lie here on this great immovable bed — it is nailed down, I believe — and follow that pattern about by the hour. It is as good as gymnastics, I assure you. I start, we\'ll say, at the bottom, down in the corner over there where it has not been touched, and I determine for the very life of me to trace the pattern to some conclusion — and in the end find it has come to a full stop — a perfect strangler.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a shared technique in Text 1 and Text 2?',
    choices: {
      A: 'Both texts use imagery of physical immobility or mechanical movement to represent a constrained or numbed psychological state.',
      B: 'Both texts directly address the reader to emphasize the narrator\'s isolation.',
      C: 'Both texts employ an objective, detached narrative voice to describe scenes of suffering.',
      D: 'Both texts use extended nature metaphors to capture the experience of emotional pain.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Dickinson uses "Feet, mechanical" and the "formal feeling" of stiffness — physical movement described in mechanical terms to capture post-grief numbness. Gilman\'s narrator lies on an "immovable bed" and "mechanically" follows wallpaper patterns, her movement constrained. A correctly identifies the shared technique: physical immobility and mechanical movement as representations of a constrained psychological state. B says both directly address the reader — Dickinson does not. C says both use objective, detached voices — Dickinson\'s voice is not objective/detached; it is intense. D says both use nature metaphors — neither text relies on extended nature metaphors.',
  },

  {
    id: 'cs_c_119', num: 119, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nPhilosopher Peter Singer argues that if we can prevent something bad from happening without sacrificing anything of comparable moral importance, we are obligated to do so. Since the cost of saving a child dying of a preventable disease in a distant country is far less than the cost to a wealthy person of minor luxuries, affluent individuals in wealthy nations are morally required — not merely encouraged — to donate to effective global health charities until the marginal utility of further giving equals the marginal utility of their retained income.',
    dualText: 'Text 2\n\nPhilosopher Susan Wolf contends that morality, if taken to the extreme Singer envisions, becomes all-consuming in a way that undermines what makes life worth living. A person who gave until the point Singer describes would have no time or resources for personal projects, relationships, and commitments that constitute a meaningful life. Wolf argues that being a fully moral person in Singer\'s sense would make one a "moral saint" — a person admirable in abstract but lacking the particularity, depth, and idiosyncratic attachments that make human lives genuinely valuable.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Wolf most likely respond to Singer\'s argument?',
    choices: {
      A: 'By accepting Singer\'s principle but arguing that effective altruism is more likely to reduce global poverty than direct charitable giving',
      B: 'By challenging Singer\'s moral premise that we are obligated to prevent all preventable suffering regardless of proximity',
      C: 'By accepting the moral force of Singer\'s obligation but arguing that a life fully devoted to it would be impoverished in ways that matter morally',
      D: 'By arguing that the concept of comparable moral importance is too vague to apply in practice',
    },
    answer: 'C', isSPR: false,
    explanation: 'Wolf\'s argument does not dispute Singer\'s principle directly — she concedes the moral saint is admirable in the abstract. Her challenge is that living out Singer\'s obligation fully would eliminate the personal projects and attachments that make life meaningful. C correctly captures this: accept the moral force, but note the impoverishment of full compliance. A introduces effective altruism — not Wolf\'s argument. B says Wolf challenges the core moral premise — Wolf accepts that the obligation has force; her challenge is its all-consuming implications. D attributes a vagueness objection to Wolf that she does not make.',
  },

  {
    id: 'cs_c_120', num: 120, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nLinguist Benjamin Lee Whorf proposed what became known as the Sapir-Whorf hypothesis: that the language one speaks shapes how one thinks and perceives reality. Speakers of languages that encode time differently — or that have different color categories — literally perceive and organize experience differently from speakers of other languages, because language provides the conceptual categories through which raw experience is filtered.',
    dualText: 'Text 2\n\nResearch in cognitive science has found some support for weak versions of the Sapir-Whorf hypothesis — that language can influence certain perceptual discriminations at the margins. However, studies of universal conceptual structures, including color perception across languages and cross-cultural number cognition, suggest that deep cognitive architecture is largely language-independent. Even speakers of languages without words for specific numbers show numerical reasoning capacities that exceed what their language can explicitly encode.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how does the evidence described in Text 2 relate to Whorf\'s hypothesis in Text 1?',
    choices: {
      A: 'It fully confirms the hypothesis by showing that color perception and numerical reasoning differ across language groups.',
      B: 'It partially supports a weak version of the hypothesis while providing evidence against its strong form — that language determines perceptual and cognitive categories.',
      C: 'It refutes the hypothesis entirely by demonstrating that all human cognitive structures are universal and language-independent.',
      D: 'It supports the hypothesis specifically for color categories while refuting it for numerical cognition.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 2 says there is support for "weak versions" — language influences some perceptual discriminations at the margins — while universal color perception and numerical cognition suggest "deep cognitive architecture is largely language-independent." B correctly characterizes this as partial support for the weak version plus evidence against the strong form. A says it fully confirms the hypothesis — Text 2 explicitly limits its support to weak versions. C says it refutes entirely — Text 2 concedes some support. D splits the domains (color supported, numbers refuted) — Text 2 uses both color and number as examples of universal structures that challenge the strong form.',
  },

];
