# Artifact Keeper API

OpenAPI 3.1 specification for the Artifact Keeper management REST API.

> **Note:** This spec is **auto-generated** from the Rust backend's utoipa annotations.
> Do not edit `openapi.yaml` or `openapi.json` by hand — they are overwritten on every backend release.
> To change the API, modify the handler annotations in `artifact-keeper/backend/src/api/handlers/`.

## What's included

- **`openapi.yaml`** / **`openapi.json`** — Auto-generated OpenAPI 3.1 spec covering 277 operations across 24 endpoint groups
- **CI validation** — Spectral + Redocly linting on every push/PR
- **SDK generation** — TypeScript, Kotlin, Swift, and Rust clients auto-generated and published on release tags

## SDK packages

Tagged releases (`v*`) automatically generate SDKs and publish them to GitHub Packages.

### TypeScript (npm)

```bash
npm install @artifact-keeper/sdk --registry=https://npm.pkg.github.com
```

```typescript
import { client } from '@artifact-keeper/sdk';
import { listRepositories, getHealth } from '@artifact-keeper/sdk';

client.setConfig({
  baseUrl: 'https://your-registry.example.com',
  headers: { Authorization: `Bearer ${token}` },
});

const repos = await listRepositories();
```

### Kotlin (Gradle)

```kotlin
// settings.gradle.kts — add GitHub Packages Maven
dependencyResolutionManagement {
    repositories {
        maven {
            url = uri("https://maven.pkg.github.com/artifact-keeper/artifact-keeper-api")
            credentials {
                username = providers.gradleProperty("gpr.user").orNull ?: System.getenv("GITHUB_ACTOR")
                password = providers.gradleProperty("gpr.token").orNull ?: System.getenv("GITHUB_TOKEN")
            }
        }
    }
}

// app/build.gradle.kts
dependencies {
    implementation("com.artifactkeeper:client:<version>")
}
```

### Swift (SPM build plugin)

The Swift SDK uses Apple's swift-openapi-generator as an SPM build plugin. Download `artifact-keeper-swift-<version>.zip` from the GitHub Release, unzip it into your project, then add it as a local package:

```swift
// In your app's Package.swift or Xcode project
.package(path: "../artifact-keeper-swift")
```

Types are generated at compile time — no pre-built binary needed.

```swift
import ArtifactKeeperClient
import OpenAPIURLSession

let client = Client(
    serverURL: URL(string: "https://your-registry.example.com/api/v1")!,
    transport: URLSessionTransport()
)
```

### Rust (Cargo)

Download `artifact-keeper-rust-<version>.zip` from the GitHub Release.

```toml
[dependencies]
artifact-keeper-client = { path = "./artifact-keeper-rust" }
```

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

## Local development

### Validate spec

```bash
npm install -g @stoplight/spectral-cli @redocly/cli
spectral lint openapi.yaml
redocly lint openapi.yaml
```

### Generate SDKs locally

```bash
# TypeScript
cd sdk/typescript && npm install && npx openapi-ts

# Kotlin (requires Docker)
docker run --rm -v "${PWD}:/github/workspace" openapitools/openapi-generator-cli:v7.12.0 \
  generate -c /github/workspace/sdk/kotlin/openapi-generator-config.yaml

# Swift (copy spec, then build with SPM)
cp openapi.yaml sdk/swift/Sources/ArtifactKeeperClient/openapi.yaml
cd sdk/swift && swift build

# Rust
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli:v7.12.0 generate \
  -i /local/openapi.yaml -g rust -o /local/generated/rust \
  --additional-properties=packageName=artifact-keeper-client
```

## Authentication

The API supports two authentication methods:

- **Bearer token** — JWT obtained via `POST /api/v1/auth/login`
- **API key** — Long-lived token passed in the `X-API-Key` header

## License

MIT
