# API Spec Test Plan

## Overview

The artifact-keeper-api repo holds the OpenAPI 3.1 specification and generates 5 client SDKs. Testing focuses on spec validation and SDK build verification.

## Test Inventory

| Test Type | Framework | Count | CI Job | Status |
|-----------|-----------|-------|--------|--------|
| Spec lint | Spectral | Full spec | `lint` | Active |
| TypeScript SDK | @hey-api/openapi-ts | Full | `build-typescript` | Active |
| Kotlin SDK | openapi-generator | Full | `build-kotlin` | Active |
| Swift SDK | Swift OpenAPI Generator | Full | `build-swift` | Active |
| Rust SDK | openapi-generator | Full | `build-rust` | Active |
| Python SDK | openapi-generator | Full | `build-python` | Active |
| Contract test | (none) | 0 | - | Missing |
| Breaking change detection | (none) | 0 | - | Missing |

## How to Run

### Spec Validation
```bash
npx @stoplight/spectral-cli lint openapi.yaml
```

### SDK Builds
Each SDK is built in CI. See `.github/workflows/validate.yml` for exact commands per language.

## CI Pipeline

```
PR opened/pushed
  -> lint (Spectral)
  -> build-typescript
  -> build-kotlin
  -> build-swift
  -> build-rust
  -> build-python

Tag v*
  -> All above + publish to package registries
```

## Gaps and Roadmap

| Gap | Recommendation | Priority |
|-----|---------------|----------|
| No contract testing | Run generated SDK against live backend to verify accuracy | P2 |
| No breaking change detection | Add oasdiff or optic to CI | P1 |

## Agent-Assisted QA

Invoke the API contract validator to verify spec-to-implementation accuracy:
```bash
claude --print ".claude/agents/api-validator.md"
```
