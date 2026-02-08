# Artifact Keeper API

OpenAPI 3.1 specification for the Artifact Keeper management REST API.

## What's included

- **`openapi.yaml`** — Single-file OpenAPI 3.1 spec covering 288 operations across 27 endpoint groups
- **CI validation** — Spectral + Redocly linting on every push/PR
- **SDK generation** — TypeScript and Rust clients auto-generated on release tags

## Endpoint groups

| Tag | Description |
|-----|-------------|
| Health | Service health and readiness probes |
| Auth | Authentication and session management |
| Users | User accounts, roles, and API tokens |
| Repositories | Artifact repository management |
| Artifacts | Individual artifact operations |
| Search | Full-text and faceted search |
| Groups | User group management |
| Permissions | Access control and permission grants |
| Webhooks | Event notification webhooks |
| Plugins | WASM plugin lifecycle management |
| Formats | Package format handler registry |
| Signing | Artifact signing and verification |
| Security | Vulnerability scanning and security policies |
| Edge Nodes | Edge node management and content replication |
| Admin | System administration and backups |
| Migration | Registry migration from Artifactory/Nexus |
| Builds | Build information tracking |
| Packages | Package-level views across versions |
| Tree | Repository file tree browsing |
| SBOM | Software Bill of Materials and license compliance |
| Dependency Track | Dependency-Track vulnerability management |
| Analytics | Storage analytics and usage metrics |
| Monitoring | Service health monitoring and alerting |
| Telemetry | Crash reporting and telemetry settings |
| Lifecycle | Artifact retention and cleanup policies |
| SSO Admin | SSO provider configuration (OIDC, LDAP, SAML) |
| SSO | SSO authentication flows |

## Scope

This spec covers Artifact Keeper's own REST API for managing the registry. It does **not** include format-specific protocol endpoints (npm, PyPI, Maven, Docker/OCI, Cargo, etc.) — those implement upstream specifications and are documented separately.

## Usage

### Validate locally

```bash
npm install -g @stoplight/spectral-cli @redocly/cli
spectral lint openapi.yaml
redocly lint openapi.yaml
```

### Generate TypeScript client

```bash
npx @hey-api/openapi-ts -i openapi.yaml -o generated/typescript -c @hey-api/client-fetch
```

### Generate Rust client

```bash
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli:v7.12.0 generate \
  -i /local/openapi.yaml -g rust -o /local/generated/rust \
  --additional-properties=packageName=artifact-keeper-client
```

## Authentication

The API supports two authentication methods:

- **Bearer token** — JWT obtained via `POST /api/v1/auth/login`
- **API key** — Long-lived token passed in the `X-API-Key` header

## Releases

Tagged releases (`v*`) automatically generate and publish:
- The OpenAPI spec file
- TypeScript client SDK (ZIP)
- Rust client SDK (ZIP)

## License

MIT
