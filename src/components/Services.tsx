import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  Briefcase,
  ClipboardList,
  CheckCircle,
  AlertTriangle,
  Zap,
  Shield,
  BarChart3,
  Globe,
} from "lucide-react";

export default function Services({ setCalendlyModal, scrollToSection }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [audience, setAudience] = useState("owner"); // "owner" or "vendor"

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: "service-owners-rep",
      icon: Briefcase,
      title: "Owner’s Rep & Advisory",
      teaser: "Vendor-neutral guidance from idea to operation.",
      expanded: {
        whatWeDo:
          "Needs & load profile review; right-sizing; RFP/RFQ specs & scoring; contract sanity check (performance, warranties, penalties); schedule/budget risk register.",
        whatYouGet:
          "2-page Option Brief (Good/Better/Best), weighted vendor scorecard, executive decision memo.",
        timeline: "2–6 weeks depending on scope.",
        outOfScope:
          "PE stamping, detailed design drawings, construction labor.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
    {
      id: "service-compliance",
      icon: ClipboardList,
      title: "Compliance & Certifications",
      teaser: "A clear path to approvals—without surprises.",
      expanded: {
        focus: "Code pathway planning, documentation packs, AHJ alignment.",
        inclusions:
          "Requirements matrix mapped to design/submittals; utility/interconnection paperwork checklist; safety narratives; acceptance test plans; ITC/credit evidence (eligibility, procurement traceability).",
        outputs:
          "Compliance Tracker; AHJ-ready pack (drawings list, narratives, data sheets); close-out binder index.",
        timeline: "3–8 weeks rolling alongside design/installation.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
    {
      id: "service-tdr",
      icon: AlertTriangle,
      title: "Technical Design Review (TDR)",
      teaser: "Catch issues early; de-risk later phases.",
      expanded: {
        scope:
          "One-line, EMS/PCS, protection/coordination, layout, comms, controls, testability.",
        checklist:
          "Sizing vs. use-case; PV/microgrid integration; thermal & serviceability; telemetry points & KPIs.",
        outputs:
          "Red-lined set + Issue Log; prioritized punchlist (Now/Next/Later); 30-min readout.",
        timeline: "1–3 weeks per package.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
    {
      id: "service-commissioning",
      icon: Zap,
      title: "Construction & Commissioning Oversight",
      teaser: "From delivery to energization—keep QA/QC tight.",
      expanded: {
        inclusions:
          "Submittal log & approvals workflow; site checklists (delivery, install, cable, terminations, torque logs); pre-energization reviews; FAT/SAT witness plans.",
        outputs:
          "Rolling punchlist with owners/dates; commissioning summary; acceptance memo.",
        timeline: "Project-dependent; weekly cadence suggested.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
    {
      id: "service-performance",
      icon: BarChart3,
      title: "Performance & O&M",
      teaser: "Protect warranties and keep assets performing.",
      expanded: {
        inclusions:
          "KPI baselines; alert triage; root-cause reviews; warranty guidance & vendor escalations; quarterly performance memos.",
        outputs:
          "Health dashboard template; RCA notes + corrective actions.",
        timeline: "Monthly/quarterly.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
    {
      id: "service-risk",
      icon: Shield,
      title: "Risk & Safety",
      teaser: "Foresee hazards. Plan mitigations that stick.",
      expanded: {
        inclusions:
          "Hazard ID & risk register; work procedure alignment (LOTO touchpoints); emergency response coordination.",
        outputs:
          "Risk register with owners/timelines; training outline for site staff.",
        timeline: "2–4 weeks to baseline; updates as needed.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
    {
      id: "brag-tech",
      icon: Globe,
      title: "Market Access — Brag Tech",
      teaser: "Build signal. Reach the right partners.",
      expanded: {
        whatItIs: "PR + outreach + profile building—purpose-built for BESS.",
        vendor: [
          "Press outreach & PR: Targeted editor pitches and industry newsletters.",
          "Directory placement: Inclusion in curated BESS Strategies network.",
          "Signal boosting: Thought-starter angles, brief quotes, op-eds.",
          "Partner matchmaking: Warm intros where fit and timing align.",
        ],
        owner: [
          "Buyer’s spotlight: Feature your (non-confidential) intent.",
          "Project visibility: Updates to attract support and partners.",
          "Briefing notes: You bring the vision; we shape a media-ready one-pager.",
        ],
        outputs:
          "Media brief + outreach list; directory profile; quarterly visibility plan.",
        note: "We do not publish case studies yet. Brag Tech focuses on clear, verifiable facts.",
        membership:
          "Vendor memberships start at $2,500/year — see Membership Tiers.",
      },
      cta: { label: "Apply to Brag Tech", action: () => scrollToSection("contact") },
      audience: "vendor",
    },
    {
      id: "packages",
      icon: CheckCircle,
      title: "Advisory Packages",
      teaser: "Flexible packages to match project stage.",
      expanded: {
        starter: "Starter (4–6 weeks): One focus area. Fixed-scope deliverables.",
        pro: "Pro (8–12 weeks): Advisory + one additional workstream.",
        custom:
          "Custom: Multi-site or complex programs; executive reporting cadence.",
      },
      cta: { label: "Book a 20-min fit call", action: () => setCalendlyModal(true) },
      audience: "owner",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Our <span className="text-orange-500">Expert Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click any service to see deliverables. Switch between Site Owner and Vendor language at the top.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setAudience("owner")}
            className={`px-6 py-2 rounded-full font-semibold ${
              audience === "owner"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            I’m a Site Owner
          </button>
          <button
            onClick={() => setAudience("vendor")}
            className={`px-6 py-2 rounded-full font-semibold ${
              audience === "vendor"
                ? "bg-purple-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            I’m a Vendor
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {services
            .filter(
              (s) =>
                s.audience === audience ||
                s.id === "brag-tech" || // special case: shows both
                s.id === "packages" // packages relevant to owners but always useful
            )
            .map((service, index) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-xl shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-6 w-6 text-orange-500" />
                    <h3 className="text-xl font-semibold text-purple-700">
                      {service.title}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700 space-y-4">
                    <p className="italic text-gray-600">{service.teaser}</p>
                    {service.expanded.whatWeDo && (
                      <p>
                        <strong>What we do:</strong> {service.expanded.whatWeDo}
                      </p>
                    )}
                    {service.expanded.focus && (
                      <p>
                        <strong>Focus:</strong> {service.expanded.focus}
                      </p>
                    )}
                    {service.expanded.inclusions && (
                      <p>
                        <strong>Inclusions:</strong> {service.expanded.inclusions}
                      </p>
                    )}
                    {service.expanded.checklist && (
                      <p>
                        <strong>Checklist:</strong> {service.expanded.checklist}
                      </p>
                    )}
                    {service.expanded.outputs && (
                      <p>
                        <strong>Outputs:</strong> {service.expanded.outputs}
                      </p>
                    )}
                    {service.expanded.timeline && (
                      <p>
                        <strong>Timeline:</strong> {service.expanded.timeline}
                      </p>
                    )}
                    {service.expanded.note && (
                      <p className="text-sm italic text-gray-500">
                        {service.expanded.note}
                      </p>
                    )}
                    {service.expanded.membership && (
                      <p className="text-sm text-gray-600">
                        {service.expanded.membership}
                      </p>
                    )}
                    {/* Vendor/Owner split for Brag Tech */}
                    {service.id === "brag-tech" && (
                      <>
                        {audience === "vendor" ? (
                          <ul className="list-disc pl-6 space-y-1">
                            {service.expanded.vendor.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="list-disc pl-6 space-y-1">
                            {service.expanded.owner.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                    {/* CTA */}
                    <div className="pt-4">
                      <button
                        onClick={service.cta.action}
                        className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                      >
                        {service.cta.label}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
