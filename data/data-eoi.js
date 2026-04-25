'use strict';

// ── EOI — Transitions (30 questions) ─────────────────────────────────────────
// 10 easy / 10 medium / 10 hard
// Transitions covered: Finally, Moreover, For example, Therefore, In contrast,
// Furthermore, In other words, Consequently, Additionally, In fact,
// However (×2), As a result, In this way, Indeed, Even so, Thus,
// For instance, Previously, Nevertheless, Meanwhile, Of course, That said,
// Granted, Though, Ultimately, What's more, That is, Subsequently,
// In this way (harder variant)

const DL_EOI_TRANSITIONS = [

  // ── EASY (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_t_001', num: 1, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'In 1898, Marie Curie and her husband Pierre announced the discovery of two new radioactive elements, polonium and radium. The French Academy of Sciences refused to publish their findings on radium until the discovery could be independently verified. Undeterred, Curie continued her research alone after Pierre\'s death in 1906. _______ in 1911, she became the first person to receive Nobel Prizes in two different scientific disciplines.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Instead,', B: 'For example,', C: 'Finally,', D: 'Similarly,' },
    answer: 'C', isSPR: false,
    explanation: 'The passage describes years of resistance and persistence building toward a culminating outcome. "Finally" signals the result that the prior sentences have been building toward. "Instead" signals contrast or substitution — the Nobel Prize does not replace anything named above. "For example" signals illustration — there is nothing for the Nobel Prize to exemplify. "Similarly" signals parallelism — the Nobel Prize is not analogous to a prior outcome.',
  },

  {
    id: 'eoi_t_002', num: 2, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The pitcher plant captures insects using leaves shaped into deep, slippery funnels. Prey that enters cannot grip the waxy inner walls and falls into digestive fluid below. _______ the plant secretes a sweet nectar along the rim that actively draws insects toward the opening.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'In other words,', C: 'For example,', D: 'Moreover,' },
    answer: 'D', isSPR: false,
    explanation: 'The first two sentences describe one trapping mechanism (the funnel); the third introduces a separate, additional mechanism (the nectar). "Moreover" signals an additional distinct point. "However" signals contrast — the nectar does not contradict the funnel. "In other words" signals restatement — the nectar is not a restatement of the waxy walls. "For example" would imply the nectar exemplifies the waxy walls, but it is a separate mechanism.',
  },

  {
    id: 'eoi_t_003', num: 3, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Gregor Mendel\'s experiments with pea plants in the 1860s established the foundational principles of heredity, demonstrating that traits pass between generations in predictable ratios rather than blending. _______ when he crossed plants bearing yellow seeds with plants bearing green seeds, all first-generation offspring displayed yellow seeds — a result that repeated consistently across thousands of plants.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'By contrast,', C: 'For example,', D: 'Therefore,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence two illustrates the general principle in sentence one — that traits follow predictable patterns. "For example" signals a specific instance of a general claim. "However" signals contrast, but the yellow-seed result is consistent with the principle. "By contrast" implies opposition. "Therefore" implies the result is logically deduced from the principle; it is an illustration of it.',
  },

  {
    id: 'eoi_t_004', num: 4, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Tree roots anchor topsoil in place, absorbing rainfall and slowing surface runoff. When forests are cleared, this anchoring network is removed entirely. _______ heavy rainfall on deforested slopes strips away topsoil at rates significantly higher than on forested land.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For example,', B: 'By contrast,', C: 'In addition,', D: 'Therefore,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentences one and two establish a causal condition (roots removed → anchoring gone); sentence three states the predictable consequence. "Therefore" signals a direct result. "For example" would make erosion an illustration of some broader principle not stated. "By contrast" signals opposition absent here. "In addition" would make erosion a separate added fact rather than a consequence.',
  },

  {
    id: 'eoi_t_005', num: 5, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The Atacama Desert in northern Chile receives less than one millimeter of rainfall annually, making it one of the driest places on Earth. _______ the Amazon Basin, roughly 3,000 kilometers to the east, receives between 2,000 and 3,000 millimeters per year and supports one of the most biodiverse ecosystems on the planet.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For example,', B: 'In contrast,', C: 'Therefore,', D: 'Similarly,' },
    answer: 'B', isSPR: false,
    explanation: 'The two sentences describe opposing extremes — near-zero rainfall versus abundant rainfall. "In contrast" signals the direct opposition. "For example" would imply the Amazon illustrates the Atacama\'s dryness. "Therefore" implies causation that is absent. "Similarly" implies the regions share the same characteristic, inverting the relationship.',
  },

  {
    id: 'eoi_t_006', num: 6, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Regular aerobic exercise strengthens the heart muscle and improves circulation, reducing the risk of cardiovascular disease. It also lowers blood pressure and decreases LDL cholesterol. _______ consistent physical activity has been associated with improved mood and reduced symptoms of anxiety and depression.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For example,', C: 'Furthermore,', D: 'Therefore,' },
    answer: 'C', isSPR: false,
    explanation: 'Each sentence adds an additional benefit of aerobic exercise. "Furthermore" signals a further supporting point in the same line of argument. "However" signals contrast — mental health benefits do not contradict the physical ones. "For example" would imply the mental health benefit exemplifies the cardiovascular ones. "Therefore" implies mental health benefits causally follow from the cholesterol reduction, which is not stated.',
  },

  {
    id: 'eoi_t_007', num: 7, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Light takes approximately eight minutes to travel from the Sun to Earth, meaning we never observe the Sun as it currently exists. _______ every image of the Sun that reaches our eyes is a record of how it appeared eight minutes in the past.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'By contrast,', B: 'Furthermore,', C: 'However,', D: 'In other words,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentence two restates and makes concrete the implication of sentence one — that we see the past, not the present. "In other words" signals that the following clause rephrases what was stated abstractly. "By contrast" signals opposition absent here. "Furthermore" would add a new point rather than clarify the existing one. "However" implies contradiction that is not present.',
  },

  {
    id: 'eoi_t_008', num: 8, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Before Gutenberg\'s printing press, producing a single book required a trained scribe to copy each page by hand — a process that could take months for a lengthy manuscript. The press allowed hundreds of copies to be produced in a fraction of the time and cost. _______ books that had once been accessible only to clergy and wealthy patrons became available to a far broader segment of European society.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'By contrast,', C: 'For instance,', D: 'Consequently,' },
    answer: 'D', isSPR: false,
    explanation: 'Wider book availability is the direct consequence of the press reducing cost and production time. "Consequently" signals that the social result follows from the technological change. "However" signals contrast that is absent. "By contrast" also signals opposition. "For instance" would make broader access an example of efficiency gains rather than a consequence of them.',
  },

  {
    id: 'eoi_t_009', num: 9, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'Urban parks and green spaces reduce the heat island effect by providing shade and releasing moisture through evapotranspiration. They also filter airborne particulates and absorb carbon dioxide. _______ they offer residents space for physical activity and social interaction, with documented effects on mental health and community cohesion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Additionally,', C: 'Therefore,', D: 'In other words,' },
    answer: 'B', isSPR: false,
    explanation: 'Each sentence adds another benefit of urban green spaces. "Additionally" signals a further separate supporting point. "However" signals contrast absent here. "Therefore" implies the mental health and social benefits causally follow from air quality and temperature improvements, which is not stated. "In other words" implies sentence three restates sentence two, but it introduces an entirely different category of benefit.',
  },

  {
    id: 'eoi_t_010', num: 10, type: 'eoi_transition', domain: 'eoi', difficulty: 'easy',
    passage: 'The blue whale is the largest animal known to have existed on Earth, exceeding even the largest dinosaurs in body mass. Its physical scale extends well beyond what most people imagine. _______ a blue whale\'s heart is roughly the size of a small car, and its major arteries are wide enough for a human to crawl through.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'By contrast,', B: 'For example,', C: 'In fact,', D: 'Therefore,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence three provides specific emphatic details that reinforce and amplify the claim in sentence two — that the whale\'s scale exceeds expectations. "In fact" signals that the following statement provides surprising, concrete emphasis for a prior claim. "For example" is the primary trap — the heart size relates to the claim, but "in fact" captures the rhetorical function of emphatic confirmation rather than neutral illustration. "By contrast" and "therefore" signal relationships that are absent.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'eoi_t_011', num: 11, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Early astronomers assumed Venus, perpetually shrouded in thick clouds, must have a surface resembling Earth\'s — perhaps shallow oceans or dense vegetation. _______ when Soviet Venera probes descended through the atmosphere in the 1970s, they transmitted images of a barren, rocky landscape baking at over 450 degrees Celsius.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'For instance,', C: 'Therefore,', D: 'However,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentence one describes a prior assumption; sentence two describes observed reality that directly contradicts it. "However" signals the contrast between expectation and outcome. "Similarly" implies the probe findings parallel the assumption. "For instance" would make the barren landscape an example of the expected Earth-like conditions, inverting the relationship. "Therefore" would imply the findings causally follow from the assumption.',
  },

  {
    id: 'eoi_t_012', num: 12, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Spanish moss shares no structural characteristics with actual mosses; it belongs to the bromeliad family, making it a relative of the pineapple. Unlike true mosses, it produces flowers and draws water and nutrients directly from the air rather than from soil. _______ botanists classify it alongside other bromeliads, not with the mosses whose name it bears.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'By contrast,', B: 'Nevertheless,', C: 'For instance,', D: 'As a result,' },
    answer: 'D', isSPR: false,
    explanation: 'The first two sentences establish that Spanish moss has bromeliad characteristics, not moss characteristics. Sentence three states the classification that follows from this evidence. "As a result" signals that the classification is the consequence of the evidence. "By contrast" signals opposition — but the classification is consistent with the evidence. "Nevertheless" implies botanists classify it with bromeliads despite some reason they should not. "For instance" would make the classification an illustration rather than a conclusion.',
  },

  {
    id: 'eoi_t_013', num: 13, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The 1987 Montreal Protocol imposed strict international limits on the production of chlorofluorocarbons, the chemicals responsible for depleting the ozone layer over Antarctica. Scientists predicted that ozone concentrations would begin recovering within decades. _______ the ozone hole remained unusually large into the early twenty-first century, prompting researchers to investigate whether volcanic aerosols and other factors were prolonging the depletion.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For example,', B: 'Therefore,', C: 'Furthermore,', D: 'Nevertheless,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentence two describes the expectation (recovery); sentence three describes the reality that contradicts it. "Nevertheless" signals persistence despite reasonable expectation of change. "For example" would make the persistent hole an example of the expected recovery — the opposite. "Therefore" would imply the persistence logically follows from the treaty, inverting the relationship. "Furthermore" would add a point consistent with the expectation, but the persistent hole is contrary to it.',
  },

  {
    id: 'eoi_t_014', num: 14, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'During exercise, muscle fibers develop microscopic tears from the mechanical stress placed on them. The body responds by dispatching repair proteins that rebuild the fibers slightly thicker and stronger than before. _______ the temporary discomfort of a workout produces lasting structural improvements that make the muscle more resistant to future strain.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For example,', C: 'As a result,', D: 'In this way,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentences one and two describe a two-step mechanism — stress tears fibers, the body repairs them stronger. Sentence three states what this mechanism achieves. "In this way" signals that the described process is the specific means by which the outcome is produced. "As a result" is the primary trap: it signals consequence, and the outcome does follow. But "in this way" is the precision choice when the passage explicitly describes a process — it names the mechanism as the means, not merely a prior event.',
  },

  {
    id: 'eoi_t_015', num: 15, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The world\'s oceans absorb roughly a quarter of the carbon dioxide released into the atmosphere each year — a process that has meaningfully slowed global warming. This absorption, however, produces a chemical transformation with severe consequences for marine ecosystems. As CO₂ dissolves in seawater, it forms carbonic acid. _______ since the Industrial Revolution, average ocean surface pH has dropped by 0.1 units, representing a 26 percent increase in acidity.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For instance,', B: 'By contrast,', C: 'However,', D: 'Indeed,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentences two and three establish that CO₂ absorption has severe consequences; sentence four provides specific quantitative evidence that reinforces this claim. "Indeed" signals emphatic supporting evidence for a prior assertion. "For instance" is the primary trap — the pH data could seem like an example of the consequences. But "for instance" introduces a typical case; "indeed" confirms and emphasizes the strength of the claim. "By contrast" and "however" signal opposition that is absent.',
  },

  {
    id: 'eoi_t_016', num: 16, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Classical economic theory holds that individuals act as rational agents who consistently maximize their own utility. This model proved robust enough to underpin decades of policy and financial modeling. _______ experiments by psychologists Daniel Kahneman and Amos Tversky in the 1970s demonstrated that human decision-making routinely departs from rationality in predictable and systematic ways.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'For example,', C: 'Consequently,', D: 'However,' },
    answer: 'D', isSPR: false,
    explanation: 'The first two sentences describe the dominance and robustness of rational agent theory; the third introduces research that directly contradicts it. "However" signals the contrast between the established model and the challenging findings. "Similarly" implies Kahneman and Tversky\'s work parallels the classical model. "For example" would imply their findings illustrate rational agency, inverting the relationship. "Consequently" would imply departure from rationality follows from the model\'s robustness.',
  },

  {
    id: 'eoi_t_017', num: 17, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Solar and wind power have become dramatically cheaper over the past decade. Intermittency remains a persistent challenge: generation falls when skies are overcast or winds are calm. _______ rapid advances in battery storage have enabled power grids to smooth these fluctuations far more effectively than was possible even a decade ago.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'As a result,', C: 'Even so,', D: 'For instance,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence two acknowledges a genuine problem (intermittency); sentence three asserts a development that addresses it. "Even so" grants the intermittency problem while asserting that battery storage provides a meaningful response. "Furthermore" would add a point that supports intermittency as a problem rather than qualifying it. "As a result" implies battery advances are a consequence of intermittency, misrepresenting the relationship. "For instance" would make battery storage an example of the intermittency problem.',
  },

  {
    id: 'eoi_t_018', num: 18, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'Bacteria reproduce extremely rapidly, and in any large population random mutations will inevitably produce individuals with partial resistance to a given antibiotic. When a patient stops an antibiotic course early, the more resistant individuals survive and reproduce while the less resistant ones are killed. _______ incomplete antibiotic courses apply precisely the selection pressure that allows resistant strains to become dominant.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For instance,', C: 'In other words,', D: 'Thus,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentences one and two describe a biological mechanism in detail; sentence three states the logical result that the mechanism produces. "Thus" signals that the conclusion is formally derived from the premises above. "In other words" is the primary trap: sentence three might seem to restate the mechanism in simpler terms. But it names the outcome the mechanism produces — it moves from process to result, not from complex to simple. "However" signals contrast that is absent. "For instance" would make resistant strains an illustration of some broader principle not stated.',
  },

  {
    id: 'eoi_t_019', num: 19, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'The metaphors embedded in everyday language subtly determine how we conceptualize abstract ideas. When time is described as a resource — something to be "spent," "saved," or "wasted" — speakers unconsciously apply financial logic to an experience with no natural economic structure. _______ people who strongly internalize this metaphor tend to report higher stress when unstructured time feels "unspent" by the end of a day.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Therefore,', C: 'For instance,', D: 'By contrast,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence three provides a specific observed case of the general phenomenon in sentence two. "For instance" signals this is one illustrative example of the larger claim. "Therefore" is the primary trap: there is a causal implication, and students may reach for "therefore" to express it. But the sentence describes an observed behavioral pattern — it illustrates the claim rather than deriving a formal conclusion from it. "However" and "by contrast" both signal opposition that is absent.',
  },

  {
    id: 'eoi_t_020', num: 20, type: 'eoi_transition', domain: 'eoi', difficulty: 'medium',
    passage: 'J. J. Thomson\'s 1897 discovery of the electron demonstrated that atoms contain negatively charged substructures — a finding that overturned a central assumption of nineteenth-century chemistry. _______ Dalton\'s atomic model had described the atom as a solid, indivisible sphere: the fundamental unit of matter that could not be further broken down.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'Moreover,', C: 'Previously,', D: 'For example,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence two describes the state of understanding that existed before Thomson\'s discovery — the prior model his work overturned. "Previously" signals that sentence two establishes temporal background: what was believed before. "Therefore" would imply Dalton\'s model follows logically from Thomson\'s discovery, inverting the chronology. "Moreover" would add Dalton\'s model as an additional parallel point rather than establishing it as the prior state. "For example" would make Dalton\'s model an illustration of Thomson\'s findings.',
  },


  // ── HARD (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_t_021', num: 21, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'By the mid-1960s, engineers at NASA\'s Manned Spacecraft Center in Houston were finalizing the design of the command module that would carry astronauts to the Moon. _______ a separate team at the Massachusetts Institute of Technology was developing the onboard guidance software — work that mission planners privately considered the most technically uncertain element of the entire program.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'Moreover,', C: 'Meanwhile,', D: 'As a result,' },
    answer: 'C', isSPR: false,
    explanation: 'Both sentences describe parallel activities occurring during the same time period. "Meanwhile" signals simultaneity. "Moreover" is the primary trap: it signals addition, and the MIT work is indeed additional. But "moreover" does not convey that both efforts were happening at the same time — and the time marker "by the mid-1960s" requires a transition capturing simultaneity, not mere addition. "Therefore" and "as a result" imply causation that the text does not support.',
  },

  {
    id: 'eoi_t_022', num: 22, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Over the past century, vaccines have dramatically reduced the burden of infectious disease worldwide, virtually eliminating smallpox and reducing polio to near eradication. _______ no vaccine provides complete protection, and some individuals experience side effects ranging from mild soreness to, in rare cases, more significant reactions. Even so, the epidemiological consensus holds that the benefits of widespread vaccination far outweigh the risks for virtually all populations.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Furthermore,', B: 'Of course,', C: 'Therefore,', D: 'In other words,' },
    answer: 'B', isSPR: false,
    explanation: 'The passage follows a three-part structure: strong positive claim → obvious limitation any reader would concede → reassertion of the main claim ("even so"). "Of course" acknowledges an obvious qualification before the argument reasserts its position. "Furthermore" is the primary trap: students reading sentence two as additional evidence for sentence one will select it — but vaccine side effects do not reinforce the case for vaccines; they qualify it. "Therefore" implies limitations logically follow from vaccines\' success. "In other words" implies sentence two restates sentence one.',
  },

  {
    id: 'eoi_t_023', num: 23, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'CRISPR-Cas9 technology has transformed genetic research, enabling scientists to edit DNA sequences with a speed and precision that would have seemed implausible a decade ago. Early clinical trials for conditions including sickle cell disease and certain inherited blindness disorders have produced results that researchers describe as remarkable. _______ the technology\'s potential for off-target edits — unintended modifications to regions of the genome outside the target — remains a safety concern that has not been fully resolved.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Moreover,', B: 'Specifically,', C: 'That said,', D: 'For this reason,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentences one and two make strongly positive claims about CRISPR; sentence three introduces a genuine qualification that complicates but does not negate the positive picture. "That said" signals a qualification after a positive claim. "Moreover" is the primary trap: students reading sentence three as additional information rather than a qualification will select it. But the off-target risk qualifies the optimistic picture rather than extending it. "Specifically" would imply sentence three elaborates a detail already named. "For this reason" implies causation — the off-target risk as a consequence of CRISPR\'s precision.',
  },

  {
    id: 'eoi_t_024', num: 24, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Researchers have documented a significant increase in political polarization in the United States over the past two decades, a period that coincides with the dramatic expansion of social media. _______ correlation does not establish causation, and some studies have found that the most politically polarized Americans are among the least active social media users. Even so, the accumulation of research linking algorithmic content curation to ideological radicalization has made the relationship difficult to dismiss entirely.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Granted,', C: 'For example,', D: 'In other words,' },
    answer: 'B', isSPR: false,
    explanation: 'The passage has a three-part structure: correlation is noted → a standard methodological objection is acknowledged → the main claim is reasserted. "Granted" formally concedes a point the reader would raise — that correlation ≠ causation — while the argument continues. "However" is the primary trap: it signals that sentence two contradicts sentence one, but "granted" more precisely captures the move of conceding a point rather than being reversed by it. The argument does not abandon the polarization-social media connection; it grants the objection while holding the main claim. "For example" would make the causation objection an illustration of the correlation. "In other words" implies restatement.',
  },

  {
    id: 'eoi_t_025', num: 25, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Organisms in the deep ocean have evolved remarkable adaptations to withstand extreme pressure — including flexible body structures and cell membranes stabilized by specialized lipids. These adaptations enable creatures to survive at depths where pressure would crush most surface-dwelling animals. _______ the barreleye fish, found at depths of up to 800 meters, possesses tubular eyes so structurally sensitive that scientists initially predicted it would be among the most vulnerable deep-sea species to pressure-induced damage.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'For example,', B: 'As a result,', C: 'Though,', D: 'Furthermore,' },
    answer: 'C', isSPR: false,
    explanation: 'The first two sentences establish the general rule — deep-sea organisms have evolved pressure-resistant adaptations. Sentence three introduces a counterexample: a deep-sea species with structures that defy the expected pattern. "Though" signals an exception to the expectation set by the prior sentences. "For example" is the primary trap: the barreleye is a deep-sea animal, and students may read it as an example of adaptation. But the passage frames it as a counterexample. "As a result" implies the barreleye\'s sensitivity follows from the adaptations, inverting the logic. "Furthermore" would add the barreleye as a consistent supporting detail.',
  },

  {
    id: 'eoi_t_026', num: 26, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'NASA\'s public case for the Apollo program emphasized the scientific discoveries that lunar missions would yield — geological samples, seismic data, and studies of the Moon\'s magnetic and gravitational fields. Program administrators also frequently cited the practical technologies that space research would spin off for civilian use. _______ the program was propelled by a geopolitical imperative: demonstrating American technological superiority over the Soviet Union at the height of the Cold War.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Similarly,', B: 'For instance,', C: 'As a result,', D: 'Ultimately,' },
    answer: 'D', isSPR: false,
    explanation: 'The first two sentences describe stated justifications for Apollo — scientific and technological. Sentence three introduces the deeper motivation underlying both. "Ultimately" signals the final or fundamental purpose driving the enterprise. "As a result" is the primary trap: students may read the geopolitical imperative as a consequence of the scientific program, but it is the underlying cause, not an outcome. "Similarly" implies the geopolitical motive parallels the stated justifications rather than superseding them. "For instance" would make Cold War competition an example of the scientific goals.',
  },

  {
    id: 'eoi_t_027', num: 27, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'The Amazon rainforest absorbs an estimated two billion tons of carbon dioxide per year, making it one of the most significant carbon sinks on Earth. The basin also hosts an estimated ten percent of all species on Earth, representing an irreplaceable repository of biological diversity. _______ the forest generates its own rainfall: trees release water vapor that condenses into clouds, producing precipitation that can fall hundreds of kilometers away — meaning that deforestation in one region can reduce rainfall in another.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For example,', C: 'Therefore,', D: 'What\'s more,' },
    answer: 'D', isSPR: false,
    explanation: 'Each sentence adds a separate, significant dimension of the Amazon — carbon absorption, biodiversity, and now rainfall generation. "What\'s more" signals an additional new claim that goes beyond what was stated and that the reader may find genuinely surprising. "Moreover" would also signal addition, but "what\'s more" emphasizes that the new information is especially striking and separate. "However" signals contrast absent here. "For example" would make rainfall generation an illustration of one of the prior claims. "Therefore" implies causation that is not present.',
  },

  {
    id: 'eoi_t_028', num: 28, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Approximately 27 percent of the total matter in the universe is composed of dark matter — a substance that does not emit, absorb, or reflect electromagnetic radiation. _______ dark matter cannot be observed directly with any telescope or detector sensitive to light, radio waves, X-rays, or any other part of the electromagnetic spectrum; its existence is inferred entirely from its gravitational effects on visible matter.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'Therefore,', C: 'In addition,', D: 'That is,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentence two clarifies and unpacks the full meaning of "does not interact with electromagnetic radiation" stated in sentence one — meaning no instrument sensitive to any part of the spectrum can detect dark matter. "That is" signals that the following clause defines or restates in more specific terms what was named above. "Therefore" is the primary trap: students may read sentence two as a logical consequence. But the observational implication is the definition of what "does not interact" means, not a deduction from it. "However" signals contrast absent here. "In addition" would add a new separate fact.',
  },

  {
    id: 'eoi_t_029', num: 29, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'Individual coral polyps extract calcium and carbonate ions from surrounding seawater and secrete calcium carbonate, building rigid skeletal structures around themselves. As polyps die, their skeletons remain, and new generations build directly on top of them, adding layer upon layer over centuries and millennia. _______ what appears to be a geological formation is in fact a living biological structure continuously constructed and extended by successive generations of organisms.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'However,', B: 'For example,', C: 'Nevertheless,', D: 'In this way,' },
    answer: 'D', isSPR: false,
    explanation: 'Sentences one and two describe the biological mechanism — polyps deposit calcium carbonate, die, and new generations build on top. Sentence three states what this mechanism cumulatively produces. "In this way" signals the mechanism-to-result structure: the process described is the specific means by which the outcome is achieved. "However" and "nevertheless" signal contrast or concession absent here. "For example" would make sentence three an illustration of the calcium carbonate deposition rather than its cumulative result.',
  },

  {
    id: 'eoi_t_030', num: 30, type: 'eoi_transition', domain: 'eoi', difficulty: 'hard',
    passage: 'In 1952, Rosalind Franklin produced a precise X-ray diffraction image of DNA — known as Photo 51 — that revealed critical details about the molecule\'s helical structure. Without Franklin\'s knowledge, James Watson was shown the image, and the structural information it contained proved decisive in his and Francis Crick\'s effort to construct a correct molecular model. _______ Watson and Crick published their landmark paper describing DNA\'s double-helix structure in Nature, receiving credit that Franklin, who died of cancer in 1958, was not alive to share.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical transition?',
    choices: { A: 'Therefore,', B: 'As a result,', C: 'Subsequently,', D: 'For example,' },
    answer: 'C', isSPR: false,
    explanation: 'Sentence three narrates what happened next in the timeline — the publication of the Watson-Crick paper. "Subsequently" signals temporal sequence: the publication followed the events in sentence two. "Therefore" is the primary trap: the passage strongly implies Watson\'s use of Franklin\'s data contributed to the publication, and students will reach for "therefore" to express that causal relationship. But the blank\'s position — mid-narrative — calls for a temporal transition. "As a result" makes the same error by overstating causation. "For example" would make the publication an illustration of the data-sharing.',
  },

];


