export const DRIVING_GROUPS = [
  {
    title: 'Μοτοποδήλατα & μοτοσικλέτες',
    items: [
      { code: 'AM', description: 'Μοτοποδήλατα έως 50 κ.εκ.', slug: 'am-50cc' },
      { code: 'A1', description: 'Μοτοσικλέτες έως 125 κ.εκ. και 11 kW.', slug: 'a1-125cc' },
      { code: 'A2', description: 'Μοτοσικλέτες έως 35 kW.', slug: 'a2' },
      {
        code: 'A',
        description: 'Μοτοσικλέτες χωρίς περιορισμό ισχύος ή κυβισμού.',
        slug: 'a-aperioristo',
      },
    ],
  },
  {
    title: 'Αυτοκίνητα & ρυμουλκούμενα',
    items: [
      { code: 'B1', description: 'Τετράκυκλα.', slug: 'b1-tetrakyklo' },
      {
        code: 'B',
        description: 'Αυτοκίνητα έως 8 επιβάτες και οδηγό, έως 3.500 kg.',
        slug: 'b-autokinito',
      },
      {
        code: 'BE',
        description: 'Όχημα κατηγορίας B με ρυμουλκούμενο έως 3.500 kg.',
        slug: 'be-rymoulkoumeno',
      },
    ],
  },
  {
    title: 'Φορτηγά & συρμοί',
    items: [
      { code: 'C1', description: 'Φορτηγά έως 7.500 kg.', slug: 'c1-fortigo' },
      { code: 'C1E', description: 'Σύνολα οχημάτων έως 12.000 kg.', slug: 'c1e-syrmos' },
      { code: 'C', description: 'Φορτηγά άνω των 3.500 kg.', slug: 'c-fortigo' },
      { code: 'CE', description: 'Φορτηγά κατηγορίας C με ρυμουλκούμενο.', slug: 'ce-syromena' },
    ],
  },
  {
    title: 'Λεωφορεία & ρυμουλκούμενα',
    items: [
      {
        code: 'D1',
        description: 'Λεωφορεία έως 16 επιβάτες και οδηγό, μήκους έως 8 μέτρα.',
        slug: 'd1-leoforeio',
      },
      { code: 'D1E', description: 'Λεωφορεία D1 με ρυμουλκούμενο.', slug: 'd1e-leoforeio' },
      {
        code: 'D',
        description: 'Λεωφορεία με περισσότερες από 8 θέσεις επιβατών.',
        slug: 'd-leoforeio',
      },
      { code: 'DE', description: 'Λεωφορεία D με ρυμουλκούμενο.', slug: 'de-leoforeio' },
    ],
  },
] as const;

