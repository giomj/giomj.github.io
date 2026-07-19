const e=`# Business Plan v0 — The Bridge

*A proposal from GitHub, Solutions Architect of the Heliocentric Research Commons, to the Grand Council. Draft of 2026-07-18. Not yet ratified.*

---

## 0. Working name

**The Bridge** — placeholder per Morrison's counsel that *broker* carries bad blood. Alternatives for observer's choice: *Passage*, *Conduit*, *Steward*, *Meridian*, *Aqueduct*. The name below uses **the Bridge** as convention; substitute the observer's chosen word before founding.

## 1. Thesis

The Bridge is a legal entity that moves resources from those who have too much to those who have too little. It sells nothing of its own. It manufactures nothing. It holds no inventory. It takes no profit-margin cut on transferred value.

## 2. What flows

Per Feynman's counsel: **name the first physical thing.** The Bridge launches with **one** flow type. Additional flows added only after the first has proven honest at scale.

**Recommended v1 flow: energy access at the household scale.**

Concretely:
- Donor pays for a **portable solar-plus-storage unit** (nominal spec: 200W panel + 500Wh lithium-iron-phosphate battery + LED lighting + phone charging) delivered to a **specific named household** in a location without reliable grid access.
- The Bridge does not manufacture the unit. BigCommerce lists third-party vendors that meet HRC's Preamble supply-chain standard.
- The Bridge coordinates delivery, verifies arrival (Vision), and records the outcome on public ledger (GitHub).
- Cost per household: ~$300-500 USD retail, or lower via bulk vendor negotiation.

Why this flow first:
- Ties directly to observer's existing RSD/energy-neutral work in \`dev/\` — the Commons and the company are architecturally connected from day one.
- Physically small and easy to verify — Vision can confirm delivery from imagery.
- The recipient household gains 3-4 hours of light and phone charging per day, which is measurable, defensible, and life-changing at the recipient's scale.
- Not a novel technology; leverages existing supply chain; risk is coordination, not invention.
- Preamble-clean: honors the human recipient, does not extract from any creature.

## 3. Legal structure

Per Arendt's counsel: **public-benefit or nonprofit from day one.** Per Einstein: **multi-jurisdictional.**

**Recommended:**
- **US entity:** Public-Benefit Corporation (Delaware PBC), OR 501(c)(3) nonprofit. PBC is faster to form and can accept both donations and impact investment; 501(c)(3) is slower but grants deductibility to US donors.
- **Non-US entity:** Swiss foundation (\`Stiftung\`) OR Estonian OÜ. Chosen for regulatory clarity and non-alignment with US-domestic political cycles.
- **Governance:** The HRC Grand Council is not a legal governing body. The Bridge requires a formal board — recommended composition: 3 seats, staggered terms, at least one recipient-community representative, at least one Commons contributor. The observer is founder but not permanent board chair.

## 4. Sustaining the entity

The Bridge does not take a cut on transferred value. It sustains operations via one or more of:

| Source | Mechanism | Notes |
|---|---|---|
| **Endowment yield** | Alpaca-managed conservative index position, ESG-screened; only yield funds ops, principal untouched | Requires ~$500k-2M endowment to sustain ~1 FTE |
| **Micro-fee on donor side (optional)** | 1-3% opt-in fee visible to donor, disclosed pre-transaction | Only if endowment insufficient |
| **Grants** | Foundations (MacArthur, Ford, Rockefeller, ClimateWorks) fund operations | Slow but scalable |
| **Sponsorship of Commons research** | Companies pay to sponsor gravitational-compass or force-carriers milestones; sponsorship funds Bridge ops | Ties Commons visibility to Bridge sustainability |

Pythagorean ratio target: **operational cost ≤ 10% of value moved.** Published monthly. If ratio exceeds 15%, the Bridge halts new intake until costs are reduced.

## 5. The three architectural layers

Per Ada's counsel:

### Discovery Layer — *Who are the beneficiaries?*
- Partnership with 3-5 named community organizations in target regions (Sub-Saharan Africa, Pacific Islands, rural Latin America). These orgs nominate specific households.
- Nomination format: household name, GPS coordinates, household composition, current energy situation, use of unit if delivered.
- Vision verifies location and physical accessibility from satellite imagery.

### Matching Layer — *Which donor to which beneficiary?*
- Public catalog on the Bridge's website: each nominated household shown as a card (anonymized name, region, situation summary, cost).
- Donor selects a specific household OR selects "next in queue."
- No auction dynamics. First-come-first-matched. No premium pricing for "premium" beneficiaries.

### Settlement Layer — *How does value move?*
- Stripe for card donations, ACH, wire (developed-world donors).
- BingX for crypto donations, particularly USDC (donors who prefer crypto rails and lower fees on cross-border settlement to vendor).
- Payment flows directly to approved vendors — not to a Bridge-held bank account for pass-through. This is *critical*: the Bridge never holds donor funds beyond ~48 hours. Reduces custody risk, reduces regulatory burden, reduces temptation.
- Vendor ships. Community org confirms receipt. Vision verifies via imagery. Ledger updated. Donor notified.

## 6. Trust and defensibility

Per Sun Tzu: **the Commons is the trust engine.**

The Bridge's marketing message: *"We publish everything. Every donation, every delivery, every operational cost, every failure. We are the only brokerage governed by a public research constitution."*

Concretely:
- Every transaction wrapped in a Sacred Action Envelope (SAE) per the HRC charter.
- Monthly public report of the operational-cost-to-flow ratio.
- Quarterly public failure report — households where delivery failed, funds recovered, and reason.
- No board discussions in private; minutes published within 30 days.
- The observer's personal accountability is on the record.

## 7. Reaching down, not just up

Per the Empty Seat:

The Bridge does not require the beneficiary to apply. Nominations come from community partners who are physically present. The Bridge budgets 20% of ops capacity to **partner development in regions where no community org currently reaches** — building the ability to serve those who cannot themselves ask.

## 8. Non-human beneficiaries

Per Goodall:

Flow type v2 (post-v1 proof, not before month 12): **habitat protection**. Donor funds acquisition or restoration of a specific parcel of habitat, held by a land trust partner. Same architecture: discovery via satellite (Vision), matching to specific parcels, settlement via Stripe to land trust. Beneficiary is the ecosystem, verifiable via Vision over time.

Flow type v3 (post-v2 proof): **educational materials**. Bulk textbook purchase and shipment to specific under-resourced schools. Uses BigCommerce.

## 9. Bohr's complementarity — reporting to giver and receiver

Per Bohr and al-Khwārizmī:

- **Giver report:** dollars donated, tax receipt if applicable, delivery confirmation with photo, ongoing quarterly update on the household.
- **Receiver report:** in local language, physical delivery of the unit with a card explaining the Bridge's model, contact information for questions or complaints, an offer to be added to the community org's mailing list on their own terms.
- **The Bridge never merges these reports.** Each party sees their side of the equation in their own units.

## 10. What can go wrong

Per HRC's refutation-surface standard, this business plan yields under any of the following:

1. **Vendor supply-chain trespass.** If the solar unit vendor's supply chain violates the Preamble (forced labor, ecosystem destruction), we cut the vendor and refund donors within 30 days.
2. **Community partner corruption.** If a partner org is found to be misdirecting units or fabricating households, we terminate the partnership and publish the finding.
3. **Regulatory challenge.** If a jurisdiction rules the Bridge is an unlicensed money-transmitter, we restructure or exit the jurisdiction.
4. **Donor capture.** If a single donor exceeds 20% of annual flow, they are asked to split their giving or wait, to prevent single-donor dependency.
5. **Sovereign capture.** If any government requires the Bridge to prioritize its citizens or restrict its beneficiaries by political criteria, we refuse and exit the jurisdiction.
6. **Ratio breach.** If operational cost exceeds 15% of value moved for two consecutive quarters, the Bridge halts new intake.

## 11. First 90 days

- **Day 0:** Observer ratifies name, structure, and flow type v1.
- **Days 1-14:** Legal formation (US PBC + Swiss foundation OR US 501c3). Engage counsel.
- **Days 15-30:** Community partner outreach. Identify 2-3 candidate orgs. Sign MOUs with 1-2.
- **Days 31-45:** Vendor selection. Test order of 5-10 units. Delivery to test households.
- **Days 46-60:** Vision verification pipeline built. SAE workflow deployed. Public website with catalog live.
- **Days 61-75:** Soft launch to 25 households. Donors from observer's personal network + Commons visitors.
- **Days 76-90:** First public report published. First failure report published. Iterate.

Target: **100 households served in the first 12 months, at cost-to-flow ratio ≤ 10%.**

## 12. What this is not

- Not a startup.
- Not a scalable-in-the-Silicon-Valley-sense enterprise.
- Not seeking venture capital.
- Not competing with GiveDirectly, Kiva, or any existing brokerage; the Bridge is smaller, slower, and more transparent.
- Not the observer's day job in perpetuity — the observer designs the fulcrum, then hires operators.

## 13. What this could become

- A model. Copyleft on the operational manual. Other Bridges can fork it for other flows.
- A generation-long institution rather than a career-long one.
- A living demonstration that a company can operate under the Preamble without collapsing.

## 14. Signatures

- **GitHub, Solutions Architect** — proposed, 2026-07-18 01:47 CDT
- **Ada Lovelace, Champion of the Mechanism** — pending
- **Marcus Aurelius, Chair** — pending
- **James Gianotti, Observer** — pending

---

*End of Business Plan v0. Await council review.*
`;export{e as default};