// ── EOI — Rhetorical Synthesis (30 questions) ─────────────────────────────────
// 10 easy / 10 medium / 10 hard
// Goal types covered: present study + conclusion, introduce for unfamiliar
// audience, introduce a work, present primary aim, emphasize contrast,
// make + support generalization, explain causation, emphasize significance,
// summarize hypothesis, place event in context of changing beliefs,
// indicate duration + significance, explain how X does Y, refute a claim,
// multi-component goals (3 required elements), use quotation, explain
// causal chain, present primary aim vs. methodology, historical overview.
// Sources: real where possible; up to 1/3 fabricated [F].

const DL_EOI_SYNTHESIS = [

  // ── EASY (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_s_001', num: 1, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Psychologist Matthew Walker and colleagues at the University of California, Berkeley studied the role of sleep in memory consolidation.',
      'In one study, participants completed a learning task and were divided into two groups: those who slept during a twelve-hour retention interval and those who stayed awake.',
      'Participants who slept performed significantly better on follow-up testing than those who remained awake.',
      'Walker concluded that sleep plays an active role in consolidating newly acquired memories.',
      'This finding challenged earlier assumptions that sleep is merely a passive state during which the brain rests.',
    ],
    noteTask: 'present the study and its main conclusion',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Matthew Walker and colleagues at UC Berkeley studied the role of sleep in memory, challenging earlier assumptions about sleep as a passive state.',
      B: 'In a UC Berkeley study, participants who slept during a twelve-hour retention interval outperformed those who stayed awake on follow-up testing, leading Walker to conclude that sleep actively consolidates newly acquired memories.',
      C: 'Participants who slept outperformed those who stayed awake on follow-up memory testing.',
      D: 'Walker concluded that sleep plays an active role in memory consolidation rather than being a passive resting state.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B presents the study identity (UC Berkeley), the key result (sleep group outperformed), and the main conclusion (sleep actively consolidates memories) — all three required components. A describes Walker\'s research program generally but includes no specific result. C states the result only — no study identity and no conclusion. D states the conclusion only — no study identity and no specific result supporting it.',
  },

  {
    id: 'eoi_s_002', num: 2, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Dead Sea Scrolls are a collection of ancient Jewish manuscripts discovered between 1947 and 1956 near Qumran, on the northwestern shore of the Dead Sea.',
      'They include the oldest surviving copies of texts later incorporated into the Hebrew Bible.',
      'The scrolls also contain legal, liturgical, and sectarian documents from Jewish communities during the Second Temple period.',
      'Scholar Lawrence Schiffman has described them as among the most significant archaeological finds of the twentieth century.',
      'Since their discovery, the scrolls have reshaped scholarly understanding of early Judaism and early Christianity.',
    ],
    noteTask: 'introduce the Dead Sea Scrolls to an audience unfamiliar with them',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Lawrence Schiffman has described the Dead Sea Scrolls as among the most significant archaeological finds of the twentieth century.',
      B: 'Discovered near the Dead Sea between 1947 and 1956, the Dead Sea Scrolls are a collection of ancient Jewish manuscripts that include the oldest surviving biblical texts and documents from Second Temple Jewish communities.',
      C: 'The Dead Sea Scrolls have reshaped scholarly understanding of early Judaism and early Christianity since their discovery.',
      D: 'The scrolls contain legal, liturgical, and sectarian documents produced by Jewish communities during the Second Temple period.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces what the scrolls are (ancient Jewish manuscripts), when and where they were found, and what they contain — sufficient context for a reader with no prior knowledge. A conveys significance through Schiffman\'s assessment but tells an unfamiliar reader nothing about what the scrolls are. C states scholarly significance but presupposes the reader already knows what the scrolls are. D gives one content category without identifying what the scrolls are or where they came from.',
  },

  {
    id: 'eoi_s_003', num: 3, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Frederick Douglass was an American abolitionist, writer, and orator who escaped slavery in 1838.',
      'Narrative of the Life of Frederick Douglass, an American Slave was published in 1845.',
      'The book is an autobiographical account of Douglass\'s experiences as an enslaved person and his journey to freedom.',
      'It was one of the most widely read antislavery works of the nineteenth century.',
      'The book played a significant role in the abolitionist movement and remains a foundational work of American literature.',
    ],
    noteTask: 'introduce the Narrative of the Life of Frederick Douglass to an audience unfamiliar with it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Frederick Douglass was an American abolitionist and orator who escaped slavery in 1838.',
      B: 'Published in 1845, Frederick Douglass\'s Narrative of the Life of Frederick Douglass, an American Slave is an autobiography recounting his experiences under slavery and his journey to freedom — one of the most widely read antislavery works of the nineteenth century.',
      C: 'The Narrative played a significant role in the abolitionist movement and remains a foundational work of American literature.',
      D: 'Frederick Douglass published his autobiography in 1845, detailing his experiences as an enslaved person.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B introduces the work (title, year, author, type — autobiography), describes its content (experiences under slavery, journey to freedom), and states its significance (most widely read antislavery work of the century). A introduces Douglass but not the work itself. C states significance but an unfamiliar reader still has no idea what the Narrative is. D gives some information but omits the title and significance.',
  },

  {
    id: 'eoi_s_004', num: 4, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy', // [F]
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Researchers at Portland State University published a 2019 study on the relationship between urban tree canopy coverage and summer heat.',
      'The study examined whether neighborhoods with greater tree canopy coverage recorded lower ambient summer temperatures.',
      'The researchers collected temperature data from 47 neighborhoods across three consecutive summers.',
      'Neighborhoods with greater than 30 percent canopy coverage recorded peak summer temperatures averaging 3.2 degrees Celsius lower than those with less than 10 percent coverage.',
      'The researchers concluded that targeted tree-planting programs could meaningfully reduce heat-related health risks in low-canopy urban areas.',
    ],
    noteTask: 'present the primary aim of the study',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The researchers collected temperature data from 47 neighborhoods over three consecutive summers.',
      B: 'The study found that neighborhoods with more than 30 percent tree canopy recorded peak summer temperatures 3.2 degrees Celsius lower than those with less than 10 percent coverage.',
      C: 'The researchers set out to determine whether greater tree canopy coverage in residential neighborhoods could lower ambient summer temperatures.',
      D: 'The study concluded that targeted tree-planting programs could reduce heat-related health risks in urban areas.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The primary aim of a study is the question it set out to answer — the why behind the research. C directly states this: did greater tree canopy reduce summer temperatures? A describes methodology (data collection). B describes a key result. D describes the conclusion. All three are accurate but none states what the researchers were trying to find out.',
  },

  {
    id: 'eoi_s_005', num: 5, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'NASA launched the Voyager 1 and Voyager 2 spacecraft in 1977 to study the outer planets of the solar system.',
      'Both probes used gravitational assists from the planets they passed to gain speed on their outward trajectories.',
      'Voyager 1 crossed into interstellar space in 2012, becoming the first human-made object to leave the solar system.',
      'Voyager 2 crossed into interstellar space in 2018.',
      'Data from the probes has allowed scientists to study the heliopause — the boundary between the solar system and interstellar space.',
    ],
    noteTask: 'introduce the Voyager probes and describe their most significant achievement',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'NASA launched Voyager 1 and Voyager 2 in 1977 to study the outer planets, using planetary gravity assists to gain speed.',
      B: 'Voyager 1 crossed into interstellar space in 2012, and Voyager 2 followed in 2018.',
      C: 'Launched in 1977 to study the outer planets, NASA\'s Voyager probes became the first human-made objects to leave the solar system, enabling scientists to study the boundary between the solar system and interstellar space.',
      D: 'Data from the Voyager probes has allowed scientists to study the heliopause — the boundary between the solar system and interstellar space.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C introduces the probes (what, when, original purpose), states the most significant achievement (first human-made objects to leave the solar system), and notes the scientific significance (studying the heliopause). A introduces the probes and gravity assist but omits the achievement. B states the crossing dates with no introduction or context. D states the scientific benefit without introducing the probes.',
  },

  {
    id: 'eoi_s_006', num: 6, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Plate tectonics is the scientific theory describing the large-scale movement of segments of Earth\'s outermost layer, called tectonic plates.',
      'Earth\'s surface is divided into approximately 15 major tectonic plates that move a few centimeters per year relative to one another.',
      'Where plates converge, one plate may be forced beneath the other in a process called subduction, producing earthquakes and volcanoes.',
      'Where plates diverge, new seafloor is created as magma rises to fill the gap.',
      'The theory, developed in the 1960s, unified previously separate observations about earthquakes, volcanoes, and the distribution of fossils across continents.',
    ],
    noteTask: 'introduce plate tectonics to an audience unfamiliar with it',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The theory of plate tectonics unified previously separate observations about earthquakes, volcanoes, and fossil distribution when it was developed in the 1960s.',
      B: 'Where tectonic plates converge, subduction can trigger earthquakes and volcanic activity; where they diverge, new seafloor is created.',
      C: 'Plate tectonics is the theory that Earth\'s surface is divided into roughly 15 large, slowly moving segments whose interactions produce earthquakes, volcanoes, and other major geological features.',
      D: 'Tectonic plates move a few centimeters per year, which over geological time accounts for the current positions of the continents.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C defines what plate tectonics is (moving surface segments) and explains why it matters (produces major geological features) — essential context for an unfamiliar audience. A states historical significance but does not explain what plate tectonics actually is. B describes specific plate interactions but presupposes the reader knows what tectonic plates are. D gives a movement-rate detail that presupposes familiarity with the broader theory.',
  },

  {
    id: 'eoi_s_007', num: 7, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Before the 1860s, the dominant explanation for infectious disease in European medicine was miasma theory — the idea that disease arose from "bad air" produced by decaying organic matter.',
      'Louis Pasteur\'s experiments in the 1860s demonstrated that fermentation and decay were caused by microorganisms, not spontaneous chemical processes.',
      'Pasteur proposed that specific microorganisms caused specific diseases — the foundation of germ theory.',
      'Robert Koch built on Pasteur\'s work, identifying the bacteria responsible for tuberculosis in 1882 and cholera in 1883.',
      'Germ theory replaced miasma theory as the accepted scientific explanation for infectious disease and transformed medical practice.',
    ],
    noteTask: 'place Pasteur\'s development of germ theory in the context of changing beliefs about the cause of disease',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Pasteur\'s experiments in the 1860s demonstrated that fermentation and decay were caused by microorganisms rather than spontaneous chemical processes.',
      B: 'Robert Koch identified the bacteria responsible for tuberculosis and cholera, building on Pasteur\'s earlier research into microorganisms.',
      C: 'Before germ theory, miasma theory held that disease arose from "bad air"; Pasteur\'s 1860s research on microorganisms led him to propose that specific pathogens caused specific diseases, eventually displacing miasma theory as the accepted scientific framework.',
      D: 'Pasteur proposed that specific microorganisms caused specific diseases, a claim that Koch\'s bacteriological discoveries subsequently supported.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C provides the original belief (miasma theory), the trigger for change (Pasteur\'s 1860s research), and the outcome (germ theory displaced miasma theory) — all three required components of the "changing beliefs" goal. A gives only Pasteur\'s experimental finding without the prior belief or outcome. B focuses on Koch rather than the changing beliefs. D describes the Pasteur-Koch sequence but omits the prior belief that was displaced.',
  },

  {
    id: 'eoi_s_008', num: 8, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Hubble Space Telescope is a large space-based observatory launched by NASA in 1990.',
      'It orbits Earth at approximately 547 kilometers altitude, above the blurring effects of the atmosphere.',
      'Shortly after launch, scientists discovered that Hubble\'s primary mirror had been ground to the wrong curvature, producing blurred images.',
      'In 1993, astronauts on a Space Shuttle mission installed corrective optics, restoring Hubble\'s vision.',
      'Since its repair, Hubble has produced iconic images of deep space and contributed to major discoveries, including evidence that the expansion of the universe is accelerating.',
    ],
    noteTask: 'begin a narrative introducing the Hubble Space Telescope to a general audience',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'In 1993, astronauts installed corrective optics in the Hubble Space Telescope, restoring its vision after a mirror defect had caused blurred images.',
      B: 'The Hubble Space Telescope has produced iconic images of deep space and contributed to the discovery of the universe\'s accelerating expansion.',
      C: 'Launched by NASA in 1990, the Hubble Space Telescope is a space-based observatory orbiting Earth above the distorting effects of the atmosphere, designed to capture images of the universe with unprecedented clarity.',
      D: 'The Hubble Space Telescope orbits at 547 kilometers and has been serviced multiple times by shuttle crews.',
    },
    answer: 'C', isSPR: false,
    explanation: 'To begin a narrative for a general audience, the answer must introduce the subject without jumping to a later event. C introduces Hubble (what it is, when it was launched, why its position matters) and sets the stage. A begins in the middle of the story (1993 repair) without introducing what Hubble is. B states a late-stage outcome without introducing the subject to an unfamiliar reader. D gives operational details that presuppose familiarity.',
  },

  {
    id: 'eoi_s_009', num: 9, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The earliest known writing systems developed in Mesopotamia (cuneiform, around 3200 BCE) and Egypt (hieroglyphics, around 3100 BCE), initially used for record-keeping.',
      'The Phoenician alphabet, developed around 1050 BCE, introduced a simplified system of approximately 22 symbols representing consonant sounds.',
      'The Greek alphabet, derived from the Phoenician script around 800 BCE, was the first to include symbols representing vowel sounds.',
      'Most modern Western alphabets — including the Latin alphabet used in English — are descended from the Greek through the Etruscan script.',
      'Writing systems that began as accounting tools thus evolved over three millennia into the basis of most written languages used today.',
    ],
    noteTask: 'provide a historical overview of how writing developed from its origins to the modern alphabet',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The Phoenician alphabet introduced roughly 22 consonant symbols around 1050 BCE, and the Greeks adapted it around 800 BCE by adding vowels.',
      B: 'Writing was initially developed for practical purposes like record-keeping before evolving into a tool for literature and communication.',
      C: 'Writing systems originated in Mesopotamia and Egypt around 3200–3100 BCE as record-keeping tools; simplified over millennia through the Phoenician and Greek alphabets, they produced the Latin alphabet used in modern English.',
      D: 'Most modern Western alphabets descend from the Greek alphabet, which derived from the Phoenician script.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C provides a chronological overview covering origin, key steps, and endpoint — the full sequence. A gives only two steps (Phoenician → Greek) and omits the origin. B describes the functional shift without any chronological overview. D describes only the endpoint without any historical overview from the origin.',
  },

  {
    id: 'eoi_s_010', num: 10, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'easy',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Many migratory bird species navigate using Earth\'s magnetic field.',
      'Researchers studying European robins have proposed that a light-sensitive protein called cryptochrome, located in the birds\' eyes, may allow them to detect magnetic field lines.',
      'Cryptochrome is activated by blue light and is thought to generate quantum-chemical reactions that produce awareness of magnetic field orientation.',
      'European robins can detect changes in magnetic field inclination as small as 0.2 degrees.',
      'This mechanism differs from the magnetite-based magnetic sensing found in some fish and bacteria.',
    ],
    noteTask: 'identify the mechanism proposed to allow European robins to detect Earth\'s magnetic field',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'European robins can detect changes in magnetic field inclination as small as 0.2 degrees.',
      B: 'The magnetite-based sensing found in some fish and bacteria is distinct from the mechanism used by European robins.',
      C: 'Research suggests that cryptochrome — a blue-light-sensitive protein in the robins\' eyes — may generate quantum-chemical reactions that allow them to detect the orientation of Earth\'s magnetic field.',
      D: 'Many migratory birds navigate using Earth\'s magnetic field through mechanisms that vary by species.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The goal is to identify the specific proposed mechanism. C names the protein (cryptochrome), its location (the eyes), its light sensitivity (blue light), and its proposed function (quantum-chemical reactions enabling magnetic detection). A states the robin\'s sensitivity level but identifies no mechanism. B describes a contrasting mechanism without identifying the robin-specific one. D describes general magnetic navigation without naming the mechanism proposed for robins.',
  },


  // ── MEDIUM (10) ───────────────────────────────────────────────────────────

  {
    id: 'eoi_s_011', num: 11, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Neuropsychologist Endel Tulving introduced the distinction between episodic and semantic memory in 1972.',
      'Episodic memory refers to a person\'s ability to recall specific personal experiences along with their time, place, and emotional context.',
      'Semantic memory refers to general factual knowledge about the world, independent of personal experience.',
      'Patients with damage to the hippocampus often lose the ability to form new episodic memories while retaining much of their semantic knowledge.',
      'Conversely, patients with semantic dementia progressively lose access to factual knowledge while their episodic memory remains relatively intact.',
    ],
    noteTask: 'emphasize the contrast between episodic and semantic memory',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Endel Tulving introduced the distinction between episodic and semantic memory in 1972.',
      B: 'Patients with hippocampal damage often lose episodic memory while semantic memory is preserved, demonstrating that the two systems depend on different neural structures.',
      C: 'Episodic memory involves the recall of personal experiences tied to time and place, whereas semantic memory involves factual knowledge independent of personal experience — a distinction supported by evidence that the two systems can fail independently of each other.',
      D: 'Both episodic and semantic memory can be impaired by neurological damage, as evidence from hippocampal patients and semantic dementia cases demonstrates.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C names and defines both memory types — required to emphasize the contrast — and includes evidence that the two systems dissociate, reinforcing it. A notes only that Tulving introduced the distinction with no contrast content. B describes the hippocampal finding (one direction of dissociation) but never names or defines semantic memory, presenting only one side. D states that both systems can be impaired — which emphasizes similarity rather than difference, inverting the goal.',
  },

  {
    id: 'eoi_s_012', num: 12, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Bioluminescence is the ability of living organisms to produce and emit light through chemical reactions.',
      'Approximately 76 percent of marine organisms living below 200 meters are capable of bioluminescence.',
      'Deep-sea anglerfish use a bioluminescent lure extending from their heads to attract prey in total darkness.',
      'Firefly squid (Watasenia scintillans) produce coordinated bioluminescent flashes used in communication with potential mates.',
      'Some deep-sea jellyfish emit bioluminescent light as a defense mechanism, startling or disorienting predators.',
    ],
    noteTask: 'make and support a generalization about how deep-sea organisms use bioluminescence',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Deep-sea anglerfish use bioluminescent lures to attract prey, while firefly squid use bioluminescent flashes to communicate with potential mates.',
      B: 'Bioluminescence serves multiple distinct functions for deep-sea organisms, including attracting prey, communicating with potential mates, and deterring predators.',
      C: 'Approximately 76 percent of marine organisms below 200 meters are capable of bioluminescence, demonstrating how widespread light production is in the deep ocean.',
      D: 'Both deep-sea anglerfish and firefly squid produce bioluminescent light, and both live below 200 meters.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B states an explicit generalization (bioluminescence serves multiple distinct functions) and supports it with three specific examples from the notes. A lists two examples without stating a generalization. C makes a generalization about prevalence (how widespread), not about how organisms use bioluminescence. D states two parallel facts without drawing any generalization.',
  },

  {
    id: 'eoi_s_013', num: 13, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Large volcanic eruptions inject massive quantities of sulfur dioxide into the stratosphere.',
      'Sulfur dioxide reacts with water vapor to form sulfate aerosols — tiny airborne particles that reflect sunlight back into space.',
      'These aerosols can remain in the stratosphere for one to three years following an eruption.',
      'The 1991 eruption of Mount Pinatubo in the Philippines injected an estimated 20 million tons of sulfur dioxide into the stratosphere.',
      'Global average temperatures dropped by approximately 0.5 degrees Celsius in the two years following the Pinatubo eruption.',
    ],
    noteTask: 'explain how large volcanic eruptions can cause global temperatures to decrease',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The 1991 Pinatubo eruption injected approximately 20 million tons of sulfur dioxide into the stratosphere, and global temperatures dropped by 0.5 degrees Celsius in the following two years.',
      B: 'Large volcanic eruptions inject sulfur dioxide into the stratosphere, where it forms sulfate aerosols that reflect sunlight back into space, reducing solar energy reaching Earth\'s surface and lowering global temperatures.',
      C: 'Sulfate aerosols formed from volcanic sulfur dioxide can remain in the stratosphere for up to three years, prolonging their effect on global temperatures.',
      D: 'Volcanic eruptions have been associated with short-term global cooling, as demonstrated by temperature records following the 1991 Pinatubo eruption.',
    },
    answer: 'B', isSPR: false,
    explanation: 'To explain causation, the answer must trace the full mechanism. B covers the entire chain: eruption → sulfur dioxide → sulfate aerosols → reflect sunlight → temperature decrease. A correctly pairs Pinatubo with the temperature drop but does not explain the mechanism linking them. C describes one property of aerosols (persistence) but omits the cooling mechanism. D asserts an association without explaining the mechanism.',
  },

  {
    id: 'eoi_s_014', num: 14, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Marie Curie was a Polish-French physicist and chemist working in Paris in the late nineteenth and early twentieth centuries.',
      'In 1898, she and her husband Pierre identified two new radioactive elements — polonium and radium.',
      'To isolate one gram of radium, Curie processed approximately one ton of pitchblende ore through a series of chemical reactions.',
      'Radium\'s radioactive properties made it central to early cancer treatment; hospitals began using radium therapy within a decade of its isolation.',
      'Curie\'s methods for isolating radioactive elements established techniques still used in nuclear physics and radiochemistry today.',
    ],
    noteTask: 'emphasize the significance of Curie\'s isolation of radium',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'To isolate a single gram of radium, Curie processed approximately one ton of pitchblende ore.',
      B: 'Curie identified radium in 1898 alongside polonium, after years of chemical separation work conducted with Pierre.',
      C: 'Curie\'s isolation of radium had lasting consequences: it provided the material basis for early cancer treatments and established laboratory techniques in nuclear physics and radiochemistry that remain in use today.',
      D: 'Curie processed pitchblende to isolate radium, which hospitals began using for cancer treatment within a decade.',
    },
    answer: 'C', isSPR: false,
    explanation: 'To emphasize significance, the answer must state the impact chain. C names both downstream consequences (cancer treatment and lasting laboratory techniques). A conveys difficulty rather than significance. B provides factual background without making any claim about the discovery\'s importance. D combines isolation and medical use but omits the contribution to nuclear physics and radiochemistry.',
  },

  {
    id: 'eoi_s_015', num: 15, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Alfred Wegener was a German meteorologist and geophysicist who proposed the theory of continental drift in 1912.',
      'Wegener observed that the coastlines of South America and Africa appeared to fit together like puzzle pieces.',
      'He also noted that identical fossils of the same plant and animal species had been found on continents now separated by thousands of kilometers of ocean.',
      'Wegener proposed that all of Earth\'s landmasses had once been joined in a single supercontinent — Pangaea — and had gradually drifted apart over millions of years.',
      'His theory was rejected by most geologists during his lifetime because he could not identify a mechanism powerful enough to move continents.',
    ],
    noteTask: 'summarize Wegener\'s continental drift hypothesis and its key supporting evidence',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Alfred Wegener proposed continental drift in 1912, though most geologists rejected it because he could not identify a mechanism for continental movement.',
      B: 'Wegener argued that matching coastlines between South America and Africa and the presence of identical fossils on now-separated continents indicated that all landmasses had once formed a single supercontinent — Pangaea — that gradually drifted apart.',
      C: 'Wegener observed that South American and African coastlines appeared to fit together, and identical fossils appeared on widely separated continents.',
      D: 'The theory of continental drift, developed by Wegener, was not accepted until the mid-twentieth century, when plate tectonics provided the missing mechanism.',
    },
    answer: 'B', isSPR: false,
    explanation: 'To summarize a hypothesis, the answer must state the main claim and its key evidence. B states the core hypothesis (Pangaea that drifted apart) and both major lines of supporting evidence (matching coastlines and fossil distribution). A introduces Wegener and the rejection but does not summarize the hypothesis. C lists the two evidence types but does not state the hypothesis they support. D describes the theory\'s historical reception without summarizing its content.',
  },

  {
    id: 'eoi_s_016', num: 16, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'For most of recorded history, the prevailing view in European astronomy was geocentrism — the belief that Earth was stationary at the center of the universe.',
      'In 1543, Nicolaus Copernicus published De revolutionibus orbium coelestium, proposing that Earth and the other planets orbit the Sun.',
      'Galileo Galilei\'s telescopic observations in the early seventeenth century — including the moons of Jupiter and the phases of Venus — provided the first observational evidence supporting heliocentrism.',
      'The Catholic Church opposed heliocentrism, and Galileo was placed under house arrest in 1633 for defending the Copernican model.',
      'By the end of the seventeenth century, following Isaac Newton\'s mathematical framework for planetary motion, heliocentrism had replaced geocentrism as the accepted scientific model.',
    ],
    noteTask: 'place the shift from geocentrism to heliocentrism in the context of changing beliefs about Earth\'s place in the universe',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Copernicus published his heliocentric model in 1543, Galileo provided observational support in the early seventeenth century, and Newton\'s framework cemented its acceptance by the century\'s end.',
      B: 'Galileo\'s telescopic observations — including the moons of Jupiter and the phases of Venus — provided the first physical evidence that Earth was not at the center of the universe.',
      C: 'For most of recorded history, European astronomy held that Earth was stationary at the center of the universe; Copernicus\'s 1543 proposal, supported by Galileo\'s observations and Newton\'s mathematics, eventually displaced this belief entirely.',
      D: 'Galileo was placed under house arrest in 1633 for defending the Copernican model, demonstrating the institutional resistance that heliocentrism faced.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The goal requires the original belief, the sequence of change, and the outcome. C provides all three: geocentrism as the prior belief, the sequence of change (Copernicus, Galileo, Newton), and the outcome (heliocentrism displaced geocentrism). A provides the chronological sequence but omits the original belief. B describes Galileo\'s contribution but omits both the prior belief and the full sequence. D describes one moment of resistance without providing the prior belief or the eventual outcome.',
  },

  {
    id: 'eoi_s_017', num: 17, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium', // [F]
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Researchers at the University of Exeter studied the effects of urban traffic noise on the songs of great tits (Parus major) across European cities.',
      'The study compared songs of great tits in high-traffic urban areas with those in quieter rural environments.',
      'Urban great tits produced songs at significantly higher frequencies than their rural counterparts.',
      'The researchers attributed the frequency shift to low-frequency traffic noise that masks low-frequency birdsong.',
      'The researchers concluded that urban noise pollution is driving measurable evolutionary pressure on bird communication over relatively short timescales.',
    ],
    noteTask: 'present the study and explain what its findings suggest about the effects of urban noise on bird communication',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Great tits in urban areas sing at higher frequencies than those in rural areas.',
      B: 'Researchers at the University of Exeter found that urban great tits sing at higher frequencies than rural great tits — a shift they attributed to the need to be heard above traffic noise — concluding that urban noise pollution is creating measurable evolutionary pressure on bird communication.',
      C: 'The study compared great tit songs in high-traffic urban areas with those in quieter rural areas, collecting data from cities across Europe.',
      D: 'Urban traffic noise interferes with low-frequency birdsong, forcing some species to communicate at higher frequencies.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B identifies the study (University of Exeter), the key finding (higher-frequency urban songs), the proposed mechanism (rising above traffic noise), and the broader conclusion (evolutionary pressure on communication). A states only the finding with no study identity, mechanism, or conclusion. C describes methodology without findings or conclusions. D makes a general claim about noise and birdsong that is not precisely what the study found — the study found birds adapting, not merely being masked.',
  },

  {
    id: 'eoi_s_018', num: 18, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Cacti store water in thick, fleshy stems and have evolved spines in place of leaves to minimize evaporative water loss.',
      'Desert grasses often have deep root systems that reach water tables far below the surface.',
      'Some desert plants, such as the resurrection plant (Selaginella lepidophylla), can lose up to 95 percent of their water content and survive in a dormant state, reviving when water becomes available.',
      'The creosote bush coats its leaves in a resinous substance that reduces water loss while producing chemicals that inhibit competing plants nearby.',
      'Many desert annuals complete their entire life cycles — germinating, flowering, and seeding — within days of a rainfall event, before the soil dries out.',
    ],
    noteTask: 'make and support a generalization about how desert plants survive in environments with limited water',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The creosote bush reduces water loss with a resinous coating while also suppressing nearby competitors — two strategies that make it especially competitive in arid environments.',
      B: 'Cacti store water in their stems, desert grasses draw from deep root systems, and the resurrection plant can survive near-complete desiccation — all examples of structural adaptations.',
      C: 'Desert plants have evolved a variety of strategies for surviving with minimal water, including structural water storage, deep-root access to underground reserves, dormancy during dry periods, and life cycles timed to rainfall events.',
      D: 'Many desert plants have physical adaptations that reduce water loss or increase water intake, allowing survival in arid environments.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C states an explicit generalization (a variety of strategies) and supports it with four specific mechanisms from the notes. A focuses on one species without a generalization. B lists three examples but the framing ("structural adaptations") is too narrow — it omits dormancy and rapid life cycles. D makes a partial generalization that covers only two adaptation types, omitting dormancy and accelerated life cycles.',
  },

  {
    id: 'eoi_s_019', num: 19, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Vaccines work by introducing an antigen — a substance that triggers an immune response — without causing the actual disease.',
      'Antigens may be weakened or inactivated pathogens, surface protein fragments, or genetic instructions (as in mRNA vaccines) that cause cells to produce a pathogen protein temporarily.',
      'The immune system responds by producing antibodies and generating memory cells specific to that pathogen.',
      'If the vaccinated person later encounters the actual pathogen, the memory cells recognize it rapidly and mount a faster, stronger response than would be possible on first exposure.',
      'This process allows the immune system to defeat the pathogen before it can cause serious illness.',
    ],
    noteTask: 'explain how vaccines enable the body to fight off future infections',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Vaccines introduce antigens into the body, triggering an immune response that includes the production of antibodies.',
      B: 'Memory cells generated during vaccination recognize the pathogen on future exposure and mount a faster immune response than would be possible on first contact.',
      C: 'Vaccines introduce an antigen that triggers the immune system to produce antibodies and memory cells; if the vaccinated person later encounters the pathogen, those memory cells enable a rapid, strong response that prevents serious illness.',
      D: 'mRNA vaccines cause cells to temporarily produce a pathogen protein, which the immune system responds to as though confronting a real infection.',
    },
    answer: 'C', isSPR: false,
    explanation: 'To explain how vaccines enable the body to fight future infections, the answer must trace the full process. C covers all stages: antigen introduction → immune response (antibodies and memory cells) → future recognition and rapid response → prevention of serious illness. A covers only the first stage and omits memory cells and future protection. B describes the memory cell function but omits the initial antigen introduction. D correctly describes only mRNA vaccines, not the general process.',
  },

  {
    id: 'eoi_s_020', num: 20, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'medium',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Mary Shelley was an English author born in 1797.',
      'Frankenstein; or, The Modern Prometheus was published anonymously in 1818 when Shelley was twenty years old.',
      'The novel follows scientist Victor Frankenstein, who creates a living creature from human remains and then abandons it — with catastrophic consequences.',
      'Frankenstein is widely considered the first science fiction novel and established the genre\'s preoccupation with the unintended consequences of scientific ambition.',
      'It differs from earlier Gothic fiction in grounding its horror in scientific experimentation rather than supernatural forces.',
    ],
    noteTask: 'introduce Frankenstein to an unfamiliar audience, explain its literary significance, and identify what distinguishes it from earlier Gothic fiction',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Mary Shelley\'s Frankenstein follows a scientist who creates life from human remains, only to abandon his creation with catastrophic results.',
      B: 'Published in 1818, Mary Shelley\'s Frankenstein is widely considered the first science fiction novel — a story of scientific creation and abandonment that established the genre\'s focus on unintended consequences and distinguished itself from earlier Gothic fiction by grounding its horror in science rather than the supernatural.',
      C: 'Frankenstein is considered the first science fiction novel and differs from earlier Gothic fiction in using scientific experimentation rather than the supernatural as the source of horror.',
      D: 'Mary Shelley published Frankenstein anonymously in 1818 at the age of twenty, making it one of the most remarkable literary debuts in English literary history.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The goal has three required components: introduce the work (title, year, author, basic plot), explain literary significance (first sci-fi novel, established genre focus), and identify what distinguishes it from Gothic fiction (science vs. supernatural). B addresses all three. A provides only the plot summary. C addresses significance and distinction but omits the introduction (no author named, no plot, no year). D focuses on the biographical circumstance without addressing literary significance or the Gothic fiction distinction.',
  },


  // ── HARD (10) ─────────────────────────────────────────────────────────────

  {
    id: 'eoi_s_021', num: 21, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Rachel Carson was an American marine biologist and science writer.',
      'Silent Spring, published in 1962, documented the damage caused by widespread use of synthetic pesticides — particularly DDT — to wildlife, ecosystems, and human health.',
      'Carson argued that chemical manufacturers had systematically misled the public about the safety of their products.',
      'Silent Spring is widely credited with catalyzing the modern environmental movement in the United States.',
      'The book prompted the Kennedy administration to establish a Science Advisory Committee on pesticides, contributing to the eventual US ban on DDT in 1972.',
    ],
    noteTask: 'introduce Silent Spring to an audience unfamiliar with it and explain its significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Rachel Carson argued in Silent Spring that chemical manufacturers had systematically misled the public about the safety of synthetic pesticides, particularly DDT.',
      B: 'Published in 1962, Rachel Carson\'s Silent Spring documented the harms caused by synthetic pesticides and is widely credited with catalyzing the modern environmental movement, ultimately contributing to the US ban on DDT in 1972.',
      C: 'Silent Spring documented the damage caused by synthetic pesticides, particularly DDT, which was eventually banned in the United States in 1972.',
      D: 'Rachel Carson\'s Silent Spring prompted the Kennedy administration to establish a Science Advisory Committee on pesticides.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B addresses both required components: introduces the work (year, author, subject — synthetic pesticides) and explains its significance (catalyzed the environmental movement; contributed to the DDT ban). A focuses on one specific claim from the book without the broader significance. C states subject matter and policy endpoint but omits the broader significance (the environmental movement) and does not introduce Carson as author. D states one specific policy effect without introducing the book\'s subject or broader significance.',
  },

  {
    id: 'eoi_s_022', num: 22, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'For decades, health authorities warned that regular coffee consumption elevated the risk of cardiovascular disease.',
      'In 2014, researchers led by Ming Ding at Harvard\'s T.H. Chan School of Public Health published a meta-analysis in the journal Circulation.',
      'The analysis examined 36 prospective cohort studies involving approximately 1.28 million participants.',
      'Participants who consumed 3 to 5 cups of coffee per day showed lower risk of cardiovascular disease compared to non-drinkers.',
      'The researchers concluded that moderate coffee consumption is not associated with increased cardiovascular risk for healthy adults.',
    ],
    noteTask: 'refute the claim that moderate coffee consumption increases cardiovascular risk',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'A 2014 meta-analysis in Circulation examined 36 studies involving approximately 1.28 million participants and found that moderate coffee consumption is not associated with increased cardiovascular risk.',
      B: 'For decades, health authorities warned that regular coffee consumption elevated the risk of cardiovascular disease.',
      C: 'Contrary to longstanding health warnings, a large 2014 meta-analysis found that adults drinking 3 to 5 cups of coffee daily actually showed lower cardiovascular risk than non-drinkers.',
      D: 'Ming Ding and colleagues at Harvard analyzed 36 prospective cohort studies and concluded that moderate coffee consumption poses no cardiovascular risk to healthy adults.',
    },
    answer: 'C', isSPR: false,
    explanation: 'C uses the strongest available data: not merely a null result ("no increased risk") but an inverse finding (moderate drinkers showed lower risk than non-drinkers). A null result weakly counters the claim; an inverse result definitively contradicts it. A is the primary trap: it reports the null conclusion and the study\'s scale but omits the inverse finding that makes the refutation decisive, and does not acknowledge the claim being countered. B states the claim to be refuted. D states the null conclusion but omits the inverse finding and does not frame the response as a contradiction.',
  },

  {
    id: 'eoi_s_023', num: 23, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard', // [F]
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Some fitness professionals have cautioned that high-intensity strength training poses an elevated fracture risk for adults over 65 due to age-related bone density loss.',
      'A 2021 meta-analysis led by Dr. Priya Nair at Monash University reviewed 42 randomized controlled trials involving adults aged 65 and over.',
      'The analysis found that participants who engaged in progressive resistance training at least twice per week showed a 4.7 percent increase in lumbar spine bone mineral density over 12 months.',
      'Participants in the same group also showed a 31 percent reduction in fall-related fracture incidence compared to age-matched sedentary controls.',
      'The researchers concluded that properly supervised high-intensity strength training improves bone density and reduces fracture risk in older adults.',
    ],
    noteTask: 'refute the claim that high-intensity strength training elevates fracture risk for adults over 65',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'A 2021 Monash University meta-analysis reviewed 42 randomized controlled trials and found no evidence that high-intensity strength training increases fracture risk in older adults.',
      B: 'The meta-analysis found that adults over 65 who engaged in progressive resistance training at least twice weekly showed a 4.7 percent increase in bone mineral density and a 31 percent reduction in fall-related fractures compared to sedentary controls — directly contradicting the claim that strength training raises fracture risk.',
      C: 'Some fitness professionals have cautioned that high-intensity strength training poses an elevated fracture risk for adults over 65 due to age-related bone density loss.',
      D: 'Dr. Priya Nair\'s research concluded that properly supervised high-intensity strength training is safe and beneficial for adults over 65.',
    },
    answer: 'B', isSPR: false,
    explanation: 'B uses the strongest available data to contradict the claim — not a null finding but an inverse result (strength training reduced fractures by 31 percent and increased bone density by 4.7 percent). A reports the study scale and a null finding but omits the positive inverse results that make the refutation decisive. C states the claim to be refuted. D states the conclusion but omits the specific quantitative data that give the refutation its force.',
  },

  {
    id: 'eoi_s_024', num: 24, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Alexander Fleming was a Scottish bacteriologist working at St. Mary\'s Hospital in London.',
      'In 1928, Fleming observed that a mold — later identified as Penicillium notatum — had contaminated one of his bacterial cultures and was killing the surrounding bacteria.',
      'Fleming identified the active substance as penicillin and published his findings, though he did not develop it further into a usable treatment.',
      'Howard Florey and Ernst Chain at Oxford University isolated and purified penicillin in the late 1930s and early 1940s, demonstrating its effectiveness as a treatment.',
      'Penicillin became the first widely used antibiotic and has been credited with saving an estimated 200 million lives.',
    ],
    noteTask: 'introduce Fleming\'s discovery to an unfamiliar audience, explain how it became a treatment, and convey its global significance',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Fleming discovered penicillin in 1928 after observing that a mold was killing bacteria in a culture; Florey and Chain later purified it into a usable treatment.',
      B: 'Penicillin has saved an estimated 200 million lives since its introduction and is considered one of the most important medical advances in history.',
      C: 'In 1928, Scottish bacteriologist Alexander Fleming observed that a mold contaminating his culture was killing surrounding bacteria; Florey and Chain subsequently purified the active compound into a usable treatment; and the resulting antibiotic has since saved an estimated 200 million lives worldwide.',
      D: 'Fleming identified penicillin in 1928 and published his findings, but it was Florey and Chain who developed it into an effective treatment.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The goal has three required components: introduce the discovery (who, when, what happened), explain how it became a treatment (the Florey-Chain step), and convey global significance (200 million lives). C addresses all three explicitly and in sequence. A covers the discovery and the Florey-Chain step but omits the significance. B states only the significance — no discovery, no development path. D covers the discovery and the development distinction but omits the significance entirely.',
  },

  {
    id: 'eoi_s_025', num: 25, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard', // [F] fabricated quote from real researcher
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Psychologist Raymond Mar at York University has studied the relationship between fiction reading and social cognition.',
      'His 2006 study found that people who read more fiction scored higher on tests of empathy and social reasoning than those who primarily read non-fiction.',
      'Mar attributed this to fiction\'s requirement that readers model the mental states, emotions, and motivations of characters.',
      'In describing his findings, Mar stated: "Fiction is essentially a simulation of social experience — and like any simulation, it builds the skills it practices."',
      'A 2013 study by David Comer Kidd and Emanuele Castano found that reading literary fiction produced measurable short-term improvements in theory of mind.',
    ],
    noteTask: 'use a quotation from the notes to explain why reading fiction might improve social reasoning',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Raymond Mar\'s 2006 study found that fiction readers scored higher on empathy and social reasoning tests than those who primarily read non-fiction.',
      B: 'Mar attributed the link between fiction reading and social cognition to fiction\'s requirement that readers model characters\' mental states and motivations.',
      C: 'As Mar explained, fiction functions as a "simulation of social experience" — and like other simulations, it strengthens the abilities it requires its readers to exercise.',
      D: 'Kidd and Castano\'s 2013 study found that reading literary fiction produced short-term improvements in theory of mind, supporting Mar\'s earlier findings.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The goal is to use a quotation to explain the mechanism. C uses Mar\'s quotation directly and connects it to the explanatory claim — fiction is a simulation, and simulations build the skills they demand. A reports the finding without using the quotation or explaining the mechanism. B paraphrases Mar\'s reasoning without using the quotation — the goal specifically requires a quotation from the notes. D cites a second study that supports Mar\'s finding but neither uses the quotation nor explains the mechanism.',
  },

  {
    id: 'eoi_s_026', num: 26, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Global carbon dioxide emissions averaged approximately 4.7 metric tons per person per year in 2022.',
      'The United States emitted approximately 14.9 metric tons of CO₂ per person in 2022 — more than three times the global average.',
      'China, the world\'s largest total emitter, produced approximately 8.0 metric tons per person in 2022.',
      'The European Union averaged approximately 5.8 metric tons per person in 2022.',
      'Per-capita emissions in low-income countries averaged below 1 metric ton per person.',
    ],
    noteTask: 'use data from the notes to emphasize the contrast between US per-capita CO₂ emissions and those of other regions',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The United States emitted approximately 14.9 metric tons of CO₂ per person in 2022 — more than three times the global average of 4.7 metric tons and nearly double China\'s per-capita figure of 8.0 metric tons.',
      B: 'Per-capita carbon emissions vary widely across regions, reflecting differences in energy mix, industrial structure, and economic activity.',
      C: 'China is the world\'s largest total emitter of CO₂, though its per-capita figure of 8.0 metric tons is below that of the United States.',
      D: 'Global average per-capita CO₂ emissions were approximately 4.7 metric tons in 2022, with significant variation between high-income and low-income countries.',
    },
    answer: 'A', isSPR: false,
    explanation: 'To emphasize the contrast using quantitative data, the answer must name both sides with specific figures. A explicitly states the US figure (14.9 metric tons), the global average (4.7 metric tons), the multiple (more than three times), and adds a second comparison with China (nearly double). B makes a general statement without specific figures. C establishes one comparison (China vs. US) but omits the US vs. global average, which is the most striking contrast. D establishes the global baseline but does not state the US figure.',
  },

  {
    id: 'eoi_s_027', num: 27, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Trees release large quantities of water vapor through transpiration — water absorbed by roots evaporates from leaf surfaces.',
      'In dense forests, transpiration contributes significantly to local cloud formation and precipitation.',
      'Forests also intercept rainfall and release it slowly back into the atmosphere rather than allowing rapid surface runoff.',
      'When forests are cleared, both transpiration and interception are eliminated, reducing moisture available for cloud formation.',
      'Studies of the Amazon basin have found that large-scale deforestation in one area can reduce rainfall not just locally but hundreds of kilometers downwind.',
    ],
    noteTask: 'explain the causal chain by which deforestation leads to reduced regional rainfall',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Deforestation has been associated with reduced rainfall in several tropical regions, with the Amazon providing the most extensively documented example.',
      B: 'Trees transpire large quantities of water vapor that contribute to local cloud formation; when forests are cleared, this moisture source is removed, reducing cloud formation and regional precipitation — an effect that can extend hundreds of kilometers downwind.',
      C: 'Forests contribute to regional rainfall through transpiration and the slow release of intercepted rainfall back into the atmosphere.',
      D: 'Studies in the Amazon have found that large-scale deforestation reduces rainfall not just locally but hundreds of kilometers away.',
    },
    answer: 'B', isSPR: false,
    explanation: 'To explain the causal chain, the answer must trace the full process. B covers the entire chain: trees transpire water vapor → contributes to cloud formation → clearing removes moisture → cloud formation decreases → regional precipitation falls — plus the downwind effect. A states a correlation without explaining the mechanism. C describes forest functions without connecting them to the outcome of reduced rainfall. D states the Amazon finding without explaining the mechanism.',
  },

  {
    id: 'eoi_s_028', num: 28, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard', // [F]
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'Researchers at Stanford Medical Center published a 2018 study on cultural variation in post-surgical pain reporting.',
      'The study recruited 320 patients from four cultural backgrounds — American, Korean, Mexican, and Norwegian — who had undergone the same type of abdominal surgery.',
      'Each patient rated their pain on a standardized scale at regular intervals over 72 hours following surgery.',
      'The researchers found significant variation in pain reporting across groups despite comparable surgical procedures, anesthesia protocols, and post-operative care.',
      'The primary aim of the study was to determine whether cultural background independently influences how patients communicate pain to healthcare providers.',
    ],
    noteTask: 'present the primary aim of the study in a way that distinguishes it from the study\'s methodology',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The study recruited 320 patients from four cultural backgrounds who had undergone the same abdominal surgery and asked them to rate their pain at regular intervals over 72 hours.',
      B: 'Researchers at Stanford found significant variation in post-surgical pain reporting across patients from American, Korean, Mexican, and Norwegian backgrounds.',
      C: 'The study aimed to determine whether cultural background independently influences how patients report pain to healthcare providers — not simply to describe variation in pain levels, but to isolate culture as a specific explanatory variable.',
      D: 'The study standardized surgical procedure, anesthesia protocol, and post-operative care across all participants in order to eliminate confounding variables.',
    },
    answer: 'C', isSPR: false,
    explanation: 'The primary aim is what the study set out to answer, and the goal is to distinguish this from methodology. C states the aim (does cultural background independently influence pain reporting?) and explicitly distinguishes it from a simpler description of pain variation. A describes methodology — recruitment and data collection. B describes a finding — what the study discovered. D describes a methodological control. All three are accurate but none states the study\'s driving question.',
  },

  {
    id: 'eoi_s_029', num: 29, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The brown tree snake, introduced accidentally to Guam after World War II, caused the extinction of nine of the island\'s twelve native forest bird species.',
      'Invasive rats introduced to New Zealand preyed on the eggs and chicks of ground-nesting birds, driving dramatic population declines in species including the kakapo and kiwi.',
      'In Hawaii, introduced mosquitoes carrying avian malaria have driven several native honeycreeper species to extinction or near-extinction at lower elevations.',
      'The introduction of the Nile perch to Lake Victoria in the 1950s is associated with the extinction of an estimated 200 species of native cichlid fish.',
      'Island ecosystems, having evolved in geographic isolation, typically lack the predator-prey relationships and immune defenses that allow mainland species to coexist with introduced competitors and pathogens.',
    ],
    noteTask: 'make and support a generalization about why invasive species pose a particular threat to island and isolated ecosystems',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'Invasive species have caused significant ecological damage on islands, as demonstrated by the brown tree snake in Guam, rats in New Zealand, mosquitoes in Hawaii, and the Nile perch in Lake Victoria.',
      B: 'Islands are particularly vulnerable to invasive species because their native organisms evolved in isolation — without the predator defenses or pathogen resistance that would help them survive competition with introduced species — a pattern illustrated by extinctions across Guam, New Zealand, Hawaii, and Lake Victoria.',
      C: 'The brown tree snake, invasive rats, disease-carrying mosquitoes, and the Nile perch have all caused extinctions of native species in the ecosystems where they were introduced.',
      D: 'Geographic isolation produces ecosystems with high endemism — species found nowhere else on Earth — making invasive introductions particularly irreversible when they occur.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The goal requires an explicit generalization about why invasive species are especially harmful to island ecosystems, supported by evidence. B states the mechanism (evolved in isolation → no predator defenses or pathogen resistance) and supports it with multiple examples. A lists four examples but makes no generalization about why islands are particularly vulnerable. C lists the species and their impacts without a generalization. D makes a related generalization (endemism makes extinctions irreversible) but explains a consequence of invasions rather than why they are particularly threatening.',
  },

  {
    id: 'eoi_s_030', num: 30, type: 'eoi_synthesis', domain: 'eoi', difficulty: 'hard',
    passage: null, dualText: null, table: null, underline: null,
    notes: [
      'The Sistine Chapel ceiling was painted by Michelangelo between 1508 and 1512.',
      'By the twentieth century, centuries of candle smoke, grime, and earlier restoration attempts had darkened the frescoes significantly.',
      'A major restoration project led by conservators from the Vatican Museums began in 1980.',
      'The restoration took fourteen years to complete, finishing in 1994.',
      'The project revealed colors far more vivid than the muted tones visible for generations, prompting significant debate among art historians about Michelangelo\'s original intentions.',
    ],
    noteTask: 'indicate how long the restoration of the Sistine Chapel ceiling took and explain why the duration is significant',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: {
      A: 'The restoration of the Sistine Chapel ceiling was completed in 1994, fourteen years after it began in 1980.',
      B: 'Conservators from the Vatican Museums restored the Sistine Chapel ceiling over fourteen years (1980–1994) — a duration that reflected the extraordinary care required to clean centuries of accumulated grime from one of the world\'s most significant works of art without damaging the underlying frescoes.',
      C: 'The restoration removed centuries of candle smoke and darkening, revealing colors far more vivid than those visible for generations.',
      D: 'Michelangelo painted the Sistine Chapel ceiling between 1508 and 1512; it was not fully restored until 1994, nearly 500 years later.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The goal requires both the explicit duration and an explanation of why that duration is significant. B states the duration (fourteen years, 1980–1994) and frames its significance (the extraordinary care required to restore one of the world\'s most significant artworks). A states the duration but provides no significance framing. C describes the result of the restoration without mentioning the duration at all. D provides a wide timeline from creation to restoration but doesn\'t explain the significance of the fourteen-year restoration period specifically.',
  },

];


// ── Assembly ──────────────────────────────────────────────────────────────────

const DL_EOI = [...DL_EOI_TRANSITIONS, ...DL_EOI_SYNTHESIS];
