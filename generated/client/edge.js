
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.PatternScalarFieldEnum = makeEnum({
  id: 'id',
  pattern: 'pattern',
  userId: 'userId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id'
});


exports.Prisma.ModelName = makeEnum({
  Pattern: 'Pattern',
  User: 'User'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/workspaces/unihook/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.8.0",
  "engineVersion": "d6e67a83f971b175a593ccc12e15c4a757f93ffe",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgUGF0dGVybiB7CiAgaWQgICAgICBTdHJpbmcgIEBpZCBAbWFwKCJfaWQiKQogIHBhdHRlcm4gU3RyaW5nCiAgVXNlciAgICBVc2VyPyAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgSW50Pwp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICBJbnQgICAgQGlkIEBtYXAoIl9pZCIpCiAgcGF0dGVybnMgUGF0dGVybltdCn0K'
config.inlineSchemaHash = 'd30f8200bf195f4a80b44f2bd00e8f1b6072ecf08bb305ff1b9e09117f0d70ff'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

