# Unified Materials Governance (UMG)

## Purpose

UMG defines how physical materials, substrates, and assemblies are governed so they align with
the same deterministic discipline used in the digital substrate.

This page is written for reviewers who need to understand how physical decisions are made,
documented, and enforced across projects.

## Role of UMG in the architecture

- **Physical counterpart to digital substrate control**  
- **Bridges** CAD/CAM, fabrication, and field conditions  
- **Ensures** repeatable, auditable material choices  
- **Supports** DOE-facing safety, reliability, and lifecycle expectations  

## Core principles

1. **Deterministic selection**  
   Material choices are made from a constrained, documented set with clear acceptance criteria.

2. **Traceability**  
   Every material decision can be traced back to:
   - a specification,
   - a risk assessment,
   - and a documented approval.

3. **Context-aware deployment**  
   Materials are selected based on:
   - environment,
   - load,
   - failure modes,
   - and maintenance expectations.

4. **Alignment with digital models**  
   Physical assemblies must be representable in the digital model with:
   - tolerances,
   - interfaces,
   - and constraints.

## UMG in practice

### Material catalogs

- Curated lists of approved materials
- Versioned and linked to project phases
- Mapped to suppliers and alternates

### Assembly patterns

- Standardized joinery, fasteners, and interfaces
- Known failure modes and mitigation strategies
- Reusable patterns across projects

### Change control

- Any deviation from UMG catalog or patterns:
  - is logged,
  - is justified,
  - and is reviewed.

## Relationship to Construct and ADML Host

- **Construct:**  
  Hosts the working models, drawings, and empirical notes that feed UMG decisions.

- **ADML Host:**  
  Exposes the stable, DOE-facing documentation of UMG policies and outcomes.

UMG is the bridge: it turns empirical work in Construct into auditable, stable documentation in ADML Host.

## Reviewer orientation

If you are a DOE or institutional reviewer, UMG answers:

- *What materials are allowed, and why?*  
- *How are changes controlled and documented?*  
- *How do physical decisions stay aligned with the digital model?*  
- *Where can I see the history of a material or assembly decision?*
