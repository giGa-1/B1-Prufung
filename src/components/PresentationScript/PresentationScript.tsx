const PresentationScript = () => {
  const sections = [
    {
      title: "Einleitung",
      text: `Guten Tag!

Mein Name ist Hlib Podhorniuk, ich bin Schüler der BVJA Klasse 32. Heute möchte ich Ihnen den Beruf des KI/ML-Ingenieurs vorstellen. Als Entwickler träume ich davon, ein KI/ML-Ingenieur zu werden. Künstliche Intelligenz und maschinelles Lernen sind sehr spannende Bereiche der Informatik und verändern unsere Welt jeden Tag.
      
Ich freue mich, Ihnen diesen modernen und zukunftsorientierten Beruf näher zu bringen.`,
    },
    {
      title: "Was macht ein KI/ML-Ingenieur?",
      text: `Ein KI/ML-Ingenieur entwickelt Algorithmen und Modelle für künstliche Intelligenz. Er arbeitet mit großen Datenmengen und trainiert Computer, damit sie selbst lernen können.

Zu den täglichen Aufgaben gehört die Programmierung von Algorithmen, die Analyse von Daten und das Training von neuronalen Netzen. Der Ingenieur muss auch bestehende Modelle verbessern und mit anderen Teams zusammenarbeiten.

KI/ML-Ingenieure arbeiten in vielen Bereichen wie Gesundheit, Finanzen, Robotik oder auch in der Spracherkennung. Sie lösen komplexe Probleme mit Hilfe von Computern.`,
    },
    {
      title: "Ausbildung",
      text: `Um KI/ML-Ingenieur zu werden, braucht man eine gute Ausbildung. Die meisten haben einen Hochschulabschluss in Informatik, Mathematik oder einem ähnlichen Fach.

Besonders wichtig sind gute Programmierkenntnisse, vor allem in Python oder R. Man muss auch Mathematik gut verstehen, besonders Statistik und lineare Algebra.

Viele KI/ML-Ingenieure bilden sich ständig weiter mit Kursen und Zertifikaten. Man kann auch eigene Projekte bauen, um praktische Erfahrung zu sammeln. Das lebenslange Lernen ist in diesem Beruf sehr wichtig, weil sich die Technologie schnell ändert.`,
    },
    {
      title: "Arbeitsalltag",
      text: `Der Arbeitstag eines KI/ML-Ingenieurs beginnt oft mit der Überprüfung seiner Modelle und Algorithmen. Er schaut, ob alles gut funktioniert und sucht nach Verbesserungsmöglichkeiten.

Ein großer Teil des Tages wird mit Programmieren und Testen verbracht. Man arbeitet an Algorithmen, analysiert Daten und sucht nach Fehlern im Code.

KI/ML-Ingenieure arbeiten meistens in modernen Büros mit guten Computern. Viele können auch von zu Hause arbeiten. Die Arbeitszeiten sind oft flexibel, und man arbeitet fast immer im Team mit anderen Experten zusammen.`,
    },
    {
      title: "Karriere und Gehalt",
      text: `Die Karriere beginnt als Junior ML Engineer. Mit mehr Erfahrung kann man zum Senior ML Engineer und später zum ML Architect aufsteigen. Einige werden sogar Chief AI Officer in großen Unternehmen.

Das Gehalt ist sehr gut: Am Anfang verdient man etwa 60.000 bis 80.000 Euro pro Jahr. Erfahrene Ingenieure können 90.000 bis 120.000 Euro verdienen, und in höheren Positionen sogar bis zu 150.000 Euro.

Es gibt viele Jobmöglichkeiten weltweit, weil KI und ML in allen Branchen immer wichtiger werden. Der Arbeitsmarkt wächst sehr schnell in diesem Bereich.`,
    },
    {
      title: "Vor- und Nachteile",
      text: `Der Beruf hat viele Vorteile: Man verdient gut und hat eine sichere Zukunft. Die Arbeit ist kreativ und intellektuell anspruchsvoll. Man kann oft von zu Hause arbeiten und hat weltweit Jobmöglichkeiten.

Es gibt aber auch Herausforderungen: Man muss ständig Neues lernen, weil sich die Technologie schnell ändert. Die Probleme sind oft komplex und schwierig. Manchmal arbeitet man lange an Projekten ohne garantierten Erfolg.

Als KI/ML-Ingenieur muss man auch über ethische Fragen nachdenken, denn KI-Systeme haben große Auswirkungen auf die Gesellschaft.`,
    },
    {
      title: "Fazit",
      text: `Zusammenfassend kann ich sagen, dass der Beruf des KI/ML-Ingenieurs sehr zukunftsorientiert ist. Er bietet gute Karrierechancen und ein hohes Gehalt. Die Arbeit ist spannend und abwechslungsreich.

Man braucht gute Kenntnisse in Mathematik und Programmierung. Außerdem muss man gerne lernen und kreativ sein. Für mich ist es ein Traumberuf, weil ich die Zukunft der Technologie mitgestalten möchte.

Vielen Dank für Ihre Aufmerksamkeit! Haben Sie noch Fragen?`,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        Präsentationstext: Der Beruf des KI/ML-Ingenieurs
      </h1>
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
              {section.title}
            </h2>
            <div className="text-gray-700 whitespace-pre-line">
              {section.text}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Ungefähre Sprechzeit:{" "}
              {Math.ceil(section.text.split(" ").length / 150 * 60)} Sekunden
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationScript;
