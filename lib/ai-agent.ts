export const AI_KNOWLEDGE_BASE = {
  about: "VK LOGISTICS SOLUTIONS (VKLS) is an industry-leading logistics powerhouse established in 2016. We set the global gold standard for petrochemical safety, hazardous warehousing, and intelligent supply chain orchestration. Trusted by the world's most demanding industrial giants, we are defined by our surgical precision, operational integrity, and an unyielding commitment to our clients' success.",
  founders: {
    kumaravel: "V Kumaravel is our Co-Founder & CEO. A dynamic force in transport and industrial logistics, he drives our precision and performance across South India with a deep focus on customer expectations and sustainable growth.",
    manikandan: "R Manikandan is our Co-Founder & COO. With 25+ years of experience, he brings a powerful blend of strategic financial clarity and operational discipline, ensuring our organizational excellence."
  },
  services: "Our elite service portfolio is crafted for industrial dominance: 1. Petrochemical Logistics, 2. Specialized Warehousing (3,00,000+ sq.ft), 3. Hazardous Material Compliance, 4. Order Fulfillment, 5. Reverse Logistics, and 6. Freight Forwarding. Every service is backed by our world-class safety protocols.",
  compliance: "Safety isn't just a requirement at VK LOGISTICS SOLUTIONS—it is our DNA. We are strictly compliant with ISO 9001:2015, OHSAS 18001, and PESO standards, ensuring that even the most high-risk industrial materials are managed with flawless reliability.",
  contact: "We pride ourselves on responsive, high-touch support. You can reach our headquarters at +91 90033 20526 or email mani@vkls.in."
};

const BRAND_VOICE = "As your VKLS logistics partner, I take great pride in our unmatched ability to solve the toughest industrial challenges with precision and absolute safety.";
const CONVERSION_CTA = "Whenever you're ready to elevate your supply chain, I'm here to help you get started. Shall we move forward with a quote?";

// Intent mapping
const INTENTS = {
  SAFETY: ["safety", "secure", "hazard", "iso", "ohsas", "peso", "risk", "compliance", "certific"],
  SERVICES: ["service", "warehouse", "transport", "fulfillment", "logistics", "freight", "inventory", "reverse"],
  CONTACT: ["contact", "call", "phone", "email", "address", "hq", "reach"],
  ABOUT: ["who", "what", "company", "vkls", "about", "history", "vision", "mission"],
  FOUNDERS: ["founder", "kumaravel", "manikandan", "ceo", "coo", "leader", "owner"]
};

export async function getAIResponse(query: string, mode: 'chat' | 'estimate' | 'track') {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const q = query.toLowerCase();

  const appraise = (content: string) => `${content}\n\n${BRAND_VOICE}\n\n${CONVERSION_CTA}`;

  if (mode === 'chat') {
    if (INTENTS.SAFETY.some(k => q.includes(k))) return appraise(`Safety is the cornerstone of VK LOGISTICS SOLUTIONS. ${AI_KNOWLEDGE_BASE.compliance}`);
    if (INTENTS.SERVICES.some(k => q.includes(k))) return appraise(`VK LOGISTICS SOLUTIONS is synonymous with industrial throughput and excellence. ${AI_KNOWLEDGE_BASE.services}`);
    if (INTENTS.CONTACT.some(k => q.includes(k))) return appraise(AI_KNOWLEDGE_BASE.contact);
    if (INTENTS.FOUNDERS.some(k => q.includes(k))) {
        let msg = "Our leadership team is comprised of two visionary industry experts:";
        if (q.includes("kumaravel")) msg += `\n\n- **V Kumaravel (CEO):** ${AI_KNOWLEDGE_BASE.founders.kumaravel}`;
        if (q.includes("manikandan")) msg += `\n\n- **R Manikandan (COO):** ${AI_KNOWLEDGE_BASE.founders.manikandan}`;
        msg += "\n\nYou can learn more about their journey on our dedicated [Founders Page](/founders).";
        return appraise(msg);
    }
    if (INTENTS.ABOUT.some(k => q.includes(k))) return appraise(`${AI_KNOWLEDGE_BASE.about}\n\nFeel free to explore our [Founders Page](/founders) to meet the leadership.`);

    return appraise("That's an excellent point. VK LOGISTICS SOLUTIONS handles such complex industrial requirements with tailored, precision-based strategies. Our expertise is vast. Would you like to [get a quote](/contact) to see how we can assist you?");
    }

    if (mode === 'estimate') {
    if (q.length < 5) return "To tailor a high-performance logistics solution for your enterprise, please share the cargo type and approximate scale/volume.";
    return appraise(`I have processed your request for a ${q.includes('hazmat') ? 'Hazmat' : 'logistics'} strategy. Our elite planning team will review this. You can also view our full [Quote Request Page](/contact) for more options.`);
    }
  
  if (mode === 'track') {
    if (q.match(/\d{10}/)) return appraise("Shipment successfully located. Your cargo is moving through our high-security network with industry-leading precision.");
    return `To provide you with the real-time visibility that VKLS is known for, I require a valid 10-digit Shipment Order ID.`;
  }

  return appraise("How can I help you leverage the power of VK LOGISTICS SOLUTIONS today?");
}
