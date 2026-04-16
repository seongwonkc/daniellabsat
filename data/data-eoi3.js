'use strict';

// data-eoi3.js — EOI questions 121–180 (60 questions)
// 30 transitions (eoi_t_061–090) + 30 synthesis (eoi_s_061–090)
// 20 easy / 20 medium / 20 hard

const DL_EOI3_TRANSITIONS = [

  // ── EASY (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_t_061', num: 61, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Astronomers have confirmed over 5,000 exoplanets orbiting stars outside our solar system. _______ they estimate that the Milky Way galaxy alone contains hundreds of billions of planets, suggesting that most stars host at least one.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'In contrast,', C: 'Moreover,', D: 'As a result,' },
    answer: 'C', isSPR: false,
    explanation: '"Moreover" signals an additional, separate new point building on the prior finding. The estimate of hundreds of billions of planets is a distinct and further claim beyond the confirmed 5,000. "However" signals contrast — but the estimate supports rather than contradicts the prior finding. "In contrast" also signals opposition. "As a result" implies the estimate is a consequence of confirming 5,000 exoplanets, which conflates two independent findings.',
  },

  {
    id: 'eoi_t_062', num: 62, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Octopuses have distributed nervous systems: roughly two-thirds of their neurons are located in their eight arms rather than in their central brain. _______ each arm can process sensory information and execute complex movements semi-autonomously, without requiring instruction from the central brain.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'By contrast,', B: 'As a result,', C: 'For example,', D: 'Nevertheless,' },
    answer: 'B', isSPR: false,
    explanation: '"As a result" correctly signals that the semi-autonomous arm function is the direct consequence of having distributed neurons in the arms. "By contrast" signals opposition. "For example" would make the arm function an illustration of some broader point not stated. "Nevertheless" implies the arms function despite some obstacle — but the distributed neurons are exactly why the arms can function independently.',
  },

  {
    id: 'eoi_t_063', num: 63, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'In the late nineteenth century, physicians prescribed cocaine as a treatment for morphine addiction, believing it to be both effective and non-addictive. _______ cocaine proved to be highly addictive itself, and many patients who were treated for morphine dependency went on to develop severe cocaine dependence.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'Similarly,', C: 'In addition,', D: 'However,' },
    answer: 'D', isSPR: false,
    explanation: '"However" signals the contrast between the physicians\' belief (cocaine was safe) and the actual outcome (cocaine was highly addictive). "Therefore" would imply the addiction was a logical consequence of the physicians\' belief. "Similarly" implies the cocaine result parallels the morphine result — but the passage describes a failure of the treatment. "In addition" adds a supporting point in the same direction rather than contrasting.',
  },

  {
    id: 'eoi_t_064', num: 64, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The domestic cat was likely first domesticated in the Near East around 10,000 years ago, as early agricultural settlements attracted rodents and rodent hunters alike. _______ genetic evidence suggests that all domestic cats descend from a single subspecies of the African wildcat, Felis silvestris lybica.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'In other words,', C: 'Furthermore,', D: 'As a result,' },
    answer: 'C', isSPR: false,
    explanation: '"Furthermore" signals an additional supporting detail: the genetic evidence about a single domestication origin is a separate, additional piece of information about cat domestication. "However" signals contrast — but the genetic evidence is consistent with the Near East domestication story. "In other words" implies the genetic evidence restates the prior sentence — it is a new and additional claim. "As a result" implies the genetic lineage is a consequence of early Near East domestication.',
  },

  {
    id: 'eoi_t_065', num: 65, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The town of Kiruna in northern Sweden contains vast iron ore reserves that were essential to Swedish industrial development in the twentieth century. _______ those same ore deposits have caused the ground beneath the city to subside, forcing the entire town to be relocated several kilometers away — the largest planned urban relocation in Swedish history.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Similarly,', C: 'For this reason,', D: 'Yet,' },
    answer: 'D', isSPR: false,
    explanation: '"Yet" signals an adversative contrast: the ore that made Kiruna important is also the cause of its current crisis. The passage moves from asset (industrial development) to liability (subsidence forcing relocation) — a surprising reversal. "Furthermore" adds a consistent supporting point. "Similarly" implies the subsidence parallels the industrial development. "For this reason" implies the relocation is a consequence of the ore deposits\' importance, which conflates the cause-and-effect relationships.',
  },

  {
    id: 'eoi_t_066', num: 66, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The human brain contains approximately 86 billion neurons. _______ each neuron can form thousands of connections with other neurons, meaning the total number of synaptic connections in the brain is estimated at roughly 100 trillion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'What\'s more,', C: 'Therefore,', D: 'In contrast,' },
    answer: 'B', isSPR: false,
    explanation: '"What\'s more" signals a separate, additional new claim that goes beyond the first — the number of synaptic connections is an additional striking fact distinct from the neuron count. "However" signals contrast. "Therefore" implies the 100 trillion connections are a logical consequence derived from the neuron count — while mathematically true, the blank\'s function is to add a surprising further fact, not announce a calculation. "In contrast" signals opposition.',
  },

  {
    id: 'eoi_t_067', num: 67, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The Mediterranean diet — characterized by high consumption of vegetables, legumes, olive oil, and fish, with moderate wine consumption — has been associated with reduced risk of cardiovascular disease, cognitive decline, and certain cancers. _______ adherence to the diet is also linked to lower rates of depression and anxiety in prospective studies.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'By contrast,', B: 'For example,', C: 'Additionally,', D: 'Therefore,' },
    answer: 'C', isSPR: false,
    explanation: '"Additionally" signals a further, separate supporting point — mental health benefits are distinct from the physical health benefits listed. "By contrast" signals opposition — but the mental health finding is consistent with the positive profile of the diet. "For example" would make the mental health finding an illustration of one of the prior health benefits. "Therefore" implies the mental health outcomes causally follow from the diet\'s physical health effects.',
  },

  {
    id: 'eoi_t_068', num: 68, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'In 1962, Rachel Carson published Silent Spring, documenting the ecological destruction caused by pesticide use. _______ her work directly influenced the environmental legislation that led to the creation of the U.S. Environmental Protection Agency in 1970.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Consequently,', C: 'Similarly,', D: 'That is,' },
    answer: 'B', isSPR: false,
    explanation: '"Consequently" correctly signals that the EPA legislation was a direct consequence of Carson\'s publication and its influence. "However" signals contrast — but the legislation followed from, not contradicted, the book\'s influence. "Similarly" implies the legislation parallels the publication rather than following from it. "That is" would imply the legislation restates the book\'s content, which it does not.',
  },

  {
    id: 'eoi_t_069', num: 69, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Neuroscientists once assumed that the adult human brain was largely fixed — that its structure and connections were essentially stable after childhood development. _______ decades of research have demonstrated that the brain retains significant plasticity throughout life, reorganizing in response to learning, injury, and experience.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Moreover,', B: 'Similarly,', C: 'However,', D: 'As a result,' },
    answer: 'C', isSPR: false,
    explanation: '"However" signals the contrast between the prior assumption (fixed adult brain) and the research finding (significant lifelong plasticity). "Moreover" adds a consistent supporting point. "Similarly" implies the plasticity finding parallels the prior assumption. "As a result" implies the plasticity finding is a consequence of the assumption.',
  },

  {
    id: 'eoi_t_070', num: 70, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The Japanese bullet train network, known as the Shinkansen, operates over 3,000 kilometers of dedicated high-speed track and carries over 400,000 passengers per day. _______ in more than five decades of operation, carrying billions of passengers, the Shinkansen has had zero fatalities due to train accidents.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For example,', B: 'In fact,', C: 'Therefore,', D: 'However,' },
    answer: 'B', isSPR: false,
    explanation: '"In fact" signals emphatic reinforcement — the zero fatality record provides specific, surprising confirmation of how remarkable the Shinkansen\'s operation is. "For example" would make the safety record an illustration of some broader claim not stated. "Therefore" implies the safety record is a logical consequence of the network size and ridership. "However" signals contrast — but zero fatalities is consistent with, and amplifies, the impressive scale described.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'eoi_t_071', num: 71, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Researchers studying language change have found that new vocabulary spreads most rapidly among speakers who have large, loose social networks — people connected to many different social groups rather than deeply embedded in a single one. _______ words used exclusively within close-knit communities often fail to spread beyond those communities regardless of how useful or expressive they are.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Moreover,', B: 'By contrast,', C: 'As a result,', D: 'In this way,' },
    answer: 'B', isSPR: false,
    explanation: '"By contrast" signals the opposition between two patterns: words spreading through loose networks versus words staying confined within close-knit communities. The second sentence describes the inverse of the first finding — the contrast structure is explicit. "Moreover" adds a consistent supporting point. "As a result" implies confinement is a consequence of rapid spread through loose networks. "In this way" signals that the community confinement is the mechanism by which something was achieved.',
  },

  {
    id: 'eoi_t_072', num: 72, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'For over a century, historians believed that the fall of Rome in the fifth century CE was primarily caused by the invasions of Germanic tribes from the north and east. _______ recent scholarship has complicated this picture, arguing that internal factors — economic contraction, political instability, and administrative fragmentation — had already fundamentally weakened the empire before the invasions began.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'As a result,', C: 'However,', D: 'Indeed,' },
    answer: 'C', isSPR: false,
    explanation: '"However" signals the contrast between the established historical consensus (Germanic invasions as primary cause) and the revisionist scholarship (internal factors as preconditions). "Furthermore" would add to the invasion-focused explanation. "As a result" implies the revisionist scholarship is a consequence of the original belief. "Indeed" would reinforce the invasion narrative rather than challenge it.',
  },

  {
    id: 'eoi_t_073', num: 73, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The Amazon basin generates its own rainfall: water released by trees through transpiration condenses into clouds that travel hundreds of kilometers before falling again as rain. This cycle operates as a vast conveyor belt of moisture that sustains precipitation far from the coast. _______ when large sections of the Amazon are cleared, this moisture conveyor breaks down — reducing rainfall not only locally but in agricultural regions of Brazil, Bolivia, and Paraguay that depend on that rainfall for food production.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'For instance,', C: 'Consequently,', D: 'On the other hand,' },
    answer: 'C', isSPR: false,
    explanation: '"Consequently" signals that the breakdown of the moisture conveyor and its downstream effects on agriculture are the direct consequences of forest clearing — which disrupts the cycle described in sentences one and two. "Furthermore" would add a new supporting point. "For instance" would make the forest-clearing scenario an illustration of some broader principle not stated. "On the other hand" signals contrast — but the rainfall disruption follows from the mechanism described, not from an opposing principle.',
  },

  {
    id: 'eoi_t_074', num: 74, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Cognitive behavioral therapy, or CBT, has accumulated decades of empirical support as an effective treatment for anxiety disorders, depression, and PTSD. The treatment focuses on identifying and restructuring distorted thought patterns — teaching patients to recognize cognitive distortions and replace them with more balanced appraisals. _______ critics have noted that CBT\'s effectiveness in clinical trials may not fully translate to real-world practice, where patients often have more complex presentations and less predictable engagement than trial participants.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'Similarly,', C: 'That said,', D: 'In other words,' },
    answer: 'C', isSPR: false,
    explanation: '"That said" introduces a qualification after the positive claims about CBT — acknowledging the strong evidence base while introducing a complicating limitation. "Therefore" would imply the limitation is a logical consequence of the treatment\'s mechanism. "Similarly" implies the critics\' concerns parallel the CBT approach rather than complicating it. "In other words" would imply the critics\' concern restates the prior description of CBT.',
  },

  {
    id: 'eoi_t_075', num: 75, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Microbiome research has revealed that the trillions of bacteria inhabiting the human gut play roles far beyond digestion — influencing immune function, mental health, and metabolic regulation. These findings have generated enormous popular and commercial interest, producing a flood of probiotic products marketed as solutions to everything from depression to obesity. _______ the evidence for most specific probiotic interventions remains limited, and gastroenterologists caution that current products rarely contain strains proven to reach the gut alive or produce claimed effects.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Indeed,', B: 'Consequently,', C: 'Nevertheless,', D: 'Moreover,' },
    answer: 'C', isSPR: false,
    explanation: '"Nevertheless" signals that the limitations of probiotic evidence persist despite the popular enthusiasm and commercial proliferation described in sentence two. "Indeed" would reinforce the enthusiasm. "Consequently" implies the limited evidence is a consequence of the commercial flood. "Moreover" adds a consistent supporting point — but the clinical caution is in tension with the commercial enthusiasm, not consistent with it.',
  },

  {
    id: 'eoi_t_076', num: 76, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'In the 1980s, the concept of "crack cocaine" as a uniquely dangerous and addictive substance drove a wave of punitive legislation that imposed dramatically harsher sentences for crack offenses than for equivalent powder cocaine offenses. Subsequent pharmacological research found that crack and powder cocaine are the same drug administered by different routes — one smoked, one snorted — with similar addictive profiles and health effects. _______ the sentencing disparity contributed to vast racial inequities in incarceration, since crack cocaine was disproportionately used by Black Americans while powder cocaine was more prevalent among white Americans.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'For instance,', C: 'Therefore,', D: 'By contrast,' },
    answer: 'A', isSPR: false,
    explanation: '"Furthermore" signals a separate, additional problem — the racial inequity in incarceration is a distinct negative consequence that goes beyond the pharmacological misinformation established in sentence two. "For instance" would make the racial inequity an illustration of the pharmacological equivalence. "Therefore" implies the inequity causally follows from the sentencing disparity, which has some truth but is less precisely the logical relationship — "furthermore" better captures the additive nature of this additional concern. "By contrast" signals opposition.',
  },

  {
    id: 'eoi_t_077', num: 77, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Historian Benedict Anderson\'s concept of "imagined communities" holds that nations are social constructs — groups of people who will never meet each other but who share a sense of common membership through shared symbols, narratives, and media. This concept has been enormously influential in fields from sociology to post-colonial studies. _______ some scholars have argued that Anderson\'s framework, derived largely from European and Latin American cases, does not adequately account for ethnic nationalisms and pre-colonial identities in African and Asian contexts.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'However,', C: 'Therefore,', D: 'In this way,' },
    answer: 'B', isSPR: false,
    explanation: '"However" signals the contrast between Anderson\'s wide influence and the specific scholarly critiques of its applicability. "Similarly" implies the criticism parallels the influence. "Therefore" implies the criticism is a logical consequence of the framework\'s influence. "In this way" signals a mechanism-to-result relationship that is not present here.',
  },

  {
    id: 'eoi_t_078', num: 78, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Animal behaviorists have documented that chimpanzees, bonobos, and gorillas can learn to communicate using American Sign Language or symbol-based keyboards, demonstrating a capacity for symbolic communication. _______ linguists debate whether what these animals produce constitutes genuine language or a more limited form of associative learning — and the question of whether non-human animals can acquire syntax, the rule-governed system for combining symbols, remains deeply contested.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'As a result,', C: 'Indeed,', D: 'Even so,' },
    answer: 'D', isSPR: false,
    explanation: '"Even so" signals a concession followed by a qualifying claim: even granting the demonstrated symbolic communication, linguists still contest whether it constitutes genuine language. "Furthermore" adds a consistent supporting point. "As a result" implies the linguistic debate is a consequence of the symbol-use demonstrations. "Indeed" reinforces the demonstrations — it would suggest the debate confirms their significance, which inverts the relationship.',
  },

  {
    id: 'eoi_t_079', num: 79, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Anthropologist Marcel Mauss observed that gift exchange in many societies is characterized by reciprocity: the receiver of a gift is obligated to eventually give back, creating a cycle of social debt and connection that binds communities together. _______ the obligation is rarely stated explicitly — the gift appears voluntary and free, even as both parties understand that a return gift will be expected.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'For example,', C: 'However,', D: 'Specifically,' },
    answer: 'C', isSPR: false,
    explanation: '"However" signals the paradox at the heart of gift exchange: the obligation is real but never stated — the gift appears voluntary even as it is understood to be obligatory. Sentence two complicates the picture established in sentence one by showing that the reciprocity operates beneath the surface of apparent generosity. "Therefore" implies the unstated obligation is a consequence of reciprocity. "For example" would make the unstated obligation an illustration of reciprocity. "Specifically" would narrow in on one aspect of reciprocity.',
  },

  {
    id: 'eoi_t_080', num: 80, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The steam engine, developed by James Watt in the 1760s and 1770s, is often credited as the central technology of the Industrial Revolution. _______ the cotton gin, the power loom, and improvements in metallurgy each contributed independently to industrialization and would have produced significant economic transformation even without the steam engine.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Granted,', C: 'As a result,', D: 'In addition,' },
    answer: 'B', isSPR: false,
    explanation: '"Granted" formally concedes the steam engine\'s importance while signaling that the prior claim (steam as the central technology) is not the whole story. Sentence two lists other technologies that contributed independently — qualifying the steam-centric narrative without denying it. "Furthermore" adds a consistent supporting point rather than qualifying. "As a result" implies the other technologies are consequences of the steam engine. "In addition" simply adds to the steam engine\'s importance rather than complicating the steam-centered narrative.',
  },


  // ── HARD (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_t_081', num: 81, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Developmental psychologist Lev Vygotsky argued that the most important cognitive development in children occurs not when they work alone but within the "zone of proximal development" — the range between what a child can achieve independently and what the child can achieve with guidance from a more capable partner. _______ learning, for Vygotsky, is fundamentally a social process before it becomes an individual one.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Nevertheless,', B: 'For instance,', C: 'In this way,', D: 'Ultimately,' },
    answer: 'D', isSPR: false,
    explanation: '"Ultimately" signals the final or fundamental implication of Vygotsky\'s framework — learning being a social-before-individual process is the deepest takeaway from the zone of proximal development concept. "Nevertheless" implies the social nature of learning persists despite some obstacle. "For instance" would make sentence two an illustration of the zone of proximal development. "In this way" signals that the social process is the mechanism producing some outcome — but sentence two is a restatement of the fundamental principle, not a mechanism description.',
  },

  {
    id: 'eoi_t_082', num: 82, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Architectural historian Sigfried Giedion proposed in Space, Time and Architecture that the great achievement of modern architecture was the integration of exterior and interior space — dissolving the rigid boundary between inside and outside through the use of glass walls, open floor plans, and cantilevered structures. Critics have argued that this dissolution prioritized abstract formal ideals over the human need for enclosure, shelter, and privacy. _______ research in environmental psychology suggests that people consistently prefer spaces that offer some visual connection to the exterior while also providing a sense of enclosure — suggesting the critics identified something the modernist architects overlooked.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Moreover,', B: 'By contrast,', C: 'Admittedly,', D: 'Tellingly,' },
    answer: 'D', isSPR: false,
    explanation: '"Tellingly" introduces a particularly revealing piece of evidence — the environmental psychology research specifically confirms the critics\' concern by showing that humans prefer what the modernists denied them. The word signals that the evidence is especially significant and illuminating for the debate. "Moreover" adds a consistent supporting point. "By contrast" signals opposition between the psychology research and the prior claim. "Admittedly" introduces a concession, but the psychology finding is being used to support the critics, not to concede the modernists\' point.',
  },

  {
    id: 'eoi_t_083', num: 83, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The philosopher David Hume argued that causation is not something we observe in the world but a habit of mind we impose on it: we see one event followed by another, repeatedly, and come to expect the second whenever the first occurs — but we never observe the causal connection itself. _______ all causal claims, however well-supported by repeated observation, rest ultimately on a psychological tendency rather than on logically necessary inference.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Specifically,', B: 'However,', C: 'For example,', D: 'Thus,' },
    answer: 'D', isSPR: false,
    explanation: '"Thus" signals that the conclusion in sentence two is formally derived from the premises in sentence one: if causation is merely a habit of mind, then all causal claims rest on psychological tendency. Sentence two draws the logical conclusion that follows from Hume\'s argument. "Specifically" would narrow in on a particular aspect. "However" signals contrast — but sentence two extends and concludes the argument rather than contradicting it. "For example" would make the claim about all causal claims an illustration of something broader.',
  },

  {
    id: 'eoi_t_084', num: 84, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Historians studying the 1918 influenza pandemic have noted that many early cases were mis- or underreported because wartime censorship prevented news of widespread illness from reaching the public in the belligerent nations. Spain, being neutral and having no censorship of its press, reported freely on the pandemic. _______ the disease came to be known as the "Spanish flu," creating a misleading historical association that persists to the present day.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Furthermore,', C: 'Of course,', D: 'Hence,' },
    answer: 'D', isSPR: false,
    explanation: '"Hence" signals that the misleading "Spanish flu" label is the direct result of the mechanism described — censorship suppressed reports elsewhere, Spain reported freely, and therefore Spain became associated with the pandemic in the public record. "However" signals contrast where none exists — the naming followed logically from the reporting asymmetry. "Furthermore" adds a separate point. "Of course" acknowledges an obvious point before a distinguishing claim, but the naming is not being acknowledged as obvious before a pivot.',
  },

  {
    id: 'eoi_t_085', num: 85, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Behavioral economists have found that people consistently assign different values to the same object depending on whether they own it or are considering acquiring it — a phenomenon called the "endowment effect." Sellers demand significantly more for an item than buyers are willing to pay, even when both have identical information about the item\'s objective market value. _______ the endowment effect violates a foundational assumption of classical economic theory: that preference orderings are stable and independent of ownership.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'In other words,', C: 'As a result,', D: 'That said,' },
    answer: 'B', isSPR: false,
    explanation: '"In other words" signals that sentence three restates the implications of sentences one and two in a broader, more precisely formulated way — the gap between seller and buyer valuations (established empirically) is being restated as a theoretical violation: it means preference orderings are not stable or independent of ownership. Sentence three translates the empirical finding into its theoretical implication. "Furthermore" adds a new point. "As a result" implies the classical theory violation is a consequence of the finding. "That said" introduces a qualification after a positive claim.',
  },

  {
    id: 'eoi_t_086', num: 86, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The philosopher Martha Nussbaum has argued that the humanities — literature, history, philosophy — are not luxuries or ornaments in a liberal education but essential instruments for developing the "narrative imagination" required to understand the inner lives of people different from oneself. _______ an education focused exclusively on technical and professional skills produces graduates who are economically productive but civically impoverished — capable of generating wealth but not of governing themselves or participating in genuinely democratic self-rule.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For instance,', B: 'Similarly,', C: 'Without them,', D: 'As a result,' },
    answer: 'C', isSPR: false,
    explanation: '"Without them" signals the consequence of lacking the humanities — the sentence describes what happens when this narrative imagination is not cultivated. "Without them" is a conditional that directly connects to the prior sentence\'s argument: if the humanities are essential for narrative imagination, then without them, graduates lack what is needed for democratic citizenship. "For instance" would make the skills-focused graduate an illustration of the humanities. "Similarly" implies the civically impoverished graduate parallels something. "As a result" implies the skill-focused education is a consequence of the humanities\' importance.',
  },

  {
    id: 'eoi_t_087', num: 87, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Linguists studying cross-cultural communication have noted that certain English idioms — "bite the bullet," "spill the beans," "kick the bucket" — cannot be understood from the literal meanings of their component words. This opacity to translation creates significant barriers for second-language learners, who must memorize idioms as fixed units rather than deriving their meaning compositionally. _______ the same opacity makes idioms reliable markers of native fluency: speakers who have mastered them have almost certainly acquired the language through immersive experience rather than formal instruction.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Moreover,', B: 'By contrast,', C: 'For this reason,', D: 'Ironically,' },
    answer: 'D', isSPR: false,
    explanation: '"Ironically" captures the reversal: the same opacity that creates barriers for learners (a disadvantage) is precisely what makes idioms reliable markers of native fluency (an advantage for identifying native speakers). The passage describes a property that is simultaneously an obstacle and a diagnostic indicator — an ironic duality. "Moreover" adds a consistent supporting point but misses the ironic reversal. "By contrast" signals simple opposition. "For this reason" implies the fluency-marker function is a consequence of the learning barrier, which is too straightforward to capture the irony.',
  },

  {
    id: 'eoi_t_088', num: 88, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The development of synthetic fertilizers in the early twentieth century — enabled by Fritz Haber\'s process for fixing atmospheric nitrogen — dramatically increased global agricultural yields, supporting a fourfold increase in the human population over the following century. _______ the same process is responsible for the majority of reactive nitrogen pollution in the world\'s waterways and atmosphere, contributing to dead zones in coastal seas, acid rain, and stratospheric ozone depletion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Similarly,', C: 'Consequently,', D: 'Yet,' },
    answer: 'D', isSPR: false,
    explanation: '"Yet" signals the adversative contrast between the life-sustaining benefit (fourfold population increase) and the destructive environmental consequence (pollution, dead zones, ozone depletion) of the same process. The passage describes a single technology responsible for both humanity\'s greatest agricultural achievement and significant environmental harm. "Furthermore" adds a consistent supporting point. "Similarly" implies the environmental damage parallels the population growth. "Consequently" implies the pollution is a consequence of the population growth.',
  },

  {
    id: 'eoi_t_089', num: 89, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Social psychologist Solomon Asch\'s conformity experiments in the 1950s found that subjects often gave clearly incorrect answers to simple perceptual questions — such as which of three lines matched a reference line — when surrounded by confederates who unanimously gave the wrong answer. The subjects reported experiencing genuine doubt about their own perceptions. _______ conformity pressure is sufficient not only to change what people say but to distort what they actually see.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For instance,', B: 'That is,', C: 'Nevertheless,', D: 'As a result,' },
    answer: 'B', isSPR: false,
    explanation: '"That is" signals that sentence three restates and specifies the full implication of the experimental findings: reporting genuine doubt about one\'s own perceptions means that conformity pressure distorts perception itself, not merely reported behavior. Sentence three unpacks what "genuine doubt" means in terms of the mechanism of conformity. "For instance" would make the claim an illustration of some broader principle. "Nevertheless" implies the perceptual distortion occurs despite some obstacle. "As a result" implies the perceptual distortion is a consequence of reporting incorrect answers.',
  },

  {
    id: 'eoi_t_090', num: 90, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'For most of the nineteenth century, the accepted explanation for the diversity of coral reef formations — fringing reefs, barrier reefs, and atolls — was that each type reflected a different age or stage of reef development, corresponding to the rise and fall of sea levels. Darwin proposed a radically different explanation: that all three types were stages in a single continuous process, as a volcanic island slowly subsided into the ocean over millions of years, leaving successively more distant rings of coral at the surface. _______ Darwin\'s theory could not be confirmed until the mid-twentieth century, when deep drilling of Pacific atolls revealed the volcanic cores that his model predicted.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Consequently,', B: 'Furthermore,', C: 'However,', D: 'Indeed,' },
    answer: 'C', isSPR: false,
    explanation: '"However" signals the limitation on Darwin\'s theory — despite its explanatory power, it could not be confirmed for over a century. Sentence three describes the obstacle between the theory and its confirmation. "Consequently" implies the delay in confirmation is a consequence of Darwin\'s theory. "Furthermore" adds a consistent supporting point. "Indeed" reinforces the theory — it would suggest the deep drilling confirms Darwin in the expected way, which it does, but "indeed" doesn\'t capture the temporal delay and obstacle that sentence three emphasizes.',
  },

];


