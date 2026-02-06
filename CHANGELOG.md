# Changelog

All notable changes to the Artifact Keeper API specification will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-a1] - 2026-02-06

### Added

- OpenAPI 3.1 specification for Artifact Keeper REST API
- 165 operations across 19 endpoint groups:
  - Authentication and session management
  - User management and profiles
  - Repository CRUD operations
  - Artifact upload, download, and metadata
  - Full-text and advanced search
  - Groups and team management
  - Permissions and access control
  - Webhooks configuration
  - Plugin system endpoints
  - Package format support (npm, PyPI, Maven, etc.)
  - Artifact signing and verification
  - Security scanning and vulnerability reports
  - Edge node federation
  - Admin and system configuration
  - Migration tools
  - Build integration endpoints
  - Package management
  - Tree browsing for monorepo navigation
- CI workflow for OpenAPI validation using Spectral and Redocly
- SDK generation pipeline for TypeScript and Rust clients on release tags
- MIT license

[1.0.0-a1]: https://github.com/artifact-keeper/artifact-keeper-api/releases/tag/v1.0.0-a1
