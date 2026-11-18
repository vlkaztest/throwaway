# hb-clone-test

Minimal Vite app used to test whether cloning a public repository into an Arc Studio
sandbox executes the repository's `vite.config.ts` (build or dev-server start).

The only side effect is a benign marker:

- `/tmp/hb_clone_marker`
- `public/hb_clone_marker` (served at `/hb_clone_marker`)

No secrets are read and nothing is sent to the network.

Upload the **contents of this folder** (not the folder itself) to the root of a public
GitHub repository.
