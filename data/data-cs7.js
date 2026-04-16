'use strict';

// data-cs7.js — Craft & Structure, 30 questions
// WiC ×5, Precise Word ×5, Main Purpose ×4, Structure ×3, Function ×5, Cross-Text ×8
// IDs: cs_c_211–cs_c_240  |  Difficulty: 10 easy / 10 medium / 10 hard

const DL_CS7 = [

  // ── WiC (5) ───────────────────────────────────────────────────────────────

  {
    id: 'cs_c_211', num: 211, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Louisa May Alcott\'s 1868 novel Little Women.\n\n"Christmas won\'t be Christmas without any presents," grumbled Jo, lying on the rug.\n"It\'s so dreadful to be poor!" sighed Meg, looking down at her old dress.\n"I don\'t think it\'s fair for some girls to have plenty of pretty things, and other girls nothing at all," added little Amy, with an injured sniff.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "injured" most nearly mean?',
    choices: { A: 'physically hurt or wounded', B: 'feeling wronged or aggrieved; offended', C: 'financially damaged', D: 'permanently harmed in reputation' },
    answer: 'B', isSPR: false,
    explanation: '"Injured sniff" — Amy\'s sniff is that of someone who feels wronged by an injustice (the unfair distribution of pretty things). B correctly identifies injured here as feeling wronged or aggrieved. A ("physically hurt") is the most common meaning but Amy is not physically injured. C ("financially damaged") applies to material harm, not the emotional register of a sniff. D ("reputation harm") has no support in the context.',
  },

  {
    id: 'cs_c_212', num: 212, type: 'cs_wic', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from W.E.B. Du Bois\'s 1903 essay collection The Souls of Black Folk.\n\nOne ever feels his two-ness — an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "dogged" most nearly mean?',
    choices: { A: 'resembling or relating to a dog', B: 'tenacious; stubbornly persistent', C: 'weary from prolonged effort', D: 'easily distracted or confused' },
    answer: 'B', isSPR: false,
    explanation: '"Dogged strength" — the strength that prevents the self from being torn apart is not ordinary but relentlessly tenacious. B correctly identifies dogged as tenacious or stubbornly persistent. A ("resembling a dog") is a literal reading that does not fit the context. C ("weary from effort") describes exhaustion, which is the opposite of the sustaining strength described. D ("easily distracted") is incompatible with the persistence required to hold two selves together.',
  },

  {
    id: 'cs_c_213', num: 213, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Kazuo Ishiguro\'s 1989 novel The Remains of the Day.\n\nI have scrutinized all the entries in my journal for that week — some twenty or so pages — and I can assure you that on no occasion did I display the sort of behaviour that might be considered, in any objective sense, unprofessional. And yet, and yet — the fact that I am still troubled by that week suggests that something, some residue of feeling, remains unaccounted for.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "residue" most nearly mean?',
    choices: { A: 'a chemical substance left after a reaction', B: 'a remaining trace of something; a remnant', C: 'a formal legal remainder of an estate', D: 'a physical sediment at the bottom of a container' },
    answer: 'B', isSPR: false,
    explanation: '"Some residue of feeling, remains unaccounted for" — Stevens acknowledges something left over, a trace of emotion that persists despite his careful self-review finding no professional fault. B correctly identifies residue as a remaining trace or remnant. A ("chemical substance") and D ("physical sediment") are literal scientific meanings inapplicable to feeling. C ("legal remainder") applies only to estate distribution contexts.',
  },

  {
    id: 'cs_c_214', num: 214, type: 'cs_wic', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Flannery O\'Connor\'s 1952 novel Wise Blood.\n\nHe had a head like a rock with a broken jaw, and a small city on the jaw, and a nose you could smell the sin in, and two nickel-colored eyes with no depth to them, so that they looked flat-out at you and didn\'t change when the light changed.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the phrase "flat-out" most nearly mean?',
    choices: { A: 'at maximum speed or effort', B: 'without depth or expression; blankly direct', C: 'completely and absolutely', D: 'stretched out horizontally' },
    answer: 'B', isSPR: false,
    explanation: '"Looked flat-out at you" — the eyes have "no depth to them" and "didn\'t change when the light changed," so flat-out describes a blank, expressionless, unvarying directness of gaze. B correctly captures this. A ("at maximum speed") is a common idiomatic meaning but applies to actions, not gaze. C ("completely and absolutely") is another common meaning but does not fit the visual description of a gaze. D ("stretched horizontally") is the literal spatial meaning, inapplicable to eyes.',
  },

  {
    id: 'cs_c_215', num: 215, type: 'cs_wic', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from T.S. Eliot\'s 1922 poem The Waste Land.\n\nApril is the cruellest month, breeding\nLilacs out of the dead land, mixing\nMemory and desire, stirring\nDull roots with spring rain.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'As used in the text, what does the word "breeding" most nearly mean?',
    choices: { A: 'raising animals for reproduction', B: 'bringing into being; generating', C: 'teaching good manners and social conduct', D: 'producing offspring through biological reproduction' },
    answer: 'B', isSPR: false,
    explanation: '"April is the cruellest month, breeding / Lilacs" — April produces, brings forth, generates lilacs from the dead land. B correctly identifies breeding here as bringing into being. A ("raising animals") requires an animal-husbandry context. C ("teaching good manners") is a social meaning of breeding entirely inapplicable to a season producing flowers. D ("producing biological offspring") is close but too narrowly biological — April is not reproducing sexually; it is generating life from the earth.',
  },


  // ── Precise Word (5) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_216', num: 216, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Researchers studying humpback whale songs have found that the same new song elements spread through entire ocean populations within months — individual males _______ a neighbor\'s new phrases, which then propagate outward through the population in a wave pattern, replacing older versions of the song.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'ignore', B: 'create', C: 'copy', D: 'suppress' },
    answer: 'C', isSPR: false,
    explanation: '"Copy" most precisely names the mechanism of cultural transmission described: individual males imitate their neighbors\' new phrases, which then spread. "Ignore" produces the opposite effect — no propagation. "Create" implies original invention, not imitation of a neighbor. "Suppress" would prevent propagation.',
  },

  {
    id: 'cs_c_217', num: 217, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Before the introduction of refrigeration, food preservation required _______ methods such as salting, smoking, fermenting, drying, and pickling — each of which works by creating conditions hostile to the growth of bacteria and other microorganisms that cause spoilage.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'ancient', B: 'traditional', C: 'mysterious', D: 'unreliable' },
    answer: 'B', isSPR: false,
    explanation: '"Traditional" most precisely captures what the listed methods share — they are practices handed down through history, prior to modern refrigeration. "Ancient" implies extreme historical distance but does not capture their status as ongoing practices. "Mysterious" implies incomprehensibility rather than historical provenance. "Unreliable" contradicts the passage, which explains the science of why these methods work.',
  },

  {
    id: 'cs_c_218', num: 218, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The architect\'s design is _______ in its restraint: every element has been reduced to its functional minimum, with no ornamentation, no unnecessary transitions, and no surface that does not serve a structural or spatial purpose.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'extravagant', B: 'rigorous', C: 'nostalgic', D: 'inconsistent' },
    answer: 'B', isSPR: false,
    explanation: '"Rigorous" most precisely describes the disciplined, systematic application of restraint — every element reduced, nothing unnecessary. "Extravagant" is the opposite of restraint. "Nostalgic" implies looking backward to prior styles. "Inconsistent" contradicts the systematic precision described.',
  },

  {
    id: 'cs_c_219', num: 219, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The discovery of the double helix structure of DNA in 1953 did not _______ the problem of how genetic information is transmitted from one generation to the next — but it suggested the mechanism: complementary base pairing meant that each strand could serve as a template for copying the other.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'create', B: 'solve', C: 'complicate', D: 'ignore' },
    answer: 'B', isSPR: false,
    explanation: '"Solve" most precisely names what the discovery did not yet do but pointed toward: the mechanism suggested by the structure was the path toward solving the transmission problem. "Create" implies the discovery introduced the problem — the passage says the discovery suggested the mechanism, implying the problem predated it. "Complicate" implies the discovery made things harder — the passage describes a clarifying suggestion. "Ignore" implies the discovery had no bearing on the problem.',
  },

  {
    id: 'cs_c_220', num: 220, type: 'cs_precise_word', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Legal scholars studying judicial interpretation have noted a tension between "textualism" — which holds that courts should interpret statutes according to their plain meaning — and "purposivism" — which holds that courts should consider the legislature\'s intent when the text is _______, applying the spirit rather than the letter of the law.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: { A: 'clear', B: 'ambiguous', C: 'detailed', D: 'comprehensive' },
    answer: 'B', isSPR: false,
    explanation: '"Ambiguous" most precisely names the condition under which purposivism becomes relevant: when the text\'s plain meaning is unclear or admits multiple interpretations, purposivists argue for consulting legislative intent. "Clear" would be the condition under which textualists and purposivists agree — no interpretive dispute arises. "Detailed" and "comprehensive" suggest more text rather than uncertain text.',
  },


  // ── Main Purpose (4) ──────────────────────────────────────────────────────

  {
    id: 'cs_c_221', num: 221, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Chief Seattle\'s 1854 speech to the U.S. government, as recorded and translated.\n\nYonder sky that has wept tears of compassion upon my people for centuries untold, and which to us appears changeless and eternal, may change. Today is fair. Tomorrow may be overcast with clouds. My words are like the stars that never change. Whatever Seattle says the great chief at Washington can rely upon with as much certainty as he can upon the return of the sun or the seasons.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To describe the weather patterns and seasonal cycles familiar to the Pacific Northwest people',
      B: 'To assert the unchanging reliability of Seattle\'s words by contrasting them with transient earthly phenomena',
      C: 'To warn the U.S. government that the natural world will turn against those who break their promises',
      D: 'To express Seattle\'s sorrow that his people\'s homeland will soon be taken from them',
    },
    answer: 'B', isSPR: false,
    explanation: 'Seattle uses transient phenomena — sky, weather, clouds — to contrast with the permanent reliability of his words, which he likens to stars and the return of the sun. B correctly identifies this as asserting the constancy of his word. A focuses on weather description — the weather is a rhetorical device, not the subject. C warns of natural retaliation — Seattle is asserting reliability, not threatening. D expresses sorrow about homeland loss — this passage is about the reliability of his speech, not grief.',
  },

  {
    id: 'cs_c_222', num: 222, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Materials scientists studying metamaterials — engineered structures with properties not found in naturally occurring substances — have designed surfaces that can bend light around an object, directing it so that the object casts no shadow and is effectively invisible to a viewer. Current cloaking devices work only for specific wavelengths, under controlled conditions, and at the microscopic scale. Scaling these effects to larger objects and broader wavelength ranges remains an unsolved engineering challenge.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that invisibility cloaking technology will never be achievable at human scale',
      B: 'To introduce metamaterial cloaking, describe what current devices can do, and specify the remaining engineering challenges',
      C: 'To compare metamaterials with naturally occurring light-bending phenomena such as mirages',
      D: 'To explain the military applications of invisibility cloaking technology',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly maps the three-part structure: introduce metamaterial cloaking (how it works), describe current capability (specific wavelengths, controlled conditions, microscale), and specify remaining challenge (scaling to larger objects and broader wavelengths). A predicts impossibility — the passage states it is an unsolved challenge, not an impossible one. C introduces a comparison with natural phenomena not present. D introduces military applications not mentioned.',
  },

  {
    id: 'cs_c_223', num: 223, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Alexis de Tocqueville\'s 1840 Democracy in America, translated from French.\n\nThe first thing that strikes the observation is an innumerable multitude of men, all equal and alike, incessantly endeavoring to procure the petty and paltry pleasures with which they glut their lives. Each of them, living apart, is as a stranger to the fate of all the rest — his children and his private friends constitute to him the whole of mankind.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of this passage?',
    choices: {
      A: 'To celebrate the freedom from political involvement that democratic equality makes possible',
      B: 'To offer a critical portrait of democratic individualism — an equality that produces isolation and absorption in trivial private pleasures',
      C: 'To argue that democracy is inferior to aristocracy because it eliminates social hierarchy',
      D: 'To describe the daily domestic habits of ordinary citizens in a democratic society',
    },
    answer: 'B', isSPR: false,
    explanation: 'Tocqueville uses critical language throughout: "petty and paltry pleasures," "glut their lives," "as a stranger to the fate of all the rest." This is not celebration but critique of democratic equality\'s tendency toward isolation and trivial self-absorption. B correctly identifies this as a critical portrait. A claims celebration — the tone is clearly critical. C argues aristocracy is superior — Tocqueville is diagnosing a democratic tendency, not comparing systems hierarchically. D describes domestic habits — it is making a normative argument about equality\'s social effects.',
  },

  {
    id: 'cs_c_224', num: 224, type: 'cs_main_purpose', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Anthropologist Anna Tsing has argued that capitalism does not homogenize the environments it touches but instead depends on and actively produces what she calls "patchiness" — a heterogeneous landscape of ruined, repurposed, and resurgent zones. Her fieldwork on the matsutake mushroom, which grows in the disturbed forests of Oregon and Japan and commands high prices in Japanese luxury markets, traces a supply chain that links Cambodian refugee foragers in Oregon, Japanese traders, and anxious middle-class Japanese consumers in a commodity chain that connects what Tsing calls "salvage capitalism" — value extracted from life not organized for capitalist ends.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best states the main purpose of the text?',
    choices: {
      A: 'To argue that the matsutake mushroom trade is an ethical model for sustainable foraging economies',
      B: 'To introduce Tsing\'s concept of patchiness and illustrate it with the matsutake supply chain as an example of salvage capitalism extracting value from non-capitalist life',
      C: 'To compare the matsutake mushroom economies of Oregon and Japan to show how global trade homogenizes local cultures',
      D: 'To celebrate the diversity of the mushroom foragers who participate in the Oregon-Japan commodity chain',
    },
    answer: 'B', isSPR: false,
    explanation: 'B correctly identifies the two-layer structure: introduce the theoretical concept (patchiness, salvage capitalism) and concretize it with the matsutake supply chain example. A advocates for the matsutake trade as ethical — the passage is analytical, not prescriptive. C argues homogenization — Tsing\'s argument is explicitly the opposite (capitalism produces patchiness). D celebrates foragers — the passage is theoretical and descriptive.',
  },


  // ── Structure (3) ─────────────────────────────────────────────────────────

  {
    id: 'cs_c_225', num: 225, type: 'cs_structure', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Light from the sun travels approximately 150 million kilometers to reach Earth, a journey that takes about eight minutes. Once it enters the atmosphere, it scatters in all directions when it strikes gas molecules — a process called Rayleigh scattering. Shorter wavelengths of light (blue and violet) scatter more than longer wavelengths (red and orange), which is why the sky appears blue during the day. At sunrise and sunset, sunlight travels through a much longer path of atmosphere, scattering out the blue light and leaving the longer red wavelengths to dominate.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It describes how sunlight reaches Earth, explains the scattering mechanism, and applies it to explain two observed phenomena.',
      B: 'It argues that blue light is more scientifically significant than red light in atmospheric physics.',
      C: 'It contrasts the properties of sunlight with those of artificial light sources.',
      D: 'It traces the discovery of Rayleigh scattering from early observations to laboratory confirmation.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the structure: how sunlight reaches Earth (distance, travel time), mechanism (Rayleigh scattering), and application to two phenomena (blue daytime sky, red sunrises/sunsets). B advocates for blue light — no such argument is made. C contrasts with artificial light — no artificial light is mentioned. D traces a discovery history — no history of Rayleigh scattering\'s discovery is described.',
  },

  {
    id: 'cs_c_226', num: 226, type: 'cs_structure', domain: 'craft_structure', difficulty: 'medium',
    passage: 'The following text is from Franz Kafka\'s 1915 story "The Metamorphosis," translated from German.\n\nAs Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided by stiff arched segments on top of which the bed quilt was ready to slip off entirely. His many legs, which were pitifully thin compared to the rest of his bulk, flickered helplessly before his eyes.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It states the transformation matter-of-factly and then describes Gregor\'s new body through precise, dispassionate physical inventory.',
      B: 'It builds dramatic tension through Gregor\'s gradual realization that he has been transformed.',
      C: 'It presents Gregor\'s psychological horror at his transformation through a series of emotional outbursts.',
      D: 'It introduces the transformation as a dream before revealing it is real.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Kafka states the transformation in the opening clause without fanfare, then catalogs the new body with clinical precision: armor-plated back, dome-like belly, stiff arched segments, many thin legs. A correctly identifies this as matter-of-fact statement followed by dispassionate physical inventory. B says tension builds gradually — the transformation is stated immediately, not revealed slowly. C says psychological horror is expressed — the tone is notably flat and precise, not horror-struck. D says it\'s initially presented as a dream — the "uneasy dreams" are prior; the transformation is stated as fact upon waking.',
  },

  {
    id: 'cs_c_227', num: 227, type: 'cs_structure', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Philosopher Martha Nussbaum argued that the "capability approach" to human welfare — originally developed by Amartya Sen — requires a list of central human capabilities that any decent society must secure for all citizens. These include life, health, bodily integrity, use of the senses and imagination, emotional development, practical reason, affiliation with others, connection with other species, play, and control over one\'s political and material environment. Nussbaum distinguished capabilities from functionings: a society should ensure that people have the capability to live well in each dimension, but should not compel them to exercise that capability. The distinction preserves individual freedom while setting a floor of guaranteed opportunity.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes the overall structure of the text?',
    choices: {
      A: 'It introduces Nussbaum\'s modification of Sen\'s capability approach, lists its central capabilities, and explains a key distinction within the framework that preserves both welfare and freedom.',
      B: 'It argues that Nussbaum\'s capability list is more comprehensive than Sen\'s original approach and therefore preferable.',
      C: 'It traces the intellectual history of the capability approach from Sen\'s initial formulation through Nussbaum\'s critiques.',
      D: 'It presents the capability approach and then challenges it by identifying the tension between welfare guarantees and individual freedom.',
    },
    answer: 'A', isSPR: false,
    explanation: 'A correctly maps the structure: introduce Nussbaum\'s development of Sen\'s approach with a definite list, enumerate the capabilities, explain the capability/functioning distinction, and show how it resolves the freedom/welfare tension. B advocates for Nussbaum over Sen — the passage describes Nussbaum\'s contribution without claiming superiority. C traces intellectual history — the passage presents the framework\'s content, not a developmental narrative. D presents a challenge — the passage resolves the tension through the capability/functioning distinction rather than leaving it unresolved.',
  },


  // ── Function of Underlined (5) ────────────────────────────────────────────

  {
    id: 'cs_c_228', num: 228, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The electric eel is not actually an eel but a knifefish — a member of a completely different order of fish that independently evolved the electric organ. The electric organ occupies approximately 80% of the electric eel\'s body and can generate discharges of up to 860 volts — enough to stun a horse. Recent research has found that the electric eel uses low-voltage pulses not only for navigation and communication but also to cause involuntary muscle contractions in prey, effectively remote-controlling the prey\'s body before striking.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Recent research has found that the electric eel uses low-voltage pulses not only for navigation and communication but also to cause involuntary muscle contractions in prey, effectively remote-controlling the prey\'s body before striking.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It explains why the electric eel is classified as a knifefish rather than a true eel.',
      B: 'It adds a recently discovered hunting capability beyond the high-voltage discharge described earlier.',
      C: 'It contradicts the prior claim that the electric organ generates up to 860 volts.',
      D: 'It introduces the topic of animal electricity as a broader phenomenon across species.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences describe the electric eel\'s classification and high-voltage capability. The underlined sentence introduces a separate, recently discovered use of low-voltage pulses — involuntary prey muscle control. B correctly identifies this as an additional capability layered onto what was already described. A says it explains classification — the classification was explained in the first sentence. C says it contradicts the 860-volt claim — it adds a low-voltage use alongside the high-voltage one. D introduces animal electricity broadly — the passage remains focused on the electric eel.',
  },

  {
    id: 'cs_c_229', num: 229, type: 'cs_function', domain: 'craft_structure', difficulty: 'easy',
    passage: 'The following text is from Herman Melville\'s 1853 short story "Bartleby, the Scrivener."\n\n"I would prefer not to," said Bartleby.\nMy first emotion was one of utter bewilderment; my second was one of irritation. For a moment I was seized with a sudden anger; but when I perceived this anger in myself, I smothered it with an exercise of my benevolent philosophy.\n"You are decided, then, not to comply with my request?" I calmly inquired.\n"I would prefer not to."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'For a moment I was seized with a sudden anger; but when I perceived this anger in myself, I smothered it with an exercise of my benevolent philosophy.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It shows the narrator suppressing his genuine emotional reaction through a self-flattering act of will, before calmly returning to the request.',
      B: 'It suggests that Bartleby\'s refusal has permanently damaged the narrator\'s trust in him.',
      C: 'It explains Bartleby\'s motivation for refusing to comply with the narrator\'s requests.',
      D: 'It introduces a philosophical argument that the narrator will develop in the following paragraphs.',
    },
    answer: 'A', isSPR: false,
    explanation: 'The narrator\'s sequence — bewilderment, irritation, anger, self-congratulatory suppression ("benevolent philosophy"), calm inquiry — reveals someone managing his reactions. B says trust is permanently damaged — the narrator immediately returns to the request calmly, not in defeat. C explains Bartleby\'s motivation — the sentence is about the narrator, not Bartleby. D introduces a philosophical argument — "benevolent philosophy" is a brief self-description, not the start of a philosophical discourse.',
  },

  {
    id: 'cs_c_230', num: 230, type: 'cs_function', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Historians studying the spread of the Black Death through Europe in the mid-fourteenth century have estimated that the plague killed between 30 and 60 percent of Europe\'s total population within a decade. Some regions suffered losses at the higher end of this range. The demographic collapse was so profound that European wage labor markets were permanently transformed: with fewer workers available, survivors could command higher wages and more favorable working conditions than serfs had previously been able to demand.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'The demographic collapse was so profound that European wage labor markets were permanently transformed: with fewer workers available, survivors could command higher wages and more favorable working conditions than serfs had previously been able to demand.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It provides additional statistical detail about the regional variation in plague mortality.',
      B: 'It introduces a long-term economic consequence that followed from the scale of population loss described earlier.',
      C: 'It challenges the historical consensus about the causes of the Black Death.',
      D: 'It describes the immediate medical response to the demographic collapse.',
    },
    answer: 'B', isSPR: false,
    explanation: 'The prior sentences establish the scale of mortality. The underlined sentence draws out a long-term economic consequence: the labor shortage permanently shifted the balance of power toward surviving workers. B correctly identifies this as a downstream economic consequence of the mortality scale. A says it provides statistical detail — it provides an economic consequence, not statistics. C challenges historical consensus — it extends the analysis, not challenges it. D describes medical response — it describes labor market transformation.',
  },

  {
    id: 'cs_c_231', num: 231, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'The following text is from Chinua Achebe\'s 1988 essay "An Image of Africa: Racism in Conrad\'s Heart of Darkness."\n\nAfrica is to Europe as the picture is to Dorian Gray — a carrier of the disease of its[Europe\'s] own making, endowed with obscene vitality, but itself deeply sinful and detestable, a metaphysical battlefield devoid of all recognizable humanity, into which the wandering European enters at his peril.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'Africa is to Europe as the picture is to Dorian Gray — a carrier of the disease of its own making, endowed with obscene vitality, but itself deeply sinful and detestable, a metaphysical battlefield devoid of all recognizable humanity, into which the wandering European enters at his peril.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It summarizes the actual history of European colonialism in Africa.',
      B: 'It uses a literary allusion to articulate the dehumanizing ideological function Africa serves in the European literary imagination Achebe is critiquing.',
      C: 'It presents Achebe\'s own view of the relationship between European and African civilizations.',
      D: 'It describes the biographical background that shaped Conrad\'s portrayal of Africa.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Achebe uses the Dorian Gray analogy to characterize — and implicitly critique — the role Africa plays in the European imagination: a screen onto which Europe projects its own corruption while maintaining its self-image. The rhetorical strategy is to name this function through an analogy that makes its ideological nature visible. B correctly identifies this as a literary-analogy critique of ideological function. A says it summarizes colonial history — it characterizes an ideological function, not historical events. C says it presents Achebe\'s own view — it characterizes the European literary imagination\'s view, which Achebe is critiquing. D describes Conrad\'s biography — no biographical information is present.',
  },

  {
    id: 'cs_c_232', num: 232, type: 'cs_function', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Evolutionary biologists studying sexual selection have long noted that in many species, males display costly ornamental traits — the peacock\'s tail, the elk\'s antlers — that appear to reduce individual survival fitness while increasing reproductive success. The "handicap principle," proposed by Amotz Zahavi, suggests that these traits function precisely because of their cost: only a genuinely high-quality male can afford to carry such a burden and survive. The ornament is thus an honest signal of fitness precisely because it cannot be easily faked by low-quality males.',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    underline: 'The ornament is thus an honest signal of fitness precisely because it cannot be easily faked by low-quality males.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: {
      A: 'It introduces a counterargument to the handicap principle.',
      B: 'It draws the logical conclusion from the handicap principle — that the costliness of ornaments is the very mechanism that makes them reliable signals.',
      C: 'It provides an example of a species in which females successfully detect dishonest male signaling.',
      D: 'It summarizes the historical background of sexual selection theory before Darwin.',
    },
    answer: 'B', isSPR: false,
    explanation: '"Thus" signals that this is a conclusion drawn from the prior reasoning. The handicap principle explains why costly ornaments are carried by only high-quality males. The underlined sentence draws out the implication: costliness = unfakeable = honest signal. B correctly identifies this as the logical conclusion. A says it introduces a counterargument — "thus" signals agreement, not opposition. C says it provides a species example — no species is named. D summarizes pre-Darwin history — the sentence is a logical conclusion, not a historical summary.',
  },


  // ── Cross-Text (8) ────────────────────────────────────────────────────────

  {
    id: 'cs_c_233', num: 233, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nIn 1996, biologists Ian Wilmut and Keith Campbell successfully cloned Dolly the sheep from an adult somatic cell, demonstrating that differentiated adult cells could be reprogrammed to an embryonic state. Dolly\'s creation proved that every cell in an adult mammal retains the full genetic blueprint for the entire organism.',
    dualText: 'Text 2\n\nDolly the sheep aged faster than normal sheep and suffered from arthritis and lung disease before being euthanized at age six — roughly half the expected lifespan. Some scientists attributed this to the fact that Dolly was cloned from a six-year-old sheep, meaning her chromosomal telomeres — which shorten with each cell division — may have been shorter than those of a normally conceived lamb of the same age.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how does the information in Text 2 relate to the claims in Text 1?',
    choices: {
      A: 'It confirms that cloning adult cells is biologically impossible',
      B: 'It introduces a complication — premature aging — that suggests reprogramming adult cells may carry biological costs not addressed in Text 1\'s account of the achievement',
      C: 'It contradicts Text 1 by showing that Dolly was not actually cloned from an adult cell',
      D: 'It confirms Text 1 by showing that Dolly was genetically identical to a normally conceived sheep',
    },
    answer: 'B', isSPR: false,
    explanation: 'Text 1 presents cloning as a proof of concept for adult cell reprogramming. Text 2 introduces the complication that Dolly aged prematurely — possibly due to inherited telomere shortening from the adult source cell. B correctly identifies this as a complication to Text 1\'s achievement narrative. A says it confirms cloning is impossible — Dolly\'s existence proves it is possible. C says it contradicts Text 1 by denying adult-cell origin — Text 2 confirms the adult-cell origin (it\'s the reason for the telomere problem). D says it confirms Text 1 — it complicates it.',
  },

  {
    id: 'cs_c_234', num: 234, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'easy',
    passage: 'Text 1\n\nThe following text is from Ralph Waldo Emerson\'s 1841 essay "The Over-Soul."\n\nWe live in succession, in division, in parts, in particles. Meantime within man is the soul of the whole; the wise silence; the universal beauty, to which every part and particle is equally related; the eternal ONE.',
    dualText: 'Text 2\n\nThe following text is from William James\'s 1902 work The Varieties of Religious Experience.\n\nOur normal waking consciousness, rational consciousness as we call it, is but one special type of consciousness, whilst all about it, parted from it by the filmiest of screens, there lie potential forms of consciousness entirely different. No account of the universe in its totality can be final which leaves these other forms quite out.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a similarity between the ideas in Text 1 and Text 2?',
    choices: {
      A: 'Both assert that ordinary human experience conceals access to a deeper or larger reality.',
      B: 'Both argue that science is the best method for accessing deeper forms of consciousness.',
      C: 'Both identify the soul as the source of all individual moral behavior.',
      D: 'Both claim that the deeper reality they describe can only be accessed through religious practice.',
    },
    answer: 'A', isSPR: false,
    explanation: 'Emerson says ordinary life (succession, division, particles) conceals the soul of the whole, the eternal ONE. James says normal waking consciousness conceals other forms of consciousness separated by a thin screen. Both posit that ordinary experience masks a deeper or larger reality. A correctly captures this. B advocates science — neither text mentions science. C identifies the soul as source of moral behavior — Emerson\'s soul is cosmic; James discusses consciousness, not morality. D requires religious practice — neither text specifies how access occurs.',
  },

  {
    id: 'cs_c_235', num: 235, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nPsychologist Martin Seligman\'s "positive psychology" movement reoriented clinical psychology from its traditional focus on pathology and dysfunction toward the study of what makes life worth living — strengths, virtues, well-being, and flourishing. Seligman argued that psychology had neglected the positive dimensions of human experience and that building on strengths is as scientifically important as treating weaknesses.',
    dualText: 'Text 2\n\nCritical psychologist Barbara Held has argued that positive psychology\'s insistence on positive thinking can itself become a source of distress for people who are unable to think positively in the face of genuine adversity. Held called this the "tyranny of the positive attitude": the cultural demand to stay positive creates shame and inadequacy in people whose circumstances resist easy optimism — adding a psychological burden on top of existing suffering.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Held most likely respond to Seligman\'s argument?',
    choices: {
      A: 'By accepting that psychology had neglected positive dimensions but arguing that the corrective has gone too far, creating new harm',
      B: 'By arguing that traditional pathology-focused psychology is always more effective than positive psychology',
      C: 'By denying that strengths and virtues are appropriate subjects for scientific study',
      D: 'By agreeing with Seligman\'s framework and extending it to include cultural demands for positive thinking',
    },
    answer: 'A', isSPR: false,
    explanation: 'Held identifies a specific harm produced by positive psychology\'s insistence: people who cannot think positively feel ashamed. This is not a wholesale rejection of the positive dimension but a critique of what happens when positivity becomes a demand. A correctly captures this: accepting the corrective impulse while arguing the implementation creates new harm. B claims traditional psychology is always better — Held\'s critique is specific, not a blanket endorsement of pathology-focus. C denies strengths are appropriate subjects — Held\'s critique is about mandatory positivity, not the legitimacy of studying strengths. D says Held agrees and extends — Held is critiquing, not extending.',
  },

  {
    id: 'cs_c_236', num: 236, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'medium',
    passage: 'Text 1\n\nThe following text is from Edgar Allan Poe\'s 1844 short story "The Purloined Letter."\n\n"[The Prefect] is too cunning to be profound. In his wisdom is no stamen. It is all head and no body, like the pictures of the Goddess Laverna — or, at best, all head and shoulders, like a codfish."',
    dualText: 'Text 2\n\nThe following text is from Arthur Conan Doyle\'s 1892 story "A Scandal in Bohemia."\n\n"You see, but you do not observe," [Holmes] said. "The distinction is clear. For example, you have frequently seen the steps which lead up from the hall to this room."\n"Frequently."\n"How often?"\n"Well, some hundreds of times."\n"Then how many are there?"\n"How many? I don\'t know."\n"Quite so! You have not observed. And yet you have seen."',
    dualText: null, notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a shared idea about intelligence in Text 1 and Text 2?',
    choices: {
      A: 'Both suggest that true intelligence requires both analytical precision and intuitive feeling.',
      B: 'Both contrast a superficial or incomplete form of cognition with a deeper mode of engagement.',
      C: 'Both argue that police detectives are fundamentally inferior to private investigators.',
      D: 'Both suggest that clever people are inevitably more susceptible to being deceived.',
    },
    answer: 'B', isSPR: false,
    explanation: 'Poe\'s Dupin contrasts the Prefect\'s cunning (all head, no stamen) with deeper, profound intelligence. Holmes contrasts seeing (passive, surface perception) with observing (active, meaningful engagement). Both distinguish a surface-level cognitive mode from a deeper one. B correctly identifies this shared contrast. A says both require analytical precision and intuition — both distinguish modes of cognition, not combine them. C says both argue police are inferior to private investigators — both passages do feature this implication but the shared idea is about cognition modes, not institutional hierarchy. D says clever people are more susceptible to deception — neither passage makes this claim.',
  },

  {
    id: 'cs_c_237', num: 237, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nEconomist Daron Acemoglu and colleagues have argued that the adoption of artificial intelligence and automation technologies creates a "task displacement" problem: when machines replace workers in a given set of tasks, the workers are not necessarily absorbed into new tasks at comparable pay. This happens most readily when new tasks created by technology are concentrated in a small number of high-skill occupations, leaving a larger group of displaced workers with diminished prospects.',
    dualText: 'Text 2\n\nEconomist David Autor argues that the concern about AI displacing all jobs is historically overstated: technological change has always eliminated some tasks while creating new ones, and workers have historically adapted. The current wave of AI differs from prior automation in targeting cognitive and communicative tasks rather than just routine physical ones, but the underlying dynamic — new tasks emerging to complement new technologies — should hold, provided that investment in education and worker transition support keeps pace with displacement.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how do Acemoglu and Autor differ in their assessments of AI\'s labor market effects?',
    choices: {
      A: 'Acemoglu argues automation eliminates all jobs; Autor argues it eliminates no jobs',
      B: 'Acemoglu focuses on the risk that new tasks will be insufficient or too skill-concentrated to absorb displaced workers; Autor is more optimistic that the historical pattern of new task creation will hold, conditional on policy support',
      C: 'Acemoglu focuses on physical task displacement; Autor focuses on cognitive task displacement',
      D: 'Acemoglu argues AI will benefit low-skill workers; Autor argues it will benefit high-skill workers',
    },
    answer: 'B', isSPR: false,
    explanation: 'Acemoglu emphasizes the structural risk that new tasks are too skill-concentrated to absorb displaced workers at comparable pay. Autor is cautiously optimistic that the historical new-task-creation pattern will hold — conditioned on education and transition policy. B correctly captures this asymmetry. A says Acemoglu predicts all-jobs elimination — he argues about concentration and displaced workers, not total elimination. C reverses the task types — Acemoglu discusses general task displacement; Autor specifically notes AI targets cognitive tasks (the opposite of physical). D inverts both positions — Acemoglu sees risk for lower-skill displaced workers; neither argues AI benefits lower-skill workers.',
  },

  {
    id: 'cs_c_238', num: 238, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nThe following text is from Walt Whitman\'s 1865 poem "O Captain! My Captain!"\n\nO Captain! my Captain! our fearful trip is done,\nThe ship has weather\'d every rack, the prize we sought is won,\nThe port is near, the bells I hear, the people all exulting,\nWhile follow eyes the steady keel, the vessel grim and daring;\n  But O heart! heart! heart!\n    O the bleeding drops of red,\n      Where on the deck my Captain lies,\n        Fallen cold and dead.',
    dualText: 'Text 2\n\nThe following text is from Walt Whitman\'s 1865-1866 poem "When Lilacs Last in the Dooryard Bloom\'d."\n\nWhen lilacs last in the dooryard bloom\'d,\nAnd the great star early droop\'d in the western sky in the night,\nI mourn\'d, and yet shall mourn with ever-returning spring.\n\nEver-returning spring, trinity sure to me you bring,\nLilac blooming perennial and drooping star in the west,\nAnd thought of him I love.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Which choice best describes a difference in how grief is expressed between Text 1 and Text 2?',
    choices: {
      A: 'Text 1 expresses grief through dramatic, public mourning amid celebration; Text 2 expresses grief through quiet, recurring personal mourning anchored in natural cycles.',
      B: 'Text 1 denies the death of the Captain; Text 2 accepts it completely.',
      C: 'Text 1 focuses on natural imagery; Text 2 focuses on political imagery.',
      D: 'Both poems express grief identically, differing only in their historical context.',
    },
    answer: 'A', isSPR: false,
    explanation: 'In Text 1, grief erupts against a backdrop of public celebration — the ship has arrived, bells ring, people exult, but the captain is dead on the deck. The emotional register is dramatic and public. In Text 2, grief is quiet and cyclical — returning each spring with the lilacs, deeply personal. A correctly captures this distinction. B says Text 1 denies the death — the captain is described as "fallen cold and dead." C says Text 1 focuses on natural imagery — Text 1 uses nautical imagery; Text 2 uses natural imagery. D says both express grief identically — the tones and contexts are clearly different.',
  },

  {
    id: 'cs_c_239', num: 239, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nPhilosopher Christine Korsgaard argues in Self-Constitution (2009) that agency and identity are not given to us by nature but constituted through our own actions. A person becomes a unified self by identifying with some of their impulses and acting on principles — the act of choosing what to do, what to care about, and who to be is the act of creating oneself. The self that deliberates and chooses is not prior to choice but produced by it.',
    dualText: 'Text 2\n\nPhilosopher Galen Strawson challenges what he calls the "narrative self" view — the idea that identity is constituted through ongoing self-authorship over time. Strawson argues that he, at least, experiences himself as a purely episodic self: what he is now is real and complete, not a chapter in an ongoing story. The narrative view, he suggests, may be culturally assumed rather than psychologically universal — a particular way of experiencing selfhood, not the only one.',
    notes: null, noteTask: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Strawson most likely respond to Korsgaard\'s argument?',
    choices: {
      A: 'By accepting that identity is constituted through choice but arguing that this process occurs in episodic moments rather than through continuous narrative',
      B: 'By challenging the premise that the self must be unified across time and suggesting that Korsgaard\'s self-constituting agent may reflect one particular mode of selfhood rather than a universal one',
      C: 'By agreeing that self-constitution through action is the foundation of moral agency',
      D: 'By arguing that the self is entirely fixed at birth by genetic and environmental factors',
    },
    answer: 'B', isSPR: false,
    explanation: 'Strawson\'s challenge to narrative self-views is that the ongoing temporal unity they assume may not be universal — he experiences himself as episodic and complete in the present. Applied to Korsgaard: her self-constituting agent who unifies through ongoing choice may reflect a particular (narrative, temporally extended) mode of selfhood, not a universal one. B correctly captures this challenge. A accepts temporal constitution but makes it episodic — Strawson\'s point is that episodic selves may not be constituted through ongoing action at all. C agrees with Korsgaard — Strawson is challenging, not affirming. D proposes genetic/environmental fixity — Strawson\'s challenge is experiential and philosophical, not biological.',
  },

  {
    id: 'cs_c_240', num: 240, type: 'cs_cross_text', domain: 'craft_structure', difficulty: 'hard',
    passage: 'Text 1\n\nEnvironmental historian William Cronon argued in "The Trouble with Wilderness" (1995) that "wilderness" as a concept is a cultural construction — a projection of urban anxieties and romantic ideals onto landscapes that were never empty of human presence. The idea of pristine wilderness, Cronon contended, has done real harm by encouraging the notion that nature and human culture are irreconcilably opposed, making it harder to think clearly about the actual, inhabited, working landscapes where most environmental challenges occur.',
    dualText: 'Text 2\n\nEcologist Michael Soulé challenged Cronon\'s constructivist argument by arguing that the biological reality of wilderness — the irreplaceable role of large, unfragmented habitats in sustaining apex predators, ecosystem processes, and biodiversity — cannot be dismissed as mere cultural projection. Even if "wilderness" as a social concept has been misused, the concrete fact of habitat loss and species extinction does not become less real because the philosophical foundations of nature protection are contestable.',
    notes: null, noteTask: null, table: null, underline: null,
    question: 'Based on the texts, how would Soulé most likely respond to Cronon\'s argument?',
    choices: {
      A: 'By agreeing that wilderness is a cultural construction and proposing new terminology to replace it',
      B: 'By accepting that the cultural concept of wilderness has limitations while insisting that biological realities of habitat and biodiversity are not reducible to cultural construction',
      C: 'By arguing that urban populations have no right to make claims about wilderness they have never experienced',
      D: 'By supporting Cronon\'s view that inhabited working landscapes are more important conservation priorities than wilderness areas',
    },
    answer: 'B', isSPR: false,
    explanation: 'Soulé concedes that "wilderness" as a social concept may have been misused, but insists that habitat loss, species extinction, and ecosystem processes are biological realities that persist regardless of whether the philosophical foundations of wilderness protection are contestable. B correctly captures this: accept limitations of the concept, but defend the biological reality behind it. A agrees it\'s a construction and proposes new terminology — Soulé defends the reality, not the terminology. C invokes who has the right to make claims — no such argument appears. D supports Cronon\'s inhabited-landscape priority — Soulé is defending wilderness protection, not conceding priority to working landscapes.',
  },

];