const DL_EOI3_SYNTHESIS = [

  // ── EASY (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_s_061', num: 61, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Galapagos Islands are an archipelago of volcanic islands located in the Pacific Ocean, approximately 900 kilometers off the coast of Ecuador.',
      'The islands are home to species found nowhere else on Earth, including the Galapagos giant tortoise, the marine iguana, and the flightless cormorant.',
      'Charles Darwin visited the Galapagos in 1835 during the Beagle voyage and observed that closely related species on different islands had developed distinct physical characteristics.',
      'Darwin\'s observations in the Galapagos contributed significantly to his development of the theory of evolution by natural selection.',
      'The Galapagos Islands were designated a UNESCO World Heritage Site in 1978.',
    ],
    noteTask: 'introduce the Galapagos Islands to an unfamiliar audience and explain their scientific significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Galapagos Islands were designated a UNESCO World Heritage Site in 1978.',
      B: 'The Galapagos Islands are a volcanic archipelago in the Pacific, famous for their unique wildlife, and they played a key role in Darwin\'s development of evolution by natural selection after his 1835 visit revealed distinct adaptations across islands.',
      C: 'Charles Darwin visited the Galapagos in 1835 and observed differences between related species on different islands.',
      D: 'The Galapagos marine iguana and flightless cormorant are found nowhere else on Earth.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces what the islands are (volcanic archipelago in the Pacific), what makes them notable (unique wildlife), and their scientific significance (Darwin\'s observations contributing to evolution theory). A states only the UNESCO designation. C describes Darwin\'s visit without introducing the islands. D names specific species without explaining the islands\' location or significance.',
  },

  {
    id: 'eoi_s_062', num: 62, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Silk Road was a network of trade routes connecting China, Central Asia, the Middle East, and Europe that was active from roughly 130 BCE to 1453 CE.',
      'The routes were used not only for the trade of goods — silk, spices, glassware, textiles — but also for the exchange of ideas, religions, and technologies.',
      'Buddhism spread from India to China along the Silk Road; Islam spread westward and eastward through the same routes.',
      'The invention of papermaking spread from China to the Islamic world and then to Europe via these routes.',
      'The Silk Road declined as sea trade routes to Asia became more cost-effective following the Age of Exploration.',
    ],
    noteTask: 'provide a historical overview of the Silk Road, covering its scope and the range of things exchanged',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Silk Road was active from roughly 130 BCE to 1453 CE.',
      B: 'Buddhism and Islam both spread along the Silk Road, as did the knowledge of papermaking.',
      C: 'The Silk Road was a network of trade routes active from roughly 130 BCE to 1453 CE connecting China to Europe; beyond goods like silk and spices, it served as a conduit for religions, including Buddhism and Islam, and technologies, including papermaking.',
      D: 'The Silk Road declined when sea trade routes became more practical following the Age of Exploration.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C provides the historical scope (dates, geographic range from China to Europe), the goods traded, and the non-commercial exchanges (religions, technologies). Both required components — scope and range of exchanges — are present. A gives only the dates. B names specific exchanges without providing the geographic scope or timeframe. D describes the decline without the historical overview.',
  },

  {
    id: 'eoi_s_063', num: 63, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Neurologist Oliver Sacks published Awakenings in 1973.',
      'The book describes Sacks\'s treatment of patients who had been in a catatonic-like state for decades following the 1920s encephalitis lethargica epidemic.',
      'Sacks administered the drug L-DOPA to these patients, and many temporarily "awakened" — regaining movement, speech, and full awareness — after decades of immobility.',
      'The awakenings proved temporary for most patients, and many eventually returned to their previous states or developed complications.',
      'Awakenings was adapted into a 1990 film starring Robin Williams and Robert De Niro.',
    ],
    noteTask: 'introduce Awakenings to an unfamiliar audience',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Awakenings was adapted into a 1990 film starring Robin Williams and Robert De Niro.',
      B: 'Oliver Sacks published Awakenings in 1973.',
      C: 'Oliver Sacks\'s 1973 book Awakenings describes how he administered L-DOPA to patients who had been in a catatonic-like state for decades, causing many to temporarily regain movement and awareness after years of immobility.',
      D: 'The awakenings proved temporary for most patients, who eventually returned to their previous states.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C introduces the work (author, title, year), its subject (patients in catatonic states for decades), what happened (L-DOPA administration, temporary reawakening), and the outcome — enough for an unfamiliar reader to understand the book. A describes only the film adaptation. B gives only the author and year. D describes only the temporary nature of the awakenings, which presupposes knowledge of what the book is about.',
  },

  {
    id: 'eoi_s_064', num: 64, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before the nineteenth century, surgery was an agonizing and often fatal procedure because there were no effective anesthetics.',
      'Surgeons developed speed as a survival technique — the faster the operation, the lower the patient\'s chance of dying from shock or blood loss.',
      'The first successful public demonstration of ether anesthesia took place at Massachusetts General Hospital on October 16, 1846.',
      'The demonstration was performed by dentist William Morton using sulfuric ether; the surgeon was John Collins Warren.',
      'The date became known as "Ether Day" and is considered one of the most important events in the history of medicine.',
    ],
    noteTask: 'place the demonstration of ether anesthesia in the context of what surgery was like before it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'William Morton and John Collins Warren performed the first successful public demonstration of ether anesthesia on October 16, 1846.',
      B: 'The demonstration of ether anesthesia at Massachusetts General Hospital in 1846 became known as "Ether Day."',
      C: 'Before effective anesthesia existed, surgery was agonizing and often fatal; the first successful public demonstration of ether anesthesia on October 16, 1846, transformed this by making painless surgery possible.',
      D: 'Surgeons before anesthesia developed speed as a survival technique, completing operations as quickly as possible to minimize shock and blood loss.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C provides the prior context (surgery was agonizing and often fatal before anesthesia) and places the 1846 demonstration against that background — explaining what it changed and why it mattered. A gives only the demonstration details. B gives only the "Ether Day" designation. D describes the pre-anesthesia surgical technique without mentioning the 1846 demonstration or what it changed.',
  },

  {
    id: 'eoi_s_065', num: 65, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Toni Morrison was an American novelist, editor, and professor.',
      'Her 1993 Nobel Prize in Literature citation described her as someone who "in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality."',
      'Morrison\'s works include Beloved, Song of Solomon, Sula, and Jazz.',
      'She was the first African American woman to receive the Nobel Prize in Literature.',
      'Morrison said of her work: "If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it."',
    ],
    noteTask: 'introduce Toni Morrison to an unfamiliar audience using a quotation to convey her approach to writing',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Toni Morrison was the first African American woman to receive the Nobel Prize in Literature.',
      B: 'Toni Morrison\'s 1993 Nobel citation described her novels as characterized by "visionary force and poetic import."',
      C: 'Toni Morrison was an American novelist and Nobel laureate whose works include Beloved and Song of Solomon; she approached her craft with a sense of necessity, as she put it: "If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it."',
      D: 'Morrison\'s works include Beloved, Song of Solomon, Sula, and Jazz.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C introduces Morrison (American novelist, Nobel laureate), names representative works, and uses her quotation to convey her philosophy of writing — fulfilling both required components. A gives only her historical significance. B uses the Nobel citation quotation but doesn\'t introduce Morrison to an unfamiliar reader or use her own words to convey her approach. D lists works without introducing Morrison.',
  },

  {
    id: 'eoi_s_066', num: 66, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Coriolis effect is the apparent deflection of moving objects, including wind and ocean currents, due to Earth\'s rotation.',
      'In the Northern Hemisphere, the Coriolis effect deflects moving air to the right; in the Southern Hemisphere, it deflects air to the left.',
      'The Coriolis effect is responsible for the rotation of large weather systems: counterclockwise in the Northern Hemisphere, clockwise in the Southern Hemisphere.',
      'The effect is named after French mathematician Gaspard-Gustave de Coriolis, who described it mathematically in 1835.',
      'The Coriolis effect is negligible at small scales, such as the draining of a bathtub, despite a popular misconception.',
    ],
    noteTask: 'explain the Coriolis effect and correct a common misconception about it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Coriolis effect deflects moving air to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.',
      B: 'The Coriolis effect, named after Gaspard-Gustave de Coriolis, was described mathematically in 1835.',
      C: 'The Coriolis effect is the deflection of moving objects caused by Earth\'s rotation — responsible for the counterclockwise rotation of Northern Hemisphere storms — but contrary to popular belief, it is too weak to affect small-scale flows like draining bathtubs.',
      D: 'In the Northern Hemisphere, large weather systems rotate counterclockwise due to the Coriolis effect; in the Southern Hemisphere, they rotate clockwise.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C defines the Coriolis effect (deflection from Earth\'s rotation), gives a key example (storm rotation), and corrects the popular misconception (too weak for bathtubs). Both required components are present. A gives only the directional deflection. B gives only historical context. D describes storm rotation without defining the effect or addressing the misconception.',
  },

  {
    id: 'eoi_s_067', num: 67, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Human Genome Project was an international scientific research project that ran from 1990 to 2003.',
      'Its goal was to sequence the complete set of DNA in human cells — approximately 3 billion base pairs — and identify all human genes.',
      'The project involved research institutions in the United States, United Kingdom, France, Germany, Japan, and China.',
      'A working draft of the genome was announced in 2000; the complete sequence was published in 2003.',
      'The completed genome has enabled advances in personalized medicine, disease diagnosis, and the development of targeted therapies.',
    ],
    noteTask: 'present the primary aim of the Human Genome Project and indicate its significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Human Genome Project ran from 1990 to 2003 and involved six countries.',
      B: 'The Human Genome Project aimed to sequence the complete human DNA and identify all human genes; completing this goal in 2003 enabled advances in personalized medicine, disease diagnosis, and targeted therapies.',
      C: 'A working draft of the human genome was announced in 2000.',
      D: 'The Human Genome Project identified all human genes in the approximately 3 billion base pairs of human DNA.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states the primary aim (sequence complete human DNA, identify all genes) and the significance (advances in personalized medicine, diagnosis, therapies). A gives only dates and countries. C gives only the draft announcement date. D describes the aim partially but omits the project\'s significance.',
  },

  {
    id: 'eoi_s_068', num: 68, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Magna Carta was a royal charter of rights agreed to by King John of England in 1215.',
      'It was created in response to a rebellion by barons who were angered by John\'s abuses of feudal customs and arbitrary exercise of power.',
      'Key provisions included the right of the church to be free from royal interference, restrictions on taxation, and — most famously — the principle that no free person could be imprisoned without lawful judgment by peers or the law of the land.',
      'Though much of it became irrelevant or was repealed, three of its original clauses remain part of English statute law.',
      'The Magna Carta is widely considered a foundational document in the development of constitutional governance and the rule of law.',
    ],
    noteTask: 'introduce the Magna Carta, explain what prompted it, and convey its historical significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Three of the Magna Carta\'s original clauses remain part of English statute law today.',
      B: 'The Magna Carta was agreed to by King John in 1215 in response to a baronial rebellion against his abuses of power; its most famous provision — that no free person could be imprisoned without lawful judgment — established a principle foundational to constitutional governance and the rule of law.',
      C: 'The Magna Carta included provisions on church rights, taxation, and the right to lawful judgment.',
      D: 'King John of England agreed to the Magna Carta in 1215.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the document (1215, King John), explains what prompted it (baronial rebellion against abuses), highlights the most famous provision (lawful judgment), and states its significance (foundational to constitutional governance). All three required components are present. A gives only the survival fact. C lists provisions without introduction or significance. D gives only the date and signatory.',
  },

  {
    id: 'eoi_s_069', num: 69, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The greenhouse effect refers to the process by which certain gases in Earth\'s atmosphere trap heat from the Sun.',
      'Solar radiation passes through the atmosphere and warms Earth\'s surface; the surface then emits infrared radiation.',
      'Greenhouse gases — including carbon dioxide, methane, and water vapor — absorb this infrared radiation and re-emit it in all directions, including back toward Earth\'s surface.',
      'Without any greenhouse effect, Earth\'s average temperature would be approximately -18 degrees Celsius rather than the current average of about 15 degrees Celsius.',
      'Human activities, particularly the burning of fossil fuels, have increased atmospheric concentrations of CO₂ and other greenhouse gases, intensifying the effect.',
    ],
    noteTask: 'explain the greenhouse effect to an unfamiliar audience, including why it matters for understanding climate',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Without the greenhouse effect, Earth\'s average temperature would be about -18 degrees Celsius.',
      B: 'Carbon dioxide, methane, and water vapor are the primary greenhouse gases in Earth\'s atmosphere.',
      C: 'The greenhouse effect is the process by which atmospheric gases trap solar heat; without it, Earth would be frozen at -18°C instead of a habitable 15°C, but human-driven increases in greenhouse gases are now intensifying the effect beyond natural levels.',
      D: 'Greenhouse gases absorb infrared radiation from Earth\'s surface and re-emit it back toward Earth.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C defines the process, quantifies its importance (the temperature comparison establishes why it matters), and connects it to human-driven intensification — giving an unfamiliar reader both a definition and its climate relevance. A states only the temperature consequence. B lists only the gases. D describes only the radiation absorption mechanism without explaining its significance.',
  },

  {
    id: 'eoi_s_070', num: 70, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Neolithic Revolution refers to the transition from nomadic hunter-gatherer societies to settled agricultural communities, beginning around 10,000 BCE in the Fertile Crescent.',
      'Key developments included the domestication of wheat, barley, and legumes, and the herding of cattle, sheep, and goats.',
      'Settled agriculture allowed for food surpluses, which in turn supported population growth, specialization of labor, and the development of permanent settlements.',
      'The transition happened independently in at least five other regions, including China, Sub-Saharan Africa, and the Americas.',
      'The Neolithic Revolution is considered one of the most significant turning points in human history.',
    ],
    noteTask: 'explain the Neolithic Revolution and describe its consequences',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Neolithic Revolution began around 10,000 BCE in the Fertile Crescent with the domestication of wheat, barley, and livestock.',
      B: 'The Neolithic Revolution is the shift from hunting and gathering to settled farming; by enabling food surpluses, it supported population growth, labor specialization, and the development of permanent settlements — making it one of history\'s most significant turning points.',
      C: 'The Neolithic Revolution occurred independently in at least six regions around the world.',
      D: 'Wheat, barley, and legumes were among the first crops domesticated during the Neolithic Revolution.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B defines the Neolithic Revolution (shift from hunting-gathering to farming), explains its consequences (surpluses → population growth, labor specialization, permanent settlements), and notes its significance. Both required components are present. A describes origins without consequences. C gives only the geographic distribution. D gives only one detail about crops.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'eoi_s_071', num: 71, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Cognitive scientist George Lakoff and philosopher Mark Johnson published Metaphors We Live By in 1980.',
      'The book argues that abstract thinking is fundamentally structured by conceptual metaphors — mental mappings between domains that allow us to understand one thing in terms of another.',
      'One key example is the "Argument Is War" metaphor: in English, arguments are described using war language ("I demolished his argument," "She won the debate," "He attacked every weak point").',
      'The authors argue that this metaphor shapes not just how we talk about arguments but how we experience and conduct them — as competitions to be won rather than collaborations toward truth.',
      'Lakoff and Johnson propose that if we used a different metaphor — "Argument Is a Dance" — we might conduct disagreements very differently.',
    ],
    noteTask: 'summarize the central argument of Metaphors We Live By and use one of its key examples to support the summary',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Lakoff and Johnson argue that conceptual metaphors structure abstract thinking — as their "Argument Is War" example shows, the metaphors embedded in everyday language shape not just how we describe experiences but how we actually conduct them.',
      B: 'George Lakoff and Mark Johnson published Metaphors We Live By in 1980.',
      C: 'If we described argument as a dance rather than a war, we might conduct disagreements very differently.',
      D: 'The "Argument Is War" metaphor is evident in phrases like "I demolished his argument" and "she won the debate."',
    },
    answer: 'A', isSPR: false,
    explanation: 'A states the central argument (conceptual metaphors structure abstract thinking) and uses the "Argument Is War" example to demonstrate specifically how metaphors shape not just language but behavior — the book\'s most important claim. B gives only publication information. C describes the speculative "Argument Is a Dance" alternative without summarizing the main argument. D describes only the examples of war language without stating what they\'re meant to illustrate.',
  },

  {
    id: 'eoi_s_072', num: 72, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before Einstein\'s 1905 paper on special relativity, physicists assumed time was absolute — the same for all observers regardless of their motion.',
      'Einstein showed that time passes at different rates for observers moving at different velocities relative to each other, a phenomenon known as "time dilation."',
      'At speeds approaching the speed of light, time dilation becomes dramatic: a clock on a fast-moving spaceship would tick more slowly than an identical clock at rest.',
      'Time dilation has been experimentally confirmed using atomic clocks flown on aircraft and satellites.',
      'GPS satellites, which move rapidly relative to Earth, require relativistic corrections to remain accurate; without them, GPS systems would accumulate errors of kilometers per day.',
    ],
    noteTask: 'place Einstein\'s discovery of time dilation in the context of what physics assumed before it, and indicate its practical significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Einstein showed in 1905 that time passes at different rates for observers moving at different velocities.',
      B: 'Time dilation has been confirmed using atomic clocks on aircraft and satellites.',
      C: 'Before 1905, physics assumed time was absolute; Einstein\'s special relativity showed instead that time passes more slowly for fast-moving objects — a finding so practically significant that GPS satellites require relativistic corrections to avoid accumulating kilometer-scale positioning errors.',
      D: 'At speeds approaching light, time dilation becomes dramatic enough to affect a clock on a fast-moving spaceship.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C provides the prior assumption (absolute time), Einstein\'s discovery (time dilation for fast-moving objects), and the practical significance (GPS requires relativistic corrections to avoid kilometer-scale errors). All three required components are present. A gives only the discovery. B gives only the confirmation method. D describes an extreme case without the prior assumption or practical significance.',
  },

  {
    id: 'eoi_s_073', num: 73, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Some education reformers have argued that homework in elementary school is beneficial because it builds study habits and reinforces classroom learning.',
      'A meta-analysis conducted by Harris Cooper at Duke University reviewed 60 years of research on homework across grade levels.',
      'The analysis found that homework had a positive effect on academic achievement for high school students — particularly for subjects like math — but no demonstrable effect on achievement for elementary school students.',
      'Cooper concluded that the evidence does not support assigning significant homework to students below high school age.',
      'Despite these findings, homework practices in elementary schools in the United States have increased significantly since the 1980s.',
    ],
    noteTask: 'refute the claim that homework in elementary school benefits academic achievement',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Harris Cooper\'s meta-analysis at Duke reviewed 60 years of research on homework across grade levels.',
      B: 'Homework has a positive effect on high school academic achievement, particularly in math.',
      C: 'A Duke University meta-analysis covering 60 years of research found no demonstrable effect of homework on elementary school academic achievement, directly contradicting claims about its academic benefits for young students.',
      D: 'Despite research showing homework doesn\'t benefit elementary students, homework in U.S. elementary schools has increased since the 1980s.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C identifies the study (Duke, 60 years of research) and uses the null finding (no demonstrable effect on elementary achievement) to directly refute the claim. A gives only methodology. B describes the high school finding — the opposite of what is needed to refute the elementary school claim. D describes the disconnect between research and practice without directly stating the refutation.',
  },

  {
    id: 'eoi_s_074', num: 74, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before germ theory, physicians in European hospitals routinely moved directly from performing autopsies to delivering babies without washing their hands.',
      'In the 1840s, Hungarian physician Ignaz Semmelweis noticed that the maternity ward staffed by doctors had a far higher mortality rate from childbed fever than the ward staffed by midwives.',
      'Semmelweis hypothesized that doctors were transmitting something from the cadavers to the patients, and he introduced mandatory handwashing with chlorinated lime solution.',
      'After the handwashing protocol was introduced, mortality in the doctors\' ward fell from about 10–35% to under 2%.',
      'Despite this dramatic result, Semmelweis\'s findings were rejected by the medical establishment of his time, partly because germ theory had not yet been established to explain the mechanism.',
    ],
    noteTask: 'explain the causation by which handwashing reduced mortality in Semmelweis\'s ward, and indicate why his findings were initially rejected',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Semmelweis introduced mandatory handwashing with chlorinated lime solution, which reduced mortality from 10–35% to under 2%.',
      B: 'Before germ theory, doctors moved from autopsies to deliveries without washing their hands.',
      C: 'Semmelweis hypothesized that cadaveric matter was being transmitted by doctors\' unwashed hands; his handwashing protocol reduced mortality dramatically — from as high as 35% to under 2% — but was rejected because germ theory had not yet provided an explanation for why it worked.',
      D: 'Semmelweis noticed that the midwives\' ward had lower mortality than the doctors\' ward and investigated the reason.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C traces the causal chain (cadaveric matter transmitted by unwashed hands → handwashing removes it → mortality drops), provides the quantitative scale (35% to under 2%), and explains the rejection (no mechanistic explanation without germ theory). Both required components are present. A states the protocol and result but not the causal mechanism or the rejection. B gives only the prior practice without the handwashing finding. D describes the initial observation without the causal explanation or the rejection.',
  },

  {
    id: 'eoi_s_075', num: 75, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Philosopher John Rawls developed the theory of justice as fairness in his 1971 book A Theory of Justice.',
      'The book\'s central thought experiment asks readers to imagine choosing the principles of a just society from behind a "veil of ignorance" — not knowing what position they would occupy in that society.',
      'Rawls argued that rational agents behind the veil of ignorance would choose two principles: first, that each person should have the most extensive set of basic liberties compatible with similar liberties for others; second, that social and economic inequalities should be arranged to benefit the least advantaged members of society.',
      'The second principle is sometimes called the "difference principle."',
      'A Theory of Justice is one of the most influential works of political philosophy of the twentieth century.',
    ],
    noteTask: 'introduce A Theory of Justice and explain the veil of ignorance thought experiment and what it produces',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Rawls argued that inequalities should benefit the least advantaged members of society.',
      B: 'John Rawls\'s 1971 A Theory of Justice is one of the most influential works of political philosophy of the twentieth century.',
      C: 'In A Theory of Justice (1971), John Rawls uses the "veil of ignorance" — choosing principles of justice without knowing one\'s own position in society — to argue for two principles: maximal equal liberty and inequalities structured to benefit the least advantaged.',
      D: 'The "veil of ignorance" asks readers to imagine choosing principles of justice without knowing what position they would occupy in society.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C introduces the work (title, author, year), explains the veil of ignorance thought experiment (choosing principles without knowing one\'s position), and names what it produces (two specific principles). All required components are present. A gives only the second principle without introduction or the thought experiment. B gives only bibliographic information. D describes the thought experiment without stating what it produces.',
  },

  {
    id: 'eoi_s_076', num: 76, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Psychologist Abraham Maslow proposed his hierarchy of needs in a 1943 paper, "A Theory of Human Motivation."',
      'The hierarchy is typically represented as a pyramid: physiological needs (food, shelter, sleep) at the base; safety needs above that; then social needs (belonging, love); then esteem; and finally self-actualization — the realization of one\'s full potential — at the apex.',
      'Maslow argued that lower-level needs must generally be satisfied before higher-level needs become motivating.',
      'Critics have pointed out that the strict hierarchical ordering is not universally supported by cross-cultural data — people sometimes pursue self-actualization even when basic needs are unmet.',
      'Despite these criticisms, the hierarchy remains one of the most widely cited frameworks in psychology, education, and management.',
    ],
    noteTask: 'summarize Maslow\'s hierarchy of needs and acknowledge a key criticism of it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Maslow\'s hierarchy moves from physiological needs at the base to self-actualization at the apex, with the argument that lower needs must be satisfied before higher ones become motivating.',
      B: 'Maslow proposed his hierarchy of needs in 1943.',
      C: 'Maslow\'s hierarchy of needs organizes human motivation from basic physiological needs to self-actualization, arguing that lower needs are satisfied first — though critics note the strict ordering is not universally supported by cross-cultural evidence.',
      D: 'Despite criticisms, Maslow\'s hierarchy remains widely cited in psychology, education, and management.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C summarizes the hierarchy (levels from physiological to self-actualization, lower needs first) and acknowledges the key criticism (strict ordering not cross-culturally supported). Both required components are present. A summarizes the hierarchy but omits the criticism. B gives only the date. D gives only the impact without summarizing the hierarchy or noting the criticism.',
  },

  {
    id: 'eoi_s_077', num: 77, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Historian Yuval Noah Harari published Sapiens: A Brief History of Humankind in Hebrew in 2011; it was translated into English in 2014.',
      'The book argues that Homo sapiens came to dominate Earth primarily because of a unique cognitive ability: the capacity to believe in and coordinate around shared fictions — myths, religions, nations, corporations.',
      'Harari calls this the "Cognitive Revolution," occurring around 70,000 years ago.',
      'He argues that large-scale human cooperation — which no other animal can achieve — depends on shared belief in things that exist only in collective imagination.',
      'Sapiens has sold over 20 million copies and been translated into more than 65 languages.',
    ],
    noteTask: 'introduce Sapiens and explain its central argument about what distinguishes humans from other animals',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Sapiens has sold over 20 million copies and been translated into more than 65 languages.',
      B: 'Yuval Noah Harari\'s Sapiens (2011/2014) argues that what distinguishes humans from other animals is our ability to believe in and coordinate around shared fictions — myths, nations, corporations — enabling large-scale cooperation that no other species can achieve.',
      C: 'Harari argues that human cooperation depends on shared belief in things that exist only in collective imagination.',
      D: 'The "Cognitive Revolution" occurred around 70,000 years ago, according to Harari.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the work (title, author, publication dates), states the central argument (shared fictions enable human coordination), and explains how it distinguishes humans (large-scale cooperation no other species achieves). Both required components are present. A gives only sales figures. C states part of the argument without introducing the book. D gives only the Cognitive Revolution claim without introduction or the central argument about human distinctiveness.',
  },

  {
    id: 'eoi_s_078', num: 78, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Atlantic slave trade forcibly transported an estimated 12.5 million Africans to the Americas between the fifteenth and nineteenth centuries.',
      'Of these, approximately 10.7 million survived the Middle Passage — the transatlantic crossing.',
      'The largest recipients were Brazil (4.9 million), the Caribbean islands (4.7 million), and mainland Spanish America (1.3 million); the United States received approximately 389,000.',
      'The slave trade generated enormous wealth for European nations, colonial planters, and merchants.',
      'The economic and demographic consequences for West and Central African societies included depopulation, destabilization of political structures, and the distortion of trade networks toward captive supply.',
    ],
    noteTask: 'use quantitative data from the notes to convey the scale of the Atlantic slave trade and indicate its consequences for Africa',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Atlantic slave trade transported approximately 12.5 million Africans to the Americas, of whom 10.7 million survived the crossing; this forced removal had devastating consequences for West and Central African societies, contributing to depopulation, political destabilization, and distorted trade networks.',
      B: 'Brazil received approximately 4.9 million enslaved Africans — the largest number of any single destination.',
      C: 'The Atlantic slave trade generated enormous wealth for European nations, colonial planters, and merchants.',
      D: 'Approximately 1.8 million Africans died during the Middle Passage.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A presents the key quantitative scale (12.5 million transported, 10.7 million survived) and directly addresses the consequences for Africa (depopulation, political destabilization, distorted trade networks). Both required components are present. B gives only one destination\'s figure. C describes European wealth without addressing African consequences or the quantitative scale. D calculates a mortality figure but omits both the full scale and the African consequences.',
  },

  {
    id: 'eoi_s_079', num: 79, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Permian-Triassic extinction event, approximately 252 million years ago, was the most severe mass extinction in Earth\'s history.',
      'It eliminated an estimated 90–96% of all marine species and 70% of terrestrial vertebrate species.',
      'The likely causes include massive volcanic eruptions in Siberia (the Siberian Traps) releasing CO₂ and methane, triggering rapid global warming and ocean acidification.',
      'The recovery of ecosystems took approximately 10 million years — longer than after any other mass extinction.',
      'The event is sometimes called the "Great Dying."',
    ],
    noteTask: 'explain what made the Permian-Triassic extinction event more severe than other mass extinctions, and indicate its likely causes',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Permian-Triassic extinction is sometimes called the "Great Dying."',
      B: 'The Permian-Triassic extinction is the most severe in Earth\'s history, eliminating up to 96% of marine species and 70% of land vertebrates; it is attributed to the Siberian Traps volcanic eruptions, which triggered rapid warming and ocean acidification.',
      C: 'The recovery from the Permian-Triassic extinction took approximately 10 million years.',
      D: 'Massive volcanic eruptions in Siberia released CO₂ and methane approximately 252 million years ago.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states what made it most severe (up to 96% marine species, 70% land vertebrates — the highest percentages of any mass extinction) and identifies the likely causes (Siberian Traps → warming and acidification). Both required components are present. A gives only the nickname. C gives only the recovery duration. D describes only the volcanic cause without the severity metrics.',
  },

  {
    id: 'eoi_s_080', num: 80, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Space Race was a competition between the United States and the Soviet Union to achieve superior spaceflight capability, particularly between 1957 and 1969.',
      'The Soviet Union achieved many early milestones: first satellite (Sputnik, 1957), first human in space (Yuri Gagarin, 1961), first spacewalk (Alexei Leonov, 1965).',
      'The United States achieved the final and most symbolic milestone: landing humans on the Moon on July 20, 1969, with Neil Armstrong and Buzz Aldrin.',
      'Apollo 11\'s lunar landing is widely considered the decisive American achievement that "won" the Space Race.',
      'The Space Race drove enormous investment in science, engineering, and mathematics education in both countries.',
    ],
    noteTask: 'provide a historical overview of the Space Race, noting which side achieved what and how it ended',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Neil Armstrong and Buzz Aldrin landed on the Moon on July 20, 1969.',
      B: 'The Soviet Union achieved the first satellite, first human in space, and first spacewalk; the United States responded with the Apollo 11 Moon landing in 1969, which is widely regarded as the decisive achievement that concluded the Space Race.',
      C: 'The Space Race drove significant investment in science, engineering, and mathematics education in both countries.',
      D: 'Yuri Gagarin became the first human in space in 1961.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B provides the historical overview: early Soviet milestones (satellite, first human, spacewalk), the American response (Apollo 11 Moon landing), and the conclusion (widely regarded as the decisive achievement that ended the race). Both required components are present. A gives only the Moon landing. C gives only the educational consequence. D gives only Gagarin\'s achievement.',
  },


  // ── HARD (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_s_081', num: 81, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Sociologist Émile Durkheim published The Division of Labor in Society in 1893.',
      'The book distinguishes between two types of social solidarity: "mechanical solidarity," characteristic of traditional societies, in which members are similar and bound by shared beliefs; and "organic solidarity," characteristic of modern societies, in which members are differentiated by specialized functions but interdependent.',
      'Durkheim argued that modern industrial societies face a particular risk of "anomie" — normlessness — when rapid social change disrupts the shared norms that previously regulated behavior.',
      'He stated: "Anomie is not simply an individual psychological state but a property of social structure — a breakdown in the moral regulation that society imposes on individuals."',
      'The concept of anomie has been widely applied to explain phenomena including crime, suicide, and social disintegration.',
    ],
    noteTask: 'summarize Durkheim\'s central distinction in The Division of Labor in Society, introduce anomie using a quotation, and indicate the concept\'s broader significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Durkheim distinguished between mechanical and organic solidarity in his 1893 book.',
      B: 'Durkheim\'s The Division of Labor (1893) contrasts traditional mechanical solidarity — shared beliefs binding similar people — with modern organic solidarity based on specialized interdependence; the modern form\'s vulnerability to disruption produces "anomie," which, as Durkheim argued, is "not simply an individual psychological state but a property of social structure," a concept widely applied to explain crime, suicide, and social disintegration.',
      C: 'Anomie, as Durkheim defined it, is "not simply an individual psychological state but a property of social structure."',
      D: 'Durkheim argued that rapid social change can disrupt shared norms, creating normlessness.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B addresses all three required components: the central distinction (mechanical vs. organic solidarity), anomie introduced with the quotation, and broader significance (applied to crime, suicide, social disintegration). A gives only the distinction without anomie or significance. C uses the quotation but gives no context for the distinction or the broader significance. D describes anomie without the mechanical/organic distinction or the quotation.',
  },

  {
    id: 'eoi_s_082', num: 82, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'In the 1970s, the dominant model of galaxy formation held that galaxies formed bottom-up: small structures merged over time into larger ones.',
      'The model predicted that the oldest, most distant galaxies (seen as they were in the early universe) should be smaller, less massive, and less organized than more recent ones.',
      'James Webb Space Telescope images released in 2022 showed massive, fully-formed spiral galaxies existing only 600 million years after the Big Bang.',
      'These galaxies are orders of magnitude more massive and organized than the bottom-up model predicted would be possible at that age.',
      'Astrophysicists now believe the bottom-up model must be substantially revised, though the mechanism that produced early massive galaxies remains debated.',
    ],
    noteTask: 'present the prior model, explain what the new evidence showed, and indicate the current state of the field',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'James Webb Space Telescope images showed massive, fully-formed spiral galaxies just 600 million years after the Big Bang.',
      B: 'The standard bottom-up model of galaxy formation predicted that early galaxies should be small and disorganized; Webb images showing massive, fully-formed galaxies at 600 million years after the Big Bang have contradicted this prediction so dramatically that most astrophysicists believe the model must be substantially revised, though the mechanism remains debated.',
      C: 'The bottom-up model of galaxy formation has been the dominant framework in astrophysics since the 1970s.',
      D: 'Astrophysicists believe the bottom-up model must be revised, though the mechanism remains debated.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states the prior model (bottom-up: early galaxies should be small/disorganized), explains the contradicting new evidence (Webb images showing massive, organized galaxies at 600 million years), and describes the current state (model must be revised; mechanism debated). All three required components are present. A gives only the new evidence. C gives only the prior model\'s age without the prediction or the new evidence. D gives only the current state without the prior model or the new evidence.',
  },

  {
    id: 'eoi_s_083', num: 83, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'A 2020 study led by Dr. Amara Osei at the University of Ghana examined whether cash transfers to smallholder farmers in rural Ghana produced more durable economic outcomes when accompanied by agricultural training compared to cash alone.',
      'The study randomized 420 farming households into three groups: cash only, cash plus training, and a control group receiving neither.',
      'After two years, both the cash-only and cash-plus-training groups showed significant income gains compared to the control group.',
      'However, after five years, the gains of the cash-only group had largely eroded, while the cash-plus-training group maintained gains of approximately 34% above baseline.',
      'The researchers concluded that cash transfers alone produce short-term gains but that durable economic improvement requires accompanying skill development.',
    ],
    noteTask: 'present the study and its most important finding, distinguishing between short-term and long-term outcomes',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'A University of Ghana study randomized 420 farming households into three groups to test the effects of cash transfers.',
      B: 'Both the cash-only and cash-plus-training groups showed significant income gains after two years.',
      C: 'A University of Ghana study found that while cash transfers alone and cash plus training produced similar short-term income gains among Ghanaian smallholders, only the cash-plus-training group sustained gains (approximately 34% above baseline) over five years — suggesting that durable economic improvement requires skill development alongside cash.',
      D: 'Dr. Amara Osei led a study on the effects of cash transfers and training on rural farming households in Ghana.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C identifies the study, states both the short-term outcome (similar gains for both groups after two years) and the long-term divergence (only cash-plus-training maintained gains at 34% above baseline after five years), and draws the conclusion (durable improvement requires skill development). The short-term vs. long-term distinction is central. A gives only methodology. B gives only the short-term result without the long-term divergence. D gives only authorship.',
  },

  {
    id: 'eoi_s_084', num: 84, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Philosopher of science Karl Popper proposed in 1934 that the criterion for scientific claims is falsifiability: a claim is scientific only if it could, in principle, be proven false by observation.',
      'Popper distinguished his criterion from that of the Vienna Circle logical positivists, who required verification (positive confirmation) rather than falsification.',
      'His criterion was designed to address what he called the "demarcation problem" — how to distinguish science from non-science, including pseudoscience.',
      'Popper argued that psychoanalysis and Marxist historical theory failed the falsifiability criterion because their proponents found ways to reinterpret any contrary evidence as confirmation.',
      'Critics of Popper, including Thomas Kuhn and Imre Lakatos, have argued that falsifiability is too simple: scientists routinely protect theories from falsification by modifying auxiliary hypotheses rather than abandoning core theories.',
    ],
    noteTask: 'introduce Popper\'s falsifiability criterion, explain what problem it was designed to solve, and acknowledge a key criticism',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Popper argued that psychoanalysis and Marxist theory fail the falsifiability criterion because their proponents interpret all evidence as confirmation.',
      B: 'Karl Popper\'s falsifiability criterion — that a claim is scientific only if it could in principle be proven false — was designed to distinguish science from pseudoscience; critics like Kuhn and Lakatos have argued, however, that scientists routinely protect theories by modifying auxiliary hypotheses rather than abandoning core claims.',
      C: 'Popper distinguished his falsifiability criterion from the logical positivists\' verification criterion.',
      D: 'Falsifiability is the criterion that a claim must be potentially refutable by observation to qualify as scientific.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the criterion (claim must be potentially falsifiable), explains the problem it solves (distinguishing science from pseudoscience — the demarcation problem), and acknowledges the key criticism (Kuhn and Lakatos: scientists protect theories by modifying auxiliaries). All three required components are present. A describes only the application to psychoanalysis and Marxism. C describes only the distinction from logical positivism. D gives only the definition without the problem it addresses or the criticism.',
  },

  {
    id: 'eoi_s_085', num: 85, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The global average surface temperature has risen approximately 1.2°C above pre-industrial levels as of 2023.',
      'The Paris Agreement (2015) set the goal of limiting warming to 1.5°C above pre-industrial levels, with a harder ceiling of 2°C.',
      'Current national pledges, if fully implemented, are estimated to lead to approximately 2.5°C of warming by 2100.',
      'At 2°C of warming, an estimated 37% of the world\'s population is exposed to severe heat waves at least once every five years; at 1.5°C, that figure is 14%.',
      'Sea level rise of approximately 0.5 meters is projected at 2°C; at 1.5°C, the projection is 0.1 meters less.',
    ],
    noteTask: 'use quantitative data to emphasize the difference between the 1.5°C and 2°C warming thresholds and indicate the gap between current pledges and the Paris Agreement goal',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Paris Agreement set a 1.5°C warming limit, but current national pledges are estimated to produce approximately 2.5°C of warming by 2100.',
      B: 'At 2°C of warming, 37% of the global population faces severe heat waves every five years; at 1.5°C, only 14% do — and current pledges, if fully implemented, are projected to produce 2.5°C of warming, well above the Paris Agreement\'s 1.5°C target.',
      C: 'Global average temperatures have risen approximately 1.2°C above pre-industrial levels as of 2023.',
      D: 'Sea level rise is projected at 0.5 meters at 2°C and 0.4 meters at 1.5°C.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B uses the specific heat wave exposure data (37% vs. 14%) to make the 1.5°C/2°C difference vivid and quantitative, and includes the current pledges figure (2.5°C) to show the gap with the Paris goal. Both required components are present and supported with specific numbers. A gives the gap between pledges and the Paris goal but doesn\'t use specific data to show the difference between 1.5°C and 2°C. C gives only the current temperature. D gives only the sea level projection, which has less dramatic contrast than the heat wave data.',
  },

  {
    id: 'eoi_s_086', num: 86, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before the widespread adoption of steam power in the nineteenth century, most textile production was a cottage industry — woven in workers\' own homes.',
      'The introduction of factory-based production concentrated work in large buildings equipped with power looms, requiring workers to leave their homes and submit to centralized supervision and fixed schedules.',
      'This transformation disrupted established rhythms of family and community life that had organized around domestic production.',
      'Historian E.P. Thompson argued that the factory system did not simply relocate work but fundamentally restructured workers\' relationship to time — imposing a new "time discipline" that separated work from life in ways that were culturally alien to pre-industrial workers.',
      'Thompson stated: "The first generation of factory workers were taught by their masters the importance of time; the second generation formed their short-time committees; the third generation struck for overtime or time-and-a-half."',
    ],
    noteTask: 'use a quotation from Thompson to illustrate how workers\' relationship to industrial time evolved across generations',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Thompson argued that the factory system imposed a new "time discipline" on workers.',
      B: 'The factory system disrupted the rhythms of family and community life that had organized around domestic production.',
      C: 'As Thompson observed, workers\' relationship to industrial time changed across three generations: the first was taught obedience to clock time by their employers; the second organized to limit their hours; and the third bargained for compensation for extra time — a trajectory from submission to negotiation to transaction captured in his remark that "the first generation of factory workers were taught by their masters the importance of time; the second generation formed their short-time committees; the third generation struck for overtime or time-and-a-half."',
      D: 'E.P. Thompson wrote about the "time discipline" imposed by the industrial factory system on pre-industrial workers.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C uses the quotation to illustrate the evolution across three generations — framing each generation\'s relationship to time before presenting Thompson\'s words, so the quotation clarifies rather than stands alone. The evolutionary trajectory (submission → limitation → negotiation) is made explicit before and by the quotation. A gives only Thompson\'s general concept without using the quotation. B describes the disruption of domestic life without the generational evolution. D gives only biographical context without using the quotation to illustrate the evolution.',
  },

  {
    id: 'eoi_s_087', num: 87, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Some education researchers have argued that discovery-based learning — in which students are expected to construct understanding through exploration rather than direct instruction — is more effective than traditional teaching because it produces deeper, more transferable knowledge.',
      'A 2021 meta-analysis by Dr. Freya Lindqvist at Uppsala University reviewed 47 controlled studies comparing discovery-based and direct instruction across STEM subjects.',
      'The analysis found that students receiving direct instruction outperformed discovery learners on assessments of factual knowledge and procedural skill.',
      'However, discovery learners showed equivalent or slightly superior performance on assessments of transfer — applying knowledge to novel problems.',
      'The researchers concluded that the two approaches optimize for different outcomes and that the most effective instruction likely combines both.',
    ],
    noteTask: 'refute the claim that discovery-based learning is simply more effective than direct instruction',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'A 2021 Uppsala University meta-analysis of 47 studies found that direct instruction produced better outcomes on factual and procedural assessments than discovery learning, while discovery learning showed equivalent or slightly better transfer — suggesting that neither approach is simply superior.',
      B: 'Discovery-based learning may produce deeper knowledge transfer than direct instruction.',
      C: 'Dr. Freya Lindqvist reviewed 47 controlled studies comparing discovery-based and direct instruction at Uppsala University in 2021.',
      D: 'The most effective instruction combines discovery-based and direct approaches.',
    },
    answer: 'A', isSPR: false,
    explanation: 'To refute "discovery learning is simply more effective," A uses the meta-analysis findings showing that direct instruction outperforms on factual and procedural assessments while discovery learning is equivalent or better only on transfer — demonstrating that neither is simply superior. The refutation is specific: the claim\'s unconditional "more effective" is shown to be false by the evidence. B partially supports discovery learning rather than refuting the sweeping claim. C gives only methodology. D states the conclusion without the evidence that refutes the claim.',
  },

  {
    id: 'eoi_s_088', num: 88, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'In 2020, approximately 2 billion people worldwide lacked access to safely managed drinking water.',
      'Sub-Saharan Africa and South Asia account for approximately 80% of the global population without safe drinking water.',
      'Waterborne diseases, including cholera, typhoid, and diarrheal illnesses, are responsible for approximately 1.2 million deaths per year — the majority of which occur in children under five.',
      'Investment of $1 in water and sanitation infrastructure is estimated to produce $4 to $12 in economic returns through reduced healthcare costs and increased productivity.',
      'Despite this return, global funding for water and sanitation infrastructure reached only 53% of the level the United Nations estimated as necessary in 2020.',
    ],
    noteTask: 'use quantitative data to argue for increased investment in water and sanitation by emphasizing both the human cost of the current deficit and the economic return on investment',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Approximately 2 billion people lack safely managed drinking water, and the majority are in Sub-Saharan Africa and South Asia.',
      B: 'Waterborne diseases kill approximately 1.2 million people per year, mostly children under five.',
      C: 'With 2 billion people lacking safe water — and waterborne diseases killing 1.2 million annually, mostly children — increasing investment is urgent; each dollar invested in water infrastructure returns $4 to $12 in economic value, yet global funding in 2020 reached only 53% of what the UN estimated as necessary.',
      D: 'Every dollar invested in water and sanitation returns $4 to $12 in economic value.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C combines the human cost data (2 billion without safe water; 1.2 million deaths, mostly children) with the economic return data ($4–12 per dollar invested) and frames the funding gap (only 53% of UN-estimated need) as urgent. Both required components are present and integrated into an argument for investment. A gives only the access deficit. B gives only the mortality data. D gives only the economic return without the human cost or funding gap.',
  },

  {
    id: 'eoi_s_089', num: 89, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before antibiotics, bacterial infections were managed primarily through the immune system\'s natural defenses, rest, and palliative care.',
      'The discovery of penicillin by Fleming in 1928 and its clinical development by Florey and Chain in the early 1940s transformed medicine by making previously fatal infections treatable.',
      'A 2022 study estimated that antibiotics prevented an estimated 2 million deaths from bacterial infections in the United States alone in 2019.',
      'However, antibiotic resistance — driven by overuse and misuse across human medicine and agriculture — now threatens to return medicine to a pre-antibiotic era for common infections.',
      'The WHO has listed antibiotic resistance as one of the top ten global public health threats facing humanity.',
    ],
    noteTask: 'explain the transformation antibiotics brought about and the threat now posed to that transformation, using the WHO designation to convey the seriousness of the threat',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Antibiotics transformed medicine by making previously fatal bacterial infections treatable; in the United States alone, they prevented approximately 2 million deaths in 2019. However, antibiotic resistance — which the WHO has identified as one of the top ten global public health threats — now risks reversing these gains.',
      B: 'The WHO has listed antibiotic resistance as one of the top ten global public health threats.',
      C: 'Fleming discovered penicillin in 1928; Florey and Chain developed it clinically in the early 1940s.',
      D: 'Antibiotic resistance is driven by overuse and misuse in both human medicine and agriculture.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A explains the transformation (antibiotics made fatal infections treatable; 2 million deaths prevented in the US in 2019), names the threat (antibiotic resistance risking a return to the pre-antibiotic era), and uses the WHO designation to convey seriousness. All three required components are present. B gives only the WHO designation. C gives only historical discovery facts. D gives only the cause of resistance without the transformation or the WHO designation.',
  },

  {
    id: 'eoi_s_090', num: 90, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Malala Yousafzai was born in 1997 in the Swat Valley of Pakistan.',
      'She began advocating for girls\' education publicly at age 11, writing a blog for the BBC under a pseudonym about life under Taliban rule.',
      'In October 2012, she was shot in the head by a Taliban gunman while riding home from school.',
      'She survived and continued her advocacy, co-founding the Malala Fund to support girls\' education globally.',
      'In 2014, at age 17, she became the youngest person ever to receive the Nobel Peace Prize.',
      'She stated in her Nobel acceptance speech: "One child, one teacher, one book, one pen can change the world."',
    ],
    noteTask: 'introduce Malala Yousafzai, explain what she advocates and what she survived, and use a quotation to convey her core message',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Malala Yousafzai was born in 1997 in Pakistan and became the youngest person to receive the Nobel Peace Prize in 2014.',
      B: 'Malala Yousafzai survived a 2012 assassination attempt by the Taliban after years of advocating for girls\' education and became the youngest Nobel Peace Prize laureate; her work rests on a conviction she expressed at the Nobel ceremony: "One child, one teacher, one book, one pen can change the world."',
      C: 'Malala Yousafzai began writing a blog for the BBC at age 11, advocating for girls\' education under Taliban rule in the Swat Valley.',
      D: 'In her Nobel acceptance speech, Malala Yousafzai stated: "One child, one teacher, one book, one pen can change the world."',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces Malala (youngest Nobel laureate, assassination survivor), explains what she advocates (girls\' education) and what she survived (2012 Taliban attack), and uses the quotation to convey her core message. All three required components are present. A gives only biographical facts without the advocacy, the survival, or the quotation. C gives only the early advocacy without the survival or the quotation. D uses the quotation without introducing Malala or explaining her advocacy and survival.',
  },

];

const DL_EOI3 = [...DL_EOI3_TRANSITIONS, ...DL_EOI3_SYNTHESIS];
