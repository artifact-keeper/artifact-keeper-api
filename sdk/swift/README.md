# ArtifactKeeperClient

Swift client SDK for the [Artifact Keeper](https://github.com/artifact-keeper/artifact-keeper-api) REST API, generated from the OpenAPI 3.1 specification using [swift-openapi-generator](https://github.com/apple/swift-openapi-generator).

## Requirements

- Swift 5.9+
- macOS 13+, iOS 16+, tvOS 16+, watchOS 9+

## Installation

Add the package to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/artifact-keeper/artifact-keeper-swift-sdk.git", from: "1.0.0")
]
```

Then add the dependency to your target:

```swift
.target(
    name: "YourTarget",
    dependencies: [
        .product(name: "ArtifactKeeperClient", package: "artifact-keeper-swift-sdk")
    ]
)
```

## Usage

```swift
import ArtifactKeeperClient
import OpenAPIURLSession

let client = try Client(
    serverURL: URL(string: "https://your-instance.example.com/api")!,
    transport: URLSessionTransport()
)

let response = try await client.listRepositories()
```

## License

MIT