export const ADDITIONAL_DRIVING_PAGES = [
  {
    slug: 'b1-tetrakyklo',
    title: 'Κατηγορία B1 — Τετράκυκλα',
    description: 'Η κατηγορία B1 αφορά τετράκυκλα οχήματα.',
    details:
      'Σύμφωνα με την πηγή, η κατηγορία χορηγείται στην Ελλάδα σε ήδη κατόχους ξένης άδειας B1 κατά την ανταλλαγή ή μετατροπή της.',
    source: 'https://drivingschool.gr/diplomata/diploma-auto_b1.htm',
  },
  {
    slug: 'c1-fortigo',
    title: 'Κατηγορία C1 — Φορτηγό',
    description: 'Φορτηγά με μέγιστη επιτρεπόμενη μάζα άνω των 3.500 kg και έως 7.500 kg.',
    details:
      'Για τη διαδικασία και τις προϋποθέσεις επέκτασης από την κατηγορία B, επικοινώνησε μαζί μας.',
    source: 'https://drivingschool.gr/diplomata/diploma-fortigou_c1.htm',
  },
  {
    slug: 'c1e-syrmos',
    title: 'Κατηγορία C1E — Φορτηγό με ρυμουλκούμενο',
    description: 'Σύνολα οχημάτων με μέγιστη επιτρεπόμενη μάζα έως 12.000 kg.',
    details:
      'Περιλαμβάνει όχημα C1 με ρυμουλκούμενο άνω των 750 kg ή όχημα B με ρυμουλκούμενο άνω των 3.500 kg, με μέγιστη μάζα συνόλου 12.000 kg.',
    source: 'https://drivingschool.gr/diplomata/diploma-ntalikas_c1e.htm',
  },
  {
    slug: 'c-fortigo',
    title: 'Κατηγορία C — Φορτηγό',
    description: 'Φορτηγά με μέγιστη επιτρεπόμενη μάζα άνω των 3.500 kg.',
    details:
      'Η κατηγορία C αφορά βαρύτερα φορτηγά. Η ανάγκη για Π.Ε.Ι. εξαρτάται από τη χρήση του οχήματος.',
    source: 'https://drivingschool.gr/diplomata/diploma-fortigou_c.htm',
  },
  {
    slug: 'd1-leoforeio',
    title: 'Κατηγορία D1 — Μικρό λεωφορείο',
    description: 'Λεωφορεία έως 16 επιβάτες εκτός του οδηγού και μήκους έως 8 μέτρα.',
    details: 'Οι προϋποθέσεις και η εκπαίδευση εξαρτώνται από την άδεια που ήδη κατέχεις.',
    source: 'https://drivingschool.gr/diplomata/diploma-leoforeiou_d1.htm',
  },
  {
    slug: 'd1e-leoforeio',
    title: 'Κατηγορία D1E — Λεωφορείο με ρυμουλκούμενο',
    description: 'Σύνολο οχήματος κατηγορίας D1 με ρυμουλκούμενο άνω των 750 kg.',
    details:
      'Επικοινώνησε μαζί μας για τις προϋποθέσεις επέκτασης και τα απαιτούμενα δικαιολογητικά.',
    source: 'https://drivingschool.gr/diplomata/diploma-bus_d1e.htm',
  },
  {
    slug: 'd-leoforeio',
    title: 'Κατηγορία D — Λεωφορείο',
    description: 'Λεωφορεία με περισσότερες από 8 θέσεις επιβατών, πέρα από τη θέση του οδηγού.',
    details: 'Για επαγγελματική μεταφορά επιβατών μπορεί να απαιτείται και Π.Ε.Ι. επιβατών.',
    source: 'https://drivingschool.gr/diplomata/diploma-leoforeiou_d.htm',
  },
  {
    slug: 'de-leoforeio',
    title: 'Κατηγορία DE — Λεωφορείο με ρυμουλκούμενο',
    description: 'Σύνολο οχήματος κατηγορίας D με ρυμουλκούμενο άνω των 750 kg.',
    details:
      'Επικοινώνησε μαζί μας για τις προϋποθέσεις επέκτασης και τα απαιτούμενα δικαιολογητικά.',
    source: 'https://drivingschool.gr/diplomata/diploma-bus_de.htm',
  },
  {
    slug: 'pei',
    title: 'Πιστοποιητικό Επαγγελματικής Ικανότητας (Π.Ε.Ι.)',
    description: 'Το Π.Ε.Ι. αφορά την επαγγελματική οδήγηση για μεταφορά εμπορευμάτων ή επιβατών.',
    details:
      'Διακρίνεται σε Π.Ε.Ι. εμπορευμάτων για τις κατηγορίες C και Π.Ε.Ι. επιβατών για τις κατηγορίες D. Καταχωρίζεται ο κωδικός 95 στην άδεια ή εκδίδεται δελτίο επιμόρφωσης οδηγού. Υπάρχουν εξαιρέσεις ανάλογα με τη χρήση του οχήματος. Για την ανανέωση προβλέπεται περιοδική κατάρτιση ανά πενταετία.',
    source: 'https://drivingschool.gr/diplomata/pei.htm',
  },
  {
    slug: 'pei-emporevmaton',
    title: 'Π.Ε.Ι. μεταφοράς εμπορευμάτων',
    description: 'Αρχική χορήγηση για κατόχους ισχύουσας άδειας C1, C1E, C ή CE.',
    details:
      'Η διαδικασία περιλαμβάνει ηλεκτρονική αίτηση για e-Δελτίο, εξουσιοδότηση σχολής οδηγών και θεωρητικές και πρακτικές εξετάσεις. Τα απαιτούμενα δικαιολογητικά εξαρτώνται από την περίπτωσή σου.',
    source: 'https://drivingschool.gr/diplomata/pei-apo_fortigo.htm',
  },
  {
    slug: 'pei-epivaton',
    title: 'Π.Ε.Ι. μεταφοράς επιβατών',
    description: 'Αρχική χορήγηση για κατόχους ισχύουσας άδειας D1, D1E, D ή DE.',
    details:
      'Η διαδικασία περιλαμβάνει ηλεκτρονική αίτηση για e-Δελτίο, εξουσιοδότηση σχολής οδηγών και θεωρητικές και πρακτικές εξετάσεις. Τα απαιτούμενα δικαιολογητικά εξαρτώνται από την περίπτωσή σου.',
    source: 'https://drivingschool.gr/diplomata/pei-apo_leoforeio.htm',
  },
] as const;
