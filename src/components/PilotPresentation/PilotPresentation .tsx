import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Book,
  PlusSquare,
  Star,
  Brain,
  Cpu,
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

const EngineeringPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Der Beruf des KI/ML-Ingenieurs",
      subtitle: "Eine zukunftsorientierte Karriere in der Programmierung",
      icon: <Brain className="w-16 h-16 text-[#4546ED]" />,
      isTitle: true,
    },
    {
      title: "Gliederung der Präsentation",
      subtitle: "Überblick über die Themen",
      icon: <Book className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Hauptthemen:",
          points: [
            "Was macht ein KI/ML-Ingenieur?",
            "Ausbildung und Qualifikationen",
            "Arbeitsalltag eines KI/ML-Ingenieurs",
            "Karrieremöglichkeiten",
            "Vor- und Nachteile des Berufs",
            "Fazit",
          ],
        },
        {
          title: "Ziele der Präsentation:",
          points: [
            "Einblick in den Beruf des KI/ML-Ingenieurs",
            "Verständnis der Anforderungen",
            "Überblick über Karrierewege",
            "Realistische Einschätzung des Berufs",
          ],
        },
      ],
    },
    {
      title: "Was macht ein KI/ML-Ingenieur?",
      subtitle: "Hauptverantwortlichkeiten",
      icon: <Cpu className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Forschung und Entwicklung:",
          points: [
            "Entwicklung von Algorithmen und Modellen",
            "Training und Optimierung von neuronalen Netzen",
            "Datenanalyse und -vorverarbeitung",
            "Implementierung von Machine Learning-Lösungen",
          ],
        },
        {
          title: "Praktische Anwendung:",
          points: [
            "Integration von KI-Lösungen in bestehende Systeme",
            "Überwachung der Modellleistung",
            "Fehlerbehebung und Debugging",
            "Zusammenarbeit mit Produktteams und Stakeholdern",
          ],
        },
      ],
    },
    {
      title: "Ausbildung und Qualifikationen",
      subtitle: "Der Weg zum KI/ML-Ingenieur",
      icon: <Book className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Voraussetzungen:",
          points: [
            "Studium in Informatik, Mathematik oder verwandten Fächern",
            "Solide Programmierkenntnisse (Python, R, Java)",
            "Gute mathematische Grundlagen (Statistik, lineare Algebra)",
            "Verständnis von Datenstrukturen und Algorithmen",
          ],
        },
        {
          title: "Zusätzliche Qualifikationen:",
          points: [
            "Kurse und Zertifikate in Machine Learning",
            "Praktische Erfahrung mit ML-Frameworks (TensorFlow, PyTorch)",
            "Selbstständige Projekte und Forschungsarbeiten",
            "Kontinuierliche Weiterbildung in neuen Technologien",
          ],
        },
      ],
    },
    {
      title: "Arbeitsalltag",
      subtitle: "Ein Tag im Leben eines KI/ML-Ingenieurs",
      icon: <Code className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Typischer Tagesablauf:",
          points: [
            "Überprüfung der Modellleistung und Metriken",
            "Programmieren und Debugging von Algorithmen",
            "Experimentieren mit neuen Ansätzen und Modellen",
            "Teilnahme an Team-Meetings und Code-Reviews",
          ],
        },
        {
          title: "Arbeitsumgebung:",
          points: [
            "Moderne Büros mit leistungsstarker Hardware",
            "Flexible Arbeitszeiten und Remote-Arbeit",
            "Kollaborative Teamarbeit und agile Entwicklung",
            "Kontinuierliches Lernen und Wissensaustausch",
          ],
        },
      ],
    },
    {
      title: "Karrieremöglichkeiten",
      subtitle: "Entwicklung und Perspektiven",
      icon: <Star className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Aufstiegschancen:",
          points: [
            "Junior ML Engineer → Senior ML Engineer",
            "Senior ML Engineer → ML Architect",
            "ML Architect → Chief AI Officer",
            "Spezialisierung in bestimmten Bereichen (Computer Vision, NLP)",
          ],
        },
        {
          title: "Gehaltsentwicklung:",
          points: [
            "Einstiegsgehalt: 60.000-80.000€/Jahr",
            "Senior Level: 90.000-120.000€/Jahr",
            "Lead/Architect: 120.000-150.000€/Jahr",
            "Zusätzliche Boni und Aktienoptionen möglich",
          ],
        },
      ],
    },
    {
      title: "Vor- und Nachteile",
      subtitle: "Eine realistische Einschätzung",
      icon: <PlusSquare className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Vorteile:",
          points: [
            "Arbeit an zukunftsweisenden Technologien",
            "Überdurchschnittliches Gehalt und Jobsicherheit",
            "Kreative und intellektuell anspruchsvolle Arbeit",
            "Globale Jobmöglichkeiten und Remote-Arbeit",
          ],
        },
        {
          title: "Herausforderungen:",
          points: [
            "Schnelle technologische Veränderungen erfordern ständiges Lernen",
            "Komplexe Probleme und hohe Erwartungen",
            "Ethische Fragen und gesellschaftliche Auswirkungen",
            "Lange Arbeit an Projekten ohne garantierten Erfolg",
          ],
        },
      ],
    },
    {
      title: "Fazit",
      subtitle: "Zusammenfassung und persönliche Einschätzung",
      icon: <Star className="w-12 h-12 text-[#4546ED] mb-4" />,
      content: [
        {
          title: "Zusammenfassung:",
          points: [
            "Innovativer und zukunftsorientierter Beruf",
            "Solide mathematische und programmiertechnische Grundlagen nötig",
            "Ausgezeichnete Karriere- und Wachstumschancen",
            "Hohe Nachfrage auf dem Arbeitsmarkt",
          ],
        },
        {
          title: "Persönliche Anforderungen:",
          points: [
            "Leidenschaft für Technologie und kontinuierliches Lernen",
            "Analytisches Denken und Problemlösungsfähigkeiten",
            "Kreativität und Innovationsbereitschaft",
            "Geduld und Ausdauer bei komplexen Herausforderungen",
          ],
        },
      ],
    },
    {
      title: "Vielen Dank für Ihre Aufmerksamkeit!",
      subtitle: "Haben Sie noch Fragen?",
      icon: <Brain className="w-16 h-16 text-[#4546ED] animate-pulse" />,
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
      <Link
        to={"/content"}
        className="block absolute top-4 right-4 md:top-8 md:right-8 bg-white p-2 rounded-lg shadow-lg"
      >
        <QRCodeSVG
          value={window.location.href + "/content"}
          className="w-12 h-12"
        />
      </Link>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-4 md:p-8 mb-4 md:mb-8">
        {slides[currentSlide].isTitle || slides[currentSlide].isEnding ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px] text-center">
            {slides[currentSlide].icon}
            <h1 className="text-3xl md:text-5xl font-bold text-[#4546ED] mt-4 md:mt-8 mb-2 md:mb-4">
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
                  <p className="text-3xl md:text-4xl font-bold text-[#4546ED]">
                    {slides[currentSlide].content[0].points[0]}
                  </p>
                  <div className="mt-4 md:mt-8 flex space-x-4">
                    <div className="w-3 h-3 bg-[#4546ED] rounded-full animate-bounce delay-0"></div>
                    <div className="w-3 h-3 bg-[#4546ED] rounded-full animate-bounce delay-150"></div>
                    <div className="w-3 h-3 bg-[#4546ED] rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              ) : (
                <img
                  src="/ai1.jpg"
                  alt="KI-Programmierung"
                  className="rounded-lg object-cover max-w-full h-full"
                />
              )}
            </div>
          </div>
        ) : (
          <div className="min-h-[400px] md:min-h-[600px]">
            <div className="text-center mb-4 md:mb-8">
              {slides[currentSlide].icon}
              <h2 className="text-2xl md:text-4xl font-bold text-[#4546ED] mb-2">
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
                            <div className="w-2 h-2 bg-[#4546ED] rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
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
            className="p-2 md:p-3 rounded-full bg-[#4546ED] text-white hover:bg-blue-600 transition-all transform hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-sm md:text-base text-gray-600 font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full bg-[#4546ED] text-white hover:bg-blue-600 transition-all transform hover:scale-110"
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
                currentSlide === index ? "bg-[#4546ED] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineeringPresentation;
