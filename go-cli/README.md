# loppee-business-cli

boru-driven command-line client **and** interactive REPL for the LoppeeBusiness
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/loppee-business-cli)
make build

# 2. See usage (words, entities, env vars)
./loppee-business-cli --help

# 3. Provide credentials once, via the environment
export LOPPEE_BUSINESS_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./loppee-business-cli list agent_integration

# 5. Override the API base URL for a single call
LOPPEE_BUSINESS_BASE=https://api.example.com ./loppee-business-cli --help

# 6. No arguments -> interactive REPL
./loppee-business-cli
loppee-business> /help
loppee-business> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/loppee-business-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export LOPPEE_BUSINESS_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/loppee-business-cli --help
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export LOPPEE_BUSINESS_APIKEY=sk_live_xxx            # API key
export LOPPEE_BUSINESS_BASE=https://api.example.com  # optional: override the API base URL
./loppee-business-cli --help
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `loppee-business>`). Each line is
evaluated as its own boru expression:

```text
$ ./loppee-business-cli
loppee-business> /help
loppee-business> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 62 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `agent_access`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `LOPPEE_BUSINESS_APIKEY` | API key sent with every request. |
| `LOPPEE_BUSINESS_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/loppee-business-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 62 entities this SDK exposes (any is valid as `<entity>`):

agent_access agent_capability agent_connection_test agent_integration agent_monitoring agent_openapi agent_policy anonymous_location_proof_revocation business_application business_claim business_deal business_index business_owner business_review chat_attachment chat_attachment_url claim_verification_send claim_verification_verify commercial_click contact_recorded conversation conversation_close conversation_report conversation_workflow create_agent_api_key customer customer_account customer_location_proof_revocation destination_address_suggestion destination_location_proof domain_trust_card geo_context health job_application job_resume_signed_url location_handoff message moderated_action open_api_document operation owner_notification owner_notification_setting owner_webhook_endpoint owner_webhook_registration pricing promote_verified_transaction public_content recommend review revoke save_business saved_business saved_location search suggest support_internal_note support_workflow taxonomy_suggestion trust_card unsave_business update_agent_billing_account withdraw_job_application

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./loppee-business-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
