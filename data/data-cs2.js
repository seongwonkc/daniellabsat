'use strict';

// data-cs2.js — Craft & Structure, 30 questions
// WiC ×6, Precise Word ×5, Main Purpose ×4, Structure ×5, Function ×5, Cross-Text ×5
// IDs: cs_c_061–cs_c_090  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_CS2 = [

  // ── WiC (6) ───────────────────────────────────────────────────────────────

  {
    id: 'cs_c_061', num: 61, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Louisa May Alcott\'s 1868 novel Little Women.\n\nMeg tried to be economical, and hers was the most painful attempt of the three — because, when she had made a careful note of all the expenses, she found herself more than thirty dollars in arrears. This discovery reduced her to tears, and she spent the next morning trying to reconcile the household accounts.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "arrears" most nearly mean?',
    choices: { A: 'the back portion of a room', B: 'a debt or deficit; behind in obligations', C: 'careful financial records', D: 'a feeling of regret' },
    answer: 'B', isSPR: false,
    explanation: 'Meg finds herself "thirty dollars in arrears" after accounting for expenses — she has overspent and is behind financially. B correctly identifies arrears as a deficit or debt. A ("back portion of a room") conflates "arrears" with "rear." C ("financial records") describes what Meg was keeping, not what she found herself in. D ("regret") captures the emotional tone but not the financial meaning.',
  },

  {
    id: 'cs_c_062', num: 62, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Nathaniel Hawthorne\'s 1850 novel The Scarlet Letter.\n\nA wild peal of laughter broke from the lips of Hester Prynne; and even little Pearl, who had not expected so much of gaiety from her mother, could not resist the contagion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "contagion" most nearly mean?',
    choices: { A: 'a dangerous infectious disease', B: 'an irresistible spreading influence', C: 'a feeling of sudden dread', D: 'an uncontrollable fit of crying' },
    answer: 'B', isSPR: false,
    explanation: 'Pearl "could not resist the contagion" of Hester\'s laughter — the laughter spread to Pearl as if infectious. B correctly identifies contagion here as an irresistibly spreading influence. A ("infectious disease") is the most common meaning but clearly does not fit a passage about laughter. C ("dread") and D ("crying") are inconsistent with the context of gaiety.',
  },

  {
    id: 'cs_c_063', num: 63, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from George Eliot\'s 1871 novel Middlemarch.\n\nThe most distinct impression left in Dorothea\'s mind was that Mr. Casaubon had been distant all evening, wrapped in some inward debate that no mere social occasion could penetrate.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "penetrate" most nearly mean?',
    choices: { A: 'pierce or puncture a physical surface', B: 'break through to reach a mental or emotional state', C: 'fully understand a complex argument', D: 'enter a physical space forcibly' },
    answer: 'B', isSPR: false,
    explanation: '"No mere social occasion could penetrate" Casaubon\'s inward debate — the social situation cannot break through his absorption in private thought to reach him. B correctly captures this: gaining access to a mental state. A ("pierce a surface") is the literal meaning but does not apply to a social occasion reaching someone\'s thoughts. C ("understand an argument") describes comprehension rather than the breaking-through quality. D ("enter a space") describes physical intrusion.',
  },

  {
    id: 'cs_c_064', num: 64, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Kate Chopin\'s 1899 novel The Awakening.\n\nHow strange and awful it seemed to stand naked under the sky! how delicious! She felt like some new-born creature, opening its eyes in a familiar world that it had never known.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "awful" most nearly mean?',
    choices: { A: 'extremely unpleasant or terrible', B: 'awe-inspiring; producing wonder and reverence', C: 'physically painful', D: 'morally wrong or shameful' },
    answer: 'B', isSPR: false,
    explanation: '"How strange and awful it seemed...how delicious!" — the pairing of "awful" with "delicious" signals that "awful" is used in its older sense: awe-inspiring or wonder-producing. B is correct. A ("extremely unpleasant") is the modern meaning but is directly contradicted by the juxtaposition with "delicious." C ("physically painful") and D ("morally wrong") are both inconsistent with the tone of joyful awakening.',
  },

  {
    id: 'cs_c_065', num: 65, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Joseph Conrad\'s 1907 novel The Secret Agent.\n\nWinnie Verloc\'s mother had a serene countenance — mild and blank as a summer sky — quite capable, her daughter knew, of concealing any secret that had once been placed behind it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "countenance" most nearly mean?',
    choices: { A: 'approval or support of an action', B: 'facial expression or appearance', C: 'patience in the face of hardship', D: 'the general character of a place' },
    answer: 'B', isSPR: false,
    explanation: '"A serene countenance" that can conceal a secret placed "behind it" — the countenance is her face, the visible surface behind which secrets are hidden. B correctly identifies countenance as facial expression. A ("approval") is a verb meaning of "countenance" (to countenance something = to approve it), not the noun meaning here. C ("patience") and D ("character of a place") are also not applicable.',
  },

  {
    id: 'cs_c_066', num: 66, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Edith Wharton\'s 1920 novel The Age of Innocence.\n\nTo give a name to what was nameless was itself a kind of low act — the very currency, one might say, of mean minds.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "currency" most nearly mean?',
    choices: { A: 'money or financial instruments', B: 'the quality of being timely or up-to-date', C: 'the common medium through which something circulates or operates', D: 'acceptance within a social community' },
    answer: 'C', isSPR: false,
    explanation: '"The very currency...of mean minds" — naming the nameless is the medium that mean minds trade in and circulate. C captures currency as a medium of exchange or operation in a social context. A ("money") is the primary meaning but the passage is about an abstract social medium, not finance. B ("timeliness") is a different meaning of currency. D ("social acceptance") is related but less precise than C.',
  },


  // ── Precise Word (5) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_067', num: 67, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Sauropod dinosaur fossils are found on every continent except Antarctica, _______ that these creatures once inhabited a far more globally distributed range than any living land animal today.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'arguing', B: 'assuming', C: 'suggesting', D: 'confirming' },
    answer: 'C', isSPR: false,
    explanation: '"Suggesting" correctly conveys that fossil distribution is evidence from which scientists infer past range — without overstating certainty. "Arguing" implies active argumentation rather than what evidence implies. "Confirming" overstates — fossils suggest but don\'t definitively prove. "Assuming" implies the range is a premise brought to the evidence, not drawn from it.',
  },

  {
    id: 'cs_c_068', num: 68, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Despite its enormous cultural influence, the printing press was not without critics. Several prominent scholars of the fifteenth century _______ the technology, arguing that the rapid proliferation of printed texts would undermine the careful copying traditions that had preserved knowledge for centuries.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'celebrated', B: 'ignored', C: 'adopted', D: 'condemned' },
    answer: 'D', isSPR: false,
    explanation: '"Condemned" is most precise: the scholars actively denounced the technology on specific grounds. "Celebrated" directly contradicts the passage. "Ignored" implies passive inattention — the scholars are actively making arguments. "Adopted" implies they used the technology, contradicting the critical stance.',
  },

  {
    id: 'cs_c_069', num: 69, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Studies of second-language acquisition show that adult learners frequently plateau after achieving basic communicative competence — they reach a level sufficient for everyday interaction but _______ further progress, remaining just below the threshold of native-like fluency.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'accelerate', B: 'abandon', C: 'resist', D: 'stagnate without' },
    answer: 'D', isSPR: false,
    explanation: '"Stagnate without further progress" most precisely captures the plateau: development becomes static, not that learners actively resist or choose to abandon progress. "Accelerate" contradicts the plateau. "Abandon" implies a conscious decision. "Resist" implies active opposition rather than involuntary stagnation.',
  },

  {
    id: 'cs_c_070', num: 70, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The architect\'s later work _______ her early minimalism: where her first buildings had favored unadorned concrete and glass, her mature style incorporated ornamental details, textured facades, and references to regional vernacular traditions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'refined', B: 'departed from', C: 'resembled', D: 'extended' },
    answer: 'B', isSPR: false,
    explanation: '"Departed from" most precisely names the relationship: the later work moved away from the earlier approach. "Refined" implies improvement within the same approach. "Resembled" implies similarity, contradicted by the ornamental vs. minimal contrast. "Extended" implies continuation of minimalism, which the later style explicitly reversed.',
  },

  {
    id: 'cs_c_071', num: 71, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The political theorist\'s argument _______ itself: she claimed that all power is fundamentally coercive, yet she appealed to the force of reasoned persuasion to convince her readers — an appeal that presupposes the existence of at least one form of legitimate, non-coercive influence.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'reinforces', B: 'qualifies', C: 'contradicts', D: 'undermines' },
    answer: 'C', isSPR: false,
    explanation: '"Contradicts" is most precise: the argument contains a logical self-contradiction — the claim that all power is coercive is contradicted by the theorist\'s own practice of persuasion, which implicitly affirms non-coercive influence. "Undermines" implies weakening rather than explicit logical contradiction. "Reinforces" inverts the relationship. "Qualifies" suggests the argument modifies its own scope, but the passage describes a genuine inconsistency.',
  },


  // ── Main Purpose (4) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_072', num: 72, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Monarch butterflies undertake one of the most remarkable migrations in the animal kingdom. Each fall, millions travel up to 4,800 kilometers from Canada and the United States to overwintering sites in central Mexico. No single butterfly completes the round trip: the northern journey requires three to four generations, each traveling farther north before dying. Only the final "super generation" of summer — which can live up to eight months — makes the return flight south.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main idea of the text?',
    choices: {
      A: 'Monarch butterflies migrate up to 4,800 kilometers to Mexico each fall.',
      B: 'The monarch butterfly\'s migration is extraordinary both for its distance and for spanning multiple generations, with only a special long-lived generation completing the southward return.',
      C: 'The super generation of monarchs is uniquely capable of surviving the long migration because of its extended lifespan.',
      D: 'Scientists study monarch migration to understand how animals navigate vast distances.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly captures both the distance and the multi-generational structure, including the super generation. A gives only the distance, omitting the multi-generational structure. C focuses only on the super generation without the broader context. D introduces scientific study of navigation that the passage does not address.',
  },

  {
    id: 'cs_c_073', num: 73, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Frederick Douglass\'s 1852 speech "What to the Slave Is the Fourth of July?"\n\nThis Fourth of July is yours, not mine. You may rejoice, I must mourn. To drag a man in fetters into the grand illuminated temple of liberty, and call upon him to join you in joyous anthems, were inhuman mockery and sacrilegious irony.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To persuade white Americans to share Fourth of July celebrations with Black Americans',
      B: 'To expose the contradiction between the ideals of American freedom celebrated on the Fourth of July and the reality of slavery',
      C: 'To argue that religious celebrations should not be intertwined with patriotic ones',
      D: 'To decline an invitation to speak at a Fourth of July celebration',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the rhetorical purpose: Douglass uses the language of celebration to expose its hypocrisy — "the grand illuminated temple of liberty" is a mockery when the enslaved are excluded from its promises. A inverts the purpose — Douglass is not encouraging shared celebration. C introduces a claim about religion and patriotism the passage does not make. D misreads the passage as a personal declination rather than a political indictment.',
  },

  {
    id: 'cs_c_074', num: 74, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The most transformative scientific breakthroughs often come from people trained in multiple disciplines who apply methods from one domain to unsolved problems in another. The structure of DNA was elucidated partly by a physicist; penicillin was developed into a usable drug by a biochemist and an experimental pathologist; information theory drew on both electrical engineering and mathematics. These examples suggest that the walls between academic disciplines may be an obstacle to innovation as much as they are an organizational convenience.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To profile the scientists who made breakthrough discoveries across multiple fields',
      B: 'To argue that interdisciplinary training produces more transformative scientific innovation than specialization',
      C: 'To explain the specific mechanisms by which cross-disciplinary knowledge transfer leads to breakthroughs',
      D: 'To suggest that academic disciplines were created arbitrarily and have no scientific justification',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the argument: interdisciplinary backgrounds produce more transformative breakthroughs, with the historical examples supporting this claim. A is too narrow — the scientists are examples, not the subject. C describes a mechanistic explanation the passage does not provide. D overstates — the passage says disciplinary walls can be "an obstacle," not that they have no justification.',
  },

  {
    id: 'cs_c_075', num: 75, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Philosophers of science debate whether theories should be judged by predictive accuracy or by literal truth about unobservable reality. The instrumentalist holds that accurate prediction is the only achievable goal — whether electrons "really exist" is unanswerable and irrelevant. The scientific realist insists that successful prediction is evidence for approximate truth about unobservable entities. The debate remains unresolved but shapes how scientists interpret concepts like quarks, dark matter, and wave functions.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that scientific realism is more defensible than instrumentalism',
      B: 'To explain why questions about whether electrons exist are unanswerable',
      C: 'To introduce two competing views about what scientific theories are for and note their ongoing significance',
      D: 'To demonstrate that concepts like dark matter cannot be verified and should be treated as fictions',
    },
    answer: 'C', isSPR: false,
    explanation: 'C correctly identifies the three-part structure: introduce instrumentalism, introduce realism, note that the unresolved debate shapes interpretation of key scientific concepts. The passage is descriptive, not advocacy. A advocates for realism — the passage presents both views evenhandedly. B focuses only on one aspect of instrumentalism. D attributes a dismissive conclusion the passage does not make.',
  },


  // ── Overall Structure (3) ──────────────────────────────────────────────────

  {
    id: 'cs_c_076', num: 76, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'River dams trap sediment that would otherwise flow downstream, causing deltas at rivers\' mouths to sink and erode. Without continuous sediment replenishment, natural compaction combined with sea-level rise causes delta surfaces to drop below sea level. The Nile Delta, the Mississippi Delta, and the Indus Delta all face this process today, threatening the agricultural land and coastal cities built on them.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It presents a problem, explains its mechanism, and identifies real-world locations experiencing it.',
      B: 'It argues that river dams should be removed to prevent coastal flooding.',
      C: 'It compares the effects of dam construction in three different river systems.',
      D: 'It traces a historical sequence leading to a current crisis in delta regions.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly traces the three-part structure: problem (dams trap sediment → deltas sink), mechanism (compaction + sea-level rise), and real-world examples (Nile, Mississippi, Indus). B introduces a policy argument the passage does not make. C mischaracterizes the three rivers as subjects of comparison — they are examples of the same phenomenon. D describes a historical narrative; the passage focuses on mechanism, not chronological sequence.',
  },

  {
    id: 'cs_c_077', num: 77, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Scientists once believed they were close to a complete theory of matter — protons, neutrons, and electrons seemed to be the fundamental building blocks. Then particle accelerators revealed a bewildering zoo of new particles: pions, kaons, lambda particles, and dozens more. Rather than simplifying the picture, this proliferation deepened the mystery. The eventual solution — that protons and neutrons are themselves composed of quarks — restored order by showing that the particle zoo could be explained by a small number of deeper constituents.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes an initial confidence, a complicating discovery, a deepened problem, and its eventual resolution.',
      B: 'It argues that quark theory is the final and complete account of fundamental matter.',
      C: 'It compares particle accelerators with earlier scientific instruments to show the advance of technology.',
      D: 'It presents a historical overview of nuclear physics from the nineteenth century to the present.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the four-part structure: initial confidence (complete theory within reach), complicating discovery (particle zoo), deepened problem ("deepened the mystery"), and resolution (quark theory). B advocates for quark theory as final — the passage describes it as a resolution, not a claim about finality. C introduces a comparison of instruments the passage does not make. D describes a historical survey from the 1800s; the passage is focused on a specific mid-century episode.',
  },

  {
    id: 'cs_c_078', num: 78, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Critics of Romantic nature poetry have argued it was politically conservative — a retreat from industrial modernity into an idealized past. This reading has historical support: Wordsworth\'s later career drifted toward establishment politics. But the same poets who mourned the enclosure of common lands were also attacking aristocratic hierarchy, celebrating the French Revolution, and defending the rights of the poor. The Romantics\' relationship to politics was not a withdrawal from it but an argument within it.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It presents a critical consensus, grants it partial validity, and complicates it with contradictory evidence.',
      B: 'It traces the political evolution of Romantic poets from radical to conservative.',
      C: 'It compares conservative and radical Romantic poets to show the movement was divided.',
      D: 'It argues that the Romantics were political radicals mischaracterized by later critics.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the three-part structure: critical consensus (conservative retreat), partial concession ("has historical support"), and complicating evidence (the same poets were also radicals). B describes a historical evolution the passage does not trace. C suggests the movement was divided between factions; the passage argues the same poets held both positions simultaneously. D overstates — the passage complicates the conservative label, not fully reverses it.',
  },


  // ── Function of Underlined (5) ────────────────────────────────────────────

  {
    id: 'cs_c_079', num: 79, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The electric eel is not actually an eel — it belongs to the knifefish family, more closely related to catfish than to true eels. Its body contains three specialized electric organs that together can generate discharges of up to 860 volts. These discharges serve multiple purposes: stunning prey, deterring predators, and allowing the electric eel to navigate murky water by generating a weak continuous field.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'Its body contains three specialized electric organs that together can generate discharges of up to 860 volts.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides evidence that the electric eel is not a true eel.',
      B: 'It introduces the physical basis for the capabilities described in the following sentence.',
      C: 'It explains why the electric eel belongs to the knifefish family.',
      D: 'It summarizes the main idea of the passage.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The underlined sentence establishes the physical mechanism (electric organs, 860 volts). The following sentence then explains what "these discharges" do — referring directly back to the underlined sentence. B correctly identifies this as establishing the physical basis for the functional explanation that follows. A links the electric organ to taxonomy, which is not the connection being made. C attributes a taxonomic function to an anatomical statement. D overstates — the sentence gives one anatomical detail, not the passage\'s main idea.',
  },

  {
    id: 'cs_c_080', num: 80, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The history of timekeeping shows how deeply societies are shaped by time-measurement technology. Early sundials divided days into irregular intervals that varied by season. The invention of the mechanical clock imposed a uniform, abstract time on everyday life, replacing natural rhythms with clock rhythms. This shift proved decisive for industrialization: factory production required precise, synchronized coordination that sundials could never have supported.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'This shift proved decisive for industrialization: factory production required precise, synchronized coordination that sundials could never have supported.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides an example of how sundials limited medieval economic activity.',
      B: 'It draws a historical contrast between pre-industrial and industrial timekeeping.',
      C: 'It explains the practical consequence of the uniform clock time described in the prior sentence.',
      D: 'It introduces the main argument the text will develop.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The prior sentence describes the imposition of uniform clock time. The underlined sentence explains why this mattered: it enabled industrialization by providing synchronized coordination. C correctly identifies this as explanation of consequence. A mentions sundials as limiters of medieval activity, not what the sentence does. B describes a contrast, but the sentence is explaining consequence rather than drawing a comparison. D overstates — the sentence concludes rather than introduces an argument.',
  },

  {
    id: 'cs_c_081', num: 81, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Archaeologists excavating a Late Bronze Age site in Greece found the palace complex systematically destroyed around 1200 BCE — tablets smashed, storerooms burned, roof timbers collapsed onto the floors. Some historians argue the destruction was caused by invaders; others point to evidence of internal social collapse. What is certain is that the destruction was deliberate and thorough. No attempt was made to rebuild or salvage.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'No attempt was made to rebuild or salvage.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a new theory about the cause of the Bronze Age collapse.',
      B: 'It provides additional evidence reinforcing the characterization of the destruction as thorough and final.',
      C: 'It refutes the theory that invaders caused the destruction.',
      D: 'It summarizes the main debate among historians about the site.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence states the destruction was "deliberate and thorough." The underlined sentence provides one more specific detail confirming the finality — nothing was rebuilt or salvaged. B correctly identifies this as reinforcing evidence. A introduces a new theory; the sentence makes no claim about cause. C attributes a refutation to the sentence; it says nothing about invaders vs. internal collapse. D summarizes the historian debate; the sentence is about physical evidence, not interpretive positions.',
  },

  {
    id: 'cs_c_082', num: 82, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Hannah Arendt\'s 1963 book Eichmann in Jerusalem.\n\nThe trouble with Eichmann was precisely that so many were like him, and that the many were neither perverted nor sadistic, that they were, and still are, terribly and terrifyingly normal. This normality was more frightening than all the atrocities put together, for it implied that this new type of criminal commits his crimes under circumstances that make it well-nigh impossible for him to know or to feel that he is doing wrong.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'This normality was more frightening than all the atrocities put together, for it implied that this new type of criminal commits his crimes under circumstances that make it well-nigh impossible for him to know or to feel that he is doing wrong.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It establishes that Eichmann was an exceptional and unusual case.',
      B: 'It explains why the normality established in the prior sentence is the more disturbing finding.',
      C: 'It summarizes the defense arguments made at Nuremberg.',
      D: 'It contrasts visible atrocities with invisible psychological processes.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence establishes the disturbing finding: Eichmann and his like were "terribly and terrifyingly normal." The underlined sentence explains why that normality is more frightening than the atrocities — because it implies structural conditions under which such actors cannot recognize their own wrongdoing. B correctly identifies this as the explanatory follow-through. A incorrectly frames Eichmann as exceptional — the argument is precisely that he was not. C mischaracterizes the sentence as summarizing Nuremberg defenses. D describes a contrast the sentence does not explicitly make.',
  },

  {
    id: 'cs_c_083', num: 83, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Anthropologist Anna Tsing argues that capitalism\'s expansion depends on "salvage accumulation" — extracting value from pockets of life not yet converted to capitalist norms. Old-growth forests, peasant economies, and migrant labor pools are productive precisely because they were not made by capitalism and retain characteristics that capitalism can harvest without having produced. When these pockets are depleted, capitalism must find new frontiers.',
    dualText: null, notes: null, noteTask: null, table: null,
    underline: 'Old-growth forests, peasant economies, and migrant labor pools are productive precisely because they were not made by capitalism and retain characteristics that capitalism can harvest without having produced.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces evidence that contradicts Tsing\'s salvage accumulation theory.',
      B: 'It specifies the mechanism of "salvage accumulation" introduced in the prior sentence.',
      C: 'It compares old-growth forests and peasant economies as competing sources of capitalist value.',
      D: 'It explains why capitalism will eventually exhaust all available frontiers.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentence introduces the concept of "salvage accumulation." The underlined sentence fills in the mechanism: why these pockets are valuable (not made by capitalism, retaining non-commodified characteristics capitalism can harvest). B correctly identifies this as specification of the mechanism. A frames the sentence as contradicting Tsing — it supports her. C misidentifies the sentence as a comparison between examples — they are treated as parallel instances. D describes the final sentence\'s claim about new frontiers.',
  },


  // ── Cross-Text (5) ────────────────────────────────────────────────────────

  {
    id: 'cs_c_084', num: 84, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nBiologist E.O. Wilson argued that human social behaviors — including altruism, aggression, and pair bonding — have evolutionary roots and can be understood through the same framework used to explain animal behavior. He proposed that genes shaping social behavior were subject to natural selection just as genes shaping physical traits are.',
    dualText: 'Text 2\n\nMany anthropologists and sociologists have pushed back against Wilson\'s sociobiology, arguing that human social behavior is primarily shaped by culture, language, and historical context rather than by genetics. They contend that the flexibility and variability of human societies across cultures cannot be explained by biological determinism and that invoking evolution to explain social behavior risks naturalizing unjust social arrangements.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would the scholars in Text 2 most likely respond to Wilson\'s argument?',
    choices: {
      A: 'By agreeing that genetics influences behavior but arguing that cultural factors are equally important',
      B: 'By accepting Wilson\'s evolutionary framework but questioning its application to aggression specifically',
      C: 'By rejecting the claim that human social behavior can be primarily explained through evolutionary biology',
      D: 'By supporting Wilson\'s argument but adding that cultural variation complicates the genetic analysis',
    },
    answer: 'C', isSPR: false,
    explanation: 'Text 2 scholars argue that human social behavior is primarily shaped by culture and history, not genetics, and that biological determinism cannot explain cross-cultural variability. C correctly captures this: they reject the primary evolutionary explanation. A softens the challenge by granting genetic influence — Text 2 scholars are more categorical in prioritizing culture. B accepts Wilson\'s framework and narrows objections to aggression — Text 2 challenges the whole framework. D adds cultural complexity while supporting Wilson — the opposite of Text 2\'s stance.',
  },

  {
    id: 'cs_c_085', num: 85, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nThe following text is from Mary Wollstonecraft\'s 1792 treatise A Vindication of the Rights of Woman.\n\nI wish to persuade women to endeavour to acquire strength, both of mind and body, and to convince them that the soft phrases, susceptibility of heart, and delicacy of sentiment are almost synonymous with epithets of weakness. If women be educated for dependence, the moral and physical powers of woman will be eradicated.',
    dualText: 'Text 2\n\nThe following text is from Hannah More\'s 1799 treatise Strictures on the Modern System of Female Education.\n\nWomen should cultivate their particular excellences — not by imitating the harsh and decisive qualities of men, but by refining the natural sensibilities and moral feelings which render them peculiarly fitted to shape the character of those who will one day govern the world.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a notable difference in how Text 1 and Text 2 portray women\'s emotional refinement?',
    choices: {
      A: 'Text 1 treats emotional refinement as a strength women should develop; Text 2 treats it as a weakness to overcome.',
      B: 'Text 1 treats emotional refinement as a product of harmful education for dependence; Text 2 treats it as an excellence women should cultivate.',
      C: 'Both texts view emotional refinement positively but disagree on whether it is innate.',
      D: 'Text 1 focuses on physical strength; Text 2 focuses on emotional refinement.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Wollstonecraft (Text 1) equates "susceptibility of heart" and "delicacy of sentiment" with weakness — products of education for dependence. More (Text 2) treats these same qualities ("natural sensibilities and moral feelings") as excellences to cultivate. B correctly captures this opposing evaluation. A inverts the positions. C incorrectly claims both texts are positive about emotional refinement — Text 1 is explicitly negative. D mischaracterizes Text 1 as about physical strength only.',
  },

  {
    id: 'cs_c_086', num: 86, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nSociologist Robert Putnam argued in Bowling Alone (2000) that social capital — the networks of relationships and trust that enable communities to function — has declined dramatically in the United States since the 1960s. Civic organizations, neighborhood associations, and informal social gatherings have all seen falling participation. Putnam attributed this decline primarily to television, suburban sprawl, and the entry of women into the workforce, which left less time for community involvement.',
    dualText: 'Text 2\n\nPutnam\'s diagnosis of declining social capital has been influential, but some sociologists argue that he overstated the case by focusing on a narrow set of formal civic institutions. Online communities, workplace networks, and new forms of informal association may represent alternative forms of social capital rather than its disappearance. Social capital, these critics suggest, has changed in form rather than declined in substance.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would the sociologists in Text 2 most likely respond to Putnam\'s claim?',
    choices: {
      A: 'By agreeing that social capital has declined but attributing it to different causes than Putnam identified',
      B: 'By arguing that Putnam\'s evidence is fabricated and his methodology is flawed',
      C: 'By conceding that formal civic participation has fallen while questioning whether this indicates a genuine overall decline in social capital',
      D: 'By rejecting the concept of social capital entirely as an analytical category',
    },
    answer: 'C', isSPR: false,
    explanation: 'Text 2 concedes the premise about formal civic institutions (Putnam\'s narrow focus) but challenges the overall conclusion by pointing to alternative forms of social capital — online and workplace networks. C correctly captures this: formal participation fell, but that may not indicate a true overall decline. A agrees on decline but disputes causes — Text 2 disputes whether there is a genuine decline, not just the causes. B attacks methodology as fabricated — Text 2 calls the diagnosis overstated, not fraudulent. D rejects the concept itself — Text 2 works within the social capital framework.',
  },

  {
    id: 'cs_c_087', num: 87, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nHistorian Alfred Crosby argued in The Columbian Exchange (1972) that the transfer of diseases from Europe to the Americas following 1492 was the primary driver of indigenous population collapse. European diseases like smallpox and measles, to which indigenous populations had no prior immunity, killed an estimated 50–90 percent of the pre-contact population in many regions.',
    dualText: 'Text 2\n\nWhile epidemic disease was undoubtedly devastating, some historians have argued that Crosby\'s model underweights the role of deliberate colonial violence, forced labor, famine resulting from land dispossession, and the destruction of social and political structures. Population collapse, on this account, was not a natural catastrophe but a product of colonialism in its full range of mechanisms.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would the historians in Text 2 most likely characterize Crosby\'s argument?',
    choices: {
      A: 'As entirely correct in identifying epidemic disease as the primary cause of indigenous population collapse',
      B: 'As valuable but incomplete, since it treats disease as the primary driver while underweighting deliberate colonial violence and structural factors',
      C: 'As methodologically flawed because Crosby relied on insufficient demographic evidence',
      D: 'As applicable to some regions but not others, depending on the intensity of colonial settlement',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 2 acknowledges disease was "undoubtedly devastating" (conceding Crosby\'s point) but argues the model underweights deliberate violence, forced labor, famine, and structural destruction. B correctly captures this partial concession plus criticism. A claims Text 2 fully endorses Crosby — it explicitly challenges the "primary driver" framing. C introduces a methodological critique about evidence that Text 2 does not make. D limits Crosby\'s model geographically, which Text 2 also does not do.',
  },

  {
    id: 'cs_c_088', num: 88, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from Walt Whitman\'s 1855 preface to Leaves of Grass.\n\nThe American poets are to enclose old and new for America is the race of races. Of them a bard is to be commensurate with a people. His spirit responds to his country\'s spirit he incarnates its geography and natural life and rivers and lakes.',
    dualText: 'Text 2\n\nThe following text is from Emily Dickinson\'s c. 1862 poem "This is my letter to the World."\n\nThis is my letter to the World\nThat never wrote to Me —\nThe simple News that Nature told —\nWith tender Majesty\n\nHer Message is committed\nTo Hands I cannot see —\nFor love of Her — Sweet — countrymen —\nJudge tenderly — of Me',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a notable difference in how Text 1 and Text 2 portray the relationship between the poet and the American people?',
    choices: {
      A: 'Text 1 presents the poet as actively embodying and voicing the national community; Text 2 presents the poet as communicating with that community through an uncertain, indirect channel.',
      B: 'Text 1 focuses on the poet\'s relationship with nature; Text 2 focuses on the poet\'s relationship with other nations.',
      C: 'Both texts present the poet as a confident spokesperson for the American people, but Text 1 is more explicit about this role.',
      D: 'Text 1 addresses all of humanity; Text 2 addresses only a local community.',
    },
    answer: 'A', isSPR: false,
    explanation: 'In Text 1, Whitman\'s bard "incarnates" the country\'s spirit — a figure of confident embodiment. In Text 2, Dickinson\'s speaker writes to a World "That never wrote to Me" and entrusts her message to "Hands I cannot see" — tenuous, unreciprocated, indirect. A correctly identifies this contrast. B inverts Text 1\'s focus — Whitman writes about the American national community, not other nations; Text 2 also addresses countrymen. C claims both present confident spokespeople — Dickinson\'s speaker is explicitly uncertain. D misidentifies Whitman as addressing all humanity — he writes specifically about American poets.',
  },

  {
    id: 'cs_c_089', num: 89, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nNeurologist Antonio Damasio studied patients with damage to the ventromedial prefrontal cortex who performed normally on intelligence tests but made consistently poor decisions in daily life. He concluded that emotion is not an obstacle to rational decision-making but an essential component: without emotional input, the brain loses the ability to assign appropriate weight to different possible outcomes.',
    dualText: 'Text 2\n\nDamasio\'s case studies were clinically significant, but the conclusion that emotion is necessary for good decision-making has been contested on methodological grounds. The patients studied had complex neurological damage; attributing their decision-making impairments specifically to emotional deficits requires controls that early studies lacked. More recent neuroimaging work has partially supported Damasio\'s framework, but with considerable revision of the original model.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'How would the researchers described in Text 2 most likely characterize Damasio\'s conclusion?',
    choices: {
      A: 'As an important finding wholly vindicated by subsequent neuroimaging research',
      B: 'As clinically interesting but methodologically premature, only partially supported by later work',
      C: 'As an implausible claim comprehensively refuted by subsequent research',
      D: 'As valuable for understanding normal brains but irrelevant to clinical cases',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 2 says the conclusion was "contested on methodological grounds," early studies lacked controls, and more recent work "partially supported" the framework "with considerable revision." B correctly captures this: clinically interesting, methodologically premature, only partially confirmed. A says "wholly vindicated" — Text 2 says only "partially supported" with revision. C says "comprehensively refuted" — Text 2 says partially supported. D says irrelevant to clinical cases — Text 2\'s entire discussion concerns clinical neurological patients.',
  },

  {
    id: 'cs_c_090', num: 90, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nSociologist C. Wright Mills argued that the major decisions affecting American life are made not by democratic deliberation but by an interlocking "power elite" composed of corporate executives, military officers, and political leaders who share social networks and institutional interests — an elite operating largely beyond public accountability.',
    dualText: 'Text 2\n\nPolitical scientists Robert Dahl and Charles Lindblom proposed a pluralist account: no single elite dominates all policy arenas. Instead, different interest groups — business, labor, civic organizations — compete for influence in different domains, with outcomes determined by shifting coalitions. Policy is the product of ongoing bargaining among competing groups, not the imposition of a unitary elite\'s preferences.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, both Mills and Dahl and Lindblom would most likely agree with which statement?',
    choices: {
      A: 'The formal institutions of American democracy accurately reflect how power is actually distributed.',
      B: 'Organized groups with shared interests play a significant role in shaping political and economic outcomes.',
      C: 'A stable, identifiable ruling class controls the major decisions affecting American life.',
      D: 'Public accountability is the primary mechanism constraining those who hold power.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Both texts agree that organized groups with shared interests — not individual voters or formal democratic mechanisms — shape outcomes. Mills describes an interlocking elite whose shared connections drive decisions. Dahl and Lindblom describe competing interest groups whose bargaining produces policy. Both require organized group interests as the central mechanism. B captures this shared claim. A is contradicted by both — Mills says formal democracy is secondary; pluralists emphasize interest-group bargaining over formal institutions. C is Mills\'s specific claim but disputed by Dahl and Lindblom. D is contradicted by both — neither emphasizes accountability as the primary constraint.',
  },

];
