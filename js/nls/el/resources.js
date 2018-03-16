/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "map": {
    "error": "Δεν είναι δυνατή η δημιουργία χάρτη"
  },
  "nav": {
    "close": "Κλείσιμο"
  },
  "basemap": {
    "title": "Συλλογή υποβάθρων"
  },
  "operationalLayers": {
    "title": "Επιχειρησιακά θεματικά επίπεδα",
    "error": "Δεν υπάρχουν λειτουργικά επίπεδα στον χάρτη."
  },
  "layerSelector": {
    "active": "Ενεργό θεματικό επίπεδο",
    "comparison": "Θεματικό επίπεδο σύγκρισης",
    "other": "Άλλο",
    "result": "Αποτέλεσμα",
    "title": "Επιλογέας θεματικού επιπέδου",
    "resultSave": "Προσθήκη του Εξαγόμενου θεματικού επιπέδου αποτελεσμάτων στη λίστα σύγκρισης θεματικών επιπέδων",
    "copy": "Αντιγράψτε το ενεργό θεματικό επίπεδο στο θεματικό επίπεδο σύγκρισης.",
    "swap": "Εναλλάξτε το ενεργό θεματικό επίπεδο με το θεματικό επίπεδο σύγκρισης."
  },
  "renderer": {
    "title": "Απεικόνιση",
    "stretch": "Παράμετροι παραμόρφωσης",
    "stretchType": "Τύπος παραμόρφωσης",
    "dra": "DRA",
    "draText": "Βελτίωση ενημερώσεων ρύθμισης δυναμικής περιοχής με βάση την τρέχουσα προβολή",
    "gamma": "Γάμμα",
    "apply": "Εφαρμογή",
    "top": "Εξαίρεση επάνω πλευράς",
    "bottom": "Εξαίρεση κάτω πλευράς",
    "topText": " Εξαίρεση επάνω πλευράς x ποσοστό ιστογράμματος",
    "bottomText": " Εξαίρεση κάτω πλευράς x ποσοστό ιστογράμματος",
    "stdDev": "# τυπ. απόκλ.",
    "layer": "Τρέχον θεματικό επίπεδο",
    "error": "Δεν υπάρχουν ορατά Imagery Layer στον χάρτη."
  },
  "imageSelector": {
    "title": "Εργαλείο επιλογής εικόνων",
    "enable": "Ενεργοποίηση Eργαλείου επιλογής εικόνων",
    "secondary": "Ενεργοποίηση Εργαλείου επιλογής εικόνων",
    "dropDown": "Εμφάνιση εικόνων σε πτυσσόμενη λίστα.",
    "refresh": "Ανανέωση ερωτήματος με βάση την τρέχουσα έκταση.",
    "show": "Εμφάνιση",
    "age": "Ηλικία",
    "zoom": "Μεγέθυνση σε επιλεγμένες εικόνες.",
    "error": "Δεν υπάρχουν ορατά Imagery Layer στον χάρτη.",
    "error1": "Το πεδίο δεν έχει καθοριστεί.",
    "error2": "Δεν υπάρχει πεδίο «OBJECTID».",
    "error3": "Δεν υπάρχει πεδίο «Κατηγορία».",
    "error4": "Δεν είναι δυνατή η εκτέλεση της ενέργειας για το θεματικό επίπεδο αυτό.",
    "error5": "Δεν υποστηρίζονται υπηρεσίες για εκδόσεις προγενέστερες της 10.2.1.",
    "error6": "Δεν υπάρχουν Προβολές 3D στην τρέχουσα έκταση.",
    "error7": "Έχετε επιλέξει περισσότερα από 20 αποτυπώματα. Θα παρουσιαστούν μόνο τα πρώτα 20. Πιέστε την επιλογή «OK» για να μην εμφανιστεί ξανά η προειδοποίηση.",
    "slider": "Εμφάνιση εικόνων στην μπάρα κύλισης."
  },
  "changeDetection": {
    "title": "Ανίχνευση αλλαγών",
    "mode": "Λειτουργία",
    "method": "Μέθοδος",
    "positive": "Θετική διαφορά",
    "negative": "Αρνητική διαφορά",
    "threshold": "Κατώφλιο",
    "difference": "Διαφορά",
    "apply": "Εφαρμογή",
    "error": "Η επιλογή «Ανίχνευση αλλαγών» χρησιμεύει για δύο εικόνες διαφορετικών ημερομηνιών από την ίδια υπηρεσία.<br />Χρησιμοποιήστε πρώτα τον Επιλογέα εικόνων για να καθορίσετε τη μία εικόνα<br />και ύστερα κάντε κλικ στο κουμπί <img src='images/down.png' height='14'/> και επιλέξτε τη δεύτερη εικόνα.<br />Επιστρέψτε στο ίδιο κουμπί ρύθμισης για να προχωρήσετε στην ανίχνευση αλλαγών."
  },
  "editor": {
    "title": "Εργαλείο επεξεργασίας",
    "error": "Δεν έχει επιλεχθεί Θεματικό επίπεδο επεξεργασίας.",
    "error1": "Η πρόσβαση δεν έγινε δεκτή. Δεν είναι δυνατή η επεξεργασία θεματικών επιπέδων."
  },
  "measurement": {
    "title": "Μέτρηση εικόνας",
    "error": "Δεν υποστηρίζονται Δυνατότητες μέτρησης."
  },
  "export": {
    "title": "Εξαγωγή",
    "mode": "Λειτουργία",
    "titleText": "Τίτλος",
    "description": "Περιγραφή",
    "tags": "Ετικέτες",
    "submit": "Υποβολή",
    "pixel": "Μέγεθος εικονοψηφίδων",
    "outsr": "Χωρική αναφορά εξόδου",
    "renderer": "Τρέχουσα απόδοση",
    "extent": "Ορισμός έκτασης",
    "text": "Αν επιλεχθεί η δυνατότητα «Τρέχουσα απόδοση», <br />εξάγεται η απόδοση ενώ αλλιώς<br/>θα εξαχθούν οι αρχικές τιμές των δεδομένων.",
    "error": "Δεν υπάρχουν ορατά Imagery Layer στον χάρτη.",
    "error1": "Απαιτείται τίτλος.",
    "error2": "Απαιτούνται ετικέτες."
  },
  "compare": {
    "title": "Σύγκριση",
    "slider": "Μπάρα κύλισης διαφάνειας",
    "hSwipe": "Σάρωση οριζόντια",
    "vSwipe": "Σάρωση κατακόρυφα",
    "error": "Δεν υπάρχουν ορατά Imagery Layer διαθέσιμα για σύγκριση."
  }
});