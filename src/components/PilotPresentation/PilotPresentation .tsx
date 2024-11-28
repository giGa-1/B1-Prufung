import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plane,
  Book,
  Briefcase,
  PlusSquare,
  Shield,
  Star,
} from "lucide-react";

const PilotPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Der Beruf des Piloten",
      subtitle: "Eine faszinierende Karriere in der Luftfahrt",
      icon: <Plane className="w-16 h-16 text-blue-500" />,
      isTitle: true,
    },
    {
      title: "Gliederung der Präsentation",
      subtitle: "Überblick über die Themen",
      icon: <Book className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Hauptthemen:",
          points: [
            "Was macht ein Pilot?",
            "Ausbildung und Qualifikationen",
            "Arbeitsalltag eines Piloten",
            "Karrieremöglichkeiten",
            "Vor- und Nachteile des Berufs",
            "Fazit",
          ],
        },
        {
          title: "Ziele der Präsentation:",
          points: [
            "Einblick in den Beruf des Piloten",
            "Verständnis der Anforderungen",
            "Überblick über Karrierewege",
            "Realistische Einschätzung des Berufs",
          ],
        },
      ],
    },
    {
      title: "Was macht ein Pilot?",
      subtitle: "Hauptverantwortlichkeiten",
      icon: <Briefcase className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Flugvorbereitung:",
          points: [
            "Wetterbericht analysieren",
            "Flugroute planen",
            "Treibstoffberechnung durchführen",
            "Technische Kontrollen",
          ],
        },
        {
          title: "Während des Fluges:",
          points: [
            "Steuerung des Flugzeugs",
            "Kommunikation mit der Flugsicherung",
            "Überwachung aller Systeme",
            "Koordination mit der Crew",
          ],
        },
      ],
    },
    {
      title: "Ausbildung und Qualifikationen",
      subtitle: "Der Weg zum Piloten",
      icon: <Book className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Voraussetzungen:",
          points: [
            "Mindestalter: 17 Jahre",
            "Abitur oder gleichwertiger Abschluss",
            "Sehr gute Englischkenntnisse (mind. B2)",
            "Einwandfreier Gesundheitszustand",
          ],
        },
        {
          title: "Ausbildungsdauer:",
          points: [
            "Theoretische Ausbildung: 12-14 Monate",
            "Praktische Ausbildung: 12-18 Monate",
            "Simulator-Training: 200+ Stunden",
            "Mindestflugstunden: 1500",
          ],
        },
      ],
    },
    {
      title: "Arbeitsalltag",
      subtitle: "Ein Tag im Leben eines Piloten",
      icon: <Shield className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Typischer Tagesablauf:",
          points: [
            "Briefing 60-90 Minuten vor Abflug",
            "Überprüfung der Wetterbedingungen",
            "Durchführung der Sicherheitschecks",
            "3-4 Flüge pro Arbeitstag",
          ],
        },
        {
          title: "Arbeitszeiten:",
          points: [
            "Maximale Flugzeit: 900 Stunden/Jahr",
            "Flexible Dienstpläne",
            "Wechselnde Tag- und Nachtschichten",
            "10-15 Arbeitstage pro Monat",
          ],
        },
      ],
    },
    {
      title: "Karrieremöglichkeiten",
      subtitle: "Entwicklung und Perspektiven",
      icon: <Star className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Aufstiegschancen:",
          points: [
            "First Officer → Senior First Officer",
            "Senior First Officer → Captain",
            "Captain → Fleet Captain",
            "Möglichkeit als Ausbilder zu arbeiten",
          ],
        },
        {
          title: "Gehaltsentwicklung:",
          points: [
            "Einstiegsgehalt: 45.000-60.000€/Jahr",
            "First Officer: 60.000-80.000€/Jahr",
            "Captain: 100.000-150.000€/Jahr",
            "Zusätzliche Bonuszahlungen möglich",
          ],
        },
      ],
    },
    {
      title: "Vor- und Nachteile",
      subtitle: "Eine realistische Einschätzung",
      icon: <PlusSquare className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Vorteile:",
          points: [
            "Überdurchschnittliches Gehalt",
            "Internationale Arbeitsumgebung",
            "Hoher gesellschaftlicher Status",
            "Möglichkeit, die Welt zu bereisen",
          ],
        },
        {
          title: "Herausforderungen:",
          points: [
            "Unregelmäßige Arbeitszeiten",
            "Hohe Verantwortung",
            "Häufige Abwesenheit von zuhause",
            "Strenge medizinische Anforderungen",
          ],
        },
      ],
    },
    {
      title: "Fazit",
      subtitle: "Zusammenfassung und persönliche Einschätzung",
      icon: <Star className="w-12 h-12 text-blue-500 mb-4" />,
      content: [
        {
          title: "Zusammenfassung:",
          points: [
            "Anspruchsvoller und verantwortungsvoller Beruf",
            "Intensive Ausbildung erforderlich",
            "Sehr gute Karrierechancen",
            "Überdurchschnittliche Verdienstmöglichkeiten",
          ],
        },
        {
          title: "Persönliche Anforderungen:",
          points: [
            "Hohe Stressresistenz und Konzentrationsfähigkeit",
            "Technisches Verständnis und schnelle Auffassungsgabe",
            "Teamfähigkeit und Kommunikationsstärke",
            "Bereitschaft zu unregelmäßigen Arbeitszeiten",
          ],
        },
      ],
    },
    {
      title: "Vielen Dank für Ihre Aufmerksamkeit!",
      subtitle: "Haben Sie noch Fragen?",
      icon: <Star className="w-16 h-16 text-blue-500 animate-pulse" />,
      isEnding: true,
      content: [
        {
          title: "Präsentation erstellt von:",
          points: ["Hlib Podhorniuk"],
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-4 md:p-8 mb-4 md:mb-8">
        {slides[currentSlide].isTitle || slides[currentSlide].isEnding ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px] text-center">
            {slides[currentSlide].icon}
            <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mt-4 md:mt-8 mb-2 md:mb-4">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-12">
              {slides[currentSlide].subtitle}
            </h2>
            <div className="w-full h-48 md:h-64 rounded-lg flex items-center justify-center text-gray-600">
              {slides[currentSlide].isEnding ? (
                <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
                  <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4 md:mt-8">
                    Präsentation erstellt von:
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">
                    Hlib Podhorniuk
                  </p>
                  <div className="mt-4 md:mt-8 flex space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-0"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              ) : (
                <img
                  src="/pilot.jpg"
                  alt="Flugzeugcockpit"
                  className="rounded-lg object-cover max-w-full h-full"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="min-h-[400px] md:min-h-[600px]">
            <div className="text-center mb-4 md:mb-8">
              {slides[currentSlide].icon}
              <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {slides[currentSlide].content
                ? slides[currentSlide].content.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 md:p-6 rounded-lg">
                      <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        {section.points.map((point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="flex items-center text-sm md:text-base text-gray-700"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                : null}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 pb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all transform hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-sm md:text-base text-gray-600 font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all transform hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex gap-2 md:gap-3 flex-wrap justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors transform hover:scale-125 ${
                currentSlide === index ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PilotPresentation;
