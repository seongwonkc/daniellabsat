'use strict';

// data-cs4.js — Craft & Structure, 30 questions
// WiC ×6, Precise Word ×5, Main Purpose ×4, Structure ×3, Function ×5, Cross-Text ×7
// IDs: cs_c_121–cs_c_150  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_CS4 = [

  // ── WiC (6) ───────────────────────────────────────────────────────────────

  {
    id: 'cs_c_121', num: 121, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Mark Twain\'s 1884 novel Adventures of Huckleberry Finn.\n\nThe widow she cried over me, and called me a poor lost lamb, and she called me a lot of other names, too, but she never meant no harm by it. She put me in them new clothes again, and I couldn\'t do nothing but sweat and sweat, and feel all cramped up.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the phrase "cramped up" most nearly mean?',
    choices: { A: 'physically confined in a small space', B: 'uncomfortably constrained; unable to act freely', C: 'suffering from painful muscle spasms', D: 'overwhelmed by difficult emotions' },
    answer: 'B', isSPR: false,
    explanation: 'Huck feels "cramped up" in new clothes that represent the widow\'s attempt to civilize him — the discomfort is as much social and spiritual as physical. B correctly captures the sense of uncomfortable constraint and inability to act freely. A ("physically confined in a small space") is too literal — there is no small space. C ("painful muscle spasms") is a medical meaning that does not fit the context. D ("overwhelmed by difficult emotions") misidentifies the nature of the discomfort.',
  },

  {
    id: 'cs_c_122', num: 122, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Henry James\'s 1898 novella The Turn of the Screw.\n\nI remember the whole beginning as a succession of flights and drops, a little seesaw of the right throbs and the wrong. After rising, in town, to meet his appeal, I had at all events a couple of very bad days — found myself doubtful again, felt indeed sure I had made a mistake.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "appeal" most nearly mean?',
    choices: { A: 'a legal petition to a higher court', B: 'an earnest request or entreaty', C: 'an attractive or charming quality', D: 'a public announcement or advertisement' },
    answer: 'B', isSPR: false,
    explanation: '"Rising...to meet his appeal" — the narrator overcame hesitation in response to the employer\'s earnest request to take the position. B correctly identifies appeal as an earnest request or entreaty. A ("legal petition") requires a courtroom context. C ("attractive quality") is another valid meaning of appeal — but "meeting" an appeal implies responding to a request, not being drawn by an attractive quality. D ("public announcement") has no contextual support.',
  },

  {
    id: 'cs_c_123', num: 123, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Willa Cather\'s 1918 novel My Ántonia.\n\nAs I looked about me I felt that the grass was the country, as the water is the sea. The red of the grass made all the great prairie the colour of wine-stains, or of certain seaweeds when they are first washed up. And there was so much motion in it; the whole country seemed, somehow, to be running.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "country" most nearly mean?',
    choices: { A: 'a nation or political state', B: 'a rural area as opposed to a city', C: 'the essential character or defining substance of a landscape', D: 'the population of a particular region' },
    answer: 'C', isSPR: false,
    explanation: '"The grass was the country, as the water is the sea" — Cather is saying that the grass is the defining, essential element of the landscape, just as water is what the sea fundamentally is. C correctly identifies "country" in this sense as the essential character or defining substance. A ("a nation") is the most common meaning but does not fit "the grass was the country." B ("rural area") is close but too geographic — the metaphor requires something like "defining essence." D ("population") is clearly not applicable.',
  },

  {
    id: 'cs_c_124', num: 124, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Chinua Achebe\'s 1958 novel Things Fall Apart.\n\nAmong the Ibo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten. Okonkwo said a few words to his daughter and threw in the proverb, and the combination was irresistible. Even his wife smiled.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "irresistible" most nearly mean?',
    choices: { A: 'impossible to prevent or stop', B: 'extremely attractive or compelling; impossible to refuse or resist', C: 'logically impossible to argue against', D: 'physically impossible to move or lift' },
    answer: 'B', isSPR: false,
    explanation: '"The combination was irresistible. Even his wife smiled." — the pairing of words and proverb was so compelling or charming that even Okonkwo\'s wife, presumably not easily won over, smiled. B correctly identifies irresistible as extremely attractive or compelling. A ("impossible to stop") describes an unstoppable force — not the meaning here. C ("logically impossible to argue against") attributes a logical quality to what is an affective response (the smile). D ("physically impossible to move") is clearly inapplicable.',
  },

  {
    id: 'cs_c_125', num: 125, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Ralph Ellison\'s 1952 novel Invisible Man.\n\nI am an invisible man. No, I am not a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms. I am a man of substance, of flesh and bone, fiber and liquids — and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "substance" most nearly mean?',
    choices: { A: 'a chemical compound or material', B: 'genuine reality; physical and social existence as a full person', C: 'financial wealth and material resources', D: 'the essential core of an argument' },
    answer: 'B', isSPR: false,
    explanation: '"I am a man of substance, of flesh and bone" — Ellison\'s narrator insists on his physical and human reality against the invisibility imposed by others\' refusal to see him. "Substance" here encompasses both physical reality (flesh and bone) and full human personhood. B correctly captures this. A ("chemical compound") is a narrow technical meaning. C ("financial wealth") is a common meaning of "substance" but is clearly not applicable to this assertion of human existence. D ("core of an argument") applies to intellectual discourse, not physical existence.',
  },

  {
    id: 'cs_c_126', num: 126, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Gabriel García Márquez\'s 1967 novel One Hundred Years of Solitude, translated from Spanish.\n\nThe world was so recent that many things lacked names, and in order to indicate them it was necessary to point. Every year during the month of March a family of ragged gypsies would set up their tents near the village, and with a great uproar of pipes and kettledrums they exhibited the latest marvels.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "recent" most nearly mean?',
    choices: { A: 'having happened a short time ago', B: 'newly created; at an early stage of existence', C: 'unfamiliar to the narrator', D: 'modern or contemporary' },
    answer: 'B', isSPR: false,
    explanation: '"The world was so recent that many things lacked names" — this is the mythic beginning of the novel\'s world; the world is new, at an early stage of creation. B correctly identifies "recent" here as newly created or at an early stage of existence. A ("happened a short time ago") captures the temporal meaning but lacks the sense of primordial newness — the world is not just recently past but newly made. C ("unfamiliar to the narrator") misreads the sentence — the world is recent, not merely unfamiliar. D ("modern") would be the opposite of this primordial newness.',
  },


  // ── Precise Word (5) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_127', num: 127, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Scientists studying megadroughts — prolonged droughts lasting decades or centuries — have found that the American West experienced several such events during the Medieval Warm Period, between roughly 900 and 1300 CE. Tree-ring data _______ that these past droughts were far more severe and prolonged than any drought recorded since European settlement began.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'prove', B: 'hope', C: 'indicate', D: 'ignore' },
    answer: 'C', isSPR: false,
    explanation: '"Indicate" correctly conveys that tree-ring data serve as proxy evidence pointing toward a conclusion — scientific inference from physical evidence, with appropriate epistemic modesty. "Prove" overstates certainty for proxy evidence. "Hope" introduces an aspiration where there is evidence. "Ignore" is the opposite of what the data do.',
  },

  {
    id: 'cs_c_128', num: 128, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The development of the transistor in 1947 at Bell Labs _______ the era of modern electronics, making possible the miniaturization that eventually led from room-sized computers to smartphones small enough to fit in a pocket.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'concluded', B: 'resisted', C: 'ushered in', D: 'interrupted' },
    answer: 'C', isSPR: false,
    explanation: '"Ushered in" most precisely names the relationship: the transistor initiated and introduced the era of modern electronics. "Concluded" means ended — the opposite. "Resisted" implies opposition. "Interrupted" implies a break in something already underway, but modern electronics began with the transistor.',
  },

  {
    id: 'cs_c_129', num: 129, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The scientific consensus on the age of the universe — approximately 13.8 billion years — rests on multiple _______ lines of evidence: measurements of the cosmic microwave background radiation, calculations of stellar ages in globular clusters, and observations of the expansion rate of the universe, all of which converge on the same figure.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'contradictory', B: 'independent', C: 'controversial', D: 'preliminary' },
    answer: 'B', isSPR: false,
    explanation: '"Independent" most precisely captures what makes the convergence compelling: each line of evidence arrives at the same answer through entirely separate methods — their independence makes their agreement strong evidence. "Contradictory" is incompatible with "converge on the same figure." "Controversial" and "preliminary" both undermine the claim of strong consensus rather than supporting it.',
  },

  {
    id: 'cs_c_130', num: 130, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Although the original Luddites were skilled textile workers who destroyed machinery in early nineteenth-century England, the term has been _______ to refer to anyone who opposes or is skeptical of new technology — a usage that strips the original movement of its specific labor-rights context.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'celebrated', B: 'corrected', C: 'broadened', D: 'restored' },
    answer: 'C', isSPR: false,
    explanation: '"Broadened" most precisely captures what happened to the term: it expanded from a specific historical reference to a general pejorative for technology skeptics. "Celebrated" does not describe semantic change. "Corrected" implies fixing an error — but the original meaning was accurate. "Restored" implies returning to an original meaning, which is the opposite of what the passage describes.',
  },

  {
    id: 'cs_c_131', num: 131, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The historian\'s portrait of the emperor is _______ — she neither condemns his atrocities nor praises his administrative achievements uncritically, but instead situates both within the institutional constraints and ideological frameworks that shaped all decisions in the late imperial period.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'hagiographic', B: 'polemical', C: 'contextual', D: 'revisionist' },
    answer: 'C', isSPR: false,
    explanation: '"Contextual" most precisely names the approach: situating both atrocities and achievements within institutional constraints and ideological frameworks — context is the organizing analytical principle. "Hagiographic" means reverentially celebratory — contradicted by neither condemning nor praising uncritically. "Polemical" means combatively one-sided — contradicted by the balanced approach described. "Revisionist" implies a deliberate challenge to established historical consensus, which the passage does not describe.',
  },


  // ── Main Purpose (4) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_132', num: 132, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Sojourner Truth\'s 1851 speech "Ain\'t I a Woman?"\n\nThat man over there says that women need to be helped into carriages, and lifted over ditches, and to have the best place everywhere. Nobody ever helps me into carriages, or over mud-puddles, or gives me any best place! And ain\'t I a woman? Look at me! Look at my arm! I have ploughed and planted, and gathered into barns, and no man could head me! And ain\'t I a woman?',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that the physical labor performed by enslaved women was economically more valuable than domestic labor',
      B: 'To expose the contradiction between idealized conceptions of femininity and the lived experience of Black women, asserting that Black women are fully women despite being excluded from that protection',
      C: 'To criticize men who help white women into carriages while ignoring Black women',
      D: 'To demand that the same courtesies extended to white women be extended to Black women',
    },
    answer: 'B', isSPR: false,
    explanation: 'Truth uses the rhetorical contrast between the idealized treatment of women (carriages, best places) and her own experience (labor, no help) to argue that the standard being applied to define "woman" excludes Black women — and then asserts her womanhood anyway through the repeated refrain. B correctly identifies this as exposing a contradiction and asserting inclusion. A narrows to economic comparison not made in the passage. C focuses narrowly on carriage-helping men. D demands equal courtesy — the rhetorical purpose is broader: to challenge the definition of womanhood itself.',
  },

  {
    id: 'cs_c_133', num: 133, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Researchers studying language acquisition in children have found that babies begin distinguishing the phonemes of their native language from those of non-native languages by 6–8 months of age, before they produce any words. By 10–12 months, they have largely lost the ability to discriminate phonemes absent from their native language — a process called "perceptual narrowing." This narrowing is not a cognitive deficit but an efficiency: the brain optimizes for the sounds that matter in the child\'s linguistic environment rather than maintaining sensitivity to all possible sounds.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that early language exposure permanently damages infants\' ability to learn second languages later in life',
      B: 'To describe the process of perceptual narrowing in language acquisition and reframe it as a functional adaptation rather than a loss',
      C: 'To demonstrate that language acquisition is complete by the time a child is one year old',
      D: 'To compare the phoneme discrimination abilities of infants and adults',
    },
    answer: 'B', isSPR: false,
    explanation: 'The passage describes perceptual narrowing (infants lose sensitivity to non-native phonemes) and then explicitly reframes it as efficiency — optimization, not deficit. B correctly captures both: the description of the process and the reframing as functional adaptation. A says early exposure "permanently damages" second language acquisition — the passage does not claim this. C says acquisition is complete by one year — the passage describes only perceptual narrowing at that stage. D describes a comparison the passage does not make.',
  },

  {
    id: 'cs_c_134', num: 134, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from John Stuart Mill\'s 1859 essay On Liberty.\n\nThe object of this Essay is to assert one very simple principle, as entitled to govern absolutely the dealings of society with the individual in the way of compulsion and control, whether the means used be physical force in the form of legal penalties, or the moral coercion of public opinion. That principle is, that the sole end for which mankind are warranted in interfering with the liberty of any of their number, is self-protection.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of this passage?',
    choices: {
      A: 'To argue that legal penalties are a more effective means of controlling behavior than social pressure',
      B: 'To introduce the harm principle — that interference with individual liberty is only justified for the purpose of preventing harm to others',
      C: 'To criticize governments that use physical force to suppress political dissent',
      D: 'To define liberty as freedom from all social obligations and responsibilities',
    },
    answer: 'B', isSPR: false,
    explanation: 'Mill states his purpose explicitly: to assert the principle that the only justification for interference with individual liberty is self-protection — what is now called the "harm principle." B correctly identifies this. A claims Mill compares legal and social coercion as mechanisms — he lists them as two forms of the same thing, not comparing their effectiveness. C introduces a specific political criticism not in the passage. D defines liberty as freedom from all social obligations — Mill is making a narrower claim about when interference is justified.',
  },

  {
    id: 'cs_c_135', num: 135, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Geographer Yi-Fu Tuan distinguished between "space" and "place" in ways that transformed how social scientists and humanists think about human environments. Space, in his framework, is abstract, open, and undifferentiated — the geometric void of potential. Place is space that has been invested with meaning through human experience, memory, and attachment. The same physical location can be experienced as threatening, anonymous space or as meaningful, cherished place depending on the experiential history a person or community brings to it. Tuan\'s distinction implies that built environment alone cannot make place — only human experience over time can.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that architects and urban planners should prioritize human attachment over geometric efficiency in their designs',
      B: 'To introduce Tuan\'s space/place distinction, explain the experiential basis that produces place, and draw out its implication for what creates meaningful environments',
      C: 'To compare Tuan\'s approach to human geography with competing frameworks in social science',
      D: 'To demonstrate that space and place are interchangeable terms that describe the same physical reality from different perspectives',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly maps the three-part structure: introduce the distinction, explain that place is produced by human experience, and draw the implication (built environment alone cannot make place — only experience over time). A introduces a prescriptive argument for architects that the passage does not make. C describes a comparison with competing frameworks the passage does not develop. D says the terms are interchangeable — Tuan\'s whole point is that they are not.',
  },


  // ── Structure (3) ─────────────────────────────────────────────────────────

  {
    id: 'cs_c_136', num: 136, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The mantis shrimp possesses the most complex visual system of any known animal. While humans have three types of photoreceptor cells — sensitive to red, green, and blue light — the mantis shrimp has sixteen types, spanning wavelengths from deep ultraviolet to far red, including four channels in the ultraviolet range alone. Surprisingly, behavioral studies show that mantis shrimp are no better than humans at distinguishing similar colors — they process color differently, comparing signals between photoreceptor types locally rather than across the whole visual field as humans do.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes an animal\'s remarkable visual complexity, provides the anatomical details, and then complicates the initial claim with surprising behavioral evidence.',
      B: 'It argues that the mantis shrimp\'s visual system is superior to the human visual system in every measurable way.',
      C: 'It traces the evolutionary history of photoreceptor development from simple to complex organisms.',
      D: 'It presents competing scientific explanations for the mantis shrimp\'s unusual number of photoreceptors.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: remarkable complexity (most complex visual system), anatomical detail (sixteen photoreceptor types), and complicating behavioral evidence (not better than humans at color discrimination). B claims superiority in every way — the behavioral evidence complicates this. C describes an evolutionary history the passage does not trace. D presents competing explanations — the passage presents one explanation for how the system functions, not competing explanations for its existence.',
  },

  {
    id: 'cs_c_137', num: 137, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Machiavelli\'s 1532 work The Prince, translated from Italian.\n\nA prince ought to have no other aim or thought, nor select anything else for his study, than war and its rules and discipline; for this is the sole art that belongs to him who rules, and it is of such force that it not only upholds those who are born princes, but it often enables men of private fortune to rise to that rank. And, on the contrary, it is seen that when princes have thought more of ease than of arms they have lost their states.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It states a prescriptive principle, supports it with two positive examples, and reinforces it with a contrasting cautionary example.',
      B: 'It argues that war is the most important human activity and that peace is a sign of moral weakness.',
      C: 'It traces the career of a successful prince from private citizen to ruler through military expertise.',
      D: 'It presents an exception to the general principle that princes are born rather than made.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the structure: prescriptive principle (a prince should study only war), two positive examples (upholds born princes / enables private men to rise), and the contrasting cautionary case (princes who chose ease over arms lost their states). B claims war is the most important human activity — Machiavelli\'s claim is specifically about princes, not humanity. C describes a narrative career trajectory not in the passage. D describes an exception to a general principle, but Machiavelli is making a positive claim, not noting an exception.',
  },

  {
    id: 'cs_c_138', num: 138, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Sociologist Erving Goffman proposed that everyday social interaction follows the logic of theatrical performance: individuals manage impressions to project a particular "self" to others, just as actors project characters to audiences. Goffman called the parts of social life visible to others the "front stage" and the parts hidden from view the "back stage." Critics of Goffman have noted that his theatrical model treats all social behavior as strategic and calculating, leaving little room for genuine spontaneous action or authentic expression. Goffman himself acknowledged that the metaphor has limits — the actor knows they are performing; social actors, he admitted, are often taken in by their own performances.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It introduces a sociological theory, explains its key concepts, presents a critique of it, and notes that the theory\'s originator acknowledged its limitations.',
      B: 'It argues that Goffman\'s theatrical model is the most accurate description of human social behavior ever proposed.',
      C: 'It compares Goffman\'s theory with rival sociological approaches to show that none is fully satisfactory.',
      D: 'It traces the intellectual development of Goffman\'s thought from his early work to his later revisions.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the four-part structure: introduce the theory (theatrical logic), explain key concepts (front/back stage), present a critique (strategic/calculating, no room for genuine action), and note Goffman\'s own acknowledgment of limits (actors know they perform; social actors are taken in by their own performances). B claims advocacy — the passage is descriptive and critical. C describes a comparison with rival theories not present in the passage. D traces intellectual development — the passage does not describe an evolution of Goffman\'s thought across works.',
  },


  // ── Function of Underlined (5) ────────────────────────────────────────────

  {
    id: 'cs_c_139', num: 139, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The Grand Canyon was formed over approximately five to six million years as the Colorado River carved through layers of rock deposited over nearly two billion years. Walking from the rim to the canyon floor is often described as walking back through geological time: the rocks at the bottom are among the oldest exposed on Earth\'s surface. A geologist once remarked that the canyon is "the Earth\'s autobiography, written in stone."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'A geologist once remarked that the canyon is "the Earth\'s autobiography, written in stone."',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides geological data about the age of the rock layers at the canyon\'s bottom.',
      B: 'It offers a memorable metaphor that encapsulates the geological significance described in the prior sentences.',
      C: 'It introduces a new argument about the relationship between geology and human history.',
      D: 'It challenges the claim that walking to the canyon floor is equivalent to walking through geological time.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences explain the canyon\'s geological significance: ancient rock exposed, layers representing vast spans of time. The underlined sentence provides a metaphor — "autobiography, written in stone" — that encapsulates this in a memorable form. B correctly identifies this as a metaphor that captures what the prior sentences described. A says it provides geological data — it provides a metaphor, not data. C says it introduces a new argument about geology and human history — it summarizes, not introduces a new argument. D says it challenges the prior claim — it reinforces it metaphorically.',
  },

  {
    id: 'cs_c_140', num: 140, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Economists studying the gig economy have found that workers classified as independent contractors rather than employees typically lack access to employer-provided health insurance, unemployment insurance, paid leave, and retirement contributions. These gaps in protection disproportionately affect low-income workers, who are concentrated in platform-based service jobs with no option for employer benefits. Legal challenges to contractor classification have had limited success in part because courts have relied on work-relationship criteria established before platform economies existed.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Legal challenges to contractor classification have had limited success in part because courts have relied on work-relationship criteria established before platform economies existed.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces the main argument that the text will develop about the gig economy.',
      B: 'It provides an example of a low-income gig worker affected by contractor classification.',
      C: 'It explains a structural reason why the problem described in the prior sentences has been difficult to address through existing legal mechanisms.',
      D: 'It proposes a solution to the benefit-gap problem facing gig economy workers.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The prior sentences establish the problem: contractor classification leaves workers without benefits. The underlined sentence explains why this has been hard to fix through litigation — courts apply outdated criteria. C correctly identifies this as explanation of a structural obstacle to legal remediation. A says it introduces the main argument — it is the concluding sentence, not the introduction. B says it provides a specific worker example — it describes legal mechanisms, not individual workers. D says it proposes a solution — it describes an obstacle, not a remedy.',
  },

  {
    id: 'cs_c_141', num: 141, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Virginia Woolf\'s 1929 essay A Room of One\'s Own.\n\nA woman must have money and a room of her own if she is to write fiction; and that, as you will see, leaves the great problem of the true nature of woman and the true nature of fiction unsolved. I have shirked the duty of coming to a conclusion upon these two questions — women and fiction remain, so far as I am concerned, unsolved problems.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'I have shirked the duty of coming to a conclusion upon these two questions — women and fiction remain, so far as I am concerned, unsolved problems.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides the essay\'s central conclusion about the relationship between financial independence and creative work.',
      B: 'It acknowledges a deliberate incompleteness — that Woolf has not answered the deeper questions her opening premise raises, and frames this openly.',
      C: 'It argues that the questions of women and fiction are unanswerable in principle.',
      D: 'It criticizes earlier critics who drew definitive conclusions about the nature of women and fiction.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Woolf\'s opening sentence identifies the problem (women need money and a room to write) but notes it leaves deeper questions — the true nature of women and fiction — unsolved. The underlined sentence is Woolf explicitly acknowledging that she has chosen not to resolve those deeper questions. B correctly identifies this as a deliberate, self-aware acknowledgment of incompleteness. A says it provides the essay\'s central conclusion — it explicitly says the questions remain unsolved, not concluded. C says the questions are unanswerable in principle — Woolf says she has not answered them, not that they cannot be answered. D says it criticizes earlier critics — there is no such criticism in the sentence.',
  },

  {
    id: 'cs_c_142', num: 142, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Behavioral ecologists studying cooperative breeding — in which non-parent individuals help raise offspring — have found that helpers increase offspring survival rates substantially. The evolutionary puzzle is why helpers sacrifice their own reproductive opportunities. Kin selection explains some cases: helpers are often closely related to the offspring they assist. But in species where helpers are unrelated to the brood, kin selection cannot explain the behavior. In these cases, researchers have proposed that helping may provide direct benefits to the helper — improving social bonds, acquiring parenting skills, or establishing inheritance rights to the breeding territory.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'But in species where helpers are unrelated to the brood, kin selection cannot explain the behavior.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It summarizes the overall finding about cooperative breeding and helper behavior.',
      B: 'It identifies the limit of the kin selection explanation and creates the need for the alternative explanations that follow.',
      C: 'It introduces cooperative breeding as a phenomenon unfamiliar to most readers.',
      D: 'It provides a specific example of a species in which kin selection fails to explain cooperative breeding.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence establishes that kin selection explains some cases. The underlined sentence identifies where kin selection fails (unrelated helpers), and the next sentence introduces alternative explanations. B correctly identifies the sentence as marking the boundary of kin selection\'s explanatory power and creating the logical necessity for the alternatives. A says it summarizes the overall finding — it narrows rather than summarizes. C says it introduces cooperative breeding — that was done in the opening sentence. D says it gives a specific species example — it describes a category of cases, not a named species.',
  },

  {
    id: 'cs_c_143', num: 143, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Audre Lorde\'s 1984 essay "The Master\'s Tools Will Never Dismantle the Master\'s House."\n\nThose of us who stand outside the circle of this society\'s definition of acceptable women; those of us who have been forged in the crucibles of difference — those of us who are poor, who are lesbians, who are Black, who are older — know that survival is not an academic skill. It is learning how to take our differences and make them strengths. For the master\'s tools will never dismantle the master\'s house.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'For the master\'s tools will never dismantle the master\'s house.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a new argument about the limitations of construction tools as metaphors.',
      B: 'It provides a metaphorical conclusion that names the principle underlying the preceding argument about difference and survival.',
      C: 'It qualifies the prior sentences by suggesting that survival skills are insufficient for achieving social change.',
      D: 'It summarizes the historical experience of marginalized women in the United States.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Lorde establishes that those forged in difference have survival knowledge — not academic skill — and that differences must become strengths. The underlined sentence provides the metaphorical principle that names what this means: the system\'s own mechanisms (the master\'s tools) cannot be used to challenge the system itself. B correctly identifies this as a metaphorical conclusion naming the underlying principle. A says it introduces a new argument about tools — the tools are metaphorical. C says it qualifies the prior sentences by limiting them — it extends and concludes the argument, not limits it. D says it summarizes historical experience — it states a principle, not a historical narrative.',
  },


  // ── Cross-Text (7) ────────────────────────────────────────────────────────

  {
    id: 'cs_c_144', num: 144, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nPhysicist Niels Bohr argued that quantum mechanics reveals a fundamental limit on what can be known about a physical system. The act of measurement necessarily disturbs the system being measured — we cannot simultaneously know the exact position and exact momentum of a particle. This is not a limitation of instruments but a feature of reality itself.',
    dualText: 'Text 2\n\nAlbert Einstein never accepted the Copenhagen interpretation of quantum mechanics that Bohr championed. Einstein believed that quantum mechanics, while empirically successful, was incomplete — that there must be "hidden variables" determining outcomes that appear random. "God does not play dice," he famously insisted, expressing his conviction that the apparent indeterminacy of quantum mechanics reflected our ignorance, not an irreducible feature of reality.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, what is the core disagreement between Bohr and Einstein?',
    choices: {
      A: 'Whether quantum mechanics is empirically accurate in its predictions about particle behavior',
      B: 'Whether quantum indeterminacy is a fundamental feature of reality or a reflection of incomplete knowledge',
      C: 'Whether the act of measurement disturbs the system being measured',
      D: 'Whether hidden variables have been experimentally confirmed',
    },
    answer: 'B', isSPR: false,
    explanation: 'Bohr argues that indeterminacy is a feature of reality itself — not a measurement limitation or knowledge gap. Einstein argues the apparent indeterminacy reflects our ignorance of hidden variables, not an irreducible feature of reality. B correctly identifies this as the core disagreement. A says the dispute is over empirical accuracy — Text 2 concedes quantum mechanics is "empirically successful." C about measurement disturbance — this is Bohr\'s claim, not disputed by Einstein explicitly. D about experimental confirmation of hidden variables — neither text discusses experimental tests of hidden variables.',
  },

  {
    id: 'cs_c_145', num: 145, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nThe following text is from Walt Whitman\'s 1855 poem "Song of Myself."\n\nI celebrate myself, and sing myself,\nAnd what I assume you shall assume,\nFor every atom belonging to me as good belongs to you.\n\nI loafe and invite my soul,\nI lean and loafe at my ease observing a spear of summer grass.',
    dualText: 'Text 2\n\nThe following text is from Emily Dickinson\'s c. 1863 poem "I\'m Nobody! Who are you?"\n\nI\'m Nobody! Who are you?\nAre you — Nobody — too?\nThen there\'s a pair of us!\nDon\'t tell! they\'d advertise — you know!\n\nHow dreary — to be — Somebody!\nHow public — like a Frog —\nTo tell one\'s name — the livelong June —\nTo an admiring Bog!',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a difference in how the speakers in Text 1 and Text 2 relate to public identity?',
    choices: {
      A: 'The speaker in Text 1 celebrates a large, inclusive public self; the speaker in Text 2 celebrates anonymity and mocks the pretension of public visibility.',
      B: 'The speaker in Text 1 emphasizes solitude; the speaker in Text 2 seeks a large audience.',
      C: 'Both speakers reject public identity, but Text 1 does so more directly.',
      D: 'The speaker in Text 1 addresses God; the speaker in Text 2 addresses a specific friend.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Whitman\'s speaker celebrates himself in a way that universally encompasses others ("what I assume you shall assume") — a grand public self. Dickinson\'s speaker is "Nobody" who finds "Somebody" status dreary and frog-like. A correctly identifies the contrast. B reverses both — Whitman\'s speaker loafs alone observing grass (seemingly solitary) but the "I" is expansive and inclusive, while Dickinson\'s Nobody is conspiratorial, not seeking a large audience. C says both reject public identity — Whitman explicitly celebrates a public self. D misidentifies Whitman as addressing God and Dickinson as addressing a friend.',
  },

  {
    id: 'cs_c_146', num: 146, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nEvolutionary biologist Richard Dawkins proposed the concept of the "meme" in The Selfish Gene (1976) as a cultural analog to the gene: a unit of cultural transmission that replicates through imitation. Ideas, tunes, fashions, and phrases are memes that spread through a population in ways that mirror the spread of genes — those best suited to their cultural environment replicate most successfully, regardless of whether they benefit the individuals who host them.',
    dualText: 'Text 2\n\nCognitive scientists Dan Sperber and Hugo Mercier have challenged the meme analogy on the grounds that cultural transmission is not simply imitative replication. Unlike genetic copying, which is high-fidelity, the transmission of ideas and cultural forms involves active reconstruction by the receiver — each person interprets, transforms, and selectively retains elements based on their own cognitive architecture and prior knowledge. Cultural evolution is more like a game of telephone than a Xerox machine.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Sperber and Mercier most likely respond to Dawkins\'s meme concept?',
    choices: {
      A: 'By accepting the meme concept but arguing that certain types of cultural forms replicate more faithfully than others',
      B: 'By arguing that the genetic analogy breaks down because cultural transmission involves active cognitive reconstruction rather than faithful copying',
      C: 'By accepting the meme concept and extending it to non-human species that demonstrate imitative learning',
      D: 'By rejecting the concept of cultural evolution entirely in favor of individual psychological analysis',
    },
    answer: 'B', isSPR: false,
    explanation: 'Sperber and Mercier explicitly challenge the meme analogy by pointing out that cultural transmission is not high-fidelity replication — it involves active cognitive reconstruction. B correctly captures this. A accepts the meme concept with a modification — Text 2 challenges the analogy at its core. C accepts and extends it — Text 2 rejects the analogy. D rejects cultural evolution entirely — Text 2 accepts that cultural transmission occurs; it disputes the fidelity of copying, not the existence of cultural change.',
  },

  {
    id: 'cs_c_147', num: 147, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nHistorian Howard Zinn argued in A People\'s History of the United States (1980) that conventional histories narrate the past from the perspective of those in power — governments, elites, conquerors — while systematically silencing the perspectives of ordinary people, enslaved people, women, and indigenous populations. Zinn sought to reverse this by foregrounding the experiences of those excluded from the dominant historical narrative.',
    dualText: 'Text 2\n\nHistorian Michael Kazin has criticized Zinn\'s approach as suffering from the same distortions it sought to correct. By celebrating resistance and suffering among the powerless while uniformly dismissing American political institutions, capitalism, and leadership figures, Zinn produced a counter-mythology rather than rigorous history. Historical understanding requires grappling with contradictions and complexities, not replacing one celebratory narrative with an opposite one.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, both Zinn and Kazin would most likely agree with which statement?',
    choices: {
      A: 'Conventional historical narratives have accurately captured the full range of American historical experience.',
      B: 'The experiences of ordinary people, women, and marginalized groups are important subjects for historical inquiry.',
      C: 'Rigorous history must foreground suffering and resistance rather than the achievements of political institutions.',
      D: 'Histories that reflect the perspective of those in power are inherently more objective than those that foreground the marginalized.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Zinn argues that ordinary and marginalized people have been systematically excluded from history. Kazin criticizes Zinn\'s execution but does not dispute that these subjects are important — his critique is that Zinn replaced one mythology with another rather than achieving rigorous history. Both would agree that these are legitimate and important subjects. B captures this shared premise. A claims conventional narratives are accurate — Zinn explicitly disputes this; Kazin does not defend conventional narratives. C is Zinn\'s position — Kazin explicitly criticizes it. D says power-perspective histories are more objective — neither text makes this claim.',
  },

  {
    id: 'cs_c_148', num: 148, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from Mary Shelley\'s 1818 novel Frankenstein.\n\n"You are my creator, but I am your master — obey!" The monster\'s gaze was fixed on me. "You accuse me of murder; and yet you would, with a satisfied conscience, destroy your own creature. Oh, praise the eternal justice of man!"',
    dualText: 'Text 2\n\nThe following text is from H.G. Wells\'s 1896 novel The Island of Doctor Moreau.\n\n"You cannot imagine the strange colourless delight of these intellectual desires. The thing before you is no longer an animal, a fellow-creature, but a problem. Sympathetic pain — all I know of it I remember as a thing I used to suffer from years ago. I wanted — it was the only thing I wanted — to find out how far it was possible to make a human animal."',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a notable difference in how the two created beings or creators are portrayed in Text 1 and Text 2?',
    choices: {
      A: 'In Text 1, the created being challenges its creator\'s moral authority; in Text 2, the creator describes having abandoned moral feeling in pursuit of intellectual goals.',
      B: 'In Text 1, the creator expresses regret for creating the monster; in Text 2, the creator expresses satisfaction with his creations.',
      C: 'In Text 1, the monster is portrayed as evil; in Text 2, Doctor Moreau is portrayed as heroic.',
      D: 'Both texts portray creators who are motivated primarily by the desire to benefit humanity.',
    },
    answer: 'A', isSPR: false,
    explanation: 'In Text 1, Frankenstein\'s monster inverts moral authority — accusing the creator of injustice, demanding obedience. In Text 2, Moreau describes the disappearance of sympathetic pain and the reduction of creatures to intellectual problems — he has abandoned moral feeling. A correctly contrasts the moral challenge in Text 1 with the moral abdication in Text 2. B says Frankenstein expresses regret — he is accused of murder but does not express regret in this excerpt. C says the monster is evil — the passage shows the monster making a moral argument. D says both creators are motivated by benefiting humanity — Moreau describes pure intellectual curiosity, not humanitarian aims.',
  },

  {
    id: 'cs_c_149', num: 149, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nEconomist Thomas Piketty argued in Capital in the Twenty-First Century (2013) that when the rate of return on capital (r) exceeds the rate of economic growth (g), wealth concentrations increase because returns on existing wealth accumulate faster than the economy creates new wealth. Since this condition — r > g — has historically prevailed except during periods of war or exceptional growth, rising inequality is the natural tendency of market economies absent significant redistributive intervention.',
    dualText: 'Text 2\n\nEconomist Lawrence Summers challenged Piketty\'s r > g framework by arguing that the relevant comparison is not between aggregate rates but between the net return on capital after depreciation and the growth rate. When capital depreciates rapidly — as it does in technology-intensive economies — the net return may be considerably lower than Piketty\'s r, substantially weakening the inequality-concentration dynamic. Summers also noted that Piketty conflates the market value of wealth with the productive capacity of capital, which have diverged significantly in housing markets.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Summers most likely characterize Piketty\'s argument?',
    choices: {
      A: 'As empirically accurate but politically impractical in its prescriptions for redistribution',
      B: 'As based on a flawed measurement of the return on capital that overstates the inequality-driving dynamic',
      C: 'As correct about the tendency toward wealth concentration but wrong about its historical prevalence',
      D: 'As an accurate description of industrial economies that does not apply to technology-intensive ones',
    },
    answer: 'B', isSPR: false,
    explanation: 'Summers argues that Piketty\'s r doesn\'t account for depreciation — the net return is lower — and that Piketty conflates market value with productive capacity. Both objections concern measurement problems that overstate the r > g inequality dynamic. B correctly identifies this. A says the argument is empirically accurate — Summers disputes the empirical foundation. C says it\'s correct about tendency but wrong about historical prevalence — Summers challenges the measurement, not the historical timeline. D says it doesn\'t apply to technology-intensive economies — Summers uses technology as an example of rapid depreciation but does not say the framework simply doesn\'t apply.',
  },

  {
    id: 'cs_c_150', num: 150, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nNeuroscientist Sam Harris argues that free will is an illusion. Every thought, decision, and action arises from prior causes — brain states, genetics, environment — over which the individual had no ultimate control. When a person deliberates and chooses, they experience the choice as free, but the sense of authorship is itself a product of prior neural processes. There is no self standing apart from these causes that could have chosen differently.',
    dualText: 'Text 2\n\nPhilosopher Daniel Dennett argues that Harris conflates two different senses of "free will." The kind of freedom that matters — the kind worth wanting — is not freedom from causation but freedom from compulsion, addiction, manipulation, and ignorance. A person who deliberates based on their own values and reasons, and whose deliberation makes a causal difference to what they do, is exercising the only kind of freedom that rational creatures could meaningfully want or need. Neuroscience does not eliminate this kind of freedom.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Dennett most likely respond to Harris\'s argument?',
    choices: {
      A: 'By accepting that free will is an illusion but arguing that the illusion serves important social functions',
      B: 'By arguing that Harris is correct about causation but wrong to conclude that causal determination means actions have no moral significance',
      C: 'By challenging Harris\'s neuroscientific claims about the relationship between brain states and decisions',
      D: 'By arguing that Harris\'s argument targets the wrong definition of free will — one that no compatibilist philosopher would defend',
    },
    answer: 'D', isSPR: false,
    explanation: 'Dennett\'s argument is that Harris conflates two senses of free will — that the kind Harris disproves (freedom from causation) is not the kind worth wanting, and neuroscience does not eliminate the meaningful kind (freedom from compulsion, manipulation, ignorance). D correctly captures this: Harris attacks a definition of free will that compatibilists don\'t hold. A says Dennett accepts Harris\'s conclusion — he explicitly argues free will is not eliminated by neuroscience. B says Dennett accepts causation but disputes moral significance — Dennett\'s point is about definitions, not moral significance per se. C says Dennett disputes the neuroscience — he accepts the causal story; his dispute is about what it implies.',
  },

];
