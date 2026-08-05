{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = inputs: {
    formatter."x86_64-linux" = inputs.nixpkgs.legacyPackages."x86_64-linux".nixfmt-tree;
    devShells."x86_64-linux".default = inputs.nixpkgs.legacyPackages."x86_64-linux".mkShell {
      packages = with inputs.nixpkgs.legacyPackages."x86_64-linux"; [
        nodejs
      ];
    };
  };
}
