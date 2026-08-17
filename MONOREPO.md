node-neuron/
├── apps/
│   ├── api/                  # 🟢 Node.js + TypeScript Backend
│   │   ├── src/
│   │   │   ├── core/         # Event loop, streams, buffers, workers
│   │   │   ├── ai/           # LLM clients, RAG, tool calling, agents
│   │   │   ├── server.ts     # Express/Fastify entry point
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/                  # 🔵 React + TypeScript Frontend
│       ├── src/
│       │   ├── components/   # Chat interfaces, stream viewer, dashboard
│       │   ├── hooks/        # Custom hooks for fetching and streaming AI data
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── package.json
│       └── tsconfig.json
├── packages/                 # 📦 Shared configurations and types
│   └── shared-types/         # Shared API payloads and AI response schemas
│       ├── index.ts
│       └── package.json
├── package.json              # Root workspace configurations
├── turbo.json                # Optional: Turborepo for ultra-fast builds
└── README.md                 # Main documentation and roadmap

