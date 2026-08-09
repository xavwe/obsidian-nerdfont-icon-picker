#!/usr/bin/env bash

tmpdir=$(mktemp -d)
curl "https://raw.githubusercontent.com/ryanoasis/nerd-fonts/refs/heads/master/glyphnames.json" -o $tmpdir/glyphnames.json
cat "$tmpdir/glyphnames.json" | jq 'del(.METADATA) | to_entries | map({title: .key, icon: .value.char})' > ./src/icons.json
