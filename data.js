/* =========================================================
   DATA.JS — Sistema nervioso, contracción muscular y sentidos
   Fuentes: apuntes del cuaderno, PPT "6 Sistema Nervioso",
   PPT "Órganos de los sentidos" y 2 videos de contracción muscular.
   ========================================================= */

// Ayudantes para escribir preguntas más corto
// mc(pregunta, respuesta correcta, [incorrectas], explicación)
const mc = (q, c, wr, w = "") => ({ t: "mc", q, o: [c, ...wr], a: 0, w });
// ord(pregunta, [pasos en el orden correcto], explicación)
const ord = (q, items, w = "") => ({ t: "order", q, items, w });

const TOPICS = [
  /* ---------------------------------------------------- 1 */
  {
    id: "general",
    icon: "🧠",
    title: "Sistema nervioso: generalidades",
    intro: "Recibe información, la procesa y manda una respuesta. Controla todo tu cuerpo.",
    blocks: [
      {
        h: "¿Qué hace?",
        items: [
          "**Función:** recibir información, procesarla y mandar una respuesta.",
          "Controla todo el cuerpo.",
          "Se divide en **SNC** y **SNP**."
        ]
      },
      {
        h: "Función de cada parte",
        items: [
          "**SNC:** piensa, decide y da órdenes.",
          "**Cerebro:** pensar, memoria, emociones, lenguaje y movimientos voluntarios. Aquí está la conciencia.",
          "**Cerebelo:** equilibrio, coordinación y postura.",
          "**Tronco encefálico:** funciones vitales automáticas (respirar, latidos del corazón).",
          "**Médula espinal:** autopista de información entre cerebro y cuerpo; hace reflejos rápidos sin esperar al cerebro.",
          "**SNP:** los “cables” que conectan el SNC con todo lo demás."
        ]
      },
      {
        h: "Detalle de la presentación",
        items: [
          "SNC = encéfalo + médula espinal.",
          "SNP = nervios craneales, nervios espinales, ganglios y plexos nerviosos.",
          "Un cambio de temperatura sería recibido e interpretado por el **hipotálamo**, que inicia la acción correspondiente."
        ]
      }
    ],
    tables: [
      {
        title: "Árbol del sistema nervioso",
        head: ["Nivel 1", "Nivel 2", "Nivel 3", "Función"],
        rows: [
          ["SNC", "Encéfalo", "Cerebro, cerebelo, tronco", "Piensa, decide y da órdenes"],
          ["SNC", "Médula espinal", "—", "Autopista de información y reflejos"],
          ["SNP", "Somático", "Nervios raquídeos y pares craneales", "Voluntario: movimiento y sensaciones"],
          ["SNP", "Autónomo", "Simpático y parasimpático", "Involuntario: trabaja solo"]
        ]
      }
    ],
    quiz: [
      mc("¿Cuál es la función general del sistema nervioso?", "Recibir información, procesarla y mandar una respuesta", ["Producir glóbulos rojos", "Digerir los alimentos", "Transportar oxígeno a las células"]),
      mc("¿Qué parte “piensa, decide y da órdenes”?", "Sistema nervioso central", ["Sistema nervioso periférico", "Sistema nervioso somático", "Ganglios"]),
      mc("Son los “cables” que conectan el SNC con todo lo demás:", "Sistema nervioso periférico", ["Sistema nervioso central", "Cerebelo", "Meninges"]),
      mc("¿Qué estructura se encarga de equilibrio, coordinación y postura?", "Cerebelo", ["Cerebro", "Tronco encefálico", "Médula espinal"]),
      mc("Funciones vitales automáticas como respirar y los latidos dependen del:", "Tronco encefálico", ["Cerebelo", "Lóbulo frontal", "Plexo braquial"]),
      mc("¿Qué estructura es la “autopista de información” y hace reflejos rápidos sin esperar al cerebro?", "Médula espinal", ["Cerebro", "Hipotálamo", "Bulbo olfatorio"]),
      mc("¿Cuál NO forma parte del sistema nervioso periférico?", "Médula espinal", ["Nervios craneales", "Ganglios", "Plexos nerviosos"]),
      mc("¿Qué estructura recibe e interpreta un cambio de temperatura?", "Hipotálamo", ["Cerebelo", "Médula espinal", "Bulbo raquídeo"])
    ]
  },

  /* ---------------------------------------------------- 2 */
  {
    id: "snc",
    icon: "🧩",
    title: "SNC: encéfalo y médula espinal",
    intro: "Cerebro anterior, medio y posterior, más la médula espinal.",
    blocks: [
      {
        h: "Cerebro",
        items: [
          "Es la estructura **más grande** (aprox. 85%).",
          "Dividido en hemisferio derecho e izquierdo.",
          "Surcos y circunvoluciones **aumentan el área de la corteza**.",
          "La corteza es de **materia gris** y se encarga del procesamiento complejo."
        ]
      },
      {
        h: "Cerebro anterior (prosencéfalo)",
        items: [
          "**Telencéfalo:** corteza cerebral (lóbulos frontal, parietal, temporal y occipital), ganglios basales, sistema límbico (amígdala, hipocampo, giro cingulado). Funciones: pensamiento, memoria, emociones, lenguaje, movimientos voluntarios, percepción sensorial.",
          "**Diencéfalo:** tálamo, hipotálamo, epitálamo (glándula pineal). Funciones: relé sensorial, regulación hormonal, homeostasis, ritmos circadianos, control de funciones autónomas."
        ]
      },
      {
        h: "Cerebro medio (mesencéfalo)",
        items: [
          "Procesamiento visual y auditivo reflejo.",
          "Control motor básico, postura y alerta.",
          "Estructuras: pedúnculos cerebrales, lámina cuadrigémina, acueducto del mesencéfalo (de Silvio)."
        ]
      },
      {
        h: "Cerebro posterior (rombencéfalo)",
        items: [
          "**Metencéfalo:** protuberancia (puente de Varolio) y cerebelo. Coordinación motora fina, equilibrio, control postural, modulación de la respiración.",
          "**Mielencéfalo:** bulbo raquídeo. Regula respiración, ritmo cardíaco, presión arterial y reflejos básicos (tos, vómito, deglución)."
        ]
      },
      {
        h: "Lóbulos y estructuras clave (esquema)",
        items: [
          "**Frontal:** razonamiento, emociones, parte del habla y movimientos.",
          "**Parietal:** sensaciones de contacto, dolor y temperatura.",
          "**Occipital:** recibe y procesa información visual.",
          "**Temporal:** memoria, sentido del oído y parte del habla.",
          "**Hipocampo:** formación de nuevos recuerdos, memoria y aprendizaje.",
          "**Amígdala:** emociones relacionadas con la autopreservación.",
          "**Hipotálamo:** supervivencia, ingesta, temperatura, defensa, emoción y motivación."
        ]
      },
      {
        h: "Médula espinal",
        items: [
          "Tubo cilíndrico de tejido nervioso: del tronco encefálico a la zona lumbar, dentro de la columna vertebral.",
          "Principal vía de comunicación entre cerebro y resto del cuerpo.",
          "Segmentos: cervical, torácico, lumbar, cono medular y cauda equina.",
          "En el corte: sustancia gris y blanca, raíz ventral, raíz dorsal y ganglio espinal."
        ]
      }
    ],
    tables: [
      {
        title: "Divisiones del encéfalo",
        head: ["División", "Partes", "Funciones principales"],
        rows: [
          ["Prosencéfalo — telencéfalo", "Corteza (4 lóbulos), ganglios basales, sistema límbico", "Pensamiento, memoria, emociones, lenguaje, movimiento voluntario"],
          ["Prosencéfalo — diencéfalo", "Tálamo, hipotálamo, epitálamo", "Relé sensorial, hormonas, homeostasis, ritmos circadianos"],
          ["Mesencéfalo", "Pedúnculos, lámina cuadrigémina", "Reflejos visuales y auditivos, postura, alerta"],
          ["Rombencéfalo — metencéfalo", "Puente de Varolio, cerebelo", "Coordinación fina, equilibrio, postura"],
          ["Rombencéfalo — mielencéfalo", "Bulbo raquídeo", "Respiración, ritmo cardíaco, presión, tos, vómito, deglución"]
        ]
      }
    ],
    quiz: [
      mc("El SNC está formado por:", "Encéfalo y médula espinal", ["Cerebro y nervios craneales", "Médula y ganglios", "Encéfalo y plexos"]),
      mc("¿Qué estructura es la más grande del encéfalo (aprox. 85%)?", "Cerebro", ["Cerebelo", "Bulbo raquídeo", "Tálamo"]),
      mc("Los surcos y circunvoluciones sirven para:", "Aumentar el área de la corteza", ["Producir líquido cefalorraquídeo", "Proteger contra golpes", "Conectar con la médula"]),
      mc("La corteza cerebral está formada por materia:", "Gris", ["Blanca", "Amarilla", "Roja"]),
      mc("¿Qué lóbulo recibe y procesa la información visual?", "Occipital", ["Frontal", "Temporal", "Parietal"]),
      mc("¿Qué lóbulo controla sensaciones de contacto, dolor y temperatura?", "Parietal", ["Occipital", "Frontal", "Temporal"]),
      mc("El tálamo, el hipotálamo y el epitálamo forman el:", "Diencéfalo", ["Telencéfalo", "Mesencéfalo", "Mielencéfalo"]),
      mc("La glándula pineal pertenece al:", "Epitálamo", ["Tálamo", "Hipotálamo", "Cerebelo"]),
      mc("El sistema límbico incluye:", "Amígdala, hipocampo y giro cingulado", ["Tálamo, pineal y bulbo", "Puente, cerebelo y bulbo", "Duramadre y piamadre"]),
      mc("¿Qué estructura se relaciona con la formación de nuevos recuerdos y el aprendizaje?", "Hipocampo", ["Amígdala", "Cerebelo", "Bulbo raquídeo"]),
      mc("Procesamiento visual y auditivo reflejo, control motor básico, postura y alerta corresponden al:", "Mesencéfalo", ["Metencéfalo", "Telencéfalo", "Mielencéfalo"]),
      mc("El metencéfalo está formado por:", "Protuberancia (puente de Varolio) y cerebelo", ["Bulbo raquídeo y tálamo", "Hipotálamo y pineal", "Corteza y ganglios basales"]),
      mc("¿Qué estructura regula respiración, ritmo cardíaco, presión arterial y reflejos como tos, vómito y deglución?", "Bulbo raquídeo", ["Cerebelo", "Tálamo", "Giro cingulado"]),
      mc("La médula espinal se extiende desde el tronco encefálico hasta la zona:", "Lumbar", ["Sacra", "Cervical", "Torácica baja"]),
      mc("¿Cuál NO es un segmento de la médula espinal?", "Bulbo", ["Cervical", "Torácico", "Cauda equina"])
    ]
  },

  /* ---------------------------------------------------- 3 */
  {
    id: "proteccion",
    icon: "🛡️",
    title: "Protección: meninges y LCR",
    intro: "Cráneo, tres meninges y líquido cefalorraquídeo protegen al encéfalo de golpes.",
    blocks: [
      {
        h: "Meninges",
        items: [
          "El SNC está envuelto por las **meninges** y alojado en la cavidad craneal y el conducto vertebral.",
          "Son 3 membranas: **duramadre** (externa), **aracnoides** (intermedia) y **piamadre** (interna).",
          "Espacios: epidural, subdural y **subaracnoideo** (aquí circula el LCR).",
          "Cráneo + meninges + LCR mantienen al cerebro protegido de golpes."
        ]
      },
      {
        h: "Líquido cefalorraquídeo (LCR)",
        items: [
          "Rodea al encéfalo y a la médula.",
          "Lo produce el **plexo coroides**, ubicado en los ventrículos cerebrales.",
          "Hay unos **150 mL** que circulan por el encéfalo y los ventrículos y rodean la médula.",
          "Se renueva por completo cada **8 h**."
        ]
      },
      {
        h: "Otras protecciones",
        items: [
          "**Barrera hematoencefálica:** barrera selectiva que controla qué sustancias de la sangre pueden entrar al cerebro.",
          "**Protección inmunológica:** células como la **microglía** actúan como defensa dentro del sistema nervioso."
        ]
      },
      {
        h: "Ventrículos (recorrido del LCR)",
        items: [
          "Ventrículos laterales → agujero interventricular → tercer ventrículo → acueducto del mesencéfalo → cuarto ventrículo → conducto central de la médula."
        ]
      }
    ],
    tables: [
      {
        title: "Sistemas de protección",
        head: ["Protección", "Qué es / qué hace"],
        rows: [
          ["Cráneo y columna", "Estructura ósea que aloja al SNC"],
          ["Meninges", "Duramadre, aracnoides, piamadre"],
          ["LCR", "Amortigua golpes; rodea encéfalo y médula"],
          ["Barrera hematoencefálica", "Controla qué sustancias de la sangre entran al cerebro"],
          ["Microglía", "Defensa inmunológica dentro del SN"]
        ]
      }
    ],
    quiz: [
      ord("Ordena las meninges de la más externa a la más interna:", ["Duramadre", "Aracnoides", "Piamadre"], "Duramadre (externa), aracnoides (intermedia), piamadre (interna)."),
      mc("¿Cuántas membranas forman las meninges?", "3", ["2", "4", "5"]),
      mc("¿Dónde se produce el LCR?", "Plexo coroides", ["Duramadre", "Bulbo raquídeo", "Piamadre"]),
      mc("Aproximadamente, ¿cuánto LCR circula por el encéfalo y la médula?", "150 mL", ["15 mL", "500 mL", "1.5 L"]),
      mc("El LCR completa su renovación cada:", "8 h", ["1 h", "24 h", "72 h"]),
      mc("¿Qué espacio contiene el LCR?", "Subaracnoideo", ["Epidural", "Subdural", "Periarticular"]),
      mc("La barrera hematoencefálica:", "Controla qué sustancias de la sangre entran al cerebro", ["Produce LCR", "Cubre al cráneo", "Conecta los hemisferios"]),
      mc("Las células de microglía funcionan como:", "Defensa inmunológica dentro del sistema nervioso", ["Productoras de LCR", "Receptoras de luz", "Conductoras del impulso motor"]),
      ord("Ordena el recorrido del LCR por los ventrículos:", ["Ventrículos laterales", "Agujero interventricular", "Tercer ventrículo", "Acueducto del mesencéfalo", "Cuarto ventrículo", "Conducto central"], "Sale de los ventrículos laterales y baja hasta el conducto central de la médula.")
    ]
  },

  /* ---------------------------------------------------- 4 */
  {
    id: "snp",
    icon: "🔌",
    title: "Sistema nervioso periférico",
    intro: "Red de nervios fuera del encéfalo y la médula: somático (voluntario) y autónomo (involuntario).",
    blocks: [
      {
        h: "Qué es",
        items: [
          "Parte del SN que **no está dentro** del encéfalo ni de la médula.",
          "Conecta el SNC con el resto del cuerpo y transporta mensajes entre cerebro y cuerpo.",
          "Permite movimiento, sensación (dolor, calor…) y control de funciones vitales involuntarias."
        ]
      },
      {
        h: "Aferente y eferente",
        items: [
          "**Aferencia:** va hacia el SNC (**sensitivo**).",
          "**Eferencia:** viene del SNC (**motor**).",
          "La información sensitiva (estímulos) viene del interior y exterior del cuerpo y siempre viaja del SNP hacia el SNC."
        ]
      },
      {
        h: "Sistema nervioso somático",
        items: [
          "**Voluntario:** tú lo controlas.",
          "Lleva órdenes a los músculos para moverte y trae lo que sientes (tacto, dolor, temperatura).",
          "Movimientos conscientes (caminar) y sensaciones (tacto)."
        ]
      },
      {
        h: "Componentes principales",
        items: [
          "**Nervios craneales:** 12 pares que se originan en el encéfalo (cabeza y cuello).",
          "**Nervios raquídeos:** 31 pares que salen de la médula; son **mixtos** (sensoriales y motores).",
          "**Ganglios:** pequeños agrupamientos de cuerpos neuronales fuera del SNC.",
          "**Plexos nerviosos:** redes de nervios entrelazados (plexo braquial → extremidades superiores; plexo lumbosacro → parte inferior del cuerpo)."
        ]
      }
    ],
    tables: [
      {
        title: "Los 12 pares craneales",
        head: ["Par", "Nombre", "Función (S = sensitiva, M = motora, P = parasimpática)"],
        rows: [
          ["I", "Olfatorio", "S: impulsos olfatorios"],
          ["II", "Óptico", "S: impulsos visuales"],
          ["III", "Motor ocular común (oculomotor)", "M: músculos oculomotores · P: miosis y acomodación"],
          ["IV", "Patético (troclear)", "M: músculos oculomotores (oblicuo superior)"],
          ["V", "Trigémino", "S: sensibilidad de la cara · M: masticación"],
          ["VI", "Motor ocular externo (abducens)", "M: músculos oculomotores (recto externo)"],
          ["VII", "Facial", "S: gusto 2/3 anteriores de la lengua · M: músculos faciales · P: glándulas lagrimales y salivales"],
          ["VIII", "Vestibulococlear (auditivo)", "S: impulsos auditivos y de equilibrio"],
          ["IX", "Glosofaríngeo", "S: gusto 1/3 posterior · M: faringe · P: parótidas"],
          ["X", "Neumogástrico (vago)", "S, M y P: vísceras"],
          ["XI", "Espinal (accesorio)", "M: músculos del cuello"],
          ["XII", "Hipogloso", "M: músculos de la lengua"]
        ]
      },
      {
        title: "Los 31 pares raquídeos",
        head: ["Región", "Pares"],
        rows: [
          ["Cervicales", "8"],
          ["Torácicos o dorsales", "12"],
          ["Lumbares", "5"],
          ["Sacros", "5"],
          ["Coccígeo", "1"]
        ]
      },
      {
        title: "Plexos nerviosos",
        head: ["Plexo", "Nivel"],
        rows: [
          ["Cervical", "C1–C4"],
          ["Braquial", "C5–T1"],
          ["Lumbar", "L1–L4"],
          ["Sacro", "S1–S4"],
          ["Coccígeo", "S4–S5"],
          ["Pudendo", "S2–S4"]
        ]
      }
    ],
    quiz: [
      mc("El SNP es la parte del sistema nervioso que:", "No está dentro del encéfalo ni de la médula espinal", ["Está dentro del cráneo", "Solo controla músculos", "Solo funciona al dormir"]),
      mc("Las fibras sensitivas también se llaman:", "Aferentes", ["Eferentes", "Autónomas", "Motoras"]),
      mc("La eferencia:", "Viene del SNC (motor)", ["Va hacia el SNC (sensitivo)", "Es exclusiva del cerebelo", "Solo ocurre en los ganglios"]),
      mc("El sistema nervioso somático es:", "Voluntario", ["Involuntario", "Exclusivo del corazón", "Solo de las vísceras"]),
      mc("¿Cuántos pares de nervios craneales hay?", "12", ["8", "21", "31"]),
      mc("¿Cuántos pares de nervios raquídeos hay?", "31", ["12", "24", "43"]),
      mc("Los nervios raquídeos son:", "Mixtos (sensoriales y motores)", ["Solo sensoriales", "Solo motores", "Solo parasimpáticos"]),
      mc("¿Cuántos pares raquídeos torácicos hay?", "12", ["8", "5", "1"]),
      mc("¿Cuántos pares raquídeos lumbares hay?", "5", ["8", "12", "1"]),
      mc("Los ganglios son:", "Agrupamientos de cuerpos neuronales fuera del SNC", ["Membranas que cubren el cerebro", "Células de defensa", "Huesecillos del oído"]),
      mc("El plexo braquial inerva:", "Las extremidades superiores", ["Las extremidades inferiores", "Solo la cara", "Las vísceras"]),
      mc("¿Qué par craneal transmite impulsos visuales?", "II — Óptico", ["I — Olfatorio", "VIII — Vestibulococlear", "V — Trigémino"]),
      mc("¿Qué par craneal transmite impulsos auditivos y de equilibrio?", "VIII — Vestibulococlear", ["VII — Facial", "IX — Glosofaríngeo", "XII — Hipogloso"]),
      mc("El nervio vago (X) se relaciona con:", "Las vísceras", ["Los músculos de la lengua", "La masticación", "El olfato"]),
      mc("El par XII (hipogloso) mueve:", "Los músculos de la lengua", ["Los músculos del cuello", "Los músculos faciales", "El globo ocular"]),
      mc("El trigémino (V) da sensibilidad a la cara y controla:", "Los músculos de la masticación", ["El gusto", "La audición", "La miosis"])
    ]
  },

  /* ---------------------------------------------------- 5 */
  {
    id: "autonomo",
    icon: "⚡",
    title: "Autónomo: simpático vs parasimpático",
    intro: "Involuntario, trabaja solo: modo alerta (pelear o huir) vs modo calma (reposo y digestión).",
    blocks: [
      {
        h: "Autónomo",
        items: [
          "**Involuntario:** NO lo controlas, trabaja solo.",
          "Controla las acciones involuntarias y automáticas del cuerpo.",
          "Se divide en simpático y parasimpático."
        ]
      },
      {
        h: "Simpático — modo alerta",
        items: [
          "Prepara al cuerpo para **lucha o huida**.",
          "Dilata las pupilas, inhibe la salivación, relaja los bronquios.",
          "Aumenta el ritmo cardíaco.",
          "Inhibe el peristaltismo y la secreción digestiva.",
          "Estimula la producción y liberación de glucosa.",
          "Estimula la secreción de epinefrina y norepinefrina.",
          "Inhibe la contracción de la vejiga."
        ]
      },
      {
        h: "Parasimpático — modo calma",
        items: [
          "Funciones de **descanso y digestión**.",
          "Disminuye la frecuencia cardíaca y la contractilidad atrial.",
          "Aumenta la secreción de glándulas exocrinas (lagrimal, salival, sudorípara, ácido gástrico).",
          "Aumenta el peristaltismo y la contracción vesical.",
          "Contrae el esfínter pupilar (**miosis**) y el músculo ciliar (acomodación).",
          "Broncoconstricción."
        ]
      }
    ],
    tables: [
      {
        title: "Simpático vs parasimpático en el tracto digestivo",
        head: ["Parámetro / órgano", "Simpático (lucha / huida)", "Parasimpático (reposo / digestión)"],
        rows: [
          ["Estado general", "Preparación para la acción, estrés o emergencia", "Conservación de energía, nutrición y recuperación"],
          ["Motilidad gastrointestinal", "Disminuye (inhibe peristaltismo y digestión)", "Estimula (favorece peristaltismo y tránsito intestinal)"],
          ["Secreción gástrica / pancreática", "Inhibe o reduce las secreciones", "Estimula jugos gástricos, bilis y enzimas"],
          ["Esfínteres", "Contrae (cierra) los esfínteres digestivos", "Relaja (abre) los esfínteres para permitir el paso"],
          ["Flujo sanguíneo visceral", "Vasoconstricción (deriva sangre a músculos y corazón)", "Vasodilatación (irrigación óptima del tracto digestivo)"]
        ]
      },
      {
        title: "Comparación por órgano",
        head: ["Órgano", "Simpático", "Parasimpático"],
        rows: [
          ["Pupila", "Dilata (midriasis)", "Contrae (miosis)"],
          ["Corazón", "Aumenta el ritmo", "Disminuye la frecuencia"],
          ["Bronquios", "Relaja", "Broncoconstricción"],
          ["Vejiga", "Inhibe la contracción", "Aumenta la contracción"],
          ["Digestivo", "Inhibe peristaltismo", "Aumenta peristaltismo"]
        ]
      }
    ],
    quiz: [
      mc("El sistema nervioso autónomo es:", "Involuntario: no lo controlas, trabaja solo", ["Voluntario", "Solo sensitivo", "Exclusivo del cerebelo"]),
      mc("El simpático es el modo:", "Alerta: pelear o huir", ["Calma", "Sueño profundo", "Digestión"]),
      mc("El parasimpático es el modo:", "Calma: reposo y digestión", ["Alerta", "Lucha o huida", "Estrés"]),
      mc("El simpático sobre las pupilas:", "Las dilata", ["Las contrae", "No las afecta", "Las cierra por completo"]),
      mc("El parasimpático sobre la frecuencia cardíaca:", "La disminuye", ["La aumenta", "No la modifica", "La vuelve irregular"]),
      mc("El simpático sobre el peristaltismo:", "Lo inhibe", ["Lo estimula", "Lo duplica", "No lo afecta"]),
      mc("Los esfínteres digestivos bajo el simpático:", "Se contraen (cierran)", ["Se relajan (abren)", "Se dilatan", "Desaparecen"]),
      mc("El flujo sanguíneo visceral con el simpático:", "Vasoconstricción (deriva sangre a músculos y corazón)", ["Vasodilatación", "Se detiene del todo", "No cambia"]),
      mc("¿Qué sistema estimula la liberación de epinefrina y norepinefrina?", "Simpático", ["Parasimpático", "Somático", "Ninguno"]),
      mc("La miosis (contracción de la pupila) se asocia con el:", "Parasimpático", ["Simpático", "Sistema somático", "Cerebelo"]),
      mc("En los bronquios, el simpático:", "Los relaja", ["Los contrae", "Los cierra", "Los infla"]),
      mc("¿Cuál es una diferencia correcta entre somático y autónomo?", "Somático: voluntario; autónomo: involuntario", ["Somático: involuntario; autónomo: voluntario", "Ambos son voluntarios", "Ambos son involuntarios"])
    ]
  },

  /* ---------------------------------------------------- 6 */
  {
    id: "sinapsis",
    icon: "🔗",
    title: "Sinapsis y transmisión neuromuscular",
    intro: "Cómo el potencial de acción libera neurotransmisor (acetilcolina) hacia la célula blanco.",
    blocks: [
      {
        h: "Pasos (apuntes)",
        items: [
          "**1.** El potencial de acción llega a la terminal axónica y **despolariza** la membrana.",
          "**2.** Se activan los **canales de Ca²⁺**, que permiten su paso debido al cambio en el voltaje.",
          "**3.** El calcio permite que fluyan las **vesículas** sinápticas (vesículas presinápticas).",
          "**4.** El **neurotransmisor sale** (exocitosis) y se une a las células blanco."
        ]
      },
      {
        h: "En la placa motora",
        items: [
          "El potencial de acción viene de una **neurona motora alfa**.",
          "Se libera el neurotransmisor **acetilcolina**.",
          "La acetilcolina se une a receptores en la membrana muscular y genera un potencial de acción en la célula muscular."
        ]
      },
      {
        h: "Dato del cuaderno",
        items: [
          "**−70 mV:** potencial de membrana en reposo típico de una neurona."
        ]
      }
    ],
    tables: [
      {
        title: "Elementos de la sinapsis",
        head: ["Elemento", "Papel"],
        rows: [
          ["Terminal axónica", "Recibe el potencial de acción"],
          ["Canales de Ca²⁺", "Se abren por cambio de voltaje"],
          ["Vesículas presinápticas", "Contienen el neurotransmisor"],
          ["Exocitosis", "Liberación del neurotransmisor"],
          ["Acetilcolina", "Neurotransmisor de la placa motora"],
          ["Célula blanco", "Recibe el neurotransmisor (músculo o neurona)"]
        ]
      }
    ],
    quiz: [
      ord("Ordena la transmisión sináptica:", ["El potencial de acción llega a la terminal axónica y despolariza la membrana", "Se activan los canales de Ca²⁺ por el cambio de voltaje", "Las vesículas presinápticas se mueven hacia la membrana", "El neurotransmisor sale por exocitosis y se une a las células blanco"]),
      mc("¿Qué llega a la terminal axónica para iniciar el proceso?", "Un potencial de acción", ["Un neurotransmisor", "Una vesícula", "Un ion sodio únicamente"]),
      mc("Los canales de Ca²⁺ se activan por:", "Cambio en el voltaje", ["La acetilcolina", "La temperatura", "La presión"]),
      mc("¿Qué permite el paso del calcio?", "Que las vesículas liberen su contenido", ["Que se produzca LCR", "Que la miosina se separe", "Que se cierre la membrana"]),
      mc("¿Cómo sale el neurotransmisor de la terminal?", "Por exocitosis", ["Por endocitosis", "Por ósmosis", "Por difusión de ATP"]),
      mc("El neurotransmisor de la placa motora es:", "Acetilcolina", ["Dopamina", "Epinefrina", "Glucosa"]),
      mc("El potencial de acción del músculo esquelético proviene de:", "Una neurona motora alfa", ["Una neurona sensitiva", "El retículo sarcoplásmico", "El plexo coroides"]),
      mc("−70 mV corresponde al:", "Potencial de membrana en reposo", ["Potencial de acción máximo", "Umbral de dolor", "Potencial de la placa motora"])
    ]
  },

  /* ---------------------------------------------------- 7 */
  {
    id: "contraccion",
    icon: "💪",
    title: "Contracción muscular",
    intro: "Teoría de los filamentos deslizantes y ciclo de puentes cruzados (videos 1 y 2).",
    blocks: [
      {
        h: "Estructura",
        items: [
          "El músculo esquelético está formado por **fibras musculares**.",
          "Las fibras tienen unidades repetitivas: **sarcómeros**.",
          "Filamentos delgados = **actina**; filamentos gruesos = **miosina**."
        ]
      },
      {
        h: "Del nervio al calcio",
        items: [
          "El potencial de acción viene de una **neurona motora alfa**.",
          "En la placa motora se libera **acetilcolina**, que genera un potencial de acción en la célula muscular.",
          "El potencial se propaga por el **sarcolema** y los **túbulos T**.",
          "Se libera **Ca²⁺** desde el **retículo sarcoplásmico** al citosol."
        ]
      },
      {
        h: "Papel del calcio",
        items: [
          "El Ca²⁺ se une a la **troponina C**.",
          "Cambio conformacional: se mueve la **tropomiosina**.",
          "Quedan expuestos los sitios de unión de la actina."
        ]
      },
      {
        h: "Ciclo de puentes cruzados",
        items: [
          "La cabeza de miosina (con **ADP + Pi**) se une a la actina → puente cruzado.",
          "Se libera el **Pi**: la cabeza cambia de ángulo y desliza la actina.",
          "Se libera el **ADP**: **golpe de fuerza** (power stroke).",
          "Actina y miosina quedan unidas fuertemente: **complejo de rigor**.",
          "Un **ATP** nuevo se une a la miosina y la separa de la actina.",
          "El ATP se hidroliza (ATP → ADP + Pi) y la cabeza vuelve a su posición inicial de alta energía.",
          "Si sigue habiendo calcio, el ciclo se repite."
        ]
      },
      {
        h: "Relajación y puntos clave",
        items: [
          "Cesa el estímulo: el calcio regresa al retículo sarcoplásmico (bomba **SERCA**).",
          "La tropomiosina vuelve a cubrir los sitios de actina: el músculo se relaja.",
          "El **ATP es necesario** para contraer y para relajar.",
          "Sin ATP: **rigor mortis** (complejo de rigor permanente).",
          "Teoría de filamentos deslizantes: actina y miosina se deslizan y el sarcómero se acorta."
        ]
      }
    ],
    tables: [
      {
        title: "Moléculas clave",
        head: ["Molécula / estructura", "Función"],
        rows: [
          ["Acetilcolina", "Neurotransmisor de la placa motora"],
          ["Sarcolema y túbulos T", "Propagan el potencial de acción"],
          ["Retículo sarcoplásmico", "Almacena y libera Ca²⁺"],
          ["Troponina C", "Une Ca²⁺ y mueve la tropomiosina"],
          ["Tropomiosina", "Cubre/expone los sitios de unión de la actina"],
          ["Actina", "Filamento delgado"],
          ["Miosina", "Filamento grueso; sus cabezas forman puentes cruzados"],
          ["ATP", "Separa miosina de actina y la reposiciona"],
          ["SERCA", "Bomba que regresa el Ca²⁺ al retículo"]
        ]
      }
    ],
    quiz: [
      ord("Ordena la secuencia de la contracción muscular:", ["Potencial de acción de la neurona motora alfa", "Liberación de acetilcolina en la placa motora", "Potencial de acción en el sarcolema y túbulos T", "Liberación de Ca²⁺ desde el retículo sarcoplásmico", "El Ca²⁺ se une a la troponina C y se mueve la tropomiosina", "Se forman puentes cruzados actina-miosina"]),
      ord("Ordena el ciclo de puentes cruzados:", ["La miosina (con ADP + Pi) se une a la actina", "Se libera el fosfato (Pi)", "Se libera el ADP: golpe de fuerza", "Un nuevo ATP separa la miosina de la actina", "El ATP se hidroliza y la miosina vuelve a su posición inicial"]),
      mc("El estímulo normal que desencadena la contracción es:", "Un potencial de acción", ["Un cambio de pH", "La liberación de ATP", "Un golpe de calor"]),
      mc("El calcio se libera desde:", "El retículo sarcoplásmico", ["El sarcolema", "La mitocondria", "El núcleo"]),
      mc("El calcio se une a:", "La troponina C", ["La miosina", "La tropomiosina", "El ATP"]),
      mc("La tropomiosina, al moverse, deja expuestos:", "Los sitios de unión de la actina", ["Los sitios del ATP", "Los túbulos T", "Los receptores de acetilcolina"]),
      mc("El filamento delgado está formado por:", "Actina", ["Miosina", "Troponina", "Colágeno"]),
      mc("El filamento grueso está formado por:", "Miosina", ["Actina", "Tropomiosina", "Mielina"]),
      mc("Antes de unirse a la actina, la cabeza de miosina tiene unidos:", "ADP + Pi", ["ATP", "Calcio", "Acetilcolina"]),
      mc("¿Cuándo ocurre el “golpe de fuerza”?", "Al liberarse el ADP", ["Al unirse el ATP", "Al entrar el calcio al retículo", "Al liberarse la acetilcolina"]),
      mc("El complejo de rigor es:", "Actina y miosina fuertemente unidas", ["Actina separada de miosina", "El calcio unido a la troponina", "El ATP hidrolizado"]),
      mc("¿Qué separa la miosina de la actina?", "La unión de un nuevo ATP", ["El calcio", "La acetilcolina", "El ADP"]),
      mc("¿Qué pasa si no hay ATP?", "Rigor mortis (complejo de rigor permanente)", ["El músculo se relaja", "Se contrae y se relaja normal", "Se libera más calcio"]),
      mc("En la relajación, el calcio es bombeado de regreso al retículo por:", "La bomba SERCA", ["La troponina", "La miosina", "El sarcolema"]),
      mc("En la teoría de los filamentos deslizantes, al contraerse:", "El sarcómero se acorta", ["Los filamentos se acortan", "El sarcómero se alarga", "La miosina se destruye"]),
      mc("El ATP es necesario para:", "Tanto la contracción como la relajación", ["Solo la contracción", "Solo la relajación", "Ninguna de las dos"])
    ]
  },

  /* ---------------------------------------------------- 8 */
  {
    id: "receptores",
    icon: "📡",
    title: "Función de relación y receptores",
    intro: "Estímulo → receptor → centro nervioso → respuesta. Tipos de receptores sensoriales.",
    blocks: [
      {
        h: "Función de relación",
        items: [
          "Nos relacionamos con el medio.",
          "Elementos de la coordinación: **estímulo → receptor → centro nervioso → respuesta**.",
          "Respuesta por **efector músculo** → respuesta motora (movimiento).",
          "Respuesta por **efector glándula** → respuesta secretora (hormona)."
        ]
      },
      {
        h: "Aparatos relacionados con la relación",
        items: [
          "**Órganos de los sentidos:** olfato, oído, vista, gusto, tacto.",
          "**Aparato locomotor:** sistema muscular y esquelético.",
          "**Sistema de coordinación:** sistema nervioso y endocrino (hormonal)."
        ]
      },
      {
        h: "Receptores según su localización",
        items: [
          "**Internos / interorreceptores:** en el interior del cuerpo (músculos y vísceras).",
          "**Externos / exterorreceptores:** en la superficie del cuerpo (órganos de los sentidos)."
        ]
      },
      {
        h: "Receptores según el estímulo",
        items: [
          "**Fotorreceptores:** captan luz.",
          "**Termorreceptores:** captan variaciones de temperatura.",
          "**Quimiorreceptores:** captan sustancias químicas.",
          "**Mecanorreceptores:** captan estímulos físicos (presión, sonido…).",
          "**Nociceptores:** captan grandes presiones que puedan provocar daño."
        ]
      }
    ],
    tables: [
      {
        title: "Órganos de los sentidos",
        head: ["Sentido", "Órgano", "Receptor típico"],
        rows: [
          ["Vista", "Ojos", "Fotorreceptores"],
          ["Tacto", "Piel", "Mecano-, termo- y nociceptores"],
          ["Olfato", "Fosas nasales", "Quimiorreceptores"],
          ["Oído", "Oídos", "Mecanorreceptores"],
          ["Gusto", "Lengua", "Quimiorreceptores"]
        ]
      }
    ],
    quiz: [
      ord("Ordena la función de relación:", ["Estímulo", "Receptor", "Centro nervioso", "Respuesta (efector)"]),
      mc("Un efector músculo produce una respuesta:", "Motora (movimiento)", ["Secretora (hormona)", "Sensorial", "Inmunológica"]),
      mc("Un efector glándula produce una respuesta:", "Secretora (hormona)", ["Motora", "Visual", "Refleja"]),
      mc("Los interorreceptores están en:", "El interior del cuerpo (músculos y vísceras)", ["La superficie del cuerpo", "Solo en el cerebro", "Solo en los ojos"]),
      mc("Los exterorreceptores están en:", "La superficie del cuerpo (órganos de los sentidos)", ["Las vísceras", "El hígado", "La médula"]),
      mc("Los fotorreceptores captan:", "Luz", ["Sonido", "Sustancias químicas", "Temperatura"]),
      mc("Los termorreceptores captan:", "Variaciones de temperatura", ["Luz", "Dolor intenso", "Sabores"]),
      mc("Los quimiorreceptores captan:", "Sustancias químicas", ["Presión", "Luz", "Calor"]),
      mc("Los mecanorreceptores captan:", "Estímulos físicos como presión y sonido", ["Solo luz", "Solo olores", "Solo temperatura"]),
      mc("Los nociceptores captan:", "Grandes presiones que pueden provocar daño (dolor)", ["Luz tenue", "Sabores dulces", "Olores suaves"]),
      mc("Un dolor de estómago es captado por:", "Interorreceptores", ["Exterorreceptores", "Fotorreceptores", "Ninguno"]),
      mc("El sistema de coordinación está formado por:", "Sistema nervioso y endocrino", ["Muscular y esquelético", "Digestivo y respiratorio", "Circulatorio y urinario"])
    ]
  },

  /* ---------------------------------------------------- 9 */
  {
    id: "vista",
    icon: "👁️",
    title: "Sentido de la vista",
    intro: "Anatomía del ojo, entrada de luz, acomodación y fotorreceptores.",
    blocks: [
      {
        h: "Anatomía del ojo",
        items: [
          "**Esclerótica:** capa externa. **Coroides:** capa media. **Retina:** capa interna.",
          "**Córnea:** zona transparente. **Conjuntiva** cubre la parte externa.",
          "**Iris:** disco coloreado. **Pupila:** regula la luz que entra.",
          "**Cristalino:** lente biconvexa, transparente y flexible; permite enfocar.",
          "**Humor acuoso** (adelante) y **humor vítreo** (líquido de adentro del ojo).",
          "**Nervio óptico:** lleva los impulsos al cerebro. **Mácula** en la retina.",
          "**Órganos anejos:** cejas, párpados, pestañas y glándula lagrimal."
        ]
      },
      {
        h: "Pupila",
        items: [
          "Se **agranda** en la oscuridad y se hace **más pequeña** con mucha luz.",
          "**Midriasis:** se dilatan las pupilas. **Miosis:** se contrae la pupila.",
          "**Isocóricas:** pupilas iguales. **Anisocóricas:** pupilas de distinto tamaño."
        ]
      },
      {
        h: "Cómo vemos",
        items: [
          "La luz pasa por córnea, humor acuoso, pupila, cristalino y humor vítreo hasta la **retina**.",
          "Los **fotorreceptores** convierten la imagen en impulsos nerviosos.",
          "El nervio óptico los conduce hasta la **corteza cerebral**.",
          "La imagen se forma **invertida** en la retina y el cerebro la gira."
        ]
      },
      {
        h: "Acomodación del cristalino",
        items: [
          "Se **abomba** para enfocar objetos **cercanos**.",
          "Se **aplana** para objetos **lejanos**.",
          "Interviene el músculo ciliar."
        ]
      }
    ],
    tables: [
      {
        title: "Partes del ojo",
        head: ["Parte", "Función"],
        rows: [
          ["Córnea", "Zona transparente por donde entra la luz"],
          ["Iris", "Disco coloreado que rodea la pupila"],
          ["Pupila", "Regula la luz que entra"],
          ["Cristalino", "Enfoca las imágenes"],
          ["Retina", "Contiene células receptoras de luz (fotorreceptores)"],
          ["Nervio óptico", "Lleva los impulsos al cerebro"]
        ]
      }
    ],
    quiz: [
      ord("Ordena el recorrido de la luz hasta el cerebro:", ["Córnea", "Humor acuoso", "Pupila", "Cristalino", "Humor vítreo", "Retina (fotorreceptores)", "Nervio óptico", "Corteza cerebral"]),
      mc("La zona transparente al frente del ojo es la:", "Córnea", ["Esclerótica", "Coroides", "Retina"]),
      mc("El disco coloreado del ojo es el:", "Iris", ["Cristalino", "Humor vítreo", "Nervio óptico"]),
      mc("¿Qué estructura regula la cantidad de luz que entra?", "Pupila", ["Cristalino", "Retina", "Conjuntiva"]),
      mc("La lente que permite enfocar las imágenes es el:", "Cristalino", ["Iris", "Humor acuoso", "Coroides"]),
      mc("La retina contiene:", "Células receptoras de luz (fotorreceptores)", ["Glándulas lagrimales", "Huesecillos", "Líquido cefalorraquídeo"]),
      mc("En la oscuridad, la pupila:", "Se agranda (midriasis)", ["Se contrae (miosis)", "Desaparece", "No cambia"]),
      mc("Con mucha luz, la pupila:", "Se hace más pequeña (miosis)", ["Se dilata", "Se abre por completo", "Se vuelve oval"]),
      mc("Midriasis significa:", "Se dilatan las pupilas", ["Se contrae la pupila", "Pupilas de distinto tamaño", "Pupilas iguales"]),
      mc("Pupilas anisocóricas son:", "De distinto tamaño", ["Del mismo tamaño", "Cerradas", "Sin respuesta a la luz"]),
      mc("Para enfocar objetos cercanos, el cristalino:", "Se abomba", ["Se aplana", "Se contrae a la mitad", "Sale del ojo"]),
      mc("Para enfocar objetos lejanos, el cristalino:", "Se aplana", ["Se abomba", "Se endurece", "Se dobla"]),
      mc("La imagen en la retina se forma:", "Invertida", ["Derecha", "Borrosa siempre", "Doble"]),
      mc("El humor vítreo es:", "El líquido de adentro del ojo", ["Una membrana", "Un músculo", "Un nervio"]),
      mc("¿Cuál es un órgano anejo del ojo?", "Glándula lagrimal", ["Cristalino", "Coroides", "Mácula"]),
      mc("La capa externa del globo ocular es la:", "Esclerótica", ["Coroides", "Retina", "Iris"])
    ]
  },

  /* ---------------------------------------------------- 10 */
  {
    id: "tacto-olfato-gusto",
    icon: "✋",
    title: "Tacto, olfato y gusto",
    intro: "Receptores de la piel, quimiorreceptores de la nariz y papilas gustativas de la lengua.",
    blocks: [
      {
        h: "Sentido del tacto (piel)",
        items: [
          "La piel tiene epidermis y dermis, con pelos y varios receptores.",
          "**Terminaciones libres:** dolor (nociceptor).",
          "**Corpúsculo de Vater-Pacini:** presión (mecanorreceptor).",
          "**Corpúsculo de Ruffini:** calor (termorreceptor).",
          "**Corpúsculo de Krause:** frío (termorreceptor).",
          "**Corpúsculo de Meissner:** contacto / tacto (mecanorreceptor)."
        ]
      },
      {
        h: "Sentido del olfato",
        items: [
          "Estructuras: fosa nasal, pituitaria amarilla, pituitaria roja, terminaciones nerviosas, **bulbo olfatorio** y **nervio olfatorio**, que llevan la información al cerebro.",
          "Los receptores son **quimiorreceptores** (células olfatorias).",
          "Intervienen células de soporte, moco y el hueso etmoides."
        ]
      },
      {
        h: "Sentido del gusto",
        items: [
          "Las **papilas gustativas** están en la lengua y permiten percibir los sabores.",
          "Contienen **quimiorreceptores** (células sensitivas).",
          "Sabores: dulce, salado, ácido (agrio), amargo y **umami**.",
          "Tipos de papilas: fungiformes, caliciformes, filiformes y foliadas; también amígdala lingual y palatina.",
          "**Umami:** sabor “sabroso” presente en sardinas, algas, champiñones, quesos, tomates, salsa de soya y leche materna."
        ]
      }
    ],
    tables: [
      {
        title: "Receptores del tacto",
        head: ["Receptor", "Estímulo", "Tipo"],
        rows: [
          ["Terminaciones libres", "Dolor", "Nociceptor"],
          ["Corpúsculos de Pacini", "Presión", "Mecanorreceptor"],
          ["Corpúsculos de Ruffini", "Calor", "Termorreceptor"],
          ["Corpúsculos de Krause", "Frío", "Termorreceptor"],
          ["Corpúsculos de Meissner", "Contacto (tacto)", "Mecanorreceptor"]
        ]
      },
      {
        title: "Resumen de los sentidos químicos",
        head: ["Sentido", "Órgano", "Receptor", "Dato clave"],
        rows: [
          ["Olfato", "Fosas nasales", "Quimiorreceptores", "Bulbo olfatorio → cerebro"],
          ["Gusto", "Lengua", "Quimiorreceptores", "Papilas gustativas; 5 sabores"]
        ]
      }
    ],
    quiz: [
      mc("El corpúsculo de Pacini detecta:", "Presión", ["Calor", "Frío", "Dolor"]),
      mc("El corpúsculo de Ruffini detecta:", "Calor", ["Frío", "Presión", "Dolor"]),
      mc("El corpúsculo de Krause detecta:", "Frío", ["Calor", "Contacto", "Presión"]),
      mc("El corpúsculo de Meissner detecta:", "Contacto (tacto)", ["Dolor", "Calor", "Frío"]),
      mc("Las terminaciones libres detectan:", "Dolor", ["Presión", "Frío", "Contacto suave"]),
      mc("¿Cuál receptor de la piel es un nociceptor?", "Terminaciones libres", ["Meissner", "Pacini", "Krause"]),
      mc("Los receptores del olfato son:", "Quimiorreceptores", ["Fotorreceptores", "Mecanorreceptores", "Termorreceptores"]),
      mc("¿Qué estructura lleva la información olfativa hacia el cerebro?", "Bulbo y nervio olfatorio", ["Nervio óptico", "Nervio vago", "Cóclea"]),
      mc("Las papilas gustativas están en:", "La lengua", ["La nariz", "El oído", "La piel"]),
      mc("Los receptores del gusto son:", "Quimiorreceptores", ["Fotorreceptores", "Mecanorreceptores", "Nociceptores"]),
      mc("¿Cuál NO es uno de los cinco sabores básicos?", "Picante", ["Dulce", "Amargo", "Umami"]),
      mc("El umami se encuentra en alimentos como:", "Sardinas, champiñones, quesos y salsa de soya", ["Solo frutas", "Solo azúcar", "Solo limón"]),
      mc("¿Cuál es un tipo de papila de la lengua?", "Caliciforme", ["Cilíndrica", "Coclear", "Ciliar"])
    ]
  },

  /* ---------------------------------------------------- 11 */
  {
    id: "oido",
    icon: "👂",
    title: "Oído: audición y equilibrio",
    intro: "Oído externo, medio e interno; recorrido del sonido y mecanismo del equilibrio.",
    blocks: [
      {
        h: "Partes del oído",
        items: [
          "**Externo:** pabellón de la oreja (cartílago, recoge el sonido) y conducto auditivo externo (pelos y glándulas de cerumen que impiden la entrada de polvo e insectos).",
          "**Tímpano:** membrana entre el oído externo y el medio.",
          "**Medio:** martillo, yunque y estribo; trompa de Eustaquio (comunica con la faringe y compensa presiones a ambos lados del tímpano).",
          "**Interno:** caracol o cóclea (audición), canales semicirculares (equilibrio) y nervio auditivo."
        ]
      },
      {
        h: "Cóclea",
        items: [
          "Estructuras: ventana oval, ventana redonda, rampa vestibular, rampa timpánica, rampa media, membrana basilar y helicotrema.",
          "Contiene perilinfa y endolinfa.",
          "Los **mecanorreceptores** son células ciliadas (estereocilios) bajo la membrana tectoria.",
          "El nervio coclear lleva la señal al cerebro."
        ]
      },
      {
        h: "Equilibrio",
        items: [
          "Tres canales semicirculares (superior, posterior y externo) llenos de **endolinfa**, que cubren los tres planos del espacio (X, Y, Z).",
          "**Ampollas** (cresta ampular y cúpula gelatinosa): detectan el movimiento del líquido.",
          "**Máculas** (en utrículo y sáculo): contienen otolitos; detectan la posición de la cabeza.",
          "Ambas tienen células sensoriales ciliadas (mecanorreceptores) y fibras del nervio vestibular."
        ]
      }
    ],
    tables: [
      {
        title: "Oído por regiones",
        head: ["Región", "Estructuras", "Función"],
        rows: [
          ["Externo", "Pabellón, conducto auditivo externo", "Recoger el sonido"],
          ["Medio", "Tímpano, martillo, yunque, estribo, trompa de Eustaquio", "Transmitir la vibración e igualar presiones"],
          ["Interno — cóclea", "Rampas, membrana basilar, células ciliadas", "Audición"],
          ["Interno — canales semicirculares", "Ampollas, máculas (utrículo y sáculo)", "Equilibrio"]
        ]
      }
    ],
    quiz: [
      ord("Ordena el recorrido del sonido:", ["Pabellón de la oreja", "Conducto auditivo externo", "Tímpano", "Martillo, yunque y estribo", "Cóclea (caracol)", "Nervio auditivo", "Cerebro"]),
      mc("¿Qué estructura recoge el sonido en el oído externo?", "Pabellón de la oreja", ["Tímpano", "Estribo", "Cóclea"]),
      mc("¿Para qué sirve el cerumen?", "Impide la entrada de polvo e insectos", ["Amplifica el sonido", "Mantiene el equilibrio", "Produce endolinfa"]),
      mc("Los huesecillos del oído medio son:", "Martillo, yunque y estribo", ["Pabellón, tímpano y cóclea", "Ampolla, mácula y cúpula", "Utrículo, sáculo y helicotrema"]),
      mc("La trompa de Eustaquio:", "Comunica con la faringe y compensa presiones del tímpano", ["Produce cerumen", "Detecta el equilibrio", "Lleva el sonido al cerebro"]),
      mc("¿Qué estructura del oído interno se encarga de la audición?", "Cóclea (caracol)", ["Canales semicirculares", "Tímpano", "Trompa de Eustaquio"]),
      mc("¿Qué estructura del oído interno se encarga del equilibrio?", "Canales semicirculares", ["Cóclea", "Martillo", "Pabellón"]),
      mc("Los canales semicirculares están llenos de:", "Endolinfa", ["Aire", "Sangre", "Cerumen"]),
      mc("¿Cuántos canales semicirculares hay?", "Tres", ["Dos", "Cuatro", "Cinco"]),
      mc("Los tres canales semicirculares cubren los planos:", "X, Y y Z", ["Solo horizontal", "Solo vertical", "Ninguno"]),
      mc("¿Qué estructuras detectan el movimiento del líquido en los canales?", "Ampollas (con su cúpula)", ["Pituitaria", "Cristalino", "Huesecillos"]),
      mc("Las máculas están en el:", "Utrículo y sáculo", ["Tímpano", "Pabellón", "Nervio óptico"]),
      mc("Las células ciliadas del oído son:", "Mecanorreceptores", ["Fotorreceptores", "Quimiorreceptores", "Termorreceptores"]),
      mc("¿Cuál NO es una rampa de la cóclea?", "Rampa coroidea", ["Vestibular", "Timpánica", "Media"])
    ]
  }
];
