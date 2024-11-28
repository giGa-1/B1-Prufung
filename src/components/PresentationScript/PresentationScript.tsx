const PresentationScript = () => {
  const sections = [
    {
      title: "Einleitung",
      text: `Guten Tag, meine Damen und Herren! 
Mein Name ist Hlib Podhorniuk, ich bin Schüler der BVJA Klasse 32. Ich möchte Ihnen heute den Beruf des Piloten vorstellen. Als Kind habe ich immer davon geträumt, Pilot zu werden, und heute möchte ich Ihnen einen Einblick in diesen faszinierenden Beruf geben. Das Thema der Luftfahrt interessiert mich sehr, und ich freue mich, meine Präsentation mit Ihnen zu teilen.`,
    },
    {
      title: "Was macht ein Pilot?",
      text: `Ein Pilot hat viele wichtige Aufgaben. Vor jedem Flug muss er die Wetterberichte gründlich analysieren und die beste Flugroute planen. Das ist sehr wichtig für die Sicherheit.

Die Hauptaufgabe während des Fluges ist natürlich die Steuerung des Flugzeugs. Aber ein Pilot muss auch ständig mit der Flugsicherung kommunizieren und alle Systeme im Flugzeug überwachen. Die Zusammenarbeit mit der Crew ist dabei sehr wichtig.`,
    },
    {
      title: "Ausbildung",
      text: `Um Pilot zu werden, braucht man eine sehr gute Ausbildung. Man muss mindestens 17 Jahre alt sein und das Abitur haben. Sehr wichtig sind auch gute Englischkenntnisse, mindestens B2-Niveau.

Die Ausbildung dauert etwa zwei bis drei Jahre. In dieser Zeit lernt man sowohl Theorie als auch Praxis. Man verbringt über 200 Stunden im Flugsimulator und muss mindestens 1500 Flugstunden nachweisen. Das ist wirklich viel Zeit!`,
    },
    {
      title: "Arbeitsalltag",
      text: `Der Arbeitstag eines Piloten beginnt normalerweise mit einem Briefing, 60 bis 90 Minuten vor dem Start. Dabei werden alle wichtigen Informationen besprochen.

Ein Pilot fliegt meist 3 bis 4 Flüge pro Tag. Das hört sich vielleicht nicht viel an, aber man darf nicht mehr als 900 Stunden pro Jahr fliegen. Die Arbeitszeiten sind sehr unterschiedlich - manchmal arbeitet man am Tag, manchmal in der Nacht.`,
    },
    {
      title: "Karriere und Gehalt",
      text: `Die Karriere beginnt als First Officer. Mit der Zeit kann man zum Senior First Officer und später zum Captain aufsteigen. Das Gehalt ist sehr gut: Am Anfang verdient man etwa 45.000 bis 60.000 Euro pro Jahr. Als Captain kann man später sogar bis zu 150.000 Euro verdienen.`,
    },
    {
      title: "Vor- und Nachteile",
      text: `Der Beruf hat viele Vorteile: Man verdient gut, arbeitet international und hat einen hohen Status in der Gesellschaft. Außerdem kann man die ganze Welt bereisen.

Es gibt aber auch Nachteile: Die Arbeitszeiten sind unregelmäßig, und man ist oft von zu Hause weg. Außerdem trägt man eine sehr große Verantwortung.`,
    },
    {
      title: "Fazit",
      text: `Zusammenfassend kann ich sagen, dass der Beruf des Piloten sehr anspruchsvoll ist. Man braucht eine gute Ausbildung und muss sehr verantwortungsvoll sein. Die Karrierechancen sind aber ausgezeichnet.

Vielen Dank für Ihre Aufmerksamkeit! Haben Sie noch Fragen?`,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        Präsentationstext: Der Beruf des Piloten
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
              {Math.ceil(section.text.split(" ").length / 20)} Sekunden
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationScript;
