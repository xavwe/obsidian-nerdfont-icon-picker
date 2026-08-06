#!/usr/bin/env bash

tmpdir=$(mktemp -d)
git clone --quiet --depth 1 --single-branch --branch master --filter=blob:none "https://github.com/ryanoasis/nerd-fonts" "$tmpdir"
(cd "$tmpdir/bin/scripts" && ./generate-css.sh)  > /dev/null 2>&1
cat "$tmpdir/glyphnames.json" | jq 'del(.METADATA) | to_entries | map({title: .key, icon: .value.char})' > ./src/icons.json
