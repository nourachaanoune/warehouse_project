
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id_USER: number
  password: string
  email: string
  nom: string
  prenom: string
  fonction: string
  role: boolean
}

/**
 * Model Article
 * 
 */
export type Article = {
  id_Article: number
  labelArticle: string
  quantite: number
  etat: boolean
  id_Categorie: number
}

/**
 * Model Affectation
 * 
 */
export type Affectation = {
  id_Affectation: number
  type_Affectation: string
  quantite: number
  proprietaire: string
  date_Affectation: Date
}

/**
 * Model proprietaire
 * 
 */
export type proprietaire = {
  id_prop: number
  nom_prop: string
  prenom_prop: string
  cin_prop: number
  peofession: string
}

/**
 * Model categorie
 * 
 */
export type categorie = {
  id_categorie: number
  label_categorie: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<GlobalReject>;

  /**
   * `prisma.affectation`: Exposes CRUD operations for the **Affectation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Affectations
    * const affectations = await prisma.affectation.findMany()
    * ```
    */
  get affectation(): Prisma.AffectationDelegate<GlobalReject>;

  /**
   * `prisma.proprietaire`: Exposes CRUD operations for the **proprietaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proprietaires
    * const proprietaires = await prisma.proprietaire.findMany()
    * ```
    */
  get proprietaire(): Prisma.proprietaireDelegate<GlobalReject>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.categorieDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.1
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Article: 'Article',
    Affectation: 'Affectation',
    proprietaire: 'proprietaire',
    categorie: 'categorie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_USER: number | null
  }

  export type UserSumAggregateOutputType = {
    id_USER: number | null
  }

  export type UserMinAggregateOutputType = {
    id_USER: number | null
    password: string | null
    email: string | null
    nom: string | null
    prenom: string | null
    fonction: string | null
    role: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id_USER: number | null
    password: string | null
    email: string | null
    nom: string | null
    prenom: string | null
    fonction: string | null
    role: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id_USER: number
    password: number
    email: number
    nom: number
    prenom: number
    fonction: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_USER?: true
  }

  export type UserSumAggregateInputType = {
    id_USER?: true
  }

  export type UserMinAggregateInputType = {
    id_USER?: true
    password?: true
    email?: true
    nom?: true
    prenom?: true
    fonction?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id_USER?: true
    password?: true
    email?: true
    nom?: true
    prenom?: true
    fonction?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id_USER?: true
    password?: true
    email?: true
    nom?: true
    prenom?: true
    fonction?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id_USER: number
    password: string
    email: string
    nom: string
    prenom: string
    fonction: string
    role: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id_USER?: boolean
    password?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    fonction?: boolean
    role?: boolean
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id_USER`
     * const userWithId_USEROnly = await prisma.user.findMany({ select: { id_USER: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
  }



  /**
   * Model Article
   */


  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id_Article: number | null
    quantite: number | null
    id_Categorie: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id_Article: number | null
    quantite: number | null
    id_Categorie: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id_Article: number | null
    labelArticle: string | null
    quantite: number | null
    etat: boolean | null
    id_Categorie: number | null
  }

  export type ArticleMaxAggregateOutputType = {
    id_Article: number | null
    labelArticle: string | null
    quantite: number | null
    etat: boolean | null
    id_Categorie: number | null
  }

  export type ArticleCountAggregateOutputType = {
    id_Article: number
    labelArticle: number
    quantite: number
    etat: number
    id_Categorie: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id_Article?: true
    quantite?: true
    id_Categorie?: true
  }

  export type ArticleSumAggregateInputType = {
    id_Article?: true
    quantite?: true
    id_Categorie?: true
  }

  export type ArticleMinAggregateInputType = {
    id_Article?: true
    labelArticle?: true
    quantite?: true
    etat?: true
    id_Categorie?: true
  }

  export type ArticleMaxAggregateInputType = {
    id_Article?: true
    labelArticle?: true
    quantite?: true
    etat?: true
    id_Categorie?: true
  }

  export type ArticleCountAggregateInputType = {
    id_Article?: true
    labelArticle?: true
    quantite?: true
    etat?: true
    id_Categorie?: true
    _all?: true
  }

  export type ArticleAggregateArgs = {
    /**
     * Filter which Article to aggregate.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs = {
    where?: ArticleWhereInput
    orderBy?: Enumerable<ArticleOrderByWithAggregationInput>
    by: Array<ArticleScalarFieldEnum>
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }


  export type ArticleGroupByOutputType = {
    id_Article: number
    labelArticle: string
    quantite: number
    etat: boolean
    id_Categorie: number
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect = {
    id_Article?: boolean
    labelArticle?: boolean
    quantite?: boolean
    etat?: boolean
    id_Categorie?: boolean
  }

  export type ArticleGetPayload<
    S extends boolean | null | undefined | ArticleArgs,
    U = keyof S
      > = S extends true
        ? Article
    : S extends undefined
    ? never
    : S extends ArticleArgs | ArticleFindManyArgs
    ?'include' extends U
    ? Article 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Article ? Article[P] : never
  } 
    : Article
  : Article


  type ArticleCountArgs = Merge<
    Omit<ArticleFindManyArgs, 'select' | 'include'> & {
      select?: ArticleCountAggregateInputType | true
    }
  >

  export interface ArticleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArticleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Article'> extends True ? CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>> : CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArticleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Article'> extends True ? CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>> : CheckSelect<T, Prisma__ArticleClient<Article | null >, Prisma__ArticleClient<ArticleGetPayload<T> | null >>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id_Article`
     * const articleWithId_ArticleOnly = await prisma.article.findMany({ select: { id_Article: true } })
     * 
    **/
    findMany<T extends ArticleFindManyArgs>(
      args?: SelectSubset<T, ArticleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Article>>, PrismaPromise<Array<ArticleGetPayload<T>>>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
    **/
    create<T extends ArticleCreateArgs>(
      args: SelectSubset<T, ArticleCreateArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Create many Articles.
     *     @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const article = await prisma.article.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArticleCreateManyArgs>(
      args?: SelectSubset<T, ArticleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
    **/
    delete<T extends ArticleDeleteArgs>(
      args: SelectSubset<T, ArticleDeleteArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleUpdateArgs>(
      args: SelectSubset<T, ArticleUpdateArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleDeleteManyArgs>(
      args?: SelectSubset<T, ArticleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleUpdateManyArgs>(
      args: SelectSubset<T, ArticleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleUpsertArgs>(
      args: SelectSubset<T, ArticleUpsertArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Find one Article that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Find the first Article that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ArticleClient<Article>, Prisma__ArticleClient<ArticleGetPayload<T>>>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArticleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Article base type for findUnique actions
   */
  export type ArticleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where: ArticleWhereUniqueInput
  }

  /**
   * Article: findUnique
   */
  export interface ArticleFindUniqueArgs extends ArticleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Article base type for findFirst actions
   */
  export type ArticleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     * 
    **/
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }

  /**
   * Article: findFirst
   */
  export interface ArticleFindFirstArgs extends ArticleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Filter, which Articles to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * Article create
   */
  export type ArticleCreateArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * The data needed to create a Article.
     * 
    **/
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }


  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs = {
    /**
     * The data used to create many Articles.
     * 
    **/
    data: Enumerable<ArticleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Article update
   */
  export type ArticleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * The data needed to update a Article.
     * 
    **/
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs = {
    /**
     * The data used to update Articles.
     * 
    **/
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     * 
    **/
    where?: ArticleWhereInput
  }


  /**
   * Article upsert
   */
  export type ArticleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * The filter to search for the Article to update in case it exists.
     * 
    **/
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     * 
    **/
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }


  /**
   * Article delete
   */
  export type ArticleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Filter which Article to delete.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs = {
    /**
     * Filter which Articles to delete
     * 
    **/
    where?: ArticleWhereInput
  }


  /**
   * Article: findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs = ArticleFindUniqueArgsBase
      

  /**
   * Article: findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs = ArticleFindFirstArgsBase
      

  /**
   * Article without action
   */
  export type ArticleArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
  }



  /**
   * Model Affectation
   */


  export type AggregateAffectation = {
    _count: AffectationCountAggregateOutputType | null
    _avg: AffectationAvgAggregateOutputType | null
    _sum: AffectationSumAggregateOutputType | null
    _min: AffectationMinAggregateOutputType | null
    _max: AffectationMaxAggregateOutputType | null
  }

  export type AffectationAvgAggregateOutputType = {
    id_Affectation: number | null
    quantite: number | null
  }

  export type AffectationSumAggregateOutputType = {
    id_Affectation: number | null
    quantite: number | null
  }

  export type AffectationMinAggregateOutputType = {
    id_Affectation: number | null
    type_Affectation: string | null
    quantite: number | null
    proprietaire: string | null
    date_Affectation: Date | null
  }

  export type AffectationMaxAggregateOutputType = {
    id_Affectation: number | null
    type_Affectation: string | null
    quantite: number | null
    proprietaire: string | null
    date_Affectation: Date | null
  }

  export type AffectationCountAggregateOutputType = {
    id_Affectation: number
    type_Affectation: number
    quantite: number
    proprietaire: number
    date_Affectation: number
    _all: number
  }


  export type AffectationAvgAggregateInputType = {
    id_Affectation?: true
    quantite?: true
  }

  export type AffectationSumAggregateInputType = {
    id_Affectation?: true
    quantite?: true
  }

  export type AffectationMinAggregateInputType = {
    id_Affectation?: true
    type_Affectation?: true
    quantite?: true
    proprietaire?: true
    date_Affectation?: true
  }

  export type AffectationMaxAggregateInputType = {
    id_Affectation?: true
    type_Affectation?: true
    quantite?: true
    proprietaire?: true
    date_Affectation?: true
  }

  export type AffectationCountAggregateInputType = {
    id_Affectation?: true
    type_Affectation?: true
    quantite?: true
    proprietaire?: true
    date_Affectation?: true
    _all?: true
  }

  export type AffectationAggregateArgs = {
    /**
     * Filter which Affectation to aggregate.
     * 
    **/
    where?: AffectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affectations to fetch.
     * 
    **/
    orderBy?: Enumerable<AffectationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AffectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affectations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affectations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Affectations
    **/
    _count?: true | AffectationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffectationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffectationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffectationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffectationMaxAggregateInputType
  }

  export type GetAffectationAggregateType<T extends AffectationAggregateArgs> = {
        [P in keyof T & keyof AggregateAffectation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffectation[P]>
      : GetScalarType<T[P], AggregateAffectation[P]>
  }




  export type AffectationGroupByArgs = {
    where?: AffectationWhereInput
    orderBy?: Enumerable<AffectationOrderByWithAggregationInput>
    by: Array<AffectationScalarFieldEnum>
    having?: AffectationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffectationCountAggregateInputType | true
    _avg?: AffectationAvgAggregateInputType
    _sum?: AffectationSumAggregateInputType
    _min?: AffectationMinAggregateInputType
    _max?: AffectationMaxAggregateInputType
  }


  export type AffectationGroupByOutputType = {
    id_Affectation: number
    type_Affectation: string
    quantite: number
    proprietaire: string
    date_Affectation: Date
    _count: AffectationCountAggregateOutputType | null
    _avg: AffectationAvgAggregateOutputType | null
    _sum: AffectationSumAggregateOutputType | null
    _min: AffectationMinAggregateOutputType | null
    _max: AffectationMaxAggregateOutputType | null
  }

  type GetAffectationGroupByPayload<T extends AffectationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AffectationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffectationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffectationGroupByOutputType[P]>
            : GetScalarType<T[P], AffectationGroupByOutputType[P]>
        }
      >
    >


  export type AffectationSelect = {
    id_Affectation?: boolean
    type_Affectation?: boolean
    quantite?: boolean
    proprietaire?: boolean
    date_Affectation?: boolean
  }

  export type AffectationGetPayload<
    S extends boolean | null | undefined | AffectationArgs,
    U = keyof S
      > = S extends true
        ? Affectation
    : S extends undefined
    ? never
    : S extends AffectationArgs | AffectationFindManyArgs
    ?'include' extends U
    ? Affectation 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Affectation ? Affectation[P] : never
  } 
    : Affectation
  : Affectation


  type AffectationCountArgs = Merge<
    Omit<AffectationFindManyArgs, 'select' | 'include'> & {
      select?: AffectationCountAggregateInputType | true
    }
  >

  export interface AffectationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Affectation that matches the filter.
     * @param {AffectationFindUniqueArgs} args - Arguments to find a Affectation
     * @example
     * // Get one Affectation
     * const affectation = await prisma.affectation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AffectationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AffectationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Affectation'> extends True ? CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>> : CheckSelect<T, Prisma__AffectationClient<Affectation | null >, Prisma__AffectationClient<AffectationGetPayload<T> | null >>

    /**
     * Find the first Affectation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationFindFirstArgs} args - Arguments to find a Affectation
     * @example
     * // Get one Affectation
     * const affectation = await prisma.affectation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AffectationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AffectationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Affectation'> extends True ? CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>> : CheckSelect<T, Prisma__AffectationClient<Affectation | null >, Prisma__AffectationClient<AffectationGetPayload<T> | null >>

    /**
     * Find zero or more Affectations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Affectations
     * const affectations = await prisma.affectation.findMany()
     * 
     * // Get first 10 Affectations
     * const affectations = await prisma.affectation.findMany({ take: 10 })
     * 
     * // Only select the `id_Affectation`
     * const affectationWithId_AffectationOnly = await prisma.affectation.findMany({ select: { id_Affectation: true } })
     * 
    **/
    findMany<T extends AffectationFindManyArgs>(
      args?: SelectSubset<T, AffectationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Affectation>>, PrismaPromise<Array<AffectationGetPayload<T>>>>

    /**
     * Create a Affectation.
     * @param {AffectationCreateArgs} args - Arguments to create a Affectation.
     * @example
     * // Create one Affectation
     * const Affectation = await prisma.affectation.create({
     *   data: {
     *     // ... data to create a Affectation
     *   }
     * })
     * 
    **/
    create<T extends AffectationCreateArgs>(
      args: SelectSubset<T, AffectationCreateArgs>
    ): CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>>

    /**
     * Create many Affectations.
     *     @param {AffectationCreateManyArgs} args - Arguments to create many Affectations.
     *     @example
     *     // Create many Affectations
     *     const affectation = await prisma.affectation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AffectationCreateManyArgs>(
      args?: SelectSubset<T, AffectationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Affectation.
     * @param {AffectationDeleteArgs} args - Arguments to delete one Affectation.
     * @example
     * // Delete one Affectation
     * const Affectation = await prisma.affectation.delete({
     *   where: {
     *     // ... filter to delete one Affectation
     *   }
     * })
     * 
    **/
    delete<T extends AffectationDeleteArgs>(
      args: SelectSubset<T, AffectationDeleteArgs>
    ): CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>>

    /**
     * Update one Affectation.
     * @param {AffectationUpdateArgs} args - Arguments to update one Affectation.
     * @example
     * // Update one Affectation
     * const affectation = await prisma.affectation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AffectationUpdateArgs>(
      args: SelectSubset<T, AffectationUpdateArgs>
    ): CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>>

    /**
     * Delete zero or more Affectations.
     * @param {AffectationDeleteManyArgs} args - Arguments to filter Affectations to delete.
     * @example
     * // Delete a few Affectations
     * const { count } = await prisma.affectation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AffectationDeleteManyArgs>(
      args?: SelectSubset<T, AffectationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Affectations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Affectations
     * const affectation = await prisma.affectation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AffectationUpdateManyArgs>(
      args: SelectSubset<T, AffectationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Affectation.
     * @param {AffectationUpsertArgs} args - Arguments to update or create a Affectation.
     * @example
     * // Update or create a Affectation
     * const affectation = await prisma.affectation.upsert({
     *   create: {
     *     // ... data to create a Affectation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Affectation we want to update
     *   }
     * })
    **/
    upsert<T extends AffectationUpsertArgs>(
      args: SelectSubset<T, AffectationUpsertArgs>
    ): CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>>

    /**
     * Find one Affectation that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AffectationFindUniqueOrThrowArgs} args - Arguments to find a Affectation
     * @example
     * // Get one Affectation
     * const affectation = await prisma.affectation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AffectationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AffectationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>>

    /**
     * Find the first Affectation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationFindFirstOrThrowArgs} args - Arguments to find a Affectation
     * @example
     * // Get one Affectation
     * const affectation = await prisma.affectation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AffectationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AffectationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AffectationClient<Affectation>, Prisma__AffectationClient<AffectationGetPayload<T>>>

    /**
     * Count the number of Affectations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationCountArgs} args - Arguments to filter Affectations to count.
     * @example
     * // Count the number of Affectations
     * const count = await prisma.affectation.count({
     *   where: {
     *     // ... the filter for the Affectations we want to count
     *   }
     * })
    **/
    count<T extends AffectationCountArgs>(
      args?: Subset<T, AffectationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffectationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Affectation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AffectationAggregateArgs>(args: Subset<T, AffectationAggregateArgs>): PrismaPromise<GetAffectationAggregateType<T>>

    /**
     * Group by Affectation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffectationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AffectationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffectationGroupByArgs['orderBy'] }
        : { orderBy?: AffectationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AffectationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffectationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Affectation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AffectationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Affectation base type for findUnique actions
   */
  export type AffectationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * Filter, which Affectation to fetch.
     * 
    **/
    where: AffectationWhereUniqueInput
  }

  /**
   * Affectation: findUnique
   */
  export interface AffectationFindUniqueArgs extends AffectationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Affectation base type for findFirst actions
   */
  export type AffectationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * Filter, which Affectation to fetch.
     * 
    **/
    where?: AffectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affectations to fetch.
     * 
    **/
    orderBy?: Enumerable<AffectationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affectations.
     * 
    **/
    cursor?: AffectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affectations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affectations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affectations.
     * 
    **/
    distinct?: Enumerable<AffectationScalarFieldEnum>
  }

  /**
   * Affectation: findFirst
   */
  export interface AffectationFindFirstArgs extends AffectationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Affectation findMany
   */
  export type AffectationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * Filter, which Affectations to fetch.
     * 
    **/
    where?: AffectationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affectations to fetch.
     * 
    **/
    orderBy?: Enumerable<AffectationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Affectations.
     * 
    **/
    cursor?: AffectationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affectations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affectations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AffectationScalarFieldEnum>
  }


  /**
   * Affectation create
   */
  export type AffectationCreateArgs = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * The data needed to create a Affectation.
     * 
    **/
    data: XOR<AffectationCreateInput, AffectationUncheckedCreateInput>
  }


  /**
   * Affectation createMany
   */
  export type AffectationCreateManyArgs = {
    /**
     * The data used to create many Affectations.
     * 
    **/
    data: Enumerable<AffectationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Affectation update
   */
  export type AffectationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * The data needed to update a Affectation.
     * 
    **/
    data: XOR<AffectationUpdateInput, AffectationUncheckedUpdateInput>
    /**
     * Choose, which Affectation to update.
     * 
    **/
    where: AffectationWhereUniqueInput
  }


  /**
   * Affectation updateMany
   */
  export type AffectationUpdateManyArgs = {
    /**
     * The data used to update Affectations.
     * 
    **/
    data: XOR<AffectationUpdateManyMutationInput, AffectationUncheckedUpdateManyInput>
    /**
     * Filter which Affectations to update
     * 
    **/
    where?: AffectationWhereInput
  }


  /**
   * Affectation upsert
   */
  export type AffectationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * The filter to search for the Affectation to update in case it exists.
     * 
    **/
    where: AffectationWhereUniqueInput
    /**
     * In case the Affectation found by the `where` argument doesn't exist, create a new Affectation with this data.
     * 
    **/
    create: XOR<AffectationCreateInput, AffectationUncheckedCreateInput>
    /**
     * In case the Affectation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AffectationUpdateInput, AffectationUncheckedUpdateInput>
  }


  /**
   * Affectation delete
   */
  export type AffectationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
    /**
     * Filter which Affectation to delete.
     * 
    **/
    where: AffectationWhereUniqueInput
  }


  /**
   * Affectation deleteMany
   */
  export type AffectationDeleteManyArgs = {
    /**
     * Filter which Affectations to delete
     * 
    **/
    where?: AffectationWhereInput
  }


  /**
   * Affectation: findUniqueOrThrow
   */
  export type AffectationFindUniqueOrThrowArgs = AffectationFindUniqueArgsBase
      

  /**
   * Affectation: findFirstOrThrow
   */
  export type AffectationFindFirstOrThrowArgs = AffectationFindFirstArgsBase
      

  /**
   * Affectation without action
   */
  export type AffectationArgs = {
    /**
     * Select specific fields to fetch from the Affectation
     * 
    **/
    select?: AffectationSelect | null
  }



  /**
   * Model proprietaire
   */


  export type AggregateProprietaire = {
    _count: ProprietaireCountAggregateOutputType | null
    _avg: ProprietaireAvgAggregateOutputType | null
    _sum: ProprietaireSumAggregateOutputType | null
    _min: ProprietaireMinAggregateOutputType | null
    _max: ProprietaireMaxAggregateOutputType | null
  }

  export type ProprietaireAvgAggregateOutputType = {
    id_prop: number | null
    cin_prop: number | null
  }

  export type ProprietaireSumAggregateOutputType = {
    id_prop: number | null
    cin_prop: number | null
  }

  export type ProprietaireMinAggregateOutputType = {
    id_prop: number | null
    nom_prop: string | null
    prenom_prop: string | null
    cin_prop: number | null
    peofession: string | null
  }

  export type ProprietaireMaxAggregateOutputType = {
    id_prop: number | null
    nom_prop: string | null
    prenom_prop: string | null
    cin_prop: number | null
    peofession: string | null
  }

  export type ProprietaireCountAggregateOutputType = {
    id_prop: number
    nom_prop: number
    prenom_prop: number
    cin_prop: number
    peofession: number
    _all: number
  }


  export type ProprietaireAvgAggregateInputType = {
    id_prop?: true
    cin_prop?: true
  }

  export type ProprietaireSumAggregateInputType = {
    id_prop?: true
    cin_prop?: true
  }

  export type ProprietaireMinAggregateInputType = {
    id_prop?: true
    nom_prop?: true
    prenom_prop?: true
    cin_prop?: true
    peofession?: true
  }

  export type ProprietaireMaxAggregateInputType = {
    id_prop?: true
    nom_prop?: true
    prenom_prop?: true
    cin_prop?: true
    peofession?: true
  }

  export type ProprietaireCountAggregateInputType = {
    id_prop?: true
    nom_prop?: true
    prenom_prop?: true
    cin_prop?: true
    peofession?: true
    _all?: true
  }

  export type ProprietaireAggregateArgs = {
    /**
     * Filter which proprietaire to aggregate.
     * 
    **/
    where?: proprietaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietaires to fetch.
     * 
    **/
    orderBy?: Enumerable<proprietaireOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: proprietaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietaires from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietaires.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proprietaires
    **/
    _count?: true | ProprietaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProprietaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProprietaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProprietaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProprietaireMaxAggregateInputType
  }

  export type GetProprietaireAggregateType<T extends ProprietaireAggregateArgs> = {
        [P in keyof T & keyof AggregateProprietaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProprietaire[P]>
      : GetScalarType<T[P], AggregateProprietaire[P]>
  }




  export type ProprietaireGroupByArgs = {
    where?: proprietaireWhereInput
    orderBy?: Enumerable<proprietaireOrderByWithAggregationInput>
    by: Array<ProprietaireScalarFieldEnum>
    having?: proprietaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProprietaireCountAggregateInputType | true
    _avg?: ProprietaireAvgAggregateInputType
    _sum?: ProprietaireSumAggregateInputType
    _min?: ProprietaireMinAggregateInputType
    _max?: ProprietaireMaxAggregateInputType
  }


  export type ProprietaireGroupByOutputType = {
    id_prop: number
    nom_prop: string
    prenom_prop: string
    cin_prop: number
    peofession: string
    _count: ProprietaireCountAggregateOutputType | null
    _avg: ProprietaireAvgAggregateOutputType | null
    _sum: ProprietaireSumAggregateOutputType | null
    _min: ProprietaireMinAggregateOutputType | null
    _max: ProprietaireMaxAggregateOutputType | null
  }

  type GetProprietaireGroupByPayload<T extends ProprietaireGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProprietaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProprietaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProprietaireGroupByOutputType[P]>
            : GetScalarType<T[P], ProprietaireGroupByOutputType[P]>
        }
      >
    >


  export type proprietaireSelect = {
    id_prop?: boolean
    nom_prop?: boolean
    prenom_prop?: boolean
    cin_prop?: boolean
    peofession?: boolean
  }

  export type proprietaireGetPayload<
    S extends boolean | null | undefined | proprietaireArgs,
    U = keyof S
      > = S extends true
        ? proprietaire
    : S extends undefined
    ? never
    : S extends proprietaireArgs | proprietaireFindManyArgs
    ?'include' extends U
    ? proprietaire 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof proprietaire ? proprietaire[P] : never
  } 
    : proprietaire
  : proprietaire


  type proprietaireCountArgs = Merge<
    Omit<proprietaireFindManyArgs, 'select' | 'include'> & {
      select?: ProprietaireCountAggregateInputType | true
    }
  >

  export interface proprietaireDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Proprietaire that matches the filter.
     * @param {proprietaireFindUniqueArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends proprietaireFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, proprietaireFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'proprietaire'> extends True ? CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>> : CheckSelect<T, Prisma__proprietaireClient<proprietaire | null >, Prisma__proprietaireClient<proprietaireGetPayload<T> | null >>

    /**
     * Find the first Proprietaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietaireFindFirstArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends proprietaireFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, proprietaireFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'proprietaire'> extends True ? CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>> : CheckSelect<T, Prisma__proprietaireClient<proprietaire | null >, Prisma__proprietaireClient<proprietaireGetPayload<T> | null >>

    /**
     * Find zero or more Proprietaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietaireFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proprietaires
     * const proprietaires = await prisma.proprietaire.findMany()
     * 
     * // Get first 10 Proprietaires
     * const proprietaires = await prisma.proprietaire.findMany({ take: 10 })
     * 
     * // Only select the `id_prop`
     * const proprietaireWithId_propOnly = await prisma.proprietaire.findMany({ select: { id_prop: true } })
     * 
    **/
    findMany<T extends proprietaireFindManyArgs>(
      args?: SelectSubset<T, proprietaireFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<proprietaire>>, PrismaPromise<Array<proprietaireGetPayload<T>>>>

    /**
     * Create a Proprietaire.
     * @param {proprietaireCreateArgs} args - Arguments to create a Proprietaire.
     * @example
     * // Create one Proprietaire
     * const Proprietaire = await prisma.proprietaire.create({
     *   data: {
     *     // ... data to create a Proprietaire
     *   }
     * })
     * 
    **/
    create<T extends proprietaireCreateArgs>(
      args: SelectSubset<T, proprietaireCreateArgs>
    ): CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>>

    /**
     * Create many Proprietaires.
     *     @param {proprietaireCreateManyArgs} args - Arguments to create many Proprietaires.
     *     @example
     *     // Create many Proprietaires
     *     const proprietaire = await prisma.proprietaire.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends proprietaireCreateManyArgs>(
      args?: SelectSubset<T, proprietaireCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Proprietaire.
     * @param {proprietaireDeleteArgs} args - Arguments to delete one Proprietaire.
     * @example
     * // Delete one Proprietaire
     * const Proprietaire = await prisma.proprietaire.delete({
     *   where: {
     *     // ... filter to delete one Proprietaire
     *   }
     * })
     * 
    **/
    delete<T extends proprietaireDeleteArgs>(
      args: SelectSubset<T, proprietaireDeleteArgs>
    ): CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>>

    /**
     * Update one Proprietaire.
     * @param {proprietaireUpdateArgs} args - Arguments to update one Proprietaire.
     * @example
     * // Update one Proprietaire
     * const proprietaire = await prisma.proprietaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends proprietaireUpdateArgs>(
      args: SelectSubset<T, proprietaireUpdateArgs>
    ): CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>>

    /**
     * Delete zero or more Proprietaires.
     * @param {proprietaireDeleteManyArgs} args - Arguments to filter Proprietaires to delete.
     * @example
     * // Delete a few Proprietaires
     * const { count } = await prisma.proprietaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends proprietaireDeleteManyArgs>(
      args?: SelectSubset<T, proprietaireDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proprietaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proprietaires
     * const proprietaire = await prisma.proprietaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends proprietaireUpdateManyArgs>(
      args: SelectSubset<T, proprietaireUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Proprietaire.
     * @param {proprietaireUpsertArgs} args - Arguments to update or create a Proprietaire.
     * @example
     * // Update or create a Proprietaire
     * const proprietaire = await prisma.proprietaire.upsert({
     *   create: {
     *     // ... data to create a Proprietaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proprietaire we want to update
     *   }
     * })
    **/
    upsert<T extends proprietaireUpsertArgs>(
      args: SelectSubset<T, proprietaireUpsertArgs>
    ): CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>>

    /**
     * Find one Proprietaire that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {proprietaireFindUniqueOrThrowArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends proprietaireFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, proprietaireFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>>

    /**
     * Find the first Proprietaire that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietaireFindFirstOrThrowArgs} args - Arguments to find a Proprietaire
     * @example
     * // Get one Proprietaire
     * const proprietaire = await prisma.proprietaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends proprietaireFindFirstOrThrowArgs>(
      args?: SelectSubset<T, proprietaireFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__proprietaireClient<proprietaire>, Prisma__proprietaireClient<proprietaireGetPayload<T>>>

    /**
     * Count the number of Proprietaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proprietaireCountArgs} args - Arguments to filter Proprietaires to count.
     * @example
     * // Count the number of Proprietaires
     * const count = await prisma.proprietaire.count({
     *   where: {
     *     // ... the filter for the Proprietaires we want to count
     *   }
     * })
    **/
    count<T extends proprietaireCountArgs>(
      args?: Subset<T, proprietaireCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProprietaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proprietaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProprietaireAggregateArgs>(args: Subset<T, ProprietaireAggregateArgs>): PrismaPromise<GetProprietaireAggregateType<T>>

    /**
     * Group by Proprietaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProprietaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProprietaireGroupByArgs['orderBy'] }
        : { orderBy?: ProprietaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProprietaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProprietaireGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for proprietaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__proprietaireClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * proprietaire base type for findUnique actions
   */
  export type proprietaireFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * Filter, which proprietaire to fetch.
     * 
    **/
    where: proprietaireWhereUniqueInput
  }

  /**
   * proprietaire: findUnique
   */
  export interface proprietaireFindUniqueArgs extends proprietaireFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * proprietaire base type for findFirst actions
   */
  export type proprietaireFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * Filter, which proprietaire to fetch.
     * 
    **/
    where?: proprietaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietaires to fetch.
     * 
    **/
    orderBy?: Enumerable<proprietaireOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proprietaires.
     * 
    **/
    cursor?: proprietaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietaires from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietaires.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proprietaires.
     * 
    **/
    distinct?: Enumerable<ProprietaireScalarFieldEnum>
  }

  /**
   * proprietaire: findFirst
   */
  export interface proprietaireFindFirstArgs extends proprietaireFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * proprietaire findMany
   */
  export type proprietaireFindManyArgs = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * Filter, which proprietaires to fetch.
     * 
    **/
    where?: proprietaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proprietaires to fetch.
     * 
    **/
    orderBy?: Enumerable<proprietaireOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proprietaires.
     * 
    **/
    cursor?: proprietaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proprietaires from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proprietaires.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProprietaireScalarFieldEnum>
  }


  /**
   * proprietaire create
   */
  export type proprietaireCreateArgs = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * The data needed to create a proprietaire.
     * 
    **/
    data: XOR<proprietaireCreateInput, proprietaireUncheckedCreateInput>
  }


  /**
   * proprietaire createMany
   */
  export type proprietaireCreateManyArgs = {
    /**
     * The data used to create many proprietaires.
     * 
    **/
    data: Enumerable<proprietaireCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * proprietaire update
   */
  export type proprietaireUpdateArgs = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * The data needed to update a proprietaire.
     * 
    **/
    data: XOR<proprietaireUpdateInput, proprietaireUncheckedUpdateInput>
    /**
     * Choose, which proprietaire to update.
     * 
    **/
    where: proprietaireWhereUniqueInput
  }


  /**
   * proprietaire updateMany
   */
  export type proprietaireUpdateManyArgs = {
    /**
     * The data used to update proprietaires.
     * 
    **/
    data: XOR<proprietaireUpdateManyMutationInput, proprietaireUncheckedUpdateManyInput>
    /**
     * Filter which proprietaires to update
     * 
    **/
    where?: proprietaireWhereInput
  }


  /**
   * proprietaire upsert
   */
  export type proprietaireUpsertArgs = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * The filter to search for the proprietaire to update in case it exists.
     * 
    **/
    where: proprietaireWhereUniqueInput
    /**
     * In case the proprietaire found by the `where` argument doesn't exist, create a new proprietaire with this data.
     * 
    **/
    create: XOR<proprietaireCreateInput, proprietaireUncheckedCreateInput>
    /**
     * In case the proprietaire was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<proprietaireUpdateInput, proprietaireUncheckedUpdateInput>
  }


  /**
   * proprietaire delete
   */
  export type proprietaireDeleteArgs = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
    /**
     * Filter which proprietaire to delete.
     * 
    **/
    where: proprietaireWhereUniqueInput
  }


  /**
   * proprietaire deleteMany
   */
  export type proprietaireDeleteManyArgs = {
    /**
     * Filter which proprietaires to delete
     * 
    **/
    where?: proprietaireWhereInput
  }


  /**
   * proprietaire: findUniqueOrThrow
   */
  export type proprietaireFindUniqueOrThrowArgs = proprietaireFindUniqueArgsBase
      

  /**
   * proprietaire: findFirstOrThrow
   */
  export type proprietaireFindFirstOrThrowArgs = proprietaireFindFirstArgsBase
      

  /**
   * proprietaire without action
   */
  export type proprietaireArgs = {
    /**
     * Select specific fields to fetch from the proprietaire
     * 
    **/
    select?: proprietaireSelect | null
  }



  /**
   * Model categorie
   */


  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id_categorie: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id_categorie: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id_categorie: number | null
    label_categorie: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id_categorie: number | null
    label_categorie: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id_categorie: number
    label_categorie: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id_categorie?: true
  }

  export type CategorieSumAggregateInputType = {
    id_categorie?: true
  }

  export type CategorieMinAggregateInputType = {
    id_categorie?: true
    label_categorie?: true
  }

  export type CategorieMaxAggregateInputType = {
    id_categorie?: true
    label_categorie?: true
  }

  export type CategorieCountAggregateInputType = {
    id_categorie?: true
    label_categorie?: true
    _all?: true
  }

  export type CategorieAggregateArgs = {
    /**
     * Filter which categorie to aggregate.
     * 
    **/
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categorieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs = {
    where?: categorieWhereInput
    orderBy?: Enumerable<categorieOrderByWithAggregationInput>
    by: Array<CategorieScalarFieldEnum>
    having?: categorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }


  export type CategorieGroupByOutputType = {
    id_categorie: number
    label_categorie: string
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type categorieSelect = {
    id_categorie?: boolean
    label_categorie?: boolean
  }

  export type categorieGetPayload<
    S extends boolean | null | undefined | categorieArgs,
    U = keyof S
      > = S extends true
        ? categorie
    : S extends undefined
    ? never
    : S extends categorieArgs | categorieFindManyArgs
    ?'include' extends U
    ? categorie 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof categorie ? categorie[P] : never
  } 
    : categorie
  : categorie


  type categorieCountArgs = Merge<
    Omit<categorieFindManyArgs, 'select' | 'include'> & {
      select?: CategorieCountAggregateInputType | true
    }
  >

  export interface categorieDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {categorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categorieFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categorieFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categorie'> extends True ? CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>> : CheckSelect<T, Prisma__categorieClient<categorie | null >, Prisma__categorieClient<categorieGetPayload<T> | null >>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categorieFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categorieFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categorie'> extends True ? CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>> : CheckSelect<T, Prisma__categorieClient<categorie | null >, Prisma__categorieClient<categorieGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.findMany({ select: { id_categorie: true } })
     * 
    **/
    findMany<T extends categorieFindManyArgs>(
      args?: SelectSubset<T, categorieFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<categorie>>, PrismaPromise<Array<categorieGetPayload<T>>>>

    /**
     * Create a Categorie.
     * @param {categorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
    **/
    create<T extends categorieCreateArgs>(
      args: SelectSubset<T, categorieCreateArgs>
    ): CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {categorieCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categorie = await prisma.categorie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categorieCreateManyArgs>(
      args?: SelectSubset<T, categorieCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Categorie.
     * @param {categorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
    **/
    delete<T extends categorieDeleteArgs>(
      args: SelectSubset<T, categorieDeleteArgs>
    ): CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>>

    /**
     * Update one Categorie.
     * @param {categorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categorieUpdateArgs>(
      args: SelectSubset<T, categorieUpdateArgs>
    ): CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {categorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categorieDeleteManyArgs>(
      args?: SelectSubset<T, categorieDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categorieUpdateManyArgs>(
      args: SelectSubset<T, categorieUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorie.
     * @param {categorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
    **/
    upsert<T extends categorieUpsertArgs>(
      args: SelectSubset<T, categorieUpsertArgs>
    ): CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>>

    /**
     * Find one Categorie that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {categorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categorieFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, categorieFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>>

    /**
     * Find the first Categorie that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categorieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categorieFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__categorieClient<categorie>, Prisma__categorieClient<categorieGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categorieCountArgs>(
      args?: Subset<T, categorieCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categorieClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * categorie base type for findUnique actions
   */
  export type categorieFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * Filter, which categorie to fetch.
     * 
    **/
    where: categorieWhereUniqueInput
  }

  /**
   * categorie: findUnique
   */
  export interface categorieFindUniqueArgs extends categorieFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categorie base type for findFirst actions
   */
  export type categorieFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * Filter, which categorie to fetch.
     * 
    **/
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categorieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     * 
    **/
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     * 
    **/
    distinct?: Enumerable<CategorieScalarFieldEnum>
  }

  /**
   * categorie: findFirst
   */
  export interface categorieFindFirstArgs extends categorieFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categorie findMany
   */
  export type categorieFindManyArgs = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categorieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     * 
    **/
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategorieScalarFieldEnum>
  }


  /**
   * categorie create
   */
  export type categorieCreateArgs = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * The data needed to create a categorie.
     * 
    **/
    data: XOR<categorieCreateInput, categorieUncheckedCreateInput>
  }


  /**
   * categorie createMany
   */
  export type categorieCreateManyArgs = {
    /**
     * The data used to create many categories.
     * 
    **/
    data: Enumerable<categorieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categorie update
   */
  export type categorieUpdateArgs = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * The data needed to update a categorie.
     * 
    **/
    data: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
    /**
     * Choose, which categorie to update.
     * 
    **/
    where: categorieWhereUniqueInput
  }


  /**
   * categorie updateMany
   */
  export type categorieUpdateManyArgs = {
    /**
     * The data used to update categories.
     * 
    **/
    data: XOR<categorieUpdateManyMutationInput, categorieUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     * 
    **/
    where?: categorieWhereInput
  }


  /**
   * categorie upsert
   */
  export type categorieUpsertArgs = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * The filter to search for the categorie to update in case it exists.
     * 
    **/
    where: categorieWhereUniqueInput
    /**
     * In case the categorie found by the `where` argument doesn't exist, create a new categorie with this data.
     * 
    **/
    create: XOR<categorieCreateInput, categorieUncheckedCreateInput>
    /**
     * In case the categorie was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
  }


  /**
   * categorie delete
   */
  export type categorieDeleteArgs = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
    /**
     * Filter which categorie to delete.
     * 
    **/
    where: categorieWhereUniqueInput
  }


  /**
   * categorie deleteMany
   */
  export type categorieDeleteManyArgs = {
    /**
     * Filter which categories to delete
     * 
    **/
    where?: categorieWhereInput
  }


  /**
   * categorie: findUniqueOrThrow
   */
  export type categorieFindUniqueOrThrowArgs = categorieFindUniqueArgsBase
      

  /**
   * categorie: findFirstOrThrow
   */
  export type categorieFindFirstOrThrowArgs = categorieFindFirstArgsBase
      

  /**
   * categorie without action
   */
  export type categorieArgs = {
    /**
     * Select specific fields to fetch from the categorie
     * 
    **/
    select?: categorieSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id_USER: 'id_USER',
    password: 'password',
    email: 'email',
    nom: 'nom',
    prenom: 'prenom',
    fonction: 'fonction',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id_Article: 'id_Article',
    labelArticle: 'labelArticle',
    quantite: 'quantite',
    etat: 'etat',
    id_Categorie: 'id_Categorie'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const AffectationScalarFieldEnum: {
    id_Affectation: 'id_Affectation',
    type_Affectation: 'type_Affectation',
    quantite: 'quantite',
    proprietaire: 'proprietaire',
    date_Affectation: 'date_Affectation'
  };

  export type AffectationScalarFieldEnum = (typeof AffectationScalarFieldEnum)[keyof typeof AffectationScalarFieldEnum]


  export const ProprietaireScalarFieldEnum: {
    id_prop: 'id_prop',
    nom_prop: 'nom_prop',
    prenom_prop: 'prenom_prop',
    cin_prop: 'cin_prop',
    peofession: 'peofession'
  };

  export type ProprietaireScalarFieldEnum = (typeof ProprietaireScalarFieldEnum)[keyof typeof ProprietaireScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id_categorie: 'id_categorie',
    label_categorie: 'label_categorie'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id_USER?: IntFilter | number
    password?: StringFilter | string
    email?: StringFilter | string
    nom?: StringFilter | string
    prenom?: StringFilter | string
    fonction?: StringFilter | string
    role?: BoolFilter | boolean
  }

  export type UserOrderByWithRelationInput = {
    id_USER?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id_USER?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id_USER?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id_USER?: IntWithAggregatesFilter | number
    password?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    nom?: StringWithAggregatesFilter | string
    prenom?: StringWithAggregatesFilter | string
    fonction?: StringWithAggregatesFilter | string
    role?: BoolWithAggregatesFilter | boolean
  }

  export type ArticleWhereInput = {
    AND?: Enumerable<ArticleWhereInput>
    OR?: Enumerable<ArticleWhereInput>
    NOT?: Enumerable<ArticleWhereInput>
    id_Article?: IntFilter | number
    labelArticle?: StringFilter | string
    quantite?: IntFilter | number
    etat?: BoolFilter | boolean
    id_Categorie?: IntFilter | number
  }

  export type ArticleOrderByWithRelationInput = {
    id_Article?: SortOrder
    labelArticle?: SortOrder
    quantite?: SortOrder
    etat?: SortOrder
    id_Categorie?: SortOrder
  }

  export type ArticleWhereUniqueInput = {
    id_Article?: number
  }

  export type ArticleOrderByWithAggregationInput = {
    id_Article?: SortOrder
    labelArticle?: SortOrder
    quantite?: SortOrder
    etat?: SortOrder
    id_Categorie?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    id_Article?: IntWithAggregatesFilter | number
    labelArticle?: StringWithAggregatesFilter | string
    quantite?: IntWithAggregatesFilter | number
    etat?: BoolWithAggregatesFilter | boolean
    id_Categorie?: IntWithAggregatesFilter | number
  }

  export type AffectationWhereInput = {
    AND?: Enumerable<AffectationWhereInput>
    OR?: Enumerable<AffectationWhereInput>
    NOT?: Enumerable<AffectationWhereInput>
    id_Affectation?: IntFilter | number
    type_Affectation?: StringFilter | string
    quantite?: IntFilter | number
    proprietaire?: StringFilter | string
    date_Affectation?: DateTimeFilter | Date | string
  }

  export type AffectationOrderByWithRelationInput = {
    id_Affectation?: SortOrder
    type_Affectation?: SortOrder
    quantite?: SortOrder
    proprietaire?: SortOrder
    date_Affectation?: SortOrder
  }

  export type AffectationWhereUniqueInput = {
    id_Affectation?: number
  }

  export type AffectationOrderByWithAggregationInput = {
    id_Affectation?: SortOrder
    type_Affectation?: SortOrder
    quantite?: SortOrder
    proprietaire?: SortOrder
    date_Affectation?: SortOrder
    _count?: AffectationCountOrderByAggregateInput
    _avg?: AffectationAvgOrderByAggregateInput
    _max?: AffectationMaxOrderByAggregateInput
    _min?: AffectationMinOrderByAggregateInput
    _sum?: AffectationSumOrderByAggregateInput
  }

  export type AffectationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AffectationScalarWhereWithAggregatesInput>
    OR?: Enumerable<AffectationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AffectationScalarWhereWithAggregatesInput>
    id_Affectation?: IntWithAggregatesFilter | number
    type_Affectation?: StringWithAggregatesFilter | string
    quantite?: IntWithAggregatesFilter | number
    proprietaire?: StringWithAggregatesFilter | string
    date_Affectation?: DateTimeWithAggregatesFilter | Date | string
  }

  export type proprietaireWhereInput = {
    AND?: Enumerable<proprietaireWhereInput>
    OR?: Enumerable<proprietaireWhereInput>
    NOT?: Enumerable<proprietaireWhereInput>
    id_prop?: IntFilter | number
    nom_prop?: StringFilter | string
    prenom_prop?: StringFilter | string
    cin_prop?: IntFilter | number
    peofession?: StringFilter | string
  }

  export type proprietaireOrderByWithRelationInput = {
    id_prop?: SortOrder
    nom_prop?: SortOrder
    prenom_prop?: SortOrder
    cin_prop?: SortOrder
    peofession?: SortOrder
  }

  export type proprietaireWhereUniqueInput = {
    id_prop?: number
  }

  export type proprietaireOrderByWithAggregationInput = {
    id_prop?: SortOrder
    nom_prop?: SortOrder
    prenom_prop?: SortOrder
    cin_prop?: SortOrder
    peofession?: SortOrder
    _count?: proprietaireCountOrderByAggregateInput
    _avg?: proprietaireAvgOrderByAggregateInput
    _max?: proprietaireMaxOrderByAggregateInput
    _min?: proprietaireMinOrderByAggregateInput
    _sum?: proprietaireSumOrderByAggregateInput
  }

  export type proprietaireScalarWhereWithAggregatesInput = {
    AND?: Enumerable<proprietaireScalarWhereWithAggregatesInput>
    OR?: Enumerable<proprietaireScalarWhereWithAggregatesInput>
    NOT?: Enumerable<proprietaireScalarWhereWithAggregatesInput>
    id_prop?: IntWithAggregatesFilter | number
    nom_prop?: StringWithAggregatesFilter | string
    prenom_prop?: StringWithAggregatesFilter | string
    cin_prop?: IntWithAggregatesFilter | number
    peofession?: StringWithAggregatesFilter | string
  }

  export type categorieWhereInput = {
    AND?: Enumerable<categorieWhereInput>
    OR?: Enumerable<categorieWhereInput>
    NOT?: Enumerable<categorieWhereInput>
    id_categorie?: IntFilter | number
    label_categorie?: StringFilter | string
  }

  export type categorieOrderByWithRelationInput = {
    id_categorie?: SortOrder
    label_categorie?: SortOrder
  }

  export type categorieWhereUniqueInput = {
    id_categorie?: number
  }

  export type categorieOrderByWithAggregationInput = {
    id_categorie?: SortOrder
    label_categorie?: SortOrder
    _count?: categorieCountOrderByAggregateInput
    _avg?: categorieAvgOrderByAggregateInput
    _max?: categorieMaxOrderByAggregateInput
    _min?: categorieMinOrderByAggregateInput
    _sum?: categorieSumOrderByAggregateInput
  }

  export type categorieScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categorieScalarWhereWithAggregatesInput>
    OR?: Enumerable<categorieScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categorieScalarWhereWithAggregatesInput>
    id_categorie?: IntWithAggregatesFilter | number
    label_categorie?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    password: string
    email: string
    nom: string
    prenom: string
    fonction: string
    role?: boolean
  }

  export type UserUncheckedCreateInput = {
    id_USER?: number
    password: string
    email: string
    nom: string
    prenom: string
    fonction: string
    role?: boolean
  }

  export type UserUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateInput = {
    id_USER?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyInput = {
    id_USER?: number
    password: string
    email: string
    nom: string
    prenom: string
    fonction: string
    role?: boolean
  }

  export type UserUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id_USER?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArticleCreateInput = {
    labelArticle: string
    quantite: number
    etat?: boolean
    id_Categorie: number
  }

  export type ArticleUncheckedCreateInput = {
    id_Article?: number
    labelArticle: string
    quantite: number
    etat?: boolean
    id_Categorie: number
  }

  export type ArticleUpdateInput = {
    labelArticle?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    etat?: BoolFieldUpdateOperationsInput | boolean
    id_Categorie?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleUncheckedUpdateInput = {
    id_Article?: IntFieldUpdateOperationsInput | number
    labelArticle?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    etat?: BoolFieldUpdateOperationsInput | boolean
    id_Categorie?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCreateManyInput = {
    id_Article?: number
    labelArticle: string
    quantite: number
    etat?: boolean
    id_Categorie: number
  }

  export type ArticleUpdateManyMutationInput = {
    labelArticle?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    etat?: BoolFieldUpdateOperationsInput | boolean
    id_Categorie?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleUncheckedUpdateManyInput = {
    id_Article?: IntFieldUpdateOperationsInput | number
    labelArticle?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    etat?: BoolFieldUpdateOperationsInput | boolean
    id_Categorie?: IntFieldUpdateOperationsInput | number
  }

  export type AffectationCreateInput = {
    type_Affectation: string
    quantite: number
    proprietaire: string
    date_Affectation: Date | string
  }

  export type AffectationUncheckedCreateInput = {
    id_Affectation?: number
    type_Affectation: string
    quantite: number
    proprietaire: string
    date_Affectation: Date | string
  }

  export type AffectationUpdateInput = {
    type_Affectation?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    proprietaire?: StringFieldUpdateOperationsInput | string
    date_Affectation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffectationUncheckedUpdateInput = {
    id_Affectation?: IntFieldUpdateOperationsInput | number
    type_Affectation?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    proprietaire?: StringFieldUpdateOperationsInput | string
    date_Affectation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffectationCreateManyInput = {
    id_Affectation?: number
    type_Affectation: string
    quantite: number
    proprietaire: string
    date_Affectation: Date | string
  }

  export type AffectationUpdateManyMutationInput = {
    type_Affectation?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    proprietaire?: StringFieldUpdateOperationsInput | string
    date_Affectation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffectationUncheckedUpdateManyInput = {
    id_Affectation?: IntFieldUpdateOperationsInput | number
    type_Affectation?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    proprietaire?: StringFieldUpdateOperationsInput | string
    date_Affectation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proprietaireCreateInput = {
    nom_prop: string
    prenom_prop: string
    cin_prop: number
    peofession: string
  }

  export type proprietaireUncheckedCreateInput = {
    id_prop?: number
    nom_prop: string
    prenom_prop: string
    cin_prop: number
    peofession: string
  }

  export type proprietaireUpdateInput = {
    nom_prop?: StringFieldUpdateOperationsInput | string
    prenom_prop?: StringFieldUpdateOperationsInput | string
    cin_prop?: IntFieldUpdateOperationsInput | number
    peofession?: StringFieldUpdateOperationsInput | string
  }

  export type proprietaireUncheckedUpdateInput = {
    id_prop?: IntFieldUpdateOperationsInput | number
    nom_prop?: StringFieldUpdateOperationsInput | string
    prenom_prop?: StringFieldUpdateOperationsInput | string
    cin_prop?: IntFieldUpdateOperationsInput | number
    peofession?: StringFieldUpdateOperationsInput | string
  }

  export type proprietaireCreateManyInput = {
    id_prop?: number
    nom_prop: string
    prenom_prop: string
    cin_prop: number
    peofession: string
  }

  export type proprietaireUpdateManyMutationInput = {
    nom_prop?: StringFieldUpdateOperationsInput | string
    prenom_prop?: StringFieldUpdateOperationsInput | string
    cin_prop?: IntFieldUpdateOperationsInput | number
    peofession?: StringFieldUpdateOperationsInput | string
  }

  export type proprietaireUncheckedUpdateManyInput = {
    id_prop?: IntFieldUpdateOperationsInput | number
    nom_prop?: StringFieldUpdateOperationsInput | string
    prenom_prop?: StringFieldUpdateOperationsInput | string
    cin_prop?: IntFieldUpdateOperationsInput | number
    peofession?: StringFieldUpdateOperationsInput | string
  }

  export type categorieCreateInput = {
    label_categorie: string
  }

  export type categorieUncheckedCreateInput = {
    id_categorie?: number
    label_categorie: string
  }

  export type categorieUpdateInput = {
    label_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type categorieUncheckedUpdateInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    label_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type categorieCreateManyInput = {
    id_categorie?: number
    label_categorie: string
  }

  export type categorieUpdateManyMutationInput = {
    label_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type categorieUncheckedUpdateManyInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    label_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserCountOrderByAggregateInput = {
    id_USER?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id_USER?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id_USER?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id_USER?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id_USER?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ArticleCountOrderByAggregateInput = {
    id_Article?: SortOrder
    labelArticle?: SortOrder
    quantite?: SortOrder
    etat?: SortOrder
    id_Categorie?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id_Article?: SortOrder
    quantite?: SortOrder
    id_Categorie?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id_Article?: SortOrder
    labelArticle?: SortOrder
    quantite?: SortOrder
    etat?: SortOrder
    id_Categorie?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id_Article?: SortOrder
    labelArticle?: SortOrder
    quantite?: SortOrder
    etat?: SortOrder
    id_Categorie?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id_Article?: SortOrder
    quantite?: SortOrder
    id_Categorie?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type AffectationCountOrderByAggregateInput = {
    id_Affectation?: SortOrder
    type_Affectation?: SortOrder
    quantite?: SortOrder
    proprietaire?: SortOrder
    date_Affectation?: SortOrder
  }

  export type AffectationAvgOrderByAggregateInput = {
    id_Affectation?: SortOrder
    quantite?: SortOrder
  }

  export type AffectationMaxOrderByAggregateInput = {
    id_Affectation?: SortOrder
    type_Affectation?: SortOrder
    quantite?: SortOrder
    proprietaire?: SortOrder
    date_Affectation?: SortOrder
  }

  export type AffectationMinOrderByAggregateInput = {
    id_Affectation?: SortOrder
    type_Affectation?: SortOrder
    quantite?: SortOrder
    proprietaire?: SortOrder
    date_Affectation?: SortOrder
  }

  export type AffectationSumOrderByAggregateInput = {
    id_Affectation?: SortOrder
    quantite?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type proprietaireCountOrderByAggregateInput = {
    id_prop?: SortOrder
    nom_prop?: SortOrder
    prenom_prop?: SortOrder
    cin_prop?: SortOrder
    peofession?: SortOrder
  }

  export type proprietaireAvgOrderByAggregateInput = {
    id_prop?: SortOrder
    cin_prop?: SortOrder
  }

  export type proprietaireMaxOrderByAggregateInput = {
    id_prop?: SortOrder
    nom_prop?: SortOrder
    prenom_prop?: SortOrder
    cin_prop?: SortOrder
    peofession?: SortOrder
  }

  export type proprietaireMinOrderByAggregateInput = {
    id_prop?: SortOrder
    nom_prop?: SortOrder
    prenom_prop?: SortOrder
    cin_prop?: SortOrder
    peofession?: SortOrder
  }

  export type proprietaireSumOrderByAggregateInput = {
    id_prop?: SortOrder
    cin_prop?: SortOrder
  }

  export type categorieCountOrderByAggregateInput = {
    id_categorie?: SortOrder
    label_categorie?: SortOrder
  }

  export type categorieAvgOrderByAggregateInput = {
    id_categorie?: SortOrder
  }

  export type categorieMaxOrderByAggregateInput = {
    id_categorie?: SortOrder
    label_categorie?: SortOrder
  }

  export type categorieMinOrderByAggregateInput = {
    id_categorie?: SortOrder
    label_categorie?: SortOrder
  }

  export type categorieSumOrderByAggregateInput = {
    id_categorie?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}